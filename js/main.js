document.addEventListener('DOMContentLoaded', () => {
  const cardBtns = document.querySelectorAll('[data-pop]');
  const modals = document.querySelectorAll('.modal');
  const supplerBtn = document.querySelector('.suppler');
  const menu = document.querySelector('.menu');
  const menuContainer = menu.querySelector('.menu__container')
  const menuHeight = menuContainer.scrollHeight;
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

  supplerBtn.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('suppler--active');

    if (!menu.classList.contains('menu--open')) {
      menu.classList.add('menu--open');
      menuContainer.style.maxHeight = menuHeight + 'px';
    } else {
      menu.classList.remove('menu--open');
      menuContainer.style.maxHeight = 0;
    }
  })




});