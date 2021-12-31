<template>
  <article class="post" v-for="post in filterSinglePost" v-bind:key="post.id">
    <div class="post_eader">
      <div class="post_featured_image" v-if="post.featured_image">
        <a href="">
          <img
            :src="require('../assets/images/' + post.featured_image)"
            :alt="post.altfeatured_image"
          />
        </a>
      </div>
    </div>
    <div class="post_content">
      <div class="post_title">
        <h2>
          <a href="">
            {{ post.title }}
          </a>
        </h2>
      </div>
      <div class="post_meta">
        <span class="cat_links">
          <strong>Category</strong>
          <a>{{ post.category }}</a>
        </span>
        <span class="posted_on">{{ post.date }}</span>
      </div>
    </div>
  </article>
</template>

<script>
import { useRoute } from 'vue-router'
import postsDataList from '../assets/json/posts.json'

export default {
  name: 'SinglePost',
  data () {
    return {
      posts: postsDataList,
      currentPost: { Number }
    }
  },
  mounted () {
    const route = useRoute()
    this.currentPost = parseInt(route.params.id)
    console.log(typeof this.currentPost)
  },
  computed: {
    filterSinglePost () {
      // eslint-disable-next-line eqeqeq
      return this.posts.filter((post) => post.id == this.currentPost)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/style.scss';
</style>
