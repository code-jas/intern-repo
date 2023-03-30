<template>
   <main class="main">
      <Home />
      <Portfolio />
      <About />
      <Skills />
      <Contact />
   </main>
</template>
      

<script>
import Home from "@/components/Home.vue";
import Portfolio from "@/components/Portfolio.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Contact from "@/components/Contact.vue";

export default {
   components: {
      Home,
      Portfolio,
      About,
      Skills,
      Contact
   },
   mounted() {
      window.addEventListener('scroll', this.scrollActive);
   },
   beforeDestroy() {
      window.removeEventListener('scroll', this.scrollActive);
   },
   methods: {
      scrollActive() {
         const sections = document.querySelectorAll('section[id]');
         const scrollY = window.pageYOffset;

         sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');
            const activeLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
               activeLink.classList.add('active-link');
            } else {
               activeLink.classList.remove('active-link');
            }
         });
      }
   }
};
</script>

<style></style>