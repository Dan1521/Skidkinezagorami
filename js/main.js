document.addEventListener('DOMContentLoaded', () => {
  const cardBtns = document.querySelectorAll('[data-pop]');
  const modals = document.querySelectorAll('.modal');

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




});