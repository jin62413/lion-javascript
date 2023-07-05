/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

const a = '10';
const b = '30';

// 단항 연산자
let unary = +a;

// 이항 연산자
let binary = a + b;

// 삼항 연산자
let ternary = a === 10 ? true : false;
// a===10, ture, false 연산되는 값이 3개이기 때문에 삼항 연산자
// let ternary = Math.random() > 0.5 ? 'big' : 'small';
// 식이기 때문에 값을 뱉어냄

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 10 - 2;

// 산술 연산자: 곱셈
let multiplication = 30 * 2;

// 산술 연산자: 나눗셈
let division = 14 / 2;

// 산술 연산자: 나머지
let remainder = 10 % 3;

// 산술 연산자: 거듭 제곱
let power = Math.pow(2, 53) - 1;

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6]; // 1, 2, 34, 5 ,6
// 배열이 아니라 문자로 취급되기 때문

//배열을 붙이고 싶으면
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

// concat 사용, 오래된 방법
const newArray = firstArray.concat(secondArray);
console.log(newArray);

// spread syntax 사용
console.log([...firstArray, ...secondArray]); // 펼쳐서 보여줌
// 그냥 적으면 숫자만 펼쳐지고 [] 안에 넣으면 배열로 나옴

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --
let counter = 0;
counter++; // 0
counter; // 1

++counter; // 1

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
/*let total = (count % 4) * (count /= 2) + count ** 3; // ?
                 2  *   5  +  (5 * 5 * 5)*/

let total = count % 4;
count = count / 2;
let pow = count ** 3;
total = total * count + pow;

console.log(total);
