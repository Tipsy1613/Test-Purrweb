// скролл при клике
const menuLinks = document.querySelectorAll('.link__more-arroy[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick)
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         
         e.preventDefault();
      }
   }
}

// меню бургер
const menuList = document.querySelector('.header__nav');
const iconMenu = document.querySelector('.header__menu_icon');

if (iconMenu) {
   iconMenu.addEventListener('click', () => {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('active');
      menuList.classList.toggle('active');
   })
}