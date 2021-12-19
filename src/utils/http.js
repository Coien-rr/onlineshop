import axios from "axios";

export function adminAxios(axiosConfig){
  const service = axios.create({
    baseURL: 'https://qcqt5l.api.cloudendpoint.cn',
    timeout: '10000',
    headers: {
      'Content-type': 'application/json',
    },
  })
  
  return service(axiosConfig);
}