import { AudioCategoryModel } from '../../../models/image-category-model';
import { BaseComponent } from '../../base-component';
import {
  audioPath,
  ENDGAME_BLOCK_TIMEOUT, MATH_RANDOM, PLAYING_AUDIO_TIMEOUT,
} from '../../shared/constants';
import {
  checkContainerSize, playAudio, setLSclicks, setLScorrect, setLSwrong,
} from '../../shared/helpers';
import { CardsField } from '../card-field/cards-field';
import { Card } from '../cards/card';
import { CreateStar } from '../stars/stars';
import { Stars } from '../stars/starsContainer';

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private counter: number;

  private mistakes: number;

  private audioArray: string[];

  private wordsArray: string[];

  constructor() {
    super('div', ['game']);
    this.element.id = 'game';
    this.element.innerHTML = `
    <div class="start-game-btn hidden-btn" id="start-game-btn">
      <button class="btn" id="btn"></button>
     </div>`;
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
    this.audioArray = [];
    this.counter = 0;
    this.mistakes = 0;
    this.wordsArray = [];
  }

  newGame(images: string[]): void {
    this.changeGameMode(images);
  }

  cardsFlip = (event: MouseEvent, card: Card): void => {
    const target = event.target as HTMLElement;
    if (target.dataset.rotate === 'rotate') {
      card.element.classList.remove('roll-button');
      card.element.classList.add('front-rotate');
      card.element.addEventListener('mouseleave', () => {
        if (card.element.classList.contains('front-rotate')) {
          card.element.classList.remove('front-rotate');
        }
      });
      return;
    }
    const audio = target.dataset.letter;
    setLSclicks(audio.split('/')[1]);
    playAudio(`./audio/${audio}.mp3`);
  };

  startTrainMode(images: string[]):void {
    const cards = images
      .map((url) => new Card(url));
    cards.forEach((card) => {
      card.element.addEventListener('click', (event) => this.cardsFlip(event, card));
    });
    this.cardsField.addCards(cards);
  }

  startGameMode(images: string[]):void {
    const category = images[0].split('/')[0];
    const cards = images
      .map((url) => new Card(url));
    this.cardsField.addCards(cards);
    const startBtn: HTMLElement = document.getElementById('btn');
    startBtn.addEventListener('click', () => {
      this.gameCategories(category);
    }, { once: true });
    const starContainer = new Stars(this.element);
    starContainer.render();
  }

  async gameCategories(category: string): Promise<void> {
    const response: Response = await fetch('./imageaudio.json');
    const audio: AudioCategoryModel[] = await response.json();
    const audioArrayCategory: string[] = [];
    audioArrayCategory.push(category);
    const audioIndex = audioPath[audioArrayCategory[0]];
    this.audioArray = audio[audioIndex].audio.map((name: string) => `${audio[audioIndex].category}/${name}`)
      .sort(() => Math.random() - MATH_RANDOM);
    this.startGame();
  }

  startGame(): void {
    const getCardsField = document.getElementById('cards-field');
    getCardsField.addEventListener('click', async (event) => {
      this.checkTarget(this.audioArray, event);
    });
    this.gameStep();
  }

  gameStep(): void {
    if (this.counter === this.audioArray.length) {
      this.results();
      return;
    }
    setTimeout(() => {
      playAudio(`./audio/${this.audioArray[this.counter]}`);
    }, PLAYING_AUDIO_TIMEOUT);
    const startBtn: HTMLElement = document.getElementById('btn');
    startBtn.classList.add('repeat');
    startBtn.addEventListener('click', () => { playAudio(`./audio/${this.audioArray[this.counter]}`); });
    const word = this.audioArray[this.counter].slice(0, -4);
    this.wordsArray.push(word);
  }

  checkTarget(audioArray: string[], e: MouseEvent): void {
    const starContainer = document.getElementById('star-container');
    const audioArrayElement = audioArray[this.counter].split('/')[1].split('.')[0];
    const target = e.target as HTMLElement;
    const targetDataset = target.dataset.letter.split('/')[1];
    if ((target as HTMLElement).classList.contains('hidden-img')) {
      return;
    }
    if (targetDataset === audioArrayElement) {
      (target as HTMLElement).classList.add('hidden-img');
      this.counter++;
      playAudio('./audio/yes.mp3');
      checkContainerSize();
      const star = new CreateStar(starContainer);
      star.Star();
      setLScorrect(this.wordsArray[this.wordsArray.length - 1].split('/')[1]);
      this.gameStep();
    } else {
      playAudio('./audio/no.mp3');
      this.mistakes++;
      checkContainerSize();
      const star = new CreateStar(starContainer);
      star.emptyStar();
      setLSwrong(this.wordsArray[this.wordsArray.length - 1].split('/')[1]);
    }
  }

  changeGameMode(images: string[]): void {
    const btn = document.getElementById('start-game-btn');
    const element = document.getElementById('checkbox') as HTMLInputElement;
    if (btn.classList.contains('start-game-btn')) {
      btn.classList.remove('hidden-btn');
    }
    if (!element.checked) {
      this.startTrainMode(images);
      const description = document.querySelectorAll('[data-description="description"]');
      if (btn.classList.contains('start-game-btn')) {
        btn.classList.add('hidden-btn');
      }
      for (let i = 0; i < description.length; i++) {
        description[i].classList.remove('hidden-description');
      }
    } else {
      this.startGameMode(images);
      const description = document.querySelectorAll('[data-description="description"]');
      for (let i = 0; i < description.length; i++) {
        description[i].classList.add('hidden-description');
      }
    }
  }

  results(): void {
    if (this.mistakes < 1) {
      setTimeout(() => {
        playAudio('./audio/super.mp3');
      }, PLAYING_AUDIO_TIMEOUT);
      const wins: HTMLElement = document.createElement('div');
      wins.classList.add('victory-block');
      this.element.appendChild(wins);
      wins.innerHTML = `
        <p class="win-block"><img class="super"></p>
      `;
      setTimeout(() => {
        wins.remove();
        const startPage = window.location.pathname;
        document.location.assign(`${startPage}#/`);
      }, ENDGAME_BLOCK_TIMEOUT);
    } else {
      setTimeout(() => {
        playAudio('./audio/bad.mp3');
      }, PLAYING_AUDIO_TIMEOUT);
      const bad: HTMLElement = document.createElement('div');
      bad.classList.add('victory-block');
      this.element.appendChild(bad);
      bad.innerHTML = `
        <p class="win-block"><img class="bad"></p>
        <p class="mistakes">you have ${this.mistakes} mistakes</p>
      `;

      setTimeout(() => {
        bad.remove();
        const startPage = window.location.pathname;
        document.location.assign(`${startPage}#/`);
      }, ENDGAME_BLOCK_TIMEOUT);
    }
  }
}
