'use strict';

//NOTE: documet.querySelector을 쓰면, 일종의 DOM을 쓰는것 (Web API) 이때 message라는 클래스의 내용에 접근하라는 뜻!
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!✨';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
//파라미터 : ( 이벤트 이름, 해야할 일(핸들러))
// 핸들러 : 함수 -> 함수도 결국 value 이므로, parameter에 올 수 있다!!
// EventListner은, 해당 이벤트가 실행될때만 수행된다!
//이벤트 이름도 정해진 것들이 있는 듯 하다.
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
let isGameEnd = false;

//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!isGameEnd) {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No number!';
    } else if (score === 0) {
      document.querySelector('.message').textContent = 'Game Over!';
      isGameEnd = true;
    } else if (guess >= 1 && guess <= 20) {
      if (guess > secretNumber) {
        document.querySelector('.message').textContent = '📉 Too High!';
        score--;
        document.querySelector('.score').textContent = score;
      } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = '📈 Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        if (highScore === 0) {
          highScore = score;
        } else if (highScore < score) {
          highScore = score;
        }
        document.querySelector('.highscore').textContent = highScore;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        isGameEnd = true;
      }
    } else {
      document.querySelector('.message').textContent =
        'put number between 1~20!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;

  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  isGameEnd = false;
});
