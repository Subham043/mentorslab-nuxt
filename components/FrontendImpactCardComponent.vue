<template>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <!-- Courses Subject Item Start -->
        <div :class="classlist">
            <div class="courses-subject-img">
                <NuxtLink to="#"><i :class="icon" style="font-size:45px;color:white;"></i></NuxtLink>
            </div>
            <div class="courses-subject-content">
                <h3 class="title"><NuxtLink to="#">{{count}}</NuxtLink></h3>
                <span><NuxtLink to="#">{{title}}</NuxtLink></span>
            </div>
        </div>
        <!-- Courses Subject Item  -->
    </div>
</template>


<script>
export default {
    name: 'FrontendImpactCardComponent',
    props: {
        icon: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        title: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        count: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        classlist: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
    }
}
</script>