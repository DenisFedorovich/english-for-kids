import { Component } from '../../component';
import { ModeBlock } from './modeBlock';

export class Mode implements Component {
  readonly mode: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.mode = document.createElement('div');
    this.mode.classList.add('mode-block');
  }

  render(): HTMLElement {
    this.root.appendChild(this.mode);
    this.mode.appendChild(new ModeBlock(this.mode).render());
    return this.mode;
  }
}
