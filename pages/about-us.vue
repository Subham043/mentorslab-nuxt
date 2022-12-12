<template>
    <div>
       <FrontendBreadcrumbComponent page="About Us" />
        
        <!-- Report Career Section Start -->
        <div class="section report-career-2-section section-padding-02">
            <div class="container">
                <!-- Report Career Wrapper Start -->
                <div class="report-career-2-wrapper">
                    <div class="row">
                        
                        <div class="col-xl-8 col-lg-6 d-lg-flex align-items-center">
                            <!-- Report Career Content Start -->
                            <div class="report-career-content report-career-2-content">
                                <div class="section-title section-devider">
                                    <h2 class="title">Our Purpose</h2>
                                </div>
                                <p>Helping people make a difference in the lives of others.</p>
                                <p>We strongly believe that you have the potential to make an impact. If you have the desire, you need to believe in you and develop a positive mind-set to get to the action mode. However good maybe our ideas are, unless we Action, we don’t get the desired result. Action creates RESULTS, inaction creates doubt in our minds! We are sure, you come to us for a positive solution.</p>
                                <p>And before you start actioning, the other golden word you need to consider is “WHY’. It is a powerful question and if you have a strong purpose (Why) the how (plan of action) becomes easy..</p>
                                <p>My team and I work with this concept of “WHY” (the Purpose) and the Action and help you unlock your true potential and achieve your desired result; be it creating an impact and significance, achieving personal success or transforming lives of others.</p>
                                
                            </div>
                            <!-- Report Career Content End -->
                        </div>
                        <div class="col-xl-4 col-lg-6">
                            <!-- Report Career Image Start -->
                            <div class="report-career-2-img-wrapper">
                                <div class="report-career-2-img-big">
                                    <img src="/images/career-big2.jpg" alt="">
                                </div>
                            </div>
                            <!-- Report Career Image End -->
                        </div>
                        
                    </div>
                </div>
                <!-- Report Career Wrapper End -->
            </div>
        </div>
        <!-- Report Career Section End -->


        <FrontendInstructorComponent 
        title="Varada Murthy K. S." 
        description="Varada is an Entrepreneur and a thought-leader with over 25 years of professional experience
        in the area of Human Resources and Educational Services, having worked both in India and
        abroad. He continuously strive to build people and help them become high performing
        contributors. He believes in the potential of an individual, irrespective of their
        background, if guided well, can create a humongous positive impact on the society."
        designation="Entrepreneur, Leadership Coach and Founder of PFLA"
        image="/images/15.jpeg" />
        
        <!-- Report Career Section Start -->
        <div class="section report-career-2-section section-padding-02">
            <div class="container">
                <!-- Report Career Wrapper Start -->
                <div class="report-career-2-wrapper">
                    <div class="row">
                        
                        <div class="col-xl-12 col-lg-6 d-lg-flex align-items-center">
                            <!-- Report Career Content Start -->
                            <div class="report-career-content report-career-2-content">
                                <div class="section-title section-devider">
                                    <h2 class="title">Why coaching?</h2>
                                </div>
                                <p>“Each person holds so much power within themselves that needs to be let out. Sometimes they just need a little nudge, a little direction, a little support, a little coaching, and the greatest things can happen.” — Pete Carroll</p>
                                
                            </div>
                            <!-- Report Career Content End -->
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <!-- Report Career Image Start -->
                            <div class="single-course-benefits-wrap">
                                <h4 class="title">We shall Partner in your journey and help you in the following areas:</h4>
                                <ul class="course-benefits-list">
                                    <li>Personal and professional success.</li>
                                    <li>Developing confidence and effective speaking skills.</li>
                                    <li>Career transition.</li>
                                    <li>Leadership Development.</li>
                                    <li>Creating high performing teams.</li>
                                </ul>
                            </div>
                            <!-- Report Career Image End -->
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <!-- Report Career Image Start -->
                            <div class="single-course-benefits-wrap">
                                <h4 class="title">Methodology:</h4>
                                <ul class="course-benefits-list">
                                    <li>Highly personalized coaching sessions.</li>
                                    <li>One to one focussed sessions.</li>
                                    <li>Help you to identify your Why (Purpose).</li>
                                    <li>Help you align your goals into OPSMART.</li>
                                    <li>Help you prepare PoA (Plan of Action).</li>
                                    <li>Work with you closely to help you achieve your personal / professional goals.</li>
                                </ul>
                            </div>
                            <!-- Report Career Image End -->
                        </div>
                        
                    </div>
                </div>
                <!-- Report Career Wrapper End -->
            </div>
        </div>
        <!-- Report Career Section End -->



        
        <FrontendContactComponent />


    </div>

</template>

<script>
import FrontendBreadcrumbComponent from '~/components/FrontendBreadcrumbComponent.vue';
import FrontendInstructorComponent from '~/components/FrontendInstructorComponent.vue';
import FrontendContactComponent from '~/components/FrontendContactComponent.vue';


export default {
    name: "AboutPage",
    components: { FrontendBreadcrumbComponent, FrontendInstructorComponent, FrontendContactComponent },
    layout: "FrontendLayout",
    data() {
        return {};
    },
    mounted(){
      // eslint-disable-next-line nuxt/no-env-in-hooks
      if(process.client){
          this.$scrollTo('#__nuxt', 0, {force: true})
      }
    }
}
</script>