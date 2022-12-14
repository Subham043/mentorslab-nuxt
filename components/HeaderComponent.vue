<template>
    <header class="main-header box">
	  
    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
	  <div class="app-menu d-flex align-items-center">
		<ul class="header-megamenu nav">
			<li class="btn-group nav-item">
				<a href="javascript:void(0)"  class="waves-effect waves-light nav-link push-btn btn-primary-light ms-0" data-toggle="push-menu" role="button" @click="toogleSideBar">
                    <font-awesome-icon :icon="activeSidebar ? ['fa', 'xmark'] : ['fa', 'bars']" />
			    </a>
			</li>
		</ul> 
		<div class="d-md-flex d-none align-items-center logo-box justify-content-start">		
		<NuxtLink to="/" class="logo-lg">
			<span class="light-logo"><img class="header-logo" src="/images/logo.png" alt="logo"></span>
		</NuxtLink>
	  </div> 
	  </div>
		
      <div class="navbar-custom-menu r-side">
        <ul class="nav navbar-nav">
			<li class="btn-group d-xl-inline-flex d-none">
				<NuxtLink to="/" data-provide="fullscreen" class="waves-effect skin-toggle waves-light" title="Full Screen" @click="toggleFullScreen">
					<label class="switch">
						<span class="switch-on">
							<i class="el-icon-s-home"></i>
						</span>
					</label>
			    </NuxtLink>
			</li>

			<li class="btn-group d-md-inline-flex d-none">
              <a href="javascript:void(0)" title="skin Change" class="waves-effect skin-toggle waves-light" @click="toggleDarkMode">
			  	<label class="switch">
					<span class="switch-on"><i class="el-icon-moon" ></i></span>
					<span class="switch-off"><i class="el-icon-sunny" ></i></span>
				</label>
			  </a>				
            </li>
			
			<li class="btn-group nav-item d-xl-inline-flex d-none">
				<a href="javascript:void(0)" data-provide="fullscreen" class="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" title="Full Screen" @click="toggleFullScreen">
					<font-awesome-icon :icon="fullScreen ? ['fa', 'expand'] : ['fa', 'compress']" />
			    </a>
			</li>
			
			<!-- User Account-->
			<li class="dropdown user user-menu">
				<a href="javascript:void(0)" class="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow" title="User" data-bs-toggle="modal" data-bs-target="#quick_user_toggle" @click="toogleProfileBar">
					<div class="d-flex pt-1 align-items-center">
						<div class="text-end me-10">
							<p class="pt-5 fs-14 mb-0 fw-700">{{$auth.user.name ? $auth.user.name : "Anonymous"}}</p>
							<small class="fs-10 mb-0 text-uppercase text-mute">{{$auth.user.role}}</small>
						</div>
						<img src="/images/avatar/avatar-13.png" class="avatar rounded-circle bg-primary-light h-40 w-40" alt="" />
					</div>
				</a>
			</li>		  
        
			
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
	data() {
		return {
			fullScreen: this.$fullscreen.isFullscreen || true
		}
	},
	computed: {
		activeSidebar () {
		return this.$store.state.sidebar.sidebar
		},
		dark () {
		return this.$store.state.dark.dark
		},
	},
    methods:{
        toggleDarkMode(){
            this.$store.commit('dark/toggle')
        },
        toggleFullScreen(){
            this.$fullscreen.toggle()
			this.fullScreen= this.$fullscreen.isFullscreen
        },
		toogleSideBar(){
			this.$store.commit('sidebar/toggle', {status: !this.$store.state.sidebar.sidebar})
		},
		toogleProfileBar() {
			this.$store.commit('profilebar/toggle', {status: !this.$store.state.profilebar.profilebar})
		}
    }
}
</script>
<style scoped>
.header-logo{
	height: 70px;
    object-fit: contain;
}
</style>