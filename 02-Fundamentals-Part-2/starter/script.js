
///////////////////////////////

// use strict 사용
'use strict'; // 가장 위에 써야함!
//accidental error 을 막아줌. ( 에러를 만드는 특정 일들을 못하게 막음) + 에러 보여줌

function logger() {
    console.log(' My name is mihae');
}

logger();
logger();
logger();

//////////////////////////////////////////////////

//함수 선언 : function Declaration & Finction expresson
const age1 = calcAge1(1999); //가능
const age2 = calcAge2(1999); //불가능

//function Declaration : 일반적으로 사용하는 방식!
function calcAge1(birthYear) {
    return 2021 - birthYear;
}

//function expression! : 변수에 anonymous 함수 저장
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

//두 함수의 사용 방식은 같다.
const age1 = calcAge1(1999);
const age2 = calcAge2(1999);
console.log(age1, age2);

//두 함수의 차이는, 선언 전에 해당 함수를 사용할 수 있는지에 따라 달라진다.
//Fucntion Declare은 사용 가능, function expression은 불가능

//////////////////////////////////////////

//Arrow function : return 함수를 안써도 되도록 줄여준다.
const calcAge3 = birthYear => 2021 - birthYear;

const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}


console.log(yearsUntilRetirement(1999, 'mihae'));

//////////////////////////////////////////

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

//////////////////////////////////////////

ARRAY

//보편적인 방법
const friends = ['Mihae', 'Pyun', 'Jonghae'];
console.log(friends);
console.log(friends[2]);
console.log(friends.length);

const newFriend = new Array('Mihee', 'Pyun', 'Jonghae');
console.log(newFriend);

const firstName = 'Mihae';
const mihae = [firstName, 'Pyun', 2021 - 1999, 'student', friends];
console.log(mihae);


const years = [1999, 1967, 2018];

const calcAge = birthYear => 2021 - birthYear;

console.log(calcAge(years[1]));

// /////////////////////////////////////

// ARRAY METHOD
const friends = ['Mihae', 'Juhyun'];
//push를 하면 하나 추가

const newLength = friends.push('JiHyun');
console.log(newLength); // push 메소드는 총 배열의 갯수 반환

const popElement = friends.pop(); //뒤쪽 요소 삭제
console.log(popElement); //pop된 element 저장함
console.log(friends);

friends.shift();
console.log(friends); //앞쪽 요소 삭제

console.log(friends.indexOf('Juhyun'));
//값이 있을때는, 위치의 index 반환, 없으면 -1 반환

//ES6에서 추가된 것. array에 존재하면 true 리턴, 없으면 false 리턴
console.log(friends.includes('Juhyun'));
console.log(friends.includes('23'));


//////////////////////////////

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

///////////////////////////////////////////////////

//Object

// array는 [] 로 접근하며, index로만 접근하며 각 인덱스마다 이름을 정해줄 수 없다. 따라서 순서가 중요하다.

//Object 는 {}로 접근하며, key:value 값으로 접근한다. 각 인덱스마다 이름을 정해줄 수 있어 순서는 상관이 없고, 해당 요소들을 property라고 한다.

//객체 생성
const jonas = {
    firstName: 'Mihae',
    lastName: 'Pyun',
    age: 2021 - 1999,
    job: 'student',
    friends: ['me', 'juHyun']
};

console.log(jonas);

//객체의 요소 사용
//객체의 요소에 접근할 때는 . (dot) 으로 접근한다.
console.log(jonas.lastName);
//또는 ['속성명']으로도 접근할 수 있다.
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about mihae? Choose between firstName, lastName, age, job, and friends');

//dot notaion을 쓰려면 실제 값을 바로 넣어줘야하므로, prompt 등에서 스트링으로 받은 것을 사용하려면 branket notation 으로 사용하는 것이 좋다.

if (jonas[interestedIn] === undefined) {
    console.log('You entered wrong value');
}
else {
    console.log(jonas[interestedIn]);
}

//객체에 추가
jonas.location = 'Korea';
jonas['twitter'] = 'none';
console.log(jonas);

//"Mihae has 3 friends, and her best friend is called juhyun"

console.log(jonas.firstName + ' has ' + jonas.friends.length + " friends, and her best friend is called " + jonas.friends[1]);

//////////////////////////////////////
//Object Methods

//Object 안에 함수(메소드) 넣기
const jonas = {
    firstName: 'Mihae',
    lastName: 'Pyun',
    birthYeah: 1999,
    job: 'student',
    friends: ['me', 'juHyun'],
    hasDriversLicense: false,
    //여기는 정의하는 곳이므로, key : value가 필요함.
    // function에 대한 것도 결국 하나의 value에 귀결되므로 여기에 쓸 수 있음!
    calcAge: function () {
        console.log(this); //여기 자체에 객체 들어감
        this.age = 2021 - this.birthYeah; //이렇게 proprety 생성 가능
        return this.age;
    },
    //이렇게 this를 활용하면 좋은게, Object의 이름이 바뀔 수도 있어서! Don't repeat yourself 룰 적용!
    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());

///////////////////////////////////
//Coding Challenge3

const Mark = {
    firstName: 'Mark',
    lastName: 'Miler',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}

const John = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}
Mark.calcBMI();
John.calcBMI();

if (Mark.BMI > John.BMI) {
    console.log(`Mark's BMI(${Mark.BMI}) is higher than John's(${John.BMI})`);
}
else if (Mark.BMI < John.BMI) {
    console.log(`John's BMI(${Jonh.BMI}) is higher than Mark's(${Mark.BMI})`);
}
else {
    console.log(`they both have same BMI(${Mark.BMI})`);
}

//////////////////////////////////////////////

//Loop Iteration

const jonas = ['mihae', 'pyun', 23, 'student', ['me', 'you']];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof (jonas[i]));

    //이 둘다 같은 뜻!
    //types[i] = typeof (jonas[i]);
    types.push(typeof (jonas[i]));
}

console.log(types);

const years = [1975, 1972, 1999];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}

console.log(ages);

console.log("----ONLY STRING----");
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof (jonas[i]));
// }

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof (jonas[i]));
}


///////////////////////////////////////////


//Coding Challenge 4

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function (bill) {
    let tip;

    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
    }
    else {
        tip = bill * 0.2;
    }

    tips.push(tip);
    let total = bill + tip;
    totals.push(total);

}

for (let i = 0; i < 10; i++) {
    calcTip(bills[i]);
}

console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let avg = sum / arr.length;
    return avg;
}

console.log(calcAverage(totals));


