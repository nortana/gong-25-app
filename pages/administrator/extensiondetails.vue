<template>
	<view class="pageContent">
		<uni-nav-bar title="详情" dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left"
			@clickLeft="clickLeftHandle" />

		<view style="font-size: 20px;margin: 15px;background-color: white;padding: 20px;border-radius: 5px;">
			<view>
				城市经理：张海洋
			</view>
			<view style="margin-top: 10px;">
				创业班人员总数：张海洋
			</view>
		</view>


		<view
			style="margin: 0px 15px;;display: flex;flex-direction:row;-webkit-justify-content: flex-end;justify-content: flex-end;">
			<view>
				<text @click="dayHandle">日</text>
				<text @click="weekHandle" style="margin-left: 20px;">周</text>
				<text @click="monthHandle" style="margin-left: 20px;">月</text>
			</view>
		</view>

		<view style="background-color: white;margin: 15px;padding: 20px 0px;border-radius: 10px;">
			<view style="flex-direction: row;display: flex;text-align: center;margin-bottom: 5px;">
				<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;">
					<text>排名</text>
				</view>
				<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;">
					<text>创业班</text>
				</view>
				<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;">
					<text>推广数</text>
				</view>
			</view>
			<scroll-view :scroll-top="scrollTop" scroll-y="true">
				<block v-for="(item,index) in list" :key="index">
					<view style="flex-direction: row;display: flex;text-align: center;line-height: 30px;">
						<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;">
							<text>排名</text>
						</view>
						<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;">
							<text>创业班</text>
						</view>
						<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;">
							<text>推广数</text>
						</view>
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{}, {}, {}, {}, {}, {}, {}, {}],
				scrollTop: 0,
				old: {
					scrollTop: 0
				},

			}
		},
		methods: {

			clickLeftHandle() {
				uni.navigateTo({
					url: '/pages/administrator/entrepreneurshipclassadministration'
				})
			},
			dayHandle() {
				console.log('1111111111111111111')
			},
			weekHandle() {
				console.log('1111111111111111111')
			},
			monthHandle() {
				console.log('1111111111111111111')
			},
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