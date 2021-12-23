<script setup>
	import { onMounted, ref, reactive } from 'vue-demi';
	import { useGoodStore } from '../../store/Goods';
	import { Edit, Coin, Shop } from '@element-plus/icons';
	const goodList = useGoodStore();
	onMounted(() => {
		goodList.getlist();
	})

	const dialogVisible = ref(false);
	const goodIndex = ref(0);
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
</script>


<template>

	<el-container class="listContainer">
    	<el-header class="listTitle">库存信息</el-header>
    	<el-main class="listMain">
			<el-table :data="goodList.goods" style="width: 100%">
				<el-table-column prop="goodId" label="商品编号"  width="180" />
				<el-table-column prop="name" label="商品名称" width="280" />
				<el-table-column prop="price" label="商品单价" />
				<el-table-column prop="inventory" label="商品库存" />
				<el-table-column label="Operations" width="200">
					<template #default="scope">
						<el-button size="mini">Detail</el-button>
						<el-button size="mini" type="primary" :icon="Edit" @click="editGood(scope.$index)">Edit</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-main>
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
</style>