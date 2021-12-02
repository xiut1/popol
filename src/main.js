import Vue from 'vue'
import App from './App.vue'

// font-awesome
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.component('v-icon', Icon)

// bootstrap
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Vue.use(BootstrapVue, IconsPlugin)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
