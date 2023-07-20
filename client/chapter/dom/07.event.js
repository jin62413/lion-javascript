/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// html에서 실행()
// 2. DOM 프로퍼티 : element.onclick = handler
// javascript에서는 누를 때 실행되도록 해서 실행이 필요 없음
// html에 onclick 프로퍼티가 하나밖에 없기 때문에 여러개의 핸들러를 할당할 수 없다.
// 3. 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener
// 이벤트를 많이 사용하면 컴퓨터에 부하가 올 수 있다. 사용하고나면 제거하는게 좋다.

// const first= getNode('.first');

// function handler() {
//   // console.log('HTML 속성에서 이벤트를 실행합니다.');
//   // console.log('DOM 프로퍼티에서 이벤트를 실행합니다.');
// }

// first.onclick = handler;

// function handelClick() {
//   // console.log('이벤트 메서드를 호출합니다.');
// }

// click, mousemove, mouseover, mouseout, mousedown, mouseup

// first.addEventListener('click', handelClick);
// const remove = bindEvent('.first', 'click', handler);

// setTimeout(() => {
//   // first.removeEventListener('click', handelClick);
//   remove();

// }, 3000);

// first.addEventListener('click', handelClick);

// 이벤트 객체(event object)
// 이벤트가 발생하면 브라우저는 자동으로 이벤트 객체라는 것을 만든다.
// 객체에 이벤트에 관한 상세한 정보를 넣고, 핸들러의 인수로 형태를 전달한다.

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClick(e) {
  // console.log(this);
  // console.log(e.target); // this === target
  // console.log(e.offsetX, e.offsetY); // 마우스로 클릭한 대상의 범위에서 x, y 좌표 값

  let x = e.offsetX;
  let y = e.offsetY;

  ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px,${y - (ball.offsetHeight / 2)}px)`;
}

function debounce(callback, limit = 100) {
  let timeout
  return function(...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
          callback.apply(this, args)
      }, limit)
  }
}

// 0.1초마다 이벤트 생성, 마우스가 움직일 때마다 함수가 실행되면 과부하
function throttle(callback, limit = 100) {
  let waiting = false
  return function() {
      if(!waiting) {
          callback.apply(this, arguments)
          waiting = true
          setTimeout(() => {
              waiting = false
          }, limit)
      }
  }
}


ground.addEventListener('click', handleClick);


// throttle debounce

ground.addEventListener('mousemove',debounce((e)=>{
  let x = e.offsetX;
  let y = e.offsetY;

  let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
  `

  insertLast(ground,template)
}));
