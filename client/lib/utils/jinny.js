// fetch는 기본이 get통신, promise를 반환
// async 안이 아니더라도 뒤에서 반환되는 값이 promise면 await를 사용할 수 있다.
// 일반적인 fetch 요청은 두 개의 await 호출로 구성
// async는 [[PromiseResult]] 안에 값이 담겨있어 그 값을 꺼내기 위해 await 한 번 사용
// fetch는 [[PromiseResult]]에 Response가 담겨있어서 await로 Response 꺼내고, 
// await를 한 번 더 써서 Response 안의 값을 꺼냄
// async, fetch, .json은 promise 객체 반환

/* const response = await fetch('https://pokeapi.co/api/v2/pokemon/312'); // 응답 헤더와 함께 이행

// console.log(await response.json()); // response.json()은 promise 객체라서 await 사용 가능

console.log(response);

const data = await response.json(); // json 본문을 읽음

console.log(data); */

const URL = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}

// fetch가 promise를 반환하는데 async 사용하는 이유
// 비동기 함수 내부애서 await를 사용하려면 async를 선언해줘야 한다. 없으면 오류남
export const jinny = async (options) => {

  // 객체 구조 분해 할당 할 때 url제외하고 함
  // fatch 규칙 자체가 url을 빼고 해야 된다.
  // const {url, A+B 합친객체} = {...A객체, ...B객체}
  // 얕은 복사를 하면 headers의 key, value를 가지고오지 못해서(객체 안에 객체가 담겨있음) 다시 headers에 담아줌
  // 깊은 복사 해야 함
  // defaultOption이 있으면 이걸로 할당되고 options가 들어오면 이걸로 덮어서 할당
  // 받은 객체를 전개하면 값이 펼쳐지니 {}로 묶어 다시 객체로 만들기

  // jinny.post = (url, body, options) 이 값들이 위의 async (options)의 options에 담긴다.
  // 그러면 {...defaultOptions, ...options}로 합쳐진다. url도 빈 값에서 내가 보낸 값으로 덮어써짐
  // 그 중 url의 키 값을 뽑아낸다.
  const {url, ...restOptions} = {
    ...defaultOptions, 
    ...options, 
    headers: {
      ...defaultOptions.headers,
      ...options.headers
    }
  };

  // fetch 호출 시 반환받는 promise에 response라는 내장 클래스가 있다.
  // fetch가 resolve나 reject를 반환할 때까지 다음 코드를 읽지 않음
  // 프라미스 객체에 접근해서 값을 받아쓰려면 await나 then으로 접근해야 한다.
  const response = await fetch(url, restOptions);

  // ok는 HTTP 상태 코드가 200고 299 사이일 경우 true 반환
  if(response.ok) {
    response.data = await response.json(); // response 안에 data들을 추가
  }
  
  return response;
}

// const response = await jinny({
//   url: URL,
//   method: 'POST'
// });

// const userData = response.data;

// console.log(userData);

jinny.get = (url, options) => {
  return jinny({
    url,
    // options의 값들을 전개 -> {}로 묶어서 객체로 전달
    ...options
  })
}

jinny.post = (url, body, options) => {
  return jinny({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

jinny.delete = (url, options) => {
  return jinny({
    method: 'DELETE',
    url,
    ...options
  })
}

jinny.put = (url, body, options) => {
  return jinny({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

// console.log(jinny.get(URL)); // 프로미스 객체를 리턴하지 않으면 undefined 출력

// userData.forEach((item)=>{
//   // console.log( item );
// })

// jinny('https://jsonplaceholder.typicode.com/users');


// const response = await fetch('https://jsonplaceholder.typicode.com/users');
// if(response.ok) {
//   const data = response.json();
// }