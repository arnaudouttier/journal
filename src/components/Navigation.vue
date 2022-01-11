<template>
  <div class="site_navigation" v-show="this.$store.state.activeNav">
    <nav>
      <ul>
        <li>
          <router-link @click="toggleNav()" to="/">Accueil</router-link>
        </li>
        <li>
          <router-link @click="toggleNav()" to="/about">About</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    toggleNav () {
      this.$store.commit('toggleNavigation')
    }
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
    font-weight: 500;
    letter-spacing: 0.05rem;
    position: relative;

    &::before {
      background: $primary_color;
      position: absolute;
      content: '';
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      transform-origin: center;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover {
      &::before {
        transform-origin: center;
        transform: scaleX(1);
      }
    }

    &.router-link-active {
      &::after {
        display: block;
        content: '';
        background-color: $primary_color;
        height: 2px;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: -2px;
      }
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
