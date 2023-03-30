<template>
   <!-- eslint-disable-next-line vue/max-attributes-per-line -->
   <footer class="footer" id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500"
      data-aos-delay="50">
      <div class="footer__bg">
         <div class="footer__line"></div>
         <div class="footer__container container grid">
            <p class="footer__copy">&#169; John Angelo Silvestre. All right reserved</p>
            <div class="footer__socials">
               <a v-for="(social, index) in socials" :key="index" :href="social.href" class="footer__social">
                  <i :class="social.iconClass"></i>
               </a>
            </div>
         </div>
      </div>
   </footer>
</template>

<script >
export default {
   data() {
      return {
         socials: [
            {
               href: "https://www.linkedin.com/in/johnangelo-silvestre/",
               iconClass: 'uil uil-linkedin-alt'
            },
            {
               href: "https://github.com/code-jas",
               iconClass: 'uil uil-github-alt'
            },
            {
               href: "https://www.instagram.com/iamgroot04/",
               iconClass: 'uil uil-twitter-alt'
            },
            {
               href: "https://www.instagram.com/iamgroot04/",
               iconClass: 'uil uil-instagram'
            },
         ]
      }
   }
}
</script>
<!-- eslint-disable-next-line vue/component-tags-order -->
<style></style>