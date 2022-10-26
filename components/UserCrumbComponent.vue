<!-- eslint-disable vue/valid-template-root -->
<template>
    <!-- Content Header (Page header) -->	  
		<div class="content-header content-header-user col-sm-12">
			<div class="d-flex align-items-center col-sm-12">
				<div class="me-auto d-flex justify-content-between align-items-center col-sm-12">
					<h4 class="page-title">{{mainPage}}</h4>
					<div class="d-inline-block align-items-center">
						<nav>
							<ol class="breadcrumb">
								<li class="breadcrumb-item"><a href="javascript:void(0)"><i class="el-icon-s-home"></i></a></li>
								<li class="breadcrumb-item" aria-current="page">{{mainPage}}</li>
								<li class="breadcrumb-item active" aria-current="page">{{currentPage}}</li>
							</ol>
						</nav>
					</div>
				</div>
				
			</div>
		</div>
</template>

<script>
export default {
  name: 'UserCrumbComponent',
  props:{
	mainPage:{
		type: String,
		default: ''
	},
	currentPage:{
		type: String,
		default: ''
	},
  }
}
</script>
<style scoped>
.content-header-user{
	padding: 1.5rem 0 0;
}
</style>
