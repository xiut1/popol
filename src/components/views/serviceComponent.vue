<template>
  <section class="services section" id="services">
    <h2 class="section_title">Services</h2>
    <span class="section_subtitle">What i offer</span>

    <div class="services_container container grid">
      <!-- services 1 -->
      <div class="services_content" v-for="( value, index ) in services" v-bind:key="index">
        <div>
          <uil-web-grid class="services_icon"/>
          <h3 class="services_title"> {{ value.content.title }} </h3>
        </div>

        <span class="button button-flex button-small button-link services_button">
          View More
          <uil-arrow-right class="button_icon" />
        </span>

        <div class="services_modal">
          <div class="services_modal-content">
            <h4 class="services_modal-title"> {{ value.content.subtitle }} </h4>
            <uil-times class="services_modal-close" />

            <ul class="services_modal-services grid">
              <li class="services_modal-service" v-for="( index ) in value.content.sLists" v-bind:key="index">
                <uil-check-circle class="services_modal-icon"/>
                <p> {{ index.sList }} </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  UilWebGrid,
  UilArrowRight,
  UilTimes,
  UilCheckCircle
} from "@iconscout/vue-unicons";

export default {
  name: "serviceComponent",
  data() {
    return {
      services: [
        {
          content: {
            title: 'title 1',
            subtitle: 'subtitle 1',
            sLists: [
              {
                sList: 'blahblahblahblahblahblahblahblah',
              },
              {
                sList: 'blahblahblahblahblahblahblahblahblahblah22',
              }
            ]
          }
        },
        {
          content: {
            title: 'title 2',
            subtitle: 'subtitle 2',
            sLists: [
              {
                sList: 'blah',
              }
            ]
          }
        }
      ]
    }
  },
  components: {
    UilWebGrid,
    UilArrowRight,
    UilTimes,
    UilCheckCircle
  }
}
</script>

<style scoped>

</style>
