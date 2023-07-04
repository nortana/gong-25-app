<template>
	<view class="pageContent">
		<uni-nav-bar dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left" title="职位卡详情"
			@clickLeft="clickLeftHandle" />
		<view style="padding: 10px;">
			<view
				style="display: flex;flex-direction:column;background-color: white;padding: 20px;    border-radius: 10px;">
				<view class="" style="display: flex;flex-direction:row;position: relative;">
					<view class="" style="font-size: 18px;">纺纱工</view>
					<view class=""
						style="font-size: 18px;    padding-left: 10px;position: absolute;right: 10px;color: red">
						8000/月
					</view>
				</view>
				<view class="" style="display: flex;flex-direction:row;    margin-top: 6px;">
					<uni-icons custom-prefix="iconfont" type="icon-gongzuojingyan" color="#5e6d82" size="15" style="" />
					<view class="">2-3年经验</view>
					<uni-icons custom-prefix="iconfont" type="icon-edu-line" color="#5e6d82" size="20"
						style="padding-left: 10px;" />

					<view class="">本科毕业</view>
					<uni-icons custom-prefix="iconfont" type="icon-iconset0209-copy" color="#5e6d82" size="14"
						style="padding-left: 10px;" />
					<view class="">年龄不限</view>
					<uni-icons custom-prefix="iconfont" type="icon-xingbie" color="#5e6d82" size="16"
						style="padding-left: 10px;" />
					<view class="">周末双休</view>
				</view>
				<view class="">五险一金/年终奖金/定期体检/专业培训</view>
				<view class="" style="display: flex;flex-direction:row;margin-top: 10px;border-top: 1px solid #f5f5f5;
				padding-top: 5px;position: relative;
				    padding-bottom: 5px;">
					<view class="" style="width: 40px;height: 40px; 
					background-color: #007aff;border-radius: 50px;"></view>
					<view class="" style="display: flex;flex-direction:column;margin-left: 10px;">
						<view class="">张珊珊</view>
						<view class="">金仕源创科技有限公司...招聘者</view>
					</view>
					<view class="" style="" @click="goEnterpriseHome()">
						<uni-icons type="forward" style="position:absolute;right:0px;top: 24px;" color="#5e6d82"
							size="50" />
					</view>
				</view>
			</view>
		</view>
		<view style="padding: 10px;">
			<view class="uni-padding-wrap uni-common-mt" style="background-color: white;border-radius: 10px;">
				<uni-segmented-control :current="current" :values="items" :style-type="styleType"
					:active-color="activeColor" @clickItem="onClickItem" />
			</view>
			<view class="content" style="background-color: white;">
				<view v-if="current === 0"
					:style="[{'min-height':clineHeight+'px','padding-left': '20px','padding-right': '20px'}]">
					<uni-section title="职位描述" type="line">
						<view>1、掌握纺织的各项基本操作</view>
						<view>2、熟悉纺织生产流程</view>
						<view>3、确保工作产量与质量</view>

					</uni-section>
					<uni-section title="任职要求" type="line" style="padding-bottom: 30px;">
						<view>1、需有纺织机器实际操作经验，具有剑杆纺织经验优先；</view>
						<view>2、具有扎实的产品设计，文档策划功底和较丰富的项目经验管理；</view>
						<view>3、对数据敏感，有数据分析系统设计，报表设计经验者佳</view>
						<view>4、熟悉数据仓库、商业智能基本理论，有开源数据分析系统使用经验佳</view>
						<view>5、强烈责任心，开放的性格，良好的沟通能力</view>
						<view>6、擅于协作，具备良好的团队合作精神</view>
					</uni-section>
				</view>
				<view v-if="current === 1"
					:style="[{'min-height':clineHeight+'px','padding-left': '20px','padding-right': '20px'}]">
					<uni-section title="公司简介" type="line">
						<view class="indent-text">
							<text>企业公司介绍有限公司坐落于北京市朝阳区望京科技创业园，是金仕生物科技（常熟）有限公司的全资子公司，专注于高端心血管医疗器械的研发。金仕生物注册资金8000万，目前在研项目6项，其中三类医疗器械4项。金仕生物的“创新医疗器械”产品瓣膜成形环已于2018年获批上市。
							</text>
						</view>
					</uni-section>
					<uni-section title="公司地址" type="line">
						<view style="    margin-bottom: 10px;">乌鲁木齐市水磨沟媛元路体育馆365号</view>
						<view>
							<map :latitude="latitude" :longitude="longitude" :markers="covers">
							</map>
						</view>
					</uni-section>
				</view>
			</view>
		</view>
		<!-- class="goods-carts" -->
		<view class="goods-carts">
			<button style="width: 100%;border-radius: 50px;" type="primary" @click="submit">一键预约</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
				clineHeight: 400,
				items: ['职位描述', '公司信息'],
				styleType: 'text',
				activeColor: '#007aff',
				current: 0,

			}
		},
		onLoad() {

			this.getClineHeight();
		},
		methods: {
			goEnterpriseHome() {
				uni.navigateTo({
					url: '/pages/enterprisehomepage/enterprisehomepage'
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
			clickLeftHandle() {
				uni.navigateTo({
					url: '/pages/factoryrecruit/factoryrecruit'
				})
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
	/deep/ .uni-section-header {
		padding: 12px 0px !important;
	}

	map {
		width: 100%;
		height: 400rpx;
	}

	.pageContent {
		position: absolute;
		width: 100%;
		height: 100%;
		/* background: linear-gradient(to bottom, #ffdde1, #ee9ca7); */
		background-color: #f2f2f2;
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
		/* height: 70px; */
		margin: 10px;
	}
</style>