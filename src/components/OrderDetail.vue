<script setup>
  // const dialogVisible = fal;
  const emits = defineEmits(['update:dialogVisible']);
  const props = defineProps({
    dialogVisible: Boolean,
		/** @type {{ goodId: Number, name: string, price: number, goodNum: number, amount: number,}[]} */
    billList: Array,
    //   goodId: '',
    //   name: '',
    //   price: '',
    //   goodNum: '',
    //   amount: '',
    // }
  })

  const handleClose = (done) => {
    emits('update:dialogVisible', false);
  }
  // console.log(props.billitem);
</script>

<template>
  <el-dialog
    v-model="props.dialogVisible"
    title="订单详情"
    width="30%"
    :before-close="handleClose"
  >
    <el-table :data="props.billList" stripe style="width: 100%">
      <el-table-column prop="goodId" label="商品ID" />
      <el-table-column prop="good.name" label="商品名称"/>
      <el-table-column prop="good.price" label="商品单价"/>
      <el-table-column prop="goodNum" label="商品数量"/>
      <el-table-column prop="amount" label="商品总价"/>
    </el-table>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="$emit('update:dialogVisible', false)">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>


<style scoped>

</style>