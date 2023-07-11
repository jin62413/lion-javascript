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
// 일반 함수 : 나를 호출한 대상을 this로 바인딩합니다.
// 화살표 함수 : this를 바인딩 하지 않음. 찾아야 한다면 내 부모꺼(상위 컨텍스트) 가져옴

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

// 객체 안에서 this
// 일반 함수: 나를 호출한 객체인 user가 불러와짐
// 화살표 함수: 바인딩하지 않기 때문에 user의 부모인 window가 불러와짐(user엔 this가 없음)

// 객체의 메서드를 정의할 때는 화살표 함수보다 일반 함수가 더 좋은거 아닌가요? yes
// 매서드 안에서 함수를 호출할 때는 화살표 함수가 더 좋나? yes

const user = {
  total: 0,
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades: function () {
    console.log(this.total);

    this.grades.forEach((item) => {
      this.total += item;
    });

    console.log(this.total);
  },
  // totalGrades: () => {
  //   console.log(this.grades);
  // },

  // 일반함수 다른 표기법
  // totalGrades() {
  //   console.log(this.grades);
  // },
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;
