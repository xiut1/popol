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

export default {
  name: "mainVue",
  components: {
    homeComponent,
    aboutComponent,
    skillsComponent,
    qualificationComponent
  }
}
</script>

<style scoped>
</style>
