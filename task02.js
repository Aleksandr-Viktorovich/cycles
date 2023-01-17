'use strict';

const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      alert('Это сложное число');
      return false;
    }
  }
  alert('Это простое число');
}

isPrime(prompt('Введите число',''));
