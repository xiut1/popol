<template>
  <div id="app">
    <div class="wrap">
      <!-- <router-view/>-->
      <div class="header">
        <div class="p-header">
          <div class="p-sidebar">
            <b-button v-b-toggle.sidebar-1>
              <v-icon name="align-justify"/>
            </b-button>
            <b-sidebar id="sidebar-1" title="Sidebar" shadow>
              <div class="px-3 py-2">
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
              </div>
            </b-sidebar>
          </div>
          <div class="p-header-list">
            <ul>
              <li><a href="">ABOUT</a></li>
              <li><a href="">SKILL</a></li>
              <li><a href="">PROJECT</a></li>
              <li><a href="">CAREER</a></li>
              <li><a href="">TIMELINE</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div>
          <section class="about"></section>
          <section class="skill"></section>
          <section class="project"></section>
          <section class="career"></section>
          <section class="timeline"></section>
          <scrolltrigger></scrolltrigger>
          <section class="timeline"></section>
          <section class="timeline"></section>
          <section class="timeline"></section>
<!--          <b-carousel-->
<!--            id="carousel-1"-->
<!--            v-model="slide"-->
<!--            :interval="4000"-->
<!--            controls-->
<!--            indicators-->
<!--            background="#ababab"-->
<!--            img-width="1024"-->
<!--            img-height="480"-->
<!--            style="text-shadow: 1px 1px 2px #333;"-->
<!--            @sliding-start="onSlideStart"-->
<!--            @sliding-end="onSlideEnd"-->
<!--          >-->
<!--            &lt;!&ndash; Text slides with image &ndash;&gt;-->
<!--            <b-carousel-slide-->
<!--              caption="First slide"-->
<!--              text="Nulla vitae elit libero, a pharetra augue mollis interdum."-->
<!--              img-src="https://picsum.photos/1024/480/?image=52"-->
<!--            ></b-carousel-slide>-->

<!--            &lt;!&ndash; Slides with custom text &ndash;&gt;-->
<!--            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">-->
<!--              <h1>Hello world!</h1>-->
<!--            </b-carousel-slide>-->

<!--            &lt;!&ndash; Slides with image only &ndash;&gt;-->
<!--            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>-->

<!--            &lt;!&ndash; Slides with img slot &ndash;&gt;-->
<!--            &lt;!&ndash; Note the classes .d-block and .img-fluid to prevent browser default image alignment &ndash;&gt;-->
<!--            <b-carousel-slide>-->
<!--              <template #img>-->
<!--                <img-->
<!--                  class="d-block img-fluid w-100"-->
<!--                  width="1024"-->
<!--                  height="480"-->
<!--                  src="https://picsum.photos/1024/480/?image=55"-->
<!--                  alt="image slot"-->
<!--                >-->
<!--              </template>-->
<!--            </b-carousel-slide>-->

<!--            &lt;!&ndash; Slide with blank fluid image to maintain slide aspect ratio &ndash;&gt;-->
<!--            <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">-->
<!--              <p>-->
<!--                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt-->
<!--                a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.-->
<!--              </p>-->
<!--            </b-carousel-slide>-->
<!--          </b-carousel>-->

<!--          <b-button v-b-modal.modal-1>Launch demo modal</b-button>-->

<!--          <b-modal id="modal-1" title="BootstrapVue">-->
<!--            <p class="my-4">Hello from modal!</p>-->
<!--          </b-modal>-->

          <!--      <div>-->
          <!--        <b-spinner label="Loading..."></b-spinner>-->
          <!--      </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import scrolltrigger from "@/components/scrolltrigger";

export default {
  name: 'App',
  data () {
    return {
      slide: 0
    }
  },
  components: {
    scrolltrigger
  },
  methods: {
  }
}
</script>

<style scoped>
#app {
  font-family: 'Spoqa Han Sans Neo', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
