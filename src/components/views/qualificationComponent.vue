<template>
  <section class="qualification section">
    <h2 class="section_title">Qualification</h2>
    <span class="section_subtitle">My personal journey</span>

    <div class="qualification_container container">
      <div class="qualification_tabs">
        <div class="qualification_button button-flex qualification_active" data-target="#edcation">
          <uil-graduation-cap class="qualification_icon" />
          Education
        </div>
        <div class="qualification_button button-flex" data-target="#work">
          <uil-briefcase-alt class="qualification_icon" />
          Work
        </div>
      </div>

      <div class="qualification_sections">
        <!-- qualification content 1 -->
        <div class="qualification_content qualification_active" data-content id="edcation">
          <!-- qualification data 1 -->
          <div class="qualification_data" v-for="( value, index ) in qualification.education" v-bind:key="index">
            <!-- even -->
            <div class="qualification_data-content" v-if="( index % 2 === 0 )">
              <div>
                <h3 class="qualification_title"> {{ value.title }} </h3>
                <span class="qualification_subtitle"> {{ value.subtitle }} </span>
                <div class="qualification_calendar">
                  <uil-calendar-alt />
                  <span> {{ value.date }} </span>
                </div>
              </div>

              <div>
                <span class="qualification_rounder"></span>
                <span class="qualification_line"></span>
              </div>
            </div>

            <!-- odd -->
            <div class="qualification_data-content" v-else>
              <div></div>

              <div>
                <span class="qualification_rounder"></span>
                <span class="qualification_line"></span>
              </div>

              <div>
                <h3 class="qualification_title"> {{ value.title }} </h3>
                <span class="qualification_subtitle"> {{ value.subtitle }} </span>
                <div class="qualification_calendar">
                  <uil-calendar-alt />
                  <span> {{ value.date }} </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--  -->
        <div class="qualification_content" data-content id="work">
          <!-- qualification data 2 -->
          <div class="">
            <div class="qualification_data" v-for="( value, index ) in qualification.work" v-bind:key="index">

              <!-- even -->
              <div class="qualification_data-content" v-if="( index % 2 === 0 )">
                <div>
                  <h3 class="qualification_title"> {{ value.title }} </h3>
                  <span class="qualification_subtitle"> {{ value.subtitle }} </span>
                  <div class="qualification_calendar">
                    <uil-calendar-alt />
                    <span> {{ value.date }} </span>
                  </div>
                </div>

                <div>
                  <span class="qualification_rounder"></span>
                  <span class="qualification_line"></span>
                </div>
              </div>

              <!-- odd -->
              <div class="qualification_data-content" v-else>
                <div></div>

                <div>
                  <span class="qualification_rounder"></span>
                  <span class="qualification_line"></span>
                </div>

                <div>
                  <h3 class="qualification_title"> {{ value.title }} </h3>
                  <span class="qualification_subtitle"> {{ value.subtitle }} </span>
                  <div class="qualification_calendar">
                    <uil-calendar-alt />
                    <span> {{ value.date }} </span>
                  </div>
                </div>
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
  UilGraduationCap,
  UilBriefcaseAlt,
  UilCalendarAlt
} from "@iconscout/vue-unicons";

export default {
  name: "qualificationComponent",
  data () {
    return {
      qualification: {
        education: [
          {
            title: 'Web Design Basic',
            subtitle: 'Cram School',
            date: '2017 ~ 2018'
          },
          {
            title: 'College Student',
            subtitle: 'Degu - University',
            date: '2011 ~ 2017'
          }
        ],
        work: [
          {
            title: 'Frontend Developer',
            subtitle: 'Emotion Global',
            date: '2020 ~ 2021'
          },
          {
            title: 'Publisher',
            subtitle: 'Emotion Global',
            date: '2019 ~ 2020'
          },
          {
            title: 'Publisher',
            subtitle: 'FROBO inc',
            date: '2018 - 2019'
          }
        ]
      }
    }
  },
  components: {
    UilGraduationCap,
    UilBriefcaseAlt,
    UilCalendarAlt
  }
}
</script>

<style scoped>
</style>
