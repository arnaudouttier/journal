<template>
  <main class="site-content home">
    <Post />
  </main>
</template>

<script>
import Post from '../components/Post.vue'

export default {
  name: 'Home',
  components: {
    Post
  }
}
</script>

<style scoped lang="scss">
.site-content {
  padding: 5rem 3rem;
}
</style>
