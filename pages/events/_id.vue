<template>
    <div>
        <!-- slider-start -->
		<div class="slider-area">
			<div class="single-slider slider-height d-flex align-items-center" :style="`background-image:url(${apiUrl}/event/file/${banner})`">
			   <div class="container">
				   <div class="row ">
					   <div class="col-xl-12">
							<div class="slider-content text-center">
								<h1>{{title}}</h1>
								<div class="slider-info">
									<span><i class="far fa-calendar-alt"></i> <template v-if="from_date">{{$dateFns.format(new Date(from_date), 'dd MMM yyyy')}}</template>  <template v-if="to_date">- {{$dateFns.format(new Date(to_date), 'dd MMM yyyy')}}</template></span>
									<span v-if="time"><i class="far fa-clock"></i> 04:30 PM {{$dateFns.format(new Date(time), 'hh:mm aa')}}</span>
								</div>
								<button class="btn" @click="dialogFormVisible = true">Register Now</button>
							</div>
							<div v-if="from_date" class="slider-count text-center">
								<div class="slider-time">
                                    <client-only>
                                        <vac :end-time="new Date(from_date).getTime()">
                                            <div
                                            slot="process"
                                            slot-scope="{ timeObj }">
                                                <div class="time-count">
                                                    {{timeObj.d}} <span>days</span>
                                                </div>
                                                <div class="time-count">
                                                    {{timeObj.h}} <span>hour</span>
                                                </div>
                                                <div class="time-count">
                                                    {{timeObj.m}} <span>minute</span>
                                                </div>
                                                <div class="time-count">
                                                    {{timeObj.s}} <span>Second</span>
                                                </div>
                                            </div>
                                            <div slot="finish">
                                                <div></div>
                                            </div>
                                        </vac>
                                    </client-only>
                                </div>
							</div>
					   </div>
				   </div>
			   </div>
			</div>
		</div>
		<!-- slider-start -->

				<!-- events-area-start -->
		<div v-if="EventAbout" class="events-area pt-60 pb-30">
			<div class="container">
				<div class="row">
					<div class="col-xl-5 col-lg-5 col-md-12 mb-30 pos-sticky" >
						<div class="events-img pos-sticky" >
							<img :src="`${apiUrl}/event-about/file/${EventAbout.image}`" alt="" />
						</div>
					</div>
					<div class="col-xl-7 col-lg-7 col-md-12 mb-30">
						<div class="event-wrapper">
							<div class="events-content">
								<div class="event-text">
									<h1>{{EventAbout.heading}}</h1>
								</div>
								<div class="mb-25"></div>
								<div v-html-safe="EventAbout.description" />
                                <button class="btn mt-15" @click="dialogFormVisible = true">Register Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- events-area-end -->

				<!-- team-area-start -->
		<div v-if="(EventInstructor.length>0)" class="team-area pt-60 pb-30 gray-bg">
			<div class="container">
				<div class="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
					<div class="section-title text-center mb-50">
						<h1>Event Speakers</h1>
						<p>To get further updates on our events, seminars and programs, subscribe to Edumentorslab</p>
					</div>
				</div>
				<div v-if="(EventInstructor.length===1)" class="row" style="justify-content:center;">

					<div class="col-xl-4 col-lg-4 col-md-6 pos-sticky" >
						<div class="team2-wrapper mb-30 pos-sticky" >
							<div class="team2-img">
								<img :src="`${apiUrl}/event-instructor/file/${EventInstructor[0].image}`" alt="" />
							</div>
							<div class="team2-text text-center">
								<h3>{{EventInstructor[0].name}}</h3>
								<span>{{EventInstructor[0].designation}}</span>
							</div>
							<div class="hover-text">
								<h3>Varada Murthy</h3>
								<span>Coach | Speaker</span>
								<div class="team2-icon">
									<a :href="EventInstructor[0].facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
									<a :href="EventInstructor[0].twitter" target="_blank"><i class="fab fa-twitter"></i></a>
									<a :href="EventInstructor[0].instagram" target="_blank"><i class="fab fa-instagram"></i></a>
									<a :href="EventInstructor[0].linkedin" target="_blank"><i class="fab fa-linkedin"></i></a>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-8 col-lg-8 col-md-6">
						<div class="event-wrapper">
							<div class="events-content">
								<div class="event-text">
									<h1>{{EventInstructor[0].heading}}</h1>
								</div>
								<div class="mb-25"></div>
								<div v-html-safe="EventInstructor[0].description" />
                                <button class="btn mt-15" @click="dialogFormVisible = true">Register Now</button>
							</div>
						</div>
					</div>


				</div>
                <div v-else class="row" style="justify-content:center;">
					<div v-for="(item, index) in EventInstructor" :key="index" class="col-xl-4 col-lg-4 col-md-6">
						<div class="team2-wrapper mb-30">
							<div class="team2-img">
								<img :src="`${apiUrl}/event-instructor/file/${item.image}`" alt="" />
							</div>
							<div class="team2-text text-center">
								<h3>{{item.name}}</h3>
								<span>{{item.designation}}</span>
							</div>
							<div class="hover-text">
								<h3>{{item.name}}</h3>
								<span>{{item.designation}}</span>
								<div class="team2-icon">
									<a :href="item.facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
									<a :href="item.twitter" target="_blank"><i class="fab fa-twitter"></i></a>
									<a :href="item.instagram" target="_blank"><i class="fab fa-instagram"></i></a>
									<a :href="item.linkedin" target="_blank"><i class="fab fa-linkedin"></i></a>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- team-area-end -->

				<!-- event-tab-area-start -->
		<div v-if="(EventSchedule.length>0)" class="event-tab-area pt-60 pb-30">
			<div class="container">
				<div class="row">
					<div class="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
						<div class="section-title text-center mb-50">
							<h1>Event Schedule</h1>
							<p>To get further updates on our events, seminars and programs, subscribe to Edumentorslab</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xl-12 mb-30">
                        <el-tabs type="border-card">
                            <el-tab-pane v-for="(item, index) in EventSchedule" :key="index" :label="item.title">
                            <h3>{{item.heading}}</h3>
                            <div v-html-safe="item.description"/>
                            </el-tab-pane>
                        </el-tabs>
					</div>
					<div class="col-xl-12">
						<div class="col-xl-12">
							<div class="event-tab-button text-center">
								<button class="btn active" @click="dialogFormVisible = true">Register Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- event-tab-area-end -->

		        <!-- event-video-area-start -->
		<div class="event-video-area pt-230 pb-230" style="background-image:url('/images/events/bgg5.jpeg')">
			<div class="container">
				<div class="row">
					<div class="col-xl-12">
						<div class="event-video-wrapper text-center">
							<div class="event-video-icon">
								<a class="popup-video" href="javascript:void(0)" @click="dialogVideoVisible = true"><i class="fas fa-play"></i></a>
							</div>
							<div class="event-video-text">
								<h3>Watch Our Latest Video</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- event-video-area-end -->


		        <!-- ticket-now-area-start -->
		<div v-if="EventCallToAction" class="ticket-now-area">
			<div class="container">
				<div class="ticket-bg">
					<div class="row">
						<div class="col-xl-9 cl-lg-9 col-md-9">
							<div class="ticket-now-text">
								<h2>{{EventCallToAction.heading}}</h2>
                                <div v-html-safe="EventCallToAction.description" />
							</div>
						</div>
						<div class="col-xl-3 col-lg-3 col-md-3">
							<div class="ticket-button text-md-right">
								<button class="btn" @click="dialogFormVisible = true">Register Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- ticket-now-area-end -->

		        <!-- testimonial-area-start -->
		<div v-if="EventTestimonial.length>0" class="testimonial-area pt-200 pb-10" style="background-image:url('/images/events/bg4.jpeg')">
			<div class="container">
				<div class="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
					<div class="section-title text-center">
						<h1>What’s Our Clients Say</h1>
						<p> Here are some success stories shared by our happy clients. We are ever grateful to them.</p>
					</div>
				</div>
				<!--<div class="col-xl-10 col-lg-10 offset-lg-1 offset-xl-1">-->
				<div class="col-xl-12 col-lg-12">
					<div class="testimonial-active owl-carousel">
                        <VueSlickCarousel v-bind="slickOptions" ref="slickTestimonial">
                            <div v-for="(item, index) in EventTestimonial" :key="index" class="testimonial-box">
                                <div class="testimonial-wrapper text-center">
                                    <div class="testimonial-inner">
                                        <div class="testimonial-icon">
                                            <img :src="`${apiUrl}/event-testimonial/file/${item.image}`" alt="" class="testimonial_img_main" />
                                        </div>
                                        <div class="testimonial-text">
                                            <h4>{{item.name}}</h4>
                                            <span>{{item.designation}}</span>
                                            <p>{{item.message}}</p>
                                        </div>
                                        <div class="testimonial-img">
                                            <img src="/images/icon3.png" alt="" class="testimonial_img_main" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </VueSlickCarousel>
                        <div class="owl-nav">
                            <div class="owl-prev" @click="prevTestimonialClick">
                                <i class="fas fa-angle-left"></i>
                            </div>
                            <div class="owl-next" @click="nextTestimonialClick">
                                <i class="fas fa-angle-right"></i>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</div>
		<!-- testimonial-area-end -->



		<div v-if="EventGallery.length>0" class="pricing-area pt-60 pb-10" style="background-image:url('/images/events/bgg2.jpeg')">
			<div class="container">
				<div class="row">
					<div class="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
						<div class="section-title white-title text-center mb-50">
							<h1>Our Gallery</h1>
							<p>To get further updates on our events, seminars and programs, subscribe to Edumentorslab</p>
						</div>
					</div>
				</div>
				<viewer class="gallery-active owl-carousel" :images="EventGallery">
                    <VueSlickCarousel v-bind="slickGalleryOptions" ref="slickGallery">

                        <div v-for="(item, index) in EventGallery" :key="index" class="gallery">
                            <div class="pricing2-wrapper text-center">
                                <a class="demo" href="javascript:void(0)" data-fslightbox>
                                    <img :src="`${apiUrl}/event-gallery/file/${item.image}`" />
                                </a>
                            </div>
                        </div>

                    </VueSlickCarousel>
                    <div class="owl-nav">
                        <div class="owl-prev" @click="prevGalleryClick">
                            <i class="fas fa-angle-left"></i>
                        </div>
                        <div class="owl-next" @click="nextGalleryClick">
                            <i class="fas fa-angle-right"></i>
                        </div>
                    </div>
				</viewer>
			</div>
		</div>
		<!-- pricing-area-end -->

				<!-- upcoming-events-area-start -->
		<div v-if="(latest.length>0)" class="upcoming-events-area pt-60 pb-30">
			<div class="container">
				<div class="row">
					<div class="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
						<div class="section-title text-center mb-50">
							<h1>our upcoming event</h1>
							<p>To get further updates on our events, seminars and programs, subscribe to Edumentorslab</p>
						</div>
					</div>
				</div>
				<div class="row" style="justify-content:center">
					<div v-for="(item, index) in latest" :key="index" class="col-xl-4 col-lg-4 col-md-6">
						<div class="upcoming-events-wrapper mb-30">
							<div class="upcoming-events-img">
								<NuxtLink :to="`/events/${item.url}`">
                                    <img :src="`${apiUrl}/event/file/${item.banner}`" alt="" />
                                </NuxtLink>
							</div>
							<div class="upcoming-events-text">
								<h4><NuxtLink :to="`/events/${item.url}`">{{item.title}}</NuxtLink></h4>
								<div class="upcoming-events-meta">
									<span>By <NuxtLink to="/">MentorsLab</NuxtLink></span>
									<span>Date <span>: {{$dateFns.format(new Date(item.from_date), 'dd MMM yyyy')}}</span></span>
								</div>
								<NuxtLink class="btn mt-20" :to="`/events/${item.url}`">View More</NuxtLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- upcoming-event-area-end -->

		<!-- ticket-now-area-start -->
		<div v-if="EventCallToAction" class="ticket-now-area pt-45 pb-45 ticket2-now purple-bg">
			<div class="container">
				<div class="row">
					<div class="col-xl-9 cl-lg-9 col-md-9">
						<div class="ticket-now-text">
                            <h2>{{EventCallToAction.heading}}</h2>
                            <div v-html-safe="EventCallToAction.description" style="color:white !important" />
						</div>
					</div>
					<div class="col-xl-3 col-lg-3 col-md-3">
						<div class="ticket2-button text-md-right">
							<button class="btn" @click="dialogFormVisible = true">Register Now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- ticket-now-area-end -->

        <el-dialog title="Watch Our Latest Video" :visible.sync="dialogVideoVisible">
            <div>
                <iframe :src="dialogVideoVisible ? video : ''" style="width:100%;height:400px;"></iframe>
            </div>
        </el-dialog>

        <el-dialog title="Register" :visible.sync="dialogFormVisible">
            <div>
                <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                    <form class="form" method="post" @submit.prevent="handleSubmit(formHandler)">
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <ValidationProvider v-slot="{ classes, errors }" rules="required" name="name">
                                    <div class="form-group">
                                        <label class="form-label">Name *</label>
                                        <el-input v-model="name" style="width: 100%;" placeholder="Enter Name"></el-input>
                                    </div>
                                    <span :class="classes">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-12 mb-2">
                                <ValidationProvider v-slot="{ classes, errors }" rules="required|email" name="email">
                                    <div class="form-group">
                                        <label class="form-label">Email *</label>
                                        <el-input v-model="email" style="width: 100%;" placeholder="Enter Email"></el-input>
                                    </div>
                                    <span :class="classes">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-12 mb-2">
                                <ValidationProvider v-slot="{ classes, errors }" rules="required" name="phone">
                                    <div class="form-group">
                                        <label class="form-label">Phone *</label>
                                        <el-input v-model="phone" style="width: 100%;" placeholder="Enter Phone"></el-input>
                                    </div>
                                    <span :class="classes">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-12 mb-2">
                                <ValidationProvider v-slot="{ classes, errors }" rules="required" name="message">
                                    <div class="form-group">
                                        <label class="form-label">Message *</label>
                                        <el-input v-model="message" type="textarea" :row="10" style="width: 100%;" placeholder="Enter Message"></el-input>
                                    </div>
                                    <span :class="classes">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-12">
                                <button class="btn" type="submit">Register Now {{paid ? `@ Rs. ${amount}` : ''}}</button>
                            </div>
                        </div>
                    </form>
                </ValidationObserver>
            </div>
        </el-dialog>

        <EventFooterComponent :facebook="facebook" :twitter="twitter" :linkedin="linkedin" :instagram="instagram"/>

    </div>

</template>

<script>
import EventFooterComponent from '~/components/EventFooterComponent.vue';



export default {
    name: "EventDetailPage",
    components: { EventFooterComponent },
    layout: "EventLayout",
    data() {
        return {
            slickOptions: {
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                draggable: true,
                pauseOnHover: true,
                swipe: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                        },
                    },
                ],
            },
            slickGalleryOptions: {
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                draggable: true,
                pauseOnHover: true,
                swipe: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                        },
                    },
                ],
            },
            EventAbout: null,
            EventCallToAction: null,
            EventGallery: [],
            EventInstructor: [],
            EventSchedule: [],
            EventTestimonial: [],
            amount: "",
            banner: "",
            draft: false,
            facebook: "",
            from_date: "",
            instagram: "",
            linkedin: "",
            paid: false,
            time: "",
            title: "",
            to_date: "",
            twitter: "",
            url: "",
            video: "",
            name: "",
            email: "",
            phone: "",
            message: "",
            dialogFormVisible: false,
            dialogVideoVisible: false,
            latest: [],
        };
    },
    head: {
        script: [
            { src: 'https://checkout.razorpay.com/v1/checkout.js' },
        ],
    },
    computed: {
        apiUrl() {
            return this.$config.apiURL;
        }
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
        this.checkId();
        this.getLatest();
    },
    methods: {
        nextTestimonialClick(){
            this.$refs.slickTestimonial.next()
        },
        prevTestimonialClick(){
            this.$refs.slickTestimonial.prev()
        },
        nextGalleryClick(){
            this.$refs.slickGallery.next()
        },
        prevGalleryClick(){
            this.$refs.slickGallery.prev()
        },
        async checkId() {
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            if (!this.$route.params.id) {
                this.$toast.error("Invalid ID");
                this.$router.push("/events");
            }
            try {
                const response = await this.$publicApi.get("/event-user/detail/" + this.$route.params.id); // eslint-disable-line
                // eslint-disable-next-line no-console
                // console.log(response);
                this.EventAbout = response.data.data.EventAbout;
                this.EventCallToAction = response.data.data.EventCallToAction;
                this.EventGallery = response.data.data.EventGallery;
                this.EventInstructor = response.data.data.EventInstructor;
                this.EventSchedule = response.data.data.EventSchedule;
                this.EventTestimonial = response.data.data.EventTestimonial;
                this.amount = response.data.data.amount;
                this.banner = response.data.data.banner;
                this.draft = response.data.data.draft;
                this.facebook = response.data.data.facebook;
                this.from_date = response.data.data.from_date;
                this.instagram = response.data.data.instagram;
                this.linkedin = response.data.data.linkedin;
                this.paid = response.data.data.paid;
                this.time = response.data.data.time;
                this.title = response.data.data.title;
                this.to_date = response.data.data.to_date;
                this.twitter = response.data.data.twitter;
                this.url = response.data.data.url;
                this.video = response.data.data.video;
            }
            catch (err) {
                if (err?.response?.data?.message)
                    this.$toast.error(err?.response?.data?.message);
                if (err?.response?.data?.error)
                    this.$toast.error(err?.response?.data?.error);
                this.$router.push("/events");
            }
            finally {
                loading.close();
            }
        },
        async getLatest() {
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$publicApi.get("/event-user/latest"); // eslint-disable-line
                // eslint-disable-next-line no-console
                // console.log(response);
                this.latest = response.data.data;
            }
            catch (err) {
                if (err?.response?.data?.message)
                    this.$toast.error(err?.response?.data?.message);
                if (err?.response?.data?.error)
                    this.$toast.error(err?.response?.data?.error);
            }
            finally {
                loading.close();
            }
        },
        async formHandler() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const validate = await this.$publicApi.post('/event-user/validate/',{ // eslint-disable-line
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    message: this.message,
                }); // eslint-disable-line
                if(this.paid){
                    const response = await this.$publicApi.get('/event-user/generate-payment-order/'+this.$route.params.id); // eslint-disable-line
                    this.loadRazorpay(response.data.data)
                }else{
                    const response = await this.$publicApi.post('/event-user/register/'+this.$route.params.id,{ // eslint-disable-line
                        name: this.name,
                        email: this.email,
                        phone: this.phone,
                        message: this.message,
                    }); // eslint-disable-line
                    this.$toast.success(response.data.data.message)
                    this.name=''
                    this.email=''
                    this.phone=''
                    this.message=''
                    this.$refs.form.reset()
                    this.dialogFormVisible = false;
                }
                // console.log(response);// eslint-disable-line
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                email: err?.response?.data?.form_error?.email,
                message: err?.response?.data?.form_error?.message,
                name: err?.response?.data?.form_error?.name,
                phone: err?.response?.data?.form_error?.phone,
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            }finally{
                loading.close()
            }
        },
        loadRazorpay(data){
            const options = {
                    key: this.$config.RAZORPAY_KEY_ID,
                    amount: data.amount,
                    currency: data.currency,
                    description: "Payment description",
                    order_id: data.id,
                    prefill: {
                    name: this.name,
                    email: this.email,
                    contact: this.phone
                },
                theme: {
                    color: "#000000" // Set your website theme color
                },
                handler: async (response) => {
                    await this.verifyPayment(response, data)
                }
            };

            // eslint-disable-next-line no-undef
            const rzp = new Razorpay(options);
            rzp.open();
        },
        async verifyPayment(data, order){
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$publicApi.post('/event-user/verify-payment/'+this.$route.params.id,{
                    razorpayOrderId: data.razorpay_order_id,
                    razorpayPaymentId: data.razorpay_payment_id,
                    signature: data.razorpay_signature,
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    message: this.message,
                    receipt: order.receipt,
                }); // eslint-disable-line
                this.$toast.success(response.data.data.message)
                this.name=''
                this.email=''
                this.phone=''
                this.message=''
                this.$refs.form.reset()
                this.dialogFormVisible = false;
            } catch (err) {
                this.$refs.form.setErrors({
                    email: err?.response?.data?.form_error?.email,
                    message: err?.response?.data?.form_error?.message,
                    name: err?.response?.data?.form_error?.name,
                    phone: err?.response?.data?.form_error?.phone,
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            } finally{
                loading.close()
            }
        }
    },
}
</script>

<style scoped>
.testimonial_img_main {
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
}
.owl-carousel{
    position: relative;
}
</style>
