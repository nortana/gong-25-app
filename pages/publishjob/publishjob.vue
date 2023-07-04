<template>
	<view>
		<uni-nav-bar title="发布职位" dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left"
			@clickLeft="clickLeftHandle" />
		<view style="padding: 30px;font-size: 16px;" :loading="loading">
			<view class="uni-form-item uni-column">
				<view><text style="color: red;">*</text>职位名称</view>
				<input class="uni-input view-input-css" v-model="work_name" placeholder="请输入职位名称" />
			</view>
			<view class="view-margin-css">
				<view><text style="color: red;">*</text>薪种</view>
				<uni-data-checkbox mode="tag" multiple v-model="salary_type" :localdata="hobby1"></uni-data-checkbox>
			</view>
			<view class="uni-form-item uni-column view-margin-css">
				<view class=""><text style="color: red;">*</text>到场时间</view>
				<picker mode="date" class=" view-input-css" v-model="start_time" style="line-height: 40px;"
					:start="startDate" :end="endDate" @change="bindStartDateChange">
					<view class="uni-input">{{start_time}}</view>
				</picker>
			</view>

			<view class="uni-form-item uni-column view-margin-css">
				<view class=""><text style="color: red;">*</text>离场时间</view>
				<picker mode="date" class="view-input-css" v-model="end_time" style="line-height: 40px;"
					:start="startDate" :end="endDate" @change="bindEndDateChange">
					<view class="uni-input">{{end_time}}</view>
				</picker>
			</view>


			<view class="uni-form-item uni-column view-margin-css">
				<view class=""><text style="color: red;">*</text>薪资待遇</view>
				<input class="uni-input view-input-css" v-model="salary" type="number" placeholder="请输入薪资待遇" />
			</view>
			<view class="view-margin-css">
				<view class=""><text style="color: red;">*</text>经验要求</view>
				<uni-data-checkbox mode="tag" v-model="work_age" :localdata="hobby2"></uni-data-checkbox>
			</view>
			<view class="uni-form-item uni-column view-margin-css">
				<view class=""><text style="color: red;">*</text>我的地址</view>
				<input class="uni-input view-input-css" v-model="address" @focus="handleAdressFocus"
					placeholder="请选择我的地址" />
			</view>
			<view class="view-margin-css">
				<view class="text">学历要求</view>
				<uni-data-checkbox mode="tag" v-model="study_history" :localdata="hobby3"></uni-data-checkbox>
			</view>
			<view class="">
				<view class="text">性别</view>
				<uni-data-checkbox mode="tag" multiple v-model="gender" :localdata="hobby4"></uni-data-checkbox>
			</view>

			<view class="view-margin-css">
				<view>福利</view>
				<uni-data-checkbox mode="tag" multiple v-model="attribute_strings"
					:localdata="hobby5"></uni-data-checkbox>
			</view>


			<view class="uni-form-item uni-column view-margin-css">
				<view class=""><text style="color: red;">*</text>职位意图</view>
				<textarea
					style=" margin-top:10px; border:2px solid #dcd6d6; border-radius: 5px;width: 100%;padding: 3px;  "
					maxlength="2000" v-model="work_require"></textarea>
			</view>

			<view class="uni-btn-v" style="margin-top: 20px; margin-bottom: 20px;">
				<button type="primary" @click="submit">保存</button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				loading: false,
				work_name: '',
				salary_type: [1],
				salary: '',
				start_time: currentDate,
				end_time: currentDate,
				work_age: 0,
				address: 'ss',
				distance: '',
				latitude: '',
				longitude: '',
				name: '',
				study_history: 0,
				gender: 0,
				work_require: '',
				attribute_strings: [1],

				hobby1: [{
					text: '时薪',
					value: 1
				}, {
					text: '日薪',
					value: 2
				}, {
					text: '周薪',
					value: 3
				}, {
					text: '月薪',
					value: 4
				}, {
					text: '季薪',
					value: 5
				}, {
					text: '年薪',
					value: 6
				}],
				hobby2: [{
					text: '在校生',
					value: -1
				}, {
					text: '应届生',
					value: 0
				}, {
					text: '1年以内',
					value: 1
				}, {
					text: '2-3年',
					value: 2
				}, {
					text: '5年以上',
					value: 5
				}],
				hobby3: [{
					text: '无学历',
					value: 0
				}, {
					text: '小学',
					value: 1
				}, {
					text: '初中',
					value: 2
				}, {
					text: '中专/中技',
					value: 3
				}, {
					text: '高中',
					value: 4
				}, {
					text: '大专',
					value: 5
				}, {
					text: '本科',
					value: 6
				}],
				hobby4: [{
					text: '未知',
					value: 0
				}, {
					text: '男',
					value: 1
				}, {
					text: '女',
					value: 2
				}],
				hobby5: [{
					text: '年底奖金',
					value: 0
				}, {
					text: '免费体检',
					value: 1
				}, {
					text: '入职培训',
					value: 2
				}, {
					text: '周末双休',
					value: 3
				}, {
					text: '餐补',
					value: 4
				}, {
					text: '油补',
					value: 5
				}],
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		onLoad(e) {
			console.log("eeeeeeeeeeee>>", e)
			this.routeState = e.data;
		},
		methods: {
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},

			clickLeftHandle() {
				let url = '/pages/platform/platformenterprise'
				uni.navigateTo({
					url: url
				})
			},
			submit() {
				if (!this.work_name) {
					uni.showModal({
						content: "请输入职位名称",
						confirmText: "确定",
						cancelText: "取消"
					})
					return;
				}
				if (this.salary_type.length == 0) {
					uni.showModal({
						content: "请选择薪种",
						confirmText: "确定",
						cancelText: "取消"
					})
					return;
				}
				if (!this.start_time) {
					uni.showModal({
						content: "请选择到场时间",
						confirmText: "确定",
						cancelText: "取消"
					})
					return;
				}
				if (!this.end_time) {
					uni.showModal({
						content: "请选择离场时间",
						confirmText: "确定",
						cancelText: "取消"
					})
					return;
				}

				let date1 = new Date(this.start_time);
				let date2 = new Date(this.end_time);
				let result = date1 > date2;
				if (result) {
					uni.showModal({
						content: "到场时间不能大于离场时间",
						confirmText: "确定",
						cancelText: "取消"
					})
					return;
				}

				if (!this.salary) {
					uni.showModal({
						content: "请输入期望薪资",
						confirmText: "确定",
						cancelText: "取消"
					})
					return;
				}
				if (this.work_age.length == 0) {
					uni.showModal({
						content: "请选择经验要求",
						confirmText: "确定",
						cancelText: "取消"
					})
					return;
				}
				if (!this.address) {
					uni.showModal({
						content: "请选择我的地址",
						confirmText: "确定",
						cancelText: "取消"
					})
					return;
				}

				this.loading = true;
				this.$http.request({
					url: '/companyResumeByAdd',
					method: 'POST',
					dataType: 'text',
					data: {
						work_name: this.work_name,
						salary_type: this.salary_type.join(','),
						salary: this.salary,
						start_time: this.start_time,
						end_time: this.end_time,
						work_age: this.work_age,
						address: this.address,
						distance: this.distance,
						latitude: this.latitude,
						longitude: this.longitude,
						name: this.name,
						study_history: this.study_history,
						gender: this.gender,
						work_require: this.work_require,
						attribute_strings: this.attribute_strings.join(','),
					},
				}).then(res => {
					console.log('request res', res);
					let _this = this;
					let jsonObj = JSON.parse(res);
					if (jsonObj.code == 0) {
						uni.showModal({
							content: "保存成功",
							showCancel: false,
							success: function(res) {
								if (res.confirm) {
									_this.clickLeftHandle();
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});

					}
					this.loading = false;
				}).catch(err => {
					console.log('request fail', err);
					uni.showModal({
						content: err.errMsg,
						showCancel: false
					});

					this.loading = false;
				});


			},
			handleAdressFocus() {
				let that = this;
				uni.chooseLocation({
					success: (res) => {
						// address: "吉林省长春市宽城区北亚泰大街4099号1楼"
						// distance: 58
						// errMsg: "chooseLocation:ok"
						// latitude: 43.945564
						// longitude: 125.334014
						// name: "银河汇沐浴宾馆(火车站店)"
						that.address = res.address
						that.distance = res.distance
						that.latitude = res.latitude
						that.longitude = res.longitude
						that.name = res.name

					}
				})
			},
			bindStartDateChange(e) {
				this.start_time = e.detail.value
			},
			bindEndDateChange(e) {
				this.end_time = e.detail.value
			},
		}
	}
</script>

<style>
	/deep/ .checklist-text {
		width: 75px;
		text-align: center;
	}

	.view-margin-css {
		margin-top: 20px;
	}

	/deep/ .checklist-group {
		margin-top: 5px;
	}

	.view-input-css {
		background-color: #fafafa;
		margin-top: 9px;
		height: 40px;
		font-size: 16px;
		border: 1px solid #e5e4e4;
		border-radius: 5px;
		padding-left: 7px;
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
		/* height: 70px; */
		background-color: white;
		margin: 30px;
	}
</style>