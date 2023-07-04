<template>
	<view class="pageContent">
		<!-- left-icon="left" @clickLeft="clickLeftHandle" -->
		<uni-nav-bar title="消息" dark :fixed="true" shadow background-color="#007AFF" status-bar />

		<view style="border: 2px solid #d7dfef;margin: 20px;background-color: white;border-radius: 10px;">
			<view style="display: flex;flex-direction:row;padding: 5px;">
				<view @click="selectHandle(1)"
					style="-webkit-flex: 1;flex: 1;display: flex;justify-content: center; align-items: center; ">
					<view style="display: flex;flex-direction:column;">
						<image style="width: 45px; height: 45px;" src="@/static/g1.png"></image>
						<view><text :style="{color:isSelect?'#007aff':''}">定聘通知</text></view>
					</view>
				</view>
				<view @click="selectHandle(2)"
					style="-webkit-flex: 1;flex: 1;display: flex; justify-content: center; align-items: center; ">
					<view style="display: flex;flex-direction:column;">
						<image style="width: 45px; height: 45px;" src="@/static/g2.png"></image>
						<view><text :style="{color:!isSelect?'#007aff':''}">系统通知</text></view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="isSelect">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" @scrolltoupper="upper" @scrolltolower="lower"
				@scroll="scroll" :style="[{height:clineHeight+'px'}]">
				<block v-for="(item,index) in betrothMsg" :key="index">
					<view class="" style="display: flex;flex-direction:row;margin: 20px;position: relative;">
						<view>
							<image style="width: 40px;height: 40px;border-radius: 50px;margin-top: 10px;"
								src="@/static/logo.png"></image>
						</view>
						<view class="talkbubble-one" style="display: flex;flex-direction:column;
						margin-left: 20px;background-color: white;padding: 10px;
						border-radius: 10px;border: 2px solid #d7dfef;">
							<view style="font-size: 16px;font-weight: 600;">定聘消息</view>
							<view style="font-size: 13px;margin: 8px 0px;">您有一条定聘消息，请点击查看详情~</view>
							<view style="font-size: 12px;background-color: #f2f2f2;padding: 10px;">
								<view>张海洋</view>
								<view>新时代网络科技有限公司</view>
							</view>
						</view>
					</view>
				</block>
			</scroll-view>
		</view>

		<view v-if="!isSelect">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" @scrolltoupper="upper" @scrolltolower="lower"
				@scroll="scroll" :style="[{height:clineHeight+'px'}]">
				<block v-for="(item,index) in systemMsg" :key="index">
					<view class="" style="display: flex;flex-direction:row;margin: 20px;position: relative;">
						<view>
							<image style="width: 40px;height: 40px;border-radius: 50px;    margin-top: 10px;"
								src="@/static/g3.png"></image>
						</view>
						<view class="talkbubble-two" style="display: flex;flex-direction:column;
						margin-left: 20px;background-color: white;padding: 10px;
						border-radius: 10px;border: 2px solid #d7dfef;">
							<view style="font-size: 16px;font-weight: 600;">预约失败</view>
							<view style="font-size: 13px;margin: 8px 0px;">您有一条定聘消息，请点击查看详情~</view>
							<view style="">
								<button size="mini" style="width: 100%;border-radius: 10px;" type="primary"
									@click="submit">点击查看</button>
							</view>
						</view>
					</view>
				</block>
			</scroll-view>
		</view>


		<bottom-state-nav :factoryActive="false" :positionActive="false" :messageActive="true"
			:myselfActive="false"></bottom-state-nav>





	</view>
</template>

<script>
	import bottomStateNav from '@/pages/components/bottom-state-nav'
	export default {
		data() {
			return {
				clineHeight: 100,
				betrothMsg:[],
				systemMsg:[],
				isSelect: true,
				factoryActive: false,
				positionActive: false,
				messageActive: true,
				myselfActive: false,
				activeIndex: -1,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],

			};
		},

		components: {
			bottomStateNav
		},
		onLoad() {
			this.getClineHeight();
			this.queryData(2);
		},
		onShow() {},
		onHide() { //离开页面前清除计时器
		},
		//获取可视区域高度
		methods: {
			queryData(typeId) {
				this.loading = true;
				this.$http.request({
					url: '/userMessageList',
					dataType: 'text',
					data: {
						type_id: typeId
					},
				}).then(res => {
					let jsonObj = JSON.parse(res);
					console.log("jsonObj--->", jsonObj)
					if (jsonObj.code == 0) {
						if(typeId==1){
							this.systemMsg=jsonObj.data
						} else if(typeId==2){
							this.betrothMsg=jsonObj.data
						} 
					} else {
						uni.showModal({
							content: jsonObj.msg,
							showCancel: false
						});
					}

					this.datac = jsonObj.data;

					this.loading = false;
				}).catch(err => {
					console.log('request fail', err);
					uni.showModal({
						content: err.errMsg,
						showCancel: false
					});

					this.loading = false;
				});

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
						this.clineHeight = res.windowHeight - this.getBarHeight() - 200;
					})
				});
				console.log("this.clineHeight::", this.clineHeight)
			},
			selectHandle(index) {
				if (index === 1) {
					this.isSelect = true
					this.queryData(2);
				} else if (index === 2) {
					this.isSelect = false
					this.queryData(1);
				}
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
	.talkbubble-one {
		position: relative;
	}

	.talkbubble-one::before {
		content: "";
		position: absolute;
		right: 100%;
		top: 16px;
		border-top: 13px solid transparent;
		border-right: 20px solid white;
		border-bottom: 13px solid transparent;
	}


	.talkbubble-two {
		position: relative;
	}

	.talkbubble-two::before {
		content: "";
		position: absolute;
		right: 100%;
		top: 16px;
		border-top: 13px solid transparent;
		border-right: 21px solid white;
		border-bottom: 13px solid transparent;
	}
	.pageContent {
		position: absolute;
		width: 100%;
		height: 100%;
		/* background: linear-gradient(to bottom, #ffdde1, #ee9ca7); */
		background-color: #f2f2f2;
	}
</style>