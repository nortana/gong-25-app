<template>
	<view class="pageContent"  >
		<uni-nav-bar dark :fixed="true" background-color="#007AFF" status-bar title="工25平台" />
		<!-- 		<image :style="[{width: '100%',height:clineHeight+'px',position: 'relative'}]"  src="../../static/economicpusher/g1.png">
		</image> -->
		<view style="position: absolute;right: 0px;top: 65px;">
			<image style="height: 25px;width: 100px;" src="../../static/economicpusher/g2.png"></image>
		</view>
		<view style="position: absolute;right: 0px;top: 95px;">
			<image style="height: 25px;width: 100px;" src="../../static/economicpusher/g3.png"></image>
		</view>

		<view style="position: absolute;top: 290px;display: flex;flex-direction: row;padding: 10px;">
			<view class="view-backgroub-class">
				<view style="display: flex;flex-direction: column;position: relative;">
					<view style="text-align: center;font-size: 18px;margin-top: 10px;color: #a68072;">小米电饭煲</view>
					<view style="text-align: center;margin-top: 10px;">
						<image style="width: 65px;height: 65px;background-color: red;" src=""></image>
					</view>
					<view style="text-align: center;position: absolute;top: 100px;right: 14px;">
						<image style="width: 140px;height: 30px;" src="../../static/economicpusher/g5.png"></image>
					</view>
					<view style="text-align: center;margin-top: 23px;margin-left: 20px;">
						<view style="height: 26px; line-height: 26px;width: 130px;color: white;background-color: #eb903c;border-radius: 40px;">
							 分享20人免费领取 
						</view>
					</view>
				</view>
			</view>
			<view class="view-backgroub-class" style="margin-left: 20px;">
				<view style="display: flex;flex-direction: column;position: relative;">
					<view style="text-align: center;font-size: 18px;margin-top: 10px;color: #a68072;">小米电饭煲</view>
					<view style="text-align: center;margin-top: 10px;">
						<image style="width: 65px;height: 65px;background-color: red;" src=""></image>
					</view>
					<view style="text-align: center;position: absolute;top: 100px;right: 14px;">
						<image style="width: 140px;height: 30px;" src="../../static/economicpusher/g5.png"></image>
					</view>
					<view style="text-align: center;margin-top: 23px;margin-left: 20px;">
						<view style="height: 26px; line-height: 26px;width: 130px;color: white;background-color: #eb903c;border-radius: 40px;">
							 分享20人免费领取 
						</view>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				clineHeight: 100,
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
			//获取可视区域高度 - this.getBarHeight() 
			getClineHeight() {
				const res = uni.getSystemInfo({
					success: (res => {
						console.log("res.windowHeight:::", res.windowHeight);
						this.clineHeight = res.windowHeight - 50;
					})
				});
			},
		}
	}
</script>

<style>
	.pageContent {
		position: absolute;
		width: 100%;
		height: 100%;
		/* background-color: #fbad94; */
		background-image: url(../../static/economicpusher/g1.png);
		background-repeat: no-repeat;
		background-size: cover;
	}

	.view-backgroub-class {
		width: 170px;
		height: 170px;
		border-radius: 10px;
		margin-left: 2px;
		background-image: url(../../static/economicpusher/g4.png);
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>