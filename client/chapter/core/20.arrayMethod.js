/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray 배열인지 아닌지 확인하는 용도

/* function isArray(data) {
  return Object.prototype.toString.call(data).slace(8,-1).toLowCase() === 'array';
} */

const isArray = data => Object.prototype.toString.call(data).slace(8,-1).toLowCase() === 'array';

const isNull = data => Object.prototype.toString.call(data).slace(8,-1).toLowCase() === 'null';

/* 요소 순환 ---------------------------- */

const arr = [10,100,1000,10000];

const people = [
  {
    id : 0,
    name : '김다연',
    profession : '프론트엔드 개발자',
    age : 25,
    imageSrc : 'MAksd23',
  },
  {
    id:1,
    name:'이현주',
    profession:'수영선수',
    age:40,
    imageSrc:'afdfakA',
  },
  {
    id:2,
    name:'김희소',
    profession:'물음표살인마',
    age:30,
    imageSrc:'fAKqi321',
  },
  {
    id:3,
    name:'김규민',
    profession:'래퍼',
    age:52,
    imageSrc:'AFGq3d23',
  },
  {
    id:4,
    name:'전진승',
    profession:'드라마평론가',
    age:18,
    imageSrc:'fQa15f3',
  },
]

// forEach : 값을 반환하지 않음.

arr.forEach((item, index) => {
  // console.log(item, index);
})

people.forEach((item) => {
  // console.log(item.name);
})

const span = document.querySelectorAll('span');

// 이벤트 처리 할 때 이 방식이 제일 좋은가요? no
// 아이템이 많아지면 이벤트를 많이 줘야해서 좋지 않음

span.forEach((item,index)=>{

  item.addEventListener('click',function(){
    // console.log(this,index);
  })

})

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift

// reverse
// arr.reverse()
// console.log(arr);

// splice : 맥가이버 칼
// arr.splice(1,2,'javascript', 'css'); // 배열에 1부터 2번째 아이템 삭제, 문자열 추가
arr.splice(1,0,5,13);
// console.log(arr);

// compare function

// 반환 값 < 0 : a가 b보다 앞에 있어야 한다.
// 반환 값 == 0 : a와 b의 순서를 바꾸지 않는다.
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다.

// sort
arr.sort((a,b) => {
  return a - b;
});
// console.log(arr);

/* 새로운 배열 반환 ------------------------ */
// 원본 배열을 훼손하지 않음

const user = ['선범', '효윤', '준석'];

// concat
// const newArray = arr.concat(user);
const newArray = [...arr, ...user, 'javascript', 'css']; // 더 좋다
// console.log(newArray);

// slice
const slice = arr.slice(2, 5); // 2부터 5번째까지 잘라서 새로운 배열로 반환
// console.log(slice);

// toSorted, toReversed, toSpliced는 최신 문법들
// toSorted
const toSorted = arr.toSorted((a,b) => {
  return b - a;
});

// console.log(toSorted);

// toReversed
const toReversed = arr.toReversed();
// console.log(toReversed);

// toSpliced
const toSpliced = arr.toSpliced(2, 0, 'javascript', 'css', 'react');
// console.log(toSpliced);

// map
const job = people.map((item, index) => {
  // return item.profession;
  // return `<div>${item.profession}</div>` // 이대로 출력하면 배열이기 때문에 콤마(,)도 같이 출력된다.
  // return /* html */`
  //   <div class="userCard">
  //     <div class="imageField">
  //       <img src="${item.imageSrc}" alt="" />
  //     </div>
  //     <span>이름:${item.name}</span>
  //     <span>직업:${item.profession}</span>
  //     <span>나이:${item.age}</span>
  //   </div>
  // `
})

// people 자료구조에서 나이만 모아놓은 배열이 필요하다 => 가공처리, 나이 -1하고 내보내고 싶다.
const newAge = people.map((item) => {
  return item.age - 1;
})

// 배열의 아이템에 접근해서 각각의 아이템을 하나씩 출력한다.
// forEach는 값을 내보내지 않기 때문에 아이템들을 세팅만 해주고 끝난다.
job.forEach((item) => {
  // document.body.insertAdjacentHTML('beforeend', item);
})

/* function render(){
  
  return (
    <div>
      {
        people.map((item,index)=>`<div>${item.profession}</div>`)
      }
    </div>
  )
} */

/* 요소 포함 여부 확인 ---------------------- */

// indexOf 앞에서부터
console.log(arr.indexOf(10));

// lastIndexOf 뒤에서부터
console.log(arr.lastIndexOf(10));

// includes
console.log(arr.includes(1000))

/* 요소 찾기 ------------------------------ */

// find 배열에 특정 요소가 있는지 확인하고, 해당 아이템을 반환(1개만)
const find = people.find((item) => {
  return item.id > 1
})

console.log(find);

// findIndex : 몇 번째 아이템인지 반환
const findIndex = people.findIndex((item) => {
  return item.id === 3;
})

console.log(findIndex);

/* 요소 걸러내기 --------------------------- */

// filter : 배열을 반환
const filter = people.filter((item) => {
  return item.id > 2;
})

console.log(filter);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0) 
// 초기값을 지정해주지 않으면 people의 arr에 첫번째 객체가 와서 문자에 숫자를 접합하게 된다. [object Object]40305218
// 초기값을 0으로 지정해주면 0에다가 숫자를 더하게 된다.

console.log(totalAge);

const template = people.reduce((htmlCode, cur) => htmlCode + `<div>${cur.name}</div>`, ''); // 초기값 문자로 설정

document.body.insertAdjacentHTML('beforeend', template);

// reduceRight : reduce랑 똑같은데 반대방향으로 가는 것

/* string ←→ array 변환 ------------------ */

const str = '봉석 윤진 예나 시연 진만 정아';

// split : 문자 -> 베얄
const stringToArray = str.split(' ');

console.log(stringToArray);

// join : 배열 -> 문자
const arrayToString = stringToArray.join('-');

console.log(arrayToString);