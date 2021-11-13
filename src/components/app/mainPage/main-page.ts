import { Component } from '../../component';
import { MainPageBlock } from './main-page-block';

export class MainPage implements Component {
  readonly aboutGame: HTMLElement;

  constructor(private readonly root: HTMLElement | null) {
    this.aboutGame = document.createElement('div');
    this.aboutGame.classList.add('game-links');
  }

  render(): HTMLElement {
    this.root.appendChild(this.aboutGame);
    this.aboutGame.appendChild(new MainPageBlock(this.aboutGame).render());
    return this.aboutGame;
  }
}
