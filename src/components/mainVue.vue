<template>

  <main class="main">

    <!-- home -->
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
              Download CV <uil-import class="button_icon"/>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- skills -->
    <section id="skills" class="skills section">
      <h2 class="section_title">Skills</h2>
      <span class="section_subtitle">My technical level</span>

      <div class="skills_container container grid">
        <div>
          <!-- skill 1 -->
          <div class="skills_content" :class="{ 'skills_open' : skills.front.acd }">
            <div class="skills_header" @click="skills.front.acd = !skills.front.acd">
              <uil-brackets-curly class="skills_icon" />

              <div class="skills_title">
                <h1>
                  Frontend skills
                </h1>
                <span class="skills_subtitle">
                  More than 2 years
                </span>
              </div>

              <uil-angle-down class="skills_arrow" />
            </div>

            <div class="skills_list grid">
              <!-- frontend-skills -->
              <div class="skills_data" v-for="(value, name,  index) in skills.front.info" v-bind:key="index">
                <div class="skills_titles">
                  <h3 class="skills_name"> {{ name }} </h3>
                  <span class="skikks_number"> {{ value.score }}% </span>
                </div>
                <div class="skills_bar">
                  <span class="skills_percentage" v-bind:style=" { width: value.percentage } "></span>
                </div>
              </div>
            </div>
          </div>

          <!-- skill 2 -->
          <div class="skills_content" :class="{ 'skills_open' : skills.lib.acd }">
            <div class="skills_header" @click="skills.lib.acd = !skills.lib.acd">
              <uil-book-open class="skills_icon" />

              <div class="skills_title">
                <h1>
                  Frontend lib skills
                </h1>
                <span class="skills_subtitle">
                  More than 2 years
                </span>
              </div>

              <uil-angle-down class="skills_arrow" />
            </div>

            <div class="skills_list grid">
              <!-- frontend-skills -->
              <div class="skills_data" v-for="(value, name,  index) in skills.lib.info" v-bind:key="index">
                <div class="skills_titles">
                  <h3 class="skills_name"> {{ name }} </h3>
                  <span class="skikks_number"> {{ value.score }}% </span>
                </div>
                <div class="skills_bar">
                  <span class="skills_percentage" v-bind:style=" { width: value.percentage } "></span>
                </div>
              </div>
            </div>
          </div>

          <!-- skill 3 -->
          <div class="skills_content" :class="{ 'skills_open' : skills.others.acd }">
            <div class="skills_header" @click="skills.others.acd = !skills.others.acd">
              <uil-swatchbook class="skills_icon" />

              <div class="skills_title">
                <h1>
                  Other
                </h1>
                <span class="skills_subtitle">
                  More than 2 years
                </span>
              </div>

              <uil-angle-down class="skills_arrow" />
            </div>

            <div class="skills_list grid">
              <!-- frontend-skills -->
              <div class="skills_data" v-for="(value, name,  index) in skills.others.info" v-bind:key="index">
                <div class="skills_titles">
                  <h3 class="skills_name"> {{ name }} </h3>
                  <span class="skikks_number"> {{ value.score }}% </span>
                </div>
                <div class="skills_bar">
                  <span class="skills_percentage" v-bind:style=" { width: value.percentage } "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- qualification -->

    <!-- service -->

    <!-- portfolio -->

    <!--  -->

    <!--  -->

    <!--  -->


  </main>

</template>

<script>
import {
  UilGithub,
  UilInstagramAlt,
  UilMouseAlt,
  UilEnvelopeAlt,
  UilImport,
  UilBracketsCurly,
  UilAngleDown,
  UilBookOpen,
  UilSwatchbook
} from '@iconscout/vue-unicons'

export default {
  name: "mainVue",
  data () {
    return {
      skills: {
        front: {
          acd: true,
          info: {
            html: {
              score: 90,
              percentage: '90%'
            },
            css: {
              score: 85,
              percentage: '85%'
            },
            js: {
              score: 75,
              percentage: '75%'
            }
          }
        },
        lib: {
          acd: false,
          info: {
            vue: {
              score: 50,
              percentage: '50%'
            },
            react: {
              score: 30,
              percentage: '30%'
            },
            sass: {
              score: 75,
              percentage: '75%'
            }
          }
        },
        others: {
          acd: false,
          info: {
            photoshop: {
              score: 65,
              percentage: '50%'
            },
            zeplin: {
              score: 50,
              percentage: '50%'
            }
          }
        }
      }
    }
  },
  components: {
    UilGithub,
    UilInstagramAlt,
    UilMouseAlt,
    UilEnvelopeAlt,
    UilImport,
    UilBracketsCurly,
    UilAngleDown,
    UilBookOpen,
    UilSwatchbook
  }
}
</script>

<style scoped>
</style>
