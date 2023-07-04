<template>
	<view>
		<uni-nav-bar title="群管理" dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left"
			@clickLeft="clickLeftHandle" />

		<view v-if="true" style="padding: 30px;">
			<view><text style="color: red;">*</text>群名称</view>
			<input class="uni-input" v-model="name" focus placeholder="请输入群名称" placeholder-style="font-size:10px;"
				style="background-color: #f6f8fa;height: 30px;padding-left: 5px;margin-top: 5px;" />
			<view style="margin-top:10px;"><text style="color: red;">*</text>城市选择</view>
			<input @focus="handleCityFocus" v-model="city" class="uni-input" focus placeholder="请选择城市"
				placeholder-style="font-size:10px;"
				style="background-color: #f6f8fa;height: 30px;padding-left: 5px;margin-top: 5px;" />
			<view style="margin-top:10px;">群简介</view>
			<textarea maxlength="100" v-model="content" placeholder="请输入群简介(0/100)" placeholder-style="font-size:10px;"
				style=" margin-top:5px;  background-color: #f6f8fa;width: 100%;padding: 3px;"></textarea>
			<view style="padding:50px 30px;">
				<button type="primary">提交</button>
			</view>
		</view>

		<uni-indexed-list style="margin-top: 49px;" :options="lists" :singleChoice="true" :show-select="showSelect"
			@click="bindClick" />
	</view>
</template>

<script>
	import address from '@/common/address.js'
	export default {
		data() {
			return {
				showSelect: true,
				lists: address.list,
				name: '',
				city: '',
				content: '',
			}
		},
		methods: {




			handleCityFocus() {
				let form = {

				}
				form.city = this.city
				form.name = this.name
				form.content = this.content
				// this.$Router.push({
				// 	path: '/pages/crowd/address',
				// 	query: form
				// })
			},
		}
	}
</script>

<style>

</style>