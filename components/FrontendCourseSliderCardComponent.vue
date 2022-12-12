<template>
    <div class="swiper-slide">

        <div class="course-health course-technology">
            <!-- Single Courses Start -->
            <div class="single-course">
                <!-- Courses Image Start -->
                <div class="courses-image">
                    <NuxtLink :to="link"><img
                            :src="image" loading="lazy"
                            alt="Courses"></NuxtLink>
                    <div class="top-meta">
                        <div class="categories">
                            <a class="tag color-1" href="#">Business</a>
                        </div>
                        <div class="wishlist">
                            <a href="#"><i class="far fa-bookmark"></i></a>
                        </div>
                    </div>
                </div>
                <!-- Courses Image End -->
                <!-- Courses Content Start -->
                <div class="courses-content">
                    <div class="courses-author">
                        <img 
                            src="https://mentorslab.in/assets/main/assets/images/logo-mentor.png" loading="lazy"
                            alt="author">
                        <h4 class="name"><a href="#">MentorsLab</a></h4>
                    </div>
                    <h3 class="title"><NuxtLink :to="link">{{title}}</NuxtLink></h3>
                </div>
                <!-- Courses Content End -->

            </div>
            <!-- Single Courses End -->
        </div>

    </div>
</template>


<script>
export default {
    name: 'FrontendCourseSliderCardComponent',
    props:{
        image:{
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        title:{
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        link:{
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
    }
}
</script>


<style scoped>
.single-course{
    margin-left: 10px;
    margin-right: 10px;
}
</style>