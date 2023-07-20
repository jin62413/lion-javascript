import { getNode } from "./getNode.js";


export function clearContents(node){

  if(typeof node === 'string') node = getNode(node);
  // input, textArea는 nodeName으로 내용을 인식
  if(node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA'){
    node.value = ''
    return;
  }

  // 다른 요소들은 textContent를 사용하면 내용 인식
  node.textContent = ''
}