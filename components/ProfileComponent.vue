<!-- eslint-disable vue/valid-template-root -->
<template>
  <el-drawer
:visible.sync="activeProfilebar" direction="rtl" size="20%" :show-close="false" :with-header="false"
		:before-close="toogleProfileBar">
  <div class="p-30 bg-white">
    <div class="d-flex align-items-center justify-content-between pb-30">
      <a
      href="javascript:void(0)"
      class="btn btn-icon btn-danger-light btn-sm no-shadow"
      @click="toogleProfileBar"
      >
      <i class="el-icon-close"></i>
    </a>
    <h4 class="m-0">
      User Profile
    </h4>
    </div>
    <div>
      <div class="d-flex flex-row">
        <div class="">
          <img
            src="/images/avatar/avatar-13.png"
            alt="user"
            class="rounded bg-danger-light w-150"
            width="100"
          />
        </div>
        <div class="ps-20 text-left">
          <h5 class="mb-0">{{$auth.user.name ? $auth.user.name : "Anonymous"}}</h5>
          <p class="my-5 text-fade">{{$auth.user.role}}</p>
          <a href="mailto:dummy@gmail.com"
          >
          {{$auth.user.email}}</a
          >
        </div>
      </div>
    </div>
    <div class="dropdown-divider my-30"></div>
    <div>
      <div class="d-flex align-items-center mb-30 justify-content-between">
        <div
          class="me-15 bg-primary-light h-50 w-50 l-h-60 rounded text-center"
        >
          <span class="icon-Library fs-24"
            ><i class="el-icon-user-solid"></i></span>
        </div>
        <div class="d-flex flex-column fw-500 text-left">
          <a
            href="extra_profile.html"
            class="text-dark hover-primary mb-1 fs-16"
            >My Profile</a
          >
          <span class="text-fade">Account settings and more</span>
        </div>
      </div>
      <div class="d-flex align-items-center mb-30 justify-content-between">
        <div
          class="me-15 bg-success-light h-50 w-50 l-h-60 rounded text-center"
        >
          <span class="icon-Group-chat fs-24"
            ><font-awesome-icon :icon="['fa', 'gear']"
            /></span>
        </div>
        <div class="d-flex flex-column fw-500 text-left">
          <a href="setting.html" class="text-dark hover-success mb-1 fs-16"
            >Settings</a
          >
          <span class="text-fade">Accout Settings</span>
        </div>
      </div>
    </div>
    <div class="dropdown-divider my-30"></div>
    
  </div>
  </el-drawer>
</template>

<script>
export default {
  name: 'ProfileComponent',
  computed: {
		activeProfilebar() {
			return this.$store.state.profilebar.profilebar
		}
	},
  methods: {
		toogleProfileBar() {
			this.$store.commit('profilebar/toggle')
		}
	}
}
</script>
