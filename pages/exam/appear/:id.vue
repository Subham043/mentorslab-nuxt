<template>
    <div>
        <section class="content">
            <div class="box-header d-flex justify-content-between align-items-center box-header-user">
                <UserCrumbComponent main-page="Exam" current-page="Appear" />
            </div>
            <div v-if="(paid && !purchased) || (!paid && !purchased)" class="center-placement">
                <div>
                    <h5>Oops!! You are trying to join an invalid session</h5>
                    <NuxtLink :to="`/exam/detail/${uuid}`" type="button" class="btn btn-primary btn-outline mt-2"> Go Back </NuxtLink>
                </div>
            </div>
            <template v-else-if="(paid && purchased) || (!paid && purchased)">
                <div v-if="status==='SCHEDULED' && assignedRole==='PURCHASED'">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="box bg-holder-img ">
                          <div class="box-body">
                              <div class="row">

                                  <div class="col-sm-12 events-content">
                                      <div class="selected">
                                          <div class="row justify-content-between align-items-flex-end">
                                          <div class="d-inline col-md-8 col-sm-12 order-1-sm">
                                              <h4 class=""><span class="badge badge-success-light">Question</span></h4>
                                              <div class="box box-body b-1 text-center no-shadow" style="max-width:200px;">
                                                <img id="product-image" :src="`${apiUrl}/exam-user/image/${uuid}`" class="img-responsive bg-light rounded img-fluid card-img-top" alt="" />
                                              </div>
                                              <div class="mt-0">What is your name?</div>
                                            </div>
                                            <div class="col-md-4 col-sm-12 text-center order-2-sm">
                                              <client-only>
                                                <vac :end-time="new Date(scheduledOn).getTime()" @finish="timeElapsedHandler">
                                                    <span
                                                    slot="process"
                                                    slot-scope="{ timeObj }">
                                                        <div style="position: relative;">
                                                          <div class="timer" :style="`--duration: ${minutes * 60};--size: 210;`">
                                                            <div class="mask">
                                                            </div>
                                                          </div>
                                                          <h5 class="countdown">{{ `${timeObj.m} mins ${timeObj.s} secs` }}</h5>
                                                        </div>
                                                    </span>
                                                    <div slot="finish">
                                                      <div style="position: relative;">
                                                        <div class="timer-full" :style="`--duration: 0;--size: 210;`">
                                                          <div class="mask">
                                                          </div>
                                                        </div>
                                                        <h4 class="countdown"><span class="badge badge-danger-light">Times Up!!</span></h4>
                                                      </div>
                                                    </div>
                                                </vac>
                                            </client-only>
                                            </div>
                                          </div>
                                          <hr class="mt-10 mb-20">
                                          <h4 class=""><span class="badge badge-success-light">Select an Answers</span></h4>
                                          <div class="py-20" style="border-bottom: 1px dotted black;">
                                            <el-radio v-model="radio" label="1">Option A : </el-radio>
                                            <div>My Name is Subham Saha</div>
                                          </div>
                                          <div class="py-20" style="border-bottom: 1px dotted black;">
                                            <el-radio v-model="radio" label="2">Option B : </el-radio>
                                            <div>My Name is Subham Saha</div>
                                          </div>
                                          <div class="py-20" style="border-bottom: 1px dotted black;">
                                            <el-radio v-model="radio" label="3">Option C : </el-radio>
                                            <div>My Name is Subham Saha</div>
                                          </div>
                                          <div class="py-20" style="border-bottom: 1px dotted black;">
                                            <el-radio v-model="radio" label="4">Option D : </el-radio>
                                            <div>My Name is Subham Saha</div>
                                          </div>
                                          <div class="py-20">
                                            <el-button type="primary">Primary</el-button>
                                          </div>
                                      </div>
                                  </div>


                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else-if="status==='RESCHEDULED' && assignedRole==='PURCHASED'" class="center-placement">
                    <client-only>
                        <vac :end-time="new Date(scheduledOn).getTime()" @finish="timeElapsedHandler">
                            <span
                            slot="process"
                            slot-scope="{ timeObj }">
                                <h5 class="text-center">Time remaining before you can join the live session:</h5>
                                <h6 class="text-center">{{ `${timeObj.d} days ${timeObj.h} hrs ${timeObj.m} mins ${timeObj.s} secs` }}</h6>
                            </span>
                            <div slot="finish">
                                <zoom-window ref="zoom_comp" :nickname="$auth.user.name ? $auth.user.name : 'Anonymous'" />
                            </div>
                        </vac>
                    </client-only>
                </div>
                <div v-else class="center-placement">
                    <div>
                        <h5>Oops!! You are trying to appear for an invalid exam</h5>
                        <NuxtLink :to="`/exam/detail/${uuid}`" type="button" class="btn btn-primary btn-outline mt-2"> Go Back </NuxtLink>
                    </div>
                </div>
            </template>
        </section>
    </div>
</template>

<script>
export default {
    name: "ExamAppearPage",
    layout: "UserLayout",
    data() {
        return {
            id: 0,
            uuid: '',
            name: '',
            heading: '',
            description: '',
            amount: '',
            paid: false,
            purchased: true,
            status: 'SCHEDULED',
            assignedId: '',
            assignedRole: 'PURCHASED',
            minutes:2,
            scheduledOn: new Date(new Date().getTime() + 2 * 60000),
            radio: '',
            warnStatus:false,
            warnCounter:0,
            scheduledAt: '',
            showJoinButton: false,
            zoom_id:'',
            zoom_signature: '',
            zoom_password: ''
        }
    },
    computed:{
        apiUrl(){
            return this.$config.apiURL
        }
    },
    mounted(){
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if(process.client){
            this.$scrollTo('#__nuxt', 0, {force: true})
            window.addEventListener('blur',this.logTabChanged);
        }
        // this.checkId()
    },
    destroyed(){
      window.removeEventListener('blur',this.logTabChanged);
    },
    methods: {
        logTabChanged(){
          if(process.client){
            this.warningOpen()
          }
        },
        warningOpen() {
          if(this.warnStatus===false && this.warnCounter<=1){
            this.warnStatus=true;
            ++this.warnCounter;
            this.$alert('This is a warning because you tried escape the exam screen. If you do it again, then you will be barred from giving this exam!', 'WARNING!!', {
              confirmButtonText: 'OK',
              callback: action => {
                this.$message({
                  type: 'success',
                  message: `You can continue with the exam`
                });
              }
            });
          }else{
            this.$message({
              type: 'error',
              message: `Barred!!`
            });
          }
        },
        async checkId(){
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            if(!this.$route.params.id){
                this.$toast.error('Invalid ID')
                this.$router.push('/live-session-content/all');
            }
            try {
                const response = await this.$privateApi.get('/live-session-content-user/'+this.$route.params.id); // eslint-disable-line
                this.id = response.data.data.id;
                this.uuid = response.data.data.uuid;
                this.name = response.data.data.name;
                this.heading = response.data.data.heading;
                this.description = response.data.data.description;
                this.paid = response.data.data.paid;
                this.amount = response.data.data.amount;
                if(response.data.data.LiveSessionContentAssigned && response.data.data.LiveSessionContentAssigned.length>0){
                    this.purchased = true;
                    this.status = response.data.data.LiveSessionContentAssigned[0].status
                    this.scheduledOn = response.data.data.LiveSessionContentAssigned[0].scheduledOn
                    this.scheduledAt = response.data.data.LiveSessionContentAssigned[0].scheduledAt
                    this.assignedRole = response.data.data.LiveSessionContentAssigned[0].assignedRole
                    this.assignedId = response.data.data.LiveSessionContentAssigned[0].id
                    this.zoom_id = response.data.data.LiveSessionContentAssigned[0].zoom ? String(response.data.data.LiveSessionContentAssigned[0].zoom.id) : ''
                    this.zoom_password = response.data.data.LiveSessionContentAssigned[0].zoom ? response.data.data.LiveSessionContentAssigned[0].zoom.password : ''
                }
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                this.$router.push('/content/all');
            } finally{
                loading.close()
            }
        },
        async timeElapsedHandler(){
            // const loading = this.$loading({
            //     lock: true,
            //     fullscreen: true,
            // });
            // try {
            //     const response = await this.$privateApi.get('/live-session-assigned-content-user/zoom-signature/'+this.assignedId); // eslint-disable-line
            //     this.zoom_signature = response.data.data
            //     this.showJoinButton= true;
            //     // eslint-disable-next-line no-console
            //     this.$refs.zoom_comp.startZoom(this.zoom_id, this.zoom_password, this.zoom_signature);
            // } catch (err) {
            //     if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
            //     if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            // } finally{
            //     loading.close()
            // }
        }

    },
}
</script>

<style scoped>
/* stylelint-disable */
.card-img-top{
    height: 130px;
    width: auto;
    object-fit: contain;
}
.align-items-flex-end{ align-items: flex-end;}
.bg-holder-img {
position: relative;
background-repeat: no-repeat;
z-index: 0;
background-image: url('/images/abstract-2.svg');
background-position: left top;
background-size: 13% auto;}
.center-placement{
    display: grid;
    place-items: center;
    width: 100%;
    min-height: 100vh;
    text-align: center;
}

.countdown{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.timer {
    background: -webkit-linear-gradient(left, #eee 50%, #019ff8 50%);
    border-radius: 100%;
    height: calc(var(--size) * 1px);
    width: calc(var(--size) * 1px);
    position: relative;
    -webkit-animation: time calc(var(--duration) * 1s) steps(1000, start) infinite;
      -webkit-mask: radial-gradient(transparent 50%,#000 50%);
      mask: radial-gradient(transparent 50%,#000 50%);
}
.timer-full {
    font-size: 3.2rem;
    display: inline-block;
    vertical-align: top;
    font-weight: 600;
    background: -webkit-linear-gradient(left, #eee 100%, #019ff8 50%);
    border-radius: 100%;
    height: calc(var(--size) * 1px);
    width: calc(var(--size) * 1px);
    position: relative;
    -webkit-animation: time calc(var(--duration) * 1s) steps(1000, start) infinite;
      -webkit-mask: radial-gradient(transparent 50%,#000 50%);
      mask: radial-gradient(transparent 50%,#000 50%);
}
.mask {
    border-radius: 100% 0 0 100% / 50% 0 0 50%;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 50%;
    -webkit-animation: mask calc(var(--duration) * 1s) steps(500, start) infinite;
    -webkit-transform-origin: 100% 50%;
}
@keyframes time {
    100% {
        -webkit-transform: rotate(360deg);
    }
}
@keyframes mask {
    0% {
        background: #019ff8;
        -webkit-transform: rotate(0deg);
    }
    50% {
        background: #019ff8;
        -webkit-transform: rotate(-180deg);
    }
    50.01% {
        background: #eee;
        -webkit-transform: rotate(0deg);
    }
    100% {
        background: #eee;
        -webkit-transform: rotate(-180deg);
    }
}
</style>
