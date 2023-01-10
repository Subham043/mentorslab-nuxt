<template>
    <div>
        <BreadcrumbComponent main-page="About Section" current-page="Edit" />
        <section class="content">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h4 class="box-title">Edit About Section</h4>
                        </div>
                        <!-- /.box-header -->
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form class="form" method="post" @submit.prevent="handleSubmit(formHandler)">
                            <div class="box-body">
                                <h4 class="box-title text-primary mb-0"><i class="el-icon-reading"></i> About Section Info</h4>
                                <hr class="my-15">
                                <div class="row">
                                    <div class="col-md-6">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="heading">
                                        <div class="form-group">
                                            <label class="form-label">Heading *</label>
                                            <el-input v-model="heading" style="width: 100%;" placeholder="Enter Heading"></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-6">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="ext:jpg,jpeg,png,webp" name="image">
                                        <div class="form-group">
                                            <label class="form-label">Image</label>
                                            <input v-model="image" type="hidden" />
                                            <input class="form-control" type="file" @change="handleFileChnage" />
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-12">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="description">
                                        <div class="form-group">
                                            <label class="form-label">Description</label>
                                        </div>
                                        <client-only>
                                          <VueEditor v-model="description" :editor-toolbar="customToolbar" />
                                        </client-only>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    
                                </div>
                            </div>
                            <!-- /.box-body -->
                            <div class="box-footer">
                                <NuxtLink to="/admin/events/list"><button type="button" class="btn btn-primary-light me-1">
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
    name: "EditEventPage",
    components: { BreadcrumbComponent },
    layout: "AdminLayout",
    data() {
        return {
            heading: '',
            description: '',
            image: [],
            customToolbar: [
                [{ header: [false, 1, 2, 3, 4, 5, 6] }],
                ["bold", "italic", "underline", "strike"], // toggled buttons
                [
                    { align: "" },
                    { align: "center" },
                    { align: "right" },
                    { align: "justify" }
                ],
                ["blockquote", "code-block"],
                [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
                [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
                [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                ["link"],
                ["clean"] // remove formatting button
            ]
        }
    },
    beforeMount(){
        this.checkId();
        this.getData();
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
                formData.append('heading', this.heading);
                formData.append('description', this.description);
                if(!Array.isArray(this.image)){
                    formData.append('image', this.image);
                    // eslint-disable-next-line no-console
                    console.log(this.image);
                }
                const response = await this.$privateApi.post('/event-about/'+this.$route.params.id, formData); // eslint-disable-line
                this.$toast.success('About Section updated successfully')
                this.$router.push(this.$nuxt.context.from.path);
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                    heading: err?.response?.data?.form_error?.heading,
                    description: err?.response?.data?.form_error?.description,
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
                this.$router.push('/admin/events/list');
            }
            try {
                const response = await this.$privateApi.get('/event/'+this.$route.params.id); // eslint-disable-line
                // eslint-disable-next-line no-console
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                this.$router.push('/admin/events/list');
            } finally{
                loading.close()
            }
        },
        async getData(){
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const response = await this.$privateApi.get('/event-about/'+this.$route.params.id); // eslint-disable-line
                // eslint-disable-next-line no-console
                this.heading = response.data.data.heading;
                this.description = response.data.data.description;
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
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
  