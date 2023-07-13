function earth() {

  let water = true;

  let apple = {
    founder:'Steve Jobs',
    ceo:'Tim Cook',
    product:['iphone', 'macbook', 'macStudio', 'appleWatch']
  }

  let gravity = 10;

  return (value) => {
    // console.log(water);

    gravity = value; // value에 5가 들어오면 gravity가 5로 바뀜

    // console.log(gravity, water);
  }

  //return tiger;
}

const ufo = earth();

ufo(5); // 숫자가 value로 들어감

/* 
외부에서는 water나 apple에 절대 접근할 수 없다.
접근하려면 함수에 water, apple을 넣어줘야 한다.
그래서 외부 function에는 변수를 지정하고 내부function에는 실행시킬 내용을 지정한다.
*/

/* -------------------------------------------------------------------------- */

const button = document.querySelector('button');

// let isClicked = true; // 전역 오염, 나중에 밑에서 isClicked 다시 정의하면 망가짐

function handleClick() {

  let isClicked = true;

  return function (){
    if(isClicked) {
      document.body.style.backgroundColor = 'orange';
    } else {
      document.body.style.backgroundColor = 'transparent';
    }

    isClicked = !isClicked; // 한번 실행하고 isClicked가 false로 바뀜 -> if문에서 true 부분이 실행 안됨
  }
  
}

button.addEventListener('click', handleClick()); // handleClick() 함수를 실행시켜줘야 함

/* -------------------------------------------------------------------------- */

function useState(initValue){
  
  let value = initValue

  function read(){
    return value
  }

  function write(overValue){
    value = overValue
  }

  return [read,write]
}