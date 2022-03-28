function getRandomInteger(min, max) {
  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  } else {
    return 'Invalid Input Parameters';
  }
}

getRandomInteger(0, 10);

const MAX_LENGTH = 140;

function checkMaxStringLength (string, maxLength) {
  return string.length <= maxLength;
}

checkMaxStringLength('Всем привет!', MAX_LENGTH);

const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const URL = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
];

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

const LIKES = [];

const COMMENTS = [];

const AVATARS = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
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

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

const getComment = () => {
  return {
    id: '',
    avatar: getRandomArrayElement(AVATARS),
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

const getPhotoDescription = () => {
  return {
    id: getRandomArrayElement(ID),
    url: getRandomArrayElement(URL),
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: '',
    comments: getRandomArrayElement(COMMENTS),
  };
};

const photosDescription = Array.from({length: 25}, getPhotoDescription);

console.log(photosDescription);
