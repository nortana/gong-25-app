<template>
	<view>
		<movable-area class="movable-area">
			<movable-view @tap="onClickHandle" class="movable-view" :x="x" :y="y" direction="all"
			style="background-color: #568af1;border: 1px solid;width: 106px; 
			    height: 35px;border-radius: 23px;position: relative;">
				<image style="width: 25px;height: 25px;margin-top: 5px;margin-left: 6px;" src="@/static/g14.png">
				</image>
				<text style="margin-left: 10px;font-size: 18px;color: white;position: absolute;top: 7px;">聊天室</text> 
			</movable-view>
		</movable-area>
	</view>
</template>
 
<script>
	export default {
		data() {
			return {
				x: 3000,		//x坐标
				y: 300,		//y坐标
			}
		},
		methods:{
			onClickHandle(){
  				uni.navigateTo({
  					url: '/pages/chatroom/chatroomlist'
  				})
			},
		}
	}
</script>
 
<style lang="scss">
	$all_width: 96rpx;
	$all_height:96rpx;
 
	.movable-area {
		height: 100vh;
		width: 750rpx;
		top: 0;
		position: fixed;
		pointer-events: none;		//此处要加，鼠标事件可以渗透
		.movable-view {
			width: $all_width;
			height: $all_height;
			pointer-events: auto;	//恢复鼠标事件
			image {
				width: $all_width;
				height: $all_height;
			}
		}
	}
</style>