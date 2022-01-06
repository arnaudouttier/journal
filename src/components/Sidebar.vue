<template>
  <div class="sidebar" :class="{ active: this.$store.state.activeSidebar }">
    <div class="sidebar_header">
      <button class="btn sidebar_close" @click="toggleSidebar()"></button>
    </div>
    <div class="sidebar_content">
      <section class="widget site_info">
        <h3 class="sidebar_title">Info</h3>
        <h4>
          The authors know the ins and outs of running a tech business and can
          help you generate leads, drive traffic to your website, increase
          sales, and strengthen your brand.
        </h4>
      </section>
      <section class="widget sidebar_social">
        <h3 class="sidebar_title">Follow</h3>
        <ul>
          <li>
            <a href="">Github</a>
          </li>
          <li>
            <a href="">Frontend Mentor</a>
          </li>
          <li>
            <a href="">Vercel</a>
          </li>
        </ul>
      </section>
      <section class="widget sidebar_category">
        <h3 class="sidebar_title">Category</h3>
        <ul>
          <li>
            <a href="">Linux</a>
          </li>
          <li>
            <a href="">Histoire du web</a>
          </li>
          <li>
            <a href="">Monde</a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    toggleSidebar () {
      this.$store.commit('toleSIdebar')
      console.log(this.$store.state.activeSidebar)
    }
  }
}
</script>

<style  lang="scss">
@import '../assets/scss/style.scss';
.sidebar.active + .site {
  &:after {
    opacity: 1;
    visibility: visible;
  }
}
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background: rgb(255, 255, 255);
  z-index: 102;
  width: 100%;
  max-width: 0;
  transition: max-width 0.2s ease;
  transition-delay: 0.3s;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &.active {
    max-width: 100%;
  }
}

.sidebar_header {
  margin: 2rem 3rem;
  display: flex;
  justify-content: right;
}

.sidebar_content {
  margin: 3rem 3rem;
}

.sidebar_close {
  width: 30px;
  height: 30px;
  border: 0;
  padding: 0;
  background-color: transparent;

  &::before,
  &::after {
    content: ' ';
    position: absolute;
    background-color: $primary_color;
    height: 2px;
    width: 30px;
  }
  &::before {
    transform: rotate(-45deg);
  }

  &::after {
    transform: rotate(45deg);
  }
}

.widget {
  max-width: 300px;
  margin-bottom: 12rem;

  ul {
    li {
      line-height: 2.1rem;
      margin: 0.6rem 0;

      a {
        font-size: 1.3rem;
        letter-spacing: 0.02rem;
      }
    }
  }
}

.sidebar_title {
  font-family: $primary_font_bold;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 17.25px;
  margin-bottom: 2.1rem;
}

.site_info {
  h4 {
    font-size: calc(1.7rem + 0.6472vw);
    overflow-wrap: break-word;
    visibility: visible;
    font-weight: 400;
    line-height: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .sidebar {
    &.active {
      max-width: 50%;
    }
  }
}
</style>
