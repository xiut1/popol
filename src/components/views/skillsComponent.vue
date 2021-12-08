<template>
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
            <div class="skills_data" v-for="( value, name, index ) in skills.front.info" v-bind:key="index">
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
            <div class="skills_data" v-for="( value, name, index ) in skills.lib.info" v-bind:key="index">
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
            <div class="skills_data" v-for="( value, name, index ) in skills.others.info" v-bind:key="index">
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
</template>

<script>
import {
  UilBracketsCurly,
  UilAngleDown,
  UilBookOpen,
  UilSwatchbook
} from '@iconscout/vue-unicons'

export default {
  name: "skillsComponent",
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
    UilBracketsCurly,
    UilAngleDown,
    UilBookOpen,
    UilSwatchbook
  }
}
</script>

<style scoped>
</style>
