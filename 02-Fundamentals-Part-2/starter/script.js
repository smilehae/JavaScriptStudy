
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
// coding Challenge 1
let Dolphins1 = 44, Dolphins2 = 23, Dolphins3 = 71;
let Koalas1 = 65, Koalas2 = 54, Koalas3 = 49;

Dolphins1 = 85, Dolphins2 = 54, Dolphins3 = 41;
Koalas1 = 23, Koalas2 = 34, Koalas3 = 27;

const calcAverage = (a, b, c) => (a + b + c) / 3;

const avgDolhins = calcAverage(Dolphins1, Dolphins2, Dolphins3);

const avgKoalas = calcAverage(Koalas1, Koalas2, Koalas3);

const checkWinner = function (DolphinAvg, KoalasAvg) {
    if (DolphinAvg >= KoalasAvg * 2) {
        console.log(`Dolphins win (${DolphinAvg} vs. ${KoalasAvg})`);
    }
    else if (KoalasAvg >= DolphinAvg * 2) {
        console.log(`Koalas win ( ${KoalasAvg} vs. ${DolphinAvg} )`);
    }
    else {
        console.log('no one wins...');
    }
}

console.log(checkWinner(avgDolhins, avgKoalas));

