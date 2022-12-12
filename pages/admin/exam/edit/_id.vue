<template>
    <div>
        <BreadcrumbComponent main-page="Exam" current-page="Edit" />
        <section class="content">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h4 class="box-title">Edit Exam</h4>
                        </div>
                        <!-- /.box-header -->
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                            <form class="form" method="post" @submit.prevent="handleSubmit(formHandler)">
                            <div class="box-body">
                                <h4 class="box-title text-primary mb-0"><i class="el-icon-reading"></i> Exam Info</h4>
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
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="heading">
                                        <div class="form-group">
                                            <label class="form-label">Heading *</label>
                                            <el-input v-model="heading" style="width: 100%;" placeholder="Enter Heading"></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="ext:jpg,jpeg,png,webp" name="image">
                                        <div class="form-group">
                                            <label class="form-label">Image *</label>
                                            <input v-model="file" type="hidden" />
                                            <input class="form-control" type="file" @change="handleFileChnage" />
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-12">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="" name="description">
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
                                <h4 class="box-title text-primary mb-0 mt-20"><i class="el-icon-lock"></i> Exam Security
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
                                                    inactive-text="No"
                                                >
                                                </el-switch>
                                            </div>
                                            <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <h4 v-if="paid" class="box-title text-primary mb-0 mt-20"><i class="el-icon-price-tag"></i> Exam Price
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
                            </div>
                            <!-- /.box-body -->
                            <div class="box-footer">
                                <NuxtLink to="/admin/exam/list"><button type="button" class="btn btn-primary-light me-1">
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
    name: "EditExamPage",
    components: { BreadcrumbComponent },
    layout: "AdminLayout",
    data() {
        return {
            name: '',
            heading: '',
            description: '',
            file_path: '',
            draft: false,
            paid: false,
            file: [],
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
    },
    mounted(){
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
                formData.append('heading', this.heading);
                formData.append('description', this.description);
                formData.append('draft', !!this.draft);
                formData.append('paid', !!this.paid);
                formData.append('amount', this.amount);
                if(this.file.length>0){
                    formData.append('image', this.file);
                }
                const response = await this.$privateApi.put('/exam/'+this.$route.params.id, formData); // eslint-disable-line
                this.$toast.success('Exam updated successfully')
                this.$router.push(this.$nuxt.context.from.path);
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                    name: err?.response?.data?.form_error?.name,
                    heading: err?.response?.data?.form_error?.heading,
                    description: err?.response?.data?.form_error?.description,
                    file: err?.response?.data?.form_error?.file,
                    image: err?.response?.data?.form_error?.image,
                    draft: err?.response?.data?.form_error?.draft,
                    paid: err?.response?.data?.form_error?.paid,
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
                this.$router.push('/admin/exam/list');
            }
            try {
                const response = await this.$privateApi.get('/exam/'+this.$route.params.id); // eslint-disable-line
                this.name = response.data.data.name;
                this.heading = response.data.data.heading;
                this.description = response.data.data.description;
                this.draft = response.data.data.draft;
                this.paid = response.data.data.paid;
                this.amount = response.data.data.amount;
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                this.$router.push('/admin/exam/list');
            } finally{
                loading.close()
            }
        },
        handleFileChnage(event){
            this.file = event.target.files[0];
        },
    }
}
</script>
  