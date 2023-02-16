import VueFullscreen from 'vue-fullscreen'
import Vue from 'vue'
Vue.use(VueFullscreen)
export default {
    methods: {
        toggle() {
            this.fullscreen = !this.fullscreen
        },
        toggleApi() {
            this.$fullscreen.toggle()
        },
    },
    data() {
        return {
            fullscreen: false,
        }
    }
}
