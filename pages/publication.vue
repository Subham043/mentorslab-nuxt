<template>
    <div>
        <FrontendBreadcrumbComponent page="Publication" />

        <!-- Report Career Section Start -->
        <div class="section report-career-2-section section-padding-02">
            <div class="container">
                <h1 class="name text-center">Coming Soon</h1>
                <h3 class="name text-center">"Train Your Brain"</h3>
                <!-- Report Career Wrapper Start -->
                <div class="report-career-2-wrapper">
                    <div class="row">

                        <div class="col-xl-4 col-lg-4 col-md-12">
                            <!-- Report Career Image Start -->
                            <div class="report-career-2-img-wrapper">
                                <div class="report-career-2-img-big">

                                    <img src="/images/publication2.jpg" alt="">
                                </div>
                            </div>
                            <!-- Report Career Image End -->
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-12">
                            <!-- Report Career Image Start -->
                            <div class="report-career-2-img-wrapper">
                                <div class="report-career-2-img-big">

                                    <img src="/images/publication2.jpg" alt="">
                                </div>
                            </div>
                            <!-- Report Career Image End -->
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-12">
                            <!-- Report Career Image Start -->
                            <div class="report-career-2-img-wrapper">
                                <div class="report-career-2-img-big">

                                    <img src="/images/publication2.jpg" alt="">
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
        <FrontendContactComponent />

    </div>

</template>

<script>
import FrontendBreadcrumbComponent from '~/components/FrontendBreadcrumbComponent.vue';
import FrontendInstructorComponent from '~/components/FrontendInstructorComponent.vue';
import FrontendContactComponent from '~/components/FrontendContactComponent.vue';


export default {
    name: "PublicationPage",
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