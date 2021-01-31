'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //변수로 오브젝트를 주는 순간, 바로 deconstructure해서 각각의 값을 전해준다. 단, 이때 해당 속성들이 parameter로 전달받은 object의 이름과 일치해야한다.
  // 아래에 쓴 것 : orderDelivery: function (obj){} -> obj를 인수로 받음
  //따라서 function 다음 괄호에 function ({obj의 변수들을 적는다})

  orderDelivery: function ({
    mainIndex = 0,
    starterIndex = 0,
    time = '20:00',
    address = 'ha',
  }) {
    console.log(
      `Order received!. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta ${ing1}, ${ing2}, ${ing3}`);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
/////////////////////////////////////////////////////
/*
//Desturcutre Object : API 가져올때 유용
//{} 를 사용하며, property를 정확히 쓰는 것이 중요하다.

//property 이름 그대로 사용하기
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//property에 원하는 이름 넣기
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default 값 설정
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutataing variable : 내가 만든 변수에 객체의 특정 값 받기
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
const { a: apple, b: banana } = obj;
console.log(apple, banana);

//nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
/////////////////////////////////////////////
//Destructure array
/*
const arr = [2, 3, 4];
//이렇게 변수를 꺼내오려면, 한개씩 꺼내올 수 밖에 없다.
const a = arr[0];

//이런식으로 destructure 하면, 한번에 여러개를 꺼내올 수 있다.
//단, 이러려면 const로 선언해야 한다.
const [x, y, z] = arr;
console.log(x, y, z);

//이렇게 하면 객체에 있는 내용도 가져올 수 있다.
let [first, second] = restaurant.categories;
console.log(first, second);

//건너뛰기를 할때는 빈칸으로 놔두면 된다(,  ,)
const [, , third, fourth] = restaurant.categories;
console.log(third, fourth);

//두 변수의 값을 바꾸는 방법 1  temp 만들어서 저장 후 변경

// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// //두 변수의 값을 바꾸는 방법 2  temp 없이 [] 이용해서 변경
[first, second] = [second, first];
console.log(first, second);

//객체의 여러 속성의 내용 동시에 가져오기 : 함수 만들어서 배열 리턴
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//배열 안의 배열을 deconstructing 하기 (nested value)
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default 값 설정 : API로 값 가져올때 등에 유용하다고 한다
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

/////////////////////////////////////////////
// Spreading (ES6)

const arr = [7, 8, 9];
// 위 aray 앞에 2개 추가하고 싶어!
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArray = [1, 2, ...arr]; /// ...이 spread operator임.
// arr이라는 것의 요소를 꺼내서 하나씩 일일히 집어넣는다는 뜻.
//여기서 spread operator 을 제거하게 되면, 그냥 [1,2,[7,8,9]]; 이렇게 통째로 들어가버린다.
console.log(...newArray); //1,2,7,8,9 이렇게 나옴!

const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Margeritta'];
console.log(...newMenu);

//spread operator과 destructuring 차이
//spread operator은 element를 array에서 다 꺼내고, 새로운 변수를 만들지 않는다. 따라서 콤마로 구분되어야 하는 곳에만 사용하기 좋다.

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.starterMenu, ...restaurant.starterMenu];
console.log(menu);

//sprea opretator은 iterable 한 것들에만 적용된다. ( array, string, map, set 등. object 제외)
const str = 'jonas';
const letters = [...str, ' ', 's'];
console.log(letters);

const ingredients = [
  prompt(`Let's make pasta! Ingredient 1?`),
  prompt(`Ingredient 2?`),
  prompt(`Ingredient 3?`),
];
//restaurant.orderPasta(ingredients[0],ingredients[1], ingredients[2]) 대신
restaurant.orderPasta(...ingredients);

console.log(ingredients);

//Object에 spread 적용
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Mihae' };
console.log(newRestaurant);
