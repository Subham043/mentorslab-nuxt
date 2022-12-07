<template>
  <div class="fullscreen-wrapper">
    <div
      :class="$store.state.dark.class"
    >
      <div class="wrapper hidden sidebar-height">
          <HeaderComponent/>
          <SideBarComponent/>
          <ProfileComponent/>
          <div class="content-wrapper">
            <div class="container-full">
              <Nuxt />
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import SideBarComponent from '../components/SideBarComponent.vue';
import ProfileComponent from '~/components/ProfileComponent.vue';
export default {
  name: 'DashboardLayout',
  components: { HeaderComponent, SideBarComponent, ProfileComponent },
  middleware: 'auth',
  head() {
        return {
            title: "Mentorslab",
            link: [
                { rel: "stylesheet", href: "/css/bootstrap.min.css" },
                { rel: "stylesheet", href: "/css/color_theme.css" },
                { rel: "stylesheet", href: "/css/style_rtl.css" },
                { rel: "stylesheet", href: "/css/style.css" },
                { rel: "stylesheet", href: "/css/skin_color.css" },
            ],
        };
  },
  computed: {
		dark () {
		return this.$store.state.dark.class
		}
	},
  watch: {
    $route(to) {
    this.$store.commit('sidebar/toggle', {status: false})
    this.$store.commit('profilebar/toggle', {status: false})
    }
  },
  created() {
    this.$store.commit('sidebar/toggle', {status: false})
    this.$store.commit('profilebar/toggle', {status: false})
  }
}
</script>

<style scoped>
.sidebar-height{
	min-height: 100vh;
}
</style>