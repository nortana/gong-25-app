<template>
	<view class="pageContent">
		<!-- @clickLeft="clickLeftHandle" left-icon="left" -->
		<uni-nav-bar title="平台管理" dark :fixed="true" shadow background-color="#007AFF" status-bar 
			 />
		<view style="height: 250px;border: 1px solid white;background-color: #0175f2;color: white;position: relative;">
			<view style="flex-direction: row;display: flex;margin-top: 30px;margin-left: 30px;">
				<view>
					<image style="width: 80px; height: 80px;border-radius: 50px;" src="@/static/g1.png"></image>
				</view>
				<view style="margin: 18px;">
					<view style="font-size: 23px;font-weight: 1000;">李白</view>
					<view style="font-size: 18px;margin-top: 5px;">工25平台人员</view>
				</view>
			</view>
			<view style="position: absolute;background-color: #fed98b;right: 0;top: 85px;
			border-top-left-radius: 50px;border-bottom-left-radius: 50px;padding:2px 5px 2px 10px;">
				<image style="width: 14px;height: 14px;" src='@/static/g18.png'></image>
				<text style="color: black;font-size: 18px;margin-left: 5px;">切换身份</text>
			</view>
			<view style="height: 100px;margin: 10px;">
				<view style="display: flex;flex-direction:row;font-size: 20px;">
					<view
						style="-webkit-flex: 1;flex: 1;display: flex; height: 100px;justify-content: center; align-items: center; ">
						<view style="display: flex;flex-direction:column;">
							<view style="text-align: center;">12</view>
							<view style="margin-top: 10px;">平台认证数</view>
						</view>
					</view>
					<view
						style="-webkit-flex: 1;flex: 1;display: flex;height: 100px; justify-content: center; align-items: center; ">
						<view style="display: flex;flex-direction:column;">
							<view style="text-align: center;">12</view>
							<view style="margin-top: 10px;">创业班数</view>
						</view>
					</view>
					<view  
						style="-webkit-flex: 1;flex: 1;display: flex;height: 100px; justify-content: center; align-items: center; ">
						<view style="display: flex;flex-direction:column;">
							<view style="text-align: center;">12</view>
							<view style="margin-top: 10px;">创业班总人数</view>
						</view>
					</view>
				</view>
			</view>

		</view>

		<view style="height: 95px;margin: 15px;background-color: white;padding: 20px 0px;border-radius: 10px;">
			<view style="display: flex;flex-direction:row;">
				<view style="-webkit-flex: 1;flex: 1;text-align: center;" @click="openeclassHandle">
					<image style="width: 60px;height: 60px;" src='@/static/g15.png'></image>
					<view style="font-size: 20px;">创业班管理</view>
				</view>
				<view @click="authenticationmanagementHandle" style="-webkit-flex: 1;flex: 1;text-align: center;">
					<image style="width: 60px;height: 60px;" src='@/static/g16.png'></image>
					<view style="font-size: 20px;">认证管理</view>
				</view>
				<view @click="crowdadministrationHandle"  style="-webkit-flex: 1;flex: 1;text-align: center;">
					<image style="width: 60px;height: 60px;" src='@/static/g17.png'></image>
					<view style="font-size: 20px;">群管理</view>
				</view>
			</view>

		</view>

		<view style="background-color: white;margin: 15px;border-radius: 10px;">
			<view style="display: flex;flex-direction:column;">
				<view @click="awardslistHandle"
					style="margin: 10px;padding: 10px;display: flex;flex-direction:row;-webkit-justify-content: space-between;justify-content: space-between;">
					<view>
						<text style="font-size: 21px;">获奖列表</text>
					</view>
					<view>
						<uni-icons type="forward" size="30" />
					</view>
				</view>
				<view @click="ordinaryUserHandle"
					style="margin: 10px;padding: 10px;display: flex;flex-direction:row;-webkit-justify-content: space-between;justify-content: space-between;">
					<view>
						<text style="font-size: 21px;">进入普通用户</text>
					</view>
					<view>
						<uni-icons type="forward" size="30" />
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			ordinaryUserHandle() {
				uni.navigateTo({
					url: '/pages/my/my'
				})
			},
			openeclassHandle() {
				uni.navigateTo({
					url: '/pages/administrator/entrepreneurshipclassadministration'
				})
			},
			awardslistHandle() {
				uni.navigateTo({
					url: '/pages/administrator/awardslist'
				})

			},
			authenticationmanagementHandle() {
				uni.navigateTo({
					url: '/pages/administrator/authenticationmanagement'
				})
			},
			crowdadministrationHandle() {
				uni.navigateTo({
					url: '/pages/crowd/crowdadministration'
				})
			},
			clickLeftHandle() {},
		}
	}
</script>

<style>
	.pageContent {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
	}
</style>