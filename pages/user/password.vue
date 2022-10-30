<template>
    <div>
        <section class="content">
            <div class="box-header d-flex justify-content-between align-items-center box-header-user">
                <UserCrumbComponent main-page="User" current-page="Password" />
            </div>
            <div class="row">
                <div class="col-lg-12 col-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h4 class="box-title">Update Password</h4>
                        </div>
                        <!-- /.box-header -->
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form class="form" method="post" @submit.prevent="handleSubmit(formHandler)">
                            <div class="box-body">
                                <h4 class="box-title text-primary mb-0"><i class="el-icon-lock"></i> User Password</h4>
                                <hr class="my-15">
                                <div class="row">
                                    <div class="col-md-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="old password">
                                        <div class="form-group">
                                            <label class="form-label">Old Password</label>
                                            <el-input v-model="old_password" style="width: 100%;" placeholder="Enter Old Password" show-password></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" vid="password" name="new password">
                                        <div class="form-group">
                                            <label class="form-label">New Password</label>
                                            <el-input v-model="password" style="width: 100%;" placeholder="Enter New Password" show-password></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|confirmed:password" name="confirm password">
                                        <div class="form-group">
                                            <label class="form-label">Confirm Password</label>
                                            <el-input v-model="cpassword" style="width: 100%;" placeholder="Enter Confirm Password" show-password></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <!-- /.box-body -->
                            <div class="box-footer">
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
import UserCrumbComponent from '~/components/UserCrumbComponent.vue';
export default {
    name: "UserPasswordPage",
    components: { UserCrumbComponent },
    layout: "UserLayout",
    data() {
        return {
            old_password: '',
            password: '',
            cpassword: '',
        }
    },
    methods: {
        async formHandler() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const response = await this.$privateApi.patch('/profile/password/update', {old_password:this.old_password, password:this.password}); // eslint-disable-line
                this.old_password= '';
                this.password= '';
                this.cpassword= '';
                this.$toast.success('Password updated successfully')
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                old_password: err?.response?.data?.form_error?.old_password,
                password: err?.response?.data?.form_error?.password,
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                
            }finally{
            loading.close()
            }
        },
    }
}
</script>
  