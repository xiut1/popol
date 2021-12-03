<template>
  <div>
    <!-- about -->
    <section class="section-wrap at">
      <div class="section-content">
        <div class="inner-text">
          <transition-group appear @enter="at">
            <h1 class="a" key="at">hello</h1>
            <h2 class="b" key="at">무야호 무야호 무야호</h2>
          </transition-group>
        </div>
      </div>
    </section>
    <!-- skills -->
    <section class="section-wrap bt">
      <div class="section-content">
        <div class="inner-text">
          <transition-group appear @enter="bt">
            <h2 class="c" key="bt">blah blah blah blah blah</h2>
            <h3 class="d" key="bt">
              blah blah blah blah blah blah blah blah blah blah blah blah <br>
              blah blah blah blah blah blah blah blah blah blah blah blah
            </h3>
            <!-- swiper area -->
          </transition-group>
        </div>
      </div>
    </section>
    <!-- banner -->
    <section class="section-wrap">
    </section>
    <section class="section-wrap at">
      <div class="section-content">
        <div class="inner-text">
          <transition-group appear @enter="at">
          </transition-group>
        </div>
      </div>
    </section>
  </div>
</template>

<!-- https://www.youtube.com/watch?v=X7IBa7vZjmo -->
<script>
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js"
import TextPlugin from "gsap/TextPlugin.js"

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default {
  name: "scrolltrigger",
  methods: {
    at() {
      gsap.to(".a", {
        scrollTrigger: {
          trigger: ".at",
          start: "top center",
          // end: "bottom bottom",
          toggleActions: "play none none none", // play, pause, resume, reset, complete, reverse, none
          markers: true // dev-tool 테스트용 마커 표시
          // pin: true // 화면 고정기능
        },
        y: 0,
        duration: 2,
        opacity: 1,
        ease: 'power4.inOut',
      })

      gsap.to(".b", {
        scrollTrigger: {
          trigger: ".at",
          start: "top center",
          // end: "bottom bottom",
          toggleActions: "play none none none", // play, pause, resume, reset, complete, reverse, none
          markers: true // dev-tool 테스트용 마커 표시
          // pin: true // 화면 고정기능
        },
        y: 0,
        delay: 1,
        duration: 2,
        opacity: 1,
        ease: 'power4.inOut',
      })
    },

    bt() {
      gsap.to(".c", {
        scrollTrigger: {
          trigger: ".bt",
          start: "top center",
          // end: "bottom bottom",
          toggleActions: "play none none none", // play, pause, resume, reset, complete, reverse, none
          markers: true // dev-tool 테스트용 마커 표시
          // pin: true // 화면 고정기능
        },
        y: 0,
        duration: 2,
        opacity: 1,
        ease: 'power4.inOut',
      })

      gsap.to(".d", {
        scrollTrigger: {
          trigger: ".bt",
          start: "top center",
          // end: "bottom bottom",
          toggleActions: "play none none none", // play, pause, resume, reset, complete, reverse, none
          markers: true // dev-tool 테스트용 마커 표시
          // pin: true // 화면 고정기능
        },
        y: 0,
        delay: 1,
        duration: 2,
        opacity: 1,
        ease: 'power4.inOut',
      })
    },
  }
}
</script>

<style scoped>
</style>
