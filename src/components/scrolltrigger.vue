<template>
  <div>
    <transition-group appear @enter="bt">
      <div class="box a" key="bt">a</div>
    </transition-group>
  </div>
</template>

<!-- https://www.youtube.com/watch?v=X7IBa7vZjmo -->
<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js"

gsap.registerPlugin ( ScrollTrigger );

export default {
  name: "scrolltrigger",
  methods: {
    // at (el) {
    //   el.style.opacity = 0
    //   el.style.transform = 'translateY(60px)'
    // },
    // bt (el) {
    //   // here need gsap
    //   gsap.from (el, {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1
    //   })
    // }
    bt () {
      // here need gsap
      gsap.to (".a", {
        scrollTrigger: {
          trigger: ".a",
          start: "top center",
          markers: true,
          toggleActions: "play none none none"
        },
        x: 400,
        rotate: 360,
        duration: 3
      })
    }
  }
}
</script>

<style scoped>
.box {
  width: 20px;
  height: 20px;
  background-color: #dddddd;
  animation-name: bounceInDown;
}

.box a {

}
</style>
