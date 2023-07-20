/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

// 더 큰 요소에게 이벤트를 주어서 자식들이 사용할 수 있도록 하는게 위임
// 클릭해야할 요소가 많으면 따로따로 주기 힘들기 때문에 사용

/* 클래스를 사용한 위임 ---------------- */

const container = getNode('.container');

function handleDelegation(e) {
  // console.log(this); // 화살표 함수일 때는 this를 찾지 못함
  // console.log(e.currentTarget); // === this, 나를 호출한 대상(이벤트가 걸린 대상), 화살표 함수일 때도 찾을 수 있음
  // console.log(e.target); // 마우스가 dom에서 처음 만나는 대상

  let target = e.target;

  let li = target.closest('li');

  if(!li) return;

  let className = attr(li, 'class');
  // let dataName = target.dataset.name;
  let dataName = attr(li, 'data-name');

  if(className === 'home'){
    console.log('홈 실행!');
  }



  // if(dataName === 'A'){
  //   console.log('A버튼 클릭');
  // }

  // console.log(target.getAttribute('class'));

  // if(className ===  'a'){
  //   console.log('A버튼 클릭!');
  // }
  // if(className ===  'b'){
  //   console.log('B버튼 클릭!');
  // }
  // if(className ===  'c'){
  //   console.log('C버튼 클릭!');
  // }
  // if(className ===  'd'){
  //   console.log('D버튼 클릭!');
  // }
}

container.addEventListener('click', handleDelegation)

/* 속성을 사용한 위임 ------------------ */


/* 노드를 사용한 위임 ------------------ */