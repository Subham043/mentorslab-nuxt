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
  computed: {
		dark () {
		return this.$store.state.dark.class
		}
	},
}
</script>

<style scoped>
.sidebar-height{
	height: 100vh;
}
</style>