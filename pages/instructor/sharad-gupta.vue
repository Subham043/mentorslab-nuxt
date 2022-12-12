<template>
    <div>
        <FrontendBreadcrumbComponent page="Sharad Gupta" />

        <FrontendInstructorComponent 
        title="Sharad Gupta" 
        description='Sharad is an accomplished professional comes with a wealth of experience of over 39 years in IT/software industry including two successful start-ups. Highly focused and result oriented professional with an ability to solve problems, excel in execution and turning around companies. Create Sales and Marketing Strategy to open new markets. Sharad has BSc Degree,  MA in Arts and Diploma in marketing and sales.'
        designation="Entrepreneur"
        experience="39"
        image="/images/img/sharad.jpg">
    
        <div class="team-profile-description">
            <h3 class="title">Diversity of Experiences</h3>
            <p>Sharad has worked with some of the well known MNCs in India and abroad viz., IBM Mumbai, Webify solutions, Mumbai Cenduit India Services Pvt. Ltd,Bangalore Amex Information Technologies, Mumbai Birla Consultancy and SW services, Mumbai, Jumbo Electronics, Dubai, Blue Star, Mumbai Nelco, Mumbai Bradma, Mumbai</p><br>
            <p>Sharad has conducted many programs over 25 years in the companies that he has worked which included communications skills, grooming, mentoring. Something that he loves to deliver.</p>
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
    name: "SharadInstructorPage",
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