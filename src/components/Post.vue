<template>
  <article class="post" v-for="post in posts" v-bind:key="post.id">
    <div class="post_header">
      <div class="post_featured_image" v-if="post.featured_image">
        <router-link :to="{ name: 'Post', params: { id: post.id } }">
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
          <router-link :to="{ name: 'Post', params: { id: post.id } }">
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
export default {
  name: 'Post',
  data () {
    return {
      posts: this.$store.state.posts
    }
  }
}
</script>

<style  lang="scss">
@import '../assets/scss/style.scss';
.post {
  width: 100%;
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
      width: 100%;
      filter: grayscale(100%);
    }
  }
}

.post_title {
  position: relative;
  h2 {
    font-size: calc(30.2px + 1.55vw);
    line-height: 1.1em;
    font-weight: 400;
    letter-spacing: -0.2rem;
    margin-bottom: 4rem;
    max-width: 820px;
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

@media (min-width: 768px) {
  .post {
    display: flex;

    .post_header {
      max-width: 22%;
    }

    .post_content {
      flex: 1;
    }
  }
}

@media (min-width: 1024px) {
  .post {
    padding: 5.5rem 0;

    .post_title {
      a {
        &:hover {
          text-decoration: underline;

          &::after {
            opacity: 1;
            visibility: visible;
            transform: translateX(0px);
          }
        }
        &::after {
          content: url('../assets/images/right-arrow.png');
          position: absolute;
          display: inline-block;
          font-size: 1.5em;
          opacity: 0;
          visibility: hidden;
          position: absolute;
          top: 0px;
          right: 0;
          -webkit-transition: 0.2s;
          -moz-transition: 0.2s;
          -ms-transition: 0.2s;
          -o-transition: 0.2s;
          transition: 0.2s;
          transform: translateX(-20px);
        }
      }
    }
  }
}
</style>
