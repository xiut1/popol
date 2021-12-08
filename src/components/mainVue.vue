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

    <!--  -->

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

export default {
  name: "mainVue",
  components: {
    homeComponent,
    aboutComponent,
    skillsComponent,
    qualificationComponent,
    serviceComponent
  }
}
</script>

<style scoped>
</style>
