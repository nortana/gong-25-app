<template>
	<view class="pageContent">
		<!-- @clickLeft="clickLeftHandle" left-icon="left" -->
		<uni-nav-bar title="我的" dark :fixed="true" shadow background-color="#007AFF" status-bar />
		<view style="height: 150px;border: 1px solid white;background-color: white;">
			<view style="flex-direction: row;display: flex;margin-top: 20px;margin-left: 30px;">
				<view>
					<image style="width: 60px; height: 60px;border-radius: 50px;" src="@/static/g1.png"></image>
				</view>
				<view style="margin-left: 18px;margin-top: 7px;">
					<view style="font-size: 20px;font-weight: 1000;">职场小白白</view>
					<view style="font-size: 16px;margin-top: 5px;">去认证</view>
				</view>
			</view>

			<view style="margin:0px 20px;">
				<view style="display: flex;flex-direction:row;font-size: 18px;">
					<view class="num-view-class">
						<view style="display: flex;flex-direction:column;">
							<view style="text-align: center;color:#ffc279;">12</view>
							<view style="margin-top: 8px;">预约成功数</view>
						</view>
					</view>
					<view class="num-view-class">
						<view style="display: flex;flex-direction:column;">
							<view style="text-align: center;color:#5c92f0;">12</view>
							<view style="margin-top: 8px;">定聘数</view>
						</view>
					</view>
					<view @click="myAppointmentHandle" class="num-view-class">
						<view style="display: flex;flex-direction:column;">
							<view style="text-align: center;color:#e32c30;">12</view>
							<view style="margin-top: 8px;">我的预约</view>
						</view>
					</view>
				</view>
			</view>

		</view>

		<view style="margin: 10px;line-height: 15px;">
			<view style="display: flex;flex-direction:row;font-size: 20px;">
				<view style="-webkit-flex: 1;flex: 1;display: flex; background-color: white;border-radius: 10px;
					height: 60px;justify-content: center; align-items: center; ">
					<view style="display: flex;flex-direction:column;">
						<view style="text-align: center;font-size: 16px;font-weight: 700;">发布求职</view>
						<view style="margin-top:5px;font-size: 11px;">105个在招职位</view>
					</view>
					<view style="margin-left: 10px;">
						<image style="width: 40px; height: 40px;" src="@/static/g4.png"></image>
					</view>
				</view>
				<view style="-webkit-flex: 1;flex: 1;display: flex;background-color: white;border-radius: 10px;
				height: 60px; justify-content: center; align-items: center;margin-left: 10px; ">
					<view style="display: flex;flex-direction:column;" @click="myJob">
						<view style="text-align: center;font-size: 16px;font-weight: 700;">我的求职</view>
						<view style="margin-top: 5px;font-size: 11px;">4个求职卡</view>
					</view>
					<view style="margin-left: 10px;">
						<image style="width: 40px; height: 40px;" src="@/static/g5.png"></image>
					</view>
				</view>
			</view>
		</view>
		<view style="background-color: white;margin: 10px;border-radius: 10px;">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" :style="[{height:clineHeight+'px'}]">
				<view style="display: flex;flex-direction:column;">
					<view class="menu-list-class" >
						<view>
							<uni-icons type="headphones" size="20" />
							<text style="font-size: 16px;">客服中心</text>
						</view>
						<view>
							<uni-icons type="forward" size="25" />
						</view>
					</view>
					<view @click="aboutWe('bottom')"  class="menu-list-class" >
						<view>
							<uni-icons type="bars" size="20" />
							<text style="font-size: 16px;">关于我们</text>
						</view>
						<view>
							<uni-icons type="forward" size="25" />
						</view>
					</view>
					<view  class="menu-list-class" >
						<view>
							<uni-icons type="tune" size="20" />
							<text style="font-size: 16px;">切换之雇主</text>
						</view>
						<view>
							<uni-icons type="forward" size="25" />
						</view>
					</view>

					<view @click="entrepreneurshipClassHandle"  class="menu-list-class" >
						<view>
							<uni-icons type="tune" size="20" />
							<text style="font-size: 16px;">进入创业班</text>
						</view>
						<view>
							<uni-icons type="forward" size="25" />
						</view>
					</view>

					<view @click="enterpriseHandle"  class="menu-list-class" >
						<view>
							<uni-icons type="tune" size="20" />
							<text style="font-size: 16px;">进入企业</text>
						</view>
						<view>
							<uni-icons type="forward" size="25" />
						</view>
					</view>

					<view @click="createEnterpriseHandle"  class="menu-list-class" >
						<view>
							<uni-icons type="tune" size="20" />
							<text style="font-size: 16px;">成为企业</text>
						</view>
						<view>
							<uni-icons type="forward" size="25" />
						</view>
					</view>
					<view style="margin:0px 10px;padding:5px 10px;font-size: 16px;">退出登录</view>
				</view>
			</scroll-view>
		</view>

		<bottom-state-nav :factoryActive="false" :positionActive="false" :messageActive="false"
			:myselfActive="true"></bottom-state-nav>


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
	import bottomStateNav from '@/pages/components/bottom-state-nav'
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
			bottomStateNav
		},
		onLoad() {
			this.getClineHeight();
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
						this.clineHeight = res.windowHeight - this.getBarHeight() - 400;
					})
				});
			},
			enterpriseHandle() {
				uni.navigateTo({
					url: '/pages/my/myenterprise'
				})
			},
			myJob() {
				uni.navigateTo({
					url: '/pages/my/myjob'
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
			createEnterpriseHandle() {
				uni.navigateTo({
					url: '/pages/attestation/attestation'
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

	.num-view-class {
		-webkit-flex: 1;
		flex: 1;
		display: flex;
		height: 70px;
		justify-content: center;
		align-items: center;
	}

	.menu-list-class {
		margin: 0px 10px;
		padding: 5px 10px;
		display: flex;
		flex-direction: row;
		-webkit-justify-content: space-between;
		justify-content: space-between;
	}
</style>