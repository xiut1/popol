<template>
  <div>
    <div style="display: flex; justify-content: center; align-items: center; height: 500px; background-color: #dddddd;">
      <p>dummy</p>
    </div>
    <transition-group class="container" appear @enter="bt">
      <div class="box a" key="bt">
        <p></p>
      </div>
    </transition-group>
    <div style="display: flex; justify-content: center; align-items: center; height: 500px; background-color: #dddddd;">
      <p>dummy</p>
    </div>
  </div>
</template>

<!-- https://www.youtube.com/watch?v=X7IBa7vZjmo -->
<script>
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js"
import TextPlugin from "gsap/TextPlugin"

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
          toggleActions: "play pause resume reverse", // play, pause, resume, reset, complete, reverse, none
          markers: true, // dev-tool 테스트용 마커 표시
          pin: true // 화면 고정기능
        },
        x: 400,
        duration: 2, // 작업이 완료 되기까지의 걸리는 시간
        backgroundColor: "#ffffff",
        text: { // 텍스트 타이핑 애니메이션
          value: "이봐 김씨 까불지말고 이거나 날라"
          // newClass: "class2",
          // delimiter: ""
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
