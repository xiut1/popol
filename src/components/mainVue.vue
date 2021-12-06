<template>

  <main class="main">

    <!-- home -->
    <section id="home" class="home section">
      <div class="home_container container grid">

        <div class="home_content grid">
          <div class="home_social">
            <a href="" class="home_social-icon">
              <font-awesome-icon icon="user-circle" />
            </a>
            <a href="" class="home_social-icon">
              <font-awesome-icon icon="code-branch" />
            </a>
          </div>

          <div class="home_img">
            <svg class="home_blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <mask id="mask0" mask-type="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
              </mask>
              <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>

<!--                <image class="home_blob-img" x='12' y='18' xlink:href="../assets/images/perfill.png" />-->
              </g>
            </svg>
          </div>

          <div class="home_data">
            <h1 class="home_title">Hi, I am Alexa</h1>
            <h2 class="home_subtitle">FrontEnd developer</h2>
            <p class="home_description">
              blah blah blah blah blah blah blah blah blah blah blah blah blah <br/>
              blah blah blah blah blah blah blah blah blah blah blah blah blah
            </p>
            <a href="" class="button button-flex">
              Contact Me
              <font-awesome-icon icon="envelope" class="button_icon"/>
            </a>
          </div>

          <div class="home_scroll">
            <a href="" class="home_scroll-button button-flex">
              <span class="home_scroll-name">Scroll Down</span>
              <font-awesome-icon icon="chevron-down" class="home_scroll-arrow"/>
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- about -->
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
              Download CV <font-awesome-icon icon="download" class="button_icon"/>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- skills -->

    <!-- qualification -->

    <!-- service -->

    <!-- portfolio -->

    <!--  -->

    <!--  -->

    <!--  -->


  </main>

</template>

<script>
import { faUserCircle, faCodeBranch, faEnvelope, faChevronDown, faDownload } from '@fortawesome/free-solid-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core";

library.add( faUserCircle, faCodeBranch, faEnvelope, faChevronDown, faDownload )

export default {
  name: "mainVue"
}
</script>

<style scoped>

</style>
