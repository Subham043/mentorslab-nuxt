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
                            <FrontendContactCardComponent classlist="contact-info-item contact-info-2 text-center" title="Email Address" detail="vmlc@pfla.in" icon="flaticon-email" />
                            <FrontendContactCardComponent classlist="contact-info-item contact-info-3 text-center" title="Our Location" detail="Bengaluru" icon="flaticon-location-pin" />
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
                                <iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=pfla&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="New York University" aria-label="New York University" frameborder="0"></iframe>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <!-- Contact Form Start -->
                            <div class="contact-form">
                                <h4 class="title">Contact Us</h4>
                                <form id="contactForm" action="#">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <!-- Single Form Start -->
                                            <div class="single-form">
                                                <input id="name" type="text" placeholder="Your Name">
                                            </div>
                                            <!-- Single Form End -->
                                        </div>
                                        <div class="col-sm-12">
                                            <!-- Single Form Start -->
                                            <div class="single-form">
                                                <input id="email" type="email" placeholder="Your Email">
                                            </div>
                                            <!-- Single Form End -->
                                        </div>
                                        <div class="col-sm-12">
                                            <!-- Single Form Start -->
                                            <div class="single-form">
                                                <input id="phone" type="text" placeholder="Phone">
                                            </div>
                                            <!-- Single Form End -->
                                        </div>
                                        <div class="col-sm-12">
                                            <!-- Single Form Start -->
                                            <div class="single-form">
                                                <textarea id="message" placeholder="Message..."></textarea>
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
        return {};
    }
}
</script>