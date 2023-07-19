function bindEvent(node,type,handler){
  if(typeof node === 'string') node = getNode(node);

  if(!(/\bmouseenter|click|mousemove|mouseout|mouseover\b/g).test(type)){
    // type을 입력했을 때 test를 실행해서 정규식 안에 있는 값이 있다면 true
    // mouseenter|click...값들이 /g 전역에 있는지 확인, .test() 내가 적은 값이 표현식 안에 있는지 확인
    throw new TypeError('bindEvent 함수의 두 번째 인수는 유효한 이벤트 타입 이어야 합니다.')
  }

  node.addEventListener(type,handler);


  // 클로저, 함수가 함수를 리턴함, 부모의 인자를 받을 수 있다.?
  return ()=> node.removeEventListener(type,handler);

}