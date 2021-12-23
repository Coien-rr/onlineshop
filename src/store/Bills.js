import { defineStore } from 'pinia';
import { getBillList } from '../utils/billAPI';

// {
//     "billId": 1,
//     "totalAmount": 13.5,
//     "customerId": 1,
//     "billTime": "2021-12-13",
//     "customer": {
//       "customerId": 1,
//       "address": "浙江",
//       "phoneNumber": "1234567",
//       "name": "张三"
//     },
//     "itemList": [
//       {
//         "itemId": 1,
//         "amount": 6,
//         "goodId": 1,
//         "goodNum": 2,
//         "billId": 1,
//         "good": {
//           "goodId": 1,
//           "name": "牛奶",
//           "price": 3,
//           "inventory": 100
//         }
//       },
//       {
//         "itemId": 2,
//         "amount": 3.5,
//         "goodId": 3,
//         "goodNum": 1,
//         "billId": 1,
//         "good": {
//           "goodId": 3,
//           "name": "雪碧",
//           "price": 3.5,
//           "inventory": 68
//         }
//       },
//       {
//         "itemId": 3,
//         "amount": 12,
//         "goodId": 7,
//         "goodNum": 2,
//         "billId": 1,
//         "good": {
//           "goodId": 7,
//           "name": "旺仔牛奶",
//           "price": 6,
//           "inventory": 50
//         }
//       },
//       {
//         "itemId": 4,
//         "amount": 4,
//         "goodId": 5,
//         "goodNum": 2,
//         "billId": 1,
//         "good": {
//           "goodId": 5,
//           "name": "农夫山泉",
//           "price": 2,
//           "inventory": 197
//         }
//       }
//     ]
//   },
export const useBillStore = defineStore('bills', {
	state: () => ({
		/** @type {{ billId: string, totalAmount: number, customerId: number, billTime: string, itemList:{itemId: string, amount: number, goodId: number, goodNum: number, billId: number}[] }[]} */
		bills: [],
	}),
	getters: {
		validBills(){
			return this.bills.filter(bill => bill.totalAmount > 0 );
		}
	},

	actions: {
		getlist() {
			getBillList().then((res) => {
				console.log(res);
				this.bills = [];
				const list = res.data.data;
				for (let i = 0; i < list.length; ++i) {
					this.bills.push(list[i]);
				}
			});
		},
	},
});
