<script setup> 
	import {
		Goods,
		Box
	} from '@element-plus/icons'
</script>

<template>
	<el-container style="height:100vh">
    <el-header class="dashboardHeader">OnlineStorage</el-header>
      <el-container>
        <el-aside width="160px">
					<el-menu default-active="/dashboard/goods" router>
						<el-menu-item index="/dashboard/goods">
          		<el-icon><goods /></el-icon>
          		<span>货物列表</span>
        		</el-menu-item>
						<el-menu-item index="/dashboard/orders">
          		<el-icon><box /></el-icon>
          		<span>订单列表</span>
        		</el-menu-item>
						<el-menu-item index="3">
          		<el-icon><goods /></el-icon>
          		<span>Three</span>
        		</el-menu-item>
					</el-menu>
				</el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
  </el-container>
</template>


<style scoped>
	.dashboardHeader {
		background-color: #b3c0d1;
		color: var(--el-text-color-primary);
		text-align: center;
		line-height: 60px;
	}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>