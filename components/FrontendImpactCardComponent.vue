<template>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <!-- Courses Subject Item Start -->
        <div :class="classlist">
            <div class="courses-subject-img">
                <a href="#"><i :class="icon" style="font-size:45px;color:white;"></i></a>
            </div>
            <div class="courses-subject-content">
                <h3 class="title"><a href="#">{{count}}</a></h3>
                <span><a href="#">{{title}}</a></span>
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