/**
 * @name	Tooltip
 * @package core.html.easyui.base
 * @desc	工具提示模板
 * @type	类
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
			new core.lang.Exception(this, "core.html.easyui.base.Tooltip", "构造参数异常", "ID属性不能为空");
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
		var position = "bottom";
		/**
		 * 提示内容
		 */
		var content = null;
		/**
		 * 提示工具随着鼠标移动
		 */
		var trackMouse = false;
		/**
		 * 水平偏移值
		 */
		var deltaX = 0;
		/**
		 * 垂直偏移值
		 */
		var deltaY = 0;
		/**
		 * 显示事件
		 */
		var showEvent = "mouseenter";
		/**
		 * 隐藏事件
		 */
		var hideEvent = "mouseleave";
		/**
		 * 显示工具延迟时间
		 */
		var showDelay = 200;
		/**
		 * 隐藏工具延迟时间
		 */
		var hideDelay = 100;

		/**
		 * 事件
		 */
		/**
		 * 显示事件
		 */
		var onShow = function(e) {

		};
		/**
		 * 隐藏事件
		 */
		var onHide = function(e) {

		};
		/**
		 * 更新事件
		 */
		var onUpdate = function(content) {

		};
		/**
		 * 位置改变事件
		 */
		var onPosition = function(left, top) {

		};
		/**
		 * 销毁事件
		 */
		var onDestroy = function() {

		};

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

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.base.Tooltip", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

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