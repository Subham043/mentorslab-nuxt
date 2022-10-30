<template>
    <div>
    <section class="content">
        <div class="box-header d-flex justify-content-between align-items-center box-header-user">
            <UserCrumbComponent main-page="Live Session Content" current-page="Detail" />
        </div>
        <div v-if="loading" class="row">
            <div v-for="(n) in skeletonCount" :key="n" class="col-md-6 col-lg-3">
                <LiveContentCardSkeletonComponent />
            </div>
        </div>
        <div v-else class="row">
            <LiveContentDetailComponent
            :id="id" 
            :uuid="uuid" 
            :name="name" 
            :heading="heading" 
            :paid="paid" 
            :purchased="purchased" 
            :amount="amount" 
            :paragraph="description"
            @payment-click="makePayment"
            />
        </div>
    
    </section>
    </div>
  </template>
  
  <script>
  import UserCrumbComponent from '~/components/UserCrumbComponent.vue'
  import LiveContentCardSkeletonComponent from '~/components/LiveContentCardSkeletonComponent.vue';
import LiveContentDetailComponent from '~/components/LiveContentDetailComponent.vue';
  export default {
    name: "UserContentDetailPage",
    components: { UserCrumbComponent, LiveContentCardSkeletonComponent, LiveContentDetailComponent },
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
            loading:false,
            skeletonCount:4,
        }
    },
    head: {
        script: [
        { src: 'https://checkout.razorpay.com/v1/checkout.js' },
        ],
    },
    mounted(){
        this.checkId()
    },
    methods:{
        async checkId(){
            this.loading=true
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
                }
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                this.$router.push('/content/all');
            } finally{
                this.loading=false
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
  