<template>
   <a href="#" class="scrollup" id="scroll-up" :class="{ 'show-scroll': isScrollShown }">
      <i class="uil uil-arrow-up scrollup__icon"></i>
   </a>
</template>
 
<script>
export default {
   data() {
      return {
         isScrollShown: false
      };
   },
   mounted() {
      window.addEventListener('scroll', this.handleScroll);
   },
   beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
   },
   methods: {
      handleScroll() {
         this.isScrollShown = window.scrollY >= 560;
      }
   }
};
</script>