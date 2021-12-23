// import { onlineshopAxios } from "./http";
import { onlineshopAxiosDemo } from "./http";

export function getGoodList(){
  return onlineshopAxiosDemo({
    url: '/good/list',
    method: 'POST'
  })
}

export function editGood(gooditem){
  return onlineshopAxiosDemo({
    url: '/good',
    method: 'POST',
    data: gooditem
  })
}