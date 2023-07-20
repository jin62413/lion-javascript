/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');


section.addEventListener('click',()=>{
  console.log('%c section', 'color:orange');
},true)

article.addEventListener('click',(e)=>{
  // e.stopPropagation();
  console.log('%c article', 'color:dodgerblue');
},true)

p.addEventListener('click',(e)=>{
  // e.stopPropagation(); // 퍼저나가는 걸 멈추게 함, p를 누르면 자기 자신만 눌림
  console.log('%c p', 'color:hotpink');
},true)


/* 캡처링 ----------------------------------------------------------------- */