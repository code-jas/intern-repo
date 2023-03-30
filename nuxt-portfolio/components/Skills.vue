<template>
   <section class="skills section" id="skills">
      <h2 class="section__title">Skills</h2>
      <span class="section__subtitle">My Technical Level</span>
      <div class="grid skills__cont">
         <tech-stack-card v-for="techStack in techStacks" :key="techStack._id" :tech-stack="techStack" />
      </div>
   </section>
</template>
 
<script>
import TechStackCard from "./Techstackcard.vue";

export default {
   components: {
      TechStackCard,
   },
   data() {
      return {
         techStacks: [
            {
               _id: 1,
               title: "Frontend Developer",
               subtitle: "More than 2 years",
               iconList: [
                  {
                     name: "HTML5",
                     icon:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png",
                  },
                  {
                     name: "CSS",
                     icon:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png",
                  },
                  {
                     name: "JavaScript",
                     icon:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433",
                  },
                  {
                     name: "React",
                     icon:
                        "https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg",
                  },
                  {
                     name: "VueJs",
                     icon:
                        "https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png",
                  },

                  {
                     name: "NextJs",
                     icon:
                        require('@/assets/img/logos/nextjs.svg')

                  },
                  {
                     name: "Tailwind",
                     icon:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333",
                  },

                  {
                     name: "Bootstrap",
                     icon:
                        "https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png",
                  },
               ],
            },
            {
               _id: 2,
               title: "Backend Developer",
               subtitle: "More than 2 years",
               iconList: [
                  { name: "PHP", icon: require("@/assets/img/logos/php.svg") },
                  { name: "mySQL", icon: require("@/assets/img/logos/mysql.svg") },
                  { name: "Firebase", icon: require("@/assets/img/logos/firebase.svg") },
                  { name: "Flask", icon: require("@/assets/img/logos/flask.svg") },
                  { name: "Sanity", icon: require("@/assets/img/logos/sanity.svg") },
               ],
            },
            {
               _id: 3,
               title: "Others",
               subtitle: "Seeking skills",
               iconList: [
                  { name: "Figma", icon: require("@/assets/img/logos/figma.svg") },
                  { name: "git", icon: require("@/assets/img/logos/git-icon.svg") },
                  { name: "pytorch", icon: require("@/assets/img/logos/pytorch.svg") },
               ],
            },
         ],
      };
   },
};
</script>
 
<style></style>