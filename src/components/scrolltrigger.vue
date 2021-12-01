<template>
  <div>
    <div style="display: flex; justify-content: center; align-items: center; height: 500px; background-color: #dddddd;">
      <p>dummy</p>
    </div>
    <transition-group class="container" appear @enter="bt">
      <div class="box a" key="bt"></div>
    </transition-group>
    <div style="display: flex; justify-content: center; align-items: center; height: 500px; background-color: #dddddd;">
      <p>dummy</p>
    </div>
    <div style="display: flex; justify-content: center; align-items: center; height: 500px; background-color: #dddddd;">
      <p>dummy</p>
    </div>
    <div style="display: flex; justify-content: center; align-items: center; height: 500px; background-color: #dddddd;">
      <p>dummy</p>
    </div>
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
    bt() {
      // here need gsap
      gsap.to(".a", {
        scrollTrigger: {
          trigger: ".a",
          start: "top center",
          // end: "bottom bottom",
          toggleActions: "play pause resume reverse", // play, pause, resume, reset, complete, reverse, none
          markers: true // dev-tool 테스트용 마커 표시
          // pin: true // 화면 고정기능
        },
        x: 400,
        duration: 2, // 작업이 완료 되기까지의 걸리는 시간
        backgroundColor: "#ffffff",
        ease: 'power4.inOut',
        text: { // 텍스트 타이핑 애니메이션
          value: "무야호무야호무야호무야호무야호무야호무야호무야호"
        }
      })
    }
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
