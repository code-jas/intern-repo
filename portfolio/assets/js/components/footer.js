const footerEl = document.getElementById('footer');

footerContent = `
      <div class="footer__bg">
         <div class="footer__line"></div>
         <div class="footer__container container grid">
            <p class="footer__copy">&#169; John Angelo Silvestre. All right reserved</p>
            <div class="footer__socials">
               <a href="https://www.linkedin.com/in/johnangelo-silvestre/" class="footer__social">
                  <i class="uil uil-linkedin-alt"></i>
               </a>
               <a href="https://github.com/code-jas" class="footer__social">
                  <i class="uil uil-github-alt"></i>
                  <a href="https://www.instagram.com/iamgroot04/" class="footer__social">
                     <i class="uil uil-twitter-alt"></i>
                  </a>
                  <a href="https://www.instagram.com/iamgroot04/" class="footer__social">
                     <i class="uil uil-instagram"></i>
                  </a>

               </a>
            </div>
         </div>
      </div>
`


footerEl.innerHTML = footerContent;