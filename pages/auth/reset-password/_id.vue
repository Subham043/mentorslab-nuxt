<template>
    <div class="bg-white rounded10 shadow-lg">
        <div class="content-top-agile p-20 pb-0">
            <h2 class="text-primary fw-600">Let's Get Started</h2>
            <p class="mb-0 text-fade">Reset your password to continue to Mentorslab.</p>
        </div>
        <div class="p-40">
            <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                <form method="post" @submit.prevent="handleSubmit(formHandler)">

                    <div class="form-group">
                        <ValidationProvider v-slot="{ classes, errors }" rules="required|min:4|max:4" name="otp">
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
                    <div class="form-group">
                        <ValidationProvider
v-slot="{ classes, errors }" rules="required" vid="password"
                            name="password">
                            <div class="input-group mb-3">
                                <span class="input-group-text bg-transparent">
                                    <font-awesome-icon :icon="['fas', 'lock']" />
                                </span>
                                <input
v-model="password" type="password" class="form-control ps-15 bg-transparent"
                                    placeholder="Password" />
                            </div>
                            <span :class="classes">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="form-group">
                        <ValidationProvider
v-slot="{ classes, errors }" rules="required|confirmed:password"
                            name="confirm password">
                            <div class="input-group mb-3">
                                <span class="input-group-text bg-transparent">
                                    <font-awesome-icon :icon="['fas', 'lock']" />
                                </span>
                                <input
v-model="cpassword" type="password" class="form-control ps-15 bg-transparent"
                                    placeholder="Confirm Password" />
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
            password: '',
            cpassword: '',
        }
    },
    beforeMount() {
        this.checkId()
    },
    methods: {
        async formHandler() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                // eslint-disable-next-line no-unused-vars
                const response = await this.$publicApi.post(
                    '/auth/reset-password/' + this.$route.params.id,
                    { otp: this.otp, password: this.password }
                ) // eslint-disable-line
                this.$toast.success('Password reset done successfully.')
                this.$router.push('/auth/login')
                // console.log(response);// eslint-disable-line
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                    otp: err?.response?.data?.form_error?.otp,
                    password: err?.response?.data?.form_error?.password,
                })
                if (err?.response?.data?.message)
                    this.$toast.error(err?.response?.data?.message)
                if (err?.response?.data?.error)
                    this.$toast.error(err?.response?.data?.error)
            } finally {
                loading.close()
            }
        },
        checkId() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            if (!this.$route.params.id) {
                this.$toast.error('Invalid ID')
                this.$router.push('/auth/login')
            }
            loading.close()
        },
    },
}
</script>
