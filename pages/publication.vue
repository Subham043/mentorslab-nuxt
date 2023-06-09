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
        <FrontendContactComponent />

    </div>

</template>

<script>
import FrontendBreadcrumbComponent from '~/components/FrontendBreadcrumbComponent.vue';
import FrontendContactComponent from '~/components/FrontendContactComponent.vue';


export default {
    name: "PublicationPage",
    components: { FrontendBreadcrumbComponent, FrontendContactComponent },
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
