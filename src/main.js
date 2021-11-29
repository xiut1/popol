import Vue from 'vue'
import App from './App.vue'

// font-awesome
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// gsap
import gsap from 'gsap'

// scroll trigger
import vueScrollTrigger from 'vue-scroll-trigger'

// custom css
import '@/assets/css/reset.css'
import '@/assets/css/ui.css'

Vue.use(BootstrapVue, IconsPlugin, gsap, vueScrollTrigger)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')