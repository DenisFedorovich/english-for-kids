import { Component } from '../../component';
import { ElementBlock } from './element-block';
import { StartGame } from '../start-game';

export class Block implements Component {
  readonly cacategoryGame: HTMLElement;

  constructor(private readonly root: HTMLElement | null) {
    this.cacategoryGame = document.createElement('div');
    this.cacategoryGame.classList.add('game-block');
  }

  render(): HTMLElement {
    this.root.appendChild(this.cacategoryGame);
    this.cacategoryGame.appendChild(new ElementBlock(this.cacategoryGame).render());
    this.startGame();
    return this.cacategoryGame;
  }

  startGame(): void {
    new StartGame(this.cacategoryGame).start();
  }
}
