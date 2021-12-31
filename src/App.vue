<template>
  <div class="site">
    <Header />
    <main class="site-content">
      <router-view />
    </main>
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
@import './assets/scss/style.scss';

.site-content {
  padding: 5rem 3rem;
}
</style>
