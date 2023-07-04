<template>
	<view>
		<uni-nav-bar title="发布求职" dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left"
			@clickLeft="clickLeftHandle" />
		<view style="padding: 30px;font-size: 16px;" v-if="ifFirst">
			<view class="uni-form-item uni-column">
				<view><text style="color: red;">*</text>期望职位</view>
				<input class="uni-input view-input-css" v-model="work_name" placeholder="请输入职位名称" />
			</view>
			<view class="view-margin-css">
				<view><text style="color: red;">*</text>薪种</view>
				<uni-data-checkbox mode="tag" multiple v-model="salary_type" :localdata="hobby1"></uni-data-checkbox>
			</view>
			<view class="uni-form-item uni-column view-margin-css">
				<view class=""><text style="color: red;">*</text>最低薪资</view>
				<input class="uni-input view-input-css" type="number" v-model="salary_min" placeholder="请输入最低薪资" />
			</view>
			<view class="uni-form-item uni-column view-margin-css">
				<view class=""><text style="color: red;">*</text>最高薪资</view>
				<input class="uni-input view-input-css" type="number" v-model="salary_max" placeholder="请输入最高薪资" />
			</view>
			<view class="view-margin-css">
				<view class=""><text style="color: red;">*</text>我的经验</view>
				<uni-data-checkbox mode="tag" v-model="work_age" :localdata="hobby2"></uni-data-checkbox>
			</view>
			<view class="uni-form-item uni-column view-margin-css">
				<view class=""><text style="color: red;">*</text>我的地址</view>
				<input class="uni-input view-input-css" v-model="address" @focus="handleAdressFocus"
					placeholder="请选择我的地址" />
			</view>
			<view class="view-margin-css">
				<view class="text">我的学历</view>
				<uni-data-checkbox mode="tag" v-model="study_history" :localdata="hobby3"></uni-data-checkbox>
			</view>
			<view class="view-margin-css">
				<view class="text">性别</view>
				<uni-data-checkbox mode="tag" v-model="gender" :localdata="hobby4"></uni-data-checkbox>
			</view>
			<view class="uni-btn-v" style="margin-top: 20px; margin-bottom: 20px;">
				<button type="primary" @click="nextClick">下一步</button>
			</view>
		</view>

		<view style="padding: 30px;font-size: 16px;" v-if="!ifFirst" :loading="loading">
			<view class="">
				<view>个性标签</view>
				<uni-data-checkbox mode="tag" multiple v-model="personality_label"
					:localdata="hobby5"></uni-data-checkbox>
			</view>
			<view class="uni-form-item uni-column view-margin-css">
				<view class=""><text style="color: red;">*</text>专业技能</view>
				<textarea
					style=" margin-top:10px; border:2px solid #dcd6d6; border-radius: 5px;width: 100%;padding: 3px;  "
					v-model="main_power"></textarea>
			</view>
			<view class="view-margin-css">
				<view class="">作品资料</view>
				<uni-file-picker style="margin-top:10px ;" @select="selectFileFun($event)" limit="9" :del-icon="false"
					disable-preview :imageStyles="imageStyles" file-mediatype="image" :value="fileLists">
					<uni-icons type="plusempty" color="#cac4c4" size="30" />
				</uni-file-picker>
			</view>
			<view class="goods-carts">
				<button style="width: 100%;" type="primary" @click="submit">确认</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				backState: 0,
				ifFirst: true,
				fileLists: [],
				imageFile: [],
				imageStyles: {
					width: 100,
					height: 100,
					border: {
						//	radius: '50%',
						color: '#cac4c4',
					}
				},
				work_name: '',
				salary_type: [1],
				salary_max: '',
				salary_min: '',
				work_age: 0,
				address: 'ss',
				study_history: 0,
				gender: 0,
				personality_label: [0],
				main_power: '',
				distance: '',
				latitude: '',
				longitude: '',
				name: '',
				works: [],

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
					text: '性格开朗',
					value: 0
				}, {
					text: '认真负责',
					value: 1
				}, {
					text: '专业过硬',
					value: 2
				}, {
					text: '逻辑思维强',
					value: 3
				}, {
					text: '爱运动',
					value: 4
				}, {
					text: '爱绘画',
					value: 5
				}],
			}
		},
		methods: {
			clickLeftHandle() {
				if (this.backState == 0) {
					this.goHome();
				} else {
					this.backState = 0;
					this.ifFirst = true;
				}
			},
			goHome() {
				uni.navigateTo({
					url: '/pages/platform/platform'
				})
			},
			nextClick() {
				if (!this.work_name) {
					uni.showModal({
						content: "请输入期望职位",
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
				if (!this.salary_max) {
					uni.showModal({
						content: "请输入最高薪资",
						confirmText: "确定",
						cancelText: "取消"
					})
					return;
				}

				if (!this.salary_min) {
					uni.showModal({
						content: "请输入最低薪资",
						confirmText: "确定",
						cancelText: "取消"
					})
					return;
				}
				if (this.salary_min > this.salary_max) {
					uni.showModal({
						content: "最低薪资不能高于最高薪资",
						confirmText: "确定",
						cancelText: "取消"
					})
					return;

				}
				if (this.work_age.length == 0) {
					uni.showModal({
						content: "请选择我的经验",
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
				this.ifFirst = false;
				this.backState = 1

			},
			submit() {
				if (!this.main_power) {
					uni.showModal({
						content: "请输入专业技能",
						confirmText: "确定",
						cancelText: "取消"
					})
					return;
				}

				this.loading = true;
				this.$http.request({
					url: '/userResumeByAdd',
					method: 'POST',
					dataType: 'text',
					data: {
						work_name: this.work_name,
						salary_type: this.salary_type.join(','),
						salary_max: this.salary_max,
						salary_min: this.salary_min,
						work_age: this.work_age,
						address: this.address,
						study_history: this.study_history,
						gender: this.gender,
						personality_label: this.personality_label.join(','),
						main_power: this.main_power,
						works: this.works.join(','),
						distance: this.distance,
						latitude: this.latitude,
						longitude: this.longitude,
						name: this.name,
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
									_this.goHome();
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
			selectFileFun(e) {
				const that = this
				console.log("eee", e)
				e.tempFilePaths.map((item) => {
					that.uploadImage(item)
				})
			},
			uploadImage(file) {
				uni.uploadFile({
					url: this.baseurl + '/picture',
					filePath: file,
					name: 'file',
					success: (uploadFileRes) => {
						console.log(uploadFileRes);
						if (uploadFileRes) {
							let dataObj = JSON.parse(uploadFileRes.data);
							if (dataObj.code == 0) {
								this.works.push(dataObj.data);
							}

						}
					}
				});
			},
			back() {},
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