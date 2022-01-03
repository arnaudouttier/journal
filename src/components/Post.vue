<template>
  <article class="post" v-for="post in posts" v-bind:key="post.id">
    <div class="post_eader">
      <div class="post_featured_image" v-if="post.featured_image">
        <router-link :to="{ name: 'Single', params: { id: post.id } }">
          <img
            :src="require('../assets/images/' + post.featured_image)"
            :alt="post.altfeatured_image"
          />
        </router-link>
      </div>
    </div>
    <div class="post_content">
      <div class="post_title">
        <h2>
          <router-link :to="{ name: 'Single', params: { id: post.id } }">
            {{ post.title }}
          </router-link>
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

<style  lang="scss">
@import '../assets/scss/style.scss';
.post {
  width: 100;
  padding: 3rem 0;
  border-top: 2px solid $primary_color;

  &:last-child {
    border-bottom: 2px solid $primary_color;
  }
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

.post_title {
  h2 {
    font-size: calc(30.2px + 1.55vw);
    line-height: 4rem;
    font-weight: 400;
    letter-spacing: -0.2rem;
    margin-bottom: 4rem;
  }
}

.post_meta {
  span {
    display: inline-block;

    &:nth-child(1) {
      margin-right: 4rem;
    }
  }

  .cat_links {
    font-size: 1.3rem;

    strong {
      font-family: $primary_font_bold;
      text-transform: uppercase;
      font-weight: 700;
      margin-right: 0.6rem;
    }
  }

  .posted_on {
    margin-right: 0;
    font-weight: 400;
    font-size: 1.3rem;
    letter-spacing: 0.05rem;
    line-height: 2.5rem;
    overflow-wrap: break-word;
    text-transform: uppercase;
    white-space: nowrap;
  }
}
</style>
