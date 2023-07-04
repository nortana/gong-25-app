<template>
	<view class="pageContent">
		<uni-nav-bar title="认证管理" dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left"
			@clickLeft="clickLeftHandle" />

		<view class="uni-padding-wrap " style="padding: 0;">
			<uni-segmented-control :current="current" :values="items" :style-type="styleType"
				:active-color="activeColor" @clickItem="onClickItem" />
		</view>
		<view>
			<view v-if="current === 0">
				<view style="margin: 15px 12px 10px;">
					<button style="margin-left: 10px;background-color: white;border: 0px;border-radius: 17px;" class="mini-btn" plain="true" size="mini">待审核</button>
					<button style="margin-left: 10px;background-color: white;border: 0px;border-radius: 17px;" class="mini-btn" type="default" size="mini">已通过</button>
					<button style="margin-left: 10px;background-color: white;border: 0px;border-radius: 17px;" class="mini-btn" type="default" size="mini">已驳回</button>
				</view>
				<view>
					<scroll-view :scroll-top="scrollTop" scroll-y="true" :style="[{height:clineHeight+'px'}]"
						@scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
						<block v-for="(item,index) in list" :key="index">
							<view :style="{'margin':index>0?'20px':'0 20px 20px 20px','background-color':'white','padding':'10px',
								'position':'relative','line-height':'27px'}">
								<view>认证类型：企业</view>
								<view style="position: absolute;right: 17px;top: 8px;color: red;">待审核</view>
								<!-- <view style="position: absolute;right: 17px;top: 8px;color: green;">已通过</view>
								<view style="position: absolute;right: 17px;top: 8px;color: orange;">已拒绝</view> -->
								<view><text>姓名：张珊珊</text><text style="margin-left: 40px;">联系方式：15912345678</text></view>
								<view>身份证号码：2123131312312312313123</view>
								<view>公司名称：金仕源创科技有限公司</view>
								<view>工作地址：新疆省靖江路365号</view>
								<view>申请时间：2024-04-01 12:23:42</view>
								<view>证件照片</view>
								<view>
									<image style="width: 80px;height: 80px;" src='@/static/g15.png'></image>
									<image style="width: 80px;height: 80px;margin-left: 10px;" src='@/static/g15.png'></image>
									<image style="width: 80px;height: 80px;margin-left: 10px;" src='@/static/g15.png'></image>
								</view>
								<view style="margin-top: 5px;display: flex;flex-direction:row;
									-webkit-justify-content: flex-end;justify-content: flex-end;">
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
		</view>
		
		
		<view>
			<!-- 普通弹窗 -->
			<uni-popup ref="popup" background-color="#fff">
				<view style="text-align: center;font-size: 20px;margin: 20px;font-weight: 500;">拒绝原因</view>
				<view style="margin: 10px 30px;">
					<textarea class="textarea" v-model="txt" style="height: 100px;border: solid 1px #edecec; width: 93%;padding: 10px;"></textarea>
				</view>
				<view 
					style="margin: 30px ;display: flex;flex-direction:row;-webkit-justify-content: flex-end;justify-content: flex-end;">
					<view>
						<button style="" class="mini-btn" type="primary" size="mini">提交</button>
					</view>
					<view>
						<button style="margin-left: 10px;" class="mini-btn" type="primary" 
							placeholder="请输入拒绝原因"  @click="toggleHandle" size="mini">拒绝</button>
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
				txt:'',
				clineHeight:600,
				items: ['全部', '企业', '个体工商户', '工人', '家庭', '微店', '个人'],
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
						this.clineHeight = res.windowHeight - this.getBarHeight() - 100;
					})
				});
				console.log("this.clineHeight::", this.clineHeight)
			},
			toggleHandle() {
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open('bottom')
			},
			clickLeftHandle() {
				uni.navigateTo({
					url: '/pages/administrator/administrator'
				})
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