<template>
    <div>
    <section class="content">
        <div class="box-header d-flex justify-content-between align-items-center box-header-user">
            <UserCrumbComponent main-page="Content" current-page="Detail" />
        </div>
        <div v-if="loading" class="row">
            <div v-for="(n) in skeletonCount" :key="n" class="col-md-6 col-lg-3">
                <ContentCardSkeletonComponent />
            </div>
        </div>
        <div v-else class="row">
            <ContentDetailComponent
            :id="id" 
            :uuid="uuid" 
            :name="name" 
            :heading="heading" 
            :type="type" 
            :paid="paid" 
            :purchased="purchased" 
            :amount="amount" 
            :paragraph="description"
            :file="file"
            :video-link="videoLink"
            @payment-click="makePayment"
            />
        </div>
    
    </section>
    </div>
  </template>
  
  <script>
  import UserCrumbComponent from '~/components/UserCrumbComponent.vue'
  import ContentCardSkeletonComponent from '~/components/ContentCardSkeletonComponent.vue';
import ContentDetailComponent from '~/components/ContentDetailComponent.vue';
  export default {
    name: "UserContentDetailPage",
    components: { UserCrumbComponent, ContentCardSkeletonComponent, ContentDetailComponent },
    layout: "UserLayout",
    data() {
        return {
            id: 0,
            uuid: '',
            name: '',
            heading: '',
            description: '',
            amount: '',
            type: '',
            restricted: false,
            paid: false,
            purchased: false,
            loading:false,
            skeletonCount:4,
            file:this.$route.params.id,
            videoLink:''
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
                this.$router.push('/content/all');
            }
            try {
                const response = await this.$privateApi.get('/content-user/'+this.$route.params.id); // eslint-disable-line
                this.id = response.data.data.id;
                this.uuid = response.data.data.uuid;
                this.name = response.data.data.name;
                this.heading = response.data.data.heading;
                this.description = response.data.data.description;
                this.type = response.data.data.type;
                this.restricted = response.data.data.restricted;
                this.paid = response.data.data.paid;
                this.amount = response.data.data.amount;
                if(response.data.data.AssignedContent && response.data.data.AssignedContent.length>0){
                    this.purchased = true;
                }
                if(response.data.data.type==='VIDEO' && (this.paid===false || this.purchased === true)){
                    this.getVideoLink();
                }
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                this.$router.push('/content/all');
            } finally{
                this.loading=false
            }
        },
        async getVideoLink(){
            this.loading=true
            try {
                const response = await this.$privateApi.get('/content-user/video-link/'+this.$route.params.id); // eslint-disable-line
                this.videoLink = response.data.data.file_path;
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
                const response = await this.$privateApi.get('/content-user/generate-payment-order/'+this.$route.params.id); // eslint-disable-line
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
                // this.verifySignature(response);
                // eslint-disable-next-line no-console
                // console.log(response);
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
                const response = await this.$privateApi.post('/content-user/verify-payment/',{
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
  