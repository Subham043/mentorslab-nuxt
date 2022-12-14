<template>
  <div class="bg-white rounded10 shadow-lg">
    <div class="content-top-agile p-20 pb-0">
      <NuxtLink to="/" class="logo-lg">
				<span class="light-logo"><img src="/images/logo.png" style="height:70px;" alt="logo"></span>
			</NuxtLink>
      <h2 class="text-primary fw-600">Let's Get Started</h2>
      <p class="mb-0 text-fade">Reset your password to continue to Mentorslab.</p>
    </div>
    <div class="p-40">
      <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form
        method="post"
        @submit.prevent="handleSubmit(formHandler)"
      >
        <div class="form-group">
          <ValidationProvider v-slot="{ classes, errors }" rules="required|email" name="email">
          <div class="input-group mb-3">
            <span class="input-group-text bg-transparent"
              ><i class="el-icon-message"></i></span>
            <input
              v-model="email"
              type="email"
              class="form-control ps-15 bg-transparent"
              placeholder="Email"
            />
          </div>
          <span :class="classes">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="row">
          
          <div class="col-12 text-center">
            <button type="submit" class="btn btn-primary w-p100 mt-10">
              Reset Password
            </button>
          </div>
          <!-- /.col -->
        </div>
      </form>
      </ValidationObserver>
      <div class="text-center">
        <p class="mt-15 mb-0 text-fade">
          Remember your password?
          <NuxtLink to="/auth/login" class="text-primary ms-5">Login</NuxtLink>
        </p>
      </div>

    </div>
  </div>
</template>
  
  <script>
  
  export default {
    name: 'ForgotPasswordPage',
    layout: 'AuthLayout',
    data() {
      return {
        email: '',
      }
    },
    mounted(){
      // eslint-disable-next-line nuxt/no-env-in-hooks
      if(process.client){
          this.$scrollTo('#__nuxt', 0, {force: true})
      }
  },
    methods: {
      async formHandler(){
          const loading = this.$loading({
            lock: true,
            fullscreen: true,
          });
          try {
              const response = await this.$publicApi.post('/auth/forgot-password', {email:this.email}); // eslint-disable-line
              this.$toast.info('We have shared you an otp via email. kindly enter that in order to reset your password.')
              this.$router.push('/auth/reset-password/'+response.data.data);
              // console.log(response);// eslint-disable-line
          } catch (err) {
              // console.log(err.response);// eslint-disable-line
              this.$refs.form.setErrors({
                email: err?.response?.data?.form_error?.email,
              });
              
          } finally{
            loading.close();
          }
      }
    },
  }
  </script>
  