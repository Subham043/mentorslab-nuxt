<template>
    <div>
        <BreadcrumbComponent main-page="Event" current-page="Create" />
        <section class="content">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h4 class="box-title">Create Event</h4>
                        </div>
                        <!-- /.box-header -->
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form class="form" method="post" @submit.prevent="handleSubmit(formHandler)">
                            <div class="box-body">
                                <h4 class="box-title text-primary mb-0"><i class="el-icon-reading"></i> Event Info</h4>
                                <hr class="my-15">
                                <div class="row">
                                    <div class="col-md-6">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="title">
                                        <div class="form-group">
                                            <label class="form-label">Title *</label>
                                            <el-input v-model="title" style="width: 100%;" placeholder="Enter Title"></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-6">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="url">
                                        <div class="form-group">
                                            <label class="form-label">Page URL *</label>
                                            <el-input v-model="url" style="width: 100%;" placeholder="Enter Page URL"></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="from_date">
                                        <div class="form-group">
                                            <label class="form-label">From Date *</label>
                                            <el-date-picker v-model="from_date" style="width: 100%;" type="date" placeholder="Enter From Date"></el-date-picker>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="" name="to_date">
                                        <div class="form-group">
                                            <label class="form-label">To Date</label>
                                            <el-date-picker v-model="to_date" style="width: 100%;" type="date" placeholder="Enter To Date"></el-date-picker>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="time">
                                        <div class="form-group">
                                            <label class="form-label">Event Time *</label>
                                            <el-time-picker
                                                v-model="time"
                                                arrow-control
                                                style="width: 100%;"
                                                :picker-options="{
                                                selectableRange: '00:00:00 - 23:59:00'
                                                }"
                                                placeholder="Enter Event Time">
                                            </el-time-picker>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <h4 class="box-title text-primary mb-0 mt-20"><i class="el-icon-notebook-1"></i> Event Media
                                </h4>
                                <hr class="my-15">
                                <div class="row">
                                    <div class="col-md-6">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="video">
                                            <div class="form-group">
                                                <label class="form-label">Video Url *</label>
                                                <el-input v-model="video" style="width: 100%;" placeholder="Enter Video URL"></el-input>
                                            </div>
                                            <div class="form-text">
                                                <code>youtube url format : </code>https://www.youtube.com/embed/3QPp_DlcZpM
                                            </div>
                                            <div class="form-text">
                                                <code>vimeo url format : </code>https://player.vimeo.com/video/291685166
                                            </div>
                                            <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-6">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|ext:jpg,jpeg,png,webp" name="banner">
                                        <div class="form-group">
                                            <label class="form-label">Banner *</label>
                                            <input v-model="banner" type="hidden" />
                                            <input class="form-control" type="file" @change="handleFileChnage" />
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>

                                </div>
                                <h4 class="box-title text-primary mb-0 mt-20"><i class="el-icon-lock"></i> Event Security
                                </h4>
                                <hr class="my-15">
                                <div class="row">
                                    <div class="col-md-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="draft">
                                        <div class="form-group">
                                            <label class="form-label">Draft</label>
                                            <el-switch
                                                v-model="draft"
                                                style="display: block"
                                                active-color="#13ce66"
                                                inactive-color="#ff4949"
                                                active-text="Yes"
                                                inactive-text="No">
                                            </el-switch>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="paid">
                                            <div class="form-group">
                                                <label class="form-label">Paid</label>
                                                <el-switch
                                                    v-model="paid"
                                                    style="display: block"
                                                    active-color="#13ce66"
                                                    inactive-color="#ff4949"
                                                    active-text="Yes"
                                                    inactive-text="No">
                                                </el-switch>
                                            </div>
                                            <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <h4 v-if="paid" class="box-title text-primary mb-0 mt-20"><i class="el-icon-price-tag"></i> Event Price
                                </h4>
                                <hr v-if="paid" class="my-15">
                                <div v-if="paid" class="row">
                                    <div class="col-md-4">
                                        <ValidationProvider v-slot="{ classes, errors }" :rules="paid ? 'required' : ''" name="amount">
                                        <div class="form-group">
                                            <label class="form-label">Amount *</label>
                                            <el-input v-model="amount" style="width: 100%;" placeholder="Enter Amount"></el-input>
                                        </div>
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
    name: "CreateEventPage",
    components: { BreadcrumbComponent },
    layout: "AdminLayout",
    data() {
        return {
            title: '',
            url: '',
            from_date: '',
            to_date: '',
            time: '',
            video: '',
            facebook: '',
            instagram: '',
            twitter: '',
            linkedin: '',
            amount: '',
            draft: false,
            paid: false,
            restricted: false,
            banner: [],
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
                formData.append('title', this.title);
                formData.append('url', this.url);
                formData.append('from_date', this.from_date);
                formData.append('to_date', this.to_date);
                formData.append('time', this.time);
                formData.append('amount', this.amount);
                formData.append('draft', !!this.draft);
                formData.append('paid', !!this.paid);
                formData.append('video', this.video);
                formData.append('banner', this.banner);
                formData.append('facebook', this.facebook);
                formData.append('instagram', this.instagram);
                formData.append('twitter', this.twitter);
                formData.append('linkedin', this.linkedin);
                const response = await this.$privateApi.post('/event', formData); // eslint-disable-line
                this.$toast.success('Event created successfully')
                this.$router.push(this.$nuxt.context.from.path);
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                title: err?.response?.data?.form_error?.title,
                url: err?.response?.data?.form_error?.url,
                from_date: err?.response?.data?.form_error?.from_date,
                to_date: err?.response?.data?.form_error?.to_date,
                time: err?.response?.data?.form_error?.time,
                amount: err?.response?.data?.form_error?.amount,
                draft: err?.response?.data?.form_error?.draft,
                paid: err?.response?.data?.form_error?.paid,
                video: err?.response?.data?.form_error?.video,
                banner: err?.response?.data?.form_error?.banner,
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
            this.banner = event.target.files[0];
        },
    }
}
</script>
  