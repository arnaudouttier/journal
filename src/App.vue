<template>
  <div class="site">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './commons/Header.vue'
import Footer from './commons/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
