/**
 * Message
 * 
 * 消息处理
 * 
 * 类
 */

core.html.easyui.message.Message = (function() {

	// 消息处理者
	var message;

	/**
	 * 处理标题头
	 * 
	 * @param title{String}
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
	 * @param title{String}
	 *            标题
	 * @param msg{String}
	 *            信息
	 * @param icon{String}
	 *            图标
	 * @param fn{function}
	 *            回调
	 * @returns {core.html.easyui.message.Message}
	 */
	Constructor.prototype.alert = function(title, msg, icon, fn) {

		// 默认标题
		title = title === null ? "警告" : title;
		// EasyUI弹出
		$.messager.alert(dealTitle(title), msg, icon === null ? "error" : icon, fn);

		return this;
	};

	/**
	 * 弹出异常
	 * 
	 * @param e{Object}
	 *            异常对象
	 * @param attr{String}
	 *            异常对象属性
	 * @returns {core.html.easyui.message.Message}
	 */
	Constructor.prototype.alertException = function(e, attr) {

		return this.alert(null, e[attr === undefined ? "responseText" : attr], null);
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
	 * @returns {core.html.easyui.message.Message}
	 */
	Constructor.prototype.confirm = function(title, msg, fn) {

		$.messager.confirm(dealTitle(title), msg, fn);
		return this;
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
	 * @returns {core.html.easyui.message.Message}
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

		return this;
	};

	/**
	 * 提示成功
	 * 
	 * @returns {core.html.easyui.message.Message}
	 */
	Constructor.prototype.showSuccess = function() {

		return this.show(null, "操作成功!", null);
	};

	/**
	 * 提示失败
	 * 
	 * @returns {core.html.easyui.message.Message}
	 */
	Constructor.prototype.showFail = function() {

		return this.show(null, "操作失败!", null);
	};

	return {

		/**
		 * 获取消息处理者
		 * 
		 * @returns {core.html.easyui.message.Message}
		 */
		getInstance : function() {

			// 不存在,则创建
			if (!message) {
				message = new Constructor();
			}

			return message;
		}
	}
})();