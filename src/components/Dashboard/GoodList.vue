<script setup>
    const tableData = [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
    ];
</script>


<template>
	<el-container class="listContainer">
    <el-header class="listTitle">Header</el-header>
    <el-main class="listMain">
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="date" label="Date" width="180" />
				<el-table-column prop="name" label="Name" width="180" />
				<el-table-column prop="address" label="Address" />
			</el-table>
		</el-main>
	</el-container>
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