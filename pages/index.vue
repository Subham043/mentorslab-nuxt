<template>
  <div>
    <BreadcrumbComponent />
    <section class="content">
      <p>hey</p>
      <button @click="check">check</button>
    </section>
  </div>
</template>

<script>
import BreadcrumbComponent from '../components/BreadcrumbComponent.vue';
export default {
    name: "IndexPage",
    components: { BreadcrumbComponent },
    layout: "UserLayout",
    methods:{
      check(){
        // eslint-disable-next-line no-console
        // console.log(this.$auth)
        // Refresh tokens
        // console.log(this.$auth.user)
      }
    }
}
</script>
