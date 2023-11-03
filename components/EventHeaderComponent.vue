<template>
	<div>
		<header class="header-one">
			<div class="header-area theme-bg d-none d-md-block">
				<div class="container">
					<div class="row">
						<div class="col-xl-6 col-lg-6 col-md-4 col-12">
							<div class="header-text">
								<span><i class="fas fa-phone-volume"></i> +91 9902570561</span>
							</div>
						</div>
						<div class="col-xl-6 col-lg-6 col-md-8 col-12">
							<div class="header-wraaper header-top-wrapper text-center">
								<div class="header-inner">
									<div class="header-text">
										<span><i class="far fa-envelope"></i> vmlc@pfla.in</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="sticky-header" class="main-menu-area white-bg">
				<div class="container">
					<div class="menu-box">
						<div class="row align-items-center justify-content-between">
							<div class="col-xl-3 col-lg-3 col-sm-auto">
								<div class="logo">
									<NuxtLink to="/"><img src="/images/logo-mentor.png" alt="" /></NuxtLink>
								</div>
							</div>
							<div class="col-xl-9 col-lg-9 d-none d-lg-block">
								<div class="main-menu text-right">
									<nav id="mobile-menu">
										<ul>
											<li><NuxtLink to="/about-us">About Us</NuxtLink></li>
											<li class="active"><NuxtLink to="/events">Upcoming Events</NuxtLink></li>
											<li><NuxtLink to="/publication">Publication</NuxtLink></li>
											<li><NuxtLink to="/iso">ISO</NuxtLink></li>
											<li><NuxtLink to="/contact-us">Contact</NuxtLink></li>
											<li><NuxtLink to="/school-audit">School Audit</NuxtLink></li>
										</ul>
									</nav>
								</div>
							</div>
							<div class="col-sm-auto d-lg-none">
								<div class="mobile-menu"  @click="toogleSideBar">
									<i class="fas fa-bars"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<!-- Offcanvas Start -->
		<el-drawer
:visible.sync="activeSidebar" direction="ltr" :size="screenWidth > 500 ? '19.29rem' : `${screenWidth-200}px`" :show-close="false" :with-header="false"
		:before-close="toogleSideBar">
		<aside class="main-sidebar" :style="screenWidth > 500 ? 'width:19.29rem' : `width:${screenWidth-200}px`">
			<!-- sidebar-->
			<section class="sidebar position-relative">
				<div class="d-flex align-items-center logo-box justify-content-start" :style="screenWidth > 500 ? '19.29rem' : `${screenWidth-280}px`">
					<NuxtLink to="/" class="logo-lg">
						<span class="light-logo"><img src="/images/logo.png" alt="logo"></span>
					</NuxtLink>
				</div>
				<div class="multinav" :style="screenWidth > 500 ? 'width:19.29rem' : `width:${screenWidth-200}px`">
					<div class="multinav-scroll">
						<!-- sidebar menu-->
						<el-menu default-active="2" class="el-menu-vertical-demo">
							<NuxtLink to="/about-us">
								<el-menu-item index="1">
									<span>About Us</span>
								</el-menu-item>
							</NuxtLink>
							<NuxtLink to="/events">
								<el-menu-item index="2">
									<span>Upcoming Events</span>
								</el-menu-item>
							</NuxtLink>
							<NuxtLink to="/publication">
								<el-menu-item index="3">
									<span>Publication</span>
								</el-menu-item>
							</NuxtLink>
							<NuxtLink to="/iso">
								<el-menu-item index="4">
									<span>ISO</span>
								</el-menu-item>
							</NuxtLink>
							<NuxtLink to="/contact">
								<el-menu-item index="5">
									<span>Contact</span>
								</el-menu-item>
							</NuxtLink>
							<NuxtLink to="/school-audit">
								<el-menu-item index="6">
									<span>School Audit</span>
								</el-menu-item>
							</NuxtLink>
						</el-menu>
						<!-- sidebar menu-->

						<div class="sidebar-widgets mt-100">
							<div class="mx-25 mb-30 pb-20 side-bx bg-primary-light rounded20">
							</div>
						</div>
					</div>
				</div>
			</section>
		</aside>
	</el-drawer>
		<!-- Offcanvas End --> <!-- Instructor Start -->
	</div>
</template>

<script>
export default {
	name: 'EventHeaderComponent',
	data(){
		return {
			active: 'home',
		}
	},
	computed: {
		activeSidebar() {
			return this.$store.state.sidebar.sidebar
		},
		screenWidth() {
			if (process.client) {
				return window.screen.width
			} else {
				return 500;
			}
		}
	},
	methods: {
		toogleSideBar() {
			this.$store.commit('sidebar/toggle', {status: !this.$store.state.sidebar.sidebar})
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
