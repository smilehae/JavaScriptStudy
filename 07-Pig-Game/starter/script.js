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

let curScore = 0;

let score = [0, 0];

let activePlayer = 0;

/*function*/
const swapPlayer = function () {
  curScore = 0;
  /*
  if (player0.classList.contains('player--active')) {
    player1.classList.add('player--active');
    player0.classList.remove('player--active');
  } else {
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  }
*/
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  console.log(`Active player is ${activePlayer}`);
};

function getActivePlayer() {
  return activePlayer;
}

let diceNum = 5;
let gameFin = false;

btnRoll.addEventListener('click', function () {
  /* 주사위 굴려서 그림 + 변수 반영*/
  if (!gameFin) {
    diceNum = Math.trunc(Math.random() * 6 + 1);
    let diceString = `dice-${diceNum}.png`;
    dice.src = diceString;

    if (dice.classList.contains('hidden')) {
      dice.classList.remove('hidden');
    }

    if (diceNum === 1) {
      curScore = 0;
      /* querySelector로 설정하는 내용은 어차피 스트링이니까, 여기서 변수 이용하면 된다*/
      document.querySelector(
        `#current--${getActivePlayer()}`
      ).textContent = curScore;

      swapPlayer();
    } else {
      curScore += diceNum;
      document.querySelector(
        `#current--${getActivePlayer()}`
      ).textContent = curScore;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (!gameFin) {
    score[getActivePlayer()] += curScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[getActivePlayer()];

    if (score[getActivePlayer()] >= 100) {
      document
        .querySelector(`.player--${getActivePlayer()}`)
        .classList.add('player--winner');
      gameFin = true;
    }

    curScore = 0;
    document.getElementById(`current--${getActivePlayer()}`).textContent = 0;
    swapPlayer();
  }
});

btnNewGame.addEventListener('click', function () {
  score[0] = 0;
  score[1] = 0;
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;

  curScore = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  gameFin = false;
  if (getActivePlayer() === 0) {
    /*반대로 바꾸는 이유 : 게임오버 이후 한번 swap 됨 */
    player1.classList.remove('player--winner');
  } else {
    player0.classList.remove('player--winner');
  }

  player0.classList.add('player--active');
  player1.classList.remove('player--active');

  dice.classList.add('hidden');
});
