<template>
	<view class="chat">
		<uni-nav-bar title="聊天室" dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left"
			@clickLeft="clickLeftHandle" />

		<view class="posid">
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll">
				<block v-for="(item,index) in listrow" :key="index">
					<view class="scroll-view-item_H"
						:style="{'margin-left':index>0?'10px':0,'background-color':'white'}"
						@click="openNewchat(item.id)">
						<view class="bg-position-card" style="padding-left: 3px;font-size: 13px;">职位卡</view>
						<view style="display: flex;flex-direction:column;padding: 5px;line-height: 16px;">
							<view style="font-size: 14px;font-weight: 600;">{{item.work_name}}</view>
							<view style="font-size: 13px;font-weight: 600;color: red;">{{item.salary}}
							</view>
							<view style="display: flex;flex-direction:row;">
								<view v-for="(itema,indexx) in item.attribute_strings" v-if="indexx<2"
									style="font-size: 10px;background-color: #f2f2f2;border-radius: 5px;padding: 0;margin-left: 1px;">
									{{hobby[itema]}}
								</view>
								<!-- <view
									style="font-size: 12px;background-color: #f2f2f2;border-radius: 5px;padding: 0 6px;margin-left: 5px;">
									{{item.company_resume.attribute_strings}}
								</view> -->
							</view>
						</view>
					</view>
				</block>
			</scroll-view>
		</view>

		<scroll-view :style="{height: `${windowHeight-inputHeight}rpx`}" id="scrollview" scroll-y="true"
			:scroll-top="scrollTop" class="scroll-view">
			<!-- 聊天主体 -->
			<view id="msglistview" class="chat-body">
				<!-- 聊天记录 -->
				<view v-for="(item,index) in msgList" :key="index">
					<!-- 自己发的消息 -->
					<view class="item self" v-if="item.userContent != ''">
						<!-- 文字内容 -->
						<view class="content right">
							{{item.userContent}}
						</view>
						<!-- 头像 -->
						<view class="avatar">
						</view>
					</view>
					<!-- 机器人发的消息 -->
					<view class="item Ai" v-if="item.botContent != ''">
						<!-- 头像 -->
						<view class="avatar">
						</view>
						<!-- 文字内容 -->
						<view class="content left">
							{{item.botContent}}
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 底部消息发送栏 -->
		<!-- 用来占位，防止聊天消息被发送框遮挡 -->
		<view class="chat-bottom" :style="{height: `${inputHeight}rpx`}">
			<view class="send-msg" :style="{bottom:`${keyboardHeight}rpx`}">
				<view class="uni-textarea">
					<textarea v-model="chatMsg" maxlength="300" confirm-type="send" @confirm="handleSend"
						:show-confirm-bar="false" :adjust-position="false" @linechange="sendHeight" @focus="focus"
						@blur="blur" auto-height></textarea>
				</view>
				<button @click="handleSend" class="send-btn">发送</button>
			</view>
		</view>


		<view>
			<!-- 普通弹窗 -->
			<uni-popup ref="popup" background-color="#fff">
				<view style="padding: 20px;">
					<view style="flex-direction: row;display: flex;">
						<view>
							<image style="border-radius: 50px; width: 40px;height: 40px" src="@/static/g.png"></image>
						</view>
						<view style="margin-left: 3px;line-height: 20px;">
							<view>李女士 <font
									style="font-size: 10px;color: white;background-color: #e9be7d;margin-left: 2px;">
									企业认证</font>
							</view>
							<view>A家家具装饰有限公司</view>
						</view>
					</view>
					<view style="flex-direction: row;display: flex;    margin: 5px 0px;">
						<view
							style="font-family: Source Han Sans CN-Medium, Source Han Sans CN;font-size: 17px;font-weight: 500;color: #333333;">
							带店店长 </view>
						<view class="bg-position-cardshade-distance" style="">
							距您11KM</view>
						<!-- "salary_type": 1, //薪资类别：1=时薪，2=日薪，3=周薪，4=月薪，5=季薪，6=年薪 -->
						<view class="bg-position-cardshade-salary-type">时薪</view>
						<!-- 	<view v-if="item.salary_type==1" class="bg-position-cardshade-salary-type">时薪</view>
					<view v-if="item.salary_type==2" class="bg-position-cardshade-salary-type">日薪</view>
					<view v-if="item.salary_type==3" class="bg-position-cardshade-salary-type">周薪</view>
					<view v-if="item.salary_type==4" class="bg-position-cardshade-salary-type">月薪</view>
					<view v-if="item.salary_type==5" class="bg-position-cardshade-salary-type">季薪</view>
					<view v-if="item.salary_type==6" class="bg-position-cardshade-salary-type">年薪</view> -->
					</view>
					<view style="display: flex;flex-direction:row;    margin: 5px 0px;">
						<view v-for="(itema,indexx) in hobby5" v-if="indexx<3" :style="{'font-size': '10px','background-color':'#f2f2f2','border-radius':'5px',
								 'margin-left': indexx>0?'5px':'0px'}">
							{{itema.text}}
						</view>
					</view>
					<view style=" margin-top: 5px ; font-size: 12px;">
						<font style="color: #333333;">工作地址</font>{{'&ensp;&ensp;&ensp; 乌鲁木齐市xxxxxxxxxxx'}}
					</view>
					<view style=" font-size: 12px;">
						<font style="color: #333333;">工作开始时间</font>&ensp;&ensp;&ensp; 2023-09-25 10:00
					</view>
					<view style=" margin-bottom: 5px ;font-size: 12px;">
						<font style="color: #333333;">工作结束时间</font>&ensp;&ensp;&ensp;2023-09-26 10:00
					</view>
					<view style="flex-direction: row;display: flex;margin: 5px 0px;">
						<view>
							<view style="color: #333333;font-size: 15px;">雇主</view>
							<view style="font-size: 12px;background: #F8FAFB;border-radius: 6px 6px 6px 6px;padding: 5px;">
								<view>姓名:李女士</view>
								<view>联系方式:15099998888</view>
							</view>

						</view>
						<view style="margin-left: 10px;">
							<view style="color: #333333;font-size: 15px;">人才</view>
							<view style="font-size: 12px;background: #F8FAFB;border-radius: 6px 6px 6px 6px;padding: 5px;">
								<view>姓名:张珊珊</view>
								<view>联系方式:15099998888</view>
							</view>
						</view>
					</view>
					<view style="margin: 5px 0px;font-family: Source Han Sans CN-Regular, Source Han Sans CN;
						font-weight: 400;
						color: #FDA33D;">薪资详情</view>
					<view style="font-size: 12px;flex-direction: row;display: flex;margin: 5px 0px;">
						<view>
							<view>聘用工资：8000元</view>
							<view>平台服务费：127.05元</view>
							<view>平台结算7日工资：2413.95元</view>

						</view>
						<view>
							<button style="width: 60px;" type="primary" size="mini">同意</button>
							<button style="width: 60px;    margin-left: 8px;" type="primary" size="mini">不同意</button>
						</view>
					</view>
					<view style="font-size: 12px;margin: 15px 0px;">注：平台只结算月工资的7日实习工资，剩余工资线下交易。 结算时平台收取5%的服务费</view>
				</view>
			</uni-popup>
		</view>

	</view>
</template>
<script>
	let systemInfo = uni.getSystemInfoSync();
	export default {
		data() {
			return {
				heartbeat: null, //心跳定时器
				//键盘高度
				keyboardHeight: 0,
				//底部消息发送高度
				bottomHeight: 0,
				//滚动距离
				scrollTop: 0,
				userId: '',
				//发送的消息
				chatMsg: "",
				resume_apply_id: '',
				listrow: [{
						name: '产品经理1',
						xianz: '12k-16k',
						x: {
							x1: '五险一金',
							x2: '年底双薪'
						}
					}, {
						name: '产品经理2',
						xianz: '12k-16k',
						x: {
							x1: '五险一金',
							x2: '年底双薪'
						}
					},
					{
						name: '产品经理3',
						xianz: '12k-16k',
						x: {
							x1: '五险一金',
							x2: '年底双薪'
						}
					}
				],
				msgList: [{
						botContent: "hello，请问我有什么可以帮助你的吗？",
						recordId: 0,
						titleId: 0,
						userContent: "",
						userId: 0
					},
					{
						botContent: "",
						recordId: 0,
						titleId: 0,
						userContent: "你好呀我想问你一件事",
						userId: 0
					},
				],
				hobby: {
					0: '年底奖金',
					1: '免费体检',
					2: '入职培训',
					3: '周末双休',
					4: '餐补',
					5: '油补',
				},
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
				posHeight: 0,
			}
		},
		updated() {
			//页面更新时调用聊天消息定位到最底部
			this.scrollToBottom();
		},
		computed: {
			windowHeight() {
				//this.tst();
				//console.log("this.posHeight----->", this.posHeight)
				//console.log("uni.getSystemInfoSync().windowHeight----->", uni.getSystemInfoSync().windowHeight)
				return this.rpxTopx(uni.getSystemInfoSync().windowHeight - 194)
			},
			// 键盘弹起来的高度+发送框高度
			inputHeight() {
				return this.bottomHeight + this.keyboardHeight
			}
		},


		onLoad() {
			uni.onKeyboardHeightChange(res => {
				//这里正常来讲代码直接写
				//this.keyboardHeight=this.rpxTopx(res.height)就行了
				//但是之前界面ui设计聊天框的高度有点高,为了不让键盘和聊天输入框之间距离差太大所以我改动了一下。
				this.keyboardHeight = this.rpxTopx(res.height)
				if (this.keyboardHeight < 0) this.keyboardHeight = 0;
			})
			this.connect();
			this.queryList();
		},
		onShow() {
			var _this = this;
			this.heartbeat = setInterval(function() {
				_this.connect();
			}, 3000);
		},
		onHide() { //离开页面前清除计时器
			// console.log('onHide');
			clearInterval(this.heartbeat);
			this.heartbeat = null;
			this.close();
		},
		onUnload() {
			uni.offKeyboardHeightChange();
			uni.hideLoading()
			if (this.socketTask && this.socketTask.close) {
				this.socketTask.close()
			}
		},
		methods: {
			async tst() {
				setTimeout(() => {
					let query = uni.createSelectorQuery();
					query.select('.posid').boundingClientRect()
					query.exec(res => {
						console.log("posid---->", res);
						this.posHeight = res[0].height;
						return this.rpxTopx(uni.getSystemInfoSync().windowHeight - this.posHeight)
						//this.bottomHeight = this.rpxTopx(res[0].height)
					})
				}, 10)
			},
			clickLeftHandle() {
				uni.navigateTo({
					url: '/pages/platform/platform'
				})
			},
			openNewchat(id) {
				this.resume_apply_id = id;
				this.$refs.popup.open('bottom')
			},
			connect() {
				if (this.connected || this.connecting) {
					// uni.showModal({
					// 	content: '正在连接或者已经连接，请勿重复连接',
					// 	showCancel: false
					// })
					//console.log('正在连接或者已经连接，请勿重复连接')
					return false
				}
				this.connecting = true
				uni.showLoading({
					title: '连接中...'
				})
				let url = 'wss://echo.websocket.org'
				url = 'ws://124.222.150.107:10080'
				url = 'ws://websocket.gong25.com'
				this.socketTask = uni.connectSocket({
					url: url,
					// data() {
					// 	return {
					// 		//msg: 'Hello'
					// 	}
					// },
					// #ifdef MP
					header: {
						'content-type': 'application/json'
					},
					// #endif
					// #ifdef MP-WEIXIN
					method: 'GET',
					// #endif
					success(res) {
						// 这里是接口调用成功的回调，不是连接成功的回调，请注意
						console.log("success---->", res)
					},
					fail(err) {
						// 这里是接口调用失败的回调，不是连接失败的回调，请注意
						console.log("fail------->", err)
					}
				})
				console.log(this.socketTask);
				this.socketTask.onOpen((res) => {
					console.log("11111111111111111")
					this.connecting = false
					this.connected = true
					uni.hideLoading()
					uni.showToast({
						icon: 'none',
						title: '连接成功'
					})
					this.send();
					console.log('onOpen', res);
				})
				this.socketTask.onError((err) => {
					this.connecting = false
					this.connected = false
					uni.hideLoading()
					this.send();
					// uni.showModal({
					// 	content: '连接失败，可能是websocket服务不可用，请稍后再试',
					// 	showCancel: false
					// })
					console.log('onError', err);
				})
				this.socketTask.onMessage((res) => {
					this.msg = res.data
					console.log('onMessage', res)
				})
				this.socketTask.onClose((res) => {
					this.connected = false
					this.startRecive = false
					this.socketTask = false
					this.msg = false

					console.log('onClose', res)
				})
				console.log('task', this.socketTask)
			},
			send() {
				console.log('systemInfo---->', systemInfo)
				let msg = {
					"cmd_message": "MessageByLogin",
					"message": {
						"token": uni.getStorageSync('token'),
						"equipment": systemInfo.deviceId,
					}
				}
				console.log('send--->', msg);
				uni.sendSocketMessage({
					data: JSON.stringify(msg),
					success(res) {
						console.log("发送心跳成功", res)
					},
					fail(err) {
						console.log("发送心跳失败", err);
					}
				})
				// this.socketTask.send({
				// 	data: msg,
				// 	success(res) {
				// 		console.log(res);
				// 	},
				// 	fail(err) {
				// 		console.log(err);
				// 	}
				// })
			},
			queryList() {
				this.loading = true;
				this.$http.request({
					url: '/resumeApplyListToTrueByUser',
					dataType: 'text',
					data: {},
				}).then(res => {
					let jsonObj = JSON.parse(res);
					console.log('request res', jsonObj);
					if (jsonObj.code == 0) {
						this.listrow = [];
						if (jsonObj.data && jsonObj.data.length > 0) {
							for (let p in jsonObj.data) {
								let jdata = jsonObj.data[p];
								let params = {};
								params.id = jdata.id;
								params.is_type = jdata.is_type;
								params.company_id = jdata.company_id;
								params.company_resume_id = jdata.company_resume_id;
								params.company_resume_user_id = jdata.company_resume_user_id;
								params.user_id = jdata.user_id;
								params.line_time = jdata.line_time;
								params.status = jdata.status;
								params.reject_message = jdata.reject_message;
								params.time_c = jdata.time_c;
								params.time_u = jdata.time_u;

								params.companyid = jdata.company_resume.id;
								params.work_name = jdata.company_resume.work_name;
								params.salary_type = jdata.company_resume.salary_type;
								params.salary = jdata.company_resume.salary;
								const str = jdata.company_resume.attribute_strings;
								const astr = str.split(',');
								params.attribute_strings = astr;
								params.is_line = jdata.company_resume.is_line;
								this.listrow.push(params);
							}
						}
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
						content: err.errMsg,
						showCancel: false
					});

					this.loading = false;
				});
			},
			close() {
				if (this.socketTask && this.socketTask.close) {
					this.socketTask.close()
				}
			},

			focus() {
				this.scrollToBottom()
			},
			blur() {
				this.scrollToBottom()
			},
			// px转换成rpx
			rpxTopx(px) {
				let deviceWidth = wx.getSystemInfoSync().windowWidth
				let rpx = (750 / deviceWidth) * Number(px)
				return Math.floor(rpx)
			},
			// 监视聊天发送栏高度
			sendHeight() {
				setTimeout(() => {
					let query = uni.createSelectorQuery();
					query.select('.send-msg').boundingClientRect()
					query.exec(res => {
						this.bottomHeight = this.rpxTopx(res[0].height)
					})
				}, 10)
			},
			// 滚动至聊天底部
			scrollToBottom(e) {
				setTimeout(() => {
					let query = uni.createSelectorQuery().in(this);
					query.select('#scrollview').boundingClientRect();
					query.select('#msglistview').boundingClientRect();
					query.exec((res) => {
						if (res[1].height > res[0].height) {
							this.scrollTop = this.rpxTopx(res[1].height - res[0].height)
						}
					})
				}, 15)
			},
			// 发送消息
			handleSend() {
				//如果消息不为空
				if (!this.chatMsg || !/^\s+$/.test(this.chatMsg)) {

					this.$http.request({
						url: '/resumeMessageByGroup',
						dataType: 'text',
						method: "POST",
						data: {
							resume_apply_id: this.resume_apply_id,
							message: this.chatMsg
						},
					}).then(res => {
						let obj = {
							botContent: "",
							recordId: 0,
							titleId: 0,
							userContent: this.chatMsg,
							userId: 0
						}
						this.msgList.push(obj);
						this.chatMsg = '';
						this.scrollToBottom();
					}).catch(err => {
						console.log('request fail', err);

					});

				} else {}
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

	.bg-position-card {
		background-image: linear-gradient(500deg, #007aff, #ffffff, #ffffff);
		color: #ffffff;
		border-top-right-radius: 10px;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item_H {
		display: inline-block;
	}

	.bg-position-cardshade-salary-type {
		border: 1px solid;
		line-height: 18px;
		margin-left: 10px;
		padding: 1px;
		color: #fcc484;
		height: 18px;
		font-size: 10px;
		margin-top: 2px;
	}

	.bg-position-cardshade-distance {
	    border: 1px solid;
	    line-height: 18px;
	    margin-left: 10px;
	    padding: 1px;
	    color: #8ac6ff;
	    height: 18px;
	    font-size: 10px;
	    margin-top: 2px;
	}
</style>
<style lang="scss" scoped>
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	$chatContentbgc: #C2DCFF;
	$sendBtnbgc: #4F7DF5;

	view,
	button,
	text,
	input,
	textarea {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	/* 聊天消息 */
	.chat {
		.scroll-view {
			::-webkit-scrollbar {
				display: none;
				width: 0 !important;
				height: 0 !important;
				-webkit-appearance: none;
				background: transparent;
				color: transparent;
			}

			// background-color: orange;
			background-color: #F6F6F6;

			.chat-body {
				display: flex;
				flex-direction: column;
				padding-top: 23rpx;
				// background-color:skyblue;

				.self {
					justify-content: flex-end;
				}

				.item {
					display: flex;
					padding: 23rpx 30rpx;
					// background-color: greenyellow;

					.right {
						background-color: $chatContentbgc;
					}

					.left {
						background-color: #FFFFFF;
					}

					// 聊天消息的三角形
					.right::after {
						position: absolute;
						display: inline-block;
						content: '';
						width: 0;
						height: 0;
						left: 100%;
						top: 10px;
						border: 12rpx solid transparent;
						border-left: 12rpx solid $chatContentbgc;
					}

					.left::after {
						position: absolute;
						display: inline-block;
						content: '';
						width: 0;
						height: 0;
						top: 10px;
						right: 100%;
						border: 12rpx solid transparent;
						border-right: 12rpx solid #FFFFFF;
					}

					.content {
						position: relative;
						max-width: 486rpx;
						border-radius: 8rpx;
						word-wrap: break-word;
						padding: 24rpx 24rpx;
						margin: 0 24rpx;
						border-radius: 5px;
						font-size: 32rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
						line-height: 42rpx;
					}

					.avatar {
						display: flex;
						justify-content: center;
						width: 78rpx;
						height: 78rpx;
						background: $sendBtnbgc;
						border-radius: 8rpx;
						overflow: hidden;

						image {
							align-self: center;
						}

					}
				}
			}
		}

		/* 底部聊天发送栏 */
		.chat-bottom {
			width: 100%;
			height: 177rpx;
			background: #F4F5F7;
			transition: all 0.1s ease;


			.send-msg {
				display: flex;
				align-items: flex-end;
				padding: 16rpx 30rpx;
				width: 100%;
				min-height: 130rpx;
				position: fixed;
				bottom: 0;
				background: #EDEDED;
				transition: all 0.1s ease;
			}

			.uni-textarea {
				padding-bottom: 10rpx;

				textarea {
					width: 537rpx;
					min-height: 75rpx;
					max-height: 500rpx;
					background: #FFFFFF;
					border-radius: 8rpx;
					font-size: 32rpx;
					font-family: PingFang SC;
					color: #333333;
					line-height: 43rpx;
					padding: 5rpx 8rpx;
				}
			}

			.send-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 8rpx;
				margin-left: 25rpx;
				width: 128rpx;
				height: 75rpx;
				background: $sendBtnbgc;
				border-radius: 8rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 28rpx;
			}
		}
	}
</style>