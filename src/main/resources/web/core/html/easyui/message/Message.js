/**
 * Message
 * 
 * 消息
 * 
 * 对象
 */

core.html.easyui.message.Message = (function() {

	// 消息
	var message;

	/**
	 * 处理标题头
	 * 
	 * @param title
	 *            标题头
	 * @returns {String}
	 */
	function dealTitle(title) {

		if (title === null) {
			return "温馨提示";
		} else if (title === "") {
			return "&nbsp;";
		} else {
			return title;
		}
	}

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 弹出框
	 * 
	 * @param title
	 *            标题
	 * @param msg
	 *            信息
	 * @param icon
	 *            图标
	 * @param fn
	 *            回调
	 * @returns
	 */
	Constructor.prototype.alert = function(title, msg, icon, fn) {

		title = title === null ? "警告" : title;

		$.messager.alert(dealTitle(title), msg, icon === null ? "error" : icon, fn);
	};

	/**
	 * 弹出异常
	 * 
	 * @param e
	 *            异常对象
	 * @param attr
	 *            异常对象属性
	 * @returns
	 */
	Constructor.prototype.alertException = function(e, attr) {

		this.alert(null, e[attr === undefined ? "responseText" : attr], null);
	};

	/**
	 * 确认框
	 * 
	 * @param title
	 *            标题头
	 * @param msg
	 *            信息
	 * @param fn
	 *            回调
	 * @returns
	 */
	Constructor.prototype.confirm = function(title, msg, fn) {

		$.messager.confirm(dealTitle(title), msg, fn);
	};

	/**
	 * 提示框
	 * 
	 * @param title
	 *            标题头
	 * @param msg
	 *            信息
	 * @param time
	 *            显示时间
	 * @returns
	 */
	Constructor.prototype.show = function(title, msg, time) {

		$.messager.show({
			title : dealTitle(title),
			msg : msg,
			timeout : time === null || time === "" ? 1200 : time,
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

		this.show(null, "操作成功!", null);
	};

	/**
	 * 提示失败
	 * 
	 * @returns
	 */
	Constructor.prototype.showFail = function() {

		this.show(null, "操作失败!", null);
	};

	return {

		/**
		 * 获取消息处理者
		 * 
		 * @returns {core.html.easyui.message.Message.Constructor}
		 */
		getMessage : function() {

			if (!message) {
				message = new Constructor();
			}

			return message;
		}
	}
})();