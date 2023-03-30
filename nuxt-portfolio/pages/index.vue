<template>
  <div>
    <Nav />
    <Main />
    <Footer />
    <ScrollToTop />
  </div>
</template>


<script >
import AOS from 'aos';
import 'aos/dist/aos.css'; // import the styles

export default {
  name: 'IndexPage',
  mounted() {
    AOS.init();
  },
}
</script>


<style>
@import "https://unpkg.com/aos@next/dist/aos.css";
@import "https://unicons.iconscout.com/release/v4.0.0/css/line.css";
</style>