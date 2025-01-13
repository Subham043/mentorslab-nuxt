<template>
  <div class="col-lg-6 col-md-6">
    <div class="features-5-content features-1" data-aos="fade-up" data-aos-delay="200"
      :style="`background-image: url('${image}');`">
      <h3 class="title">{{title}}</h3>
      <p>{{paragraph}}</p>
      <a class="btn" href="https://lms.edumentorslab.com" target="_blank">{{linktext}}</a>
    </div>
  </div>
</template>


<script>
export default {
    name: 'FrontendCallToActionCardComponent',
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
        paragraph: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        linktext: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
    }
}
</script>
