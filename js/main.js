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
