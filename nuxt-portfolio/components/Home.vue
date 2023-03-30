<template>
   <section class="home section" id="home">
      <div class="home__container container grid">
         <div class="home__content grid">
            <div class="home__social" data-aos="fade-down" data-aos-delay="50" data-aos-duration="500">
               <!--? dynamic socials -->
               <a v-for="social in socials" :key="social.href" :href="social.href" class="home__social-icon"
                  target="_blank">
                  <i :class="social.iconClass"></i>
               </a>
            </div>
            <div data-aos="fade-up" data-aos-delay="50" class="home__img">
               <svg class="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <mask id="mask0" mask-type="alpha">
                     <path
                        d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                                                                                                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                                                                                                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                                                                                                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                  </mask>
                  <g mask="url(#mask0)">
                     <path
                        d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                                                                                                            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                                                                                                            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                                                                                                            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                     <image class="home__blob-img" x="0" y="0" href="@/assets/img/angelo.png" />
                  </g>
               </svg>
               <!-- <svg class="home__blob" id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" >
                  <g transform="translate(433.2038502591022 292.89435969027346)">
                     <path
                        d="M215.8 -56.9C245.2 20.3 210.8 131.5 145.8 171.9C80.8 212.4 -14.7 182 -86.7 127.7C-158.8 73.4 -207.3 -4.9 -188.9 -67C-170.6 -129.1 -85.3 -175 4 -176.3C93.2 -177.6 186.4 -134.2 215.8 -56.9">
                     </path>
                     <image x="-100" y="-120" width="400" height="350" xlink:href="@/assets/img/angelo.png"
                        mask="url(#mask0)" />
                  </g>
               </svg> -->
            </div>
            <div class="home__data" data-aos="fade-down" data-aos-delay="50" data-aos-duration="500">
               <h1 class="home__title">{{ title }}</h1>
               <h3 class="home__subtitle">{{ subtitle }}</h3>
               <p class="home__description">{{ description }}</p>
               <a href="#contact" class="button button--flex">
                  Contact Me <i class="uil uil-message button__icon"></i>
               </a>
            </div>
         </div>
         <div class="home__scroll" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500"
            data-aos-easing="ease-in-out">
            <a href="#portfolio" class="home__scroll-button button--flex">
               <i class="uil uil-mouse-alt home__scroll-mouse"></i>
               <span class="home__scroll-name">Scroll Down</span>
               <i class="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   data() {
      return {
         title: 'Hi, I am Angelo',
         subtitle: 'Frontend Developer',
         description: 'Motivated and enthusiastic web developer looking for a new role in full-stack development',
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

<style></style>