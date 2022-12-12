<template>
    <div>
        <FrontendBreadcrumbComponent page="Sharmila Jois" />

        <FrontendInstructorComponent 
        title="Sharmila Jois" 
        description='Sharmila Jois has been working as a special educator for the past 17 years. She has completed her Masters in both Child Guidance and Inclusive Education. She has also attained a diploma in Special education in SLD. Over the years, Sharmila has worked as a special educator in mainstream schools, both inclusive and exclusive, in special school and in clinic setup. She currently is the Cofounder at Eka Educational and Charitable Trust.'
        designation="Special Educator"
        experience="17"
        image="/images/img/sharmila-jois.jpg">
    
        <div class="team-profile-description">
            <h3 class="title">Diversity of Experiences</h3>
            <p>She is currently serving as the Board member in Special Educator's and Rehabilitation professional's Association, Karnataka (SERPA). She has conducted multiple workshops to promote inclusion and spread awareness and sensitization about various disabilities in colleges and universities such as Jyothi Nivas, KPAMRC and in clinical set ups like Daffodils etc. Her strength has been teacher training in curriculum development for children with special needs, vocational planning for children with special needs, parental counselling, stress management among parents. She hopes to extend her learning through conducting research in the field of special education and collaborate with institutes interested in research.</p><br>
            <p>Sharmila has been counselling and guiding parents and educators about importance of exposing children across various skill areas in early childhood. The development of cognitive, physical, social emotional can happen only through play and discovery.</p>
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
    name: "SharmilaInstructorPage",
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