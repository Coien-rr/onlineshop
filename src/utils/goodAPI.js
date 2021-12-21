import { onlineshopAxios } from "./http";

export function getGoodList(){
  return onlineshopAxios({
    url: 'getGoodList',
    method: 'GET'
  })
}

export function editGood(gooditem){
  return onlineshopAxios({
    url: 'editGood',
    method: 'POST',
    data: gooditem
  })
}