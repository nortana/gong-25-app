<template>
	<view>
		<uni-nav-bar title="企业主页" dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left"
			@clickLeft="clickLeftHandle" />
		<!-- background-color: #0c0202; -->
		<view style="height: 67px; border: 1px solid;padding: 20px; background-color: #080808;color: #ffffff;  ">
			<view class="uni-flex uni-row" style="display: flex;position: relative; ">
				<view class="">
					<image style="width: 60px;height: 60px;border-radius: 10px;" src="@/static/logo.png"></image>
				</view>
				<view class="flex-item " style="padding-left: 10px;">

					<view class="" style="line-height: 18px;">
						<view class="flex-item" style="font-size: 14px;">
							{{ hideMiddle(companyData.company_name) }}
						</view>
						<view class="flex-item " style="margin-top: 5px;">
							<uni-icons type="star-filled" size="15" color="#F7BA2A" :active="true"></uni-icons>
							<uni-icons type="star-filled" size="15" color="#F7BA2A" :active="true"></uni-icons>
							<uni-icons type="star-filled" size="15" color="#F7BA2A" :active="true"></uni-icons>
							<uni-icons type="star-filled" size="15" color="#F7BA2A" :active="true"></uni-icons>
							<uni-icons type="star-filled" size="15" color="#F7BA2A" :active="true"></uni-icons>
						</view>
						<view class="flex-item ">
							<view class="uni-flex uni-row" style="display: flex;font-size: 12px;">
								<view class="flex-item ">好评率100%</view>
								<view class="flex-item " style="margin-left: 7px;">12人评价</view>
							</view>
						</view>
					</view>
				</view>
				<view class="flex-item" style="position: absolute;right: 1px;flex-direction: row;display: flex;
					background-color: #d8b379;width: 74px;height: 20px;border-radius: 5px;    line-height: 17px;">
					<view>
						<uni-icons type="vip" size="18" color="#ffffff" :active="true"></uni-icons>
					</view>
					<view>
						<text style="font-size: 12px;">官方认证</text>
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
							<view class="bg-position-cardshade-top" style="">
								<text class="bg-position-cardshade" style="">职位卡</text>
							</view>
							<view class="" style="display: flex;flex-direction:row;margin-top: 5px;position: relative;">
								<view class="bg-position-cardshade-name" style="">{{item.name}}</view>
								<view class="bg-position-cardshade-distance" style="">距您1.12KM</view>
								<view class="bg-position-cardshade-salary-type">月薪X3</view>
								<view class="bg-position-cardshade-salary" style="">{{item.monthlySalary}}</view>
							</view>
							<view class="" style="display: flex;flex-direction:row;">
								<uni-icons custom-prefix="iconfont" type="icon-gongzuojingyan" color="#5e6d82" size="15" style="padding-left: 10px;" />
								<view class="" style="font-size: 10px;">{{item.workAge}}</view>
								<uni-icons custom-prefix="iconfont" type="icon-edu-line" color="#5e6d82" size="15" style="padding-left: 10px;" />
								<view class="" style="font-size: 10px;">{{item.education}}</view>
								<uni-icons custom-prefix="iconfont" type="icon-iconset0209-copy" color="#5e6d82" size="14" style="padding-left: 10px;" />
								<view class="" style="font-size: 10px;">{{item.ageLimit}}</view>
								<uni-icons custom-prefix="iconfont" type="icon-xingbie" color="#5e6d82" size="15" style="padding-left: 10px;" />
								<view class="" style="font-size: 10px;">{{item.gender}}</view>
							</view>
							<view class="bg-position-cardshade-content" style="">
								{{item.content}}
							</view>

						<view class="" style="display: flex;flex-direction:row;border-top: 1px solid #f5f5f5;
								padding-top: 5px;padding-bottom: 5px;position: relative;line-height: 15px;">
							<!-- <view class="" style="width: 40px;height: 40px; 
								background-color: #007aff;border-radius: 50px;margin-left: 10px;
								margin-left: 10px;"></view> -->
							<image style="width: 25px;height: 25px; border-radius: 50px;margin-left: 10px;
								margin-left: 10px;" src=""></image>
							<view class=""
								style="display: flex;flex-direction:column;margin-left: 10px;font-size: 10px;">
								<view class="">111</view>
								<view class="">111</view>
							</view>
							<view class="" style=" position: absolute; right: 16px;top: 2px;">
								<button type="primary" size="mini" @click="reservationHandle">预约</button>
							</view>
						</view>

						</view>
					</block>
				</scroll-view>
			</view>
			<view v-if="current === 1" style="padding: 20px;">
				<uni-section title="公司简介" type="line">
					<view class="indent-text">
						<text>{{companyData.company_introduction}}
						</text>
					</view>
				</uni-section>
				<uni-section title="公司地址" type="line">
					<view style="margin-bottom: 10px;">{{companyData.company_address_info}}</view>
					<view>
						<map :latitude="latitude" :longitude="longitude" :markers="covers">
						</map>
					</view>
				</uni-section>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				clineHeight: 500,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.9085,
					longitude: 116.39747,
					// #ifdef APP-PLUS
					iconPath: '../../static/app-plus/location@3x.png',
					// #endif
					// #ifndef APP-PLUS
					iconPath: '../../static/location.png',
					// #endif
					callout: {
						content: "乌鲁木齐市水磨沟媛元路体育馆365号",
						fontSize: 12,
						borderRadius: 50,
						bgColor: "#ffffff",
						padding: 10,
						display: "ALWAYS"
					}
				}],
				items: ['发布职位', '公司信息'],
				styleType: 'text',
				activeColor: '#007aff',
				current: 0,
				companyData: {},
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
				}],
				routeState: '',
			}
		},
		onLoad(e) {
			this.routeState = e.state
			this.getClineHeight();
			this.queryData();

		},
		methods: {
			clickLeftHandle() {
				let url = '/pages/factoryrecruit/positiondetails';
				if (this.routeState == 1) {
					url = '/pages/positioncard/positioncard'
				}
				uni.navigateTo({
					url: url
				})
			},
			queryData() {
				this.loading = true;
				this.$http.request({
					url: '/companyInfoByUser',
					dataType: 'text',
					data: {
						company_id: 1
					},
				}).then(res => {
					let jsonObj = JSON.parse(res);
					console.log(jsonObj)
					if (jsonObj.code == 0) {
						this.companyData = jsonObj.data;

					} else {
						uni.showModal({
							content: jsonObj.msg,
							showCancel: false
						});
					}

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
			hideMiddle(str) {
				console.log("str---->",str)
				if (str && str.length > 8) {
					str = str.slice(0, 8) + "...";
				}
				return str;
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
						this.clineHeight = res.windowHeight - this.getBarHeight() - 150;
					})
				});
				console.log("this.clineHeight::", this.clineHeight)
			},

		}
	}
</script>

<style>
	.indent-text {
		text-indent: 2em;
	}

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
	/* ???????????????????????????????????????????????????????????????????????????????? */

	/deep/ .uni-section-header {
		padding: 12px 0px !important;
	}

	map {
		width: 100%;
		height: 500rpx;
	}
</style>