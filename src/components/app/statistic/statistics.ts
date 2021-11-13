import { BaseComponent } from '../../base-component';
import {
  createElem, createNewElement, resetLocalStorage,
} from '../../shared/helpers';

export class Statistic extends BaseComponent {
  private readonly root: HTMLElement;

  private countName: number;

  constructor(root: HTMLElement) {
    super('div', ['statistic']);
    this.root = root;

    this.countName = 0;
  }

  render(): void {
    this.root.appendChild(this.element);
    this.element.innerHTML = `
    <div class="statistic-btns">
      <button class="reset" id="reset">Reset</button>
    </div>
    <div class="statistic-table">
      <div class="word stat" id="word">Word</div>
      <div class="translation stat" id="translation">Translation</div>
      <div class="category stat" id="category">Category</div>
      <div class="clicks stat" id="clicks">Clicks</div>
      <div class="correct stat" id="correct">Correct</div>
      <div class="mistake stat" id="mistake">Mistakes</div>
      <div class="percent stat" id="percent">%</div>
    </div>
  `;

    const nameArray: string[] = [];
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      JSON.parse(localStorage.getItem(key));
      nameArray.push(key);
    });
    if (this.countName % 2 === 0) {
      nameArray.sort();
    } else nameArray.sort().reverse();
    for (let i = 0; i < nameArray.length; i++) {
      const statElem = createNewElement('div', 'stat-element');
      const response = JSON.parse(localStorage.getItem(nameArray[i]));
      createElem(statElem, response.word, response.translation, response.category,
        response.clicks, response.correct, response.wrong, response.percents);
      this.element.appendChild(statElem);
    }
    const resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', () => {
      resetLocalStorage();
      this.element.innerHTML = '';
      this.render();
    });
  }
}
