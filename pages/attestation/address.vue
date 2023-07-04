<template>
	<view>
		<uni-nav-bar title="实名认证" dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left"
			@clickLeft="back" />
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
				attestationForm: {},
			}
		},
		onLoad() {
			let query = this.$Route.query
			console.log("query::",query)
			if(query){
				this.attestationForm = query;
			}
		},
		methods: {
			bindClick(e) {
				let selected = e.select;
				let item = e.item;
				let attestationForm;
				// uni.getStorage({
				// 	key: 'attestationForm',
				// 	success: function(res) {
				// 		attestationForm = res.data
				// 	}
				// });

				this.attestationForm.city = item.name;
				// uni.setStorage({
				// 	key: 'attestationForm',
				// 	data: attestationForm
				// })
				
				this.$Router.push({
					path: '/pages/attestation/attestation',
					query: this.attestationForm
				})
				// uni.navigateTo({
				// 	url: 'pages/attestation/attestation'
				// })
			},
			back() {
				let that = this;
				this.$Router.push({
					path: '/pages/attestation/attestation',
					query: this.attestationForm
				})
				// uni.setStorage({
				// 	key: 'attestationForm',
				// 	data: that.attestationForm
				// })
				// uni.navigateTo({
				// 	url: 'pages/attestation/attestation'
				// })
			},
		}
	}
</script>

<style>
</style>