<template>
    <!-- Page Banner Start -->
    <div class="section page-banner-section" :style="`background-image: url(${bannerImg});`">
        <div class="container">
            <!-- Page Banner Wrapper Start -->
            <div class="page-banner-wrapper">
                <div class="row">
                    <div class="col-lg-12">
                        <!-- Page Banner Content Start -->
                        <div class="page-banner text-center">
                            <h2 class="title">{{page}}</h2>
                            <ul class="breadcrumb justify-content-center">
                                <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink> <i class="el-icon-arrow-right"></i></li>
                                <li class="breadcrumb-item active" aria-current="page">{{page}}</li>
                            </ul>
                        </div>
                        <!-- Page Banner Content End -->
                    </div>
                </div>
            </div>
            <!-- Page Banner Wrapper End -->
        </div>
    </div>
    <!-- Page Banner End -->
</template>

<script>
export default {
    name: 'FrontendBreadcrumbComponent',
    props: {
        page: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        bannerImg: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: '/images/bnrt.jpg'
        },
    }
}
</script>

<style scoped>
.page-banner .breadcrumb .breadcrumb-item + .breadcrumb-item::before{
    content: "";
}
</style>
