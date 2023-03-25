<template>
    <!-- Team Profile Section Start -->
    <div class="section team-profile-section section-padding-02">
        <div class="container">
            <!-- Team Profile Wrapper Start -->
            <div class="team-profile-wrapper">
                <!-- Team Profile Start -->
                <div class="team-profile">
                    <div class="profile-img">
                        <img :src="image" alt="">
                    </div>
                    <div class="profile-content">
                        <h3 class="name">{{title}}</h3>
                        <span class="designation">{{designation}}</span>
                        <p>{{description}}</p>
                        <div class="team-profile-info">
                            <ul>
                                <li class="team-info"><span>Experience:</span> Over {{experience}} Years</li>
                            </ul>
                            <div class="profile-social-wrap">
                                <ul>
                                    <li>
                                        <a :href="twitterlink" class="profile-twitter"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a :href="facebooklink" class="profile-facebook"><i class="fab fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a :href="instagramlink" class="profile-instagram"><i class="fab fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Team Profile End -->
            </div>
            <!-- Team Profile Wrapper End -->
            <slot />
        </div>
    </div>
    <!-- Team Profile Section End -->
</template>

<script>
export default {
    name: 'FrontendInstructorComponent',
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
        description: {
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
        instagramlink: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: '#'
        },
        experience: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: '25'
        },
    }
}
</script>
