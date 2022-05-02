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

        <span class="button button-flex button-small button-link services_button" @click=" services.modal = !services.modal " >
          View More
          <uil-arrow-right class="button_icon" />
        </span>

<!--        <div class="services_modal">-->
<!--          <div class="services_modal-content" :class=" { 'active' : services.modal } ">-->
<!--            <h4 class="services_modal-title"> {{ value.content.subtitle }} </h4>-->
<!--            <uil-times class="services_modal-close" @click=" services.modal = !services.modal " />-->

<!--            <ul class="services_modal-services grid">-->
<!--              <li class="services_modal-service" v-for="( index, value ) in services" v-bind:key="index">-->
<!--&lt;!&ndash;              <li class="services_modal-service">&ndash;&gt;-->
<!--                <uil-check-circle class="services_modal-icon"/>-->
<!--                <p> {{ value.message }} </p>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
  </section>
</template>

<script>
import {
  UilWebGrid,
  UilArrowRight,
  // UilTimes,
  // UilCheckCircle
} from "@iconscout/vue-unicons";

export default {
  name: "serviceComponent",
  data() {
    return {
      services: [
        {
          content: {
            modal: true,
            title: 'title 1',
            subtitle: 'subtitle 1',
            messages: {
              message: 'boo'
            }
          }
        },
        {
          content: {
            modal: false,
            title: 'title 2',
            subtitle: 'subtitle 2',
            messages: {
              message: 'blah blah blah blah blah blah blah blah '
            }
          }
        }
      ]
    }
  },
  components: {
    UilWebGrid,
    UilArrowRight
    // UilTimes,
    // UilCheckCircle
  }
}
</script>

<style scoped>

</style>
