<template>
	<view class="chat">
		<uni-nav-bar title="聊天室B" dark :fixed="true" shadow background-color="#007AFF" status-bar />

		<view>
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll">
				<block v-for="(item,index) in listrow" :key="index">
					<view class="scroll-view-item_H"
						:style="{'margin-left':index>0?'10px':0,'background-color':'white'}">
						<view class="bg-position-card" style="padding-left: 3px;">职位卡</view>
						<view style="display: flex;flex-direction:column;padding: 6px;">
							<view style="font-size: 16px;font-weight: 600;">{{item.name}}</view>
							<view style="font-size: 16px;font-weight: 600;color: red;">{{item.xianz}}</view>
							<view style="display: flex;flex-direction:row;">
								<view
									style="font-size: 12px;background-color: #f2f2f2;border-radius: 5px;padding: 0 6px;">
									{{item.x.x1}}
								</view>
								<view
									style="font-size: 12px;background-color: #f2f2f2;border-radius: 5px;padding: 0 6px;margin-left: 5px;">
									{{item.x.x2}}
								</view>
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
	</view>
</template>
<script>
	let systemInfo = uni.getSystemInfoSync();
	export default {
		data() {
			return {
				//键盘高度
				keyboardHeight: 0,
				//底部消息发送高度
				bottomHeight: 0,
				//滚动距离
				scrollTop: 0,
				userId: '',
				//发送的消息
				chatMsg: "",
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
				]
			}
		},
		updated() {
			//页面更新时调用聊天消息定位到最底部
			this.scrollToBottom();
		},
		computed: {
			windowHeight() {
				return this.rpxTopx(uni.getSystemInfoSync().windowHeight)
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
		},
		onUnload() {
			uni.offKeyboardHeightChange();
			uni.hideLoading()
			if (this.socketTask && this.socketTask.close) {
				this.socketTask.close()
			}
		},
		methods: {


			connect() {
				if (this.connected || this.connecting) {
					uni.showModal({
						content: '正在连接或者已经连接，请勿重复连接',
						showCancel: false
					})
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
					uni.showModal({
						content: '连接失败，可能是websocket服务不可用，请稍后再试',
						showCancel: false
					})
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
				    "cmd_message":"MessageByLogin",
				    "message":{
				        "token":uni.getStorageSync('token'),
				        "equipment":systemInfo.deviceId,
				    }
				}
				console.log('send--->',msg)
				this.socketTask.send({
					data: JSON.stringify(msg),
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					}
				})
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
				let deviceWidth = wx.getSystemInfoSync().windowWidth + 100
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
					let obj = {
						botContent: "",
						recordId: 0,
						titleId: 0,
						userContent: this.chatMsg,
						userId: 0
					}
					this.msgList.push(obj);
					this.chatMsg = '';
					this.scrollToBottom()
				} else {
					this.$modal.showToast('不能发送空白消息')
				}
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
				min-height: 177rpx;
				position: fixed;
				bottom: 0;
				background: #EDEDED;
				transition: all 0.1s ease;
			}

			.uni-textarea {
				padding-bottom: 70rpx;

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
				margin-bottom: 70rpx;
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