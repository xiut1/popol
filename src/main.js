import Vue from 'vue'
import App from './App.vue'

//fort awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUser, faFileAlt, faBriefcase, faImage, faEnvelope, faTimes, faClone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faHome, faUser, faFileAlt, faBriefcase, faImage, faEnvelope, faTimes, faClone )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
