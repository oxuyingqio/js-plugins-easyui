/**
 * @name	Tooltip
 * @package core.html.easyui.base
 * @desc	工具提示模板
 * @type	类
 * 
 * @constructor	core.html.easyui.base.Tooltip(String id)
 * 
 * @method	String/core.html.easyui.base.Tooltip	id()					获取/设置id
 * 			String/core.html.easyui.base.Tooltip	position()				获取/设置工具提示的位置
 * 			String/core.html.easyui.base.Tooltip	content()				获取/设置提示内容
 * 			Boolean/core.html.easyui.base.Tooltip	trackMouse()			获取/设置提示工具随着鼠标移动
 * 			Number/core.html.easyui.base.Tooltip	deltaX()				获取/设置水平偏移值
 * 			Number/core.html.easyui.base.Tooltip	deltaY()				获取/设置垂直偏移值
 * 			function/core.html.easyui.base.Tooltip	showEvent()				获取/设置显示事件
 * 			function/core.html.easyui.base.Tooltip	hideEvent()				获取/设置隐藏事件
 * 			Number/core.html.easyui.base.Tooltip	showDelay()				获取/设置显示工具延迟时间
 * 			Number/core.html.easyui.base.Tooltip	hideDelay()				获取/设置隐藏工具延迟时间
 * 			function/core.html.easyui.base.Tooltip	onShow()				获取/设置显示事件
 * 			function/core.html.easyui.base.Tooltip	onHide()				获取/设置隐藏事件
 * 			function/core.html.easyui.base.Tooltip	onUpdate()				获取/设置更新事件
 * 			function/core.html.easyui.base.Tooltip	onPosition()			获取/设置位置改变事件
 * 			function/core.html.easyui.base.Tooltip	onDestroy()				获取/设置销毁事件
 * 			core.html.easyui.base.Tooltip			init()					初始化组件模板
 * 			Object									options()		
 * 			Object									tip()			
 * 			Object									arrow()
 * 			Object									show()					显示
 * 			Object									hide()					隐藏
 * 			Object									update(String content)	更新内容
 * 			Object									reposition()			重置显示位置
 * 			Object									destroy()				销毁对象
 * 
 * @date	2016年8月29日 15:03:57
 */

core.html.easyui.base.Tooltip = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(_id) {

		// 校验ID
		if (_id === null || _id === undefined) {

			new core.lang.Exception(this, "core.html.easyui.base.Tooltip", "构造参数异常", "ID属性不能为空.");
		}

		/**
		 * 属性
		 */
		/**
		 * ID
		 */
		var id = _id;
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

		/**
		 * 获取/设置id
		 * 
		 * @param id
		 */
		this.id = function() {

			switch (arguments.length) {
			case 0:
				return id;
			default:
				id = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置工具提示的位置
		 * 
		 * @param position
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
		 * @param content
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
		 * @param trackMouse
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
		 * @param deltaX
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
		 * @param deltaY
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
		 * @param showEvent
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
		 * @param hideEvent
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
		 * @param showDelay
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
		 * @param hideDelay
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
		 * @param onShow
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
		 * @param onHide
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
		 * @param onUpdate
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
		 * @param onPosition
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
		 * @param onDestroy
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

		// 校验ID个数
		var idLength = $("[id='" + this.id() + "']").length;
		if (idLength === 0) {

			new core.lang.Exception(this, "core.html.easyui.base.Tooltip", "构造参数异常", "DIV(ID:" + this.id() + ")不存在.");
		} else if (idLength > 1) {

			new core.lang.Warning(this, "core.html.easyui.base.Tooltip", "构造参数警告", "DIV(ID:" + this.id() + ")存在多个.");
		}

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 参数配置
		$jQuery.tooltip({
			// 属性
			id : this.id(),
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
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).tooltip("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.tip = function() {

		return $("#" + this.id()).tooltip("tip");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.arrow = function() {

		return $("#" + this.id()).tooltip("arrow");
	};

	/**
	 * 显示
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function(e) {

		return $("#" + this.id()).tooltip("show", e);
	};

	/**
	 * 隐藏
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function(e) {

		return $("#" + this.id()).tooltip("hide", e);
	};

	/**
	 * 更新内容
	 * 
	 * @returns
	 */
	Constructor.prototype.update = function(content) {

		return $("#" + this.id()).tooltip("update", content);
	};

	/**
	 * 重置显示位置
	 * 
	 * @returns
	 */
	Constructor.prototype.reposition = function() {

		return $("#" + this.id()).tooltip("reposition");
	};

	/**
	 * 销毁对象
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).tooltip("destroy");
	};

	// 返回构造函数
	return Constructor;
})();