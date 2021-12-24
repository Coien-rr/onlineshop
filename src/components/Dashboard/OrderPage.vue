<script setup>
	import { onMounted, ref, reactive, computed } from 'vue-demi';
	import { useGoodStore } from '../../store/Goods';
	import { Edit, Coin, Shop, Plus } from '@element-plus/icons';
    import { addBillItem } from '../../utils/billAPI';
	const goodList = useGoodStore();
	onMounted(() => {
		goodList.getlist();
	})

	const dialogVisible = ref(false);
	const goodIndex = ref(0);
    const orderTotal = computed(() => {
        let total = 0;
        goodList.goods.forEach((good) => {
            if(good.count > 0){
                total += (good.count * good.price);
            }
        })
        return total;
    });
	const editgooditem = reactive({
		goodId: '',
		name: '',
		price: 0,
		inventory: 0,
	});
	// let editgooditem;
	function editGood(index){
		editgooditem.goodId = goodList.goods[index].goodId;
		editgooditem.name = goodList.goods[index].name;
		editgooditem.price = goodList.goods[index].price;
		editgooditem.inventory = goodList.goods[index].inventory;
		goodIndex.value = index;
		dialogVisible.value = true;
		console.log(editgooditem);
	}

	function editConfirm(){
		dialogVisible.value = false;
		const index = goodIndex.value;
		goodList.goods[index].price = editgooditem.price;
		goodList.goods[index].inventory = editgooditem.inventory;
		console.log(goodList.goods[index]);
		goodList.edit(editgooditem);
	}

    function addNum(item){
        item.count++;
    }

    function lessNum(item){
        item.count--;
    }

    function activeadd(item){
        return item.count < item.inventory ? false : true
    }

    function activeless(item){
        return item.count > 0 ? false : true
    }

    function clearAll(){
        goodList.goods.forEach((good) => {
            good.count = 0;
        })
    }

    const demo = {
        customerId: Number,
		/** @type {{ goodId: Number, goodNum: Number }[]} */
        itemList: Array,
    }
    function purchase(){
        const bill = {
            customerId: 2,
            itemList: [],
        };
        goodList.goods.forEach((good) => {
            if(good.count > 0){
                let item = {};
                item.goodId = good.goodId;
                item.goodNum = good.count;
                bill.itemList.push(item);
                good.inventory -= good.count;
                good.count = 0;
            }
        });
        addBillItem(bill)
            .then(res => console.log(res));
    }
</script>


<template>

	<el-container class="listContainer">
    	<el-header class="listTitle">库存信息</el-header>
    	<el-main class="listMain">
			<el-table :data="goodList.goods" height="500"  style="width: 100%">
                <!-- <el-table-column type="selection" width="55" /> -->
				<el-table-column prop="goodId" align="center" label="商品编号" />
				<el-table-column prop="name" align="center" label="商品名称" width="280" />
				<el-table-column prop="price" align="center" label="商品单价" />
				<el-table-column prop="inventory" align="center" label="商品库存" />
				<el-table-column label="商品数量" width="300" align="center">
					<template #default="scope">
						<el-button style="margin-right: 10px;" size="mini" type="primary" :disabled = activeless(scope.row) @click="lessNum(scope.row)">-</el-button>
                        {{scope.row.count}}/{{scope.row.inventory}}
						<el-button  :disabled = activeadd(scope.row)  size="mini" @click="addNum(scope.row)" type="primary">+</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-main>
        <el-footer class="listFooter">
            <el-row>
                <el-col :span="6">
                </el-col>
                <el-col :span="6"></el-col>
                <el-col :span="7">
                    <div class="sumBlock">
                        <h1>合计:￥{{orderTotal}}</h1>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div style="margin-top: 18px; margin-right: 10px;">
                        <el-button type="danger" plain @click="clearAll()">清空</el-button>
                        <el-button type="success" plain @click="purchase()">购买</el-button>
                    </div>
                </el-col>
            </el-row>
        </el-footer>
	</el-container>

	<el-dialog v-model="dialogVisible" title="修改商品" width="30%">
		<el-form v-model="editgooditem">
			<el-form-item label="商品编号">
      	<el-input disabled v-model="editgooditem.goodId"></el-input>
    	</el-form-item>
			<el-form-item label="商品名称">
      	<el-input disabled v-model="editgooditem.name"></el-input>
    	</el-form-item>
			<el-form-item label="商品价格">
      	<el-input :prefix-icon="Coin" v-model="editgooditem.price"></el-input>
    	</el-form-item>
			<el-form-item label="商品库存">
      	<el-input :prefix-icon="Shop" v-model="editgooditem.inventory"></el-input>
    	</el-form-item>
		</el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="editConfirm()">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>


<style scoped>
	.listContainer{
		padding: 0;
		background: white;
	}

	.listTitle{
		line-height: 40px;
		text-align: center;
		background: white;
		margin: 20px;
		margin-bottom: 0px;
	}

	.el-header{
		height: 40px;
	}

	.listMain{
		margin: 0;
	}
    
    .listFooter{
        margin-top: 10px;
        height: 100px;
        /* background: red; */
    }
    .listFooter .sumBlock{
        display: flex;
        justify-content: flex-end;
        font-size: 25px;
        margin-top: 20px;
    }
</style>