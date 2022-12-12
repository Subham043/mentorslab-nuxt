<template>
    <div>
        <section class="content">
            <div class="box-header d-flex justify-content-between align-items-center box-header-user">
                <UserCrumbComponent main-page="User" current-page="Profile" />
            </div>
            <div class="row">
                <div class="col-lg-12 col-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h4 class="box-title">Update Profile</h4>
                        </div>
                        <!-- /.box-header -->
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form class="form" method="post" @submit.prevent="handleSubmit(formHandler)">
                            <div class="box-body">
                                <h4 class="box-title text-primary mb-0"><i class="el-icon-user"></i> User Profile</h4>
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
    name: "UserProfilePage",
    components: { UserCrumbComponent },
    layout: "UserLayout",
    data() {
        return {
        name: this.$auth.user.name,
        email: this.$auth.user.email,
        phone: this.$auth.user.phone,
        }
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
                const response = await this.$privateApi.patch('/profile/update', {email:this.email, name:this.name, phone:this.phone}); // eslint-disable-line
                const user = {...this.$auth.user}
                user.email = response.data.data.email;
                user.name = response.data.data.name;
                user.phone = response.data.data.phone;
                this.$auth.setUser(user)
                this.$toast.success('Profile updated successfully')
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
    }
}
</script>
  