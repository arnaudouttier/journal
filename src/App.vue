<template>
  <Sidebar />
  <div class="site">
    <Header />
    <main class="site-content">
      <router-view :key="$route.path" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Header from './commons/Header.vue'
import Footer from './commons/Footer.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
    Footer
  }
}
</script>

<style lang="scss">
.site {
  &::after {
    content: '';
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 0;
    visibility: hidden;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    transition-timing-function: ease;
    z-index: 2;
  }
}

.site-content {
  padding: 5rem 3rem;
  margin: auto;
  max-width: 1920px;
  overflow: hidden;
}

@media (min-width: 767px) {
  .site-content {
    padding: 5rem 5rem;
  }
}

@media (min-width: 991px) {
  .site-content {
    padding: 8rem 5rem 12rem 5rem;
  }
}

@media (min-width: 1440px) {
  .site-content {
    padding: 8rem 8rem 12rem 8rem;
  }
}
</style>
