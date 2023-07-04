<template>
	<view>
		<view class="goods-carts">
			<view class="icon-content" style="font-size: 10px;">
				<view class="icon-item" @click="positionActiveHandle()">
					<image v-if="factoryActive" class="image-width-height" src="@/static/g10.png"></image>
					<text v-if="factoryActive"   style="color:#007aff;">职位</text>

					<image v-if="!factoryActive"  class="image-width-height" style=""  src="@/static/g10-1.png"></image>
					<text v-if="!factoryActive" style="color:#5e6d82;">职位</text>
				</view>
				<view class="icon-item" @click="factoryActiveHandle()">
					<image v-if="positionActive"  class="image-width-height" style=""  src="@/static/g11-1.png"></image>
					<text v-if="positionActive" style="color:#007aff">工厂直招</text>

					<image v-if="!positionActive"  class="image-width-height" style=""  src="@/static/g11.png"></image>
					<text v-if="!positionActive" style="color:#5e6d82">工厂直招</text>
				</view>
				
				
				
			<!-- 	color="#ffffff" -->
				<view class="icon-item" @click="plusActiveHandle()"  >
					<view style="margin-top: -11px;">
						<uni-icons type="plusempty"  style="border-radius: 50px;background-color: #007aff;" color="#ffffff"  size="46" class="" />
					</view>
				</view>
				
				<view class="icon-item" @click="messageActiveHandle()">
					<image v-if="messageActive"  class="image-width-height" style=""  src="@/static/g12-1.png"></image>
					<text v-if="messageActive" style="color:#007aff">消息</text>

					<image v-if="!messageActive"  class="image-width-height" style=""  src="@/static/g12.png"></image>
					<text v-if="!messageActive" style="color:#5e6d82">消息</text>

				</view>
				<view class="icon-item" @click="mySwitchActiveHandle()">
					<image v-if="myselfActive"  class="image-width-height" style=""  src="@/static/g13-1.png"></image>
					<text v-if="myselfActive" style="color:#007aff">我的</text>

					<image v-if="!myselfActive"  class="image-width-height" style=""  src="@/static/g13.png"></image>
					<text v-if="!myselfActive" style="color:#5e6d82">我的</text>
				</view>
			</view>
		</view>

		<view>
			<!-- 普通弹窗 -->
			<uni-popup ref="popup" background-color="#fff">
				<view style="font-size: 20px;
					text-align: center;
					padding: 20px;">
					请选择您的身份
				</view>
				<view style="flex-direction: row;display: flex;padding: 10px 13px;margin: 5px 0px 40px;">
					<view @click="employerHandle" style="-webkit-flex: 1;flex: 1;    text-align: center;">
						<image style="width: 160px;height: 160px;" src="@/static/g21.png"></image>
					</view>
					<view @click="personnelHandle" style="-webkit-flex: 1;flex: 1;    text-align: center;">
						<image style="width: 160px;height: 160px;" src="@/static/g22.png"></image>
					</view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			factoryActive: {
				type: Boolean,
				default: false
			},
			positionActive: {
				type: Boolean,
				default: false
			},
			messageActive: {
				type: Boolean,
				default: false
			},
			myselfActive: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				// factoryActive: true,
				// positionActive: false,
				// messageActive: false,
				// myselfActive: false,
			}
		},
		methods: {
			employerHandle(){
				uni.navigateTo({
					url: '/pages/attestation/attestation'
				})
				
			},
			personnelHandle(){
				uni.navigateTo({
					url: '/pages/publishworkers/publishworkers'
				})
			},
			mySwitchActiveHandle() {
				uni.navigateTo({
					url: '/pages/my/my'
				})
			},
			messageActiveHandle() {
				uni.navigateTo({
					url: '/pages/message/message'
				})
			},
			positionActiveHandle() {
				uni.navigateTo({
					url: '/pages/platform/platform'
				})
			},
			factoryActiveHandle() {
				uni.navigateTo({
					url: '/pages/factoryrecruit/factoryrecruit'
				})
			},
			plusActiveHandle() {
				//this.$refs.popup.open('bottom')
				this.personnelHandle();
			},

		},

	}
</script>

<style>
	/* .button-view-css {
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
	} */
	
	.image-width-height{
		width: 20px;
		height: 20px;
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
		height: 55px;
		background-color: white;
	}
</style>

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
			padding: 10px 5px;
			text-align: center;
			flex-direction: column;
		}

		// .icon-item-plus {

		// 	/* #ifndef APP-NVUE */
		// 	display: flex;
		// 	box-sizing: border-box;
		// 	width: calc(100% / 5);
		// 	/* #endif */
		// 	/* #ifdef APP-NVUE */
		// 	width: 387rpx;
		// 	/* #endif */
		// 	align-items: center;
		// 	padding: 10px;
		// 	text-align: center;
		// 	flex-direction: column;
		// }
	}
</style>