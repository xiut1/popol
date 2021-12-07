import Vue from 'vue'
import App from './App.vue'

//fort awesome
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { } from '@fortawesome/free-solid-svg-icons'
// import { } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add( )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
