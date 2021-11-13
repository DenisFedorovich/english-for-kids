import { Component } from '../../../app/app.api';

export class ModeBlock implements Component {
  private mode: HTMLElement;

  constructor(private readonly root: HTMLElement | null) {
    this.mode = document.createElement('div');
    this.mode.classList.add('btn-play-block');
  }

  render(): HTMLElement {
    this.mode.innerHTML = `
    <input class="checkbox" type="checkbox" name="checkbox" id="checkbox">
    <label for="checkbox" class="switch"></label>
    `;
    return this.mode;
  }
}
