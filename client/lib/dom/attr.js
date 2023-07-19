function getAttr(node, prop) {
  // '.first'.getAttribute('id'); // 문자열을 불러오면 오류
  // 0. 넘어온 대상이 문자인지를 체크
  // 1. 체크 후 element node로 변셩해 줘야함

  if(typeof node === 'string') {
    node = getNode(node);
  }

  return node.getAttribute(prop);
}

function setAttr(node, prop, value) {
  if(typeof node === 'string') {
    node = getNode(node);
  }

  // 전달받은 prop의 타입이 string이 아니라면 Error!

  if(typeof prop !== 'string') {
    throw new Error('setAttr 함수의 두 번째 인자는 문자 타입이어야 합니다.')
  }

  // node[prop]이 없다면 node의 dataset의 값을 받은 값으로 넣어라(아래 dataset의 setter, dataset.[title] = "value")
  // prop에 class가 들어가면 undefined, data-class에 값을 넣게 된다. className으로 들어가야 함
  // prop이 class가 아닐 때만 dataset을 설정할 수 있도록 조건 넣어주고 아래 코드가 실행되지 않도록 return 해줌
  if(!node[prop] && prop !== 'class') {
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value); // set은 기능을 완료한 값을 받을 필요가 없어서 return이 필요 없음
}

const arrowAttr = (node, prop, value) => !value ? getAttr(node, prop) : setAttr(node, prop, value);

function attr(node, prop, value) {
  if(!value) {
    return getAttr(node, prop);
  } else {
    setAttr(node, prop, value);
  }
}