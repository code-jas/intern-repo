<template>
   <div class="tech__stack__card">
      <h2 class="tech__stack-h2">
         <svg class="tech__stack-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path class="" fill="currentColor"
               d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z">
            </path>
         </svg>
         <div class="tech__stack-title-cont">
            <h2 class="tech__stack-title">{{ techStack.title }}</h2>
            <span class="tech__stack-subtitle">{{ techStack.subtitle }}</span>
         </div>
      </h2>

      <div class="tech__stack_icon-list">
         <div v-for="iconTechStack in techStack.iconList" :key="iconTechStack.name"
            :class="['card-mini', iconTechStack.name]">
            <img :src="iconTechStack.icon" :alt="iconTechStack.name">
            <span class="card-mini-span">
               {{ iconTechStack.name }}
            </span>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      techStack: {
         type: Object,
         required: true,
      },
   },
   mounted() {
      console.log(this.techStack);
   },
}

</script>

<style></style>