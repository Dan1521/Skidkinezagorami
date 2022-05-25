document.addEventListener('DOMContentLoaded', () => {
  const cardBtns = document.querySelectorAll('[data-pop]');
  const modals = document.querySelectorAll('.modal');
  const menuBtn = document.querySelectorAll('[data-menu-btn]');
  const menus = document.querySelectorAll('[data-menu]');

  cardBtns.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      let self = event.currentTarget
      let selfClass = self.dataset.pop;

      modals.forEach((modal) => {
        let modalClass = modal.dataset.modal;
          if (modalClass == selfClass) {
            modal.classList.add('modal--open');
          }
      })
      
    })
  })
  modals.forEach((modal) => {
    modal.addEventListener('click', (event) => {
      // Кнопка закрыти текущего окна
      let modalClose = modal.querySelector('.modal__close');

      if (modal.closest('.modal') || modal.closest(modalClose)) {
        modal.classList.remove('modal--open')
      }
    })
  })

  menuBtn.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      let self = event.currentTarget;
      let selfClass = self.dataset.menuBtn

      menus.forEach((menu) => {
        let menuClass = menu.dataset.menu
        let menuHeight = menu.scrollHeight;

        if (selfClass == menuClass) {
          if (!menu.classList.contains('menu--open')) {
            menuBtn.forEach((elem) => {
              elem.classList.remove('is-active');
            })
            menus.forEach((elem) => {
              elem.classList.remove('menu--open');
            })
            menu.classList.add('menu--open');
            self.classList.add('is-active');
            menu.style.maxHeight = menuHeight + 'px';
          } else {
            menu.classList.remove('menu--open');
            self.classList.remove('is-active');
            menu.style.maxHeight = 0;
          } 
        }
      });
    })
    
  })

  // burger.addEventListener('click', (event) => {
  //   if (!burger.classList.contains('burger-active')) {
  //     menuNav.classList.add('menu--open');
  //     burger.classList.add('burger-active')
  //     menuNav.style.maxHeight = menuNavHeight + 'px';
  //   } else {
  //     menuNav.classList.remove('menu--open');
  //     burger.classList.remove('burger-active')
  //     menuNav.style.maxHeight = 0;
  //   }
  // })

  // suppler.addEventListener('click', (event) => {
  //   event.currentTarget.classList.toggle('suppler--active');

  //   if (!menuCat.classList.contains('menu--open')) {
  //     menuCat.classList.add('menu--open');
  //     menuCat.style.maxHeight = menuCatHeight + 'px';
  //   } else {
  //     menu.classList.remove('menu--open');
  //     menuCat.style.maxHeight = 0;
  //   }
  // })




});