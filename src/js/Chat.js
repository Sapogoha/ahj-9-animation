export default class Chat {
  constructor() {
    this.openButton = document.querySelector('.chat__open-button');
    this.submitButton = document.querySelector('.chat__submit-button');
    this.close = document.querySelector('.chat__close');
    this.chatForm = document.querySelector('.chat__form');

    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);

    this.openButton.addEventListener('click', this.openForm);
  }

  openForm() {
    this.chatForm.classList.remove('chat__form_hidden');
    this.openButton.classList.add('chat__open-button_hidden');
    this.close.addEventListener('click', this.closeForm);
  }

  closeForm() {
    this.openButton.classList.remove('chat__open-button_hidden');
    this.chatForm.classList.add('chat__form_hidden');
    this.close.removeEventListener('click', this.closeForm);
  }
}
