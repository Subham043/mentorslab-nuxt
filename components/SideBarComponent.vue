<!-- eslint-disable vue/valid-template-root -->
<template>
	<el-drawer
:visible.sync="activeSidebar" direction="ltr" :size="screenWidth > 500 ? '19.29rem' : `${screenWidth-80}px`" :show-close="false" :with-header="false"
		:before-close="toogleSideBar">
		<aside class="main-sidebar" :style="screenWidth > 500 ? 'width:19.29rem' : `width:${screenWidth-80}px`">
			<!-- sidebar-->
			<section class="sidebar position-relative">
				<div class="d-flex align-items-center logo-box justify-content-start" :style="screenWidth > 500 ? '19.29rem' : `${screenWidth-80}px`">
					<NuxtLink to="/" class="logo-lg">
						<span class="light-logo"><img src="/images/logo-mentor.webp" alt="logo"></span>
					</NuxtLink>
				</div>
				<div class="multinav" :style="screenWidth > 500 ? 'width:19.29rem' : `width:${screenWidth-80}px`">
					<div class="multinav-scroll">
						<!-- sidebar menu-->
						<el-menu default-active="2" class="el-menu-vertical-demo">
							<NuxtLink to="/dashboard">
								<el-menu-item index="8">
									<i class="el-icon-s-home"></i>
									<span>Dashboard</span>
								</el-menu-item>
							</NuxtLink>
							<el-submenu index="1">
								<template slot="title">
									<i class="el-icon-reading"></i>
									<span>Content</span>
								</template>
								<NuxtLink to="/content/all">
									<el-menu-item index="1-1">All Content</el-menu-item>
								</NuxtLink>
								<NuxtLink to="/content/free">
									<el-menu-item index="1-2">Free Content</el-menu-item>
								</NuxtLink>
								<NuxtLink to="/content/paid">
									<el-menu-item index="1-3">Paid Content</el-menu-item>
								</NuxtLink>
							</el-submenu>
							<el-submenu index="2">
								<template slot="title">
									<i class="el-icon-service"></i>
									<span>Live Session Content</span>
								</template>
								<NuxtLink to="/live-session-content/all">
									<el-menu-item index="2-1">All Live Session </el-menu-item>
								</NuxtLink>
								<NuxtLink to="/live-session-content/free">
									<el-menu-item index="2-2">Free Live Session </el-menu-item>
								</NuxtLink>
								<NuxtLink to="/live-session-content/paid">
									<el-menu-item index="2-3">Paid Live Session </el-menu-item>
								</NuxtLink>
							</el-submenu>
							<el-submenu index="11">
								<template slot="title">
									<i class="el-icon-s-order"></i>
									<span>Exam</span>
								</template>
								<NuxtLink to="/exam/all">
									<el-menu-item index="11-1">All Exam </el-menu-item>
								</NuxtLink>
								<NuxtLink to="/exam/free">
									<el-menu-item index="11-2">Free Exam </el-menu-item>
								</NuxtLink>
								<NuxtLink to="/exam/paid">
									<el-menu-item index="11-3">Paid Exam </el-menu-item>
								</NuxtLink>
							</el-submenu>
							<el-submenu index="13">
								<template slot="title">
									<i class="el-icon-s-order"></i>
									<span>Assessment</span>
								</template>
								<NuxtLink to="/assessment/all">
									<el-menu-item index="13-1">All Assessment </el-menu-item>
								</NuxtLink>
								<NuxtLink to="/assessment/free">
									<el-menu-item index="13-2">Free Assessment </el-menu-item>
								</NuxtLink>
								<NuxtLink to="/assessment/paid">
									<el-menu-item index="13-3">Paid Assessment </el-menu-item>
								</NuxtLink>
							</el-submenu>
							<template v-if="$auth.user.role=='ADMIN'">
								<el-divider content-position="left">Admin Menu</el-divider>
								<NuxtLink to="/admin/user/list">
									<el-menu-item index="3">
										<i class="el-icon-user"></i>
										<span>User</span>
									</el-menu-item>
								</NuxtLink>
								<NuxtLink to="/admin/content/list">
									<el-menu-item index="4">
										<i class="el-icon-reading"></i>
										<span>Content</span>
									</el-menu-item>
								</NuxtLink>
								<NuxtLink to="/admin/live-session-content/list">
									<el-menu-item index="5">
										<i class="el-icon-service"></i>
										<span>Live Session Content</span>
									</el-menu-item>
								</NuxtLink>
								<NuxtLink to="/admin/exam/list">
									<el-menu-item index="8">
										<i class="el-icon-s-order"></i>
										<span>Exam</span>
									</el-menu-item>
								</NuxtLink>
								<NuxtLink to="/admin/assessment/list">
									<el-menu-item index="12">
										<i class="el-icon-s-order"></i>
										<span>Assessment</span>
									</el-menu-item>
								</NuxtLink>
								<el-submenu index="10">
									<template slot="title">
										<i class="el-icon-postcard"></i>
										<span>Events</span>
									</template>
									<NuxtLink to="/admin/events/list">
										<el-menu-item index="10-1">Event Details </el-menu-item>
									</NuxtLink>
									<NuxtLink to="/admin/events/registration">
										<el-menu-item index="10-2">Event Registration </el-menu-item>
									</NuxtLink>
								</el-submenu>
								<NuxtLink to="/admin/schedule-live-session/list">
									<el-menu-item index="6">
										<i class="el-icon-service"></i>
										<span>Schedule Live Session</span>
									</el-menu-item>
								</NuxtLink>
								<el-submenu index="7">
									<template slot="title">
										<i class="el-icon-price-tag"></i>
										<span>Payment</span>
									</template>
									<NuxtLink to="/admin/payment/content">
										<el-menu-item index="7-1">Content </el-menu-item>
									</NuxtLink>
									<NuxtLink to="/admin/payment/live-session-content">
										<el-menu-item index="7-2">Live Session Content </el-menu-item>
									</NuxtLink>
									<NuxtLink to="/admin/payment/exam">
										<el-menu-item index="7-3">Exam </el-menu-item>
									</NuxtLink>
									<NuxtLink to="/admin/payment/ittc">
										<el-menu-item index="7-4">ITTC </el-menu-item>
									</NuxtLink>
									<NuxtLink to="/admin/payment/ttp">
										<el-menu-item index="7-4">TTP </el-menu-item>
									</NuxtLink>
								</el-submenu>
								<el-submenu index="9">
									<template slot="title">
										<i class="el-icon-price-tag"></i>
										<span>Enquiries</span>
									</template>
									<NuxtLink to="/admin/enquiries/contact-form">
										<el-menu-item index="9-1">Contact Form </el-menu-item>
									</NuxtLink>
									<NuxtLink to="/admin/enquiries/demo-session">
										<el-menu-item index="9-2">Demo Session </el-menu-item>
									</NuxtLink>
								</el-submenu>
							</template>
						</el-menu>
						<!-- sidebar menu-->

						<div class="sidebar-widgets mt-100">
							<div class="mx-25 mb-30 pb-20 side-bx bg-primary-light rounded20">
								<div class="text-center">
									<img
src="http://edulearn-lms-admin-template.multipurposethemes.com/images/svg-icon/color-svg/custom-24.svg"
										class="sideimg p-5" alt="">
									<h4 class="title-bx text-primary">Edumentorslab</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</aside>
	</el-drawer>
</template>

<script>
export default {
	name: 'SideBarComponent',
	data() {
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
