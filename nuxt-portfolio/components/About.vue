<template>
   <section class="about section" id="about" data-aos="fade-right" data-aos-delay="" data-aos-duration="500"
      data-aos-easing="out">
      <h2 class="section__title" data-aos="fade-up" data-aos-delay="" data-aos-duration="500"
         data-aos-easing="ease-in-out">About me</h2>
      <span class="section__subtitle" data-aos="fade-up" data-aos-delay="" data-aos-duration="200">My
         introduction</span>

      <div class="about__container container grid">
         <img src="@/assets/img/about-me-photo.jpg" alt="" class="about__img" data-aos="fade-right" data-aos-delay=""
            data-aos-duration="500" data-aos-easing="ease-in-out">

         <div class="about__data" data-aos="fade-left" data-aos-delay="" data-aos-duration="500"
            data-aos-easing="ease-in-out">
            <p class="about__description"> {{ aboutDescriptionparag1 }}</p>
            <p class="about__description">{{ aboutDescriptionparag2 }}</p>

            <div class="about__info">
               <div v-for="(aboutInfoItem, idx) in aboutInfo" :key="idx">
                  <span class="about__info-title">{{ aboutInfoItem.title }}</span>
                  <span class="about__info-name" v-html="aboutInfoItem.name"></span>
               </div>

               <!-- <div>
                  <span class="about__info-title">02+</span>
                  <span class="about__info-name">Years <br> experience</span>
               </div>
               <div>
                  <span class="about__info-title">03+</span>
                  <span class="about__info-name">Completed <br> Project</span>
               </div>
               <div>
                  <span class="about__info-title">05+</span>
                  <span class="about__info-name">Programming <br> Certification</span>
               </div> -->
            </div>

            <div class="about__buttons">
               <button class="button button--flex button__dl" @click="downloadFile">
                  Download CV <i class="uil uil-download-alt button__icon"></i>
               </button>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import axios from 'axios';

export default {

   data() {
      return {
         aboutDescriptionparag1: 'My name is John Angelo, and I work as a full-stack web developer. I have expertise in creating responsive web designs using HTML, CSS, and various JS libraries and frameworks.',
         aboutDescriptionparag2: 'I strive to enhance my skills continuously and put in great effort to excel at my job. As a full-stack web developer, I have acquired discipline and the right mindset to succeed. I remain motivated to pursue my aspirations and achieve my goals.',
         aboutInfo: [
            {
               title: '02+',
               name: 'Years <br> experience'
            },
            {
               title: '03+',
               name: 'Completed <br> Project'
            },
            {
               title: '05+',
               name: 'Programming <br> Certification'
            }
         ]
      }
   },
   methods: {
      async downloadFile() {
         try {
            const response = await axios({
               method: 'GET',
               url: '/assets/pdf/john-angelo-silvestre-resume.pdf',
               responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'john-angelo-silvestre-resume.pdf');
            document.body.appendChild(link);
            link.click();
         } catch (error) {
            console.error(error);
         }
      },
   },
}
</script>

<style></style>