<template>
	<view class="pageContent">
		<uni-nav-bar title="创业班管理" dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left"
			@clickLeft="clickLeftHandle" />

		<view style="height: 95px;margin: 15px;background-color: white;padding: 20px 0px;border-radius: 10px;">
			<view style="display: flex;flex-direction:row;">
				<view style="-webkit-flex: 1;flex: 1;text-align: center;" @click="openeClassHandle">
					<image style="width: 60px;height: 60px;" src='@/static/g19.png'></image>
					<view :style="{'font-size':'20px','color':isSelect?'#6d94e3':''}">创业班管理</view>
				</view>
				<view style="-webkit-flex: 1;flex: 1;text-align: center;" @click="openeCrowdHandle">
					<image style="width: 60px;height: 60px;" src='@/static/g20.png'></image>
					<view :style="{'font-size':'20px','color':!isSelect?'#6d94e3':''}">群管理</view>
				</view>
			</view>
		</view>

		<view v-if="isSelect" class="uni-padding-wrap " style="padding: 0;">
			<uni-segmented-control :current="current" :values="items" :style-type="styleType"
				:active-color="activeColor" @clickItem="onClickItem" />
		</view>
		<view v-if="isSelect">
			<view v-if="current === 0">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" :style="[{height:clineHeight+'px'}]"
					@scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
					<block v-for="(item,index) in list" :key="index">
						<view style="margin: 20px;background-color: white;padding: 10px;line-height: 27px;
							position: relative;">
							<view>申请城市：浙江</view>
							<view style="position: absolute;right: 17px;top: 8px;color: red;">待审核</view>
							<!-- <view style="position: absolute;right: 17px;top: 8px;color: green;">已通过</view>
							<view style="position: absolute;right: 17px;top: 8px;color: orange;">已拒绝</view> -->
							<view><text>姓名：张珊珊</text><text style="margin-left: 30px;">联系方式：15912345678</text></view>
							<view>申请时间：2024-01-04 12:12:54</view>
							<view v-if="true"
								style="margin-top: 5px;display: flex;flex-direction:row;-webkit-justify-content: flex-end;justify-content: flex-end;">
								<view>
									<button style="" class="mini-btn" type="primary" size="mini">通过</button>
								</view>
								<view>
									<button style="margin-left: 10px;" class="mini-btn" type="primary"
										@click="toggleHandle" size="mini">拒绝</button>
								</view>
							</view>
						</view>
					</block>
				</scroll-view>
			</view>
		</view>


		<view v-if="!isSelect">
			<view style="height: 100px;margin: 15px;background-color: white;border-radius: 10px;">
				<view style="display: flex;flex-direction:row;font-size: 18px;">
					<view
						style="-webkit-flex: 1;flex: 1;display: flex; height: 100px;justify-content: center; align-items: center; ">
						<view style="display: flex;flex-direction:column;">
							<view style="text-align: center;">12</view>
							<view style="margin-top: 10px;">创业班总数</view>
						</view>
					</view>
					<view
						style="-webkit-flex: 1;flex: 1;display: flex;height: 100px; justify-content: center; align-items: center; ">
						<view style="display: flex;flex-direction:column;">
							<view style="text-align: center;">12</view>
							<view style="margin-top: 10px;">本周推广总数</view>
						</view>
					</view>
					<view @click="myAppointmentHandle"
						style="-webkit-flex: 1;flex: 1;display: flex;height: 100px; justify-content: center; align-items: center; ">
						<view style="display: flex;flex-direction:column;">
							<view style="text-align: center;">12</view>
							<view style="margin-top: 10px;">本月推广总数</view>
						</view>
					</view>
				</view>
			</view>

			<view
				style="margin: 0px 15px;;display: flex;flex-direction:row;-webkit-justify-content: flex-end;justify-content: flex-end;">
				<view>
					<text @click="dayHandle">日</text>
					<text @click="weekHandle" style="margin-left: 20px;">周</text>
					<text @click="monthHandle" style="margin-left: 20px;">月</text>
				</view>
			</view>

			<view style="background-color: white;margin: 15px;padding: 20px 0px;border-radius: 10px;">
				<view style="flex-direction: row;display: flex;text-align: center;margin-bottom: 5px;">
					<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;">
						<text>排名</text>
					</view>
					<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;">
						<text>创业班</text>
					</view>
					<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;">
						<text>推广数</text>
					</view>
					<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;">
						<text>操作</text>
					</view>
				</view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true">
					<block v-for="(item,index) in list" :key="index">
						<view style="flex-direction: row;display: flex;text-align: center;line-height: 30px;">
							<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;">
								<text>排名</text>
							</view>
							<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;">
								<text>创业班</text>
							</view>
							<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;">
								<text>推广数</text>
							</view>
							<view @click="openDetailHandle" class="text uni-flex" style="-webkit-flex: 1;flex: 1;">
								<uni-icons type="arrow-right" size="30"></uni-icons>
							</view>
						</view>
					</block>
				</scroll-view>
			</view>


		</view>



		<view>
			<!-- 普通弹窗 -->
			<uni-popup ref="popup" background-color="#fff">
				<view style="text-align: center;font-size: 20px;margin: 20px;font-weight: 500;">拒绝原因</view>
				<view style="margin: 10px 30px;">
					<textarea  v-model="txt" placeholder="请输入拒绝原因" placeholder-style="font-size:10px;"  style="height: 100px;border: solid 1px #edecec; width: 93%;padding: 10px;" ></textarea>
				</view>
				<view 
					style="margin: 30px ;display: flex;flex-direction:row;-webkit-justify-content: flex-end;justify-content: flex-end;">
					<view>
						<button style="" class="mini-btn" type="primary" size="mini">提交</button>
					</view>
					<view>
						<button style="margin-left: 10px;" class="mini-btn" type="primary"
							@click="toggleHandle" size="mini">拒绝</button>
					</view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 txt:"hello world！\n textarea多行输入框",
				isSelect: true,
				clineHeight: 600,
				items: ['全部', '待审核', '已通过', '已拒绝'],
				styleType: 'text',
				current: 0,
				activeColor: '#007aff',
				list: [{}, {}, {}, {}, {}, {}, {}, {}],
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
			}
		},
		methods: {
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
						this.clineHeight = res.windowHeight - this.getBarHeight() - 110;
					})
				});
				console.log("this.clineHeight::", this.clineHeight)
			},
			toggleHandle() {
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open('bottom')
			},
			openDetailHandle() {
				uni.navigateTo({
					url: '/pages/administrator/extensiondetails'
				})
			},
			dayHandle() {
				console.log('1111111111111111111')
			},
			weekHandle() {
				console.log('1111111111111111111')
			},
			monthHandle() {
				console.log('1111111111111111111')
			},
			openeClassHandle() {
				this.isSelect = true

			},
			openeCrowdHandle() {
				this.isSelect = false
			},
			clickLeftHandle() {
				uni.navigateTo({
					url: '/pages/administrator/administrator'
				})
			},
			onClickItem(e) {
				////薪资类别：1=时薪，2=日薪，3=周薪，4=月薪，5=季薪，6=年薪
				//items: ['推荐', '月薪', '周薪', '日薪', '时薪', '创业服务'],
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
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
	.pageContent {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
	}
</style>