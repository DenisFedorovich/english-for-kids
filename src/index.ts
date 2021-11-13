import './style/main.scss';
import { AppBlock } from './components/appBlock';
import { setStorage } from './components/shared/helpers';

const rootNode: HTMLElement = document.querySelector('#app');
const appBlock = new AppBlock(rootNode);

window.onload = () => {
  const mainLink = window.location.pathname;
  document.location.assign(`${mainLink}#/`);
  appBlock.render();
  appBlock.router();
  setStorage();
};

window.onhashchange = () => {
  appBlock.router();
};
