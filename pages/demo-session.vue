<template>
    <div>
        <FrontendBreadcrumbComponent page="Request A Demo Session" />

        <!-- Contact Form Start -->
        <div class="section contact-form-section section-padding-02">
            <div class="container">
                <!-- Contact Form Wrapper Start -->
                <div class="contact-form-wrapper">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="report-career-content report-career-2-content">
                                <div class="section-title section-devider">
                                    <h2 class="title">Get Started Now</h2>
                                </div>
                                <p><strong>We value your time and make sure that the time, money and effort you put in this journey is worth it.</strong></p>
                                <p>If you are in doubt or seeking a clarification on any of the programs you are interested in, feel free to book a <code>30 minute FREE consultation</code> with a Coach. We believe that when you sign up for coaching, you are investing in yourself and to get a desired result, both our commitment is key. Before you sign up, it is important that I hear you and understand your REASON for COACHING.</p>
                                <ul>
                                    <li><strong>Schedule a 30 min FREE video call</strong>: Get to know your coach, understand the coaching journey and clarify any expectations before commencing sessions.</li>
                                    <li>The Coach will also get to know your challenges, the reason you are thinking of hiring a Coach and your very purpose.</li>
                                    <li>If you decide to go ahead with a coaching session, we shall take the next steps forward.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <!-- Contact Form Start -->
                            <div class="contact-form">
                                <h4 class="title">Request A Session Now</h4>
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
                                               <span class="example"></span>
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
                                                <button id="submitBtn" class="btn" type="submit" style="display:grid;place-items:center;">Request</button>
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


export default {
    name: "RequestSessionPage",
    components: { FrontendBreadcrumbComponent },
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
                await this.$publicApi.post('/demo-session-user', {email:this.email, message:this.message, name:this.name, phone:this.phone}); // eslint-disable-line
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

<style scoped>
.report-career-content ul {
    list-style:disc;
}
.report-career-content ul li {
    display: list-item;
    display: list-item;
    display: list-item;
    display: list-item;
}
.section-padding-02{
    padding-bottom:50px;
}
.contact-form {
    min-height: 530px;
    height: auto;
}
</style>