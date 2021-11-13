import { BaseComponent } from '../../base-component';

export class CreateStar extends BaseComponent {
  private readonly root: HTMLElement;

  constructor(root: HTMLElement) {
    super('div', ['star']);
    this.root = root;
    this.element.id = 'star';
  }

  Star(): void {
    this.element.innerHTML = '<img class="full-star">';
    this.root.appendChild(this.element);
  }

  emptyStar(): void {
    this.element.innerHTML = '<img class="empty-star">';
    this.root.appendChild(this.element);
  }
}
