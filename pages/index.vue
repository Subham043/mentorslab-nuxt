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
    layout: "DashboardLayout",
    methods:{
      check(){
        // eslint-disable-next-line no-console
        // console.log(this.$auth)
        // Refresh tokens
        this.$auth.refreshTokens()
      }
    }
}
</script>
