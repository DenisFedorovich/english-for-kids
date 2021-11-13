import {
  Translation, Word, CategoryNames, STAR_BLOCK_LENGTH, ONE_HUNDRED,
} from './constants';
import { Statistics } from './models';

export function playAudio(src: string): void {
  const audio = new Audio();
  audio.preload = 'auto';
  audio.src = src;
  audio.play();
}

export function checkContainerSize(): void {
  const starContainerNum = document.getElementById('star-container').childElementCount;
  if (starContainerNum > STAR_BLOCK_LENGTH) {
    const container = document.getElementById('star-container');
    container.innerHTML = '';
  }
}

export function createObject(word: string, translation: string, category: string): Statistics {
  const objGeneral = {
    word: `${word}`,
    translation: `${translation}`,
    category: `${category}`,
    clicks: 0,
    correct: 0,
    wrong: 0,
    percents: 0,
  };
  return objGeneral;
}

export function setStorage(): void {
  if (localStorage.getItem(Word.Cat) == null) {
    localStorage.setItem(Word.Cat,
      JSON.stringify(createObject(Word.Cat, Translation.Cat, CategoryNames.Animals1)));
  }
  if (localStorage.getItem(Word.Bird) == null) {
    localStorage.setItem(Word.Bird, JSON.stringify(createObject(Word.Bird, Translation.Bird,
      CategoryNames.Animals1)));
  }
  if (localStorage.getItem(Word.Chick) == null) {
    localStorage.setItem(Word.Chick,
      JSON.stringify(createObject(Word.Chick, Translation.Chick, CategoryNames.Animals1)));
  }
  if (localStorage.getItem(Word.Chicken) == null) {
    localStorage.setItem(Word.Chicken, JSON.stringify(createObject(Word.Chicken, Translation.Chicken,
      CategoryNames.Animals1)));
  }
  if (localStorage.getItem(Word.Dog) == null) {
    localStorage.setItem(Word.Dog, JSON.stringify(createObject(Word.Dog, Translation.Dog,
      CategoryNames.Animals1)));
  }
  if (localStorage.getItem(Word.Dolphin) == null) {
    localStorage.setItem(Word.Dolphin, JSON.stringify(createObject(Word.Dolphin, Translation.Dolphin,
      CategoryNames.Animals1)));
  }
  if (localStorage.getItem(Word.Fish) == null) {
    localStorage.setItem(Word.Fish, JSON.stringify(createObject(Word.Fish, Translation.Fish, CategoryNames.Animals1)));
  }
  if (localStorage.getItem(Word.Giraffe) == null) {
    localStorage.setItem(Word.Giraffe, JSON.stringify(createObject(Word.Giraffe, Translation.Giraffe,
      CategoryNames.Animals1)));
  }
  if (localStorage.getItem(Word.Blouse) == null) {
    localStorage.setItem(Word.Blouse, JSON.stringify(createObject(Word.Blouse, Translation.Blouse,
      CategoryNames.Clothes)));
  }
  if (localStorage.getItem(Word.Boot) == null) {
    localStorage.setItem(Word.Boot,
      JSON.stringify(createObject(Word.Boot, Translation.Boot, CategoryNames.Clothes)));
  }
  if (localStorage.getItem(Word.Coat) == null) {
    localStorage.setItem(Word.Coat, JSON.stringify(createObject(Word.Coat, Translation.Coat,
      CategoryNames.Clothes)));
  }
  if (localStorage.getItem(Word.Dress) == null) {
    localStorage.setItem(Word.Dress,
      JSON.stringify(createObject(Word.Dress, Translation.Dress, CategoryNames.Clothes)));
  }
  if (localStorage.getItem(Word.Pants) == null) {
    localStorage.setItem(Word.Pants, JSON.stringify(createObject(Word.Pants, Translation.Pants,
      CategoryNames.Clothes)));
  }
  if (localStorage.getItem(Word.Shirt) == null) {
    localStorage.setItem(Word.Shirt,
      JSON.stringify(createObject(Word.Shirt, Translation.Shirt, CategoryNames.Clothes)));
  }
  if (localStorage.getItem(Word.Shoe) == null) {
    localStorage.setItem(Word.Shoe,
      JSON.stringify(createObject(Word.Shoe, Translation.Shoe, CategoryNames.Clothes)));
  }
  if (localStorage.getItem(Word.Skirt) == null) {
    localStorage.setItem(Word.Skirt,
      JSON.stringify(createObject(Word.Skirt, Translation.Skirt, CategoryNames.Clothes)));
  }
  if (localStorage.getItem(Word.Happy) == null) {
    localStorage.setItem(Word.Happy, JSON.stringify(createObject(Word.Happy, Translation.Happy,
      CategoryNames.Emotions)));
  }
  if (localStorage.getItem(Word.Laugh) == null) {
    localStorage.setItem(Word.Laugh, JSON.stringify(createObject(Word.Laugh, Translation.Laugh,
      CategoryNames.Emotions)));
  }
  if (localStorage.getItem(Word.Sad) == null) {
    localStorage.setItem(Word.Sad, JSON.stringify(createObject(Word.Sad, Translation.Sad,
      CategoryNames.Emotions)));
  }
  if (localStorage.getItem(Word.Scared) == null) {
    localStorage.setItem(Word.Scared,
      JSON.stringify(createObject(Word.Scared, Translation.Scared, CategoryNames.Emotions)));
  }
  if (localStorage.getItem(Word.Smile) == null) {
    localStorage.setItem(Word.Smile,
      JSON.stringify(createObject(Word.Smile, Translation.Smile, CategoryNames.Emotions)));
  }
  if (localStorage.getItem(Word.Surprised) == null) {
    localStorage.setItem(Word.Surprised, JSON.stringify(createObject(Word.Surprised, Translation.Surprised,
      CategoryNames.Emotions)));
  }
  if (localStorage.getItem(Word.Tired) == null) {
    localStorage.setItem(Word.Tired,
      JSON.stringify(createObject(Word.Tired, Translation.Tired, CategoryNames.Emotions)));
  }
  if (localStorage.getItem(Word.Dance) == null) {
    localStorage.setItem(Word.Dance,
      JSON.stringify(createObject(Word.Dance, Translation.Dance, CategoryNames.Emotions)));
  }
  if (localStorage.getItem(Word.Dive) == null) {
    localStorage.setItem(Word.Dive,
      JSON.stringify(createObject(Word.Dive, Translation.Dive, CategoryNames.Actions)));
  }
  if (localStorage.getItem(Word.Fly) == null) {
    localStorage.setItem(Word.Fly,
      JSON.stringify(createObject(Word.Fly, Translation.Fly, CategoryNames.Actions)));
  }
  if (localStorage.getItem(Word.Walk) == null) {
    localStorage.setItem(Word.Walk,
      JSON.stringify(createObject(Word.Walk, Translation.Walk, CategoryNames.Actions)));
  }
  if (localStorage.getItem(Word.Jump) == null) {
    localStorage.setItem(Word.Jump,
      JSON.stringify(createObject(Word.Jump, Translation.Jump, CategoryNames.Actions)));
  }
  if (localStorage.getItem(Word.Hug) == null) {
    localStorage.setItem(Word.Hug,
      JSON.stringify(createObject(Word.Hug, Translation.Hug, CategoryNames.Actions)));
  }
  if (localStorage.getItem(Word.Sad) == null) {
    localStorage.setItem(Word.Sad, JSON.stringify(createObject(Word.Sad, Translation.Sad,
      CategoryNames.Actions)));
  }
  if (localStorage.getItem(Word.Cry) == null) {
    localStorage.setItem(Word.Cry, JSON.stringify(createObject(Word.Cry, Translation.Cry,
      CategoryNames.Actions)));
  }
  if (localStorage.getItem(Word.Draw) == null) {
    localStorage.setItem(Word.Draw,
      JSON.stringify(createObject(Word.Draw, Translation.Draw, CategoryNames.Actions)));
  }
  if (localStorage.getItem(Word.Builder) == null) {
    localStorage.setItem(Word.Builder,
      JSON.stringify(createObject(Word.Builder, Translation.Builder, CategoryNames.Proffesions)));
  }
  if (localStorage.getItem(Word.Doctor) == null) {
    localStorage.setItem(Word.Doctor,
      JSON.stringify(createObject(Word.Doctor, Translation.Doctor, CategoryNames.Proffesions)));
  }
  if (localStorage.getItem(Word.Firefighter) == null) {
    localStorage.setItem(Word.Firefighter,
      JSON.stringify(createObject(Word.Firefighter, Translation.Firefighter,
        CategoryNames.Proffesions)));
  }
  if (localStorage.getItem(Word.Geologist) == null) {
    localStorage.setItem(Word.Geologist,
      JSON.stringify(createObject(Word.Geologist, Translation.Geologist,
        CategoryNames.Proffesions)));
  }
  if (localStorage.getItem(Word.Pilot) == null) {
    localStorage.setItem(Word.Pilot,
      JSON.stringify(createObject(Word.Pilot, Translation.Pilot, CategoryNames.Proffesions)));
  }
  if (localStorage.getItem(Word.Policeman) == null) {
    localStorage.setItem(Word.Policeman,
      JSON.stringify(createObject(Word.Policeman, Translation.Policeman,
        CategoryNames.Proffesions)));
  }
  if (localStorage.getItem(Word.Scientists) == null) {
    localStorage.setItem(Word.Scientists,
      JSON.stringify(createObject(Word.Scientists, Translation.Scientists,
        CategoryNames.Proffesions)));
  }
  if (localStorage.getItem(Word.Teacher) == null) {
    localStorage.setItem(Word.Teacher,
      JSON.stringify(createObject(Word.Teacher, Translation.Teacher, CategoryNames.Proffesions)));
  }
  if (localStorage.getItem(Word.Horse) == null) {
    localStorage.setItem(Word.Horse,
      JSON.stringify(createObject(Word.Horse, Translation.Horse, CategoryNames.Animals2)));
  }
  if (localStorage.getItem(Word.Lion) == null) {
    localStorage.setItem(Word.Lion,
      JSON.stringify(createObject(Word.Lion, Translation.Lion, CategoryNames.Animals2)));
  }
  if (localStorage.getItem(Word.Mouse) == null) {
    localStorage.setItem(Word.Mouse,
      JSON.stringify(createObject(Word.Mouse, Translation.Mouse, CategoryNames.Animals2)));
  }
  if (localStorage.getItem(Word.Pig) == null) {
    localStorage.setItem(Word.Pig,
      JSON.stringify(createObject(Word.Pig, Translation.Pig, CategoryNames.Animals2)));
  }
  if (localStorage.getItem(Word.Rabbit) == null) {
    localStorage.setItem(Word.Rabbit,
      JSON.stringify(createObject(Word.Rabbit, Translation.Rabbit, CategoryNames.Animals2)));
  }
  if (localStorage.getItem(Word.Sheep) == null) {
    localStorage.setItem(Word.Sheep,
      JSON.stringify(createObject(Word.Sheep, Translation.Sheep, CategoryNames.Animals2)));
  }
  if (localStorage.getItem(Word.Frog) == null) {
    localStorage.setItem(Word.Frog, JSON.stringify(createObject(Word.Frog, Translation.Frog,
      CategoryNames.Animals2)));
  }
  if (localStorage.getItem(Word.Turtle) == null) {
    localStorage.setItem(Word.Turtle, JSON.stringify(createObject(Word.Turtle, Translation.Turtle,
      CategoryNames.Animals2)));
  }
  if (localStorage.getItem(Word.Fishing) == null) {
    localStorage.setItem(Word.Fishing, JSON.stringify(createObject(Word.Fishing, Translation.Fishing,
      CategoryNames.Actions2)));
  }
  if (localStorage.getItem(Word.Open) == null) {
    localStorage.setItem(Word.Open, JSON.stringify(createObject(Word.Open, Translation.Open,
      CategoryNames.Actions2)));
  }
  if (localStorage.getItem(Word.Play) == null) {
    localStorage.setItem(Word.Play,
      JSON.stringify(createObject(Word.Play, Translation.Play, CategoryNames.Actions2)));
  }
  if (localStorage.getItem(Word.Point) == null) {
    localStorage.setItem(Word.Point,
      JSON.stringify(createObject(Word.Point, Translation.Point, CategoryNames.Actions2)));
  }
  if (localStorage.getItem(Word.Ride) == null) {
    localStorage.setItem(Word.Ride,
      JSON.stringify(createObject(Word.Ride, Translation.Ride, CategoryNames.Actions2)));
  }
  if (localStorage.getItem(Word.Run) == null) {
    localStorage.setItem(Word.Run, JSON.stringify(createObject(Word.Run, Translation.Run,
      CategoryNames.Actions2)));
  }
  if (localStorage.getItem(Word.Sing) == null) {
    localStorage.setItem(Word.Sing,
      JSON.stringify(createObject(Word.Sing, Translation.Sing, CategoryNames.Actions2)));
  }
  if (localStorage.getItem(Word.Skip) == null) {
    localStorage.setItem(Word.Skip, JSON.stringify(createObject(Word.Skip, Translation.Skip,
      CategoryNames.Actions2)));
  }
  if (localStorage.getItem(Word.Banana) == null) {
    localStorage.setItem(Word.Banana, JSON.stringify(createObject(Word.Banana, Translation.Banana,
      CategoryNames.Actions2)));
  }
  if (localStorage.getItem(Word.Blackberry) == null) {
    localStorage.setItem(Word.Blackberry, JSON.stringify(createObject(Word.Blackberry, Translation.Blackberry,
      CategoryNames.Fruits)));
  }
  if (localStorage.getItem(Word.Blueberry) == null) {
    localStorage.setItem(Word.Blueberry,
      JSON.stringify(createObject(Word.Blueberry, Translation.Blueberry, CategoryNames.Fruits)));
  }
  if (localStorage.getItem(Word.Lime) == null) {
    localStorage.setItem(Word.Lime,
      JSON.stringify(createObject(Word.Lime, Translation.Lime, CategoryNames.Fruits)));
  }
  if (localStorage.getItem(Word.Orange) == null) {
    localStorage.setItem(Word.Orange, JSON.stringify(createObject(Word.Orange, Translation.Orange,
      CategoryNames.Fruits)));
  }
  if (localStorage.getItem(Word.Peach) == null) {
    localStorage.setItem(Word.Peach,
      JSON.stringify(createObject(Word.Peach, Translation.Peach, CategoryNames.Fruits)));
  }
  if (localStorage.getItem(Word.Strawberry) == null) {
    localStorage.setItem(Word.Strawberry,
      JSON.stringify(createObject(Word.Strawberry, Translation.Strawberry, CategoryNames.Fruits)));
  }
  if (localStorage.getItem(Word.Watermelon) == null) {
    localStorage.setItem(Word.Watermelon, JSON.stringify(createObject(Word.Watermelon, Translation.Watermelon,
      CategoryNames.Fruits)));
  }
}

export function resetLocalStorage(): void {
  localStorage.clear();
  setStorage();
}

export const createNewElement = (element: string, ...classes: string[]): HTMLElement => {
  const newElement = document.createElement(element);
  classes.forEach((item) => {
    newElement.classList.add(item);
  });
  return newElement;
};

export const appendChildren = (parent: HTMLElement, ...children: HTMLElement[]): void => {
  children.forEach((item) => {
    parent.appendChild(item);
  });
};
export const createNewTextElement = (element: string, text?: string, ...classes: string[]): HTMLElement => {
  const newElement = document.createElement(element);
  classes.forEach((item) => {
    newElement.classList.add(item);
  });
  newElement.innerText = `${text}`;
  return newElement;
};

export function createElem(root: HTMLElement,
  wordStorage: string,
  translationStorage: string,
  categoryStorage: string,
  clicksStorage: string,
  correctStorage: string,
  wrongStorage: string,
  percents: number): void {
  const word = createNewTextElement('div', `${wordStorage}`, 'word', 'stat');
  const translation = createNewTextElement('div', `${translationStorage}`, 'translation', 'stat');
  const category = createNewTextElement('div', `${categoryStorage}`, 'category', 'stat');
  const clicks = createNewTextElement('div', `${clicksStorage}`, 'clicks', 'stat');
  const correct = createNewTextElement('div', `${correctStorage}`, 'correct', 'stat');
  const mistake = createNewTextElement('div', `${wrongStorage}`, 'mistake', 'stat');
  const percent = createNewTextElement('div', `${percents}`, 'percent', 'stat');
  appendChildren(root, word, translation, category, clicks, correct, mistake, percent);
}

export function setLScorrect(key: string): void {
  const response = JSON.parse(localStorage.getItem(`${key}`));
  response.correct += 1;
  const allAnswers = response.correct / (response.wrong + response.correct);
  response.percents = Math.round(allAnswers * ONE_HUNDRED);
  localStorage.setItem(`${key}`, JSON.stringify(response));
}

export function setLSwrong(key: string): void {
  const response = JSON.parse(localStorage.getItem(`${key}`));
  response.wrong += 1;
  const allAnswers = response.correct / (response.wrong + response.correct);
  response.percents = Math.round(allAnswers * ONE_HUNDRED);
  localStorage.setItem(`${key}`, JSON.stringify(response));
}

export function setLSclicks(key: string): void {
  const response = JSON.parse(localStorage.getItem(`${key}`));
  response.clicks += 1;
  localStorage.setItem(`${key}`, JSON.stringify(response));
}
