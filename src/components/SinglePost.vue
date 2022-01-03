<template>
  <article class="post" v-for="post in filterSinglePost" v-bind:key="post.id">
    <div class="post_eader">
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
    <div class="post_content">
      <div class="post_content_intro">
        <p>
          rowth is what every founder is constantly searching for; if you are
          able to grow, somehow all the other aspects of running a startup fall
          into place. Without growth, a tech startup is destined for doom.
        </p>
      </div>
      <div class="post_content_intro">
        <p>
          If you are planning to launch a new product, here are the steps you
          need to take.
        </p>
      </div>
      <div class="post_content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse
          platea dictumst quisque sagittis purus. Nec feugiat in fermentum
          posuere urna nec tincidunt praesent semper. Faucibus in ornare quam
          viverra orci sagittis eu. Sed odio morbi quis commodo odio aenean sed
          adipiscing diam. Sit amet consectetur adipiscing elit duis tristique
          sollicitudin nibh. Sagittis orci a scelerisque purus semper eget. Nunc
          id cursus metus aliquam eleifend mi in. Ut morbi tincidunt augue
          interdum velit euismod in pellentesque massa. Integer malesuada nunc
          vel risus commodo viverra.
        </p>
        <blockquote class="blockquote">
          <p>
            Et pharetra pharetra massa massa. Diam sit amet nisl suscipit
            adipiscing bibendum.
          </p>
          <cite>Lorem</cite>
        </blockquote>
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
.single {
  text-align: left;

  .post {
    border: 0;
    padding: 0;

    .post_eader {
      margin-bottom: 2rem;
      border-bottom: 2px solid $primary_color;

      .post_title {
        margin-bottom: 3rem;
        font-size: calc(34.2px + 1.55vw);
      }

      .post_meta {
        margin-bottom: 2.5rem;
      }
    }
    .post_content_intro {
      font-size: 2rem;
      line-height: 2.8rem;
      margin-bottom: 2.2rem;
      text-align: left;

      &:nth-child(1) {
        margin-bottom: 6.6rem;
      }
    }
  }

  .blockquote {
    margin: 3rem 0;
    border-style: solid;
    border-width: 0 0 0 4px;
    border-color: inherit;
    padding-left: 1em;

    cite {
      color: $cite_color;
      font-size: 1.2rem;
      margin-top: 2.2rem;
    }
  }
}
</style>
