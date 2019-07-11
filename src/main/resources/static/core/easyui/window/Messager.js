/**
 * @name	Messager
 * @package core.html.easyui.window
 * @desc	消息
 * @type	类
 * 
 * @method	static core.html.easyui.window.Messager	getInstance()													获取消息实例
 * 			void									show(object options)											提示框
 * 			void									alert(string title, string msg, string icon, function callback)	弹出框
 * 			void									confirm(string title, string msg, function callback)			确认框
 * 			void									prompt(string title, string msg, function callback)				
 * 			void									progress(object options)										进度条
 * 			void									showMessage(string title, string msg, number time)				提示框
 * 			void									showSuccess()													提示成功
 * 			void									showFail()														提示失败
 * 			void									alertException(object e, string attribute)						弹出异常
 * 			void									progressMessage(string title, string msg)						进度条
 * 
 * @date	2018年4月25日 14:25:18
 */
core.html.easyui.window.Messager = (function() {

	/**
	 * 消息
	 */
	var messager;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 提示框
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.show = function(options) {

		$.messager.show(options);
	};

	/**
	 * 弹出框
	 * 
	 * @param title{string}
	 *            标题
	 * @param msg{string}
	 *            信息
	 * @param icon{string}
	 *            图标
	 * @param callback{function}
	 *            回调
	 * @returns
	 */
	Constructor.prototype.alert = function(title, msg, icon, callback) {

		title = title === null ? "警告" : title;
		title = title === "" ? "&nbsp;" : title;

		icon = icon === null ? "error" : icon;

		$.messager.alert(title, msg, icon, callback);
	};

	/**
	 * 确认框
	 * 
	 * @param title{string}
	 *            标题头
	 * @param msg{string}
	 *            信息
	 * @param callback{function}
	 *            回调
	 * @returns
	 */
	Constructor.prototype.confirm = function(title, msg, callback) {

		title = title === null ? "温馨提示" : title;
		title = title === "" ? "&nbsp;" : title;

		$.messager.confirm(title, msg, callback);
	};

	/**
	 * 输入确认框
	 * 
	 * @param title{string}
	 *            标题头
	 * @param msg{string}
	 *            信息
	 * @param callback{function}
	 *            回调
	 * @returns
	 */
	Constructor.prototype.prompt = function(title, msg, callback) {

		title = title === null ? "温馨提示" : title;
		title = title === "" ? "&nbsp;" : title;

		$.messager.prompt(title, msg, callback);
	};

	/**
	 * 进度条
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.progress = function(options) {

		$.messager.progress(options);
	};

	/**
	 * 提示框
	 * 
	 * @param title{string}
	 *            标题头
	 * @param msg{string}
	 *            信息
	 * @param time{number}
	 *            显示时间
	 * @returns
	 */
	Constructor.prototype.showMessage = function(title, msg, time) {

		title = title === null ? "温馨提示" : title;
		title = title === "" ? "&nbsp;" : title;

		time = time === null || time === "" ? 1200 : time;

		this.show({
			title : title,
			msg : msg,
			timeout : time,
			showType : "show",
			style : {
				right : "",
				top : document.body.scrollTop + document.documentElement.scrollTop,
				bottom : ""
			}
		});
	};

	/**
	 * 提示成功
	 * 
	 * @returns
	 */
	Constructor.prototype.showSuccess = function() {

		this.showMessage(null, "操作成功!", null);
	};

	/**
	 * 提示失败
	 * 
	 * @returns
	 */
	Constructor.prototype.showFail = function() {

		this.showMessage(null, "操作失败!", null);
	};

	/**
	 * 弹出异常
	 * 
	 * @param e{object}
	 *            异常对象
	 * @param attr{string}
	 *            异常对象属性
	 * @returns
	 */
	Constructor.prototype.alertException = function(e, attr) {

		this.alert(null, e[attr === undefined ? "responseText" : attr], null);
	};

	/**
	 * 进度条
	 * 
	 * @param title{string}
	 *            标题
	 * @param msg{string}
	 *            信息
	 * @returns
	 */
	Constructor.prototype.progressMessage = function(title, msg) {

		title = title === null ? "温馨提示" : title;
		title = title === "" ? "&nbsp;" : title;

		this.progress({
			title : title,
			msg : msg
		});
	};

	return {

		/**
		 * 获取消息实例
		 * 
		 * @returns {core.html.easyui.window.Messager}
		 */
		getInstance : function() {

			if (messager == null) {

				messager = new Constructor();
			}

			return messager;
		}
	};
})();