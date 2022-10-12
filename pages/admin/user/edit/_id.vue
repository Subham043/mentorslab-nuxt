<template>
    <div>
        <BreadcrumbComponent main-page="User" current-page="Edit" />
        <section class="content">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h4 class="box-title">Edit User</h4>
                        </div>
                        <!-- /.box-header -->
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form class="form" method="post" @submit.prevent="handleSubmit(formHandler)">
                            <div class="box-body">
                                <h4 class="box-title text-primary mb-0"><i class="el-icon-user"></i> User Info</h4>
                                <hr class="my-15">
                                <div class="row">
                                    <div class="col-md-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="alpha_spaces" name="name">
                                        <div class="form-group">
                                            <label class="form-label">Name</label>
                                            <el-input v-model="name" style="width: 100%;" placeholder="Enter Name"></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|email" name="email">
                                        <div class="form-group">
                                            <label class="form-label">E-mail</label>
                                            <el-input v-model="email" type="email" style="width: 100%;" placeholder="Enter Email"></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="phone" name="phone">
                                        <div class="form-group">
                                            <label class="form-label">Phone Number</label>
                                            <el-input v-model="phone" style="width: 100%;" placeholder="Enter Phone"></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-12 mt-10">
                                        <el-switch
                                            v-model="blocked"
                                            style="display: block"
                                            active-color="#13ce66"
                                            inactive-color="#ff4949"
                                            active-text="Blocked"
                                            inactive-text="Unblocked">
                                        </el-switch>
                                    </div>
                                </div>
                                <h4 class="box-title text-primary mb-0 mt-20"><i class="el-icon-user"></i> Assign Content
                                </h4>
                                <hr class="my-15">
                                <div class="row">
                                    <div class="col-md-6">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="" name="user">
                                        <div class="form-group">
                                            <label class="form-label">Content</label>
                                            <el-select
                                                v-model="selectedContents"
                                                filterable
                                                multiple
                                                style="width:100%"
                                                placeholder="Assign user to this content">
                                                <el-option
                                                v-for="item in contents"
                                                :key="item.id"
                                                :label="item.heading"
                                                :value="item.id">
                                                <span style="float: left; color: #8492a6; font-size: 13px">{{item.heading}}</span>
                                                <span style="float: right">{{ item.type }}</span>
                                                </el-option>
                                            </el-select>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <!-- /.box-body -->
                            <div class="box-footer">
                                <NuxtLink to="/admin/user/list"><button type="button" class="btn btn-primary-light me-1">
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
    name: "CreateUserPage",
    components: { BreadcrumbComponent },
    layout: "AdminLayout",
    data() {
        return {
        name: '',
        email: '',
        phone: '',
        blocked: false,
        contents: [],
        selectedContents: [],
        }
    },
    beforeMount(){
        this.checkId()
        this.getContents();
    },
    methods: {
        async formHandler() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const response = await this.$privateApi.patch('/user/'+this.$route.params.id, {email:this.email, name:this.name, phone:this.phone, blocked:this.blocked}); // eslint-disable-line
                await this.assignUserToContent(response.data.data.id);
                this.$toast.success('User updated successfully')
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                email: err?.response?.data?.form_error?.email,
                name: err?.response?.data?.form_error?.name,
                phone: err?.response?.data?.form_error?.phone,
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
                this.$router.push('/admin/user/list');
            }
            try {
                const response = await this.$privateApi.get('/user/'+this.$route.params.id); // eslint-disable-line
                this.name = response.data.data.name;
                this.phone = response.data.data.phone;
                this.email = response.data.data.email;
                this.blocked = response.data.data.blocked;
                if(response.data.data.ContentAssignedTo.length>0){
                    for (let index = 0; index < response.data.data.ContentAssignedTo.length; index++) {
                        // eslint-disable-next-line camelcase
                        if(response.data.data.ContentAssignedTo[index].assignedContent){
                            this.selectedContents.push(
                                response.data.data.ContentAssignedTo[index].assignedContent.id
                            );
                        }
                    }
                }
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                this.$router.push('/admin/user/list');
            } finally{
                loading.close()
            }
        },
        async getContents(){
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const response = await this.$privateApi.get('/content');
                this.contents = response.data.data;
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            }finally{
                loading.close()
            }
        },
        async assignUserToContent(userId){
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {

                // eslint-disable-next-line camelcase
                const assigned_content_array = [];
                for (let index = 0; index < this.selectedContents.length; index++) {
                    // eslint-disable-next-line camelcase
                    assigned_content_array.push(
                        {assignedContentId:this.selectedContents[index]}
                    );
                }
                // eslint-disable-next-line no-console
                console.log(assigned_content_array);
                // eslint-disable-next-line no-unused-vars, object-shorthand, camelcase
                const response = await this.$privateApi.post('/assign/user-to-content-multiple/'+userId, {assigned_content_array:assigned_content_array})
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
  