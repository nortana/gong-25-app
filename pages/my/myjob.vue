<template>
	<view class="pageContent">
		<uni-nav-bar title="我的求职卡" dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left"
			@clickLeft="clickLeftHandle" />

		<view style="height: 100px;margin: 20px;color: white;;border-radius: 10px;
		background-image:url('/static/g6.png');">
			<view style="display: flex;flex-direction:row;font-size: 20px;">
				<view
					style="-webkit-flex: 1;flex: 1;display: flex; height: 100px;justify-content: center; align-items: center; ">
					<view style="display: flex;flex-direction:column;">
						<view style="text-align: center;">4个</view>
						<view style="margin-top: 10px;">求职卡</view>
					</view>
				</view>
				<view
					style="-webkit-flex: 1;flex: 1;display: flex;height: 100px; justify-content: center; align-items: center; ">
					<view style="display: flex;flex-direction:column;">
						<view style="text-align: center;">25个</view>
						<view style="margin-top: 10px;">收到预约</view>
					</view>
				</view>
				<view
					style="-webkit-flex: 1;flex: 1;display: flex;height: 100px; justify-content: center; align-items: center; ">
					<view style="margin-top: 10px;">
						<button type="primary" style="background-color: white;color: #007aff;">发布求职</button>
					</view>
				</view>
			</view>
		</view>

		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" :style-type="styleType"
				:active-color="activeColor" @clickItem="onClickItem" />
		</view>

		<view class="content">
			<view v-if="current === 0"
				style="padding-left: 20px;padding-right: 20px;padding-top: 10px;background-color: #efefef;">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" @scrolltoupper="upper" @scrolltolower="lower"
					@scroll="scroll" :style="[{height:clineHeight+'px'}]">
					<block v-for="(item,index) in list" :key="index">
						<view class="" style="
										display: flex;flex-direction:column;
										border: 2px solid #007aff;;
										margin-top: 10px;
										border-radius: 10px;background-color: #ffffff;">
							<view class="bg-shadeTop" style="height: 30px;border-bottom: 1px solid;">
								<text style="font-weight: 700;font-style: italic;font-size: 18px;
									line-height: 30px;padding-left: 10px;">职位卡</text>
							</view>
							<view class=""
								style="display: flex;flex-direction:row;    margin-top: 10px;position: relative;">
								<view class="" style="font-size: 18px;    padding-left: 10px">{{item.name}}</view>
								<view style="border: 1px solid;margin-left: 5px;padding: 0 4px;
												    color: #fcc484;">月薪X3</view>
								<view class=""
									style="font-size: 18px;    padding-left: 10px;position: absolute;right: 10px;color: red">
									{{item.monthlySalary}}
								</view>
							</view>
							<view class="" style="display: flex;flex-direction:row;    margin-top: 6px;">
								<uni-icons custom-prefix="iconfont" type="icon-gongzuojingyan" color="#5e6d82" size="15"
									style="padding-left: 10px;" />
								<view class="">{{item.workAge}}</view>
								<uni-icons custom-prefix="iconfont" type="icon-edu-line" color="#5e6d82" size="20"
									style="padding-left: 10px;" />

								<view class="">{{item.education}}</view>
								<uni-icons custom-prefix="iconfont" type="icon-iconset0209-copy" color="#5e6d82"
									size="14" style="padding-left: 10px;" />
								<view class="">{{item.ageLimit}}</view>
								<uni-icons custom-prefix="iconfont" type="icon-xingbie" color="#5e6d82" size="16"
									style="padding-left: 10px;" />
								<view class="">{{item.gender}}</view>
							</view>
							<view class="" style="margin-top: 6px;padding: 0 10px;">
								{{item.content}}
							</view>

							<view class="uni-flex uni-row" style="margin: 10px 5px 10px 10px;
									height: 30px;display: flex;  -webkit-justify-content: space-between;
									justify-content: space-between;position: relative;
									">
								<view>
									<text>2人预约</text>
									<uni-icons type="right" size="20" style="position: absolute;top: 1px;"></uni-icons>
								</view>
								<view class="" style="margin-right: 10px;" @click="handleClick(index)">
									<uni-icons style="position: absolute;right: 36px;bottom: 6px;" type="star-filled"
										size="20" color="#3a7bf3" :active="true"></uni-icons>
									<text
										style="font-size: 30px;position: absolute;bottom: 16px;right: 10px;">...</text>
								</view>
							</view>
							<view v-if="item.isFold">
								<view v-for="(item,index1) in item.clist" :key="index1" style="display: flex;flex-direction:row;
									background-color: #f2f2f2;margin: 8px 15px;padding: 10px;">
									<view class="" style="width: 30px;height: 30px;  
									background-color: #007aff;border-radius: 50px;margin-top: 6px;"></view>
									<view class="" style="display: flex;flex-direction:column;margin-left: 3px;">
										<view class="">{{item.company}}</view>
										<view class="">预约时间：{{item.creationTime}}</view>
									</view>
									<view class="" style="margin-left: 15px;margin-top: 6px;">
										<button type="primary" size="mini" style="border-radius: 15px;">预约</button>
									</view>
								</view>
							</view>
						</view>
					</block>
				</scroll-view>
			</view>

			<view v-if="current === 3"
				style="padding-left: 20px;padding-right: 20px;padding-top: 10px;background-color: #efefef;">
				<view>
					<button @click="settledHandle" class="mini-btn" :type="settledType" size="mini"
						style="border-radius: 20px;">已结算</button>
					<button @click="evaluateHandle" class="mini-btn" :type="evaluateType" size="mini"
						style="border-radius: 20px;margin-left: 10px;">待评价</button>
				</view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" @scrolltoupper="upper" @scrolltolower="lower"
					@scroll="scroll" :style="[{height:clineHeight+'px'}]">
					<block v-for="(item,index) in list" :key="index">
						<view class="" style="
									display: flex;flex-direction:column;
									border: 2px solid #007aff;;
									margin-top: 10px;
									border-radius: 10px;background-color: #ffffff;">
							<view class="bg-shadeTop" style="height: 30px;border-bottom: 1px solid;">
								<text style="font-weight: 700;font-style: italic;font-size: 18px;
								line-height: 30px;padding-left: 10px;">职位卡</text>
							</view>
							<view class=""
								style="display: flex;flex-direction:row;    margin-top: 10px;position: relative;">
								<view class="" style="font-size: 18px;    padding-left: 10px">{{item.name}}</view>
								<view style="border: 1px solid;margin-left: 5px;padding: 0 4px;
											    color: #fcc484;">月薪X3</view>
								<view class=""
									style="font-size: 18px;    padding-left: 10px;position: absolute;right: 10px;color: red">
									{{item.monthlySalary}}
								</view>
							</view>
							<view class="" style="display: flex;flex-direction:row;    margin-top: 6px;">
								<uni-icons custom-prefix="iconfont" type="icon-gongzuojingyan" color="#5e6d82" size="15"
									style="padding-left: 10px;" />
								<view class="">{{item.workAge}}</view>
								<uni-icons custom-prefix="iconfont" type="icon-edu-line" color="#5e6d82" size="20"
									style="padding-left: 10px;" />

								<view class="">{{item.education}}</view>
								<uni-icons custom-prefix="iconfont" type="icon-iconset0209-copy" color="#5e6d82"
									size="14" style="padding-left: 10px;" />
								<view class="">{{item.ageLimit}}</view>
								<uni-icons custom-prefix="iconfont" type="icon-xingbie" color="#5e6d82" size="16"
									style="padding-left: 10px;" />
								<view class="">{{item.gender}}</view>
							</view>
							<view class="" style="margin-top: 6px;padding: 0 10px;">
								{{item.content}}
							</view>

							<view class="uni-flex uni-row" style="margin: 10px 5px 10px 10px;
								height: 30px;display: flex;  -webkit-justify-content: space-between;
								justify-content: space-between;position: relative;
								">
								<view>
									<text>2人预约</text>
									<uni-icons type="right" size="20" style="position: absolute;top: 1px;"></uni-icons>
								</view>
								<view class="" style="margin-right: 10px;" @click="handleClick(index)">
									<uni-icons style="position: absolute;right: 36px;bottom: 6px;" type="star-filled"
										size="20" color="#3a7bf3" :active="true"></uni-icons>
									<text
										style="font-size: 30px;position: absolute;bottom: 16px;right: 10px;">...</text>
								</view>
							</view>
							<view v-if="item.isFold">
								<view v-for="(item,index1) in item.clist" :key="index1" style="display: flex;flex-direction:row;
								background-color: #f2f2f2;margin: 8px 15px;padding: 10px;">
									<view class="" style="width: 30px;height: 30px;  
								background-color: #007aff;border-radius: 50px;margin-top: 6px;"></view>
									<view class="" style="display: flex;flex-direction:column;margin-left: 3px;">
										<view class="">{{item.company}}</view>
										<view class="">预约时间：{{item.creationTime}}</view>
									</view>
									<view class="" style="margin-left: 15px;margin-top: 6px;">
										<button type="primary" size="mini" style="border-radius: 15px;">预约</button>
									</view>
								</view>
							</view>
						</view>
					</block>
				</scroll-view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				clineHeight: 500,
				items: ['全部', '定聘', '下架', '已完成'],
				styleType: 'text',
				activeColor: '#007aff',
				current: 0,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				settledType: 'default',
				evaluateType: 'default',
				list: [{
					name: "产品经理1",
					workAge: "2-3年经验",
					isFold: false,
					education: "本科",
					ageLimit: "不限",
					gender: "女",
					monthlySalary: "9000元/月",
					content: "独立完成多项目B端项目，逻辑能力强撰写高质量需求文档，制作高保证原型",
					company: "A家家具装饰家具有限公司",
					creationTime: "2022-12-12 12:12:33",
					clist: [{
						company: "A家家具装饰家具有限公司",
						creationTime: "2022-12-12 12:12:33",
					}, {
						company: "A家家具装饰家具有限公司",
						creationTime: "2022-12-12 12:12:33",
					}]
				}, {
					name: "产品经理2",
					isFold: false,
					workAge: "2-3年经验",
					education: "本科",
					ageLimit: "不限",
					gender: "女",
					monthlySalary: "9000元/月",
					content: "独立完成多项目B端项目，逻辑能力强撰写高质量需求文档，制作高保证原型",
					company: "A家家具装饰家具有限公司",
					creationTime: "2022-12-12 12:12:33",
					clist: [{
						company: "A家家具装饰家具有限公司",
						creationTime: "2022-12-12 12:12:33",
					}, {
						company: "A家家具装饰家具有限公司",
						creationTime: "2022-12-12 12:12:33",
					}]
				}, {
					name: "产品经理3",
					isFold: false,
					workAge: "2-3年经验",
					education: "本科",
					ageLimit: "不限",
					gender: "女",
					monthlySalary: "9000元/月",
					content: "独立完成多项目B端项目，逻辑能力强撰写高质量需求文档，制作高保证原型",
					company: "A家家具装饰家具有限公司",
					creationTime: "2022-12-12 12:12:33",
					clist: [{
						company: "A家家具装饰家具有限公司",
						creationTime: "2022-12-12 12:12:33",
					}, {
						company: "A家家具装饰家具有限公司",
						creationTime: "2022-12-12 12:12:33",
					}]
				}, {
					name: "产品经理4",
					isFold: false,
					workAge: "2-3年经验",
					education: "本科",
					ageLimit: "不限",
					gender: "女",
					monthlySalary: "9000元/月",
					content: "独立完成多项目B端项目，逻辑能力强撰写高质量需求文档，制作高保证原型",
					company: "A家家具装饰家具有限公司",
					creationTime: "2022-12-12 12:12:33",
					clist: [{
						company: "A家家具装饰家具有限公司",
						creationTime: "2022-12-12 12:12:33",
					}, {
						company: "A家家具装饰家具有限公司",
						creationTime: "2022-12-12 12:12:33",
					}]
				}, {
					name: "产品经理5",
					isFold: false,
					workAge: "2-3年经验",
					education: "本科",
					ageLimit: "不限",
					gender: "女",
					monthlySalary: "9000元/月",
					content: "独立完成多项目B端项目，逻辑能力强撰写高质量需求文档，制作高保证原型",
					company: "A家家具装饰家具有限公司",
					creationTime: "2022-12-12 12:12:33",
					clist: [{
						company: "A家家具装饰家具有限公司",
						creationTime: "2022-12-12 12:12:33",
					}, {
						company: "A家家具装饰家具有限公司",
						creationTime: "2022-12-12 12:12:33",
					}]
				}, {
					name: "产品经理6",
					isFold: false,
					workAge: "2-3年经验",
					education: "本科",
					ageLimit: "不限",
					gender: "女",
					monthlySalary: "9000元/月",
					content: "独立完成多项目B端项目，逻辑能力强撰写高质量需求文档，制作高保证原型",
					company: "A家家具装饰家具有限公司",
					creationTime: "2022-12-12 12:12:33",
					clist: [{
						company: "A家家具装饰家具有限公司",
						creationTime: "2022-12-12 12:12:33",
					}, {
						company: "A家家具装饰家具有限公司",
						creationTime: "2022-12-12 12:12:33",
					}]
				}],
			}
		},

		onLoad() {
			this.getClineHeight();
		},
		methods: {
			settledHandle() {
				this.settledType = 'primary'
				this.evaluateType = 'default'

			},
			evaluateHandle() {
				this.settledType = 'default'
				this.evaluateType = 'primary'
			},
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
			handleClick(index) {
				let params = {};
				if (this.list[index].isFold) {
					params = this.list[index]
					params.isFold = false
					this.$set(this.list, index, params)
					return
				}
				params = this.list[index]
				params.isFold = true
				this.$set(this.list, index, params)
				//this.$forceUpdate()
			},
			clickLeftHandle() {
				uni.navigateTo({
					url: '/pages/myself/myself'
				})
			},
			upper: function(e) {
				//console.log("upper")
				//console.log(e)
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
						this.clineHeight = res.windowHeight - this.getBarHeight() - 185;
					})
				});
				console.log("this.clineHeight::", this.clineHeight)
			},
			lower: function(e) {
				// console.log("lower")
				// let params =  {
				// 	name: "产品经理6",
				// 	workAge: "2-3年经验",
				// 	education: "本科",
				// 	ageLimit: "不限",
				// 	gender: "女",
				// 	monthlySalary: "9000元/月",
				// 	content: "独立完成多项目B端项目，逻辑能力强撰写高质量需求文档，制作高保证原型",
				// 	company: "A家家具装饰家具有限公司",
				// 	creationTime: "2022-12-12 12:12:33",
				// 	clist: [{
				// 		company: "A家家具装饰家具有限公司",
				// 		creationTime: "2022-12-12 12:12:33",
				// 	}, {
				// 		company: "A家家具装饰家具有限公司",
				// 		creationTime: "2022-12-12 12:12:33",
				// 	}]
				// }
				// for(let i = 0; i<3;i++){
				// 	params.name = params.name+7+i;
				// 	console.log(params.name)
				// 	this.list.push(params)
				// }

			},
			scroll: function(e) {
				//console.log("scroll")
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

	.bg-shadeTop {
		background-image: linear-gradient(500deg, #007aff, #ffffff, #ffffff);
		/* background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.01)); */

		color: #ffffff;
		border-top-right-radius: 10px;
	}
</style>
<style lang="scss">
</style>