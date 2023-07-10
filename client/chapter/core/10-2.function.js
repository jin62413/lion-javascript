/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

// const resultX = calcTotal(10000, 8900, 1360, 2100);
// const resultY = calcTotal(21500, 3200, 9800, 4700);
// const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있는 이것은? : arguments
  // console.log(arguments);

  // arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구해보자!

  let total = 0;

  // 1. for문
  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  // 2. for...of 문
  // for (let key of arguments) {
  //   total += key;
  // }

  // 3. forEach 빌려쓰기
  // array의 forEach 기능을 빌려옴. 유사 배열이라서 그냥 forEach는 사용할 수 없다.
  // Array.prototype.forEach.call(arguments, function (item) {
  //   total += item;
  // });

  // 4. slice를 빌려써서 배열로 만들기
  // argument를 slice기능을 사용하여(빌려써서) 실제 배열로 만들어 reaelArray에 담는다.
  // let realArray = Array.prototype.slice.call(arguments);

  // console.log(realArray);

  // realArray.forEach(function (item) {
  //   total += item;
  // });

  // 5. Array.from()
  // let realArray = Array.from(arguments);
  // console.log(realArray);

  // realArray.forEach(function (item) {
  //   total += item;
  // });

  // 6. spread syntax
  let realArray = [...arguments];

  // console.log(realArray);
  // realArray.forEach(function (item, index) {
  //   total += item;
  // });

  // 7. Array.reduce
  // return realArray.reduce((acc, item) => {
  //   return acc + item;
  // }, 0);

  // return total;
};

const result = calculateTotal(1000, 500, 200, 6500, 100);

// console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {
  console.dir(anonymousFunctionExpression);
};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let callbackFunctionExpression = function (isActive, callback) {
  // callback();

  if (isActive) {
    callback();
  }
};

callbackFunctionExpression(false, function () {
  console.log('콜백 함수 실행!');
});

/* -------------------------------------------------------------------------- */

const movePage = function (url, success, fail) {
  if (url.match(/http.+www/) && typeof url === 'string') {
    success();
  } else {
    fail();
  }
};

// movePage(
//   'https://www.naver.com',
//   function (url) {
//     console.log('성공 몇초 뒤 해당 페이지로 이동');

//     setTimeout(() => {
//       window.location.href = url;
//     }, 3000);
//   },
//   function () {
//     console.log('올바르지 않은 주소');
//   }
// );

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// 변수를 보호하기 위해 사용
// 은닉화 incapsulation(캡슐화)
// 함수 스코프를 생성해서 변수가 빠져나가지 못하도록 함

/* const MASTER = (function () {
  // 마스터는 함수가 아니고 return 값을 담아주는 것
  var x = 10;

  console.log('즉시 함수 !');

  return '퉤';
})();
 */
// console.log(x); // error

// console.log(MASTER);

// 마스터는 함수가 아니고 return 값을 담아주는 것
const MASTER = (function (g) {
  // 인수의 기본 이름을 변경할 수 있다.

  console.log(g);

  var x = 10;
  let uid = 'alksjdf';

  return {
    getKey() {
      return uid;
    },
    setKey(value) {
      uid = value;
    },
  };
})(window); // 인수 전달

console.log(MASTER.setKey('새로운 비밀번호'));
