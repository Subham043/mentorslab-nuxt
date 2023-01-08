<template>
    <div>
        <BreadcrumbComponent main-page="Event Gallery" current-page="Create" />
        <section class="content">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h4 class="box-title">Create Event Gallery</h4>
                        </div>
                        <!-- /.box-header -->
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form class="form" method="post" @submit.prevent="handleSubmit(formHandler)">
                            <div class="box-body">
                                <h4 class="box-title text-primary mb-0"><i class="el-icon-reading"></i> Event Gallery Info</h4>
                                <hr class="my-15">
                                <div class="row">
                                    <div class="col-md-12">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|ext:jpg,jpeg,png,webp" name="image">
                                        <div class="form-group">
                                            <label class="form-label">Image *</label>
                                            <input v-model="image" type="hidden" />
                                            <input class="form-control" type="file" @change="handleFileChnage" />
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <!-- /.box-body -->
                            <div class="box-footer">
                                <NuxtLink :to="`/admin/events/list`"><button type="button" class="btn btn-primary-light me-1">
                                    <i class="el-icon-close"></i> Cancel
                                </button></NuxtLink>
                                <button type="submit" class="btn btn-primary">
                                    <i class="el-icon-folder-add"></i> Save
                                </button>
                            </div>
                        </form>
                        </ValidationObserver>
                    </div>
                    <!-- /.box -->
                </div>
            </div>
            <!-- /.row -->

        </section>

        <section v-if="(tableData.length > 0)" class="content">
            <div class="row">

                <div class="col-12">
                    <div class="box">
                        <div class="box-header d-flex justify-content-between align-items-center">
                            <h4 class="box-title">Event Gallery</h4>
                        </div>
                        <div class="box-body">
                            <viewer class="row" :images="tableData">
                                <div v-for="(item, index) in tableData" :key="index" class="mt-5 col-lg-3 col-md-6 col-sm-12">
                                    <el-card :body-style="{ padding: '0px' }">
                                        <img :src="`${apiUrl}/event-gallery/file/${item.image}`" class="image">
                                        <div style="padding: 14px;">
                                            <div class="row justify-content-between align-items-center">
                                                <time class="time col-sm-auto">{{$dateFns.format(new Date(item.createdAt), 'dd-MMM-yyyy hh:mm aa')}}</time>
                                                <div class="col-sm-auto">
                                                    <el-popconfirm
                                                        confirm-button-text='OK'
                                                        cancel-button-text='No, Thanks'
                                                        icon="el-icon-info"
                                                        icon-color="red"
                                                        title="Are you sure to delete this?"
                                                        @confirm="deleteRow(item.id)"
                                                        >
                                                        <el-button
                                                        slot="reference" type="danger" icon="el-icon-delete"  circle
                                                        ></el-button>
                                                    </el-popconfirm>
                                                </div>
                                            </div>
                                        </div>
                                    </el-card>
                                </div>
                            </viewer>
                        </div>
                        <div class="box-footer text-center">
                            <pagination v-model="currentPage" :records="count" :per-page="10" @paginate="handlePaginationChnage"/>
                        </div>
                    </div>
                </div>

                <!-- /.col -->
            </div>
            <!-- /.row -->
        </section>

    </div>
</template>
  
<script>
import BreadcrumbComponent from '~/components/BreadcrumbComponent.vue';
export default {
    name: "CreateEventGalleryPage",
    components: { BreadcrumbComponent },
    layout: "AdminLayout",
    data() {
        return {
            image: [],
            count:1,
            tableData: [],
            currentPage: 1
        }
    },
    computed:{
        apiUrl(){
            return this.$config.apiURL
        }
    },
    watch: {
        $route(to, from) {
            this.handlePageChnage();
        }
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
      if(process.client){
          this.$scrollTo('#__nuxt', 0, {force: true})
      }
      this.handlePageChnage();
    },
    methods: {
        async formHandler() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const formData = new FormData;
                formData.append('image', this.image);
                const response = await this.$privateApi.post('/event-gallery/'+this.$route.params.event_id, formData); // eslint-disable-line
                this.$toast.success('Event Gallery created successfully')
                this.handlePageChnage();
                this.image = [];
                this.$refs.form.reset()
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                image: err?.response?.data?.form_error?.image,
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                
            }finally{
            loading.close()
            }
        },
        handleFileChnage(event){
            this.image = event.target.files[0];
        },
        async getTableData(page=0) {
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$privateApi.get('/event-gallery/paginate/'+this.$route.params.event_id+'?skip='+page); // eslint-disable-line
                this.tableData = response?.data?.data?.data
                this.count = response?.data?.data?.count
                this.currentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            } finally {
                loading.close()
            }
        },
        async deleteRow(id){
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                // eslint-disable-next-line no-unused-vars
                const response = await this.$privateApi.delete('/event-gallery/'+id);
                const newTableData = this.tableData.filter((item)=>{
                    return item.id!==id;
                })
                this.tableData = newTableData;
                this.$toast.success('Event Gallery deleted successfully')
            } catch (err) {
                if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            } finally {
                loading.close()
            }
        },
        handlePaginationChnage(page){
            this.$router.push({query:{page}});
        },
        handlePageChnage(){
            this.currentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getTableData(this.$route.query.page ? (this.$route.query.page*10)-10 : 0);
            // console.log(this.currentPage);
        }
    }
}
</script>

<style scoped>
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
  }

  .image {
    width: 100%;
    height: 150px;
    object-fit: contain;
    display: block;
    padding: 10px;
    cursor: pointer;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
  