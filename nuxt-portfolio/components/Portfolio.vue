<template>
   <!--==================== PORTFOLIO ====================-->
   <section class="portfolio section" id="portfolio" data-aos="fade-up" data-aos-easing="ease-in-out">
      <h2 class="section__title">Portfolio</h2>
      <span class="section__subtitle"> Most recent work</span>

      <div class="portfolio__container container">
         <div>
            <portfolio-item v-for="portfolioItem in portfolioItems" :key="portfolioItem._id"
               :portfolio-item="portfolioItem" />

            <!-- <div class="portfolio__content grid" data-aos="fade-right" data-aos-easing="ease-in-out"
               data-aos-duration="500" data-aos-delay="50">
            
               <div class="portfolio__img__mockup">
                  <img src="assets/img/portfolio/bookly_mockup_transparent.png" class="portfolio__img" alt="">
               </div>
               <div class="portfolio__data">
                  <h3 class="portfolio__title">Bookly - Online Book Store</h3>
                  <p class="portfolio__description">Interactive online bookstore web application that offers a
                     seamless and
                     user-friendly experience. Utilized HTML, CSS, JavaScript, PHP, MySQL, jQuery, and PHPMailer.</p>
                  <a href="#" class="button button--flex button--small portfolio__button portfolio__btn ">
                     Demo
                     <i class="uil uil-arrow-right button__icon"></i>
                  </a>
                  <a href="https://github.com/code-jas/Bookly" target="_blank"
                     class="button button--flex button--small portfolio__button portfolio__btn">
                     Code
                     <i class="uil uil-arrow-right button__icon"></i>
                  </a>
               </div>
            </div> -->
         </div>
      </div>
   </section>
</template>

<script>
import PortfolioItem from './PortfolioItem.vue';

export default {
   components: {
      PortfolioItem
   },
   data() {
      return {
         portfolioItems: [
            {
               _id: 1,
               title: 'Bookly - Online Book Store',
               description: 'Interactive online bookstore web application that offers a seamless and user-friendly experience. Utilized HTML, CSS, JavaScript, PHP, MySQL, jQuery, and PHPMailer.',
               mockup: require('@/assets/img/portfolio/bookly_mockup_transparent.png'),
               repo: 'https://github.com/code-jas/Bookly',
            },
            {
               _id: 2,
               title: 'Ph Festival',
               description: 'This is informative travel blog website showcasing Philippine festivals. Designed an interactive and responsive platform. This is built using HTML, CSS, JavaScript, PHP, and MySQL.',
               mockup: require('@/assets/img/portfolio/phfestival_mockup_transparent.png'),
               repo: 'https://github.com/code-jas/PH-Festival'
            },
            {
               _id: 3,
               title: 'ALPAS',
               description: 'The website is a static, responsive platform. It has  designed to cater to the needs of artists who wish to sell their work online through NFT Token. The website has been constructed using a combination of HTML, CSS, javascript, PHP, and mySQL.',
               mockup: require('@/assets/img/portfolio/alpas_mockup.png'),
               repo: 'https://github.com/supremoods/NFT-website.git',
            }
         ]
      }
   }
}
</script>

<style></style>