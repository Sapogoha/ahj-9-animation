export default class Like {
  constructor() {
    this.likeButton = document.querySelector('.like__button');
    this.likeEl = document.querySelector('.like');
    this.start = this.start.bind(this);
    this.likeButton.addEventListener('click', this.start);
  }

  start() {
    const position = Math.floor(1 + Math.random() * 4);
    const picture = document.createElement('div');
    picture.classList.add('like__picture');
    picture.classList.add(`animation_${position}`);
    this.likeEl.appendChild(picture);

    picture.addEventListener('animationend', () => picture.remove());
  }
}
