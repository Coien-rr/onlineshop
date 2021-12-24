import { onlineshopAxiosDemo } from "./http";

export function getBillList(){
    return onlineshopAxiosDemo({
        url: '/bill/list',
        method: 'POST'
    })
}

  // const demo = {
  //   customerId: Number,
	// 	/** @type {{ goodId: Number, goodNum: Number }[]} */
  //   itemList: Array,
  // }

export function addBillItem(bill){
    return onlineshopAxiosDemo({
        url: '/sell',
        method: 'POST',
        params: {
            customerId: bill.customerId
        },
        data: bill.itemList
    })
}