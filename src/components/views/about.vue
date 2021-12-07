<template>
  <section id="about" class="about section">
    <h2 class="section_title">About Me</h2>
    <span class="section_subtitle">My introduction</span>

    <div class="about_container container grid">
      <img class="about_img" src="../assets/images/perfil.png" alt="">

      <div class="about_data">
        <p class="about_descrption">
          blah blah blah blah blah blah blah blah blah blah blah blah blah <br/>
          blah blah blah blah blah blah blah blah blah blah blah blah blah
        </p>
        <div class="about_info">
          <div>
            <span class="about_info-title">08+</span>
            <span class="about_info-name">
                years <br/> experience
              </span>
          </div>
          <div>
            <span class="about_info-title">20+</span>
            <span class="about_info-name">
                completed <br/> project
              </span>
          </div>
          <div>
            <span class="about_info-title">05+</span>
            <span class="about_info-name">
                companies <br/> worked
              </span>
          </div>
        </div>

        <div class="about_buttons">
          <a href="" download="" class="button button-flex">
            Download CV <uil-import class="button_icon"/>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  UilImport
} from "@iconscout/vue-unicons";

export default {
  name: "about",
  components: {
    UilImport,
  }
}
</script>

<style scoped>

</style>
