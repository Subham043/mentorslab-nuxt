<template>
  <div>
    <FrontendBreadcrumbComponent page="Nalina Murthy" />

    <FrontendInstructorComponent title="Nalina Murthy" description='Nalina comes with over 20 years of professional experience in
the area of Education, Training, Counseling and Curriculum
Designing. Designing and facilitating Teachers Training Program
“ITTC for aspiring to become Teachers, Housewives and In-
Service teachers of various Schools' designation="Psychologist, Counselor & Special Educator" image="/images/22.jpeg">

      <div class="team-profile-description-2">
        <p>She is a Facilitator with a passion to work with Teachers, Parents
          and Student community. She works with schools as a consultant
          supporting School teachers by creating and customizing teaching
          methods to reach and teach a child.</p>
        <ul>
          <li>Special Educator, One year program in Inclusive Education from Spastic
            Society of Karnataka</li>
          <li>Masters in Counselling & psychotherapy from Kuvempu University in
            association with Manasa Educational Foundation for Mental Health</li>
          <li>Overview of Anthroposophy & Waldorf Education at Bangalore Steiner School</li>
          <li>Science Graduate from Bengaluru University</li>
        </ul>
      </div>
      <div class="team-profile-description">
        <h3 class="title">Diversity of Experiences</h3>
        <p>Nalina has over 20 years of experience working in the Corporate
          and Educational Sector. She closely work with Teaching, Parent
          and student community and offer counseling services and variety
          of other educational services that include Facilitation of
          programs, Counseling, as a Special Educator at Schools
          helping students with learning challenges in regular classrooms,
          Life skills and smart study programs.</p><br>
        <ul>
          <li>Providing intervention for problematic behavior</li>
          <li>Providing intervention for children with disabilities</li>
          <li>Counsel students, parents and teachers on studies and
            other challenges</li>
        </ul><br>
        <p>She is currently associated with Edumentorslab (formerly PFLA) and is instrumental in
          designing Teachers Training programs (Integrated Teachers
          Training Certification Program), a unique professional certificate
          program for aspiring to be teachers. She has designed and
          developed “Colours” curriculum for Preschools that defines “a
          strong foundation for Early Years”</p><br>
        <ul>
          <li>She has been honoured with “Outstanding Women Educator Award – 2018 by
            NFED</li>
          <li>She was invited to address parents’ community on “Samaya” TV channel for
            their “Sakhi” program on “activity based learning”.</li>
          <li>Won first place in “on the spot poetry competition”, conducted by Rotary
            International - District 3190 Bengaluru.</li>
        </ul>
      </div>
    </FrontendInstructorComponent>

    <FrontendContactComponent />

  </div>

</template>

<script>
import FrontendBreadcrumbComponent from '~/components/FrontendBreadcrumbComponent.vue';
import FrontendInstructorComponent from '~/components/FrontendInstructorComponent.vue';
import FrontendContactComponent from '~/components/FrontendContactComponent.vue';


export default {
  name: "NalinaInstructorPage",
  components: { FrontendBreadcrumbComponent, FrontendInstructorComponent, FrontendContactComponent },
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

<style scoped>
.team-profile-description-2 {
  padding-top: 25px;
  font-size: 15px;
  line-height: 1.75;
  font-weight: 400;
  font-family: "Nunito Sans", sans-serif;
  color: #666666;
}

.team-profile-description {
  padding-top: 55px;
  font-size: 15px;
  line-height: 1.75;
  font-weight: 400;
  font-family: "Nunito Sans", sans-serif;
  color: #666666;
}

.team-profile-description-2 ul {
  list-style: decimal;
  padding-left: 20px;
}

.team-profile-description ul {
  list-style: decimal;
  padding-left: 20px;
}
</style>
