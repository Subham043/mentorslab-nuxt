<template>
    <div>
        <BreadcrumbComponent main-page="Event Testimonial" current-page="Edit" />
        <section class="content">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h4 class="box-title">Edit Event Testimonial</h4>
                        </div>
                        <!-- /.box-header -->
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                            <form class="form" method="post" @submit.prevent="handleSubmit(formHandler)">
                            <div class="box-body">
                                <h4 class="box-title text-primary mb-0"><i class="el-icon-reading"></i> Event Testimonial Info</h4>
                                <hr class="my-15">
                                <div class="row">
                                    <div class="col-md-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="name">
                                        <div class="form-group">
                                            <label class="form-label">Name *</label>
                                            <el-input v-model="name" style="width: 100%;" placeholder="Enter Name"></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="designation">
                                        <div class="form-group">
                                            <label class="form-label">Designation *</label>
                                            <el-input v-model="designation" style="width: 100%;" placeholder="Enter Designation"></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="ext:jpg,jpeg,png,webp" name="image">
                                        <div class="form-group">
                                            <label class="form-label">Image *</label>
                                            <input v-model="image" type="hidden" />
                                            <input class="form-control" type="file" @change="handleFileChnage" />
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-12">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="message">
                                        <div class="form-group">
                                            <label class="form-label">Message *</label>
                                            <el-input v-model="message" type="textarea" :rows="4" style="width: 100%;" placeholder="Enter Message"></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <!-- /.box-body -->
                            <div class="box-footer">
                                <NuxtLink :to="`/admin/events/${$route.params.event_id}/testimonial/list`"><button type="button" class="btn btn-primary-light me-1">
                                    <i class="el-icon-close"></i> Cancel
                                </button></NuxtLink>
                                <button type="submit" class="btn btn-primary">
                                    <i class="el-icon-folder-add"></i> Save
                                </button>
                            </div>
                        </form>
                        </ValidationObserver>
                    </div>
                    <!-- /.box -->
                </div>
            </div>
            <!-- /.row -->

        </section>
    </div>
</template>
  
<script>
import BreadcrumbComponent from '~/components/BreadcrumbComponent.vue';
export default {
    name: "EditEventTestimonialPage",
    components: { BreadcrumbComponent },
    layout: "AdminLayout",
    data() {
        return {
            name: '',
            designation: '',
            message: '',
            image: [],
        }
    },
    beforeMount(){
        this.checkId();
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if(process.client){
            this.$scrollTo('#__nuxt', 0, {force: true})
        }
    },
    methods: {
        async formHandler() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const formData = new FormData;
                formData.append('name', this.name);
                formData.append('designation', this.designation);
                formData.append('message', this.message);
                if(!Array.isArray(this.image)){
                    formData.append('image', this.image);
                }
                const response = await this.$privateApi.put('/event-testimonial/'+this.$route.params.id, formData); // eslint-disable-line
                this.$toast.success('Event Testimonial updated successfully')
                this.$router.push(this.$nuxt.context.from.path);
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                    name: err?.response?.data?.form_error?.name,
                    designation: err?.response?.data?.form_error?.designation,
                    message: err?.response?.data?.form_error?.message,
                    image: err?.response?.data?.form_error?.image,
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                
            }finally{
            loading.close()
            }
        },
        async checkId(){
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            if(!this.$route.params.id){
                this.$toast.error('Invalid ID')
                this.$router.push(`/admin/events/${this.$route.params.event_id}/testimonial/list`);
            }
            try {
                const response = await this.$privateApi.get('/event-testimonial/display/'+this.$route.params.id); // eslint-disable-line
                // eslint-disable-next-line no-console
                console.log(response);
                this.name = response.data.data.name;
                this.designation = response.data.data.designation;
                this.message = response.data.data.message;
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                this.$router.push(`/admin/events/${this.$route.params.event_id}/testimonial/list`);
            } finally{
                loading.close()
            }
        },
        handleFileChnage(event){
            this.image = event.target.files[0];
        },
    }
}
</script>
  