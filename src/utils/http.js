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

export function onlineshopAxiosDemo(axiosConfig){
  const service = axios.create({
    baseURL: 'http://123.60.65.47:9001',
    timeout: '10000',
    headers: {
      'Content-type': 'application/json',
    },
  })
  
  return service(axiosConfig);
}