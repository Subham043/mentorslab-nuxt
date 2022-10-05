<template>
  <div class="bg-white rounded10 shadow-lg">
    <div class="content-top-agile p-20 pb-0">
      <h2 class="text-primary fw-600">Let's Get Started</h2>
      <p class="mb-0 text-fade">Sign in to continue to Mentorslab.</p>
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
              ><font-awesome-icon :icon="['fas', 'envelope']"
            /></span>
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
        <div class="form-group">
          <ValidationProvider v-slot="{ classes, errors }" rules="required" name="password">
          <div class="input-group mb-3">
            <span class="input-group-text bg-transparent"
              ><font-awesome-icon :icon="['fas', 'lock']"
            /></span>
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
        <div class="row">
          <div class="col-6">
            <div class="checkbox">
              <input id="basic_checkbox_1" type="checkbox" />
              <label for="basic_checkbox_1">Remember Me</label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-6">
            <div class="fog-pwd text-end">
              <NuxtLink
                to="/auth/forgot-password"
                class="text-primary fw-500 hover-primary"
                ><i class="ion ion-locked"></i> Forgot password?</NuxtLink
              ><br />
            </div>
          </div>
          <!-- /.col -->
          <div class="col-12 text-center">
            <button type="submit" class="btn btn-primary w-p100 mt-10">
              Login
            </button>
          </div>
          <!-- /.col -->
        </div>
      </form>
      </ValidationObserver>
      <div class="text-center">
        <p class="mt-15 mb-0 text-fade">
          Don't have an account?
          <NuxtLink to="/auth/register" class="text-primary ms-5">Register</NuxtLink>
        </p>
      </div>

      <div class="text-center">
        <p class="mt-20 text-fade">- Sign With -</p>
        <p class="gap-items-2 mb-0">
          <a
            class="waves-effect waves-circle btn btn-social-icon btn-circle btn-facebook-light"
            href="#"
            ><font-awesome-icon :icon="['fab', 'facebook-f']"
          /></a>
          <a
            class="waves-effect waves-circle btn btn-social-icon btn-circle btn-instagram-light"
            href="#"
            ><font-awesome-icon :icon="['fab', 'google']"
          /></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginPage',
  layout: 'AuthLayout',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async formHandler(){
        const loading = this.$loading({
          lock: true,
          fullscreen: true,
        });
        try {
            const response = await this.$auth.loginWith('local', { data: {email:this.email, password:this.password} }); // eslint-disable-line
            this.$toast.success('Logged in successfully')
            // console.log(response);// eslint-disable-line
        } catch (err) {
            // console.log(err.response);// eslint-disable-line
            this.$refs.form.setErrors({
              email: err?.response?.data?.form_error?.email,
              password: err?.response?.data?.form_error?.password,
            });
            if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
            if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            
        } finally{
          loading.close()
        }
    }
  },
}
</script>
