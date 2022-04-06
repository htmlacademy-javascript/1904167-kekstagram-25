const MAX_LENGTH = 140;

function checkMaxStringLength (string, maxLength) {
  return string.length <= maxLength;
}

checkMaxStringLength('Всем привет!', MAX_LENGTH);


const getRandomPositiveInteger = (minNum, maxNum) => {
  const lower = Math.ceil(Math.min(Math.abs(minNum), Math.abs(maxNum)));
  const upper = Math.floor(Math.max(Math.abs(minNum), Math.abs(maxNum)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

export {getRandomArrayElement};
export {getRandomPositiveInteger};
