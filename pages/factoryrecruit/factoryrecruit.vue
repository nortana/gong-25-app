<template>
	<view class="pageContent">
		<!-- @clickLeft="clickLeftHandle" left-icon="left" -->
		<uni-nav-bar dark :fixed="true" shadow background-color="#007AFF" status-bar title="工厂直招" />
		<view style="margin: 11px;">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" :style="[{height:clineHeight+'px'}]"
				@scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
				<block v-for="(item,index) in list" :key="index">

					<view class="" style="
							display: flex;flex-direction:column;
							border: 2px solid #007aff;;
							margin-top: 10px; 
							border-radius: 10px;background-color: #ffffff;">
						<view class="bg-shadeTop" style="height: 30px;border-bottom: 1px solid;position: relative;">
							<text style="font-weight: 700;
										font-style: italic;
										font-size: 18px;
										line-height: 30px;
										padding-left: 10px;">职位</text>
						</view>
						<view class="uni-flex uni-row"
							style="display: flex;position: relative; padding: 10px;    line-height: 18px;">
							<view class="" style="margin-top: 7px;">
								<image style="width: 60px;height: 60px;border-radius: 5px;" src="@/static/logo.png">
								</image>
							</view>
							<view class="flex-item " style="padding-left: 3px;">

								<view class="uni-flex uni-column" style="padding-left: 1px;"
									@click="goPositionDetails()">
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
										<view class="" style="font-size: 14px;position: absolute;right: 1px;color: red">
											{{item.monthlySalary}}
										</view>
									</view>

									<view class="" style="display: flex;flex-direction:row;">
										<uni-icons custom-prefix="iconfont" type="icon-gongzuojingyan" color="#5e6d82"
											size="15" style="" />
										<view class="" style="font-size: 10px;">{{item.workAge}}</view>
										<uni-icons custom-prefix="iconfont" type="icon-edu-line" color="#5e6d82"
											size="20" style="margin-left: 2px;" />

										<view class="" style="font-size: 10px;">{{item.education}}</view>
										<uni-icons custom-prefix="iconfont" type="icon-iconset0209-copy" color="#5e6d82"
											size="14" style="margin-left: 4px;" />
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
							<view class=""
								style="display: flex;flex-direction:column;margin-left: 3px;font-size: 10px;">
								<view class="">{{item.company}}</view>
								<view class="">{{item.creationTime}}</view>
							</view>
							<!-- <view style="
										background-color: rgb(216, 179, 121);
									    width: 67px;
									    height: 15px;
									    border-radius: 5px;
									    line-height: 14px;
									    font-size: 10px;"> <uni-icons type="vip" size="13" color="#ffffff" :active="true"></uni-icons>
								<text>官方认证</text>
							</view> -->
							<view class="" style=" position: absolute; right: 16px;">
								<button type="primary" size="mini" @click="supeiHandle">参与速配</button>
							</view>
						</view>
					</view>
				</block>
			</scroll-view>

		</view>

		<bottom-state-nav :factoryActive="false" :positionActive="true" :messageActive="false"
			:myselfActive="false"></bottom-state-nav>



		uni.navigateTo({
		url: '/pages/positioncard/positioncard'
		})
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
		},
		onShow() {},
		//uniapp中onHide()能监听到页面离开
		onHide() { //离开页面前清除计时器
			// console.log('onHide');
		},
		//获取可视区域高度
		methods: {
			supeiHandle() {
				uni.navigateTo({
					url: '/pages/positioncard/positioncard?state=2'
				})
			},
			goPositionDetails() {
				uni.navigateTo({
					url: '/pages/factoryrecruit/positiondetails'
				})
			},
			clickLeftHandle() {},
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
						this.clineHeight = res.windowHeight - this.getBarHeight() - 85;
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

	.bg-shadeTop {
		background-image: linear-gradient(500deg, #007aff, #ffffff, #ffffff);
		/* background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.01)); */

		color: #ffffff;
		border-top-right-radius: 10px;
	}


	.scroll-Y {
		height: 1070rpx;
		/* height: 520px; */
	}
</style>