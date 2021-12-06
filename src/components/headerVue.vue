<template>
  <header id="header" class="header">
    <nav class="nav container">
      <a href="#" class="nav_logo">LHJ</a>
      <div id="nav-menu" class="nav_menu" :class="{ 'show-menu' : showNav }">
        <ul class="nav_list grid">
          <li class="nav_item">
            <a href="#" class="nav_link nav_icon">
              <font-awesome-icon icon="home" /> Home
            </a>
          </li>
          <li class="nav_item">
            <a href="#" class="nav_link nav_icon">
              <font-awesome-icon icon="user" /> About
            </a>
          </li>
          <li class="nav_item">
            <a href="#" class="nav_link nav_icon">
              <font-awesome-icon icon="file-alt" /> Skills
            </a>
          </li>
          <li class="nav_item">
            <a href="#" class="nav_link nav_icon">
              <font-awesome-icon icon="briefcase" /> Services
            </a>
          </li>
          <li class="nav_item">
            <a href="#" class="nav_link nav_icon">
              <font-awesome-icon icon="image" /> Portfolid
            </a>
          </li>
          <li class="nav_item">
            <a href="#" class="nav_link nav_icon">
              <font-awesome-icon icon="envelope" /> Contactme
            </a>
          </li>
        </ul>
        <font-awesome-icon icon="times" id="nav-close" class="nav_close" @click="showNav = !showNav" />
      </div>

      <div class="nav_btns">
        <div id="nav-toggle" class="nav_toggle" @click="showNav = !showNav">
          <font-awesome-icon icon="clone" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "headerVue",
  data () {
    return {
      showNav: false
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
