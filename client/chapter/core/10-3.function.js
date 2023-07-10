/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
/* let calcAllMoney = () => {
  console.log(arguments); // 화살표 함수에는 arguments가 없음
}; */

//                  rest parameter
let calcAllMoney = (a, b, ...args) => {
  console.log(args);

  /* let total = 0;
  args.forEach((item)=> {
    total += item;
  }) */

  /* return args.reduce(function (acc, item) {
    return acc + item;
  }, 0); */

  return args.reduce((acc, item) => acc + item, 0);

  // return total;
};

const result = calcAllMoney(1000, 500, 200, 2000);

// console.log(result);

/* function Button() {

}

const a = Button()

const b = new Button() // b = {객체} */

// 화살표 함수와 this

// 함수 선언문
function nomalFunction() {
  console.log(this);
}

// 함수 표현식
const expressionFunction = function () {
  console.log(this);
};

// 화살표 함수식
const arrowFunction = () => {
  console.log(this);
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;
