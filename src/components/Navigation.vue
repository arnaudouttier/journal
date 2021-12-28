<template>
  <nav class="site-navigation" :class="{ activeNavig: enableNav }">
    <router-link to="/">Accueil</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    enableNav: Boolean
  },
  components: {}
}
</script>

<style scoped lang="scss">
.site-navigation {
  display: none;
  &.activeNavig {
    display: block;
  }
}
</style>
