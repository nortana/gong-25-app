<template>
	<view class="pageContent">
		<uni-nav-bar dark :fixed="true" background-color="#007AFF" status-bar title="工25平台" />
		<view style="background-color: white;">
			<view style="flex-direction: row;display: flex;">
				<view>
					<input
						style="margin: 10px 10px 0 10px;background-color: #f6f8fa;height:30px;width:530rpx;border-radius: 50px;"
						class="uni-input" confirm-type="search" placeholder="搜索职位名称" v-model="keyword" />
				</view>
				<view>
					<button style="margin: 10px 10px 0 0px;border-radius: 30px;width: 130rpx;"
						class=" bg-gradual-blue shadow-blur round" size="mini" @click="searchByKey">搜索</button>
				</view>
			</view>

		</view>
		<!-- 		 <view class="cu-bar fixed">
			<view class="search-form round">
					<input class="uni-input" confirm-type="search" placeholder="搜索职位名称" v-model="keyword" />
			</view>
			<view class="action">
				
			</view>
		</view> -->
		<view class="" style="display: flex;flex-direction:row;background-color: #ffffff;">
			<view class="div-black-css div-black-css-1">经济推手</view>
			<view class="div-black-css div-black-css-2" style="display: flex;flex-direction:column;">
				<view style="display: flex;flex-direction:row;background-color: #ffffff;
				height: 1px;margin-top: -24px;margin-left: 12rpx;margin: 0 auto">
					<view class="" style="margin-top: -24px;"><text class="font-num-css">{{hour}}</text></view>
					<view class="" style="margin-top: -24px;"><text class="font-num-css-f">:</text></view>
					<view class="" style="margin-top: -24px;"><text class="font-num-css">{{minute}}</text></view>
					<view class="" style="margin-top: -24px;"><text class="font-num-css-f">:</text></view>
					<view class="" style="margin-top: -24px;"><text class="font-num-css">{{second}}</text></view>
				</view>
				<view class="" style="margin-top: 28px;margin: 0 auto">整点速配</view>
			</view>


			<view class="div-black-css div-black-css-3">创业班</view>
		</view>
		<view class="uni-padding-wrap " style="padding: 0;">
			<uni-segmented-control :current="current" :values="items" :style-type="styleType"
				:active-color="activeColor" @clickItem="onClickItem" />
		</view>
		<view style="background-color: #f5f5f5;">
			<view v-if="current === 0" style="margin: 11px;background-color: #f5f5f5;" :loading="loading">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" :style="[{height:clineHeight+'px'}]"
					@scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
					<block v-for="(item,index) in list" :key="index">
						<view class="" style="
							display: flex;flex-direction:column;
							border: 2px solid #007aff;;
							margin-top: 10px;
							border-radius: 10px;background-color: #ffffff;">
							<view class="bg-position-cardshade-top" style="">
								<text class="bg-position-cardshade" style="">职位卡</text>
								<uni-icons custom-prefix="iconfont" type="icon-fenxiang" color="#5e6d82" size="18"
									style="position: absolute;line-height: 30px;right: 15px;" />
							</view>
							<view style="display: flex;flex-direction:row;margin-top: 5px;position: relative;">
								<view class="bg-position-cardshade-name" style="">{{item.work_name}}</view>
								<!-- <view style="border: 1px solid;margin-left: 5px;
									    color: #007aff;font-size: 10px;">距您{{item.longitude_latitude_distance}}KM</view> -->
								<view class="bg-position-cardshade-distance" style="">
									距您{{item.longitude_latitude_distance}}KM</view>

								<!-- "salary_type": 1, //薪资类别：1=时薪，2=日薪，3=周薪，4=月薪，5=季薪，6=年薪 -->
								<view v-if="item.salary_type==1" class="bg-position-cardshade-salary-type">时薪</view>
								<view v-if="item.salary_type==2" class="bg-position-cardshade-salary-type">日薪</view>
								<view v-if="item.salary_type==3" class="bg-position-cardshade-salary-type">周薪</view>
								<view v-if="item.salary_type==4" class="bg-position-cardshade-salary-type">月薪</view>
								<view v-if="item.salary_type==5" class="bg-position-cardshade-salary-type">季薪</view>
								<view v-if="item.salary_type==6" class="bg-position-cardshade-salary-type">年薪</view>
								<view class="bg-position-cardshade-salary" style="">{{item.salary}}</view>
							</view>
							<!-- <view class="" style="display: flex;flex-direction:row;margin-top: 6px;">
								<view v-if='item.gender==2'>女</view>
							</view> -->
							<view class="bg-position-cardshade-content" style="">
								{{item.work_require}}
							</view>

							<view class="bg-position-cardshade-speed" style="">
								<text>15人速配中</text>
							</view>

							<view class="" style="display: flex;flex-direction:row;border-top: 1px solid #f5f5f5;
									padding-top: 5px;padding-bottom: 5px;position: relative;line-height: 15px;">
								<!-- <view class="" style="width: 40px;height: 40px; 
									background-color: #007aff;border-radius: 50px;margin-left: 10px;
									margin-left: 10px;"></view> -->
								<image style="width: 25px;height: 25px; border-radius: 50px;margin-left: 10px;
									margin-left: 10px;" :src="item.company.logo"></image>
								<view class=""
									style="display: flex;flex-direction:column;margin-left: 10px;font-size: 10px;">
									<view class="">{{item.company.user_name}}</view>
									<view class="">{{item.time_c}}</view>
								</view>
								<view class="" style=" position: absolute; right: 16px;top: 2px;">
									<button type="primary" size="mini">参与速配</button>
									<button type="primary" size="mini" @click="reservationHandle">预约</button>
								</view>
							</view>
						</view>
					</block>
				</scroll-view>

			</view>
			<!-- 	<view v-if="current === 1"><text class="content-text">选项卡2的内容</text></view>
				<view v-if="current === 2"><text class="content-text">选项卡3的内容</text></view>
				<view v-if="current === 3"><text class="content-text">选项卡4的内容</text></view>
				<view v-if="current === 4"><text class="content-text">选项卡5的内容</text></view>
				<view v-if="current === 5"><text class="content-text">选项卡6的内容</text></view> -->
		</view>

		<bottom-state-nav :factoryActive="true" :positionActive="false" :messageActive="false"
			:myselfActive="false"></bottom-state-nav>


		<view>
			<!-- 提示窗示例 -->
			<uni-popup ref="reservationDialog" type="dialog">
				<uni-popup-dialog type="success" cancelText="预约" confirmText="取消" title="预约确定"
					content="请确定是否预约,双方均成功预约才可沟通!" @confirm="reservationConfirm"
					@close="reservationClose"></uni-popup-dialog>
			</uni-popup>

		</view>
		<my-chat></my-chat>
	</view>
</template>

<script>
	import myChat from '@/pages/components/mychat'
	import bottomStateNav from '@/pages/components/bottom-state-nav'
	export default {
		data() {
			return {
				x: 0,
				y: 0,
				loading: false,
				clineHeight: 100,
				items: ['推荐', '月薪', '周薪', '日薪', '时薪', '创业服务'],
				styleType: 'text',
				current: 0,
				activeColor: '#007aff',
				keyword: '',
				hour: null,
				minute: '',
				second: '',
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				list: [],
				timer: null, //定时器名称
				timerHour: null, //定时器名称
			};
		},
		components: {
			myChat,
			bottomStateNav
		},
		onLoad() {
			this.getClineHeight();
			this.initData();
			this.setTimew();
		},
		onShow() {
			var _this = this;
			this.timerHour = setInterval(_this.onTheHour, 1000 * 60);
			this.timer = setInterval(_this.setTimew, 1000);
		},
		//uniapp中onHide()能监听到页面离开
		onHide() { //离开页面前清除计时器
			// console.log('onHide');
			clearInterval(this.timer);
			this.timer = null;
			clearInterval(this.timerHour);
			this.timerHour = null;
		},
		//获取可视区域高度
		methods: {
			reservationConfirm() {},
			reservationClose() {
				uni.navigateTo({
					url: '/pages/positioncard/positioncard'
				})
			},
			reservationHandle() {
				this.$refs.reservationDialog.open()
			},
			onChange: function(e) {
				this.old.x = e.detail.x
				this.old.y = e.detail.y
			},
			setTimew() {
				let date = new Date();
				this.hour = date.getHours();
				if (this.hour < 10) {
					this.hour = '0' + this.hour;
				}
				this.minute = date.getMinutes();
				if (this.minute < 10) {
					this.minute = '0' + this.minute;
				}
				this.second = date.getSeconds();
				if (this.second < 10) {
					this.second = '0' + this.second;
				}

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
						this.clineHeight = res.windowHeight - this.getBarHeight() - 245;
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
			initData() {
				this.queryList(0);
			},
			onTheHour() {
				console.log('111111')
				if (this.second == '00' && this.minute <= 5) {
					this.queryList(0);
				}
			},
			queryList(salaryType) {
				this.loading = true;
				let url = "companyResumeListByUser"
				this.$http.request({
					url: '/companyResumeListByVisitor',
					dataType: 'text',
					data: {
						page: 1,
						search: this.keyword,
						salary_type: 0,
						longitude: 113.6603453,
						latitude: 34.7520290,
					},
				}).then(res => {
					let jsonObj = JSON.parse(res);
					console.log('jsonObj--->',jsonObj)
					this.list = jsonObj.data
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
			searchByKey() {
				console.log('1111111111111111..>>>', this.current)
				if (this.current == 0) {
					this.queryList(0);
				} else if (this.current == 1) {
					this.queryList(4);
				} else if (this.current == 2) {
					this.queryList(3);
				} else if (this.current == 3) {
					this.queryList(2);
				} else if (this.current == 4) {
					this.queryList(1);
				}
			},
			onClickItem(e) {
				////薪资类别：1=时薪，2=日薪，3=周薪，4=月薪，5=季薪，6=年薪
				//items: ['推荐', '月薪', '周薪', '日薪', '时薪', '创业服务'],
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
					if (this.current == 1) {
						this.queryList(4);
					} else if (this.current == 2) {
						this.queryList(3);
					} else if (this.current == 3) {
						this.queryList(2);
					} else if (this.current == 4) {
						this.queryList(1);
					}
				}
			},


		}
	}
</script>

<style lang="less">
</style>
<style>
	/* ???????????????????????????????????????????????????????????????????????????????? */
	.bg-position-cardshade-top {
		background-image: linear-gradient(500deg, #007aff, #ffffff, #ffffff);
		height: 23px;
		border-top-left-radius: 5px;
		border-top-right-radius: 10px;
	}

	.bg-position-cardshade {
		font-weight: 700;
		font-style: italic;
		font-size: 13px;
		line-height: 23px;
		padding-left: 10px;
		color: white;
	}

	.bg-position-cardshade-name {
		font-size: 13px;
		padding-left: 10px
	}

	.bg-position-cardshade-salary-type {
		border: 1px solid;
		line-height: 12px;
		margin-left: 5px;
		padding: 1px;
		color: #fcc484;
		height: 12px;
		font-size: 3px;
		margin-top: 2px;
	}

	.bg-position-cardshade-distance {
		border: 1px solid;
		line-height: 12px;
		margin-left: 5px;
		padding: 1px;
		color: #8ac6ff;
		height: 12px;
		font-size: 3px;
		margin-top: 2px;
	}

	.bg-position-cardshade-salary {
		font-size: 13px;
		padding-left: 10px;
		position: absolute;
		right: 10px;
		color: red
	}

	.bg-position-cardshade-content {
		padding: 0 10px;
		font-size: 13px;
	}

	.bg-position-cardshade-speed {
		background-image: linear-gradient(500deg, #007aff, #ffffff, #ffffff);
		padding-left: 5px;
		height: 18px;
		line-height:18px;
		margin: 2px 10px;
		font-size: 10px;
		line-height: 20px;
		color: white;
	}

	/* ???????????????????????????????????????????????????????????????????????????????? */

	/deep/ .uni-section-header {
		padding: 2px 10px !important;
	}

	.pageContent {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
	}



	.bg-shadeTop {
		background-image: linear-gradient(500deg, #007aff, #ffffff, #ffffff);
		/* background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.01)); */

		color: #ffffff;
		border-top-right-radius: 10px;
	}

	.font-num-css-f {
		font-style: initial;
		font-size: 17px;
		font-weight: 400;
		padding: 0 2px;
	}

	.font-num-css {
		background-color: #007aff;
		color: #ffffff;
		font-style: initial;
		font-size: 14px;
		font-weight: 400;
	}

	.div-black-css {
		border: 2px solid #a0d0ff;
		height: 65px;
		;
		width: calc(100% / 3);
		/* margin: 0 auto; */
		text-align: center;
		line-height: 100px;
		font-size: 16px;
		/* margin-top: 23px; */
		color: #007aff;
		font-weight: 44px;
		border-radius: 10px;
		margin-top: 10px;
		font-weight: 700;
		font-style: italic;
	}

	.div-black-css-1 {
		margin-left: 15px;
		margin-top: 20px;
		line-height: 69px;
	}

	.div-black-css-2 {
		margin-right: 15px;
		margin-left: 15px;
		line-height: 92px;
	}

	.div-black-css-3 {
		margin-right: 15px;
		margin-top: 20px;
		line-height: 69px;
	}




	.text {
		margin: 16rpx 0;
		width: 100%;
		background-color: #fff;
		height: 120rpx;
		line-height: 120rpx;
		text-align: center;
		color: #555;
		border-radius: 8rpx;
	}

	.cu-bar .search-form {
		background-color: #f5f5f5;
		line-height: 40px;
		height: 40px;
		font-size: 15px;
		color: #333333;
		flex: 1;
		display: flex;
		align-items: center;
		margin: 0 19px;
		border-radius: 50px;
	}

	.bg-gradual-blue {
		background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
		color: #ffffff;
	}

	.uni-input-placeholder {
		position: absolute;
		top: auto !important;
		left: 12px;
		color: grey;
		overflow: hidden;
		text-overflow: clip;
		white-space: pre;
		word-break: keep-all;
		pointer-events: none;
		line-height: inherit;
	}

	/deep/ .uni-input-input {
		padding-left: 20px;
	}

	.cu-btn {
		position: relative;
		border: 0px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		padding: 0 19px;
		font-size: 17px;
		height: 40px;
		line-height: 1;
		text-align: center;
		text-decoration: none;
		/*  overflow: visible; */
		margin-left: initial;
		-webkit-transform: translate(0px, 0px);
		transform: translate(0px, 0px);
		margin-right: initial;
		border-radius: 50px;
		margin-right: 10px;
	}

	.cu-bar.fixed,
	.nav.fixed {
		width: 100%;
		z-index: 1024;
		box-shadow: 0 1px 3px rgb(0 0 0 / 10%);
	}

	.bg-white {
		background-color: #ffffff;
		color: #666666;
	}

	.cu-bar {
		display: flex;
		position: relative;
		align-items: center;
		min-height: 63px;
		justify-content: space-between;
	}

	.uni-common-mt {
		margin-top: 30px;
	}

	.uni-padding-wrap {
		padding: 0px 15rpx;
	}
</style>