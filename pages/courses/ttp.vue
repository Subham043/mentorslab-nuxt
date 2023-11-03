<template>
    <div>

      <div class="ittc-banner">
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-sm-12 mb-5">
              <h1>
                Train the Trainer Program_Teacher Mentor
              </h1>
              <h3>Become a Certified Trainer and a Teacher-Mentor</h3>
              <button class="btn mb-5" @click="dialogFormVisible = true">Apply Now</button>
            </div>
            <div class="col-md-5 col-sm-12">
              <img src="/images/ttp.jpeg" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="py-5 detail">
        <div class="container">
          <div class="row">
            <div class="col-12 mb-5">
              <div class="section-title section-devider text-center">
                  <h2 class="title">WHY CHOOSE TTP ?</h2>
              </div>
            </div>
            <div class="col-md-12 col-sm-12">
              <p>The most important role of a great Teacher-Mentor is to connect with students and build a professional relationship that encourages continuous support, helping students develop into a successful professional.</p>
              <p>Emotional health and well-being of students are key to create meaningful learning environment in future and this is becoming a huge task for Teachers.</p>
              <p>I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”</p>
              <button class="btn" @click="dialogFormVisible = true">Apply Now</button>
            </div>
          </div>
        </div>
      </div>

      <el-dialog title="Register" :visible.sync="dialogFormVisible">
            <div>
                <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                    <form class="form" method="post" @submit.prevent="handleSubmit(formHandler)">
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <ValidationProvider v-slot="{ classes, errors }" rules="required" name="name">
                                    <div class="form-group">
                                        <label class="form-label">Name *</label>
                                        <el-input v-model="name" style="width: 100%;" placeholder="Enter Name"></el-input>
                                    </div>
                                    <span :class="classes">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-12 mb-2">
                                <ValidationProvider v-slot="{ classes, errors }" rules="required|email" name="email">
                                    <div class="form-group">
                                        <label class="form-label">Email *</label>
                                        <el-input v-model="email" style="width: 100%;" placeholder="Enter Email"></el-input>
                                    </div>
                                    <span :class="classes">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-12 mb-2">
                                <ValidationProvider v-slot="{ classes, errors }" rules="required" name="phone">
                                    <div class="form-group">
                                        <label class="form-label">Phone *</label>
                                        <el-input v-model="phone" style="width: 100%;" placeholder="Enter Phone"></el-input>
                                    </div>
                                    <span :class="classes">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-12 mb-2">
                                <ValidationProvider v-slot="{ classes, errors }" rules="required" name="message">
                                    <div class="form-group">
                                        <label class="form-label">Message *</label>
                                        <el-input v-model="message" type="textarea" :row="10" style="width: 100%;" placeholder="Enter Message"></el-input>
                                    </div>
                                    <span :class="classes">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-12">
                                <button class="btn" type="submit">Register Now @ Rs. 500</button>
                            </div>
                        </div>
                    </form>
                </ValidationObserver>
            </div>
        </el-dialog>



    </div>
</template>

<script>

export default {
    name: "TtpPage",
    layout: "FrontendLayout",
    data() {
        return {
          dialogFormVisible: false,
          name: "",
          email: "",
          phone: "",
          message: "",
        };
    },
    head: {
        script: [
            { src: 'https://checkout.razorpay.com/v1/checkout.js' },
        ],
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    methods: {
      nextTestimonialNavClick(){
          this.$refs.slickTestimonial.next()
      },
      prevTestimonialNavClick(){
          this.$refs.slickTestimonial.prev()
      },
      async formHandler() {
          const loading = this.$loading({
          lock: true,
          fullscreen: true,
          });
          try {
              const validate = await this.$publicApi.post('/ttp-user/validate/',{ // eslint-disable-line
                  name: this.name,
                  email: this.email,
                  phone: this.phone,
                  message: this.message,
              }); // eslint-disable-line

                const response = await this.$publicApi.get('/ttp-user/generate-payment-order'); // eslint-disable-line
                this.loadRazorpay(response.data.data)
              // console.log(response);// eslint-disable-line
          } catch (err) {
              // console.log(err.response);// eslint-disable-line
              this.$refs.form.setErrors({
                email: err?.response?.data?.form_error?.email,
                message: err?.response?.data?.form_error?.message,
                name: err?.response?.data?.form_error?.name,
                phone: err?.response?.data?.form_error?.phone,
              });
              if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
              if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

          }finally{
              loading.close()
          }
      },
      loadRazorpay(data){
          const options = {
                  key: this.$config.RAZORPAY_KEY_ID,
                  amount: data.amount,
                  currency: data.currency,
                  description: "Payment description",
                  order_id: data.id,
                  prefill: {
                  name: this.name,
                  email: this.email,
                  contact: this.phone
              },
              theme: {
                  color: "#000000" // Set your website theme color
              },
              handler: async (response) => {
                  await this.verifyPayment(response, data)
              }
          };

          // eslint-disable-next-line no-undef
          const rzp = new Razorpay(options);
          rzp.open();
      },
      async verifyPayment(data, order){
          const loading = this.$loading({
              lock: true,
              fullscreen: true,
          });
          try {
              const response = await this.$publicApi.post('/ttp-user/verify-payment',{
                  razorpayOrderId: data.razorpay_order_id,
                  razorpayPaymentId: data.razorpay_payment_id,
                  signature: data.razorpay_signature,
                  name: this.name,
                  email: this.email,
                  phone: this.phone,
                  message: this.message,
                  receipt: order.receipt,
              }); // eslint-disable-line
              this.$toast.success(response.data.data.message)
              this.name=''
              this.email=''
              this.phone=''
              this.message=''
              this.$refs.form.reset()
              this.dialogFormVisible = false;
          } catch (err) {
              this.$refs.form.setErrors({
                  email: err?.response?.data?.form_error?.email,
                  message: err?.response?.data?.form_error?.message,
                  name: err?.response?.data?.form_error?.name,
                  phone: err?.response?.data?.form_error?.phone,
              });
              if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
              if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
          } finally{
              loading.close()
          }
      }
    }
}
</script>

<style scoped>
img {
    max-width: 100%;
    width: 100%;
}
.ittc-banner{
  position: relative;
  background-color: #027ec2;
  z-index: 2;
  padding-top: 150px;
}
.ittc-banner .container{
  position: relative;
  z-index: 3;
}
.ittc-banner h1{
  color: white;
}
.ittc-banner h3{
  color: white;
  font-weight: normal;
  margin-top: 20px;
}
.ittc-banner .btn{
  margin-top: 30px;
  background-color: white;
  border-color: white;
  color: #027ec2;
}
.ittc-banner::before {
	content: "";
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	border-style: solid;
	border-color: transparent;
	border-width: 20vh 80vw;
	border-bottom-color: white;
	border-right-color: white;
  z-index: 1;
}
.swiper-container{
    position: relative;
}

.section-devider::before{
  top: unset;
  bottom: -10px;
  background:#ec3237;
  border-radius: 10px;
  height: 5px;
}
.section-title .title{
  color: #027ec2;
  font-weight: 400;
  font-size: 30px;
}
.detail p{
  text-align: justify;
  margin-bottom: 10px;
}
.shape_bg_div{
  background:#dde8fa;
}
.icon_shap_col{
  background-color: #0d96e2;
  color: white;
  font-size: 45px;
  width: 100%;
  height: 100%;
  display: inline-block;
  padding: 10px;
  border-radius: 50%;
}
.icon_main_shap_col{
  width: auto;
  height: auto;
  display: inline-block;
  border: 2px dashed #0d96e2;
  padding: 5px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
}
.shape_bg_div .col-lg-4{
  width: 30%;
}
</style>
