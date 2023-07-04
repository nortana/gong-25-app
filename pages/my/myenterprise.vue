<template>
	<view class="pageContent">
		<!-- @clickLeft="clickLeftHandle" left-icon="left" -->
		<uni-nav-bar title="我的" dark :fixed="true" shadow background-color="#007AFF" status-bar />
		<view style="height: 250px;border: 1px solid white;background-color: white;">
			<view style="flex-direction: row;display: flex;margin-top: 30px;margin-left: 30px;">
				<view>
					<image style="width: 80px; height: 80px;border-radius: 50px;" src="@/static/g1.png"></image>
				</view>
				<view style="margin: 18px;">
					<view style="font-size: 23px;font-weight: 1000;">A家家具装饰家具有限公司</view>
					<view style="font-size: 18px;margin-top: 5px;">李女士</view>
				</view>
			</view>

			<view style="height: 100px;margin: 20px;">
				<view style="display: flex;flex-direction:row;font-size: 20px;">
					<view
						style="-webkit-flex: 1;flex: 1;display: flex; height: 100px;justify-content: center; align-items: center; ">
						<view style="display: flex;flex-direction:column;">
							<view style="text-align: center;color:#ffc279;">12</view>
							<view style="margin-top: 10px;">我的预约</view>
						</view>
					</view>
					<view
						style="-webkit-flex: 1;flex: 1;display: flex;height: 100px; justify-content: center; align-items: center; ">
						<view style="display: flex;flex-direction:column;">
							<view style="text-align: center;color:#5c92f0;">12</view>
							<view style="margin-top: 10px;">定聘数</view>
						</view>
					</view>
					<view @click="myAppointmentHandle"
						style="-webkit-flex: 1;flex: 1;display: flex;height: 100px; justify-content: center; align-items: center; ">
						<view style="display: flex;flex-direction:column;">
							<view style="text-align: center;color:#e32c30;">12</view>
							<view style="margin-top: 10px;">职位卡</view>
						</view>
					</view>
				</view>
			</view>

		</view>

		<view style="height: 100px;margin: 10px;">
			<view style="display: flex;flex-direction:row;font-size: 20px;">
				<view @click="postRecruitmentHandle" style="-webkit-flex: 1;flex: 1;display: flex; background-color: white;border-radius: 10px;
					height: 100px;justify-content: center; align-items: center; ">
					<view style="display: flex;flex-direction:column;">
						<view style="text-align: center;font-size: 22px;font-weight: 700;">发布招聘</view>
						<view style="margin-top:5px;font-size: 15px;">105个求职职位</view>
					</view>
					<view style="margin-left: 10px;">
						<image style="width: 60px; height: 60px;" src="@/static/g4.png"></image>
					</view>
				</view>
				<view style="-webkit-flex: 1;flex: 1;display: flex;background-color: white;border-radius: 10px;
				height: 100px; justify-content: center; align-items: center;margin-left: 20px; ">
					<view style="display: flex;flex-direction:column;" @click="positionManageHandle">
						<view style="text-align: center;font-size: 22px;font-weight: 700;">职位管理</view>
						<view style="margin-top: 5px;font-size: 15px;">职位列表</view>
					</view>
					<view style="margin-left: 10px;">
						<image style="width: 60px; height: 60px;" src="@/static/g5.png"></image>
					</view>
				</view>
			</view>
		</view>

		<view style="background-color: white;margin: 10px;border-radius: 10px;">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" :style="[{height:clineHeight+'px'}]">
				<view style="display: flex;flex-direction:column;">
					<view
						style="margin: 10px;padding: 10px;display: flex;flex-direction:row;-webkit-justify-content: space-between;justify-content: space-between;">
						<view>
							<uni-icons type="headphones" size="25" />
							<text style="font-size: 21px;">客服中心</text>
						</view>
						<view>
							<uni-icons type="forward" size="30" />
						</view>
					</view>
					<view @click="aboutWe('bottom')"
						style="margin: 10px;padding: 10px;display: flex;flex-direction:row;-webkit-justify-content: space-between;justify-content: space-between;">
						<view>
							<uni-icons type="bars" size="25" />
							<text style="font-size: 21px;">关于我们</text>
						</view>
						<view>
							<uni-icons type="forward" size="30" />
						</view>
					</view>
					<view
						style="margin: 10px;padding: 10px;display: flex;flex-direction:row;-webkit-justify-content: space-between;justify-content: space-between;">
						<view>
							<uni-icons type="tune" size="25" />
							<text style="font-size: 21px;">切换之雇主</text>
						</view>
						<view>
							<uni-icons type="forward" size="30" />
						</view>
					</view>
					<view @click="myEmployeesHandle"
						style="margin: 10px;padding: 10px;display: flex;flex-direction:row;-webkit-justify-content: space-between;justify-content: space-between;">
						<view>
							<uni-icons type="staff" size="25" />
							<text style="font-size: 21px;">我的员工</text>
						</view>
						<view>
							<uni-icons type="forward" size="30" />
						</view>
					</view>

					<view @click="entrepreneurshipClassHandle"
						style="margin: 10px;padding: 10px;display: flex;flex-direction:row;-webkit-justify-content: space-between;justify-content: space-between;">
						<view>
							<uni-icons type="tune" size="25" />
							<text style="font-size: 21px;">进入创业班</text>
						</view>
						<view>
							<uni-icons type="forward" size="30" />
						</view>
					</view>

					<view @click="enterpriseHandle"
						style="margin: 10px;padding: 10px;display: flex;flex-direction:row;-webkit-justify-content: space-between;justify-content: space-between;">
						<view>
							<uni-icons type="tune" size="25" />
							<text style="font-size: 21px;">进入企业</text>
						</view>
						<view>
							<uni-icons type="forward" size="30" />
						</view>
					</view>
					<view style="margin: 10px;padding: 10px;font-size: 21px;">退出登录</view>
				</view>
			</scroll-view>
		</view>

		<bottom-state-nav-enterprise :factoryActive="false" :positionActive="false" :messageActive="false"
			:myselfActive="true"></bottom-state-nav-enterprise>


		<view>
			<!-- 普通弹窗 -->
			<uni-popup ref="popup" background-color="#fff" @change="change">
				<view class="popup-content" style="    margin: 0px 50px 50px 50px;">
					<view style="    font-size: 22px;
							font-weight: 800;
							text-align: center;
							height: 80px;
							line-height: 81px;">关于我们</view>
					<text class="text" style="line-height: 25px;font-size: 18px;">
						工25是首家以整点速配＋准点匹配模式为核心的线上招聘平台，平台立意深入青、中、老三个代际的初就业、转就业、再就业需要的解决方案，为企业提供效能高、成本低、配合及时的招聘服务，同时也让广大求职者拥有一个招聘信息真实、薪金有保障、就业更高效的求职工具
					</text>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import bottomStateNavEnterprise from '@/pages/components/bottom-state-nav-enterprise'
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				clineHeight: 100,

			}
		},
		components: {
			bottomStateNavEnterprise
		},
		onLoad() {
			this.getClineHeight();
		},
		methods: {
			myEmployeesHandle() {
				uni.navigateTo({
					url: '/pages/myemployees/myemployees'
				})
			},
			postRecruitmentHandle() {
				uni.navigateTo({
					url: '/pages/publishjob/publishjob?state=1'
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
						this.clineHeight = res.windowHeight - this.getBarHeight() - 460;
					})
				});
				console.log("this.clineHeight::", this.clineHeight)
			},
			enterpriseHandle() {
				uni.navigateTo({
					url: '/pages/my/myjob'
				})
			},
			positionManageHandle() {
				uni.navigateTo({
					url: '/pages/my/myjobenterprise'
				})
			},
			entrepreneurshipClassHandle() {
				uni.navigateTo({
					url: '/pages/administrator/administrator'
				})
			},
			myAppointmentHandle() {
				uni.navigateTo({
					url: '/pages/appointment/appointment'
				})
			},
			clickLeftHandle() {},
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			aboutWe(type) {
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open(type)
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