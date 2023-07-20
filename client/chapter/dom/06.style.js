/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

// console.log(first.className = 'box second'); // setter
console.log(first.className); // getter
// console.log(first.className = 'second'); // setter

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// add
// remove
// toggle
// contains

first.classList.add('hello');
first.classList.remove('hello'); // ()만 있으면 아무일도 안일어남, ''이나 ' '넣으면 오류, 정확하게 적어주기
first.classList.toggle('is-active'); // boolean값 반환

console.log(first.classList.contains('hello')); // hello 클래스가 았는지 없는지 확인 후 boolean값 반환


addClass('.first', 'hello');
// removeClass('.first');

// attr(first, 'class', ' ');

/* 스타일 변경 방법 --------------------------------------------------------- */

first.style.backgroundColor = 'orange'; // setter
// console.log(first.style.backgroundColor); // getter, setter가 없으면 결과가 안나옴



// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

// getter의 역할을 할 수 있음
console.log(getComputedStyle(first).fontSize); // 기본적으로 적용되어있는 스타일을 가져옴
console.log(getComputedStyle(first).getPropertyValue('font-size')); // 위 코드를 더 명시적으로 표시



setCss('.first', 'color', '#fff');
getCss('.first', 'color');