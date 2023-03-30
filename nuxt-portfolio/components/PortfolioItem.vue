<template>
   <div class="portfolio__content grid" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="500"
      data-aos-delay="50">

      <div class="portfolio__img__mockup">
         <img :src="portfolioItem.mockup" class="portfolio__img" :alt="portfolioItem.title">
      </div>
      <div class="portfolio__data">
         <h3 class="portfolio__title">{{ portfolioItem.title }}</h3>
         <p class="portfolio__description">{{ portfolioItem.description }}</p>
         <a href="#" class="button button--flex button--small portfolio__button portfolio__btn ">
            Demo
            <i class="uil uil-arrow-right button__icon"></i>
         </a>
         <a :href="portfolioItem.repo" target="_blank"
            class="button button--flex button--small portfolio__button portfolio__btn">
            Code
            <i class="uil uil-arrow-right button__icon"></i>
         </a>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      portfolioItem: {
         type: Object,
         required: true
      },
   },
   mounted() {
      console.log(this.portfolioItem)
   }
}
</script>

<style></style>