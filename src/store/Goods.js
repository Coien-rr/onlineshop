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
		/** @type {{ goodId: Number, name: string, price: number, inventory: number, count: Number }[]} */
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
						let item = list[i];
						item.count = 0;
						this.goods.push(item);
					}
				});
		},
		edit(gooditem){
			console.log(gooditem);
			editGood(gooditem)
				.then(res => console.log(res))
		},

		purchase(){
			
		}
	}
})