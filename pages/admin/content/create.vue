<template>
    <div>
        <BreadcrumbComponent main-page="Content" current-page="Create" />
        <section class="content">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h4 class="box-title">Create Content</h4>
                        </div>
                        <!-- /.box-header -->
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form class="form" method="post" @submit.prevent="handleSubmit(formHandler)">
                            <div class="box-body">
                                <h4 class="box-title text-primary mb-0"><i class="el-icon-reading"></i> Content Info</h4>
                                <hr class="my-15">
                                <div class="row">
                                    <div class="col-md-6">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="name">
                                        <div class="form-group">
                                            <label class="form-label">Name *</label>
                                            <el-input v-model="name" style="width: 100%;" placeholder="Enter Name"></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-6">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="heading">
                                        <div class="form-group">
                                            <label class="form-label">Heading *</label>
                                            <el-input v-model="heading" style="width: 100%;" placeholder="Enter Heading"></el-input>
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
                                <h4 class="box-title text-primary mb-0 mt-20"><i class="el-icon-notebook-1"></i> Content File
                                </h4>
                                <hr class="my-15">
                                <div class="row">
                                    <div class="col-md-6">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="type">
                                        <div class="form-group">
                                            <label class="form-label">File Type *</label>
                                            <el-select v-model="type" placeholder="Select" style="width:100%">
                                                <el-option
                                                v-for="item in fileType"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                <span style="float: left">{{ item.label }}</span>
                                                <span style="float: right; color: #8492a6; font-size: 13px"><i :class="item.icon"></i></span>
                                                </el-option>
                                            </el-select>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div v-if="type=='PDF'" class="col-md-6">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|ext:pdf" name="file">
                                        <div class="form-group">
                                            <label class="form-label">File *</label>
                                            <input v-model="file" type="hidden" />
                                            <input class="form-control" type="file" @change="handleFileChnage" />
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div v-else class="col-md-6">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="Video Url">
                                            <div class="form-group">
                                                <label class="form-label">Video Url *</label>
                                                <el-input v-model="file_path" style="width: 100%;" placeholder="Enter Video URL"></el-input>
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

                                </div>
                                <h4 class="box-title text-primary mb-0 mt-20"><i class="el-icon-lock"></i> Content Security
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
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="restricted">
                                            <div class="form-group">
                                                <label class="form-label">Restricted</label>
                                                <el-switch
                                                    v-model="restricted"
                                                    :disabled="paid"
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
                                                    @change="paidChange">
                                                </el-switch>
                                            </div>
                                            <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <h4 class="box-title text-primary mb-0 mt-20"><i class="el-icon-user"></i> Assign Content
                                </h4>
                                <hr class="my-15">
                                <div class="row">
                                    <div class="col-md-6">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="" name="user">
                                        <div class="form-group">
                                            <label class="form-label">User</label>
                                            <el-select
                                                v-model="selectedUsers"
                                                filterable
                                                multiple
                                                style="width:100%"
                                                placeholder="Assign user to this content">
                                                <el-option
                                                v-for="item in users"
                                                :key="item.id"
                                                :label="item.email"
                                                :value="item.id">
                                                <span style="float: left; color: #8492a6; font-size: 13px">{{item.email}}</span>
                                                <span style="float: right">{{ item.name||item.email }}</span>
                                                </el-option>
                                            </el-select>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <h4 v-if="paid" class="box-title text-primary mb-0 mt-20"><i class="el-icon-price-tag"></i> Content Price
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
                                <NuxtLink to="/admin/content/list"><button type="button" class="btn btn-primary-light me-1">
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
    name: "CreateContentPage",
    components: { BreadcrumbComponent },
    layout: "AdminLayout",
    data() {
        return {
            name: '',
            heading: '',
            description: '',
            file_path: '',
            amount: '',
            draft: false,
            restricted: false,
            paid: false,
            fileType: [{
                value: 'VIDEO',
                label: 'VIDEO',
                icon: 'el-icon-video-camera'
                }, {
                value: 'PDF',
                label: 'PDF',
                icon: 'el-icon-notebook-2'
            }],
            type: "VIDEO",
            file: [],
            users: [],
            selectedUsers: [],
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
        this.getUsers();
    },
    methods: {
        paidChange(){
            this.paid ? this.restricted = true : this.restricted = false;
        },
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
                formData.append('amount', this.amount);
                formData.append('draft', !!this.draft);
                formData.append('restricted', !!this.restricted);
                formData.append('paid', !!this.paid);
                formData.append('type', this.type);
                if(this.type==='VIDEO'){
                    formData.append('file_path', this.file_path);
                }else{
                    formData.append('file', this.file);
                }
                const response = await this.$privateApi.post('/content', formData); // eslint-disable-line
                await this.assignContentToUser(response.data.data.id);
                this.$toast.success('Content created successfully')
                this.$router.push(this.$nuxt.context.from.path);
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                heading: err?.response?.data?.form_error?.heading,
                description: err?.response?.data?.form_error?.description,
                amount: err?.response?.data?.form_error?.amount,
                file: err?.response?.data?.form_error?.file,
                file_path: err?.response?.data?.form_error?.file_path,
                draft: err?.response?.data?.form_error?.draft,
                restricted: err?.response?.data?.form_error?.restricted,
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            }finally{
            loading.close()
            }
        },
        handleFileChnage(event){
            this.file = event.target.files[0];
        },
        async getUsers(){
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const response = await this.$privateApi.get('/user');
                this.users = response.data.data;
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            }finally{
                loading.close()
            }
        },
        async assignContentToUser(contentId){
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {

                // eslint-disable-next-line camelcase
                const assigned_content_array = [];
                for (let index = 0; index < this.selectedUsers.length; index++) {
                    // eslint-disable-next-line camelcase
                    assigned_content_array.push(
                        {assignedToId:this.selectedUsers[index]}
                    );
                }
                // eslint-disable-next-line no-console
                // console.log(assigned_content_array);
                // eslint-disable-next-line no-unused-vars, object-shorthand, camelcase
                const response = await this.$privateApi.post('/assign/content-to-user-multiple/'+contentId, {assigned_content_array:assigned_content_array})
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            }finally{
                loading.close()
            }
        }
    }
}
</script>
