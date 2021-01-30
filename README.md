## JavaScript 공부 기록

[강의 출처](https://www.udemy.com/course/the-complete-javascript-course/)

[강의 일지](https://www.notion.so/c6534e3c32e548c88d3f9a8ed5462866)

### 현재 공부 기록
Part 1 ✔  
Part 2 ✔  
Part 3 ✔    
Part 4 ✔   
Part 5 (Project 1) ✔   
Part 6 (Project 2) 👀   


# 강의 일지
### CSS 뜯어보고 새로 배운 내용

- Absolute로 위치를 빡 박아놓는 경우도 있다는 것을 알음 ( 타이틀, 다시하기 버튼 등)
- Press Start 2P라는 예쁜 레트로체를 알았다.

```jsx
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');

font-family: 'Press Start 2P', sans-serif;
```

### 내맘대로 짜면서 플젝과 내가 다르게 한 내용 & 이유

- 예제는 1~20 사이의 숫자가 아니라도 Too low, Too high 만 뜬다! 나는 그것도 전부 if문 예외처리 해서 1~20의 수가 아니면,     `Put between 1~20` 이라는 말이 뜨도록 해놓았다!
- 예제는 숫자를 맞춘 뒤에도 숫자넣고 Check 버튼을 누르면 원래의 프로그램대로 작동한다. ( 메시지 값 바뀜) 따라서 `isGameEnd` 라는 bool 변수를 만들어서 게임오버, 또는 답을 맞췄을 때는 더이상 프로그램이 동작하지 않도록 하였다.

### 내맘대로 짜면서 궁금했던 점

- 지금은 `Again` 키를 누르면 `HighScore` 이라는 변수 말고는 전부 재설정 해준다. 이럴거면 다른거는 다 F5를 누른 것처럼 리셋하고, HighScore만 어디에 저장하면 좋을텐데 방법이 없을까?

### 인강듣고 새로 알게된 점

Don't Repeat Yourself Method를 DRY Method 이라고 한다 ㅋㅋ

### **Refactoring**

코드의 메인 로직을 바꾸지 않으면서 반복되는 코드를 없애는 것

**플젝에서의 반영**

- 조건문을 깔끔하게 만들기 ( 중복된 내용 줄이기)
- Random 함수를 이용해서 변수값 만들때, 함수를 만들어서 불러오기 ( 혹시나 에러날 것 대비)
- document.querySelector('클래스이름').textContent 를 통째로 함수로 만들기 —> 가독성 높이기 좋음
