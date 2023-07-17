/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById

// const message = document.getElementById('message'); // 성능상으로는 좀 빠르지만 크게 차이는 안남
// const message = document.getElementsByClassName('first');

// document.querySelector('.first');

// console.log(message);

// message.textContent = 'aa';

// el, els


getNode('.first'); // <span class = "first"></span>

const first = getNode('.first');
const span = getNodes('span');

console.log(span);


// const first = document.querySelector('.first');
// const [firstSpan, secondSpan] = document.querySelectorAll('span');

// console.log(first);
// console.log(firstSpan);
// console.log(secondSpan);

// 옛날 코드
// - getElementsByTagName
// - getElementsByClassName

// - querySelector
// - querySelectorAll
// - closest

console.log(first.closest('h1')); // 내 위의 부모와 가장 인접한 것을 찾음, event delegation(이벤트 위임)에서 많이 사용

/* 문서 대상 확인 */
// - matches

// 선택자 안에 claass | id 를 가지고 있는 대상이 있어?
console.log(first.matches('#message'));

// - contains
// 선택자의 자식들 중에 해당 element가 있어?
// console.log(first.contains(''));

// 클래스를 포함하고 있어?
// node.classList.contains()