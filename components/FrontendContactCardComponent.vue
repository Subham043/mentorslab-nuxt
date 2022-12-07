<template>
    <div class="col-lg-4 col-md-6 col-sm-6">
        <!-- Contact Info Item Start -->
        <div :class="classlist">
            <div class="contact-info-icon">
                <i :class="icon"></i>
            </div>
            <div class="contact-info-text">
                <h4 class="title">{{title}}</h4>
                <p>{{detail}} </p>
            </div>
        </div>
        <!-- Contact Info Item End -->
    </div>
</template>

<script>
export default {
    name: 'FrontendContactCardComponent',
    props: {
        classlist: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        title: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        detail: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        icon: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
    }
}
</script>