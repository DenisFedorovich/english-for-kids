import { Component } from '../../component';

export class MainPageBlock implements Component {
  readonly main: HTMLElement;

  constructor(private readonly root: HTMLElement | null) {
    this.main = document.createElement('div');
    this.main.classList.add('container');
  }

  render(): HTMLElement {
    const link = window.location.pathname;
    this.main.innerHTML = `
    <div class="links-block" id="trigger">
      <div class="links-block-first">
        <div class="animals-links">
          <a class="category-links" href="${link}#/animals/">
          <span class="animals-link"><span class="animals-text">Animals</span></span></a>
        </div>
        <div class="clothes-links">
          <a href="${link}#/clothes/"><span class="clothes-link"><span class="clothes-text">
          Clothes</span></span></a>
        </div>
        <div class="emotions-links">
          <a href="${link}#/emotions/"><span class="emotions-link"><span class="emotions-text">
          Emotions</span></span></a>
        </div>
        <div class="actions-links">
          <a href="${link}#/actions/"><span class="actions-link"><span class="actions-text">
          Actions</span></span></a>
        </div>
      </div>
      <div class="links-block-second">
        <div class="proffesions-links">
          <a href="${link}#/proffesions/"><span class="proffesions-link"><span class="prof-text">
          Proffesions</span></span></a>
        </div>
        <div class="animals2-links">
          <a href="${link}#/animals2/"><span class="animals2-link"><span class="animals2-text">
          Animals(B)</span></span></a>
        </div>
        <div class="actions2-links">
          <a href="${link}#/actions2/"><span class="actions2-link"><span class="actions2-text">
          Actions(B)</span></span></a>
        </div>
        <div class="fruits-links">
          <a href="${link}#/fruits/"><span class="fruits-link"><span class="fruits-text">
            Fruits</span></span></a>
        </div>
      </div>
    </div>
     `;
    return this.main;
  }
}
