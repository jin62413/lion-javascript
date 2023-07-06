/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = MORNING;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */
switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사를 읽는다.');
    break;
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다');
    break;
  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;
  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === MORNING) {
  console.log('뉴스 기사를 읽는다.');
} else if (thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다');
} else if (thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}

/* switch vs. if -------------------------------------------------------- */

//const day = Math.floor(Math.random() * 7);

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

function getDay(dayValue) {
  switch (dayValue) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}

const day = getDay(getRandom(7));

console.log(day);

// 요일을 출력하는 함수
function isWeekend(dayValue) {
  const today = getDay(getRandom(dayValue));

  return today.includes('토')
    ? '토요일'
    : today.includes('일')
    ? '일요일'
    : '평일';

  // return today === '토' || today === '일';

  /* if (today === '토' || today === '일') {
    return true;
  } else {
    return false;
  } */
}

const today = isWeekend(7);

console.log(today);
