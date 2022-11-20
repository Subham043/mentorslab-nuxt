<!-- eslint-disable vue/valid-template-root -->
<template>
    <!-- Content Header (Page header) -->	  
		<div class="content-header">
			<div class="d-flex align-items-center">
				<div class="me-auto d-flex align-items-center">
					<h4 class="page-title">{{mainPage}}</h4>
					<div class="d-inline-block align-items-center">
						<nav>
							<ol class="breadcrumb">
								<li class="breadcrumb-item"><NuxtLink to="/"><i class="el-icon-s-home"></i></NuxtLink></li>
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
  name: 'BreadcrumbComponent',
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
