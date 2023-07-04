<template>
	<view class="pageContent">
		<uni-nav-bar title="获奖列表" dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left"
			@clickLeft="clickLeftHandle" />
			
			<view  class="uni-padding-wrap " style="padding: 0;">
				<uni-segmented-control :current="current" :values="items" :style-type="styleType"
					:active-color="activeColor" @clickItem="onClickItem" />
			</view>
			
			<view >
				<view v-if="current === 0">
					<scroll-view :scroll-top="scrollTop" scroll-y="true" :style="[{height:clineHeight+'px'}]"
						@scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
						<block v-for="(item,index) in list" :key="index">
							<view style="margin: 20px;background-color: white;padding: 10px;
							line-height: 27px;">
								<view>奖品：小米电饭煲</view>
								<view><text>姓名：张珊珊</text><text style="margin-left: 40px;">联系方式：15912345678</text></view>
								<view>2024-04-01 12:23:42</view>
								<view style="margin-top: 5px;display: flex;flex-direction:row;
									-webkit-justify-content: flex-end;justify-content: flex-end;">
									<view>
										<button style="" class="mini-btn" type="primary" size="mini">已寄出</button>
									</view>
									<!-- <view>
										<button style="" class="mini-btn" type="default" size="mini">已完成</button>
									</view> -->
								</view>
							</view>
						</block>
					</scroll-view>
				</view>
			</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: ['全部', '经理推手', '铁军贡献奖'],
				styleType: 'text',
				current: 0,
				activeColor: '#007aff',
				clineHeight: 600,
				list: [{}, {}, {}, {}, {}, {}, {}, {}],
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
			}
		},
		methods: {

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
