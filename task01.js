'use strict';


for (let number = 1; number <= 10; number++ ) {
  console.log('......................................');
  for (let degree = 1; degree <= 10; degree++) {
    const res = `${number} во ${degree} степени= ${number ** degree}`;
    console.log(res)
  }
}
