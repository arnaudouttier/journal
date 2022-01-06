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
  margin-bottom: 5vw;
  p {
    font-size: calc(17.6px + 0.6472vw);
    font-weight: 400;
    line-height: 2.4rem;

    &:nth-child(1) {
      font-size: 1.6rem;
      margin-bottom: 3.2rem;
    }
  }
  span {
    text-decoration: underline;
  }
}

@media (min-width: 599px) {
  .site_introduction {
    display: flex;
    justify-content: space-around;

    p {
      flex-basis: 66%;
      line-height: 3.3rem;

      &:nth-child(1) {
        font-size: 1.8rem;
      }
    }
  }
}
</style>
