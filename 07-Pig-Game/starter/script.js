'use strict';
/*
로직 구현
Roll Dice를 누른다 -> 1~6 사이 랜덤 값이 나온다 -> 랜덤 값이 1이면 Current를 0으로 바꾸고 플레이어를 바꾼다. 1이 아니면 해당 값이 current에 저장된다.

hold 버튼을 누른다 -> Active 된 상태의 current score의 값을 총 점수에 더하고, 다시 0으로 current score을 만들고, 이때 총 점수가 100 이상이면 해당 플레이어가 이겼다는 표시를 하고 게임을 종료한다 ( 배경색 검정) 그렇지 않으면 플레이어를 바꾼다.

new game 버튼을 누른다 -> 모든 점수를 0으로 바꾸고, 배경색을 원상복귀하고, 플레이어 1이 선택되도록 한다.
*/

/*player*/
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

/*Button*/
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');

/*dice*/
const dice = document.querySelector('.dice');

let currentScore0 = 0;
let currentScore1 = 0;
let score0 = 0;
let score1 = 0;

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const scoreText0 = document.getElementById('score--0');
const scoreText1 = document.getElementById('score--1');

/*function*/
const swapPlayer = function () {
  if (player0.classList.contains('player--active')) {
    player1.classList.add('player--active');
    player0.classList.remove('player--active');
  } else {
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  }
};

const getActivePlayer = function () {
  if (player0.classList.contains('player--active')) {
    return 'player0';
  } else {
    return 'player1';
  }
};

let diceNum = 5;
let gameFin = false;

btnRoll.addEventListener('click', function () {
  /* 주사위 굴려서 그림 + 변수 반영*/
  if (!gameFin) {
    diceNum = Math.trunc(Math.random() * 6 + 1);
    let diceString = 'dice-' + String(diceNum) + '.png';
    dice.src = diceString;

    if (diceNum === 1) {
      if (getActivePlayer() === 'player0') {
        currentScore0 = 0;
        current0.textContent = 0;
      } else {
        currentScore1 = 0;
        current1.textContent = 0;
      }
      swapPlayer();
    }

    if (getActivePlayer() === 'player0') {
      currentScore0 += diceNum;
      current0.textContent = currentScore0;
    } else {
      currentScore1 += diceNum;
      current1.textContent = currentScore1;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (!gameFin) {
    if (getActivePlayer() === 'player0') {
      score0 += currentScore0;
      scoreText0.textContent = score0;
      currentScore0 = 0;
      current0.textContent = 0;
      if (score0 >= 100) {
        player0.classList.add('player--winner');
        gameFin = true;
      }
    } else {
      score1 += currentScore1;
      scoreText1.textContent = score1;
      currentScore1 = 0;
      current1.textContent = 0;
      if (score1 >= 100) {
        player1.classList.add('player--winner');
        gameFin = true;
      }
    }
    swapPlayer();
  }
});

btnNewGame.addEventListener('click', function () {
  score0 = 0;
  scoreText0.textContent = 0;
  score1 = 0;
  scoreText1.textContent = 0;
  currentScore0 = 0;
  currentScore1 = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  gameFin = false;
  if (getActivePlayer() === 'player0') {
    player0.classList.remove('player--winner');
  } else {
    player1.classList.remove('player--winner');
  }

  player0.classList.add('player--active');
  player1.classList.remove('player--active');
});
