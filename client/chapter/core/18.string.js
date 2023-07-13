/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'less is more.';


// length 프로퍼티
let stringTotalLength = message.length;

console.log('stringTotalLength : ', stringTotalLength);


// 특정 인덱스의 글자 추출
let extractCharacter = message[10];

console.log('extractCharacter : ', extractCharacter);


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
let slice = message.slice(1, 3);
// let slice = message.slice(8); // 8부터 끝까지
// let slice = message.slice(8, -1); // 맨 마지막 문자 제외
console.log('slice : ', slice);

let subString = message.substring(1, 3); // 1번부터 3번까지
console.log('substring : ', subString);

let subStr = message.substr(1, 3); // 1번부터 3개
console.log('substr : ', subStr);


// 문자열 포함 여부 확인
let indexOf = message.indexOf('p');

// if(message.indexOf('p') > 0) // 0보다 크면 있는거고 작으면 없는 것
console.log('indexOf : ', indexOf);

let lastIndexOf = message.lastIndexOf('s'); // 반대서부터 찾음
console.log('lastIndexOf : ', lastIndexOf);

let includes = message.includes('less');
console.log('includes : ', includes);

let startsWith = message.startsWith('Less'); // 시작 단어를 물어봄
console.log('startsWith : ', startsWith);

let endsWith = message.endsWith('more.'); // 마지막 단어를 물어봄, more.로 끝나는지?
// let endsWith = message.endsWith('.'); // true
console.log('endsWith : ', endsWith);



// 공백 잘라내기
let trimLeft = message.trimLeft();
let trimRight = message.trimRight();
// left, right는 더이상 사용되지 않는 코드, 대신 start, end 사용

let str = '          a sl           kdj    f           ' // 양 끝에 있는 공백만 제거

let trim = str.trim();
console.log('trim : ', trim);

function normalText(string){
  return string.replace(/\s*/g,''); // 정규식으로 공백 제거
}
normalText(str);

// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat : ', repeat);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase : ', toLowerCase);

let toUpperCase = message.toUpperCase();
console.log('toUpperCase : ', toUpperCase);


// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
  // -이나 _기준으로 공백을 없애고 다음 문자를 대문자로 변경
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1); // 카멜케이스로 변경된 부분
}