//Coding Challenge 4

// value가 50~300 rkdlaus 15%, 아니면 20% 팁

let bill = 430;

let tip = bill <= 300 ? bill >= 50 ? bill * 0.15 : bill * 0.2 : bill * 0.2;

tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

let desp = `The bill was ${bill}, the tip was ${tip}, and the total value ` + (bill + tip);

console.log(desp);