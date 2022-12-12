<template>
    <div>
        <FrontendBreadcrumbComponent page="Deepa Ravichandran" />

        <FrontendInstructorComponent 
        title="Deepa Ravichandran" 
        description='Deepa Ravichandran is the Founder-Principal of Floretz Academy and is a Chief Mentor at Smriti Academy.  She is a Post Graduate in Industrial Electronics who went in to the education sector in line with her calling - passion for children. She holds a diploma in Primary and Elementary Montessori education, diploma in Special Education and "Language and Communication Training" from Hanens, U.K. She is an "Introduction Leadership Program" Leader of The Landmark Forum.'
        designation="Founder Principal of Floretz Academy"
        image="/images/1.jpeg">
    
            <div class="team-profile-description">
                <h3 class="title">Diversity of Experiences</h3>
                <p>With 20+ years of experience in Education Sector, Deepa brings with her the unique ability to create fun learning environments for children. She trains teachers across the country and has a deep understanding of blending the Montessori Way and Philosophy with the curriculum the school adopts. She says that she views her job as “sculpting” the future generation of India. </p><br>
                <p>She is married to Ravichandran who is the chairperson of an NGO called e-vidyaloka, which educates 7 million children of rural India from across the country. She has two daughters. One is a data scientist working in Canada and the other is in her final year doing theater studies and psychology. </p><br>
                <p>She feels that her family and her students are her life’s best gifts. Volunteering is very close to her heart and she has been an Isha volunteer for the past 15 years. </p><br>
                <p>She was awarded the “PLFA EXCELLENCE AWARD” for leadership in the field of education and for her passion in for ‘Sculpting’ the future generations of the country through education.</p>
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
    name: "DeepaInstructorPage",
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
.team-profile-description-2 ul{
    list-style: decimal;
    padding-left: 20px;
}
.team-profile-description ul{
    list-style: decimal;
    padding-left: 20px;
}
</style>