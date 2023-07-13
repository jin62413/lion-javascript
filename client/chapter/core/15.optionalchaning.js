/* ---------------------------------------------------------------------- */
/* Optional Chaining                                                      */
/* ---------------------------------------------------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
console.log(portableFan.photos?.animate); // 없는 프로퍼티에 접근함면 오류가 아니고 undefined가 나옴, 없는 것의 하위에 접근하면 오류

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.


// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.


// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.


// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

// sync 동기        async 비동기

// console.log('첫 번째 실행');

const timer = setTimeout(() => {

  // console.log('두 번째 실행'); // 딜레이가 생겨서 제일 늦게 실행, 코드가 순서대로 실행되지 않음 -> 비동기 실행

  const button = /* html */`
    <button type="button">clickMe</button>
  `

  document.body.insertAdjacentHTML('beforeend',button);

}, 3000)

// console.log('세번째 실행');

let count = 0;
const interval = setInterval(()=>{
  console.log(++count);
  document.querySelector('.first').style.transform = `translaateY(${count}px rotate(${count}deg`;

  if(count > 50) {
    clearInterval(interval);
  }

}, 10)


const button = document.querySelector('button');

console.log( button );

button?.addEventListener('click',function(){
  this.style.backgroundColor = 'orange';
})