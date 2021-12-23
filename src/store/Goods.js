import { defineStore } from "pinia";
import { editGood, getGoodList } from "../utils/goodAPI";

// {
// 	"goodId": 1,
// 	"name": "牛奶",
// 	"price": 3,
// 	"inventory": 100
//   },
export const useGoodStore = defineStore('goods', {
	state: () => ({
		/** @type {{ goodId: string, goodName: string, goodPrice: number, goodStock: number }[]} */
		goods: [],
	}),

	getters: {
		
	},

	actions: {
		getlist(){
			getGoodList()
				.then(res => {
					console.log(res);
					this.goods = [];
					const list = res.data.data;
					for(let i = 0; i < list.length; ++i){
						this.goods.push(list[i]);
					}
				});
		},
		edit(gooditem){
			console.log(gooditem);
			editGood(gooditem)
				.then(res => console.log(res))
		}
	}
})