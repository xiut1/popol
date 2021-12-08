<template>
  <section class="services section" id="services">
    <h2 class="section_title">Services</h2>
    <span class="section_subtitle">What i offer</span>

    <div class="services_container container grid">
      <!-- services 1 -->
      <div class="services_content">
        <div>
          <uil-web-grid class="services_icon" />
          <h3 class="services_title">Ui / Ux <br> Designer</h3>
        </div>

        <span class="button button-flex button-samll button-link services_button">
          View More
          <uil-arrow-right class="button_icon" />
        </span>

        <div class="services_modal">
          <div class="services_modal-content">
            <h4 class="services_modal-title">Ui / Ux <br> Designer</h4>
            <uil-times class="services_modal-close" />

            <ul class="services_modal-services grid">
              <li class="services_modal-service">
                <uil-check-circle class="services_modal-icon" />
                <p>I develop the user interface.</p>
              </li>
              <li class="services_modal-service">
                <uil-check-circle class="services_modal-icon" />
                <p>I develop the user dickpunch.</p>
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
