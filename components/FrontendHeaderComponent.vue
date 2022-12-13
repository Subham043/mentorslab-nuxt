<template>
	<div>
		<!-- Header Start  -->
		<div id="header" class="header section">
			<div class="container">
				<!-- Header Wrapper Start  -->
				<div class="header-wrapper">
					<!-- Header Logo Start -->
					<div class="header-logo">
						<NuxtLink to="/"><img
								src="/images/logo-mentor.png" alt="" /></NuxtLink>
					</div>
					<!-- Header Logo End -->

					<!-- Header Right Start -->
					<div class="header-right">
						<!-- Header Menu Start -->
						<div class="header-menu d-none d-lg-block">
							<ul class="main-menu">

								<!-- <li class="active-menu"><NuxtLink to="index.html">Home</NuxtLink></li> -->
								<li class=""><NuxtLink to="/about-us">About Us</NuxtLink></li>
								<!-- <li class=""><NuxtLink to="/events/upcoming">Upcoming Events</NuxtLink></li> -->
								<li class=""><NuxtLink to="/publication">Publication</NuxtLink></li>
								<li class=""><NuxtLink to="/iso">ISO</NuxtLink></li>
								<li class=""><NuxtLink to="/demo-session">Demo Session</NuxtLink></li>
								<li class=""><NuxtLink to="/contact-us">Contact</NuxtLink></li>

							</ul>
						</div>
						<!-- Header Menu End -->

						<!-- Header Meta Start -->
						<div class="header-meta">
							<div class="header-login-join d-none d-lg-block">
								<!-- <a class="login" to="#">Login</a> -->
								<NuxtLink class="btn join-btn" to="/auth/login">Login</NuxtLink>
							</div>
							<!-- Header Login Join End -->
						</div>
						<!-- Header Meta End -->

						<div class="header-toggle d-lg-none">
							<button data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" @click="toggleFrontendSidebar">
								<span></span>
								<span></span>
								<span></span>
							</button>
						</div>
					</div>
					<!-- Header Right End -->
				</div>
				<!-- Header Wrapper End -->
			</div>
		</div>
		<!-- Header End -->

		<!-- Offcanvas Start -->
		<div id="offcanvasMenu" :class="frontendSidebar ? `offcanvas offcanvas-start offcanvas-start-expand` : `offcanvas offcanvas-start`">
			<div class="offcanvas-header">
				<!-- Offcanvas Logo Start -->
				<div class="offcanvas-logo">
					<NuxtLink to="/"><img src="/images/logo-mentor.png" alt="" /></NuxtLink>
				</div>
				<!-- Offcanvas Logo End -->
				<button class="btn-close" data-bs-dismiss="offcanvas" @click="toggleFrontendSidebar"></button>
			</div>

			<div class="offcanvas-body">
				<div class="offcanvas-menu">
					<ul class="main-menu">

						<li><NuxtLink to="/about-us">About Us</NuxtLink></li>
						<!-- <li><NuxtLink to="/events/">Upcoming Events</NuxtLink></li> -->
						<li><NuxtLink to="/publication">Publication</NuxtLink></li>
						<li><NuxtLink to="/iso">ISO</NuxtLink></li>
						<li><NuxtLink to="/demo-session">Demo Session</NuxtLink></li>
						<li><NuxtLink to="/contact-us">Contact</NuxtLink></li>
					</ul>
				</div>
			</div>
		</div>
		<!-- Offcanvas End --> <!-- Instructor Start -->
	</div>
</template>

<script>
export default {
	name: 'FrontendHeaderComponent',
	data(){
		return {
			frontendSidebar: false
		}
	},
	methods:{
		toggleFrontendSidebar(){
			this.frontendSidebar = !this.frontendSidebar
		}
	}
}
</script>

<style>
.offcanvas-start-expand{
	visibility: visible;
	transform: translateX(0);
}
</style>