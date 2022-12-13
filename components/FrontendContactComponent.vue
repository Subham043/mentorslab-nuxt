<template>
    <!-- Team Contact Start -->
    <div class="section team-contact-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="team-single-contact">
                        <h3 class="title">Contact Us</h3>
                        <!-- Team Contact Form Start -->
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form id="contactForm" class="team-contact-form" @submit.prevent="handleSubmit(formHandler)">
                            <div class="row">
                                <div class="col-md-6">
                                    <!-- Single Form Start -->
                                    <ValidationProvider v-slot="{ classes, errors }" rules="required|alpha_spaces" name="name">
                                        <div class="single-form">
                                            <input id="name" v-model="name" type="text" placeholder="Your Name">
                                            <i class="el-icon-user"></i>
                                        </div>
                                        <div :class="classes">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                    <!-- Single Form End -->
                                </div>
                                <div class="col-md-6">
                                    <!-- Single Form Start -->
                                    <ValidationProvider v-slot="{ classes, errors }" rules="required|email" name="email">
                                        <div class="single-form">
                                            <input id="email" v-model="email" type="email" placeholder="Your Email">
                                            <i class="el-icon-message"></i>
                                        </div>
                                        <div :class="classes">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                    <!-- Single Form End -->
                                </div>
                                <div class="col-md-12">
                                    <!-- Single Form Start -->
                                    <ValidationProvider v-slot="{ classes, errors }" rules="required|phone" name="phone">
                                        <div class="single-form">
                                            <input id="phone" v-model="phone" type="text" placeholder="Your Phone">
                                            <i class="el-icon-phone-outline"></i>
                                        </div>
                                        <div :class="classes">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                    <!-- Single Form End -->
                                </div>
                                <div class="col-md-12">
                                    <!-- Single Form Start -->
                                    <ValidationProvider v-slot="{ classes, errors }" rules="required" name="message">
                                        <div class="single-form">
                                            <textarea id="message" v-model="message" placeholder="your Message..."></textarea>
                                            <i class="el-icon-chat-line-round"></i>
                                        </div>
                                        <div :class="classes">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                    <!-- Single Form End -->
                                </div>
                            </div>
                            <!-- Blog Comments Button Start -->
                            <div class="contact-btn">
                                <button id="submitBtn" class="btn" type="submit">Send Message</button>
                            </div>
                            <!-- Blog Comments Button End -->
                        </form>
                        </ValidationObserver>
                        <!-- Team Contact Form End -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Team Contact End -->
</template>

<script>
export default {
    name: 'FrontendContactComponent',
    data() {
        return {
            name:'',
            email:'',
            phone:'',
            message:''
        };
    },
    methods: {
        async formHandler(){
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                await this.$publicApi.post('/enquiry-user', {email:this.email, message:this.message, name:this.name, phone:this.phone}); // eslint-disable-line
                this.name=''
                this.email=''
                this.phone=''
                this.message=''
                this.$toast.success('Message Sent Successfully.')
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                email: err?.response?.data?.form_error?.email,
                message: err?.response?.data?.form_error?.message,
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