<template>
  <section class="single">
    <SinglePost />
  </section>
</template>

<script>
import SinglePost from '../components/SinglePost.vue'

export default {
  name: 'Single',
  components: {
    SinglePost
  }
}
</script>

<style  lang="scss">
.single > * {
    margin : auto;
    max-width: 1200px;
    text-align: left;
}
</style>
