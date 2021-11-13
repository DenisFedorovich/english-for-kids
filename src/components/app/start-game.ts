import { Game } from './game/game';
import { ImageCategoryModel } from '../../models/image-category-model';
import { imagesPath } from '../shared/constants';

export class StartGame {
  private readonly game: Game;

  private text: string[];

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.rootElement.appendChild(this.game.element);
    this.text = [];
  }

  async start(): Promise<void> {
    const response: Response = await fetch('./image.json');
    const currentUrl: string = window.location.hash.slice(2, -1);
    const categories: ImageCategoryModel[] = await response.json();
    const imageIndex = imagesPath[currentUrl];
    const images = categories[imageIndex].images.map(
      (name) => `${categories[imageIndex].category}/${name}`,
    );
    this.game.newGame(images);
  }
}
