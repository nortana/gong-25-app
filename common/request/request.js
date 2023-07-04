export default {
    config: {
        baseURL: 'http://app.gong25.com',
        // getToken() {
        //     let token = uni.getStorageSync('userToken');
        //     if (!token) {
        //         return uni.switchTab({
        //             url: '/pages/login/login'
        //         })
        //     }
        //     return token
        // },
        // 请求拦截器
		
        beforeRequest(options = {}) {
            return new Promise((resolve, reject) => {
                options.url = this.baseURL + options.url;
                options.method = options.method || 'GET';
				console.log("1111111111111111");
				
				console.log("options===>",options);
                // options.header = {
                //     "Authorization": "Bearer " + this.getToken()
                // }
				options.data.token="2token_app59012A4617F9E1068503B0656AA4F7" 
                resolve(options)
            })
        },
        // 响应拦截器
        handleResponse(data) {
            return new Promise((resolve, reject) => {
                const [err, res] = data;
				console.log("222222222")
                if (res && res.statusCode !== 200) {
                    let msg = res.data.msg || '请求错误';
                    uni.showToast({
                        icon: 'none',
                        title: msg
                    })
                    return reject(msg)
                }
                if (err) {
                    uni.showToast({
                        icon: 'none',
                        title: '请求错误'
                    })
                    return reject(err)
                }
                return resolve(res.data)
            })
        },
    },
    request(options = {}) {
        return this.config.beforeRequest(options).then(opt => {
            return uni.request(opt)
        }).then(res => this.config.handleResponse(res))
    }
}
