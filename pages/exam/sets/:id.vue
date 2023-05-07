<template>
    <div>
        <section class="content">
            <div class="box-header d-flex justify-content-between align-items-center box-header-user">
                <UserCrumbComponent main-page="Exam" current-page="Appear" />
            </div>
            <div v-if="!status" class="center-placement">
                <div>
                    <h5>Oops!! You are trying to join an invalid exam</h5>
                    <NuxtLink :to="`/exam/detail/${uuid}`" type="button" class="btn btn-primary btn-outline mt-2"> Go Back </NuxtLink>
                </div>
            </div>
            <template v-else>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="box bg-holder-img ">
                          <div class="box-body">
                              <div class="row">

                                  <div class="col-sm-12 events-content">
                                      <div class="selected">
                                          <div class="row justify-content-between align-items-flex-end">
                                          <div class="d-inline col-md-8 col-sm-12 order-1-sm">
                                              <h4 class="">
                                                <span class="badge badge-primary-light">Question ({{ current_question }} / {{ total_questions }})</span>
                                                <el-badge :value="marks" class="item">
                                                  <el-button size="small">Marks</el-button>
                                                </el-badge>
                                              </h4>
                                              <div v-if="image" class="box box-body b-1 text-center no-shadow" style="max-width:200px;">
                                                <img id="product-image" :src="`${apiUrl}/exam-user/question-answer-image/${image}`" class="img-responsive bg-light rounded img-fluid card-img-top" alt="" />
                                              </div>
                                              <div v-html-safe="question" class="mt-0" />
                                            </div>
                                            <div class="col-md-4 col-sm-12 text-center order-2-sm">
                                              <client-only>
                                                <vac v-if="timerTrigger" :start-time="startOn" :end-time="scheduledOn" @finish="timeElapsedHandler">
                                                    <span
                                                    slot="process"
                                                    slot-scope="{ timeObj }">
                                                        <div style="position: relative;">
                                                          <div class="timer" :style="`--duration: ${duration * 60};--size: 210;`">
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
                                            <el-radio v-model="radio" label="answer_a">Option A : </el-radio>
                                            <div v-html-safe="answer_a" class="my-10" />
                                          </div>
                                          <div class="py-20" style="border-bottom: 1px dotted black;">
                                            <el-radio v-model="radio" label="answer_b">Option B : </el-radio>
                                            <div v-html-safe="answer_b" class="my-10" />
                                          </div>
                                          <div class="py-20" style="border-bottom: 1px dotted black;">
                                            <el-radio v-model="radio" label="answer_c">Option C : </el-radio>
                                            <div v-html-safe="answer_c" class="my-10" />
                                          </div>
                                          <div class="py-20" style="border-bottom: 1px dotted black;">
                                            <el-radio v-model="radio" label="answer_d">Option D : </el-radio>
                                            <div v-html-safe="answer_d" class="my-10" />
                                          </div>
                                          <div class="py-20">
                                            <el-button type="primary" @click="submitAnswer">Submit</el-button>
                                          </div>
                                      </div>
                                  </div>


                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
            </template>
        </section>
    </div>
</template>

<script>
import UserCrumbComponent from '~/components/UserCrumbComponent.vue';

export default {
    name: "ExamAppearPage",
    components: { UserCrumbComponent },
    layout: "UserLayout",
    data() {
        return {
            id: 0,
            uuid: "",
            question: "",
            answer_a: "",
            answer_b: "",
            answer_c: "",
            answer_d: "",
            duration: 0,
            marks: 0,
            image: null,
            status: false,
            startOn: new Date().getTime(),
            scheduledOn: new Date(new Date().getTime() + 0 * 60000).getTime(),
            radio: "",
            warnStatus: false,
            warnCounter: 0,
            total_questions: 0,
            current_question: 0,
            timerTrigger: false
        };
    },
    computed: {
        apiUrl() {
            return this.$config.apiURL;
        },
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
            window.addEventListener("blur", this.logTabChanged);
        }
        this.checkId();
    },
    destroyed() {
        window.removeEventListener("blur", this.logTabChanged);
    },
    methods: {
        logTabChanged() {
            if (process.client) {
                this.warningOpen();
            }
        },
        warningOpen() {
            if (this.warnStatus === false && this.warnCounter <= 1) {
                this.warnStatus = true;
                ++this.warnCounter;
                this.$alert("This is a warning because you tried escape the exam screen. If you do it again, then you will be barred from giving this exam!", "WARNING!!", {
                    confirmButtonText: "OK",
                    callback: action => {
                        this.$message({
                            type: "success",
                            message: `You can continue with the exam`
                        });
                    }
                });
            }
            else {
                this.abortExam();
            }
        },
        async checkId() {
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            if (!this.$route.params.id) {
                this.$toast.error("Invalid ID");
                this.$router.push("/exam/all");
            }
            try {
                const response = await this.$privateApi.get("/exam-user/sets/" + this.$route.params.id); // eslint-disable-line
                if (response.data.data.exam_status === "ONGOING") {
                    this.id = response.data.data.sets.id;
                    this.uuid = response.data.data.sets.uuid;
                    this.question = response.data.data.sets.question;
                    this.answer_a = response.data.data.sets.answer_a;
                    this.answer_b = response.data.data.sets.answer_b;
                    this.answer_c = response.data.data.sets.answer_c;
                    this.answer_d = response.data.data.sets.answer_d;
                    this.duration = parseInt(response.data.data.sets.duration);
                    this.image = response.data.data.sets.image;
                    this.marks = parseInt(response.data.data.sets.marks);
                    this.status = response.data.data.status;
                    this.total_questions = response.data.data.totalQuestion;
                    this.current_question = response.data.data.currentQuestion;
                    this.timerTrigger = true;
                    this.startOn = new Date().getTime();
                    this.scheduledOn = new Date(new Date().getTime() + parseInt(response.data.data.sets.duration) * 60000).getTime();
                }
                else if (response.data.data.exam_status === "COMPLETED") {
                    this.$message({
                        type: "success",
                        duration: 5000,
                        message: response.data.data.message
                    });
                    this.$router.push("/exam/report/" + this.$route.params.id);
                }
                else if (response.data.data.exam_status === "ABORTED") {
                    this.$message({
                        type: "error",
                        duration: 5000,
                        message: response.data.data.message
                    });
                    this.$router.push("/exam/detail/" + this.$route.params.id);
                }
            }
            catch (err) {
                // eslint-disable-next-line no-console
                console.log(err);
                if (err?.response?.data?.message)
                    this.$toast.error(err?.response?.data?.message);
                if (err?.response?.data?.error)
                    this.$toast.error(err?.response?.data?.error);
                this.$router.push("/exam/all");
            }
            finally {
                loading.close();
            }
        },
        async submitAnswer() {
            this.timerTrigger = false;
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            if (!this.$route.params.id) {
                this.$toast.error("Invalid ID");
                this.$router.push("/exam/all");
            }
            try {
                const formData = {
                    selected_answer: this.radio,
                    status: "ONGOING"
                };
                const response = await this.$privateApi.post("/exam-user/answer/" + this.$route.params.id, formData); // eslint-disable-line
                this.checkId();
                this.radio = "";
            }
            catch (err) {
                if (err?.response?.data?.form_error?.reason)
                    this.$toast.error(err?.response?.data?.form_error?.reason[0]);
                if (err?.response?.data?.form_error?.selected_answer)
                    this.$toast.error(err?.response?.data?.form_error?.selected_answer[0]);
                if (err?.response?.data?.form_error?.status)
                    this.$toast.error(err?.response?.data?.form_error?.status[0]);
                if (err?.response?.data?.message)
                    this.$toast.error(err?.response?.data?.message);
                if (err?.response?.data?.error)
                    this.$toast.error(err?.response?.data?.error);
            }
            finally {
                loading.close();
            }
        },
        async abortExam() {
            this.timerTrigger = false;
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            if (!this.$route.params.id) {
                this.$toast.error("Invalid ID");
                this.$router.push("/exam/all");
            }
            try {
                const formData = {
                    status: "ABORTED",
                    reason: "you tried to change the exam screen!"
                };
                const response = await this.$privateApi.post("/exam-user/answer/" + this.$route.params.id, formData); // eslint-disable-line
                this.checkId();
                this.radio = "";
            }
            catch (err) {
                if (err?.response?.data?.form_error?.reason)
                    this.$toast.error(err?.response?.data?.form_error?.reason[0]);
                if (err?.response?.data?.form_error?.selected_answer)
                    this.$toast.error(err?.response?.data?.form_error?.selected_answer[0]);
                if (err?.response?.data?.form_error?.status)
                    this.$toast.error(err?.response?.data?.form_error?.status[0]);
                if (err?.response?.data?.message)
                    this.$toast.error(err?.response?.data?.message);
                if (err?.response?.data?.error)
                    this.$toast.error(err?.response?.data?.error);
            }
            finally {
                loading.close();
            }
        },
        async timeElapsedHandler() {
            this.timerTrigger = false;
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            if (!this.$route.params.id) {
                this.$toast.error("Invalid ID");
                this.$router.push("/exam/all");
            }
            try {
                const formData = {
                    status: "ONGOING"
                };
                const response = await this.$privateApi.post("/exam-user/answer/" + this.$route.params.id, formData); // eslint-disable-line
                this.checkId();
                this.radio = "";
            }
            catch (err) {
                if (err?.response?.data?.form_error?.reason)
                    this.$toast.error(err?.response?.data?.form_error?.reason[0]);
                if (err?.response?.data?.form_error?.selected_answer)
                    this.$toast.error(err?.response?.data?.form_error?.selected_answer[0]);
                if (err?.response?.data?.form_error?.status)
                    this.$toast.error(err?.response?.data?.form_error?.status[0]);
                if (err?.response?.data?.message)
                    this.$toast.error(err?.response?.data?.message);
                if (err?.response?.data?.error)
                    this.$toast.error(err?.response?.data?.error);
            }
            finally {
                loading.close();
            }
        }
    }
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
