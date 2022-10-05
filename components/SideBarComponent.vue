<!-- eslint-disable vue/valid-template-root -->
<template>
	<el-drawer
:visible.sync="activeSidebar" direction="ltr" size="19.29rem" :show-close="false" :with-header="false"
		:before-close="toogleSideBar">
		<aside class="main-sidebar">
			<!-- sidebar-->
			<section class="sidebar position-relative">
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
				<div class="multinav">
					<div class="multinav-scroll">
						<!-- sidebar menu-->
						<el-menu default-active="2" class="el-menu-vertical-demo">
							<el-submenu index="1">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>Navigator One</span>
								</template>
								<el-menu-item-group title="Group One">
									<el-menu-item index="1-1"><i class="el-icon-location"></i> item one</el-menu-item>
									<el-menu-item index="1-2">item one</el-menu-item>
								</el-menu-item-group>
								<el-menu-item-group title="Group Two">
									<el-menu-item index="1-3">item three</el-menu-item>
								</el-menu-item-group>
								<el-submenu index="1-4">
									<template slot="title">item four</template>
									<el-menu-item index="1-4-1">item one</el-menu-item>
								</el-submenu>
							</el-submenu>
							<el-menu-item index="2">
								<i class="el-icon-menu"></i>
								<span>Navigator Two</span>
							</el-menu-item>
							<el-menu-item index="3" disabled>
								<i class="el-icon-document"></i>
								<span>Navigator Three</span>
							</el-menu-item>
							<el-menu-item index="4">
								<i class="el-icon-setting"></i>
								<span>Navigator Four</span>
							</el-menu-item>
						</el-menu>
						<!-- sidebar menu-->

						<div class="sidebar-widgets mt-100">
							<div class="mx-25 mb-30 pb-20 side-bx bg-primary-light rounded20">
								<div class="text-center">
									<img
src="http://edulearn-lms-admin-template.multipurposethemes.com/images/svg-icon/color-svg/custom-24.svg"
										class="sideimg p-5" alt="">
									<h4 class="title-bx text-primary">Best Education Admin</h4>
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
		}
	},
	methods: {
		toogleSideBar() {
			this.$store.commit('sidebar/toggle')
		}
	}
}
</script>