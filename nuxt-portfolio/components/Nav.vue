
<!-- I converted the given HTML and JavaScript code into a single-file Vue component named `Nav.vue`. Here are the changes I made:

1. I wrapped the HTML code in a `<template>` tag.
2. I replaced the `show-menu` class manipulation with a Vue data property `showMenu` and used the class binding syntax `:class="{ 'show-menu': showMenu }"` on the `nav__menu` element.
3. I added a `v-for` directive to loop through the `navItems` array, which contains the navigation items' data (href, iconClass, and label).
4. I replaced the event listeners in the JavaScript code with Vue event listeners using the `@click` directive on the corresponding elements.
5. I created a `toggleMenu` method to show or hide the menu and a `linkAction` method to hide the menu when a link is clicked.
6. I moved the navigation items data into the `data()` function and created a `navItems` array to store the items.
7. I wrapped the JavaScript code in a `<script>` tag and exported the Vue component using `export default`. -->

<template>
  <header class="header" id="header" @scroll="scrollHeader()" :class="{ 'scroll-header': isScrolled }">
    <nav class=" nav container">
      <a href="#" class="nav__logo" data-aos="fade-right" data-aos-duration="500">Angelo</a>
      <div class="nav__menu" :class="{ 'show-menu': showMenu }" ref="navMenu">
        <ul class="nav__list grid">
          <li class="nav__item" v-for="(item, index) in navItems" :key="index">
            <a :href="item.href" class="nav__link" @click="linkAction">
              <i :class="item.iconClass"></i> {{ item.label }}
            </a>
          </li>
        </ul>
        <i class="uil uil-times nav__close" @click="toggleMenu(false)"></i>
      </div>
      <div class="nav__btns" data-aos="fade-left" data-aos-duration="500">
        <i class="uil uil-moon change-theme" id="theme-button" ref="themeButton"></i>
        <div class="nav__toggle" @click="toggleMenu(true)">
          <i class="uil uil-apps"></i>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      showMenu: false,
      navItems: [
        { href: '#home', iconClass: 'uil uil-estate nav__icon', label: 'Home', active: true },
        { href: '#portfolio', iconClass: 'uil uil-scenery nav__icon', label: 'Portfolio' },
        { href: '#about', iconClass: 'uil uil-user nav__icon', label: 'About' },
        { href: '#skills', iconClass: 'uil uil-file-alt nav__icon', label: 'Skills' },
        { href: '#contact', iconClass: 'uil uil-message nav__icon', label: 'Contact Me' },
      ],
    };
  },
  mounted() {
    const themeButton = this.$refs.themeButton;
    const darkTheme = 'dark-theme';
    const iconTheme = 'uil-sun';

    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      // We save the theme and the current icon that the user chose
      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
    });
    // scroll header
    window.addEventListener('scroll', this.scrollHeader);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHeader);
  },
  methods: {
    toggleMenu(show) {
      this.showMenu = show;
    },
    linkAction() {
      this.showMenu = false;
    },
    scrollHeader() {
      window.scrollY >= 80 ? this.isScrolled = true : this.isScrolled = false;

    },

  },
};

// /*==================== CHANGE BACKGROUND HEADER ====================*/
// function scrollHeader() {
//    const nav = document.getElementById('header')
//    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
//    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
// }
// window.addEventListener('scroll', scrollHeader)

</script>

<style></style>

