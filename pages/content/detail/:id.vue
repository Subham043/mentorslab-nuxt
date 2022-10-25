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
            :name="name" 
            :heading="heading" 
            :type="type" 
            :paid="paid" 
            :purchased="purchased" 
            :amount="amount" 
            :paragraph="description"
            :file="file"
            :video-link="videoLink"
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
    }
  }
  </script>
  <style scoped>
    .box-header-user{
        padding: 1.5rem 0;
    }
  </style>
  