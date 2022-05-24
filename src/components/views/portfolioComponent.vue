<template>
  <section id="portfolio" class="portfolio section">
    <h2 class="section_title">Portfolio</h2>
    <span class="section_subtitle">Most recent work</span>

    <div class="portfolio_container container">
      <div>
        <!-- portfolio data -->
<!--        <div class="portfolio_content grid">-->
        <div class="portfolio_content grid" v-for="( index, value ) in portfolio" v-bind:key="index">
<!--          <img class="portfolio_img" :src=" item.imgUrl ">-->

          <div class="portfolio_container container">
            <div class="portfolio_data">
              <h3 class="portfolio_title"> {{ value.portfolio.items.title }} </h3>
              <p class="portfolio_description">
                {{ value.portfolio.items.description }}
              </p>
              <a href="#" class="button button-flex button-small portfolio_button">
                Demo
                <uil-arrow-right class="button_icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  UilArrowRight
} from "@iconscout/vue-unicons";

export default {
  name: "portfolioComponent",
  data () {
    return {
      portfolio: [
        {
          items: {
            imgUrl: '../../assets/images/portfolio1.jpg',
            title: 'Mordern Website',
            description: 'Website adaptable all device, with ui component and animated interaction',
          }
        },
        {
          items: {
            imgUrl: '../../assets/images/portfolio1.jpg',
            title: 'Mordern Website',
            description: 'Website adaptable all device, with ui component and animated interaction',
          }
        }
      ]
    }
  },
  components: {
    UilArrowRight
  }
}
</script>

<style scoped>
</style>
