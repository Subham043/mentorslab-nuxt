<template>
    <div>
        <BreadcrumbComponent main-page="Event Instructor" current-page="Create" />
        <section class="content">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h4 class="box-title">Create Event Instructor</h4>
                        </div>
                        <!-- /.box-header -->
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form class="form" method="post" @submit.prevent="handleSubmit(formHandler)">
                            <div class="box-body">
                                <h4 class="box-title text-primary mb-0"><i class="el-icon-reading"></i> Event Instructor Info</h4>
                                <hr class="my-15">
                                <div class="row">
                                    <div class="col-md-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="name">
                                        <div class="form-group">
                                            <label class="form-label">Name *</label>
                                            <el-input v-model="name" style="width: 100%;" placeholder="Enter Name"></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="designation">
                                        <div class="form-group">
                                            <label class="form-label">Designation *</label>
                                            <el-input v-model="designation" style="width: 100%;" placeholder="Enter Designation"></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|ext:jpg,jpeg,png,webp" name="image">
                                        <div class="form-group">
                                            <label class="form-label">Image *</label>
                                            <input v-model="image" type="hidden" />
                                            <input class="form-control" type="file" @change="handleFileChnage" />
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="" name="heading">
                                        <div class="form-group">
                                            <label class="form-label">Heading</label>
                                            <el-input v-model="heading" style="width: 100%;" placeholder="Enter Heading"></el-input>
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
                                <h4 class="box-title text-primary mb-0 mt-20"><i class="el-icon-user"></i> Social Media
                                </h4>
                                <hr class="my-15">
                                <div class="row">
                                    <div class="col-md-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="" name="facebook">
                                        <div class="form-group">
                                            <label class="form-label">Facebook Handle</label>
                                            <el-input v-model="facebook" style="width: 100%;" placeholder="Enter Facebook Handle"></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="" name="instagram">
                                        <div class="form-group">
                                            <label class="form-label">Instagram Handle</label>
                                            <el-input v-model="instagram" style="width: 100%;" placeholder="Enter Instagram Handle"></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="" name="twitter">
                                        <div class="form-group">
                                            <label class="form-label">Twitter Handle</label>
                                            <el-input v-model="twitter" style="width: 100%;" placeholder="Enter Twitter Handle"></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="" name="linkedin">
                                        <div class="form-group">
                                            <label class="form-label">Linkedin Handle</label>
                                            <el-input v-model="linkedin" style="width: 100%;" placeholder="Enter Linkedin Handle"></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <!-- /.box-body -->
                            <div class="box-footer">
                                <NuxtLink :to="`/admin/events/${$route.params.event_id}/instructor/list`"><button type="button" class="btn btn-primary-light me-1">
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
    name: "CreateEventInstructorPage",
    components: { BreadcrumbComponent },
    layout: "AdminLayout",
    data() {
        return {
            name: '',
            designation: '',
            description: '',
            heading: '',
            facebook: '',
            instragram: '',
            linkedin: '',
            twitter: '',
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
                formData.append('description', this.description);
                formData.append('heading', this.heading);
                formData.append('image', this.image);
                formData.append('facebook', this.facebook);
                formData.append('instagram', this.instagram);
                formData.append('twitter', this.twitter);
                formData.append('linkedin', this.linkedin);
                const response = await this.$privateApi.post('/event-instructor/'+this.$route.params.event_id, formData); // eslint-disable-line
                this.$toast.success('Event Instructor created successfully')
                this.$router.push(this.$nuxt.context.from.path);
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                name: err?.response?.data?.form_error?.name,
                designation: err?.response?.data?.form_error?.designation,
                description: err?.response?.data?.form_error?.description,
                heading: err?.response?.data?.form_error?.heading,
                image: err?.response?.data?.form_error?.image,
                facebook: err?.response?.data?.form_error?.facebook,
                instagram: err?.response?.data?.form_error?.instagram,
                twitter: err?.response?.data?.form_error?.twitter,
                linkedin: err?.response?.data?.form_error?.linkedin,
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                
            }finally{
            loading.close()
            }
        },
        handleFileChnage(event){
            this.image = event.target.files[0];
        },
    }
}
</script>
  