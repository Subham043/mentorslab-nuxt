<template>
    <div>


        <div
            class="section instructor-section section-padding"
            style="background-image: url('/images/bg/instructor-bg.jpg');">
            <div class="container">
                <!-- Instructor Wrapper Start -->
                <div class="instructor-wrapper">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-7">
                            <!-- Instructor Content Start -->
                            <div class="instructor-content">
                                <h2 class="title">Learn Future Skills Now Online And Flexible Learning</h2>
                                <p>Coached & Trained over 50,000 people.</p>
                                <NuxtLink class="btn" to="/dashboard">Explore Our Courses</NuxtLink>
                            </div>
                            <!-- Instructor Content End -->
                        </div>
                        <div class="col-lg-6 col-md-5">
                            <!-- Instructor Play Button Start -->
                            <div class="instructor-play text-center">
                                <a class="popup-video" @click.prevent="dialogFormVisible = true"><i
                                        class="fas fa-play"></i></a>
                            </div>
                            <!-- Instructor Play Button End -->
                        </div>
                    </div>
                </div>
                <!-- Instructor Wrapper End -->
            </div>
        </div>
        <!-- Instructor End -->
        <!-- Features Start -->
        <div class="section features-section">
            <div class="container">
                <!-- Features Wrapper Start -->
                <div class="features-wrapper">
                    <div class="row g-0">
                        <BannerCardComponent image="/images/27.png" title="Mindful Parenting" paragraph="Learn Parenting skills" />
                        <BannerCardComponent image="/images/26.png" title="Mentoring and Coaching" paragraph="Learn from Experts" />
                        <BannerCardComponent image="/images/features/f-icon-3.png" title="Teacher Mentor" paragraph="Solution a Call away" />
                    </div>
                </div>
                <!-- Features Wrapper End -->
            </div>
        </div>
        <!-- Features End -->

        <!-- Report Career Section Start -->
        <div class="section report-career-2-section section-padding">
            <div class="container">
                <!-- Report Career Wrapper Start -->
                <div class="report-career-2-wrapper">
                    <div class="row">
                        <div class="col-xl-7 col-lg-6">
                            <!-- Report Career Image Start -->
                            <div class="report-career-2-img-wrapper">
                                <div class="report-career-2-img-sm">
                                    <div class="report-career-2-img img-1">
                                        <img
                                            src="/images/20.jpg" loading="lazy"
                                            alt="">
                                    </div>
                                    <div class="report-career-2-img img-2">
                                        <img
                                            src="/images/21.jpg" loading="lazy"
                                            alt="">
                                    </div>
                                </div>
                                <div class="report-career-2-img-big">
                                    <img
                                        src="/images/19.jpg" loading="lazy"
                                        alt="">
                                </div>
                            </div>
                            <!-- Report Career Image End -->
                        </div>
                        <div class="col-xl-5 col-lg-6 d-lg-flex align-items-center">
                            <!-- Report Career Content Start -->
                            <div class="report-career-content report-career-2-content">
                                <div class="section-title section-devider">
                                    <h2 class="title">Our Purpose</h2>
                                </div>
                                <p>Our Purpose is helping people make a difference in the lives of others. The objective
                                    is to Empower People and we offer Parenting skills, Public Speaking Coaching,
                                    coaching and mentoring services, skill development programs, professional
                                    certification programs to Teachers and Educators, Young Leaders Program with Career
                                    Guidance to students and youth, Leadership programs and Entrepreneurship Development
                                    initiatives.</p>
                            </div>
                            <!-- Report Career Content End -->
                        </div>
                    </div>
                </div>
                <!-- Report Career Wrapper End -->
            </div>
        </div>
        <!-- Report Career Section End -->

        <!-- Courses Start -->
        <div id="courseSec" class="section top-courses-section section-padding">
            <div class="container">
                <div class="top-courses-wrapper">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <!-- Section Title Start -->
                            <div class="section-title section-devider">
                                <h2 class="title">Explore Courses</h2>
                            </div>
                            <!-- Section Title End -->
                        </div>
                    </div>

                    <!-- Courses Wrapper Start -->
                    <div class="top-courses-content-wrapper">
                        <div class="testimonial-wrapper swiper-container testimonial-active">
                            <!-- <div class="swiper-wrapper"> -->
                                <VueSlickCarousel v-bind="slickOptions" ref="slickCourse">
                                    <FrontendCourseSliderCardComponent image="/images/6.jpeg" link="/courses/public-speaking" title="Public Speaking" />
                                    <FrontendCourseSliderCardComponent image="/images/pskil.jpg" link="/courses/parenting-skills" title="Parenting Skills" />
                                    <FrontendCourseSliderCardComponent image="/images/28.jpeg" link="https://pfla.in" title="Certifications Programs" />
                                    <FrontendCourseSliderCardComponent image="/images/cmm.jpg" link="/courses/coaching-mentoring" title="Coaching & Mentoring" />
                                    <FrontendCourseSliderCardComponent image="/images/4.jpeg" link="/courses/young-leadership-program-career-guidance" title="Young Leaders Program & Career Guidance" />
                                    <FrontendCourseSliderCardComponent image="/images/5.jpeg" link="/courses/teacher-mentor" title="Teacher Mentor" />
                                </VueSlickCarousel>
                            <!-- </div> -->
                            <SliderNavButtonComponent @previous-click="prevNavClick" @next-click="nextNavClick" />
                        </div>


                    </div>
                    <!-- Courses Wrapper End -->
                </div>
            </div>
        </div>
        <!-- Courses End -->

        <!-- Team Start -->
        <div class="section team-2-section section-padding">
            <div class="container">
                <!-- Team Wrapper Start -->
                <div class="team-wrapper">
                    <div class="row">
                        <div class="col-lg-7">
                            <!-- Section Title Start -->
                            <div class="section-title section-devider">
                                <h2 class="title">Meet our Resource Team</h2>
                            </div>
                            <!-- Section Title End -->
                        </div>
                    </div>
                    <!-- Team Item Wrapper Start -->
                    <div class="team-2-item-wrapper">
                        <div class="row" style="justify-content:center;">
                            <FrontendTeamCardComponent link="/instructor/deepa-ravichandran" image="/images/1.jpeg" title="Ms. Deepa Ravichandran" designation="Founder Principal of Floretz Academy" />
                            <FrontendTeamCardComponent link="/instructor/nalina-murthy" image="/images/22.jpeg" title="Nalina Murthy" designation="Counsellor & Psychologist" />
                            <FrontendTeamCardComponent link="/instructor/chandrashekhar" image="/images/2.jpeg" title="Chandrashekhar" designation="Senior Educator & Professional Counsellor" />
                            <FrontendTeamCardComponent link="/instructor/varada-murthy" image="/images/15.jpeg" title="Varada Murthy K. S." designation="Leadership Coach" />
                            <FrontendTeamCardComponent link="/instructor/sharad-gupta" image="/images/img/sharad.jpg" title="Sharad Gupta" designation="Entrepreneur" />
                            <FrontendTeamCardComponent link="/instructor/sharmila-jois" image="/images/img/sharmila-jois.jpg" title="Sharmila Jois" designation="Special Educator" />
                        </div>
                    </div>
                    <!-- Team Item Wrapper End -->
                </div>
                <!-- Team Wrapper End -->
            </div>
        </div>
        <!-- Team End -->

        <!-- Features Start -->
        <div class="section features-5-section section-padding pt-0">
            <div class="container">
                <!-- Features Wrapper Start -->
                <div class="features-5-wrapper">
                    <div class="row">
                        <FrontendCallToActionCardComponent image="/images/features-bg.jpg" title="Transform Your Career" paragraph="Develop essential Leadership skills early on to stand out from the crowd" linktext="Explore More" />
                        <FrontendCallToActionCardComponent image="/images/ctc1.png" title="Public Speaking Skills" paragraph="Develop public Speaking Skills from the Experts" linktext="View More" />
                    </div>
                </div>
                <!-- Features Wrapper End -->
            </div>
        </div>
        <!-- Features End -->

        <!-- Testimonial Start -->
        <div
class="section testimonial-2-section section-padding"
            style="background-image: url('/images/bg/testimonial2-bg.jpg');">
            <div class="container">
                <div class="testimonial-2-wrapper">
                    <!-- Section Title Start -->
                    <div class="section-title section-devider text-center">
                        <h2 class="title">What Learners Say About Us</h2>
                    </div>
                    <!-- Section Title End -->
                    <!-- Testimonial Slider Wrappper Start -->
                    <div
class="testimonial-2-slider-wrapper"
                        style="background-image: url('/images/testimonial/testimonial2.jpg');">
                        <div class="testimonial-2-slider">
                            <div class="testimonial-2-content">
                                <div class="svg-bg">
                                    <svg
class="feedback-svg-large" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="554px" height="526px">
                                        <defs>
                                            <linearGradient id="PSgrad_0" x1="0%" x2="100%" y1="0%" y2="0%">
                                                <stop offset="0%" stop-color="#0c83c5" stop-opacity="1"></stop>
                                                <stop offset="100%" stop-color="#71a3f3" stop-opacity="1"></stop>
                                            </linearGradient>
                                        </defs>
                                        <path
fill-rule="evenodd" fill="rgb(255, 31, 89)"
                                            d="M342.000,436.999 L10.000,436.999 C4.477,436.999 -0.000,432.522 -0.000,426.999 L-0.000,9.999 C-0.000,4.476 4.477,-0.001 10.000,-0.001 L544.000,-0.001 C549.523,-0.001 554.000,4.476 554.000,9.999 L554.000,426.999 C554.000,432.522 549.523,436.999 544.000,436.999 L483.000,436.999 L483.000,525.999 L342.000,436.999 Z">
                                        </path>
                                        <path
fill="url(#PSgrad_0)"
                                            d="M342.000,436.999 L10.000,436.999 C4.477,436.999 -0.000,432.522 -0.000,426.999 L-0.000,9.999 C-0.000,4.476 4.477,-0.001 10.000,-0.001 L544.000,-0.001 C549.523,-0.001 554.000,4.476 554.000,9.999 L554.000,426.999 C554.000,432.522 549.523,436.999 544.000,436.999 L483.000,436.999 L483.000,525.999 L342.000,436.999 Z">
                                        </path>
                                    </svg>
                                </div>
                                <!-- Testimonial Slider Active Start -->
                                <div class="swiper-container testimonial-2-active">
                                    <div class="swiper-wrapper">
                                        <VueSlickCarousel v-bind="slickOptionsVideo" ref="slickVideo">
                                        <div class="swiper-slide">
                                            <!-- Single Testimonial Start -->
                                            <div class="single-testimonial-2">
                                                <div class="testimonial-2-text">
                                                    <div>
                                                        <iframe
loading="lazy"
                                                            style="width:100%;min-height:320px;border-radius: 10px;"
                                                            src="https://www.youtube.com/embed/FGhxDOlUztk"
                                                            title="YouTube video player" frameborder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowfullscreen></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Single Testimonial End -->
                                        </div>
                                        <div class="swiper-slide">
                                            <!-- Single Testimonial Start -->
                                            <div class="single-testimonial-2">
                                                <div class="testimonial-2-text">
                                                    <div>
                                                        <iframe
loading="lazy"
                                                            style="width:100%;min-height:320px;border-radius: 10px;"
                                                            src="https://www.youtube.com/embed/8e0AZzr779E"
                                                            title="YouTube video player" frameborder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowfullscreen></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Single Testimonial End -->
                                        </div>
                                        <div class="swiper-slide">
                                            <!-- Single Testimonial Start -->
                                            <div class="single-testimonial-2">
                                                <div class="testimonial-2-text">
                                                    <div>
                                                        <iframe
loading="lazy"
                                                            style="width:100%;min-height:320px;border-radius: 10px;"
                                                            src="https://www.youtube.com/embed/xziPJSnbIRQ"
                                                            title="YouTube video player" frameborder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowfullscreen></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Single Testimonial End -->
                                        </div>
                                        <div class="swiper-slide">
                                            <!-- Single Testimonial Start -->
                                            <div class="single-testimonial-2">
                                                <div class="testimonial-2-text">
                                                    <div>
                                                        <iframe
loading="lazy"
                                                            style="width:100%;min-height:320px;border-radius: 10px;"
                                                            src="https://www.youtube.com/embed/X3Hqo66VIaA"
                                                            title="YouTube video player" frameborder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowfullscreen></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Single Testimonial End -->
                                        </div>
                                    </VueSlickCarousel>
                                    <SliderNavButtonComponent @previous-click="prevNavVideoClick" @next-click="nextNavVideoClick" />
                                    </div>
                                    <!-- Add Pagination -->
                                    <!-- <div class="testimonial-arrow swiper-button-next"></div>
                                    <div class="testimonial-arrow swiper-button-prev"></div>

                                    <div class="swiper-pagination"></div> -->

                                </div>
                                <!-- Testimonial Slider Active End -->
                            </div>
                        </div>
                    </div>
                    <!-- Testimonial Slider Wrappper End -->
                </div>
            </div>
        </div>
        <!-- Testimonial End -->


        <!-- client Start -->
        <div class="section certificate-section section-padding">
            <div class="container">
                <!-- Certificate Wrapper Start -->
                <div class="certificate-wrapper">
                    <!-- Section Title Start -->
                    <div class="section-title section-devider text-center">
                        <h2 class="title">Awards and Accolades</h2>
                    </div>
                    <!-- Section Title End -->
                    <!-- Certificate Content Wrapper Start -->
                    <div class="certificate-content-wrapper">
                        <div class="row">
                            <FrontendAwardCardComponent image="/images/7.jpg" title="Future of India Award for Quality and Leadership Excellence" />
                            <FrontendAwardCardComponent image="/images/8.jpg" title="Best Coaching Institute of the Year Award 2021" />
                            <FrontendAwardCardComponent image="/images/25.jpeg" title="Education Start up of the Year 2021" />
                        </div>
                    </div>
                    <!-- Certificate Content Wrapper End -->
                </div>
                <!-- Certificate Wrapper End -->
            </div>
        </div>
        <!-- client End -->





        <!-- Testimonial Start -->
        <div class="section testimonial-section section-padding">
            <div class="container">
                <div class="section-title text-center">
                    <h2 class="title">Trained & Coached over 50k people & they share <br> success stories</h2>
                </div>
                <!-- Testimonial Wrapper Start -->
                <div class="testimonial-wrapper swiper-container testimonial-active">
                    <div class="swiper-wrapper">
                        <VueSlickCarousel v-bind="slickOptions" ref="slickTestimonial">
                            <FrontendTestimonialCardComponent
                            image="/images/avatar.png"
                            title="Varsha Bhat"
                            designation="Principal - ANPS"
                            message="Without a doubt this is the best course you will find for Public Speaking.
                                        The course enables you to use proper tone, posture, presentation skills and
                                        speech preparation styles." />
                            <FrontendTestimonialCardComponent
                            image="/images/10.jpg"
                            title="Shilpa Raghu"
                            designation="Principal NBGI"
                            message="I have availed Career Guidance and Mentoring services from Varada Murthy @ VMLC
                                        and I felt that he is a Leader with great insight. If you are looking for
                                        Coaching, he is the one to go for." />
                            <FrontendTestimonialCardComponent
                            image="/images/11.jpg"
                            title="Priyanka Nair"
                            designation="Center Head at Kumon"
                            message="The public Speaking & Coaching session I have attended at VMLC benefited me a
                                        lot. I have gained a lot of confidence and can speak now without hesitation and
                                        address parents with confidence." />
                            <FrontendTestimonialCardComponent
                            image="/images/12.jpg"
                            title="Savitha R."
                            designation="Coordinator at Yellow"
                            message="TTP was an incredible program which added lot of values to my life, it is a
                                        perfect program for those who have desire to be a trainer. Madam & Sir are
                                        incredible Coaches." />
                            <FrontendTestimonialCardComponent
                            image="/images/avatar.png"
                            title="Reshma Sultana"
                            designation="Lecturer, Hyderabad"
                            message="2 months was an unforgettable experience to me @ VMLC. Sir's guidance in making
                                        me repeatedly give speeches and giving me continuous feedback helped me develop
                                        confidence." />
                            <FrontendTestimonialCardComponent
                            image="/images/avatar.png"
                            title="Aparna"
                            designation="VP - Treamis World School"
                            message="Public Speaking was a great exposure for our students, the training provided by
                                        VM has helped our students to gain confidence. We are glad to be part of this.
                                        The event was well organised- great job team!" />
                            <FrontendTestimonialCardComponent
                            image="/images/avatar.png"
                            title="Ganga Prasad"
                            designation="Principal - St. Mira's School"
                            message="The atmosphere was electrifying and fully charged. It was amazing to notice
                                        confidence levels of participants. This program has immensely helped our
                                        students and all other participants too. I congratulate PFLA team for the manner
                                        in which they have conducted this event." />
                            <FrontendTestimonialCardComponent
                            image="/images/avatar.png"
                            title="Sir M V PU College"
                            designation="Dr.Rajendra Naidu"
                            message="TPersonal Excellence Program with PS skills conducted by Shri Varada Murthy is a
                                        must for all students and our students have hugely benefited from this program.
                                        In fact, their attitude towards life and studies has changed after attending
                                        this program. I strongly recommend this to all Colleges." />
                    </VueSlickCarousel>
                    <SliderNavButtonComponent @previous-click="prevTestimonialNavClick" @next-click="nextTestimonialNavClick" />
                    </div>
                    <!-- Add Pagination -->
                    <!-- <div class="testimonial-arrow swiper-button-next"></div>
                    <div class="testimonial-arrow swiper-button-prev"></div>

                    <div class="swiper-pagination"></div> -->
                </div>
                <!-- Testimonial Wrapper End -->
            </div>
        </div>
        <!-- Testimonial End -->

        <!-- Courses Subject Start -->
        <div class="section courses-subject-section section-padding">
            <div class="container">
                <!-- Courses Subject Wrapper Start -->
                <div class="courses-subject-wrapper">
                    <div class="section-title section-devider text-center">
                        <h2 class="title">IMPACT</h2>
                    </div>
                    <!-- Section Title End -->
                    <!-- Courses Subject Content Wrapper Start -->
                    <div class="courses-subject-content-wrapper">
                        <div class="row">
                            <FrontendImpactCardComponent classlist="courses-subject-item color-1 text-center" icon="fas fa-book" title="Courses" count="Over 25" />
                            <FrontendImpactCardComponent classlist="courses-subject-item color-2 text-center" icon="fas fa-globe-americas" title="Learn With Ease" count="Online & offline" />
                            <FrontendImpactCardComponent classlist="courses-subject-item color-3 text-center" icon="fas fa-graduation-cap" title="Coached / Trained People" count="50000+" />
                            <FrontendImpactCardComponent classlist="courses-subject-item color-4 text-center" icon="fas fa-calendar-alt" title="Conducted Events" count="Over 60" />
                        </div>
                    </div>
                    <!-- Courses Subject Content Wrapper End -->
                </div>
                <!-- Courses Subject Wrapper End -->
            </div>
        </div>
        <!-- Courses Subject End -->


        <!-- Certificate-2 Start -->
        <div class="section access-course-section certificate-2-section section-padding">
            <div class="container">
                <!-- Certificate-2 Wrapper Start -->
                <div
class="access-course-wrapper certificate-2-wrapper"
                    style="background-image: url('/images/bg/certificate-2-bg.png');">
                    <div class="row">
                        <div class="col-xl-6">
                            <!-- Certificate-2 Image Start -->
                            <div class="access-course-img" data-aos="fade-up" data-aos-delay="200">
                                <img
src="/images/app.jpg" loading="lazy"
                                    alt="">
                            </div>
                            <!-- Certificate-2 Image End -->
                        </div>
                        <div class="col-xl-6">
                            <!-- Certificate-2 Content Start -->
                            <div class="access-course-content" data-aos="fade-up" data-aos-delay="200">
                                <h2 class="title">Get Certified, Get Ahead with Our Programs</h2>
                                <p>Learn at your pace using our App on LMS mode. We provide the tools and skills that
                                    you need for your progress.</p>
                                <NuxtLink class="btn" to="/dashboard">Explore More</NuxtLink>
                            </div>
                            <!-- Certificate-2 Content End -->
                        </div>
                    </div>
                </div>
                <!-- Certificate-2 Wrapper End -->
            </div>
        </div>
        <!-- Certificate-2 End -->

        <!-- Certificate Start -->
        <div class="section certificate-section section-padding pt-0">
            <div class="container">
                <!-- Certificate Wrapper Start -->
                <div class="certificate-wrapper">
                    <!-- Section Title Start -->
                    <div class="section-title section-devider text-center">
                        <h2 class="title">Our Clients And Associations</h2>
                    </div>
                    <!-- Section Title End -->
                    <!-- Certificate Content Wrapper Start -->
                    <div class="certificate-content-wrapper client-wrapper">
                        <div class="row swiper-container client-active">
                            <div class="swiper-wrapper">
                                <VueSlickCarousel v-bind="slickOptionsClient" ref="slickClient">
                                    <FrontendClientCardComponent image="/images/clients/cl1.png" />
                                    <FrontendClientCardComponent image="/images/clients/2.png" />
                                    <FrontendClientCardComponent image="/images/clients/3.png" />
                                    <FrontendClientCardComponent image="/images/clients/5.png" />
                                    <FrontendClientCardComponent image="/images/clients/6.png" />
                                    <FrontendClientCardComponent image="/images/clients/7.png" />
                                    <FrontendClientCardComponent image="/images/clients/cl2.png" />
                                    <FrontendClientCardComponent image="/images/clients/cl3.png" />
                                    <FrontendClientCardComponent image="/images/clients/11.png" />
                                    <FrontendClientCardComponent image="/images/clients/12.png" />
                                    <FrontendClientCardComponent image="/images/clients/13.png" />
                                    <FrontendClientCardComponent image="/images/clients/cl4.png" />
                                    <FrontendClientCardComponent image="/images/clients/cl5.png" />
                                    <FrontendClientCardComponent image="/images/clients/16.png" />
                                    <FrontendClientCardComponent image="/images/clients/18.png" />
                                    <FrontendClientCardComponent image="/images/clients/19.png" />
                                    <FrontendClientCardComponent image="/images/clients/cl5.png" />
                                    <FrontendClientCardComponent image="/images/clients/cl5.png" />
                            </VueSlickCarousel>
                                <!-- <div class="swiper-pagination"></div> -->
                            </div>
                        </div>
                    </div>
                    <!-- Certificate Content Wrapper End -->
                </div>
                <!-- Certificate Wrapper End -->
            </div>
        </div>
        <!-- Certificate End -->

        <el-dialog :visible.sync="dialogFormVisible">
            <iframe :src="dialogFormVisible ? `https://www.youtube-nocookie.com/embed/OOfYqSCvZy8` : ``" class="modalIframe" frameborder="0"></iframe>
        </el-dialog>


    </div>

</template>

<script>
import BannerCardComponent from '~/components/BannerCardComponent.vue';
import FrontendCourseSliderCardComponent from '~/components/FrontendCourseSliderCardComponent.vue';
import FrontendTeamCardComponent from '~/components/FrontendTeamCardComponent.vue';
import FrontendCallToActionCardComponent from '~/components/FrontendCallToActionCardComponent.vue';
import FrontendTestimonialCardComponent from '~/components/FrontendTestimonialCardComponent.vue';
import FrontendClientCardComponent from '~/components/FrontendClientCardComponent.vue';
import FrontendAwardCardComponent from '~/components/FrontendAwardCardComponent.vue';
import FrontendImpactCardComponent from '~/components/FrontendImpactCardComponent.vue';
import SliderNavButtonComponent from '~/components/SliderNavButtonComponent.vue';


export default {
    name: "IndexPage",
    components: { BannerCardComponent, FrontendCourseSliderCardComponent, FrontendTeamCardComponent, FrontendCallToActionCardComponent, FrontendTestimonialCardComponent, FrontendClientCardComponent, FrontendAwardCardComponent, FrontendImpactCardComponent, SliderNavButtonComponent },
    layout: "FrontendLayout",
    data() {
        return {
            slickOptions: {
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                draggable: true,
                pauseOnHover: true,
                swipe: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                        },
                    },
                ],
            },
            slickOptionsVideo: {
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                draggable: true,
                pauseOnHover: true,
                swipe: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                        },
                    },
                ],
            },
            slickOptionsClient: {
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                draggable: true,
                pauseOnHover: true,
                swipe: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                        },
                    },
                ],
            },
            dialogFormVisible: false,
        };
    },
    mounted(){
      // eslint-disable-next-line nuxt/no-env-in-hooks
      if(process.client){
          this.$scrollTo('#__nuxt', 0, {force: true})
      }
    },
    methods: {
        nextNavClick(){
            this.$refs.slickCourse.next()
        },
        prevNavClick(){
            this.$refs.slickCourse.prev()
        },
        nextNavVideoClick(){
            this.$refs.slickVideo.next()
        },
        prevNavVideoClick(){
            this.$refs.slickVideo.prev()
        },
        nextTestimonialNavClick(){
            this.$refs.slickTestimonial.next()
        },
        prevTestimonialNavClick(){
            this.$refs.slickTestimonial.prev()
        },
    }
}
</script>

<style scoped>
.testimonial-2-slider-wrapper{padding: 85px 0;margin-top: 70px;}
.testimonial-2-slider .testimonial-2-content .single-testimonial-2 .testimonial-2-text {padding: 60px 65px;}
.testimonial-2-slider .testimonial-2-content .single-testimonial-2 .testimonial-2-text iframe{
    width: 100%;
    min-height: 300px;
}
.swiper-container{
    position: relative;
}
.modalIframe{
    width: 100%;
    height: 300px;
}
</style>
