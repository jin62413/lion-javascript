/* ---------------------------------- class --------------------------------- */

function addClass(node, className) {
  if(typeof node === 'string') node = getNode(node);

  if(typeof className !== 'string') {
    throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입이어야 합니다.')
  }

  node.classList.add(className);
}

// removeClass
function removeClass(node, className) {
  if(typeof node === 'string') node = getNode(node);

  // 이게 className이 string인지 판단하는 함수보다 아래에 있으면 실행이 안된다.
  if(!className) {
    node.className = '';
    return;
  };

  if(typeof className !== 'string') {
    throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입이어야 합니다.')
  }

  node.classList.remove(className);
}

// toggleClass
const toggleClass = (node, className) => {
  if(typeof node === 'string') node = getNode(node);

  if(typeof className !== 'string') {
    throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입이어야 합니다.')
  }

  return node.classList.toggle(className);
}

/* ----------------------------------- css ---------------------------------- */

function setCss(node, prop, value) {
  if(typeof node === 'string') node = getNode(node);

  // key in ... 객체 안에 키 값이 있는지 확인하는 방법
  // body의 style에 prop값이 있는지 확인
  if(!(prop in document.body.style)) {
    throw new SyntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }

  if(!value) throw new SyntaxError('setCss 함수의 세 번째 인수는 필수값 입니다.');
  
  node.style[prop] = value;
}

// getCss
function getCss(node, prop) {
  if(typeof node === 'string') node = getNode(node);

  // key in ... 객체 안에 키 값이 있는지 확인하는 방법
  // body의 style에 prop값이 있는지 확인
  if(!(prop in document.body.style)) {
    throw new SyntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }
  
  return getComputedStyle(node).getPropertyValue(prop);
}

const css = (node, prop, value) => {
  return !value ? getCss(node, prop) : setCss(node, prop, value);
}

