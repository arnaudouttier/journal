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
  padding: 38px 30px;
}

.site_info {
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
