<template>
    <div>
    <section class="content">
        <div class="box-header d-flex justify-content-between align-items-center box-header-user">
            <UserCrumbComponent main-page="Live Session Content" current-page="Detail" />
        </div>
        <div class="row">
            <LiveContentDetailComponent
            :id="id" 
            :uuid="uuid" 
            :name="name" 
            :heading="heading" 
            :paid="paid" 
            :purchased="purchased" 
            :amount="amount" 
            :paragraph="description"
            :status="status"
            :scheduled-on="scheduledOn"
            :scheduled-at="scheduledAt"
            :assigned-role="assignedRole"
            @payment-click="makePayment"
            @request-session-click="requestSession"
            />
        </div>
    
    </section>
    </div>
  </template>
  
  <script>
  import UserCrumbComponent from '~/components/UserCrumbComponent.vue'
import LiveContentDetailComponent from '~/components/LiveContentDetailComponent.vue';
  export default {
    name: "UserContentDetailPage",
    components: { UserCrumbComponent, LiveContentDetailComponent },
    layout: "UserLayout",
    data() {
        return {
            id: 0,
            uuid: '',
            name: '',
            heading: '',
            description: '',
            amount: '',
            paid: false,
            purchased: false,
            status: '',
            assignedRole: '',
            scheduledOn: '',
            scheduledAt: '',
        }
    },
    head: {
        script: [
        { src: 'https://checkout.razorpay.com/v1/checkout.js' },
        ],
    },
    mounted(){
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if(process.client){
            this.$scrollTo('#__nuxt', 0, {force: true})
        }
        this.checkId()
    },
    methods:{
        async checkId(){
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            if(!this.$route.params.id){
                this.$toast.error('Invalid ID')
                this.$router.push('/live-session-content/all');
            }
            try {
                const response = await this.$privateApi.get('/live-session-content-user/'+this.$route.params.id); // eslint-disable-line
                this.id = response.data.data.id;
                this.uuid = response.data.data.uuid;
                this.name = response.data.data.name;
                this.heading = response.data.data.heading;
                this.description = response.data.data.description;
                this.paid = response.data.data.paid;
                this.amount = response.data.data.amount;
                if(response.data.data.LiveSessionContentAssigned && response.data.data.LiveSessionContentAssigned.length>0){
                    this.purchased = true;
                    this.status = response.data.data.LiveSessionContentAssigned[0].status
                    this.scheduledOn = response.data.data.LiveSessionContentAssigned[0].scheduledOn
                    this.scheduledAt = response.data.data.LiveSessionContentAssigned[0].scheduledAt
                    this.assignedRole = response.data.data.LiveSessionContentAssigned[0].assignedRole
                }
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                this.$router.push('/content/all');
            } finally{
                loading.close()
            }
        },
        async requestSession(){
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$privateApi.get('/live-session-content-user/request-session/'+this.$route.params.id); // eslint-disable-line
                this.checkId()
                this.$toast.success(response.data.data)
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            } finally{
                loading.close()
            }
        },
        async makePayment(){
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$privateApi.get('/live-session-content-user/generate-payment-order/'+this.$route.params.id); // eslint-disable-line
                this.loadRazorpay(response.data.data)
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            } finally{
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
                name: this.$auth.user.name,
                email: this.$auth.user.email,
                contact: this.$auth.user.phone
                },
                theme: {
                color: "#000000" // Set your website theme color
                },
                handler: async (response) => {
                await this.verifyPayment(response)
                }
            };

            // eslint-disable-next-line no-undef
            const rzp = new Razorpay(options);
            rzp.open();
        },
        async verifyPayment(data){
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$privateApi.post('/live-session-content-user/verify-payment/',{
                    razorpayOrderId: data.razorpay_order_id,
                    razorpayPaymentId: data.razorpay_payment_id,
                    signature: data.razorpay_signature,
                }); // eslint-disable-line
                this.$toast.success(response.data.data.message)
                this.checkId()
            } catch (err) {
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
    .box-header-user{
        padding: 1.5rem 0;
    }
  </style>
  