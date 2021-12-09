<template>
  <section class="services section" id="services">
    <h2 class="section_title">Services</h2>
    <span class="section_subtitle">What i offer</span>

    <div class="services_container container grid">
      <!-- services 1 -->
      <div class="services_content" v-for="( value, index ) in services" :key="index">
        <div>
          <uil-web-grid class="services_icon"/>
          <h3 class="services_title"> {{ value.content.title }} </h3>
        </div>

        <span class="button button-flex button-samll button-link services_button">
          View More
          <uil-arrow-right class="button_icon"/>
        </span>

        <div class="services_modal">
          <div class="services_modal-content">
            <h4 class="services_modal-title"> {{ value.content.subtitle }} </h4>
            <uil-times class="services_modal-close"/>

            <ul class="services_modal-services grid">
<!--              <li class="services_modal-service" v-for="( index ) in services.content.info" :key="index">-->
              <li class="services_modal-service">
                <uil-check-circle class="services_modal-icon"/>
                <p> {{ index.message }} </p>
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
            title: 'Ui / Ux Designer 1',
            subtitle: 'Ui / Ux 1',
            info: [
              { message: 'foo' },
              { message: 'boo' }
            ]
          }
        },
        {
          content: {
            title: 'Ui / Ux Designer 2',
            subtitle: 'Ui / Ux 2',
            info: [
              { message: 'blah blah blah blah ' },
              { message: 'blah blah blah blah blah blah blah blah ' }
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
  },
  methods: {}
}
</script>

<style scoped>

</style>
