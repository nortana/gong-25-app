<template>
	<view>
		<uni-nav-bar dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left" left-text="返回"
			title="注册" @clickLeft="back" />
		<view class="form_input_css " :loading="loading">
			<form>
				<view class="cu-form-group ">
					<input placeholder="请输入账号" v-model="myFormData.account"></input>
				</view>
				<view class="cu-form-group">
					<input placeholder="请输入密码" password v-model="myFormData.password"></input>
				</view>
				<view class="cu-form-group margin-top">
					<input placeholder="请输入手机号码" type="number" v-model="myFormData.phone"></input>
				</view>
				<view class="cu-form-group margin-top">
					<input placeholder="请输入验证码" type="number" v-model="myFormData.verificationCode">

					<button type="primary" plain="true" style="width: 135px;border-radius: 50px;"
						@click="getVcodeHandle"> 获取验证码
					</button></input>
				</view>
				<view class=" text-center margin-top">
					<button type="primary" style="width: 100%;;border-radius: 50px;min-height: 52px;margin-top: 50px;"
						class="cu-btn bg-blue lg shadow" @click="onSubmit"> 立即注册
					</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: -1,
				loading: false,
				showPassword: true,
				myFormData: {
					account: '',
					password: '',
					phone: '',
					verificationCode: '',
				},
			};
		},

		onLoad() {},

		methods: {
			changePassword() {
				this.showPassword = !this.showPassword;
			},
			back() {
				uni.navigateBack();
			},
			getVcodeHandle() {
				let myForm = this.myFormData
				let checkPhone = new RegExp(/^[1]([3-9])[0-9]{9}$/);
				console.log("myForm", myForm)
				if (!myForm.phone || myForm.phone.length == 0) {
					uni.showModal({
						content: "请输入手机号",
						showCancel: false,
					});
					return;
				}
				if (!checkPhone.test(myForm.phone)) {
					uni.showModal({
						content: "请输入正确的手机号",
						showCancel: false,
					});
					return;
				}
				this.loading = true;
				this.$http.request({
					url: '/sendVerificationCode',
					dataType: 'text',
					data: {
						prefix: "userRegisterByPhone",
						phone: myForm.phone
					},
				}).then(res => {
					let jsonObj = JSON.parse(res);
					console.log("jsonObj--->", jsonObj)
					if (jsonObj.code == 0) {

					} else {
						uni.showModal({
							content: jsonObj.msg,
							showCancel: false
						});
					}
					this.loading = false;
				}).catch(err => {
					console.log('request fail', err);
					uni.showModal({
						content: err.msg,
						showCancel: false
					});

					this.loading = false;
				});
			},
			onSubmit() {
				let myForm = this.myFormData
				let checkPhone = new RegExp(/^[1]([3-9])[0-9]{9}$/);
				let checkEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
				console.log("myForm", myForm)

				if (!myForm.account || myForm.account.length == 0) {
					uni.showModal({
						content: "请输入账号",
						showCancel: false,
					});
					return;
				}
				if (!myForm.password || myForm.password.length == 0) {
					uni.showModal({
						content: "请输入密码",
						showCancel: false,
					});
					return;
				}

				if (myForm.account.password < 5) {
					uni.showModal({
						content: "密码长度必须大于6位",
						showCancel: false,
					});
					return;
				}

				if (!myForm.phone || myForm.phone.length == 0) {
					uni.showModal({
						content: "请输入手机号",
						showCancel: false,
					});
					return;
				}
				if (!checkPhone.test(myForm.phone)) {
					return false
					uni.showModal({
						content: "请输入正确的手机号",
						showCancel: false,
					});
					return;
				}

				if (!myForm.verificationCode || myForm.verificationCode.length == 0) {
					uni.showModal({
						content: "请输入验证码",
						showCancel: false,
					});
					return;
				}
				this.loading = true;
				this.$http.request({
					url: '/userRegisterByPhone',
					method: 'POST',
					dataType: 'text',
					data: {
						phone: myForm.phone,
						code: myForm.verificationCode,
						password: myForm.password,
						username: myForm.account,

					},
				}).then(res => {
					console.log('request res', res);
					let _this = this;
					let jsonObj = JSON.parse(res);
					if (jsonObj.code == 0) {
						uni.showModal({
							content: "注册成功",
							showCancel: false,

						});

					} else {
						uni.showModal({
							content: jsonObj.msg,
							showCancel: false,

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




		}
	}
</script>

<style>
	.uni-eye-active {
		color: #007AFF;
	}

	.uni-icon {
		font-family: uniicons;
		font-size: 24px;
		font-weight: normal;
		font-style: normal;
		width: 24px;
		height: 24px;
		line-height: 24px;
		color: #999999;
	}

	.margin-top-title {
		margin-top: 200upx;
	}

	.form_input_css {
		padding-left: 25px;
		padding-right: 25px;
	}

	.cu-form-group {
		background-color: #f6f8fa;
		padding: 1px 12px;
		display: flex;
		align-items: center;
		min-height: 43px;
		justify-content: space-between;
		border-radius: 50px;
		margin-top: 20px;
	}

	.title-back-css {
		width: 200rpx;
		float: left;
		height: 50px;
		font-size: 18px;
		line-height: 50px;
		text-align: center;
	}

	.title-title-css {
		width: 635rpx;
		height: 50px;
		font-size: 18px;
		line-height: 50px;
		text-align: center;
	}

	.logon-title-css {
		font-size: 18px;
		-webkit-flex: 1;
		flex: 1;
		height: 50px;
		-webkit-justify-content: "center";
		justify-content: "center";
		-webkit-align-items: "center";
		align-items: "center";
		line-height: 50px;
	}

	.bg-gradual-pink {
		background-image: linear-gradient(45deg, #0075f2, #0075f2);
		color: #ffffff;
		height: 50px;
		padding-top: 0px;
	}

	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>