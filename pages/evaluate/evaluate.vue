<template>
	<view class="pageContent">
		<uni-nav-bar title="评价" dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left"
			@clickLeft="clickLeftHandle" />

		<view class=""
			style="flex-direction: row;display: flex;background-color: white;padding: 16px 0px;height: 32px;">
			<view style="
			line-height: 35px;
				height: 35px;
				font-size: 18px;
				font-weight: 600;margin: 0 20px;">综合评价</view>
			<view @click="showHandle('good')">
				<image class="image-rate-css" src="@/static/g7.png"></image>
			</view>
			<view @click="showHandle('good')" class="font-rate-css" :style="[{'color':goodcolor}]">好评</view>
			<view @click="showHandle('zhong')">
				<image class="image-rate-css" src="@/static/g8.png"></image>
			</view>
			<view @click="showHandle('zhong')" class="font-rate-css" :style="[{'color':zhongcolor}]">中评</view>
			<view @click="showHandle('cha')">
				<image class="image-rate-css" src="@/static/g9.png"></image>
			</view>
			<view @click="showHandle('cha')" class="font-rate-css" :style="[{'color':chacolor}]">差评</view>
		</view>
		
		<view class=""
			style="    margin-top: 20px;flex-direction: row;display: flex;background-color: white;padding: 16px 0px;height: 26px;">
			<view style="
				font-size: 18px;
				font-weight: 600;margin: 0 20px;">就职评价</view>
			<view>
				<uni-icons @click="starHandle('1')" :type="startype1" size="30" color="#F7BA2A" :active="true"></uni-icons>
				<uni-icons @click="starHandle('2')" :type="startype2" size="30" color="#F7BA2A" :active="true"></uni-icons>
				<uni-icons @click="starHandle('3')" :type="startype3" size="30" color="#F7BA2A" :active="true"></uni-icons>
				<uni-icons @click="starHandle('4')" :type="startype4" size="30" color="#F7BA2A" :active="true"></uni-icons>
				<uni-icons @click="starHandle('5')" :type="startype5" size="30" color="#F7BA2A" :active="true"></uni-icons>
			</view>
		</view>
		<view style="padding: 20px;margin-top: 50px;">
			<button type="warn">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodcolor:"",
				zhongcolor:"",
				chacolor:"",
				startype1:'star',
				startype2:'star',
				startype3:'star',
				startype4:'star',
				startype5:'star',
			}
		},
		methods: {
			starHandle(index){
				if(index==1){
					if(this.startype1 =='star-filled'){
						this.startype1 = "star"
						return;
					}
					this.startype1 = "star-filled"
				} else if(index==2){
					if(this.startype2 =='star-filled'){
						this.startype2 = "star"
						return;
					}
					this.startype2 = "star-filled"
				} else if(index==3){
					if(this.startype3 =='star-filled'){
						this.startype3 = "star"
						return;
					}
					this.startype3 = "star-filled"
				} else if(index==4){
					if(this.startype4 =='star-filled'){
						this.startype4 = "star"
						return;
					}
					this.startype4 = "star-filled"
				} else if(index==5){
					if(this.startype5 =='star-filled'){
						this.startype5 = "star"
						return;
					}
					this.startype5 = "star-filled"
				}  
				
			},
			showHandle(state) {
				if(state == "good"){
					this.goodcolor="red"
					this.zhongcolor=""
					this.chacolor=""
				} else if(state == "zhong"){
					this.goodcolor=""
					this.zhongcolor="red"
					this.chacolor=""
				} else if(state == "cha"){
					this.goodcolor=""
					this.zhongcolor=""
					this.chacolor="red"
				}  
				
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

	.font-rate-css {
		line-height: 35px;
		height: 35px;
		margin-left: 2px;
		margin-right: 25px;
		font-size: 16px;
	}

	.image-rate-css {
		width: 35px;
		height: 35px;
	}
</style>