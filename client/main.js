import { attr, clearContents, diceAnimation, endScroll, getNode, getNodes, insertLast } from "./lib/index.js";


// [phase-1] 주사위 굴리기
// 1. dice animation 불라오기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation이 실행될 수 있도록
//       - 주사위 굴리기 버튼을 가져온다.
//       - 이벤트 핸들러를 연결한다.
//       - 애니메이션 코드를 작성한다.
// 3. 애니메이션 토글 제어 
// 4. 클로저 + IIFE 를 사용한 변수 보호


// [phase-2] 레코드 리스트 control / view
// 1. 주사위가 멈추면 기록/초기화 버튼 활성화
// 2. hidden 속성 제어하기
//    - 기록 버튼 이벤트 바인딩
//    - hidden 속성 false 만들기
// 3. 주사위 값을 가져와서 랜더링

// [phase-3] 초기화 시키기
// 1. 아이템 지우기

// 진짜 진짜 쉬운 과제
// disableElement(node)
// enableElement(node)
// isDisableState(node) => true / false

// visibleElement(node)
// invisibleElement(node)
// isVisibleState(node) => true / false


// 배열 구조 분해 할당
// getNodes로 buttonGroup의 button들을 배열로 받아와 하나씩 넣어주기
const [startButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');
const tbody = getNode('.recordList tbody');


let count = 0;
let total = 0;

function createItem(value) {
  // 뿌려줄 템플릿 만들기
  return /* html */`
  <tr>
    <td>${++count}</td>
    <td>${value}</td>
    <td>${total += value}</td>
  </tr>
  `
}

function renderRecordItem() {
    // 큐브의 data-dice값만 가져오기
    const diceValue = +attr('#cube', 'data-dice');
  
    insertLast(tbody, createItem(diceValue));

    endScroll(recordListWrapper);
}


const handleRollingDice = ((e) => {

  let isClicked = false;
  let stopAnimation;

  // 클로저
  return () => {
    if(!isClicked) { // 주사위 play
      stopAnimation = setInterval(diceAnimation, 100); // setInterval이 고유한 아이디 반환
      recordButton.disabled = true; // 활성화시키기
      resetButton.disabled = true;

    } else { //주사위 stop
      clearInterval(stopAnimation); // clearInterval은 고유한 아이디를 넣어야 해당 인터벌을 지울 수 있음.
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked;
  }
})(); // 즉시 실행 함수
// addEventListener('click', handleRollingDice()); 이렇게 사용할 수 있지만 꼬리자르기(깔끔하게)하려고 사용


// 회차 늘어날 수 있도록
// diceValue 들어갈 수 있도록
// total 값이 나올 수 있도록

function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItem();
}

function handleReset() {
  recordListWrapper.hidden = true;
  recordButton.disabled = true;
  resetButton.disabled = true;

  clearContents(tbody); // 리스트 내용 없어짐

  // 내용이 없어져도 값은 남아있어서 따로 초기화
  count = 0;
  total = 0;
}


startButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);