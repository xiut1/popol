<template>
  <section id="home" class="home section">
    <div class="home_container container grid">

      <div class="home_content grid">
        <div class="home_social">
          <a href="" class="home_social-icon">
            <uil-github class="" />
          </a>
          <a href="" class="home_social-icon">
            <uil-instagram-alt class="" />
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

              <image class="home_blob-img" x='12' y='18' xlink:href="https://developer.mozilla.org/" />
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
            <uil-envelope-alt class="button_icon"/>
          </a>
        </div>

        <div class="home_scroll">
          <a href="" class="home_scroll-button button-flex">
            <span class="home_scroll-name">Scroll Down</span>
            <uil-mouse-alt class="home_scroll-arrow"/>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import {
  UilGithub,
  UilInstagramAlt,
  UilMouseAlt,
  UilEnvelopeAlt,
} from '@iconscout/vue-unicons'

export default {
  name: "homeComponent",
  components: {
    UilGithub,
    UilInstagramAlt,
    UilMouseAlt,
    UilEnvelopeAlt,
  }
}
</script>

<style scoped>
</style>
