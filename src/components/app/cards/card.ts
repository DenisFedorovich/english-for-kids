import { BaseComponent } from '../../base-component';
import { russianWord } from '../../shared/constants';

export class Card extends BaseComponent {
  constructor(readonly image: string) {
    super('div', ['card-container']);
    this.element.dataset.letters = `${this.image.split('/')[1].split('.')[0]}`;
    this.element.innerHTML = `
    <div class="card" id="card">
      <div class="front" id="front" ">
      <div
          class="img-card" data-letter="${this.image.split('.')[0]}"
          style="background-image: url('./images/${this.image}')">
        </div>
        <div class="description " id="description" data-description="description">
          <div class="description-string">
            <div class="description-title">
              ${this.image.split('/')[1].split('.')[0]}
            </div>
            <div class="description-title1">
            ${russianWord.get(`${[this.image.split('/')[1].split('.')[0]]}`)}
            </div>
            <div class="roll-button" data-rotate="rotate"></div>
          </div>
          <div class="description-string">
            <div class="condition-wrapper"></div>
            <div class="condition"></div>
          </div>
        </div>
      </div>

      <div class="back">
          <div
          class="img-card"
        ></div>
        <div class="description">
          <div class="description-string">
            <div class="description-title"></div>
          </div>
          <div class="description-string">
            <div class="condition-wrapper"></div>
            <div class="condition"></div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}
