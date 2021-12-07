<template>
  <header id="header" class="header">
    <nav class="nav container">
      <a href="#" class="nav_logo">LHJ</a>
      <div id="nav-menu" class="nav_menu" :class="{ 'show-menu' : showNav }">
        <ul class="nav_list grid">
          <li class="nav_item">
            <a href="#home" class="nav_link nav_icon">
              <uil-estate class="" /> Home
            </a>
          </li>
          <li class="nav_item">
            <a href="#about" class="nav_link nav_icon">
              <uil-user class="" /> About
            </a>
          </li>
          <li class="nav_item">
            <a href="#skills" class="nav_link nav_icon">
              <uil-file-alt class="" /> Skills
            </a>
          </li>
          <li class="nav_item">
            <a href="#service" class="nav_link nav_icon">
              <uil-suitcase-alt class="" /> Services
            </a>
          </li>
          <li class="nav_item">
            <a href="#portfolio" class="nav_link nav_icon">
              <uil-scenery class="" /> Portfolio
            </a>
          </li>
          <li class="nav_item">
            <a href="#" class="nav_link nav_icon">
              <uil-message class="" /> Contactme
            </a>
          </li>
        </ul>
        <div @click="showNav = !showNav">
          <uil-times id="nav-close" class="nav_close" />
<!--          <uil-times id="nav-close" class="nav_close" @click="showNav = !showNav" />-->
        </div>
      </div>

      <div class="nav_btns">
        <div id="nav-toggle" class="nav_toggle" @click="showNav = !showNav">
          <uil-apps class="" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilSuitcaseAlt,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps
} from '@iconscout/vue-unicons'

export default {
  name: "headerVue",
  data () {
    return {
      showNav: false
    }
  },
  methods: {
  },
  components: {
    UilEstate,
    UilUser,
    UilFileAlt,
    UilSuitcaseAlt,
    UilScenery,
    UilMessage,
    UilTimes,
    UilApps
  }
}
</script>

<style scoped>
</style>
