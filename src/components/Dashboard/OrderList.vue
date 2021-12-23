<script setup>
  import { onMounted, reactive, ref } from "vue-demi";
  import { useBillStore } from "../../store/Bills";
  import { Timer, Edit, Search } from "@element-plus/icons";
  import OrderDetail from "../OrderDetail.vue";
  

  const detailVisible = ref(false);
  const billList = useBillStore();
  const billitems = reactive([]);
  onMounted(() => {
    billList.getlist();
  });
  function showDetail(order){
    // console.log(order.itemList);
    billitems.length = 0;//清空数组
    for(let i = 0; i < order.itemList.length; ++i){
      billitems.push(order.itemList[i]);
    }
    // billitems = order.itemList;
    console.log(billitems);
    detailVisible.value = true;
  }
</script>


<template>
  <el-container class="orderContainer">
    <el-header class="orderTitle">订单信息</el-header>
    <el-main class="orderMain">
      <el-table :data="billList.validBills" style="width: 100%">
        <el-table-column prop="billId" label="订单编号" width="150" />
        <el-table-column prop="customer.name" label="客户" width="160"/>
        <el-table-column prop="customer.address" label="收获地址" width="240"/>
        <el-table-column prop="totalAmount" label="订单金额" width="180" />
        <el-table-column label="订单时间" width="200" align="center">
          <template #default="scope">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.billTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Operations" align="center">
					<template #default="scope">
						<el-button size="mini" type="primary" plain :icon="Search" @click="showDetail(scope.row)">Detail</el-button>
						<el-button size="mini" type="primary" :icon="Edit" @click="console.log(scope.row)">Edit</el-button>
					</template>
				</el-table-column>
      </el-table>
    </el-main>
  </el-container>

  <order-detail v-model:dialogVisible = "detailVisible" :billList = "billitems"></order-detail>
</template>


<style scoped>
  .orderContainer{
    padding: 0;
		background: white;
  }

  .orderTitle{
    line-height: 40px;
		text-align: center;
		background: white;
		margin: 20px;
		margin-bottom: 0px;
  }

  .el-header{
		height: 40px;
	}

  .orderMain{
    margin: 0;
  }
</style>