import { getNode } from "../dom/getNode.js";

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// 동시 실행되면서 올라가지 않고 회전되버림
// first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)';
// first.style.top = '0';

// 콜백 지옥
// 코드를 읽기 힘듦
/* 
delay(() => {
  console.log(1);
  first.style.top = '-100px';

    delay(() => {
      console.log(2);
      first.style.transform = 'rotate(360deg)';

        delay(() => {
          console.log(3);
          first.style.top = '0';
          second.style.top = '0';
        });
      
      second.style.top = '100px';
      console.log('b');
    });
});
*/

// delayP 함수를 실행하면 리턴되는 값이 promise 객체이다.
// promise 객체는 생성자 함수로 만들어진 객체의 프로토타입이 promise라는 것
function delayP() {
  // resolve와 reject의 위치가 중요함, 이름은 다른 걸로 바꿔도 되긴 함
  return new Promise((resolve, reject) => {
    resolve('성공입니다!!');
  })
}
// console.log(delayP());

delayP()
.then((result) => {
  console.log(result);
})