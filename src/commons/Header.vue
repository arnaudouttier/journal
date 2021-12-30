<template>
  <header class="site-header">
    <button
      class="btn btn-nav"
      @click="toggleNav()"
      :class="{ activeNav: activeNav }"
    >
      <span class="menu-toggle"></span>
    </button>
    <button class="btn btn-nav">
      <span class="icon-sidebar"></span>
    </button>
  </header>
  <Navigation :enableNav="this.enableNav" />
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  name: 'Heade',
  components: {
    Navigation
  },
  data () {
    return {
      activeNav: false,
      enableNav: false
    }
  },
  methods: {
    toggleNav () {
      this.activeNav = !this.activeNav
      this.enableNav = !this.enableNav
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/variables.scss';

.site-header {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  position: relative;
  top: 0 !important;
  width: 100%;
  z-index: 2;
}

.btn-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  padding: 0;
  position: relative;
  z-index: 1001;
}

.menu-toggle {
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
