<template>
    <div>
        <FrontendBreadcrumbComponent page="Varada Murthy K. S." />

        <FrontendInstructorComponent 
        title="Varada Murthy K. S." 
        description='Varada is an Entrepreneur and a thought-leader with over 25 years 
of professional experience in the area of Human Resources and 
Educational Services, having worked both in India and abroad. He 
continuously strive to build people and help them become high 
performing contributors. He believes in the potential of an individual, 
irrespective of their background, if guided well, can create a 
humongous positive impact on the society.'
        designation="Entrepreneur, Leadership Coach and Founder of PFLA"
        experience="20"
        image="/images/15.jpeg">
    
        <div class="team-profile-description-2">
                    <p>Varada is an internationally Certified Leadership and Success Coach
(CLC and CEC) from one of the highly reputed training institutions in 
United States, certified by International Coach Federation (ICF). He 
is also affiliated with Certified Coaches Alliance (CCA). 
He   is   a   post   Graduate   in   Human   Resources   from   Bangalore
University,   PG   Diploma   in   Business   Management   from   Narsee
Monjee   Institute   of   Management,   (NMIMS),   Mumbai   and   is   a
Commerce Graduate from Bangalore University.   He has recently
been conferred Doctorate in Management (DMS). His research was
on  “Leadership   in   Education”   –   Creating   a   learning
environment. </p>
                </div>
                <div class="team-profile-description">
                    <h3 class="title">Diversity of Experiences</h3>
                    <p>He loves to work with students, youth, budding entrepreneurs, SMEs, 
Institutional Leaders and Teacher educators to guide them to become 
high performing contributors. He is passionate in helping people 
unleash their true potential through life transforming Coaching, 
Certification and Personal Excellence Programs where the main focus 
will be on Skill Development for results. He works very closely with 
Educational Institutes, Youth, Teaching and Student Communities, 
Entrepreneurs. He personally believes in the potential of an individual, 
irrespective of their background, if guided well, can create a 
humongous positive impact on the society.</p><br>
<p>He has founded <NuxtLink to="/">MentorsLab.in</NuxtLink> under the banner of PFLA International Pvt. Ltd. with a mission to Empower People.  With the support of his team, he has trained and coached over 50,000 people that include, Corporate and Government Sector employees Teaching Faculty of Schools and Colleges, Youth and UG and PG students on various employability skills viz., Public Speaking Skills, Effective Communication, Critical Thinking, Problem Solving and Decision Making, Presentation skills, Goal Setting, Team Building and Time Management.</p>
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
    name: "VaradaInstructorPage",
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