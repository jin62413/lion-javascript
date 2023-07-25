import { getNode } from "../dom/getNode.js";



export const memo = (() => {

  // 전역을 오염시키지 않기 위해 클로저로 작성
  const cache = {

  };

  return (key, callback) => {
    if(!callback) return cache[key]
  
    if(cache[key]) {
      console.warn(`${key}는 이미 캐시된 값이 존재합니다.`);
      return cache[key];
    }

    cache[key] = callback();
  }
})()

// setter
// memo('cube', () => getNode('#cube'));
// memo('cube',()=> 123);

// getter
console.log( memo('cube') ); // div#cube 
// 객체를 만들어서 key:value 쌍으로 저장