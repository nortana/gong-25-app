<template>
	<view>
		<uni-nav-bar title="群管理" dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left"
			@clickLeft="clickLeftHandle" />
		<view style="margin: 20px;font-size: 20px;font-weight: 600;">我创建的群</view>
		<view>
			<scroll-view :scroll-top="scrollTop" scroll-y="true" :style="[{height:clineHeight+'px'}]"
				@scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
				<block v-for="(item,index) in list" :key="index">
					<view :style="{'margin':index>0?'20px':'0 20px 20px 20px','background-color':'white',
							'position':'relative'}">
						<view style="display: flex;flex-direction: row">
							<view>
								<image style="width: 50px;height: 50px;" src='@/static/g15.png'></image>
							</view>
							<view  style="margin-left: 10px;display: flex;flex-direction: column;">
								<view>浙江创业班群名称</view>
								<view>浙江</view>
							</view>
							<view style="position: absolute;right: 5px;top: 10px;">
								<uni-icons type="forward" size="40"></uni-icons>
							</view>
						</view>
					</view>
				</block>
			</scroll-view>
		</view>
		<create-crowd></create-crowd>
	</view>
</template>

<script>
	import createCrowd from '@/pages/components/createcrowd'
	export default {
		data() {
			return {
				clineHeight: 600,
				list: [{}, {}, {}, {}, {}, {}, {}, {}],
				scrollTop: 0,
				old: {
					scrollTop: 0
				},

			}
		},
		components: {
			createCrowd
		},
		onLoad() {
			this.getClineHeight();
		},
		methods: {
			clickLeftHandle() {
				uni.navigateTo({
					url: '/pages/administrator/administrator'
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
						this.clineHeight = res.windowHeight - this.getBarHeight() - 100;
					})
				});
				console.log("this.clineHeight::", this.clineHeight)
			},
		}
	}
</script>

<style>

</style>