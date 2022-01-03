<template>
  <section class="home">
    <SiteIntroduction />
    <Post />
  </section>
</template>

<script>
import Post from '../components/Post.vue'
import SiteIntroduction from '../components/SiteIntroduction.vue'

export default {
  name: 'Home',
  components: {
    Post,
    SiteIntroduction
  }
}
</script>

<style  lang="scss">
</style>
