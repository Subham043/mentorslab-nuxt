<template>
    <div>

      <div class="py-5 detail mt-5">
        <div class="container">
          <div class="row">
            <div class="col-12 mb-5">
              <img src="/images/ittc-advanced.jpeg" alt="">
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
export default {
    name: "IttcAdvancedPage",
    layout: "FrontendLayout",
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
}
</script>

<style scoped>
img {
    max-width: 100%;
    width: 100%;
}
.ittc-banner{
  position: relative;
  background-color: #027ec2;
  z-index: 2;
  padding-top: 150px;
}
.ittc-banner .container{
  position: relative;
  z-index: 3;
}
.ittc-banner h1{
  color: white;
}
.ittc-banner h3{
  color: white;
  font-weight: normal;
  margin-top: 20px;
}
.ittc-banner .btn{
  margin-top: 30px;
  background-color: white;
  border-color: white;
  color: #027ec2;
}
.ittc-banner::before {
	content: "";
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	border-style: solid;
	border-color: transparent;
	border-width: 20vh 80vw;
	border-bottom-color: white;
	border-right-color: white;
  z-index: 1;
}
.swiper-container{
    position: relative;
}

.section-devider::before{
  top: unset;
  bottom: -10px;
  background:#ec3237;
  border-radius: 10px;
  height: 5px;
}
.section-title .title{
  color: #027ec2;
  font-weight: 400;
  font-size: 30px;
}
.detail p{
  text-align: justify;
  margin-bottom: 10px;
}
.shape_bg_div{
  background:#dde8fa;
}
.icon_shap_col{
  background-color: #0d96e2;
  color: white;
  font-size: 45px;
  width: 100%;
  height: 100%;
  display: inline-block;
  padding: 10px;
  border-radius: 50%;
}
.icon_main_shap_col{
  width: auto;
  height: auto;
  display: inline-block;
  border: 2px dashed #0d96e2;
  padding: 5px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
}
.shape_bg_div .col-lg-4{
  width: 30%;
}
</style>
