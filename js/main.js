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

      if (event.target.classList.contains('modal__inner') || event.target.classList.contains('modal__close')) {
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

  let btnClipboard = new ClipboardJS('.btn-clipboard', {  //инициализация кнопки копирования промокодов
    text: function (trigger) {
      return trigger.getAttribute('data-clipboard-text');
    },
  })
  btnClipboard.on('success', function (e) {
    e.trigger.classList.add('succses');
    alert("Текст скопирован:" + e.text)
  });




});