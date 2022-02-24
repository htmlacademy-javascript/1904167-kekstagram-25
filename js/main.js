function getRandomInteger(min, max) {
  if(min >= 0 && max >= min) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  } else {
    return 'Invalid Input Parameters';
  }
}

getRandomInteger(0, 10);

function checkMaxStringLength(userComment, MAX_LENGTH) {
  if(userComment <= MAX_LENGTH) {
    return true;
  } else {
    return false;
  }
}

checkMaxStringLength(30, 140);
