<template>
	<view>
		<uni-nav-bar title="我的预约" dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left"
			@clickLeft="clickLeftHandle" />
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
							<view class="bg-shadeTop" style="height: 30px;border-bottom: 1px solid;position: relative;">
								<text style="font-weight: 700;
											font-style: italic;
											font-size: 18px;
											line-height: 30px;
											padding-left: 10px;">职位卡</text>
								<uni-icons custom-prefix="iconfont" type="icon-fenxiang" color="#5e6d82" size="18"
									style="position: absolute;line-height: 30px;right: 15px;" />
							</view>
							<view class=""
								style="display: flex;flex-direction:row;    margin-top: 10px;position: relative;">
								<view class="" style="font-size: 18px;    padding-left: 10px">{{item.name}}</view>
								<view style="border: 1px solid;
									margin-left: 10px;
									    padding: 0 8px;
									    color: #007aff;">距您1.12KM</view>
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
							<view class="" style="margin-top: 6px;padding: 0 10px">
								{{item.content}}
							</view>
							<view class="" style="display: flex;flex-direction:row;margin-top: 10px;border-top: 1px solid #f5f5f5;
								padding-top: 5px;position: relative;
								    padding-bottom: 5px;">
								<view class="" style="width: 40px;height: 40px; 
									background-color: #007aff;border-radius: 50px;margin-left: 10px;
									margin-left: 10px;"></view>
								<view class="" style="display: flex;flex-direction:column;margin-left: 10px;">
									<view class="">{{item.company}}</view>
									<view class="">{{item.creationTime}}</view>
								</view>
								<view class="" style=" position: absolute; right: 16px;top: 13px;">
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


	</view>
</template>

<script>
	export default {
		data() {
			return {
				clineHeight: 100,
				items: ['全部', '预约中', '预约失败', '沟通中', '定聘', '已完成'],
				styleType: 'text',
				current: 0,
				activeColor: '#007aff',
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

			};
		},

		onLoad() {
			this.getClineHeight();
		},
		onShow() {},
		onHide() {},
		//获取可视区域高度
		methods: {
			clickLeftHandle() {
				uni.navigateTo({
					url: '/pages/myself/myself'
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
						this.clineHeight = res.windowHeight - this.getBarHeight() - 45;
					})
				});
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

			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},



		}
	}
</script>

<style>
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