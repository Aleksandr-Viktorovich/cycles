'use strict';

const string = (str) => {
  return str.split('').reverse().join('');
}

alert(string(prompt('Напиши!!!', '')));
