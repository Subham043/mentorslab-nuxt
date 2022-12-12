<template>
    <!-- Single Course Banner Start -->
    <div class="section single-course-banner-section" :style="`background-image: url('${image}');`">
            <div class="container" style="position: relative;">
                <div class="row">
                    <div class="col-lg-8">
                        <!-- Single Course Content Start -->
                        <div class="single-course-banner-content">
                            <h3 class="title">{{title}}</h3>
                            <p>{{description}}</p>
                        </div>
                        <!-- Single Course Content End -->
                    </div>
                </div>
            </div>
        </div>
        <!-- Single Course Banner End -->
</template>

<script>
export default {
    name: 'CourseHeroComponent',
    props: {
        title: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        description: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        image: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
    }
}
</script>