'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModalBtns = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');

const ShowModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const AddHiden = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//이렇게 하면 이 클래스의 첫번째 요소한테만 적용된다!
//document.querySelector('.show-modal').addEventListener('click', ShowModal);

//여러 항목에 접근하려면 querySelectorAll 사용

for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener('click', ShowModal);
}

closeModal.addEventListener('click', AddHiden);

overlay.addEventListener('click', AddHiden);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    AddHiden();
  }
});
