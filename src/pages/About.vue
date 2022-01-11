<template>
  <section class="page about">
    <article class="post">
      <header class="post_header">
        <h1 class="page_title">Info</h1>
      </header>
      <!-- .page-header -->
      <div class="post_content">
        <h2>Cerebro team is here to bring you fast and scalable growth.</h2>
        <div class="post_featured_img">
          <img
            loading="lazy"
            width="800"
            height="561"
            src="../assets/images/info2.jpg"
            alt="about image"
            class="wp-image-104"
            data-recalc-dims="1"
          />
        </div>
        <div class="post_content_p">
          <p>
            Our authors are experienced consultants, coaches, and digital
            entrepreneurs that can help you reach your company’s goals and grow
            your business. They have helped businesses worldwide get hundreds of
            millions in funding and just as much in sales.
          </p>
          <p>
            The authors know the ins and outs of running a tech business and can
            help you generate leads, drive traffic to your website, increase
            sales, and strengthen your brand.
          </p>
        </div>
        <p class="has-small-font-size">
          If you are serious about taking your business to the next level, check
          out our
          <a href="https://cerebro.tkdemos.co/">guides</a>
          . It’s time you establish a brand that will be an industry leader.
        </p>
      </div>
      <!-- .entry-content -->
    </article>
  </section>
</template>

<style lang="scss" scoped>
.about > * {
  margin: auto;
  max-width: 1200px;
  text-align: left;
}

.post {
  display: block;
  border: 0;
  padding: 0;
}

.post_header {
  margin-bottom: 2.1rem;
}

.page_title {
  font-size: calc(2.8rem + 3.75vw);
}

.post_content {
  max-width: 800px;
  padding: 0 !important;
  h2 {
    margin-bottom: 1rem;
  }

  .post_featured_img {
    margin: 5rem 0;
  }

  .post_content_p {
    p {
      margin-bottom: 2.1rem;
    }
  }

  .has-small-font-size {
    font-size: 1.4rem;
  }
}

@media (min-width: 600px) and (min-width: 781px) {
  .post_content_p {
    display: flex;
    column-gap: 1.6rem;
  }
}
</style>
