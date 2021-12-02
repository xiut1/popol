<template>
  <div id="app">
    <div>
      <div class="wrap">
        <div class="header">
          <div class="p-header">
            <div class="p-header-list">
              <ul>
                <li><a href="">ABOUT</a></li>
                <li><a href="">SKILL</a></li>
                <li><a href="">PROJECT</a></li>
                <li><a href="">CAREER</a></li>
                <li><a href="">TIMELINE</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container">
          <scrolltrigger></scrolltrigger>
        </div>
        <div class="footer">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import scrolltrigger from '@/components/scrolltrigger.vue'

// custom css
import '@/assets/css/reset.css'
import '@/assets/css/ui.css'

export default {
  name: 'App',
  components: {
    scrolltrigger
  }
}
</script>

<style scoped>
#app {
  font-family: 'Spoqa Han Sans Neo', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
