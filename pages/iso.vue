<template>
  <div>
    <FrontendBreadcrumbComponent page="ISO" />

    <!-- About Section Start -->
    <div class="section about-section section-padding">
      <div class="container">
        <div class="about-wrapper">
          <div class="row" style="align-items:center">
            <div class="col-lg-8">
              <div class="about-content">
                <div class="section-title section-devider">
                  <h2 class="title">Edumentorslab (formerly PFLA) IS AN ISO CERTIFIED ORGANIZATIONCOMPLIANCE WITH
                    ISO/IEC 21001:2018 EOMS</h2>
                </div>
                <p>Edumentorslab (formerly PFLA) is now certified ISO/21001:2018 for our Educational services,
                  all the Training programs and Certification programs we offer including publication of Colours books
                  and Colours Curriculum.</p>
                <p>As an Educational Service Providing Academy, we believe in maintaining quality standards and
                  processes in place and take stringent measures to ensure the same. ISO 21001 certification justifies
                  the trust and belief entrusted on us by our clients with regards to quality services and products.</p>
                <p>ISO 21001 certification assures the fact that the people, processes, and various programs we offer at
                  Edumentorslab (formerly PFLA) conform to the standard quality processes prescribed under ISO 21001.
                </p>

              </div>
            </div>
            <div class="col-lg-4">
              <div class="about-img">
                <img src="/images/pfla-iso-certification-small.jpeg" alt="">
              </div>
            </div>
            <div class="col-lg-8">
              <div class="about-content">
                <div class="section-title section-devider">
                  <h2 class="title">WHY DID WE OPT FOR ISO CERTIFICATION?</h2>
                </div>
                <p>As an international services provider in the Education Industry, we receive work from different parts
                  of the world. One of our constant challenges was to ensure optimum quality levels. How could "good
                  intentions" convert to "good quality"? How would our people and processes meet the increasingly
                  stringent standards of the business at international level.</p>
                <p>Edumentorslab (formerly PFLA) ISO 21001:2018 certification reassures our commitment to continual
                  improvement and our passion
                  to serve and further the interests of our Customers while spearheading quality consciousness across
                  all our services.</p>
                <p>Inquire with us to find out how we can help you offer Education Process Consulting services in
                  strategic alliance with My Inhalt to you and set up Quality processes for your Institute /
                  organisation and enhance the profitability of your business.</p>

              </div>
            </div>
            <div class="col-lg-4">
              <div class="about-img">
                <img src="/images/iso_grading_small.jpeg" alt="">
              </div>
            </div>
            <div class="col-lg-12">
              <div class="about-content">
                <div class="section-title section-devider">
                  <h2 class="title">COMPLIANCE WITH ISO 21001:2018QUALITY STANDARDS</h2>
                </div>
                <p>Edumentorslab (formerly PFLA) is an ISO 21001:2018certified organization, and all our Training
                  programs, Certification
                  Programs and books and curriculum comply to it</p>
                <p>This certification guarantees our commitment to consistently meet and excel clients' requirements by
                  delivering high-quality services and productsand support.</p>
                <p>Further, it provides credibility to our management's commitment and motivation to follow standard
                  process approach for constant improvement and build quality management principles with a strong focus
                  to offer quality services to our customers.</p>
                <p><strong>Welcome to Edumentorslab (formerly PFLA) world … The World of possibilities for you.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About Section End -->

  </div>

</template>

<script>
import FrontendBreadcrumbComponent from '~/components/FrontendBreadcrumbComponent.vue';


export default {
  name: "ISOPage",
  components: { FrontendBreadcrumbComponent },
  layout: "FrontendLayout",
  data() {
    return {};
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      this.$scrollTo('#__nuxt', 0, { force: true })
    }
  }
}
</script>
