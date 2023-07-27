export function xhr(method, url, onSuccess, onFail, body) {

const xhr = new XMLHttpRequest();

xhr.open(method, url);

xhr.addEventListener('readystatechange', () => {
  const { status, readyState, response } = xhr;
  if (readyState === 4) {
    if (status >= 200 && status < 400) {
      onSuccess(response);
    } else {
      onFail('실패');
    }
  }
});


// 'POST'전송할 때 body 내용을 문자화 시켜서 보냄
// Content-Type이 text/plain이라 서버가 뭔지 모름
xhr.send(body); 
}

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
  }
); 