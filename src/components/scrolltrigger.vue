<template>
  <div>
    <div style="display: flex; justify-content: center; align-items: center; height: 500px;"></div>
    <transition-group class="container" appear @enter="at">
      <div key="at">
        <section class="box a"></section>
        <section class="box b"></section>
      </div>
    </transition-group>
    <div style="display: flex; justify-content: center; align-items: center; height: 500px;"></div>
    <div style="display: flex; justify-content: center; align-items: center; height: 500px;"></div>
    <!--    <transition-group class="container" appear @enter="ct">-->
    <!--      <section class="box c" key="ct"></section>-->
    <!--    </transition-group>-->
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
      gsap.from(".a", {
        scrollTrigger: {
          trigger: ".a",
          start: "top center",
          // end: "bottom bottom",
          toggleActions: "play pause resume reverse", // play, pause, resume, reset, complete, reverse, none
          markers: true // dev-tool 테스트용 마커 표시
          // pin: true // 화면 고정기능
        },
        // x: 400,
        duration: 2,
        backgroundColor: "#ffffff",
        ease: 'power4.inOut',
        text: { // 텍스트 타이핑 애니메이션
          value: "무야호무야호무야호무야호무야호무야호무야호무야호"
        }
      })

      gsap.to(".b", {
        scrollTrigger: {
          trigger: ".b",
          start: "top center",
          // end: "bottom bottom",
          toggleActions: "play pause resume reverse", // play, pause, resume, reset, complete, reverse, none
          markers: true // dev-tool 테스트용 마커 표시
          // pin: true // 화면 고정기능
        },
        // x: 400,
        duration: 4,
        backgroundColor: "#ffffff",
        ease: 'power2.inOut',
        text: { // 텍스트 타이핑 애니메이션
          value: "무야호무야호무야호무야호무야호무야호무야호무야호"
        }
      })
    },
  }
}
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: #dddddd;
}

.box p {

}
</style>
