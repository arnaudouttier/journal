<template>
  <div class="site_navigation" v-show="enableNav">
    <nav>
      <ul>
        <li>
          <router-link @click="toggleNavigation()" to="/">Accueil</router-link>
        </li>
        <li>
          <router-link @click="toggleNavigation()" to="/about"
            >About</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    enableNav: Boolean,
    toggleNavigation: Function
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/style.scss';

.site_navigation {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: #fff;
  z-index: 99;
}

nav {
  padding: 8rem 3rem 3rem 3rem;
  max-height: calc(100% - 110px);

  ul {
    display: flex;
    flex-direction: column;
  }

  a {
    display: inline-block;
    font-size: 2.6rem;
    line-height: 3.3rem;
    margin-bottom: 2.6rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
    position: relative;
  }

  .router-link-active {
    &::after {
      display: block;
      content: '';
      background-color: rgb(0, 0, 0);
      height: 2px;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -2px;
    }
  }
}

@media (min-width: 1024px) {
  .site_navigation {
    display: block !important;
    position: relative;
    height: auto;
    width: auto;
    background: transparent;

    nav {
      padding: 0;
      ul {
        flex-direction: row;
        justify-content: space-between;

        li {
          margin-right: 2rem;
        }
        a {
          font-size: 2rem;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
