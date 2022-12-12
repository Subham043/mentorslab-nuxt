<template>
    <div>
        <CourseBreadCrumbComponent page="Parenting Skills" />
        <CourseHeroComponent
image="/images/ps1.png" title="Parenting Skills" description="Parenting skills workshops for parents of young children" />

        <div class="section single-course-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <!-- Single Course Wrapper Start -->
                        <div class="single-course-wrapper">
                            <!-- Single Course Description Start -->
                            <div class="single-course-description">
                                <h4 class="title">Description</h4>
                                <p>Objective: Empower Parenting community with better parenting skills.</p>
                                <p>Mindful parenting workshops will help you learn mindful parenting skills
                                    quickly and make you a better parent 
                                   .</p>
                            </div>
                            <div class="single-course-description mt-2">
                                <h4 class="title">Target Audience: </h4>
                                <p>Young Mothers, Pregnant ladies planning to be Mothers, Care Takers, Early Years  and K 12 Teachers</p>
                            </div>
                            <div class="single-course-description mt-2">
                                <h4 class="title">Age group we focus on:  </h4>
                                <p>0 to 2 years and 2 to 6 years</p>
                            </div>
                            <!-- Single Course Description End -->
                            <!-- Single Course Benefits Start -->
                            <div class="single-course-benefits-wrap">
                                <h4 class="title">What Will I Learn?</h4>
                                <p class="mb-3">Mindful parenting helps you improve</p>
                                <ul class="course-benefits-list">
                                    <li>Mental well-being of parent and the child</li>
                                    <li>Parent-child interactions</li>
                                    <li>Positive parenting practices</li>
                                    <li>Parental empowering and competency </li>
                                    <li>Child behaviour</li>
                                    <li>Say “No” to corporal punishments</li>
                                </ul>
                            </div>

                            <!-- Single Course Benefits End -->
                            <!-- Single Course Topics Start -->
                            <div class="single-course-topics-wrap">



                                <!-- Single Course Topics Accordion End -->
                                <!-- Single Course Instructor Start -->
                                <div class="single-course-instructor-wrap">
                                    <h4 class="title">Mentor</h4>
                                    <div class="swiper-container">
                                        <VueSlickCarousel v-bind="slickOptions" ref="slickInstructor">
                                            <CourseTeamCardComponent link="/instructor/deepa-ravichandran" image="/images/1.jpeg" title="Ms. Deepa Ravichandran" designation="Founder Principal of Floretz Academy" />
                                            <CourseTeamCardComponent link="/instructor/nalina-murthy" image="/images/22.jpeg" title="Nalina Murthy" designation="Counsellor & Psychologist" />
                                            <CourseTeamCardComponent link="/instructor/sharmila-jois" image="/images/img/sharmila-jois.jpg" title="Sharmila Jois" designation="Special Educator" />
                                        </VueSlickCarousel>
                                        <SliderNavButtonComponent />
                                    </div>

                                </div>
                                <!-- Single Course Instructor End -->
                            </div>
                            <!-- Single Course Topics End -->
                            <!-- Single Course Review Start -->

                            <!-- Single Course Review End -->
                        </div>
                        <!-- Single Course Wrapper End -->
                    </div>
                    <div class="col-lg-4">
                        <!-- Single Course Sidebar Start -->
                        <div class="single-course-sidebar">
                            <div class="single-course-sidebar-wrapper">
                                <!-- Single Course Price Box Start Start -->
                                <div class="course-price-box">
                                    <div class="price-box-video">
                                        <img src="/images/ps2.jpg" alt="">
                                        <!-- <a class="popup-video" href="https://www.youtube-nocookie.com/embed/Ga6RYejo6Hk"><i class="fas fa-play"></i></a> -->
                                    </div>
                                    <span class="price">Free</span>
                                    <ul class="price-box-content">
                                        <!--<li>-->
                                        <!--    <div class="price-box-icon">-->
                                        <!--        <span class="meta-label"><i class="flaticon-user-1"></i> Instructor</span>-->
                                        <!--    </div>-->
                                        <!--    <div class="price-box-info">-->
                                        <!--        <span class="value"><a href="#">Deepa Ravichandran</a></span>-->
                                        <!--    </div>-->
                                        <!--</li>-->
                                        <li>
                                            <div class="price-box-icon">
                                                <span class="meta-label"><i class="flaticon-wall-clock"></i> Duration</span>
                                            </div>
                                            <div class="price-box-info">
                                                <span class="value">00h 45m 00s </span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="price-box-btn">
                                        <button class="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal">Enroll Now</button>
                                    </div>
                                    <div class="price-box-social">
                                        <span class="share-title">Share:</span>
                                        <ul class="social">
                                            <li>
                                              <a class="share-facebook" href="https://www.facebook.com/share.php?u=https://mentorslab.in/courses/parenting-skills&title=Parenting Skills" target="blank"
                                                ><i class="fab fa-facebook-f"></i
                                              ></a>
                                            </li>
                                            <li>
                                              <a class="share-twitter" href="https://twitter.com/share?text=Parenting Skills&url=https://mentorslab.in/courses/parenting-skills" target="blank"
                                                ><i class="fab fa-twitter"></i
                                              ></a>
                                            </li>
                                            <li>
                                              <a class="share-linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=https://mentorslab.in/courses/parenting-skills&title=Parenting Skills&source=Parenting Skills" target="blank"
                                                ><i class="fab fa-linkedin-in"></i
                                              ></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- Single Course Price Box Start End -->
                                <!-- Sidebar Widget Start -->
                                <div class="sidebar-widget">
                                    <!-- Widget Title Start -->
                                    <div class="widget-title">
                                        <h3 class="title">More Courses</h3>
                                    </div>
                                    <!-- Widget Title End -->
                                    <!-- Widget Recent Post Start -->
                                    <div class="recent-posts">
                                        <ul>
                                            <li>
                                                <CourseCardComponent link="/courses/public-speaking" image="/images/6.jpeg" title="Public Speaking" />
                                            </li>
                                            <li>
                                                <CourseCardComponent link="/courses/teacher-mentor" image="/images/5.jpeg" title="Teacher Mentor" />
                                            </li>
                                            <li>
                                                <CourseCardComponent link="/courses/parenting-skills" image="/images/14.jpeg" title="Parenting skills" />
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- Widget Recent Post End -->
                                </div>
                                <!-- Sidebar Widget End -->
                            </div>
                        </div>
                        <!-- Single Course Sidebar End -->
                    </div>
                </div>
            </div>

        </div>
        <!-- Single Course End -->

    </div>

</template>

<script>
import CourseBreadCrumbComponent from '~/components/CourseBreadCrumbComponent.vue';
import CourseHeroComponent from '~/components/CourseHeroComponent.vue';
import CourseTeamCardComponent from '~/components/CourseTeamCardComponent.vue';
import CourseCardComponent from '~/components/CourseCardComponent.vue';
import SliderNavButtonComponent from '~/components/SliderNavButtonComponent.vue';



export default {
    name: "ParentingSkillPage",
    components: { CourseBreadCrumbComponent, CourseHeroComponent, CourseTeamCardComponent, CourseCardComponent, SliderNavButtonComponent },
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
                slidesToShow: 2,
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
        };
    },
    mounted(){
      // eslint-disable-next-line nuxt/no-env-in-hooks
      if(process.client){
          this.$scrollTo('#__nuxt', 0, {force: true})
      }
    }
}
</script>

<style scoped>
img {
    max-width: 100%;
    width: 100%;
}
.swiper-container{
    position: relative;
}
</style>