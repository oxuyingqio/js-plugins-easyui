/**
 * @name	Tooltip
 * @package core.html.easyui.base
 * @desc	工具提示模板
 * @type	类
 * 
 * @constructor core.html.easyui.base.Tooltip(string id/object jQuery)
 * 
 * @method	object										$jQuery()							获取/设置jQuery对象
 *			string/core.html.easyui.base.Tooltip 		position(string position)			获取/设置工具提示的位置
 *			function/core.html.easyui.base.Tooltip 		content(function content) 			获取/设置提示内容
 *			boolean/core.html.easyui.base.Tooltip 		trackMouse(boolean trackMouse) 		获取/设置提示工具随着鼠标移动
 *			number/core.html.easyui.base.Tooltip 		deltaX(number deltaX) 				获取/设置水平偏移值
 *			number/core.html.easyui.base.Tooltip 		deltaY(number deltaY) 				获取/设置垂直偏移值
 *			string/core.html.easyui.base.Tooltip 		showEvent(string showEvent) 		获取/设置显示事件
 *			string/core.html.easyui.base.Tooltip 		hideEvent(string hideEvent) 		获取/设置隐藏事件
 *			number/core.html.easyui.base.Tooltip 		showDelay(number showDelay) 		获取/设置显示工具延迟时间
 *			number/core.html.easyui.base.Tooltip 		hideDelay(number hideDelay) 		获取/设置隐藏工具延迟时间
 *			function/core.html.easyui.base.Tooltip 		onShow(function onShow) 			获取/设置显示事件
 *			function/core.html.easyui.base.Tooltip 		onHide(function onHide) 			获取/设置隐藏事件
 *			function/core.html.easyui.base.Tooltip 		onUpdate(function onUpdate) 		获取/设置更新事件
 *			function/core.html.easyui.base.Tooltip 		onPosition(function onPosition)		获取/设置位置改变事件
 *			function/core.html.easyui.base.Tooltip 		onDestroy(function onDestroy) 		获取/设置销毁事件
 *			core.html.easyui.base.Tooltip 				init() 								初始化组件模板
 *			object										options()
 *			object										tip()
 *			object										arrow()
 *			void										show(object e)						显示
 *			void										hide(object e)						隐藏
 *			void										update(object content)				更新内容
 *			void										reposition()						重置显示位置
 *			void										destroy()							销毁对象
 * 
 * @date	2018年4月23日 14:11:19
 */
core.html.easyui.base.Tooltip = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		/**
		 * 属性
		 */
		/**
		 * jQuery对象
		 */
		var $jQuery;
		/**
		 * 工具提示的位置
		 */
		var position = $.fn.tooltip.defaults.position;
		/**
		 * 提示内容
		 */
		var content = $.fn.tooltip.defaults.content;
		/**
		 * 提示工具随着鼠标移动
		 */
		var trackMouse = $.fn.tooltip.defaults.trackMouse;
		/**
		 * 水平偏移值
		 */
		var deltaX = $.fn.tooltip.defaults.deltaX;
		/**
		 * 垂直偏移值
		 */
		var deltaY = $.fn.tooltip.defaults.deltaY;
		/**
		 * 显示事件
		 */
		var showEvent = $.fn.tooltip.defaults.showEvent;
		/**
		 * 隐藏事件
		 */
		var hideEvent = $.fn.tooltip.defaults.hideEvent;
		/**
		 * 显示工具延迟时间
		 */
		var showDelay = $.fn.tooltip.defaults.showDelay;
		/**
		 * 隐藏工具延迟时间
		 */
		var hideDelay = $.fn.tooltip.defaults.hideDelay;

		/**
		 * 事件
		 */
		/**
		 * 显示事件
		 */
		var onShow = $.fn.tooltip.defaults.onShow;
		/**
		 * 隐藏事件
		 */
		var onHide = $.fn.tooltip.defaults.onHide;
		/**
		 * 更新事件
		 */
		var onUpdate = $.fn.tooltip.defaults.onUpdate;
		/**
		 * 位置改变事件
		 */
		var onPosition = $.fn.tooltip.defaults.onPosition;
		/**
		 * 销毁事件
		 */
		var onDestroy = $.fn.tooltip.defaults.onDestroy;

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.base.Tooltip", "构造参数异常", "非字符或jQuery对象");
		}

		/**
		 * 获取jQuery对象
		 * 
		 * @returns {object}
		 */
		this.$jQuery = function() {

			return $jQuery;
		};

		/**
		 * 获取/设置工具提示的位置
		 * 
		 * @param position{string}
		 * @returns {string/core.html.easyui.base.Tooltip}
		 */
		this.position = function() {

			switch (arguments.length) {
			case 0:
				return position;
			default:
				position = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置提示内容
		 * 
		 * @param content{function}
		 * @returns {function/core.html.easyui.base.Tooltip}
		 */
		this.content = function() {

			switch (arguments.length) {
			case 0:
				return content;
			default:
				content = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置提示工具随着鼠标移动
		 * 
		 * @param trackMouse{boolean}
		 * @returns {boolean/core.html.easyui.base.Tooltip}
		 */
		this.trackMouse = function() {

			switch (arguments.length) {
			case 0:
				return trackMouse;
			default:
				trackMouse = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置水平偏移值
		 * 
		 * @param deltaX{number}
		 * @returns {number/core.html.easyui.base.Tooltip}
		 */
		this.deltaX = function() {

			switch (arguments.length) {
			case 0:
				return deltaX;
			default:
				deltaX = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置垂直偏移值
		 * 
		 * @param deltaY{number}
		 * @returns {number/core.html.easyui.base.Tooltip}
		 */
		this.deltaY = function() {

			switch (arguments.length) {
			case 0:
				return deltaY;
			default:
				deltaY = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示事件
		 * 
		 * @param showEvent{string}
		 * @returns {string/core.html.easyui.base.Tooltip}
		 */
		this.showEvent = function() {

			switch (arguments.length) {
			case 0:
				return showEvent;
			default:
				showEvent = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置隐藏事件
		 * 
		 * @param hideEvent{string}
		 * @returns {string/core.html.easyui.base.Tooltip}
		 */
		this.hideEvent = function() {

			switch (arguments.length) {
			case 0:
				return hideEvent;
			default:
				hideEvent = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示工具延迟时间
		 * 
		 * @param showDelay{number}
		 * @returns {number/core.html.easyui.base.Tooltip}
		 */
		this.showDelay = function() {

			switch (arguments.length) {
			case 0:
				return showDelay;
			default:
				showDelay = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置隐藏工具延迟时间
		 * 
		 * @param hideDelay{number}
		 * @returns {number/core.html.easyui.base.Tooltip}
		 */
		this.hideDelay = function() {

			switch (arguments.length) {
			case 0:
				return hideDelay;
			default:
				hideDelay = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示事件
		 * 
		 * @param onShow{function}
		 * @returns {function/core.html.easyui.base.Tooltip}
		 */
		this.onShow = function() {

			switch (arguments.length) {
			case 0:
				return onShow;
			default:
				onShow = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置隐藏事件
		 * 
		 * @param onHide{function}
		 * @returns {function/core.html.easyui.base.Tooltip}
		 */
		this.onHide = function() {

			switch (arguments.length) {
			case 0:
				return onHide;
			default:
				onHide = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置更新事件
		 * 
		 * @param onUpdate{function}
		 * @returns {function/core.html.easyui.base.Tooltip}
		 */
		this.onUpdate = function() {

			switch (arguments.length) {
			case 0:
				return onUpdate;
			default:
				onUpdate = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置位置改变事件
		 * 
		 * @param onPosition{function}
		 * @returns {function/core.html.easyui.base.Tooltip}
		 */
		this.onPosition = function() {

			switch (arguments.length) {
			case 0:
				return onPosition;
			default:
				onPosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置销毁事件
		 * 
		 * @param onDestroy{function}
		 * @returns {function/core.html.easyui.base.Tooltip}
		 */
		this.onDestroy = function() {

			switch (arguments.length) {
			case 0:
				return onDestroy;
			default:
				onDestroy = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.base.Tooltip}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.base.Tooltip", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().tooltip({
			// 属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),

			// 事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy()
		});

		return this;
	};

	/**
	 * 方法
	 */
	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.options = function() {

		return this.$jQuery().tooltip("options");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.tip = function() {

		return this.$jQuery().tooltip("tip");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.arrow = function() {

		return this.$jQuery().tooltip("arrow");
	};

	/**
	 * 显示
	 * 
	 * @param e{object}
	 * @returns
	 */
	Constructor.prototype.show = function(e) {

		return this.$jQuery().tooltip("show", e);
	};

	/**
	 * 隐藏
	 * 
	 * @param e{object}
	 * @returns
	 */
	Constructor.prototype.hide = function(e) {

		return this.$jQuery().tooltip("hide", e);
	};

	/**
	 * 更新内容
	 * 
	 * @param content{object}
	 * @returns
	 */
	Constructor.prototype.update = function(content) {

		return this.$jQuery().tooltip("update", content);
	};

	/**
	 * 重置显示位置
	 * 
	 * @returns
	 */
	Constructor.prototype.reposition = function() {

		return this.$jQuery().tooltip("reposition");
	};

	/**
	 * 销毁对象
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().tooltip("destroy");
	};

	// 返回构造函数
	return Constructor;
})();