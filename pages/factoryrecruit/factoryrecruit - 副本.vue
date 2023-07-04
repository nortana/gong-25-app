<template>
	<view>
		<uni-nav-bar dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left" title="工厂直招"
			@clickLeft="clickLeftHandle" />

		<view class="cu-bar bg-white search fixed">
			<view class="search-form round">
				<input type="text" class="uni-input-input uni-input-placeholder" v-model="keyword"
					placeholder="输入搜索的关键词" confirm-type="search" @confirm="searchUserByKey"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-gradual-blue shadow-blur round" @tap="searchUserByKey">搜索</button>
			</view>
		</view>
		<uni-section title="">
			<view class="uni-padding-wrap " style="padding: 0;">
				<uni-segmented-control :current="current" :values="items" :style-type="styleType"
					:active-color="activeColor" @clickItem="onClickItem" />
			</view>
			<view style="background-color: #f5f5f5;">
				<view v-if="current === 0" style="margin: 11px;background-color: #f5f5f5;">
					<scroll-view :scroll-top="scrollTop" scroll-y="true" :style="[{height:clineHeight+'px'}]"
						@scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
						<block v-for="(item,index) in list" :key="index">

							<view class="" style="
							display: flex;flex-direction:column;
							border: 2px solid #007aff;;
							margin-top: 10px; 
							border-radius: 10px;background-color: #ffffff;">
								<view class="bg-shadeTop"
									style="height: 30px;border-bottom: 1px solid;position: relative;">
									<text style="font-weight: 700;
										font-style: italic;
										font-size: 18px;
										line-height: 30px;
										padding-left: 10px;">职位</text>
								</view>
								<view class="uni-flex uni-row" style="display: flex;position: relative; padding: 10px;    line-height: 18px;">
									<view class="" style="margin-top: 7px;">
										<image style="width: 60px;height: 60px;border-radius: 5px;"
											src="@/static/logo.png"></image>
									</view>
									<view class="flex-item " style="padding-left: 3px;">

										<view class="uni-flex uni-column" style="padding-left: 1px;"  @click="goPositionDetails()">
											<view class=""
												style="display: flex;flex-direction:row;position: relative;width: 100%;">
												<view class="" style="font-size: 14px;">
													{{item.name}}
												</view>
												<view style="border: 1px solid;line-height: 12px;margin-left: 5px;padding: 1px;
															    color: #8ac6ff;height: 12px;font-size: 3px;
																margin-top: 2px;">月薪X3</view>
												<view style="border: 1px solid; line-height: 12px;margin-left: 5px;padding: 1px;
															    color: #8ac6ff;height: 12px;font-size: 3px;
																margin-top: 2px;">距您1.12KM</view>
												<view class=""
													style="font-size: 14px;position: absolute;right: 1px;color: red">
													{{item.monthlySalary}}
												</view>
											</view>

											<view class="" style="display: flex;flex-direction:row;">
												<uni-icons custom-prefix="iconfont" type="icon-gongzuojingyan"
													color="#5e6d82" size="15" style="" />
												<view class="" style="font-size: 10px;">{{item.workAge}}</view>
												<uni-icons custom-prefix="iconfont" type="icon-edu-line" color="#5e6d82"
													size="20" style="margin-left: 2px;" />

												<view class="" style="font-size: 10px;">{{item.education}}</view>
												<uni-icons custom-prefix="iconfont" type="icon-iconset0209-copy"
													color="#5e6d82" size="14" style="margin-left: 4px;" />
												<view class="" style="font-size: 10px;">{{item.ageLimit}}</view>
												<uni-icons custom-prefix="iconfont" type="icon-xingbie" color="#5e6d82"
													size="16" style="margin-left: 2px;" />
												<view class="" style="font-size: 10px;">{{item.gender}}</view>
											</view>
											<view class="" style="    font-size: 12px;">
												{{item.content}}
											</view>


										</view>
									</view>

								</view>

								<view class="uni-flex uni-row bg-shadeTop" style="margin-left: 10px;
												display: flex;  -webkit-justify-content: space-between;justify-content: space-between;">
									<view>
										<uni-icons custom-prefix="iconfont" type="icon-shalou" color="#ffffff" size="16"
											style=" line-height: 30px; margin-left: 10px" /><text>15人速配中</text>
									</view>
								</view>



								<view class="" style="display: flex;flex-direction:row;margin-top: 5px;line-height: 16px;">
									<view class="" style="width: 30px;height: 30px;     margin-bottom: 10px;
														background-color: #007aff;border-radius: 50px;margin-left: 10px;"></view>
									<view class="" style="display: flex;flex-direction:column;margin-left: 3px;font-size: 10px;">
										<view class="">{{item.company}}</view>
										<view class="">{{item.creationTime}}</view>
									</view>
									<view style="
										background-color: rgb(216, 179, 121);
									    width: 67px;
									    height: 15px;
									    border-radius: 5px;
									    line-height: 14px;
									    font-size: 10px;"> <uni-icons
											type="vip" size="13" color="#ffffff" :active="true"></uni-icons>
										<text>官方认证</text>
									</view>
									<view class="" style=" position: absolute; right: 16px;">
										<button type="primary" size="mini">预约</button>
									</view>
								</view>
							</view>
						</block>
					</scroll-view>

				</view>
				<view v-if="current === 1"><text class="content-text">选项卡2的内容</text></view>
				<view v-if="current === 2"><text class="content-text">选项卡3的内容</text></view>
				<view v-if="current === 3"><text class="content-text">选项卡4的内容</text></view>
				<view v-if="current === 4"><text class="content-text">选项卡5的内容</text></view>
				<view v-if="current === 5"><text class="content-text">选项卡6的内容</text></view>
			</view>
		</uni-section>

	<bottom-state-nav :factoryActive="false" :positionActive="true" :messageActive="false" :myselfActive="false"></bottom-state-nav>
	


	</view>
</template>

<script>
	import bottomStateNav from '@/pages/components/bottom-state-nav'
	export default {
		data() {
			return {
				clineHeight: 100,
				items: ['推荐', '月薪', '周薪', '日薪', '时薪', '创业服务'],
				styleType: 'text',
				current: 0,
				colorIndex: 0,
				activeColor: '#007aff',
				keyword: '',
				hour: null,
				minute: '',
				second: '',


				index: -1,
				data: [],
				loadMoreText: "加载中...",
				showLoadMore: false,
				max: 0,
				activeIndex: -1,
				checked: false,

				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				list: [{
					name: "产品经理",
					workAge: "2-3年经验",
					education: "本科",
					ageLimit: "不限",
					gender: "女",
					monthlySalary: "9000元/月",
					content: "独立完成多项目B端项目，逻辑能力强撰写高质量需求文档，制作高保证原型",
					company: "A家家具装饰家具有限公司",
					creationTime: "2022-12-12 12:12:33"
				}, {
					name: "产品经理",
					workAge: "2-3年经验",
					education: "本科",
					ageLimit: "不限",
					gender: "女",
					monthlySalary: "9000元/月",
					content: "独立完成多项目B端项目，逻辑能力强撰写高质量需求文档，制作高保证原型",
					company: "A家家具装饰家具有限公司",
					creationTime: "2022-12-12 12:12:33"
				}, {
					name: "产品经理",
					workAge: "2-3年经验",
					education: "本科",
					ageLimit: "不限",
					gender: "女",
					monthlySalary: "9000元/月",
					content: "独立完成多项目B端项目，逻辑能力强撰写高质量需求文档，制作高保证原型",
					company: "A家家具装饰家具有限公司",
					creationTime: "2022-12-12 12:12:33"
				}, {
					name: "产品经理",
					workAge: "2-3年经验",
					education: "本科",
					ageLimit: "不限",
					gender: "女",
					monthlySalary: "9000元/月",
					content: "独立完成多项目B端项目，逻辑能力强撰写高质量需求文档，制作高保证原型",
					company: "A家家具装饰家具有限公司",
					creationTime: "2022-12-12 12:12:33"
				}, {
					name: "产品经理",
					workAge: "2-3年经验",
					education: "本科",
					ageLimit: "不限",
					gender: "女",
					monthlySalary: "9000元/月",
					content: "独立完成多项目B端项目，逻辑能力强撰写高质量需求文档，制作高保证原型",
					company: "A家家具装饰家具有限公司",
					creationTime: "2022-12-12 12:12:33"
				}, {
					name: "产品经理",
					workAge: "2-3年经验",
					education: "本科",
					ageLimit: "不限",
					gender: "女",
					monthlySalary: "9000元/月",
					content: "独立完成多项目B端项目，逻辑能力强撰写高质量需求文档，制作高保证原型",
					company: "A家家具装饰家具有限公司",
					creationTime: "2022-12-12 12:12:33"
				}, ],
				timer: null, //定时器名称

			};
		},

		components: {
			 bottomStateNav
		},
		onLoad() {

			this.getClineHeight();
			this.initData();
			this.setTimew();
		},
		onShow() {
			var _this = this;
			this.timer = setInterval(_this.setTimew, 1000);
		},
		//uniapp中onHide()能监听到页面离开
		onHide() { //离开页面前清除计时器
			// console.log('onHide');
			clearInterval(this.timer);
			this.timer = null;
		},
		//获取可视区域高度
		methods: {
			goPositionDetails(){
				uni.navigateTo({
					url: '/pages/factoryrecruit/positiondetails'
				})
			},
			clickLeftHandle() {},
			myselfSwitchActive(){
				console.log(111111111);
			},
			messageActiveHandle(){},
			positionActiveHandle(){},
			factoryActiveHandle() {},
			plusActive() {},
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
						this.clineHeight = res.windowHeight - this.getBarHeight() - 205;
					})
				});
				console.log("this.clineHeight::", this.clineHeight)
			},
			upper: function(e) {
				//console.log('upper')
			},
			lower: function(e) {
				//console.log('lower')
			},
			scroll: function(e) {
				//console.log('scroll')
				this.old.scrollTop = e.detail.scrollTop
			},
			initData() {
				setTimeout(() => {
					this.max = 0;
					this.data = [];
					let data = [];
					this.max += 20;
					for (var i = this.max - 19; i < this.max + 1; i++) {
						data.push(i)
					}
					this.data = this.data.concat(data);
					uni.stopPullDownRefresh();
				}, 300);
			},
			setListData() {
				let data = [];
				this.max += 10;
				for (var i = this.max - 9; i < this.max + 1; i++) {
					data.push(i)
				}
				this.data = this.data.concat(data);
			},

			onClick(e) {
				console.log('点击了' + (e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
			},
			swipeChange(e, index) {
				console.log('当前状态：' + e + '，下标：' + index)
			},
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
			styleChange(e) {
				if (this.styleType !== e.detail.value) {
					this.styleType = e.detail.value
				}
			},
			colorChange(e) {
				if (this.styleType !== e.detail.value) {
					console.log(e.detail.value);
					this.activeColor = e.detail.value
				}
			},
		}
	}
</script>

<style lang="scss">
	.icon-content {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;

		.icon-item {
			/* #ifndef APP-NVUE */
			display: flex;
			box-sizing: border-box;
			width: calc(100% / 5);
			/* #endif */
			/* #ifdef APP-NVUE */
			width: 387rpx;
			/* #endif */
			align-items: center;
			padding: 10px;
			text-align: center;
			flex-direction: column;
		}

		.icon-item-plus {

			/* #ifndef APP-NVUE */
			display: flex;
			box-sizing: border-box;
			width: calc(100% / 5);
			/* #endif */
			/* #ifdef APP-NVUE */
			width: 387rpx;
			/* #endif */
			align-items: center;
			padding: 10px;
			text-align: center;
			flex-direction: column;
		}
	}
</style>
<style>
	/deep/ .uni-section-header {
		padding: 2px 10px !important;
	}

	.bg-shadeTop {
		background-image: linear-gradient(500deg, #007aff, #ffffff, #ffffff);
		/* background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.01)); */

		color: #ffffff;
		border-top-right-radius: 10px;
	}


	.div-black-css-3 {
		margin-right: 15px;
		margin-top: 35px;
		line-height: 78px;
	}

	.scroll-Y {
		height: 1070rpx;
		/* height: 520px; */
	}


	.button-view-css {
		position: absolute;
		background-color: #007aff;
		bottom: 11px;
		height: 70px;
		width: 70px;
		border-radius: 50px;
		border: 5px solid #ffffff;
	}

	.butto-plus-css {
		color: #ffffff;
		position: absolute;
		bottom: 22px;
		font-weight: 29px;
		left: 14px;
	}

	.goods-carts {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		bottom: 0;
		/* height: 120rpx; */
		height: 70px;
		background-color: white;
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

	.uni-input-input {
		position: relative;
		display: block;
		height: 100%;
		background: none;
		color: inherit;
		opacity: 1;
		font: inherit;
		line-height: inherit;
		letter-spacing: inherit;
		text-align: inherit;
		text-indent: inherit;
		text-transform: inherit;
		text-shadow: inherit;
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


	.uni-padding-wrap {
		padding: 0px 15rpx;
	}
</style>