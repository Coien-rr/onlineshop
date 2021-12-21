import { defineStore } from "pinia";
import { editGood, getGoodList } from "../utils/goodAPI";

// const goodslist = [
// 	{
// 		goodId: '0001',
// 		goodName: '旺仔小馒头',
// 		goodPrice: 1.99,
// 		goodStock: 66
// 	}
// ];
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
					this.goods = [];
					const list = res.data.goodList;
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