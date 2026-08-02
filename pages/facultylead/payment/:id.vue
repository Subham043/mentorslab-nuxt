<template>
  <div>
    <div v-if="showInitialLoading" class="payment-loading">
      <div class="loading-card">
        <i class="el-icon-loading spinner"></i>

        <h2>Loading Payment Gateway</h2>

        <p>
          Please wait while we securely connect you to the payment gateway.
          Do not refresh or close this page.
        </p>
      </div>
    </div>
    <div v-if="showLoading" class="payment-loading">
      <div class="loading-card">
        <i class="el-icon-loading spinner"></i>

        <h2>Verifying Payment</h2>

        <p>
          Please wait while we verify your payment. Do not refresh or close this
          page.
        </p>
      </div>
    </div>
    <el-container v-if="showPaymentStatus" class="payment-container">
      <div class="payment-card">
        <div
          class="icon" :class="{
          success: paymentStatus === 'success',
          failed: paymentStatus === 'failed'
        }">
          {{ paymentStatus === "success" ? "✓" : "✕" }}
        </div>

        <h1>
          {{
            paymentStatus === "success"
              ? "Payment Completed"
              : "Payment Failed"
          }}
        </h1>

        <p>
          {{
            paymentStatus === "success"
              ? "Your payment has been processed successfully."
              : "Unfortunately your payment could not be completed."
          }}
        </p>

        <div class="countdown">
          Redirecting in <strong>{{ countdown }}</strong>
          seconds...
        </div>

        <el-button type="primary" round style="margin-top: 20px;" @click="redirectNow">
          Continue Now
        </el-button>
      </div>
    </el-container>
    <el-container v-if="error" class="payment-container">
      <div class="payment-card">
        <div class="icon failed">
          ✕
        </div>

        <h1>
          Invalid Order ID
        </h1>

        <p>
          The order ID provided is invalid. Please check the link and try again.
        </p>

        <div class="countdown">
          Redirecting in <strong>{{ countdown }}</strong>
          seconds...
        </div>

        <el-button type="primary" round style="margin-top: 20px;" @click="redirectNow">
          Go Back
        </el-button>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "FacultyLeadPaymentPage",
  data() {
    return {
      showInitialLoading: false,
      showLoading: false,
      showPaymentStatus: false,
      error: false,
      paymentStatus: "failed", // success | failed
      countdown: 5,
      timer: null,
      razorpay_order_id: null,
    };
  },
  head: {
    script: [
      { src: 'https://checkout.razorpay.com/v1/checkout.js' },
    ],
  },
  mounted() {
    this.getPaymentData();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    startCountdown() {
      this.timer = setInterval(() => {
        this.countdown--;

        if (this.countdown <= 0) {
          clearInterval(this.timer);
          this.redirectNow();
        }
      }, 1000);
    },
    redirectNow() {
      window.location.href = "https://facultyleads.com/employer/subscriptions";
    },
    loadRazorpay(amount, orderId, name, email) {
      const options = {
        key: "rzp_live_TIAHXeQCyjJbT2",
        amount,
        currency: "INR",
        name: "Faculty Lead",
        description: "Payment for Faculty Lead Subscription",
        image: "https://www.edumentorslab.com/apple-touch-icon.png",
        order_id: orderId,
        prefill: {
          name,
          email,
        },
        theme: {
          color: "#000000" // Set your website theme color
        },
        modal: {
            backdropclose: false,
            escape: false,
            handleback: true,
            confirm_close: true,
            ondismiss: () => {
              this.paymentCancelled();
            }
        },
        retry: {
            enabled: false,
            max_attempts: 0,
        },
        handler: (response) => {
          this.verifyPayment(response)
        }
      };

      // eslint-disable-next-line no-undef
      const rzp = new Razorpay(options);

      rzp.on("payment.failed", function (response) {
        this.paymentFailed(response.error.metadata.order_id, response.error.metadata.payment_id)
      });

      rzp.open();
    },
    async getPaymentData() {
      this.showInitialLoading = true;
      try {
        const response = await this.$facultyLeadApi.get("/employer-subscription/" + this.$route.params.id); // eslint-disable-line
        if(response.data.data.status==="pending"){
          this.razorpay_order_id = response.data.data.payment_transaction.gateway_order_id;
          this.loadRazorpay(response.data.data.payment_transaction.amount, response.data.data.payment_transaction.gateway_order_id, response.data.data.user.name, response.data.data.user.email);
        }else{
          this.error = true;
          this.startCountdown();
        }
      }
      catch (err) {
        this.error = true;
        this.startCountdown();
      }
      finally {
        this.showInitialLoading = false;
      }
    },
    async paymentCancelled() {
      this.showLoading = true;
      try {
        await this.$facultyLeadApi.post("/employer-subscription/payment-cancelled", {
          subscription_id: this.$route.params.id,
          razorpay_order_id: this.razorpay_order_id,
        }); // eslint-disable-line

        this.showPaymentStatus = true;
        this.paymentStatus = "failed";
        this.startCountdown();

      }
      catch (err) {
        this.error = true;
        this.startCountdown();
      }
      finally {
        this.showLoading = false;
      }
    },
    async paymentFailed(orderId, paymentId) {
      this.showLoading = true;
      try {
        await this.$facultyLeadApi.post("/employer-subscription/payment-failed", {
          subscription_id: this.$route.params.id,
          razorpay_order_id: orderId,
          razorpay_payment_id: paymentId,
        }); // eslint-disable-line

        this.showPaymentStatus = true;
        this.paymentStatus = "failed";
        this.startCountdown();

      }
      catch (err) {
        this.error = true;
        this.startCountdown();
      }
      finally {
        this.showLoading = false;
      }
    },
    async verifyPayment(response) {
      this.showLoading = true;
      try {
        await this.$facultyLeadApi.post("/employer-subscription/verify", {
          subscription_id: this.$route.params.id,
          ...response
        }); // eslint-disable-line

        this.showPaymentStatus = true;
        this.paymentStatus = "success";
        this.startCountdown();

      }
      catch (err) {
        // console.log(err.response);// eslint-disable-line
        this.error = true;
        this.startCountdown();
      }
      finally {
        this.showLoading = false;
      }
    },
  }
}
</script>

<style scoped>
.payment-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f5f7fa;
  padding: 20px;
}

.loading-card {
  background: #ffffff;
  padding: 40px 50px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  text-align: center;
  max-width: 420px;
  width: 100%;
}

.spinner {
  font-size: 48px;
  color: #409eff;
  margin-bottom: 20px;
}

h2 {
  margin: 0 0 12px;
  font-size: 24px;
  color: #303133;
  font-weight: 600;
}

p {
  margin: 0;
  color: #606266;
  font-size: 15px;
  line-height: 1.6;
}

.payment-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  background: #f5f7fa;
}

.payment-card {
  width: 420px;
  max-width: 90%;
  padding: 40px;
  border-radius: 16px;
  background: white;
  text-align: center;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
}

.icon {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 55px;
  font-weight: bold;

  animation: pop 0.5s ease;
}

.success {
  background: #2ecc71;
  box-shadow: 0 0 0 rgba(46, 204, 113, .6);
  animation:
    pop .5s ease,
    pulse-success 2s infinite;
}

.failed {
  background: #e74c3c;
  box-shadow: 0 0 0 rgba(231, 76, 60, .6);
  animation:
    pop .5s ease,
    pulse-failed 2s infinite;
}

h1 {
  margin-top: 30px;
  font-size: 30px;
  color: #333;
}

@keyframes pop {
  0% {
    transform: scale(.2);
    opacity: 0;
  }

  80% {
    transform: scale(1.15);
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes pulse-success {
  0% {
    box-shadow: 0 0 0 0 rgba(46, 204, 113, .6);
  }

  70% {
    box-shadow: 0 0 0 25px rgba(46, 204, 113, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);
  }
}

@keyframes pulse-failed {
  0% {
    box-shadow: 0 0 0 0 rgba(231, 76, 60, .6);
  }

  70% {
    box-shadow: 0 0 0 25px rgba(231, 76, 60, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(231, 76, 60, 0);
  }
}
</style>
