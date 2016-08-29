/**
 * @name	Messager
 * @package	core.html.easyui.window
 * @desc	消息
 * @type	类
 * 
 * @date	2016年8月29日 14:10:46
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
	 * @param options
	 */
	Constructor.prototype.show = function(options) {

		$.messager.show(options);
	};

	/**
	 * 提示框
	 * 
	 * @param title{String}
	 *            标题头
	 * @param msg{String}
	 *            信息
	 * @param time{Number}
	 *            显示时间
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
	 */
	Constructor.prototype.showSuccess = function() {

		this.showMessage(null, "操作成功!", null);
	};

	/**
	 * 提示失败
	 */
	Constructor.prototype.showFail = function() {

		this.showMessage(null, "操作失败!", null);
	};

	/**
	 * 弹出框
	 * 
	 * @param title{String}
	 *            标题
	 * @param msg{String}
	 *            信息
	 * @param icon{String}
	 *            图标
	 * @param fn{function}
	 *            回调
	 */
	Constructor.prototype.alert = function(title, msg, icon, fn) {

		title = title === null ? "警告" : title;
		title = title === "" ? "&nbsp;" : title;

		icon = icon === null ? "error" : icon;

		$.messager.alert(title, msg, icon, fn);
	};

	/**
	 * 弹出异常
	 * 
	 * @param e{Object}
	 *            异常对象
	 * @param attr{String}
	 *            异常对象属性
	 */
	Constructor.prototype.alertException = function(e, attr) {

		this.alert(null, e[attr === undefined ? "responseText" : attr], null);
	};

	/**
	 * 确认框
	 * 
	 * @param title{String}
	 *            标题头
	 * @param msg{String}
	 *            信息
	 * @param fn{function}
	 *            回调
	 */
	Constructor.prototype.confirm = function(title, msg, fn) {

		title = title === null ? "温馨提示" : title;
		title = title === "" ? "&nbsp;" : title;

		$.messager.confirm(title, msg, fn);
	};

	Constructor.prototype.prompt = function(title, msg, fn) {

		title = title === null ? "温馨提示" : title;
		title = title === "" ? "&nbsp;" : title;

		$.messager.prompt(title, msg, fn);
	};

	Constructor.prototype.progress = function(obj) {

		$.messager.progress(obj);
	};

	return {

		/**
		 * 获取消息实例
		 */
		getInstance : function() {

			if (messager == null) {
				messager = new Constructor();
			}

			return messager;
		}
	};
})();