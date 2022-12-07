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
                                <h4 class="title">Register A Session Now</h4>
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
                                               <span class="example"></span>
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
                                                <button id="submitBtn" class="btn" type="submit" style="display:grid;place-items:center;">Register</button>
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


export default {
    name: "RequestSessionPage",
    components: { FrontendBreadcrumbComponent },
    layout: "FrontendLayout",
    data() {
        return {};
    }
}
</script>