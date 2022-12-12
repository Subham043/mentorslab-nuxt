<template>
    <div>
        <FrontendBreadcrumbComponent page="Chandrashekhar" />

        <FrontendInstructorComponent 
        title="Chandrashekhar" 
        description='Hailing from a family of Industrialists, in the Machine Tool 
Manufacturing sector, Chandrashekhar began his 
illustrious career as a classroom teacher, in mid 1960s. Armed with Post Graduate Degrees in Education. 
Chandrashekhar has been associated with prestigious 
education institutions in India. He has served in various 
capacities as a classroom teacher, lecturer, resource 
person, HOD, Head of the Institution and Consultant.'
        designation="Senior Educator & Professional Counsellor"
        experience="25"
        image="/images/2.jpeg">
    
        <div class="team-profile-description-2">
                    <p>He has completed his P-G Diplomas in:</p>
<ul>
    <li>Guidance & Counselling, Clinical, Industrial & 
Child Psychology,</li>
<li>Education Leadership Programme. Including 
TQM in Education & has undergone</li>
<li>Certification for Behavioural Training Design & 
9 Gems Psychometric Assessments.</li>
<li>Certified NLP Practitioner. (ABNLP)ICF Certified
Executive Coach</li>
</ul>
                </div>
                <div class="team-profile-description">
                    <h3 class="title">Diversity of Experiences</h3>
                    <p>Chandrashekhar is a member of The Aeronautical 
Engineer’s Society of India & Handwriting Institute of India 
and he has wealth of experience of over 30 years.</p>
<p>As an active partner in the Family Industry, designed 
special tools, rigs & fixtures for the Engineering, 
Manufacturing & Space Research Industry (ISRO)
As a trained behaviour scientist, Chandrashekhar has 
developed aptitude test for career guidance tools for 
young adults & standardised test battery for 
comprehension, computation skills in English and 
Mathematics, as part of his doctoral programme, (CASE – 
Vadodara).</p>
<p>As a Certified Mentor, Coach and Facilitator:
Chandrashekhar has designed practical & innovative 
‘teaching – learning’ environments at the School & 
University levels, to facilitate, intellectual & emotional 
development of Faculty, Children & young adults, among 
other Soft Skills interventions both in the Corporate and 
Education sectors.</p>
<p>Chandrashekhar has continued to address the need for 
constant professional training in behaviour sciences & 
academic fields to be in touch with modern trends.</p>
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
    name: "ChandrashekharInstructorPage",
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