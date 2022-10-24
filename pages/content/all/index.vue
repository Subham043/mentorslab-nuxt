<template>
    <div>
    <section class="content">
        <div class="box-header d-flex justify-content-between align-items-center box-header-user">
            <UserCrumbComponent main-page="Content" current-page="All" />
        </div>
        <div v-if="loading" class="row">
            <div v-for="(n) in skeletonCount" :key="n" class="col-md-6 col-lg-3">
                <ContentCardSkeletonComponent />
            </div>
        </div>
        <div v-else>
            <div class="row">
                <div v-for="item in tableData" :key="item.id" class="col-md-6 col-lg-3">
                    <ContentCardComponent
                    :title="item.heading" 
                    :paragraph="item.description" />
                </div><!-- end col -->
            </div>
            <div class="box-footer">
                <el-pagination
                background
                style="text-align:center"
                layout="prev, pager, next"
                :page-size="10"
                :current-page.sync="currentPage"
                :total="count"
                @current-change="handlePaginationChnage">
                </el-pagination>
            </div>
        </div>
    
    </section>
    </div>
  </template>
  
  <script>
  import UserCrumbComponent from '~/components/UserCrumbComponent.vue'
  import ContentCardSkeletonComponent from '~/components/ContentCardSkeletonComponent.vue';
  import ContentCardComponent from '~/components/ContentCardComponent.vue';
  export default {
    name: "UserContentAllPage",
    components: { UserCrumbComponent, ContentCardComponent, ContentCardSkeletonComponent },
    layout: "UserLayout",
    data() {
        return {
            count:0,
            tableData: [],
            currentPage: null,
            loading:false,
            skeletonCount:4
        }
    },
    watch: {
        $route(to, from) {
            this.handlePageChnage();
        }
    },
    mounted(){
        this.handlePageChnage();
    },
    methods:{
    async getTableData(page=0) {
        this.loading=true
        try {
            const response = await this.$privateApi.get('/content-user/paginate-all?skip='+page); // eslint-disable-line
            this.tableData = response?.data?.data?.data
            this.count = response?.data?.data?.count
            this.currentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
        } catch (err) {
            // console.log(err.response);// eslint-disable-line
            if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
            if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

        } finally {
            this.loading=false
        }
    },
    handlePaginationChnage(page){
        this.$router.push({query:{page}});
    },
    handlePageChnage(){
        this.currentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
        this.getTableData(this.$route.query.page ? (this.$route.query.page*10)-10 : 0);
    }
    }
  }
  </script>
  <style scoped>
    .box-header-user{
        padding: 1.5rem 0;
    }
  </style>
  