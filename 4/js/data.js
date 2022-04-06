import {getRandomPositiveInteger} from './util.js';

import {getRandomArrayElement} from './util.js';

const DESCRIPTIONS = [
  'Пляж',
  'Указатель дороги на пляж',
  'Море',
  'Девушка на пляже с камерой',
  'Прикольные тарелки с супом',
  'Супер тачка',
  'Завтрак',
  'Виноградный сок',
  'Привет, самолёт',
  'Подставка для обуви',
  'Дорога на пляж',
  'Белый мерседес',
  'Салат с сёмгой',
  'Которолл',
  'Домашние угги',
  'В небе',
  'Песенный хор',
  'Ретро тачка',
  'Тапочки с фонариком',
  'Мы уже здесь',
  'Мой ужин',
  'Провожая закат',
  'Привет, краб',
  'На концерте',
  'Привет, гиппопотам',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Мария',
  'Станислав',
  'Татьяна',
  'Игорь',
  'Валерия',
];

const generateComment = () => {
  const index = getRandomPositiveInteger(1, 6);
  return {
    id: getRandomPositiveInteger(0, 1000),
    avatar: `img/avatar-${index}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

const getComments = () => {
  const count = getRandomPositiveInteger(1, 3);
  return Array.from({length:count}, generateComment);
};

const generatePhotos = (element, index) => {
  const photoId = index + 1;
  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(15, 200),
    comments: getComments(),
  };
};

const photos = () => Array.from({length: 25}, generatePhotos);

export {photos};
