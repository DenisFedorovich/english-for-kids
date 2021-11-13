import { Component } from './component';
import { Header } from './app/header/header';
import { Main } from './app/main';
import { Footer } from './app/footer/footer';
import { Mode } from './app/btnMode/mode';
import { MainPage } from './app/mainPage/main-page';
import {
  CategoryNames, appRoutes, Cards,
} from './shared/constants';
import { Statistic } from './app/statistic/statistics';
import { Block } from './app/block/block';

export class AppBlock implements Component {
  private readonly page: HTMLElement;

  private readonly modeBtn: HTMLElement;

  private readonly body: HTMLElement;

  constructor(private readonly root: HTMLElement | null) {
    this.page = document.createElement('div');
    this.page.classList.add('app-block');
    this.modeBtn = new Mode(this.page).render();
    this.body = new Main(this.page).render();
  }

  render(): HTMLElement {
    this.root.appendChild(this.page);
    const header = new Header(this.page).render();
    this.page.appendChild(header);
    header.appendChild(this.modeBtn);
    this.page.appendChild(this.body);
    this.page.appendChild(new Footer(this.page).render());
    const checkboxElement = document.getElementById('checkbox');
    checkboxElement.addEventListener('change', () => this.changeGameMode());
    return this.page;
  }

  changeGameMode(): void {
    const linkHome = window.location.hash;
    if (linkHome === '#stat/') {
      this.page.innerHTML = '';
      const newStat = new Statistic(this.page);
      newStat.render();
      return;
    }
    this.router();
  }

  router(): void {
    const currentUrl: string = window.location.hash.slice(1);
    this.body.innerHTML = '';
    const getUrl = appRoutes[currentUrl];
    const mainActive: HTMLElement = document.getElementById('main-page-active');
    const animalsActive: HTMLElement = document.getElementById('animals-active');
    const clothesActive: HTMLElement = document.getElementById('clothes-active');
    const emotionActives: HTMLElement = document.getElementById('emotions-active');
    const actionsActive: HTMLElement = document.getElementById('actions-active');
    const proffesionsActive: HTMLElement = document.getElementById('proffesions-active');
    const animals2Active: HTMLElement = document.getElementById('animals2-active');
    const actions2Active: HTMLElement = document.getElementById('actions2-active');
    const fruitsActive: HTMLElement = document.getElementById('fruits-active');

    if (getUrl === Cards.CardAnimals) {
      new Block(this.body).render();
      animalsActive.classList.add(CategoryNames.Active);
    } else {
      animalsActive.classList.remove(CategoryNames.Active);
    }
    if (getUrl === Cards.CardClothes) {
      new Block(this.body).render();
      clothesActive.classList.add(CategoryNames.Active);
    } else {
      clothesActive.classList.remove(CategoryNames.Active);
    }
    if (getUrl === Cards.CardEmotions) {
      new Block(this.body).render();
      emotionActives.classList.add(CategoryNames.Active);
    } else {
      emotionActives.classList.remove(CategoryNames.Active);
    }
    if (getUrl === Cards.CardActions) {
      new Block(this.body).render();
      actionsActive.classList.add(CategoryNames.Active);
    } else {
      actionsActive.classList.remove(CategoryNames.Active);
    }
    if (getUrl === Cards.CardProffesions) {
      new Block(this.body).render();
      proffesionsActive.classList.add(CategoryNames.Active);
    } else {
      proffesionsActive.classList.remove(CategoryNames.Active);
    }
    if (getUrl === Cards.CardAnimals2) {
      new Block(this.body).render();
      animals2Active.classList.add(CategoryNames.Active);
    } else {
      animals2Active.classList.remove(CategoryNames.Active);
    }
    if (getUrl === Cards.CardActions2) {
      new Block(this.body).render();
      actions2Active.classList.add(CategoryNames.Active);
    } else {
      actions2Active.classList.remove(CategoryNames.Active);
    }
    if (getUrl === Cards.CardFruits) {
      new Block(this.body).render();
      fruitsActive.classList.add(CategoryNames.Active);
    } else {
      fruitsActive.classList.remove(CategoryNames.Active);
    }
    if (getUrl === Cards.Main) {
      new MainPage(this.body).render();
      mainActive.classList.add(CategoryNames.Active);
    } else {
      mainActive.classList.remove(CategoryNames.Active);
    }
    if (getUrl === Cards.Stat) {
      new Statistic(this.body).render();
      mainActive.classList.add(CategoryNames.Active);
    } else {
      mainActive.classList.remove(CategoryNames.Active);
    }
  }
}
