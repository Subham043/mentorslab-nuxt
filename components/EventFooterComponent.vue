<template>
    <div>
        <footer>
			<div class="footer2-area gray-bg pt-60 pb-30">
				<div class="container">
					<div class="row">
						<div class="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
							<div class="footer2-wrapper text-center">
								<div class="footer2-logo">
									<NuxtLink to="/"><img src="/images/logo-mentor.png" alt="" /></NuxtLink>
								</div>
								<!-- <div class="subscribes-form">
									<form id="subscribe-form" action="#">
										<input id="emailS" placeholder="Enter your email" type="text">
										<button id="subscribeBtn" type="submit">subscribe</button>
									</form>
								</div> -->
								<div class="footer-icon footer2-icon">
									<a :href="facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
									<a :href="twitter"><i class="fab fa-twitter"></i></a>
									<a :href="instagram" target="_blank"><i class="fab fa-instagram"></i></a>
									<a :href="linkedin" target="_blank"><i class="fab fa-linkedin"></i></a>
								</div>
								<div class="copyright2">
									<p>Copyright <i class="far fa-copyright"></i> 2023. All Right Reserved By MentorsLab</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
    </div>
</template>

<script>
export default {
    name: 'EventFooterComponent',
    props: {
        facebook: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: 'https://www.facebook.com/MentorsLab.in'
        },
        instagram: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: 'https://www.instagram.com/mentorslab.in/'
        },
        linkedin: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: 'https://www.linkedin.com/feed/update/urn:li:activity:6914775360538644480/'
        },
        twitter: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: '#'
        },
    }
}
</script>