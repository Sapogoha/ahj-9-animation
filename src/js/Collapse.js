export default class Collapse {
  constructor() {
    this.button = document.querySelector('.collapse__button');
    this.text = document.querySelector('.collapse__text');
    this.toggle = this.toggle.bind(this);

    this.button.addEventListener('click', this.toggle);
  }

  toggle() {
    const frameDuration = 1000 / 60;
    const duration = 500;
    const framesCount = duration / frameDuration;
    const targetElem = this.text;

    if (this.text.offsetHeight === 0) {
      this.text.style.display = 'block';
      const max = this.text.offsetHeight;
      this.text.style.height = '0px';
      const stepSize = max / framesCount;
      let current = 0;

      requestAnimationFrame(function redraw() {
        current += stepSize;
        targetElem.style.height = `${current}px`;
        if (current < max) {
          requestAnimationFrame(redraw);
        }
      });
    } else if (this.text.style.display === 'block') {
      let current = this.text.offsetHeight;
      const stepSize = current / framesCount;

      requestAnimationFrame(function redraw() {
        current -= stepSize;
        targetElem.style.height = `${current}px`;
        if (current >= 0) {
          requestAnimationFrame(redraw);
        } else {
          targetElem.style.height = '';
          targetElem.style.display = 'none';
        }
      });
    }
  }
}
