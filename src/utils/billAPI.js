import { onlineshopAxiosDemo } from "./http";

export function getBillList(){
    return onlineshopAxiosDemo({
        url: '/bill/list',
        method: 'POST'
    })
}