<template>
    <div>
        <!-- breadcrumb-area-start -->
		<div class="breadcrumb-area pt-130 pb-135" style="background-image:url('/images/events/bgg4.jpeg')">
			<div class="container">
				<div class="row">
					<div class="col-xl-12">
						<div class="breadcrumb-text text-center">
							<h1>upcoming events</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- breadcrumb-area-end -->

		<!-- upcoming-events-area-start -->
		<div class="upcoming-events-area pt-50 pb-30">
			<div class="container">
				<div class="row" style="justify-content:center;">
					<div v-for="(item, index) in tableData" :key="index" class="col-xl-4 col-lg-4 col-md-6">
						<div class="upcoming-events-wrapper mb-55">
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
                <div class="d-flex justify-content-center align-items-center">
                    <pagination v-model="currentPage" :records="count" :per-page="10" @paginate="handlePaginationChnage"/>
                </div>
			</div>
		</div>
		<!-- upcoming-event-area-end -->
        <EventFooterComponent/>
    </div>

</template>

<script>
import EventFooterComponent from '~/components/EventFooterComponent.vue';



export default {
    name: "EventListPage",
    components: { EventFooterComponent },
    layout: "EventLayout",
    data() {
        return {
            count: 1,
            tableData: [],
            currentPage: 1
        };
    },
    computed: {
        apiUrl() {
            return this.$config.apiURL;
        }
    },
    watch: {
        $route(to, from) {
            this.handlePageChnage();
        }
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
        this.handlePageChnage();
    },
    methods: {
        async getTableData(page = 0) {
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$publicApi.get("/event-user/paginate-all?skip=" + page); // eslint-disable-line
                this.tableData = response?.data?.data?.data;
                this.count = response?.data?.data?.count;
                this.currentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            }
            catch (err) {
                // console.log(err.response);// eslint-disable-line
                if (err?.response?.data?.message)
                    this.$toast.error(err?.response?.data?.message);
                if (err?.response?.data?.error)
                    this.$toast.error(err?.response?.data?.error);
            }
            finally {
                loading.close();
            }
        },
        handlePaginationChnage(page) {
            this.$router.push({ query: { page } });
        },
        handlePageChnage() {
            this.currentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getTableData(this.$route.query.page ? (this.$route.query.page * 10) - 10 : 0);
            // console.log(this.currentPage);
        }
    },
}
</script>