<template>
  <main class="main">

    <!-- home -->
    <homeComponent></homeComponent>

    <!-- about -->
    <aboutComponent></aboutComponent>

    <!-- skills -->
    <skillsComponent></skillsComponent>

    <!-- qualification -->
    <qualificationComponent></qualificationComponent>

    <!-- service -->
    <serviceComponent></serviceComponent>

    <!-- portfolio -->
    <portfolioComponent></portfolioComponent>

    <!--  -->
<!--    <projectMindComponent></projectMindComponent>-->

    <!--  -->

    <!--  -->


  </main>
</template>

<script>
import homeComponent from '@/components/views/homeComponent'
import aboutComponent from '@/components/views/aboutComponent'
import skillsComponent from '@/components/views/skillsComponent'
import qualificationComponent from '@/components/views/qualificationComponent'
import serviceComponent from '@/components/views/serviceComponent'
import portfolioComponent from '@/components/views/portfolioComponent'
// import projectMindComponent from '@/components/views/projectMind'

export default {
  name: "mainVue",
  components: {
    homeComponent,
    aboutComponent,
    skillsComponent,
    qualificationComponent,
    serviceComponent,
    portfolioComponent,
    // projectMindComponent
  }
}
</script>

<style scoped>
</style>
