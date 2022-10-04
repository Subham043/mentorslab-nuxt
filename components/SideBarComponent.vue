<!-- eslint-disable vue/valid-template-root -->
<template>
	<aside class="main-sidebar">
    <!-- sidebar-->
    <section class="sidebar position-relative"> 
	  	<div class="multinav">
		  <div class="multinav-scroll">	
			  <!-- sidebar menu-->
			  <ul class="sidebar-menu" data-widget="tree">	
				<li>
				  <a href="index.html"><font-awesome-icon :icon="['fa', 'home']" /><span>Dashboard</span></a>
				</li>
				<li>
				  <a href="mailbox.html"><font-awesome-icon :icon="['fa', 'home']" /><span>Mailbox</span></a>
				</li>
				<li>
				  <a href="extra_calendar.html"><font-awesome-icon :icon="['fa', 'home']" /><span>Calendar</span></a>
				</li>
				<li>
				  <a href="contact_app_chat.html"><font-awesome-icon :icon="['fa', 'home']" /><span>Group chats</span></a>
				</li>				  
				<li class="header">Components</li>
				<li class="treeview">
				  <a href="#" @click="toggleDropDownMenu('featuresSubMenu')">
					<font-awesome-icon :icon="['fa', 'home']" />
					<span>Features</span>
					<span class="pull-right-container">
					  <i class="fa fa-angle-right pull-right"></i>
					</span>
				  </a>
				  <ul ref="featuresSubMenu" class="treeview-menu">											

                    <li><a href="box_cards.html"><font-awesome-icon :icon="['fa', 'home']" />User Card</a></li>
                    <li><a href="box_advanced.html"><font-awesome-icon :icon="['fa', 'home']" />Advanced Card</a></li>
                    <li><a href="box_basic.html"><font-awesome-icon :icon="['fa', 'home']" />Basic Card</a></li>
                    <li><a href="box_color.html"><font-awesome-icon :icon="['fa', 'home']" />Card Color</a></li>
                    <li><a href="box_group.html"><font-awesome-icon :icon="['fa', 'home']" />Card Group</a></li>
						  
				  </ul>
				</li>		
					 	     
			  </ul>
			  
			  <div class="sidebar-widgets">
				  <div class="mx-25 mb-30 pb-20 side-bx bg-primary-light rounded20">
					<div class="text-center">
						<img src="http://edulearn-lms-admin-template.multipurposethemes.com/images/svg-icon/color-svg/custom-24.svg" class="sideimg p-5" alt="">
						<h4 class="title-bx text-primary">Best Education Admin</h4>
					</div>
				  </div>
			  </div>
		  </div>
		</div>
    </section>
  </aside>
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
		activeSidebar () {
		return this.$store.state.sidebar.sidebar
		}
	},
	methods: {
		toggleDropDownMenu(ref) {
			// eslint-disable-next-line dot-notation
			this.$refs[ref].classList.contains("treeview-anim") ? this.$refs[ref].classList.remove("treeview-anim") : this.$refs[ref].classList.add("treeview-anim");
		}
	}
}
</script>