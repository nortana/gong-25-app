<template>
	<view class="pageContent">
		<uni-nav-bar title="聊天室列表" dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left"
			@clickLeft="clickLeftHandle" />
			
		<view :loading="loading">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" :style="[{height:clineHeight+'px'}]"
				@scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
				<block v-for="(item,index) in list" :key="index">
					<!-- :src="item.imageUrl" > -->
					<view class="" style="
							display: flex;flex-direction:row;
							margin: 20px;background-color: #ffffff;
							padding: 5px;position: relative;">
						<view style="border-radius: 100px;">
							<image style="width: 50px;height: 50px;border-radius: 50px;" 
							src="@/static/g2.png" ></image>
						</view>
						<view style="display: flex;flex-direction:column;line-height: 18px;margin-left: 10px;">
							<view>{{item.name}}</view>
							<view>{{item.cname}}</view>
							<view>{{item.ctime}}</view>
						</view>
						 <view @click="detailChatHandle" style="position: absolute;right: 5px;top: 23px;">
							 <uni-icons type="forward" size="45"></uni-icons>
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
				loading: false,
				list2:[],
				list: [{
					imageUrl:'/@/static/g10.png',
					name:'张女士',
					cname:'A家家具装饰有限公司',
					ctime:'2013-10-10 12:14:51'
				},{
					imageUrl:'/@/static/g10.png',
					name:'张若昀',
					cname:'春蝉广告科技有限公司',
					ctime:'2013-10-10 12:14:51'
				},
				{
					imageUrl:'/@/static/g10.png',
					name:'赵丽颖',
					cname:'海大传媒网络科技公司',
					ctime:'2013-10-10 12:14:51'
				}
				],
				clineHeight: 660,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
			}
		},
		onLoad() {
			this.getClineHeight();
		},
		methods: {
			detailChatHandle(){
  				uni.navigateTo({
  					url: '/pages/chatroom/chatroom'
  				})
			},
			clickLeftHandle() {
				uni.navigateTo({
					url: '/pages/platform/platform'
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
						this.clineHeight = res.windowHeight - this.getBarHeight() - 310;
					})
				});
				console.log("this.clineHeight::", this.clineHeight)
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
</style>