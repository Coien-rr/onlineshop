import { adminAxios } from "./http";

export function adminLogin(){
  return adminAxios({
    url: '/hello',
    method: 'GET',
  })
}