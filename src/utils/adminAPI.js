import { onlineshopAxios } from "./http";

export function adminLogin(){
  return onlineshopAxios({
    url: '/hello',
    method: 'GET',
  })
}