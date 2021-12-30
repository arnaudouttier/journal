<template>
  <article class="post" v-for="post in posts" v-bind:key="post.id">
    <div class="post_eader">
      <div class="post_featured_image">
        <a href="">
          <img
            v-if="post.featured_image"
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
        <span class="cat-links">
          <strong>Category</strong>
          <a>{{ post.category }}</a>
          <a>Strategy</a>
        </span>
        <span class="posted-on">Posted on:</span>
        <a>
          <time class="entry-date published">{{ post.date }}</time>
        </a>
      </div>
    </div>
  </article>
</template>

<script>
import postsDataList from '../assets/json/posts.json'

export default {
  name: 'Post',
  data () {
    return {
      posts: postsDataList
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/style.scss';
.post {
  width: 100;
  padding: 3rem 0;
  border-top: 2px solid $primary_color;
}

.post_featured_image {
  margin-bottom: 2.5rem;

  a {
    display: inline-block;
    position: relative;
    overflow: hidden;

    img {
      filter: grayscale(100%);
    }
  }
}
</style>
