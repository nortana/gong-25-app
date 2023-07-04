<template>
	<view>
		<uni-nav-bar title="群管理" dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left"
			@clickLeft="clickLeftHandle" />
		<uni-indexed-list style="margin-top: 49px;" :options="lists" :singleChoice="true" :show-select="showSelect"
			@click="bindClick" />
	</view>
</template>

<script>
	import address from '@/common/address.js'
	export default {
		components: {},
		data() {
			return {
				showSelect: true,
				lists: address.list,
				form: {},
			}
		},
		onLoad() {
			let query = this.$Route.query
			if(query){
				this.form = query;
			}
		},
		methods: {
			bindClick(e) {
				let selected = e.select;
				let item = e.item;
				this.form.city = item.name;
				console.log('this.form>>>>',this.form)
				this.$Router.push({
					path: '/pages/crowd/createcrowd',
					query: this.form
				})
			},
			clickLeftHandle() {
				let that = this;
				this.$Router.push({
					path: '/pages/crowd/createcrowd',
					query: this.form
				})
			},
		}
	}
</script>

<style>
</style>