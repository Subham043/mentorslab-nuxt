<template>
  <div>
    <BreadcrumbComponent />
    <section class="content">
      <p>hey</p>
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
      
    }
}
</script>
