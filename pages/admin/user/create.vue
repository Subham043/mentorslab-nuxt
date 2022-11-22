<template>
    <div>
        <BreadcrumbComponent main-page="User" current-page="Create" />
        <section class="content">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h4 class="box-title">Create User</h4>
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
                                </div>
                                <h4 class="box-title text-primary mb-0 mt-20"><i class="el-icon-lock"></i> Security
                                </h4>
                                <hr class="my-15">
                                <div class="row">
                                    <div class="col-md-6">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" vid="password" name="password">
                                        <div class="form-group">
                                            <label class="form-label">Password</label>
                                            <el-input v-model="password" style="width: 100%;" placeholder="Enter Password" show-password></el-input>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-6">
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
                const response = await this.$privateApi.post('/user', {email:this.email, password:this.password, name:this.name, phone:this.phone}); // eslint-disable-line
                this.$toast.success('User created successfully')
                this.$router.push(this.$nuxt.context.from.path);
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                email: err?.response?.data?.form_error?.email,
                password: err?.response?.data?.form_error?.password,
                name: err?.response?.data?.form_error?.name,
                phone: err?.response?.data?.form_error?.phone,
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                
            }finally{
            loading.close()
            }
        }
    }
}
</script>
  