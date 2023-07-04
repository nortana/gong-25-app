<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-common-mt">
			<view>
				<map :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'map',
				id: 0, // 使用 marker点ac击事件 需要填写id
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
					              content: "标注描述",
					              fontSize: 12,
					              borderRadius: 10,
					              bgColor: "#ffffff",
					              padding: 10,
					              display: "ALWAYS"
					            }
				}]
			}
		},
		methods: {

		}
	}
</script>
<style>
	map {
		width: 100%;
		height: 600rpx;
	}
</style>
