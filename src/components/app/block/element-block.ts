import { Component } from '../../component';

export class ElementBlock implements Component {
  readonly category: HTMLElement;

  constructor(private readonly root: HTMLElement | null) {
    this.category = document.createElement('div');
    this.category.classList.add('container');
  }

  render(): HTMLElement {
    this.category.innerHTML = `
        <div class="category-block">
        </div>
     `;
    return this.category;
  }
}
