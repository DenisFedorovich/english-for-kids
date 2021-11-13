import { Component } from '../../../component';

export class Nav implements Component {
  private nav: HTMLElement;

  constructor(private readonly root: HTMLElement | null) {
    this.nav = document.createElement('div');
    this.nav.classList.add('container');
  }

  render(): HTMLElement {
    const link = window.location.pathname;
    this.nav.innerHTML = `
      <nav class="mobilescreen" id="mobilescreen">
        <div title="Menu" id="menuToggle">
          <input type="checkbox" id="checkbox1">
            <span></span>
            <span></span>
            <span></span>
            <ul class="hidden" id="menu-tab">
              <li><a href="${link}#/" id="main-page-active">Main Page</a></li>
              <li><a href="${link}#/animals/" id="animals-active">Animals</a></li>
              <li><a href="${link}#/clothes/" id="clothes-active">Clothes</a></li>
              <li><a href="${link}#/emotions/" id="emotions-active">Emotions</a></li>
              <li><a href="${link}#/actions/" id="actions-active">Actions</a></li>
              <li><a href="${link}#/proffesions/" id="proffesions-active">Proffesions</a></li>
              <li><a href="${link}#/animals2/" id="animals2-active">Animals(B)</a></li>
              <li><a href="${link}#/actions2/" id="actions2-active">Actions(B)</a></li>
              <li><a href="${link}#/fruits/" id="fruits-active">Fruits</a></li>
              <li><a href="${link}#/statistic/" id="stat">Statistic</a></li>
            </ul>
        </div>
      </nav>
    `;

    return this.nav;
  }
}
