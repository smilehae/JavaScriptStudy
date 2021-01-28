
// ///////////////////////////////
// // use strict 사용
// 'use strict'; // 가장 위에 써야함!
// //accidental error 을 막아줌. ( 에러를 만드는 특정 일들을 못하게 막음) + 에러 보여줌

// function logger() {
//     console.log(' My name is mihae');
// }

// logger();
// logger();
// logger();

// //////////////////////////////////////////////////
// 함수 선언 : function Declaration & Finction expresson
//const age1 = calcAge1(1999); //가능
//const age2 = calcAge2(1999); //불가능

// //function Declaration : 일반적으로 사용하는 방식!
// function calcAge1(birthYear) {
//     return 2021 - birthYear;
// }

// //function expression! : 변수에 anonymous 함수 저장
// const calcAge2 = function (birthYear) {
//     return 2021 - birthYear;
// }

// //두 함수의 사용 방식은 같다.
// const age1 = calcAge1(1999);
// const age2 = calcAge2(1999);
// console.log(age1, age2);

// //두 함수의 차이는, 선언 전에 해당 함수를 사용할 수 있는지에 따라 달라진다.
// //Fucntion Declare은 사용 가능, function expression은 불가능

// //////////////////////////////////////////

// //Arrow function : return 함수를 안써도 되도록 줄여준다.
// const calcAge3 = birthYear => 2021 - birthYear;

// const age3 = calcAge3(1999);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }


// console.log(yearsUntilRetirement(1999, 'mihae'));

////////////////////////////////////////////
// // coding Challenge 1
// let Dolphins1 = 44, Dolphins2 = 23, Dolphins3 = 71;
// let Koalas1 = 65, Koalas2 = 54, Koalas3 = 49;

// Dolphins1 = 85, Dolphins2 = 54, Dolphins3 = 41;
// Koalas1 = 23, Koalas2 = 34, Koalas3 = 27;

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const avgDolhins = calcAverage(Dolphins1, Dolphins2, Dolphins3);

// const avgKoalas = calcAverage(Koalas1, Koalas2, Koalas3);

// const checkWinner = function (DolphinAvg, KoalasAvg) {
//     if (DolphinAvg >= KoalasAvg * 2) {
//         console.log(`Dolphins win (${DolphinAvg} vs. ${KoalasAvg})`);
//     }
//     else if (KoalasAvg >= DolphinAvg * 2) {
//         console.log(`Koalas win ( ${KoalasAvg} vs. ${DolphinAvg} )`);
//     }
//     else {
//         console.log('no one wins...');
//     }
// }

// console.log(checkWinner(avgDolhins, avgKoalas));

////////////////////////////////////////////
//ARRAY

// //보편적인 방법
// const friends = ['Mihae', 'Pyun', 'Jonghae'];
// console.log(friends);
// console.log(friends[2]);
// console.log(friends.length);

// const newFriend = new Array('Mihee', 'Pyun', 'Jonghae');
// console.log(newFriend);

// const firstName = 'Mihae';
// const mihae = [firstName, 'Pyun', 2021 - 1999, 'student', friends];
// console.log(mihae);


// const years = [1999, 1967, 2018];

// const calcAge = birthYear => 2021 - birthYear;

// console.log(calcAge(years[1]));
// // /////////////////////////////////////
// // ARRAY METHOD
// const friends = ['Mihae', 'Juhyun'];
// //push를 하면 하나 추가

// const newLength = friends.push('JiHyun');
// console.log(newLength); // push 메소드는 총 배열의 갯수 반환

// const popElement = friends.pop(); //뒤쪽 요소 삭제
// console.log(popElement); //pop된 element 저장함
// console.log(friends);

// friends.shift();
// console.log(friends); //앞쪽 요소 삭제

// console.log(friends.indexOf('Juhyun'));
// //값이 있을때는, 위치의 index 반환, 없으면 -1 반환

// //ES6에서 추가된 것. array에 존재하면 true 리턴, 없으면 false 리턴
// console.log(friends.includes('Juhyun'));
// console.log(friends.includes('23'));


////////////////////////////////
//Coding Challenge2

let biil = 100;

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        tip = 0.15 * bill;
    }
    else {
        tip = 0.2 * bill;
    }
    return tip;
}

let bills = new Array(125, 555, 44);
let tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));

let totals = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);

console.log(totals);

