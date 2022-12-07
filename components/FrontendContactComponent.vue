<template>
    <!-- Team Contact Start -->
    <div class="section team-contact-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="team-single-contact">
                        <h3 class="title">Contact Us</h3>
                        <!-- Team Contact Form Start -->
                        <form id="contactForm" class="team-contact-form" action="#">
                            <div class="row">
                                <div class="col-md-6">
                                    <!-- Single Form Start -->
                                    <div class="single-form">
                                        <input id="name" type="text" placeholder="Your Name">
                                        <i class="flaticon-user-1"></i>
                                    </div>
                                    <!-- Single Form End -->
                                </div>
                                <div class="col-md-6">
                                    <!-- Single Form Start -->
                                    <div class="single-form">
                                        <input id="email" type="email" placeholder="Your Email">
                                        <i class="flaticon-email"></i>
                                    </div>
                                    <!-- Single Form End -->
                                </div>
                                <div class="col-md-12">
                                    <!-- Single Form Start -->
                                    <div class="single-form">
                                        <input id="phone" type="text" placeholder="Your Phone">
                                        <i class="flaticon-phone-call"></i>
                                    </div>
                                    <!-- Single Form End -->
                                </div>
                                <div class="col-md-12">
                                    <!-- Single Form Start -->
                                    <div class="single-form">
                                        <textarea id="message" placeholder="your Message..."></textarea>
                                        <i class="flaticon-edit"></i>
                                    </div>
                                    <!-- Single Form End -->
                                </div>
                            </div>
                            <!-- Blog Comments Button Start -->
                            <div class="contact-btn">
                                <button id="submitBtn" class="btn" type="submit">Send Message</button>
                            </div>
                            <!-- Blog Comments Button End -->
                        </form>
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
}
</script>