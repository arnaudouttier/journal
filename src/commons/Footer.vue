<template>
  <footer class="site-footer">
    <div class="site_info">
      <p>
        © Arnaud Outtier 35 rue d'Artois 59000 Lille
        Arnaud.outtier@protonmail.com
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {}
}
</script>

<style scoped lang="scss">
.site-footer {
  padding: 3.8rem 3rem;
}

.site_info {
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
}

@media (min-width: 767px) {
  .site-footer {
    padding: 3.8rem 5rem;
  }
}

@media (min-width: 1440px) {
  .site-footer {
    padding: 3.8rem 8rem;
  }
}
</style>
