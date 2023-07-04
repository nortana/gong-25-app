<template>
	<view class="pageContent">
		<!-- @clickLeft="clickLeftHandle" left-icon="left" -->
		<uni-nav-bar title="我的员工" dark :fixed="true" shadow background-color="#007AFF" status-bar
			@clickLeft="clickLeftHandle" left-icon="left" />

		<view>
			<scroll-view :scroll-top="scrollTop" scroll-y="true" :style="[{height:clineHeight+'px'}]"
				@scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
				<block v-for="(item,index) in list" :key="index">
					<view style="margin: 20px;background-color: white;padding: 10px;position: relative;">
						<view style="display: flex;flex-direction:row;">
							<view>
								<image style="width: 50px;height: 50px;" src="@/static/g.png"></image>
							</view>
							<view style="margin-left: 10px;line-height: 26px;">
								<view>李四</view>
								<view>15812349876</view>
							</view>
						</view>
						<view style="display: flex;flex-direction:row;position: absolute;right: 20px;top: 38px;
						-webkit-justify-content: flex-end;justify-content: flex-end;">
							<view>
								变更职位
							</view>
							<view style="margin-left: 10px;">
								删除
							</view>
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
				clineHeight: 600,

			}
		},
		onLoad() {
			this.getClineHeight();
		},
		methods: {

			getBarHeight() {
				const res = uni.getSystemInfoSync()
				if (res.platform === 'ios') {
					return 44 + res.statusBarHeight
				} else if (res.platform === 'android') {
					return 48 + res.statusBarHeight
				} else {
					return 0;
				}
			},
			//获取可视区域高度
			getClineHeight() {
				const res = uni.getSystemInfo({
					success: (res => {
						console.log("res.windowHeight:::", res.windowHeight);
						this.clineHeight = res.windowHeight - this.getBarHeight() - 310;
					})
				});
				console.log("this.clineHeight::", this.clineHeight)
			},
			clickLeftHandle() {
				uni.navigateTo({
					url: '/pages/my/myenterprise'
				})
			},
			upper: function(e) {
				//console.log(e)
			},
			lower: function(e) {
				//console.log(e)
			},
			scroll: function(e) {
				//console.log(e)
				this.old.scrollTop = e.detail.scrollTop
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