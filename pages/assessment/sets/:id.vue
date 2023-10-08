<template>
    <div>
        <section class="content">
            <div class="box-header d-flex justify-content-between align-items-center box-header-user">
                <UserCrumbComponent main-page="Assessment" current-page="Appear" />
            </div>
            <div v-if="!status" class="center-placement">
                <div>
                    <h5>Oops!! You are trying to join an invalid assessment</h5>
                    <NuxtLink :to="`/assessment/detail/${uuid}`" type="button" class="btn btn-primary btn-outline mt-2"> Go Back </NuxtLink>
                </div>
            </div>
            <template v-else>
                  <div class="row justify-content-center">
                    <div class="col-lg-10 col-md-12 col-sm-12">
                      <div class="box bg-holder-img ">
                          <div class="box-body">
                              <div class="row justify-content-between align-items-center">

                                  <div class="col-lg-10 col-md-9 col-sm-12 events-content">
                                      <div class="selected">
                                          <div class="row justify-content-between align-items-flex-end">
                                              <!-- <div class="d-flex flex-wrap justify-content-center col-md-12 col-sm-12 mb-3">
                                              </div> -->
                                              <div class="d-inline col-lg-8 col-md-8 col-sm-12 order-1-sm">
                                                <div v-if="image" class="box box-body b-1 text-center no-shadow" style="max-width:200px;">
                                                  <img id="product-image" :src="`${apiUrl}/assessment-user/question-answer-image/${image}`" class="img-responsive bg-light rounded img-fluid card-img-top" alt="" />
                                                </div>
                                                <div v-html-safe="question" class="mt-0" />
                                            </div>
                                          </div>
                                          <hr class="mt-10 mb-20">
                                          <h4 class=""><span class="badge badge-success-light">Select an Answers</span></h4>
                                          <div class="py-20" style="border-bottom: 1px dotted black;">
                                            <el-radio v-model="radio" :label="answer_a_choice_id">Option A :
                                              <div v-html-safe="answer_a" class="my-10" />
                                            </el-radio>
                                          </div>
                                          <div class="py-20" style="border-bottom: 1px dotted black;">
                                            <el-radio v-model="radio" :label="answer_b_choice_id">Option B :
                                              <div v-html-safe="answer_b" class="my-10" />
                                            </el-radio>
                                          </div>
                                          <div v-if="answer_c_choice_id" class="py-20" style="border-bottom: 1px dotted black;">
                                            <el-radio v-model="radio" :label="answer_c_choice_id">Option C :
                                              <div v-html-safe="answer_c" class="my-10" />
                                            </el-radio>
                                          </div>
                                          <div v-if="answer_d_choice_id" class="py-20" style="border-bottom: 1px dotted black;">
                                            <el-radio v-model="radio" :label="answer_d_choice_id">Option D :
                                              <div v-html-safe="answer_d" class="my-10" />
                                            </el-radio>
                                          </div>
                                          <div class="py-20">
                                            <el-button type="primary" @click="submitAnswer">Submit</el-button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-2 col-md-3 col-sm-12 p-2">
                                    <h4 class="text-center">
                                      <span class="badge badge-primary-light">Question ({{ current_question }} / {{ total_questions }})</span>
                                    </h4>
                                    <div class="question_set_marker d-flex flex-wrap align-items-center" style="justify-content:center">
                                      <div v-for="i in total_questions" :key="i" :class="`${(i)==parseInt(current_question) ? 'question_set_box_current' : ((i)<parseInt(current_question) ? 'question_set_box_completed' : 'question_set_box_pending')} question_set_box`" >{{i}}</div>
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
    name: "AssessmentAppearPage",
    components: { UserCrumbComponent },
    layout: "UserLayout",
    data() {
        return {
            id: 0,
            uuid: "",
            question: "",
            answer_a: "",
            answer_a_choice_id: "",
            answer_b: "",
            answer_b_choice_id: "",
            answer_c: "",
            answer_c_choice_id: "",
            answer_d: "",
            answer_d_choice_id: "",
            image: null,
            status: false,
            radio: "",
            warnStatus: false,
            warnCounter: 0,
            total_questions: 0,
            current_question: 0,
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
        }
        this.checkId();
    },
    methods: {
        async checkId() {
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            if (!this.$route.params.id) {
                this.$toast.error("Invalid ID");
                this.$router.push("/assessment/all");
            }
            try {
                const response = await this.$privateApi.get("/assessment-user/sets/" + this.$route.params.id); // eslint-disable-line
                if (response.data.data.assessment_status === "ONGOING") {
                    this.id = response.data.data.sets.id;
                    this.uuid = response.data.data.sets.uuid;
                    this.question = response.data.data.sets.question;
                    this.answer_a = response.data.data.sets.answer_a;
                    this.answer_a_choice_id = response.data.data.sets.answer_a_choice_id;
                    this.answer_b = response.data.data.sets.answer_b;
                    this.answer_b_choice_id = response.data.data.sets.answer_b_choice_id;
                    this.answer_c = response.data.data.sets.answer_c;
                    this.answer_c_choice_id = response.data.data.sets.answer_c_choice_id;
                    this.answer_d = response.data.data.sets.answer_d;
                    this.answer_d_choice_id = response.data.data.sets.answer_d_choice_id;
                    this.image = response.data.data.sets.image;
                    this.status = response.data.data.status;
                    this.total_questions = response.data.data.totalQuestion;
                    this.current_question = response.data.data.currentQuestion;
                }
                else if (response.data.data.assessment_status === "COMPLETED") {
                    this.$message({
                        type: "success",
                        duration: 5000,
                        message: response.data.data.message
                    });
                    this.$router.push("/assessment/report/" + this.$route.params.id);
                }
                else if (response.data.data.assessment_status === "ABORTED") {
                    this.$message({
                        type: "error",
                        duration: 5000,
                        message: response.data.data.message
                    });
                    this.$router.push("/assessment/detail/" + this.$route.params.id);
                }
            }
            catch (err) {
                // eslint-disable-next-line no-console
                console.log(err);
                if (err?.response?.data?.message)
                    this.$toast.error(err?.response?.data?.message);
                if (err?.response?.data?.error)
                    this.$toast.error(err?.response?.data?.error);
                this.$router.push("/assessment/all");
            }
            finally {
                loading.close();
            }
        },
        async submitAnswer() {
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            if (!this.$route.params.id) {
                this.$toast.error("Invalid ID");
                this.$router.push("/assessment/all");
            }
            try {
                const formData = {
                    selected_answer_id: this.radio,
                    status: "ONGOING"
                };
                const response = await this.$privateApi.post("/assessment-user/answer/" + this.$route.params.id, formData); // eslint-disable-line
                this.checkId();
                this.radio = "";
            }
            catch (err) {
                if (err?.response?.data?.form_error?.reason)
                    this.$toast.error(err?.response?.data?.form_error?.reason[0]);
                if (err?.response?.data?.form_error?.selected_answer_id)
                    this.$toast.error(err?.response?.data?.form_error?.selected_answer_id[0]);
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
.question_set_marker{
  /* border:1px solid #888888; */
  width:100%;
}
.question_set_box{
  width:40px;
  height:40px;
  border:1px dashed #b8b8b8;
  display:grid;
  place-content:center;
}
.question_set_box_pending{
  background-color: #ee8f8f;
}
.question_set_box_completed{
  background-color: #a3e1a3;
}
.question_set_box_current{
  background-color: #9292f3;
}
.events-content{
  border-right: 1px dotted #ccc;
}
</style>
