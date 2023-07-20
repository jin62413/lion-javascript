const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  // // setter: 세팅을 해주는 것
  // eat(food) {
  //   this.stomach.push(food);
  // },
  // // getter: 불러오는 것
  // getEat() {
  //   return this.stomach;
  // },

  //자바스크립트에서는 setter과 getter를 만들 수 있게 키워드 제공해줌
  set eat(food) {
    this.stomach.push(food);
  },
  // 키워드가 달라서 함수의 이름은 같아도 된다
  get eat() {
    return this.stomach;
  },
};

const tiger = {
  pattern: '호랑이무늬',
  prey: '',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
};

const fox = {
  prey: '',
};

fox.__proto__ = animal;
tiger.__proto__ = animal; // tiger에 animal의 객체를 prototype 넣어줘서 사용 가능하게 만든다.
