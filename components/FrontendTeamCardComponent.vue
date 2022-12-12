<template>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <!-- Single Team Start -->
        <div class="single-team">
            <div class="team-img">
                <NuxtLink :to="link">
                    <img
                        :src="image" loading="lazy" alt="team">
                </NuxtLink>
                <div class="team-social">
                    <ul>
                        <li><a :href="facebooklink"><i class="fab fa-facebook"></i></a></li>
                        <li><a :href="twitterlink"><i class="fab fa-twitter"></i></a></li>
                        <li><a :href="youtubelink"><i class="fab fa-youtube"></i></a></li>
                        <li><a :href="instagramlink"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="team-content">
                <div class="team-name-deg">
                    <h5 class="name"><NuxtLink :to="link">{{title}}</NuxtLink></h5>
                    <span class="team-deg">{{designation}}</span>
                </div>
                <div class="team-share">
                    <span><i class="fas fa-share-alt"></i></span>
                </div>
            </div>
        </div>
        <!-- Single Team End -->
    </div>
</template>

<script>
export default {
    name: 'FrontendTeamCardComponent',
    props: {
        image: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        title: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        designation: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        facebooklink: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: '#'
        },
        twitterlink: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: '#'
        },
        youtubelink: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: '#'
        },
        instagramlink: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: '#'
        },
        link: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
    }
}
</script>