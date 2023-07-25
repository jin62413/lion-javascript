/*

[readystate] 현재 상태가 바뀐 것을 알려줌

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/

/* 
// 기본 문법
// XHR로 비동기 통신을 하게 되면 open, send가 필요하고 그 사이에 이벤트 리스너가 필요
// 생성자 함수로 XHR을 담아서 사용
const xhr = new XMLHttpRequest();

// console.log(xhr.readyState); // 아무것도 없을 때

// 오픈 메서드로 어떤 통신을 할건지, 어디 주소랑 할건지
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

// 로딩 이후 상태 변경(readystatechange)
// 자바 스크립트는 서버가 통신되는 동안 기다려주지 않음
// 이벤트 영역을 만든 이유: 서버에서 결과를 제대로 받았을 때 아래 항목을 실행
xhr.addEventListener('readystatechange', () => {

  // 구조 분해 할당
  // 객체 안에 키 값을 가져옴
  const {status, readyState, response} = xhr;

  // 서버가 제대로 잘 동작했는지 확인
  if(status >= 200 && status < 400) {
    // console.log('통과'); // 값이 3번 나오는 이유는 readystate의 2, 3, 4번이 이루어지기 때문
    
    // 서버의 현재 상태가 4이면 결과를 가져옴
    if(readyState === 4) {
      console.log(JSON.parse(response));
    }
  } else {
    console.log('실패');
  }
  // console.log(xhr.status);
  // console.log(xhr.readyState);
})

// 결과를 받아줌
xhr.send(); 
*/

/* -------------------------------------------------------------------------- */
// function xhr(method, url, onSuccess, onFail) {
//   const xhr = new XMLHttpRequest();

//   xhr.open(method, url);

//   xhr.addEventListener('readystatechange', () => {

//     const {status, readyState, response} = xhr;
  
//     if(status >= 200 && status < 400) {
//       if(readyState === 4) {
//         onSuccess(JSON.parse(response));
//       } else {
//       onFail('실패');
//       } 
//     }
//   })
/* -------------------------------- callback -------------------------------- */

// 유틸 함수 만들기
export function xhr({
    // 객체로 받지 않고 매개변수로 바로 받아서 사용할 수 있음
    method = 'GET', 
    url = '', 
    onSuccess = null, 
    onFail = null, 
    body = null, 
    headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }) {
  // } = {}) {
  // = {}가 있으면 기본 값이 객체라고 명시해주는 것

  // method, url, onSuccess, onFail, body, headers
  // 위 내용을 xhr의 매개변수 안에 넣으면 순서를 지켜야 하는 제약이 있음
  // 객체로 만들면 순서를 지키지 않아도 되고, 많은 엔티티들이 있을 때 유용
  // 객체 구조 분해 할당을 하면 별칭을 정할 수 있고, 기본 값을 넣어줄 수 있음.
  // const {
  //   method = 'GET', 
  //   url = '', 
  //   onSuccess = null, 
  //   onFail = null, 
  //   body = null, 
  //   headers = {
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*'
  //   }
  // } = options;

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  // Object.entries를 사용해 header에 있는 객체들을 [[key, value], [key, value]] 이렇게 배열로 받음
  // 배열 구조 분해를 통해 key, value값을 배열에서 빼냄
  // forEach를 통해 배열을 setRequestHeader에 각각 넣어줌, [(key, value), (key, value)]
  Object.entries(headers).forEach(([key, value]) => {
    // Headers에서 content-Type의 application/json형식으로 읽을 수 있도록 알려줌(설명서처럼)
    xhr.setRequestHeader(key, value);
  })
  
  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }
  });


  // 'POST'전송할 때 body 내용을 문자화 시켜서 보냄
  // Content-Type이 text/plain이라 서버가 뭔지 모름
  xhr.send(JSON.stringify(body)); 
}

// return은 통신을 기다려주지 않아서 undefiend가 뜸
// 함수 본문을 넘겨서(콜백 함수) 완벽하게 통신이 이루어졌을 때 함수를 실행
// 결과 값을 onSuccess, onFail로 넘겨줌
// 파라미터에 들어온 결과 값을 찍어줌
/* 
xhr(
  'POST', 
  'https://jsonplaceholder.typicode.com/users', 
  (result) => {
    console.log(result);
  }, 
  (err) => {
    console.log(err);
  }, 
  {
    name: 'tiger',
    age: 32
  }, 
  {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' 
    // 웹에서 동일 출처의 리소스들만 가져올 수 있는 정책이 있는데 Access-Control-Allow-Origin를 통해 다른 사이트에 있는 리소스를 얻어올 수 있도록 허용할 수 있음.
    // 이걸 사용해도 정책에 위반된다는 에러가 뜨는데 그럴 때는 우리 손을 떠난 것
  }
); 
*/

// method, url, onSuccess, onFail, body, headers
xhr({
  url: 'https://jsonplaceholder.typicode.com/users',
  onSuccess: ()=>{},
  onFail:()=>{},
  body: {
    name: 'tiger'
  }
});


// 1. 자바스크립트의 함수는 객체다.
// 2. 사용자(협업 개발자) 입장: 매번 메소드를 정의하지 않고 xhr.get, xhr.host 이런식으로 적어도 실행될 수 있도록 쉽게 쓰자
// 3. 설계자: 그렇다면 함수 안에 메서드(객체)를 넣어 버리자!!

// xhr(함수)을 dir로 겁색해보면 get이라는 함수를 가지고 있다.
// xhr 함수에 get이라는 키 값을 넣고 value를 함수로 설정
// 통신할 서버 주소, 성공했을 때 실행될 콜백 함수, 실패했을 때 실행될 콜백 함수를 메소드로 다시 정의하는 것

// /** */ 자동으로 전달할 파라미터 값을 생성
// 사용자가 함수를 사용할 때 입력해야 할 값을 설명해주는 설명서를 생성하는 것
/**
 * 
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백 함수
 * @param {function} onFail 서버와의 통신 실패시 실행될 콜백 함수
 * @return server data
 */
xhr.get = (url, onSuccess, onFail) => {
  // xhr을 전달해주자!
  // xhr의 기능을 사용하기 위해 자기 자신을 호출
  // 객체로 사용자가 입력한 값을 전달 해주자
  xhr({
    // shorthand property: 매개변수와 키 값이 같으면 생략
    // url: url,
    // onSuccess: onSuccess,
    // onFail: onFail
    url,
    onSuccess,
    onFail
  })
}

// console.dir(xhr);

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail
  })
}

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail
  })
}

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail
  })
}

// 실행하기
// xhr.get을 실행시키면 내부적으로 xhr함수를 실행시키는 것과 같다.
// xhr.get(
//   'https://jsonplaceholder.typicode.com/users', 
//   (result) => {
//   console.log(result);
//   },
//   (err) => {
//     console.log(err);
//   }
// )

// xhr.post(
//   'https://jsonplaceholder.typicode.com/users',
//   {
//     name: 'tiger'
//   },
//   (result) => {
//     console.log(result);
//   },
//   () => {}
// )
// 유저 랜더링(data)