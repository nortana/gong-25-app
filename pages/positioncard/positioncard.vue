<template>
	<view class="pageContent">
		<uni-nav-bar dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left" title="职位卡"
			@clickLeft="clickLeftHandle" />
		<view style="background-color: #0083ff;padding: 10px;" :loading="loading">
			<view class=""
				style="display: flex;flex-direction:column;background-color: #ffffff;padding:10px 20px 0px 20px;">
				<view class="" style="display: flex;flex-direction:row;position: relative;">
					<view class="" style="font-size: 18px;">{{datac.work_name}}</view>
					<view v-if="false" style="
					border: 1px solid;margin-left: 10px;padding: 0 2px;color: #007aff;
					font-size: 11px;height: 17px;line-height: 17px;margin-top: 5px;">距您1.12KM</view>
					<view v-if="datac.salary_type==1" class="salary-type-class" style="">时薪</view>
					<view v-if="datac.salary_type==2" class="salary-type-class" style="">日薪</view>
					<view v-if="datac.salary_type==3" class="salary-type-class" style="">周薪</view>
					<view v-if="datac.salary_type==4" class="salary-type-class" style="">月薪</view>
					<view v-if="datac.salary_type==5" class="salary-type-class" style="">季薪</view>
					<view v-if="datac.salary_type==6" class="salary-type-class" style="">年薪</view>
					<view class=""
						style="font-size: 18px;    padding-left: 10px;position: absolute;right: 10px;color: red">
						8000/月</view>
				</view>
				<view class="" style="display: flex;flex-direction:row;margin-top: 10px;">
					<view class="condition-class-four" v-for="(item,index) in attribute_strings" :key="index">
						<text class="" :style="[{border: '1px solid',padding: '0 4px',color:'#007aff',
						'margin-left': index>0?'10px':''}]">{{item}}</text>
					</view>
					<!-- <view class="condition-class-four">
						<text class="" style="border: 1px solid;margin-left: 10px;
					    padding: 0 4px;
					    color: #007aff;">年底双薪</text>
					</view>
					<view class="condition-class-four">
						<text class="" style="border: 1px solid;margin-left: 10px;
					    padding: 0 4px;
					    color: #007aff;">免费体检</text>
					</view>
					<view class="condition-class-four">
						<text class="" style="border: 1px solid;margin-left: 10px;
					    padding: 0 4px;
					    color: #007aff;">周末双休</text>
					</view> -->
				</view>
				<view class=""
					style="display: flex;flex-direction:row;margin-top: 20px;margin-bottom: 10px;text-align: center;">
					<view class="" style="display: flex;flex-direction:column;    font-size: 12px;">
						<view class="" style=""><text class="">职位性值 </text></view>
						<!-- "salary_type": 1, //薪资类别：1=时薪，2=日薪，3=周薪，4=月薪，5=季薪，6=年薪 -->
						<view v-if="datac.salary_type==1"><text class="">时薪</text></view>
						<view v-if="datac.salary_type==2"><text class="">日薪</text></view>
						<view v-if="datac.salary_type==3"><text class="">周薪</text></view>
						<view v-if="datac.salary_type==4"><text class="">月薪</text></view>
						<view v-if="datac.salary_type==5"><text class="">季薪</text></view>
						<view v-if="datac.salary_type==6"><text class="">年薪</text></view>
					</view>

					<view class=""
						style="    font-size: 12px;display: flex;flex-direction:column;margin-left: 15px;margin-right: 15px;">
						<view class="" style=""><text class="">|</text></view>
						<view class="" style=""><text class="">|</text></view>
					</view>

					<view class="" style="    font-size: 12px;display: flex;flex-direction:column;">
						<view class="" style=""><text class="">性别</text></view>
						<view class="" style=""><text class="">女</text></view>
					</view>

					<view class=""
						style="font-size: 12px;display: flex;flex-direction:column;margin-left: 15px;margin-right: 15px;">
						<view class="" style=""><text class="">|</text></view>
						<view class="" style=""><text class="">|</text></view>
					</view>
					<view class="" style="font-size: 12px;display: flex;flex-direction:column;">
						<view class="" style=""><text class="">工作经验</text></view>
						<!-- "work_age": 5, //工龄:-1=在校生,0=应届生,1=1年以内,2=2-3年,5=5年以上 -->
						<view v-if="datac.work_age==-1"><text class="">在校生</text></view>
						<view v-if="datac.work_age==0"><text class="">应届生</text></view>
						<view v-if="datac.work_age==1"><text class="">1年以内</text></view>
						<view v-if="datac.work_age==2"><text class="">2-3年</text></view>
						<view v-if="datac.work_age==5"><text class="">5年以上</text></view>
					</view>

					<view class=""
						style="font-size: 12px;display: flex;flex-direction:column;margin-left: 15px;margin-right: 15px;">
						<view class="" style=""><text class="">|</text></view>
						<view class="" style=""><text class="">|</text></view>
					</view>
					<view class="" style="font-size: 12px;display: flex;flex-direction:column;">
						<view class="" style=""><text class="">学历要求</text></view>
						<!-- "study_history": 0, //学历：0=无学历，1=小学，2=初中，3=中专/中技，3=高中，4=大专/专科，5=本科 -->
						<view v-if="datac.study_history==0"><text class="">无学历</text></view>
						<view v-if="datac.study_history==1"><text class="">小学</text></view>
						<view v-if="datac.study_history==2"><text class="">初中</text></view>
						<view v-if="datac.study_history==3"><text class="">中专/中技</text></view>
						<view v-if="datac.study_history==4"><text class="">高中</text></view>
						<view v-if="datac.study_history==5"><text class="">大专/专科</text></view>
						<view v-if="datac.study_history==6"><text class="">本科</text></view>
					</view>
				</view>
				<view style="border-top: 1px solid #f5f5f5;"></view>
				<view class="" style="display: flex;flex-direction:row;margin-top: 10px;position: relative;">
					<!-- <view class="" style="width: 50px;height: 50px;background-color: #007aff;border-radius: 50px;">
					</view> -->
					<image  style="width: 50px;height: 50px;
					border-radius: 50px;" :src="imageUrl"></image>
					<view class="" style="width: 450rpx; font-size: 11px;display: flex;flex-direction:column;margin-left: 10px;">
						<view class="">{{cuname}}</view>
						<view class="">{{cname}}</view>
						<view class="">{{caddress}}</view>
					</view>
					<!-- 	position: absolute;right: 4px;top: 21px; -->
					<view @click="openEnterpriseHandle" style="margin: auto;">
						<uni-icons type="forward" size="50"></uni-icons>
					</view>
				</view>
				<view class="" style="margin-top: 30px;text-align: center;font-size: 20px;">职位意图</view>
				<view class=""
					style="padding: 3px;margin-top: 15px;height: 260px;border-radius: 5px;background-color: #f6f8fa;">
					<textarea style="padding: 5px;height: 260px;width: 100%;" v-model="datac.work_require"></textarea>
				</view>
				<view style="padding: 20px 0px;">
					<!-- 	disabled -->
					<button type="primary" style="width: 100%;border-radius: 50px;min-height: 46px;"
						@click="appointmentData">预约
					</button>

				</view>

			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				datac: {},
				routeState: '',
				attribute_strings:[],
				imageUrl:'',
				cuname:'',
				cname:'',
				caddress:'',
			};
		},

		onLoad(e) {
			this.routeState = e.state;
			this.queryData();
		},
		onShow() {},
		//uniapp中onHide()能监听到页面离开
		onHide() { //离开页面前清除计时器
		},
		//获取可视区域高度
		methods: {
			openEnterpriseHandle() {
				uni.navigateTo({
					url: '/pages/enterprisehomepage/enterprisehomepage?state=1'
				})
			},
			clickLeftHandle() {
				let url = '/pages/platform/platform';
				if (this.routeState == 2) {
					url = '/pages/factoryrecruit/factoryrecruit';
				}
				uni.navigateTo({
					url: url
				})
			},
			queryData() {
				this.loading = true;
				this.$http.request({
					url: '/companyOnlyByUser',
					dataType: 'text',
					data: {
						company_resume_id: 1
					},
				}).then(res => {
					let jsonObj = JSON.parse(res);
					console.log(jsonObj)
					this.datac = jsonObj.data;
					if(this.datac.attribute_strings){
						this.attribute_strings=this.datac.attribute_strings.split(",");
					}
					if(this.datac.company.logo){
						this.imageUrl = this.datac.company.logo;
					}
					if(this.datac.company.user_name){
						this.cuname = this.datac.company.user_name;
					}
					if(this.datac.company.company_name){
						this.cname = this.datac.company.company_name;
					}
					if(this.datac.company.company_address){
						this.caddress = this.datac.company.company_address;
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
			appointmentData() {
				this.loading = true;
				this.$http.request({
					url: '/userSendToCompanyByUser',
					dataType: 'text',
					method: 'POST',
					data: {
						company_resume_id: 2
					},
				}).then(res => {
					console.log('request res', res);
					let _this =this;
					let jsonObj = JSON.parse(res);
					if (jsonObj.code == 0) {
						uni.showModal({
							content:  "保存成功",
							showCancel: false,
							success: function(res) {
								if (res.confirm) {
									_this.clickLeftHandle();
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					
					} else {
						uni.showModal({
							content:jsonObj.msg,
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
		}
	}
</script>

<style>
	.condition-class-four {
		font-size: 12px;
		height: 12px;
		line-height: 12px;
	}

	.pageContent {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #0083ff;
	}

	.salary-type-class {
		border: 1px solid;
		margin-left: 10px;
		padding: 0 2px;
		color: #007aff;
		font-size: 11px;
		height: 17px;
		line-height: 17px;
		margin-top: 5px;
	}
</style>
<style lang="scss">

</style>