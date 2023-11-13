<template>
    <div>
        <FrontendBreadcrumbComponent page="Contact Us" />

        <!-- Contact Info Start -->
        <div class="section contact-info-section section-padding">
            <div class="container">
                <!-- Contact Info Wrapper Start -->
                <div class="contact-info-wrapper">
                    <!-- Section Title Start -->
                    <div class="contact-info-title text-center">
                        <h2 class="title">Contact our support team to know what you want</h2>
                    </div>
                    <!-- Section Title End -->
                    <!-- Contact Info Item Wrapper Start -->
                    <div class="contact-info-item-wrapper">
                        <div class="row">
                            <FrontendContactCardComponent classlist="contact-info-item contact-info-1 text-center" title="Our Numbers" detail="+91 9902570561" icon="fas fa-phone-volume" />
                            <FrontendContactCardComponent classlist="contact-info-item contact-info-2 text-center" title="Email Address" detail="info@pfla.in" icon="el-icon-message" />
                            <FrontendContactCardComponent classlist="contact-info-item contact-info-3 text-center" title="Our Location" detail="Bengaluru" icon="el-icon-position" />
                        </div>
                    </div>
                    <!-- Contact Info Item Wrapper End -->
                </div>
                <!-- Contact Info Wrapper End -->
            </div>
        </div>
        <!-- Contact Info End -->

        <!-- Contact Form Start -->
        <div class="section contact-form-section section-padding">
            <div class="container">
                <!-- Contact Form Wrapper Start -->
                <div class="contact-form-wrapper">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="contact-map">
                                <iframe scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982235.7441715254!2d73.12128012499997!3d12.914013800000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1529159bc605%3A0xb88570bcfc4d4f0f!2sPeople%20First%20Leadership%20Academy!5e0!3m2!1sen!2sin!4v1670872290548!5m2!1sen!2sin" title="Mentorslab" aria-label="Mentorslab" frameborder="0"></iframe>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <!-- Contact Form Start -->
                            <div class="contact-form">
                                <h4 class="title">Contact Us</h4>
                                <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                                <form id="contactForm" @submit.prevent="handleSubmit(formHandler)">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <!-- Single Form Start -->
                                            <div class="single-form">
                                                <ValidationProvider v-slot="{ classes, errors }" rules="required|alpha_spaces" name="name">
                                                    <input id="name" v-model="name" type="text" placeholder="Your Name">
                                                    <div :class="classes">{{ errors[0] }}</div>
                                                </ValidationProvider>
                                            </div>
                                            <!-- Single Form End -->
                                        </div>
                                        <div class="col-sm-12">
                                            <!-- Single Form Start -->
                                            <div class="single-form">
                                                <ValidationProvider v-slot="{ classes, errors }" rules="required|email" name="email">
                                                    <input id="email" v-model="email" type="email" placeholder="Your Email">
                                                    <div :class="classes">{{ errors[0] }}</div>
                                                </ValidationProvider>
                                            </div>
                                            <!-- Single Form End -->
                                        </div>
                                        <div class="col-sm-12">
                                            <!-- Single Form Start -->
                                            <div class="single-form">
                                                <ValidationProvider v-slot="{ classes, errors }" rules="required|phone" name="phone">
                                                    <input id="phone" v-model="phone" type="text" placeholder="Phone">
                                                    <div :class="classes">{{ errors[0] }}</div>
                                                </ValidationProvider>
                                            </div>
                                            <!-- Single Form End -->
                                        </div>
                                        <div class="col-sm-12">
                                            <!-- Single Form Start -->
                                            <div class="single-form">
                                                <ValidationProvider v-slot="{ classes, errors }" rules="required" name="message">
                                                    <textarea id="message" v-model="message" placeholder="Message..."></textarea>
                                                    <div :class="classes">{{ errors[0] }}</div>
                                                </ValidationProvider>
                                            </div>
                                            <!-- Single Form End -->
                                        </div>
                                        <div class="col-sm-12">
                                            <!-- Single Form Start -->
                                            <div class="contact-btn">
                                                <button id="submitBtn" class="btn" type="submit" style="display:grid;place-items:center;">Submit Message</button>
                                            </div>
                                            <!-- Single Form End -->
                                        </div>
                                    </div>
                                </form>
                                </ValidationObserver>
                            </div>
                            <!-- Contact Form End -->
                        </div>
                    </div>

                </div>
                <!-- Contact Form Wrapper End -->
            </div>
        </div>
        <!-- Contact Form End -->

    </div>

</template>

<script>
import FrontendBreadcrumbComponent from '~/components/FrontendBreadcrumbComponent.vue';
import FrontendContactCardComponent from '~/components/FrontendContactCardComponent.vue';


export default {
    name: "ContactPage",
    components: { FrontendBreadcrumbComponent, FrontendContactCardComponent },
    layout: "FrontendLayout",
    data() {
        return {
            name:'',
            email:'',
            phone:'',
            message:''
        };
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
