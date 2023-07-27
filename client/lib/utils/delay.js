import { getNode } from "../dom/getNode.js";
import { insertLast } from "../dom/insert.js";
import { xhrPromise } from "./xhr.js";

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

// 객체 합성 mixin
// delayP에서 객체를 전달, 아무것도 전달하지 않았을 때는 defaultOption에서 값을 가져옴
// 사용자가 데이터를 던졌을 때, options에 들어가는데 defaultOption의 내용과 섞어서 새로운 option객체를 만들어 전달
const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errormessage: '알 수 없는 오류가 발생했습니다.'
}

export function delayP(options){

  // 구조 분해 할당을 하면 본문이 바껴버리기 때문에 defaultOptions를 사용하는 다른 요소들에 영향을 미침
  // const {shouldReject, data, errormessage} = defaultOptions;
  // 얕은 복사를 통해 기본 값을 보호함
  let config = {...defaultOptions};

  // 만약 number나 object가 아닐 때는 어떻게 되는지?
  // 배열이나 문자도 들어감, 배열이나 문자도 key, value를 가지고 있기 때문에 index: '문자' 이렇게 들어감 
  if(typeof options === 'number') {
    config.timeout = options;
  }

  if(typeof options === 'object') {
    // 기존의 값들에 새로 받은 값들이 덮어져서 재할당
    // 전개연산자 안쓰면 안겹쳐짐
    // 전개연산자 사용하면 하나씩 튀어나오는데 값이 두 개 생김
    // 마지막에 설정해준 값으로 재할당 되면서 덮어씌워지고 앞에껀 날아감
    // 깊은 복사를 하면 전개한 후 options가 재할당 되기 때문에 원본 유지를 위해 얕은 복사 사용
    config === {...defaultOptions, ...options}; // 뒤에 있는게 앞에랑 겹쳐짐, 순서 중요
  }
  
  const {shouldReject, data, errormessage, timeout} = config;

  // resolve와 reject의 위치가 중요함, 이름은 다른 걸로 바꿔도 되긴 함
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if(!shouldReject) {
        resolve(data);
      } else {
        reject({message: errormessage});
      }
    }, timeout);
  })
}
// console.log(delayP());

// .catch가 있을 때 오류(reject)가 나면 .then은 실행되지 않는다.
/* delayP()
.then(
  (result) => {
  console.log(result);
  }
  // reject 부분이 없어도 오류를 잡긴 함
  // ({message}) => {
  //   console.log(message);
  // }
)
.catch((err) => {
  console.log(err);
}) */

delayP({shouldReject: true})
.then((res) => {
  // console.log(res);
})
.catch(({message}) => {
  alert(message);
})
.finally(() => {
  // console.log('어찌됐든 실행');
})


/* -------------------------------------------------------------------------- */

// async - 함수가 promise 객체를 반환 하도록, await 사용
// await의 기능
// 1. 코드의 실행 흐름 제어, 프라미스가 처리될 때까지 기다림
// 2. result 결과값 출력
// await 뒤에는 항상 promise가 와야함

async function delayA() {
  return '성공!'
}

const data = await delayA(); // 프로미스 객체가 반환되서 await로 한 번 까줘서 값이 반환

// console.log(data);


// then 결과 가져오기
// await 결과 가져오기
async function getData() {
  
  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/312');

  // data.then((res) =>{
  //   console.log(res)
  // });

  const pokemon = await data;

  console.log(pokemon);

  console.log(pokemon.sprites['front_default']);

  insertLast(document.body,`<img src="${pokemon.sprites['front_default']}" alt="" />`);

}

// getData();