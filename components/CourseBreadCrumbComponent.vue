<template>
    <div class="section course-single-breadcrumb">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <!-- Page Breadcrumb Start -->
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink> <i class="el-icon-arrow-right"></i></li>
                        <li class="breadcrumb-item active" aria-current="page">{{page}}</li>
                    </ul>
                    <!-- Page Breadcrumb End -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourseBreadCrumbComponent',
    props: {
        page: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
    }
}
</script>

<style scoped>
.course-single-breadcrumb .breadcrumb .breadcrumb-item + .breadcrumb-item::before{
    content: "";
}
.course-single-breadcrumb .breadcrumb .breadcrumb-item + .breadcrumb-item{
    padding-left: 0;
}
</style>