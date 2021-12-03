<template>
  <div id="app">
    <div>
      <div class="wrap">

        <!-- HEADER -->
        <headerVue></headerVue>

        <!-- MAIN -->
        <mainVue></mainVue>

        <!-- FOOTER -->
        <footerVue></footerVue>

      </div>
    </div>
  </div>
</template>

<script>
import headerVue from '@/components/headerVue.vue'
import mainVue from '@/components/mainVue.vue'
import footerVue from '@/components/footerVue.vue'

// custom css
// import '@/assets/css/reset.css'
import '@/assets/css/ui.css'

export default {
  name: 'App',
  components: {
    headerVue,
    mainVue,
    footerVue,
  }
}
</script>

<style scoped>
</style>
