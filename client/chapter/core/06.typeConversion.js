/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log(typeof String(YEAR)); // 명시적 형 변환
console.log(YEAR + ' '); // 암시적 형 변환, ' '로 넣으면 뒤에 띄어쓰기 생김

// undefined, null
let days = null;
console.log(typeof String(null));
console.log(null + '');

let undef = undefined;
console.log(typeof String(undefined));
console.log(undefined + '');

// boolean
let isClicked = true;
console.log(typeof String(isClicked));
console.log(isClicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null
let bankbook = null;
console.log(Number(bankbook));

// boolean
let cutie = true;
console.log(Number(cutie));

// string
let num = '250'; // 숫자형 문자
console.log(Number(num));
console.log(+num);
console.log(num * 1);
console.log(num / 1);

// numeric string
let width = '105.3px';
console.log(Number(width)); // NaN

/*console.log(window.parseFloat(width)); // 문자는 절삭시키고 숫자만 나옴*/
console.log(parseFloat(width)); // window 생략 가능

/*let width = '51e10'; // 이런 식으로 중간에 문자가 껴있으면 문자 뒤가 다 날아감
console.log(parseInt(width)); // 51
console.log(parseInt(width,10)); // 10진수임을 알려주면 좋음*/

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
console.log(Boolean(friend));
console.log(Boolean(bankbook));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(1));

// 암시적 형변환
console.log(!!false);
/*// !하나면 부정을 뜻함
console.log(!false);*/
