<template>
    <div>
        <section class="content">
            <div v-if="paid && !purchased" class="center-placement">
                <div>
                    <h5>Oops!! You are trying to join an invalid session</h5>
                    <NuxtLink :to="`/live-session-content/detail/${uuid}`" type="button" class="btn btn-primary btn-outline mt-2"> Go Back </NuxtLink>
                </div>
            </div>
            <template v-else-if="paid && purchased">
                <div v-if="status==='SCHEDULED' && assignedRole==='PURCHASED'" class="center-placement">
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
                        <h5>Oops!! You are trying to join an invalid session</h5>
                        <NuxtLink :to="`/live-session-content/detail/${uuid}`" type="button" class="btn btn-primary btn-outline mt-2"> Go Back </NuxtLink>
                    </div>
                </div>
            </template>
            <div v-else-if="!paid && !purchased" class="center-placement">
                <div>
                    <h5>Oops!! You are trying to join an invalid session</h5>
                    <NuxtLink :to="`/live-session-content/detail/${uuid}`" type="button" class="btn btn-primary btn-outline mt-2"> Go Back </NuxtLink>
                </div>
            </div>
            <template v-else-if="!paid && purchased">
                <div v-if="status==='SCHEDULED' && assignedRole==='ASSIGNED'" class="center-placement">
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
                <div v-else-if="status==='RESCHEDULED' && assignedRole==='ASSIGNED'" class="center-placement">
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
                        <h5>Oops!! You are trying to join an invalid session</h5>
                        <NuxtLink :to="`/live-session-content/detail/${uuid}`" type="button" class="btn btn-primary btn-outline mt-2"> Go Back </NuxtLink>
                    </div>
                </div>
            </template>
        </section>
    </div>
</template>
  
<script>
import ZoomWindow from '~/components/ZoomWindow'
export default {
    name: "LiveSessionContentJoinPage",
    components: ZoomWindow,
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
            purchased: false,
            status: '',
            assignedRole: '',
            scheduledOn: '',
            scheduledAt: '',
            showJoinButton: false,
            zoom_id:'',
            zoom_signature: '',
            zoom_password: '',
            assignedId: '',
        }
    },
    mounted(){
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if(process.client){
            this.$scrollTo('#__nuxt', 0, {force: true})
        }
        this.checkId()
    },
    methods: {
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
                const response = await this.$privateApi.get('/live-session-content/join/'+this.$route.params.id); // eslint-disable-line
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
                this.$router.push('/admin/schedule-live-session/list');
            } finally{
                loading.close()
            }
        },
        async timeElapsedHandler(){
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$privateApi.get('/live-session-assigned-content/zoom-signature/'+this.assignedId); // eslint-disable-line
                this.zoom_signature = response.data.data
                this.showJoinButton= true;
                // eslint-disable-next-line no-console
                this.$refs.zoom_comp.startZoom(this.zoom_id, this.zoom_password, this.zoom_signature);
            } catch (err) {
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
.center-placement{
    display: grid;
    place-items: center;
    width: 100%;
    min-height: 100vh;
    text-align: center;
}
</style>
  