<template>
  <div class="site_introduction">
    <p>WRITING</p>
    <p>
      Guides for <span>innovators</span> that are building game-changing,
      technology-driven organizations.
    </p>
  </div>
</template>

<script>
export default {
  name: 'SiteIntroduction'
}
</script>

<style scoped lang="scss">
.site_introduction {
  p {
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.4rem;
    margin-bottom: 2.4rem;

    &:nth-child(1) {
      font-size: 1.6rem;
    }
  }
  span {
    text-decoration: underline;
  }
}
</style>
