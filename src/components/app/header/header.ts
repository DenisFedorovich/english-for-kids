import { Component } from '../../component';
import { Nav } from './nav/nav';

export class Header implements Component {
  readonly head: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.head = document.createElement('div');
    this.head.classList.add('header');
  }

  render(): HTMLElement {
    this.root.appendChild(this.head);
    this.head.appendChild(new Nav(this.head).render());
    const clearBurger = document.getElementById('mobilescreen');
    const menuTab = document.getElementById('menu-tab');

    clearBurger.addEventListener('click', () => {
      if (menuTab.classList.contains('hidden')) menuTab.classList.add('show');
      document.getElementById('checkbox1').setAttribute('type', 'checkbox');
    });
    clearBurger.addEventListener('mouseleave', () => {
      if (menuTab.classList.contains('show')) {
        menuTab.classList.remove('show');
        document.getElementById('checkbox1').removeAttribute('type');
        menuTab.classList.add('hidden');
      }
    });

    return this.head;
  }
}
