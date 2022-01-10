<template>
  <header class="site-header">
    <button
      class="btn btn_nav menu_btn"
      @click="toggleNav()"
      :class="{ activeNavBtn: this.$store.state.activeNav }"
    >
      <span class="menu-toggle"></span>
    </button>
    <Navigation />
    <button class="btn btn_nav sidebar_btn" @click="toggleSidebar()">
      <span class="icon-sidebar"></span>
    </button>
  </header>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  name: 'Header',
  components: {
    Navigation
  },
  data () {
    return {
      activeNav: this.$store.state.activeNav,
      activeSidebar: this.$store.state.activeSidebar
    }
  },
  methods: {
    toggleNav () {
      this.$store.commit('toggleNavigation')
    },
    toggleSidebar () {
      this.$store.commit('toggleSIdebar')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/style.scss';

.site-header {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  position: relative;
  top: 0 !important;
  width: 100%;
}

.btn_nav {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  padding: 0;
  position: relative;

  &.menu_btn {
    justify-content: left;
    z-index: 101;
  }

  &.sidebar_btn {
    justify-content: right;
  }
}

.menu-toggle {
  justify-content: left;
  background-color: $primary_color;
  height: 2px;
  position: absolute;
  width: 20px;
  transition: 0.2s ease;

  &::before,
  &::after {
    content: ' ';
    position: absolute;
    left: 0;
    background-color: $primary_color;
    height: 2px;
    width: 20px;
    transition: 0.4s ease;
  }

  &::before {
    top: -6px;
  }
  &::after {
    top: 6px;
  }
}

.activeNavBtn {
  .menu-toggle {
    background-color: transparent;
    position: fixed;

    &::before,
    &::after {
      top: 0;
    }
    &::before {
      transform: rotate(-45deg);
    }

    &::after {
      transform: rotate(45deg);
    }
  }
}

.icon-sidebar {
  background-color: $primary_color;
  height: 4px;
  width: 4px;
  border-radius: 50%;
  position: absolute;
  display: inline-block;
  vertical-align: middle;
  color: $primary_color;

  &::before,
  &::after {
    content: ' ';
    position: absolute;
    left: 0;
    background-color: $primary_color;
    height: 4px;
    width: 4px;
    border-radius: 50%;
  }

  &::before {
    left: -10px;
  }
  &::after {
    left: 10px;
  }
}

@media (min-width: 1024px) {
  .site-header {
    padding: 2.5rem 5rem;
  }
  .menu_btn {
    display: none;
  }
}

@media (min-width: 1440px) {
  .site-header {
    padding: 2.5rem 8rem;
  }
}
</style>
