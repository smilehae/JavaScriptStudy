'use strict';

const ShowModal = function () {
  document.querySelector('.modal').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
};

const AddHiden = function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
};

//이렇게 하면 이 클래스의 첫번째 요소한테만 적용된다!
//document.querySelector('.show-modal').addEventListener('click', ShowModal);

//여러 항목에 접근하려면 querySelectorAll 사용
let showModalBtns = document.querySelectorAll('.show-modal');

for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener('click', ShowModal);
}

document.querySelector('.close-modal').addEventListener('click', AddHiden);

let mainSpace = document.querySelector('html');
mainSpace.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    AddHiden();
  }
});
