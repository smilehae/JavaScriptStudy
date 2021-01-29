// Remember, we're gonna use strict mode in all scripts now!
//Develper Skills : Code Challenge 1
'use strict';

let data = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];

const printForecase = function (arr) {
  let temp = [];
  let dataString = '';
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
    dataString += `...${arr[i]}°C in ${i + 1} days`;
  }
  return dataString + '...';
};

console.log(printForecase(data));
console.log(printForecase(data2));
