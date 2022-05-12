import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

/* qualification */
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tab.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

/* service */
const modalViews = document.querySelectorAll('.services_modal'),
    modalBtns = document.querySelectorAll('.services_button'),
    modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtns, i) => {
    modalBtns.addEventListener('click', () => {
         modal(i);
    })
})

modalCloses.forEach((modalCloses) => {
    modalCloses.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
