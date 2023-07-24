// 적힌 텍스트를 navigator의 기능인 clipboard로 클립보드에 저장
export function copy(text){
  return navigator.clipboard.writeText(text)
}