import axios from "axios";

export function onlineshopAxios(axiosConfig){
  const service = axios.create({
    baseURL: 'https://qc78zw.api.cloudendpoint.cn',
    timeout: '10000',
    headers: {
      'Content-type': 'application/json',
    },
  })
  
  return service(axiosConfig);
}