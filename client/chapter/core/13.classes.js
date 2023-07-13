/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// Animal => tiger => 호돌이

class Animal {
  legs = 4;
  tail = true;
  stomach = [];

  // 필수 요소
  constructor(name) {
    this.name = name; // tiger.name = '호돌이'
    console.log('최초 1회 실행'); // construtor 함수는 new Animal('호돌이')로 인해 최초 1회는 실행된다.
  }

  set eat(food) {
    this.stomach.push(food);
  }

  get eat() {
    return this.stomach;
  }
}

// const tiger = new Animal('호돌이') // 객체 생성 할거야 -> constructor 함수 실행

// const tiger = new Animal({
//   name: '호돌이',
//   age: 300,
// });

class Tiger extends Animal {
  prey = '';
  // #prey = ''; // 밖에서 사용하는 사용자(콘솔창)에서 접근이 불가능하도록 함

  constructor(name, pattern) {
    super(name); // constructor의 필수 속성, 부모의 프로퍼티를 그대로 가지고 옴 -> '범' -> this.name
    this.pattern = pattern;
  }

  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  attack() {
    return `강력한 발톱으로 ${this.prey}가 죽었습니다.`;
  }

  //static은 생성자로 생성된 객체(beom, hoho)가 사용하는게 아니라 클래스(Tiger)가 사용할 수 있다.
  static sleep(name) {
    console.log(name + '이 잠을 잔다.');
  }
}

const beom = new Tiger('범', '호랑이 무늬');
// const hoho = new Tiger('hoho', '호랑이 무늬');

class Champion {
  q = '';
  w = '';

  d = '';
  f = '';

  constructor(qValue, wValue, dValue, fValue) {
    this.q = qValue;
    this.w = wValue;
    this.d = dValue;
    this.f = fValue;
  }

  pressD() {
    console.log(this.d + '발동!');
  }

  pressF() {
    console.log(this.f + '발동!');
  }
}

const yumi = new Champion({
  qValue: '사르르탄',
  wValue: '너랑유미랑',
  dValue: '점멸',
  fValue: '회복',
});
