<template>
    <header class="main-header">
	<div class="d-flex align-items-center logo-box justify-content-start">	
		<!-- Logo -->
		<a href="index.html" class="logo">
		  <!-- logo-->
		  <div class="logo-mini w-30">
			  <span class="light-logo"><img src="/images/logo-letter.png" alt="logo"></span>
			  <span class="dark-logo"><img src="/images/logo-letter-white.png" alt="logo"></span>
		  </div>
		  <div class="logo-lg">
			  <span class="light-logo"><img src="/images/logo-dark-text.png" alt="logo"></span>
			  <span class="dark-logo"><img src="/images/logo-light-text.png" alt="logo"></span>
		  </div>
		</a>	
	</div>   
    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
	  <div class="app-menu">
		<ul class="header-megamenu nav">
			<li class="btn-group nav-item">
				<a href="#"  class="waves-effect waves-light nav-link push-btn btn-primary-light ms-0" data-toggle="push-menu" role="button" @click="toogleSideBar">
                    <font-awesome-icon :icon="activeSidebar ? ['fa', 'xmark'] : ['fa', 'bars']" />
			    </a>
			</li>
			<li class="btn-group d-lg-inline-flex d-none">
				<div class="app-menu">
					<div class="search-bx mx-5">
						<form>
							<div class="input-group">
							  <input type="search" class="form-control" placeholder="Search">
							  <div class="input-group-append">
								<button id="button-addon3" class="btn" type="submit"><font-awesome-icon :icon="['fa', 'search']" /></button>
							  </div>
							</div>
						</form>
					</div>
				</div>
			</li>
		</ul> 
	  </div>
		
      <div class="navbar-custom-menu r-side">
        <ul class="nav navbar-nav">
			<li class="btn-group d-md-inline-flex d-none">
              <a href="javascript:void(0)" title="skin Change" class="waves-effect skin-toggle waves-light" @click="toggleDarkMode">
			  	<label class="switch">
					<span class="switch-on"><font-awesome-icon :icon="['fa', 'sun']" /></span>
					<span class="switch-off"><font-awesome-icon :icon="['fa', 'moon']" /></span>
				</label>
			  </a>				
            </li>
			
			<li class="btn-group nav-item d-xl-inline-flex d-none">
				<a href="#" data-provide="fullscreen" class="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" title="Full Screen" @click="toggleFullScreen">
					<font-awesome-icon :icon="fullScreen ? ['fa', 'expand'] : ['fa', 'compress']" />
			    </a>
			</li>
			
			<!-- User Account-->
			<li class="dropdown user user-menu">
				<a href="#" class="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow" title="User" data-bs-toggle="modal" data-bs-target="#quick_user_toggle">
					<div class="d-flex pt-1 align-items-center">
						<div class="text-end me-10">
							<p class="pt-5 fs-14 mb-0 fw-700">Nil Yeager</p>
							<small class="fs-10 mb-0 text-uppercase text-mute">Admin</small>
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
			this.$store.commit('sidebar/toggle')
		}
    }
}
</script>