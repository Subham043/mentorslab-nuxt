<template>
  <div>
    <section class="content">
      <div class="row">
        <div class="col-xl-12 col-12">
          <div class="box bg-success">
            <div class="box-body d-flex p-0">
              <div
                class="flex-grow-1 p-30 flex-grow-1 bg-img bg-none-md"
                style="background-position: right bottom; background-size: auto 100%; background-image: url('/images/custom-30.svg')">
                <div class="row">
                  <div class="col-12 col-xl-12">
                    <h1 class="mb-0 fw-600">"Learn and get Certified" now at your comfort.</h1>
                    <p class="my-10 fs-16 text-white-70">Coached & Trained over 60,000 people.</p>
                    <div class="mt-45 d-md-flex align-items-center">
                      <div class="me-30 mb-30 mb-md-0">
                        <div class="d-flex align-items-center">
                          <div
                            class="me-15 text-center fs-24 w-50 h-50 l-h-50 bg-danger b-1 border-white rounded-circle">
                            <i class="el-icon-user"></i>
                          </div>
                          <div>
                            <h5 class="mb-0">Users</h5>
                            <p class="mb-0 text-white-70">{{userCount}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="me-30 mb-30 mb-md-0">
                        <div class="d-flex align-items-center">
                          <div
                            class="me-15 text-center fs-24 w-50 h-50 l-h-50 bg-warning b-1 border-white rounded-circle">
                            <i class="el-icon-reading"></i>
                          </div>
                          <div>
                            <h5 class="mb-0">Content</h5>
                            <p class="mb-0 text-white-70">{{contentCount}}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="d-flex align-items-center">
                          <div
                            class="me-15 text-center fs-24 w-50 h-50 l-h-50 bg-primary b-1 border-white rounded-circle">
                            <i class="el-icon-service"></i>
                          </div>
                          <div>
                            <h5 class="mb-0">Live Session Content</h5>
                            <p class="mb-0 text-white-70">{{liveSessionCount}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="card bg-primary-light">
            <div class="card-header justify-content-between">
              <h4 class="card-title"><i class="el-icon-reading"></i> Free Content</h4>
              <div class="text-center col-sm-auto">
                <!-- <NuxtLink to="/content/free"><el-button type="warning">Free Contents</el-button></NuxtLink>
                <NuxtLink to="/content/paid"><el-button type="warning">Paid Contents</el-button></NuxtLink> -->
                <NuxtLink to="/content/free"><el-button type="warning">View All</el-button></NuxtLink>
              </div>
            </div>
          </div>
          <div v-if="freeLoading" class="row">
              <div v-for="(n) in skeletonCount" :key="n" class="col-md-6 col-lg-6">
                  <ContentCardSkeletonComponent />
              </div>
          </div>
          <div v-else-if="freeTableData.length===0">
              <div class="row justify-content-center">
                  <div class="col-md-6 col-sm-12">
                      <NoUserDataComponent />
                  </div>
              </div>
          </div>
          <div v-else>
              <div class="row justify-content-between">
                  <div v-for="item in freeTableData" :key="item.id" class="col-md-6 col-lg-6">
                      <ContentCardComponent
                      :id="item.id"
                      :uuid="item.uuid"
                      :title="item.name"
                      :heading="item.heading"
                      :type="item.type"
                      :paid="item.paid"
                      :amount="item.amount"
                      :purchased="item.AssignedContent.length>0"
                      :paragraph="item.description" />
                  </div><!-- end col -->
              </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="card bg-primary-light">
            <div class="card-header justify-content-between">
              <h4 class="card-title"><i class="el-icon-reading"></i> Paid Content</h4>
              <div class="text-center col-sm-auto">
                <!-- <NuxtLink to="/content/free"><el-button type="warning">Free Contents</el-button></NuxtLink>
                <NuxtLink to="/content/paid"><el-button type="warning">Paid Contents</el-button></NuxtLink> -->
                <NuxtLink to="/content/paid"><el-button type="warning">View All</el-button></NuxtLink>
              </div>
            </div>
          </div>
          <div v-if="paidLoading" class="row">
              <div v-for="(n) in skeletonCount" :key="n" class="col-md-6 col-lg-6">
                  <ContentCardSkeletonComponent />
              </div>
          </div>
          <div v-else-if="paidTableData.length===0">
              <div class="row justify-content-center">
                  <div class="col-md-6 col-sm-12">
                      <NoUserDataComponent />
                  </div>
              </div>
          </div>
          <div v-else>
              <div class="row justify-content-between">
                  <div v-for="item in paidTableData" :key="item.id" class="col-md-6 col-lg-6">
                      <ContentCardComponent
                      :id="item.id"
                      :uuid="item.uuid"
                      :title="item.name"
                      :heading="item.heading"
                      :type="item.type"
                      :paid="item.paid"
                      :amount="item.amount"
                      :purchased="item.AssignedContent.length>0"
                      :paragraph="item.description" />
                  </div><!-- end col -->
              </div>
          </div>
        </div>
      </div>
      <div class="card bg-primary-light mt-55">
			  <div class="card-header justify-content-between">
				<h4 class="card-title"><i class="el-icon-service"></i> Live Session Content</h4>
        <div class="text-center col-sm-auto">
            <NuxtLink to="/live-session-content/free"><el-button type="warning">Free Sessions</el-button></NuxtLink>
            <NuxtLink to="/live-session-content/paid"><el-button type="warning">Paid Sessions</el-button></NuxtLink>
          </div>
			  </div>
			</div>
      <div v-if="loading" class="row">
            <div v-for="(n) in skeletonCount" :key="n" class="col-md-6 col-lg-3">
                <LiveContentCardSkeletonComponent />
            </div>
        </div>
        <div v-else-if="liveSessionContentData.length===0">
            <div class="row justify-content-center">
                <div class="col-md-6 col-sm-12">
                    <NoUserDataComponent />
                </div>
            </div>
        </div>
        <div v-else>
            <div class="row justify-content-center">
                <div v-for="item in liveSessionContentData" :key="item.id" class="col-md-6 col-lg-3">
                    <LiveContentCardComponent
                    :id="item.id"
                    :uuid="item.uuid"
                    :title="item.name"
                    :heading="item.heading"
                    :paid="item.paid"
                    :amount="item.amount"
                    :status="item.LiveSessionContentAssigned.length>0 ? item.LiveSessionContentAssigned[0].status : ''"
                    :scheduled-on="item.LiveSessionContentAssigned.length>0 ? item.LiveSessionContentAssigned[0].scheduledOn : ''"
                    :scheduled-at="item.LiveSessionContentAssigned.length>0 ? item.LiveSessionContentAssigned[0].scheduledAt : ''"
                    :assigned-role="item.LiveSessionContentAssigned.length>0 ? item.LiveSessionContentAssigned[0].assignedRole : ''"
                    :purchased="item.LiveSessionContentAssigned.length>0"
                    :paragraph="item.description" />
                </div><!-- end col -->
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import ContentCardComponent from '~/components/ContentCardComponent.vue';
import ContentCardSkeletonComponent from '~/components/ContentCardSkeletonComponent.vue';
import LiveContentCardComponent from '~/components/LiveContentCardComponent.vue';
import LiveContentCardSkeletonComponent from '~/components/LiveContentCardSkeletonComponent.vue';
import NoUserDataComponent from '~/components/NoUserDataComponent.vue';

export default {
    name: "IndexPage",
    components: { ContentCardComponent, ContentCardSkeletonComponent, LiveContentCardComponent, LiveContentCardSkeletonComponent, NoUserDataComponent },
    layout: "UserLayout",
    data() {
        return {
            contentData: [],
            freeTableData: [],
            paidTableData: [],
            liveSessionContentData: [],
            loading: false,
            freeLoading: false,
            paidLoading: false,
            skeletonCount: 4,
            contentCount: 0,
            liveSessionCount: 0,
            userCount: 0,
        };
    },
    mounted(){
        this.loadData();
        this.getFreeTableData();
        this.getPaidTableData();
    },
    methods: {
      async loadData(){
        this.loading=true
        try {
            const response = await this.$privateApi.get('/dashboard'); // eslint-disable-line
            this.contentCount = response?.data?.data?.count.contentCount
            this.liveSessionCount = response?.data?.data?.count.liveSessionCount
            this.userCount = response?.data?.data?.count.userCount
            this.contentData = response?.data?.data?.data.contentData
            this.liveSessionContentData = response?.data?.data?.data.liveSessionData
        } catch (err) {
            // console.log(err.response);// eslint-disable-line
            if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
            if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

        } finally {
            this.loading=false
        }
      },
      async getFreeTableData(page=0) {
        this.freeLoading=true
        try {
            const response = await this.$privateApi.get('/content-user/paginate-free?skip='+page); // eslint-disable-line
            this.freeTableData = response?.data?.data?.data
        } catch (err) {
            // console.log(err.response);// eslint-disable-line
            if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
            if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

        } finally {
            this.freeLoading=false
        }
      },
      async getPaidTableData(page=0) {
        this.paidLoading=true
        try {
            const response = await this.$privateApi.get('/content-user/paginate-paid?skip='+page); // eslint-disable-line
            this.paidTableData = response?.data?.data?.data
        } catch (err) {
            // console.log(err.response);// eslint-disable-line
            if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
            if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

        } finally {
            this.paidLoading=false
        }
      },
    }
}
</script>
