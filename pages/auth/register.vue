<template>
  <div class="bg-white rounded10 shadow-lg">
    <div class="content-top-agile p-20 pb-0">
      <NuxtLink to="/" class="logo-lg">
				<span class="light-logo"><img src="/images/logo-mentor.webp" style="height:70px;" alt="logo"></span>
			</NuxtLink>
      <h2 class="text-primary fw-600">Let's Get Started</h2>
      <p class="mb-0 text-fade">Sign up to continue to Edumentorslab.</p>
    </div>
    <div class="p-40">
      <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form
        method="post"
        @submit.prevent="handleSubmit(formHandler)"
      >
        <div class="form-group">
          <ValidationProvider v-slot="{ classes, errors }" rules="alpha_spaces" name="name">
          <div class="input-group mb-3">
            <span class="input-group-text bg-transparent"
              ><i class="el-icon-user"></i></span>
            <input
              v-model="name"
              type="text"
              class="form-control ps-15 bg-transparent"
              placeholder="Name"
            />
          </div>
          <span :class="classes">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <ValidationProvider v-slot="{ classes, errors }" rules="phone" name="phone">
          <div class="input-group mb-3">
            <span class="input-group-text bg-transparent"
              ><i class="el-icon-phone"></i></span>
            <input
              v-model="phone"
              type="text"
              class="form-control ps-15 bg-transparent"
              placeholder="Phone"
            />
          </div>
          <div :class="classes">{{ errors[0] }}</div>
          <small class="form-text text-muted"><code>Note :</code> Please add '+91' before typing the phone number</small>
          </ValidationProvider>
        </div>
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
          <div :class="classes">{{ errors[0] }}</div>
          <small class="form-text text-muted"><code>Note :</code> We'll never share your email with anyone else.</small>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <ValidationProvider v-slot="{ classes, errors }" rules="required" vid="password" name="password">
          <div class="input-group mb-3">
            <span class="input-group-text bg-transparent"
              ><i class="el-icon-lock"></i></span>
            <input
              v-model="password"
              type="password"
              class="form-control ps-15 bg-transparent"
              placeholder="Password"
            />
          </div>
          <span :class="classes">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <ValidationProvider v-slot="{ classes, errors }" rules="required|confirmed:password" name="confirm password">
          <div class="input-group mb-3">
            <span class="input-group-text bg-transparent"
              ><i class="el-icon-lock"></i></span>
            <input
              v-model="cpassword"
              type="password"
              class="form-control ps-15 bg-transparent"
              placeholder="Confirm Password"
            />
          </div>
          <span :class="classes">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="row">

          <div class="col-12 text-center">
            <button type="submit" class="btn btn-primary w-p100 mt-10">
              Register
            </button>
          </div>
          <!-- /.col -->
        </div>
      </form>
      </ValidationObserver>
      <div class="text-center">
        <p class="mt-15 mb-0 text-fade">
          Already have an account?
          <NuxtLink to="/auth/login" class="text-primary ms-5">Login</NuxtLink>
        </p>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'RegisterPage',
  layout: 'AuthLayout',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      password: '',
      cpassword: '',
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
            const response = await this.$publicApi.post('/auth/sign-up', {email:this.email, password:this.password, name:this.name, phone:this.phone}); // eslint-disable-line
            // this.$toast.info('We have shared you an otp via email. kindly enter that in order to verify your email.')
            // this.$router.push('/auth/verify-user/'+response.data.data);
            this.$toast.info('Registration completed successfully.')
            this.$router.push('/auth/login');
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
  },
}
</script>
