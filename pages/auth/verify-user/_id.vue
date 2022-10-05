<template>
    <div class="bg-white rounded10 shadow-lg">
        <div class="content-top-agile p-20 pb-0">
            <h2 class="text-primary fw-600">Let's Get Started</h2>
            <p class="mb-0 text-fade">Verify your email to continue to Mentorslab.</p>
        </div>
        <div class="p-40">
            <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                <form method="post" @submit.prevent="handleSubmit(formHandler)">
                    
                    <div class="form-group">
                        <ValidationProvider
v-slot="{ classes, errors }" rules="required|min:4|max:4"
                            name="otp">
                            <div class="input-group mb-3">
                                <span class="input-group-text bg-transparent">
                                    <font-awesome-icon :icon="['fas', 'lock']" />
                                </span>
                                <input
v-model="otp" type="password" class="form-control ps-15 bg-transparent"
                                    placeholder="OTP" />
                            </div>
                            <span :class="classes">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="row">

                        <div class="col-12 text-center">
                            <button type="submit" class="btn btn-primary w-p100 mt-10">
                                VERIFY
                            </button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
            </ValidationObserver>

        </div>
    </div>
</template>
  
<script>

export default {
    name: 'VerifyUserPage',
    layout: 'AuthLayout',
    data() {
        return {
            otp: '',
        }
    },
    beforeMount(){
        this.checkId()
    },
    methods: {
        async formHandler() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const response = await this.$publicApi.post('/auth/verify-user/'+this.$route.params.id, { otp: this.otp }); // eslint-disable-line
                this.$toast.success('Email verified successfully.')
                // console.log(response);// eslint-disable-line
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                    otp: err?.response?.data?.form_error?.otp,
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            } finally{
                loading.close()
            }
        },
        checkId(){
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            if(!this.$route.params.id){
                this.$toast.error('Invalid ID')
                this.$router.push('/auth/login');
            }
            loading.close()
        }
    }
}
</script>