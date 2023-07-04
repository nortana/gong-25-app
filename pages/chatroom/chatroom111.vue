<template>
	<view class="pageContent">
		<uni-nav-bar title="聊天室" dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left"
			@clickLeft="clickLeftHandle" />
		<view style="margin: 20px;">
			<view style="text-align: center;font-size: 20px;">A家家具装饰家居有限公司</view>
			<view style="text-align: center;font-size: 18px;">HR:张女士</view>
		</view>
		<view>
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll">
				<block v-for="(item,index) in listrow" :key="index">
					<view class="scroll-view-item_H"
						:style="{'margin-left':index>0?'10px':0,'background-color':'white'}">
						<view class="bg-position-card" style="padding-left: 3px;">职位卡</view>
						<view style="display: flex;flex-direction:column;padding: 6px;">
							<view style="font-size: 16px;font-weight: 600;">{{item.name}}</view>
							<view style="font-size: 16px;font-weight: 600;color: red;">{{item.xianz}}</view>
							<view style="display: flex;flex-direction:row;">
								<view
									style="font-size: 12px;background-color: #f2f2f2;border-radius: 5px;padding: 0 6px;">
									{{item.x.x1}}</view>
								<view
									style="font-size: 12px;background-color: #f2f2f2;border-radius: 5px;padding: 0 6px;margin-left: 5px;">
									{{item.x.x2}}</view>
							</view>
						</view>
					</view>
				</block>
			</scroll-view>
		</view>
		<!-- :style="[{height:clineHeight+'px'}]" -->
		<view :style="{'width': '120px','float': 'left','height':clineHeight+'px'}">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" @scrolltoupper="upper" @scrolltolower="lower"
				@scroll="scroll">
				<block v-for="(item,index) in listcol" :key="index">
					<view>
						<view class="bg-position-card" style="padding-left: 3px;">职位卡</view>
						<view style="display: flex;flex-direction:column;padding: 6px;">
							<view style="font-size: 18px;font-weight: 600;">{{item.name}}</view>
							<view style="font-size: 18px;margin-top: 5px;">{{item.xianz}}</view>
						</view>
					</view>

				</block>
			</scroll-view>
		</view>
		<view style="float: left;">22222222222222222</view>





	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				clineHeight: 1660,
				listcol: [{
						name: '张珊珊',
						xianz: '产品经理',
					}, {
						name: '李霞',
						xianz: '需求分析师',
					},
					{
						name: '张晓辉',
						xianz: 'UI设计师',
					}
				],
				listrow: [{
						name: '产品经理1',
						xianz: '12k-16k',
						x: {
							x1: '五险一金',
							x2: '年底双薪'
						}
					}, {
						name: '产品经理2',
						xianz: '12k-16k',
						x: {
							x1: '五险一金',
							x2: '年底双薪'
						}
					},
					{
						name: '产品经理3',
						xianz: '12k-16k',
						x: {
							x1: '五险一金',
							x2: '年底双薪'
						}
					}
				],
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
			}
		},
		onLoad() {
			console.log(1)
			this.getClineHeight();
			this.init();
		},
		methods: {
			init() {
				console.log('init method')
			},
			clickLeftHandle() {
				uni.navigateTo({
					url: '/pages/chatroom/chatroomlist'
				})
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
						console.log("this.getBarHeight():::", this.getBarHeight());
						this.clineHeight = res.windowHeight - this.getBarHeight() - 203;
					})
				});
				console.log("this.clineHeight::", this.clineHeight)
			},
			detailChatHandle() {
				uni.navigateTo({
					url: '/pages/chatroom/chatroomlist'
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
		/* background: linear-gradient(to bottom, #ffdde1, #ee9ca7); */
		background-color: #f2f2f2;
	}

	.bg-position-card {
		background-image: linear-gradient(500deg, #007aff, #ffffff, #ffffff);
		color: #ffffff;
		border-top-right-radius: 10px;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item_H {
		display: inline-block;
	}
</style>