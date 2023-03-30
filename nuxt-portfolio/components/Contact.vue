<template>
   <section class="contact section" id="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500"
      data-aos-delay="50">
      <h2 class="section__title">Contact Me</h2>
      <span class="section__subtitle">Get in touch</span>

      <div class="contact__container container grid">
         <div data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="500" data-aos-delay="50">
            <div class="contact__information">
               <i class="uil uil-phone contact__icon"></i>

               <div>
                  <h3 class="contact__title">Call Me</h3>
                  <span class="contact__subtitle">+1 234 567 890</span>
               </div>
            </div>

            <div class="contact__information">
               <i class="uil uil-envelope contact__icon"></i>

               <div>
                  <h3 class="contact__title">Email</h3>
                  <span class="contact__subtitle">
                     <a href="mailto:">johnangelo.silvestre04@gmail.com
                     </a>
                  </span>
               </div>
            </div>
            <div class="contact__information">
               <i class="uil uil-map-marker contact__icon"></i>

               <div>
                  <h3 class="contact__title">Location</h3>
                  <span class="contact__subtitle">Philippines</span>
               </div>
            </div>
         </div>
         <ContactForm />
      </div>
   </section>
</template>

<script>
export default {
   data() {
      return {
         name: 'John Angelo Silvestre',
         contact: "+1 234 567 890",
         email: "johnangelo.silvestre04@gmail.com",
         location: "Manila, Philippines 10024"
      }
   }
}
</script>

<style></style>