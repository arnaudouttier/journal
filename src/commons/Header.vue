<template>
  <header class="site-header">
    <button
      class="btn btn-nav menu_btn"
      @click="toggleNav()"
      :class="{ activeNav: activeNav }"
    >
      <span class="menu-toggle"></span>
    </button>
    <button class="btn btn-nav sidebar_btn" @click="toggleSidebar()">
      <span class="icon-sidebar"></span>
    </button>
  </header>
  <Navigation :enableNav="this.activeNav" :toggleNavigation="toggleNav" />
  <Sidebar :enableSidebar="this.activeSidebar" :toggleSidebar="toggleSidebar" />
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Heade',
  components: {
    Navigation,
    Sidebar
  },
  data () {
    return {
      activeNav: false,
      activeSidebar: false
    }
  },
  methods: {
    toggleNav () {
      this.activeNav = !this.activeNav
    },
    toggleSidebar () {
      this.activeSidebar = !this.activeSidebar
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/style.scss';

.site-header {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  position: relative;
  top: 0 !important;
  width: 100%;
}

.btn-nav {
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

.activeNav {
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
</style>
