/**
 * @name	Draggable
 * @package core.html.easyui.base
 * @desc	拖动模板
 * @type	类
 * 
 * @constructor	core.html.easyui.base.Draggable(string id/object jQuery)
 * 
 * @method	object										$jQuery()				获取/设置jQuery对象
 *			function/core.html.easyui.base.Draggable 	proxy()					获取/设置代理
 *			boolean/core.html.easyui.base.Draggable 	revert() 				获取/设置停止拖动,元素是否返回初始位置
 *			string/core.html.easyui.base.Draggable 		cursor() 				获取/设置拖动时,鼠标样式
 *			number/core.html.easyui.base.Draggable 		deltaX() 				获取/设置水平偏移值
 *			number/core.html.easyui.base.Draggable 		deltaY() 				获取/设置垂直偏移值
 *			selector/core.html.easyui.base.Draggable 	handle() 				获取/设置
 *			boolean/core.html.easyui.base.Draggable 	disabled() 				获取/设置禁止拖动
 *			number/core.html.easyui.base.Draggable 		edge() 					获取/设置可拖动的宽度
 *			string/core.html.easyui.base.Draggable 		axis() 					获取/设置元素移动的轴,v/h
 *			number/core.html.easyui.base.Draggable 		delay() 				获取/设置延迟启动拖动毫秒值
 *			function/core.html.easyui.base.Draggable 	onBeforeDrag() 			获取/设置拖动前事件
 *			function/core.html.easyui.base.Draggable 	onStartDrag() 			获取/设置开始拖动事件
 *			function/core.html.easyui.base.Draggable 	onDrag()				获取/设置拖动中事件
 *			function/core.html.easyui.base.Draggable 	onEndDrag() 			获取/设置结束拖动前事件
 *			function/core.html.easyui.base.Draggable 	onStopDrag() 			获取/设置结束拖动事件
 *			core.html.easyui.base.Draggable 			init() 					初始化组件模板
 *			object										options()
 *			void										enable()				启用
 *			void										disable()				禁用
 * 
 * @date	2018年4月17日 11:31:40
 */
core.html.easyui.base.Draggable = (function() {

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
		 * 代理
		 */
		var proxy = $.fn.draggable.defaults.proxy;
		/**
		 * 停止拖动,元素是否返回初始位置
		 */
		var revert = $.fn.draggable.defaults.revert;
		/**
		 * 拖动时,鼠标样式
		 */
		var cursor = $.fn.draggable.defaults.cursor;
		/**
		 * 水平偏移值
		 */
		var deltaX = $.fn.draggable.defaults.deltaX;
		/**
		 * 垂直偏移值
		 */
		var deltaY = $.fn.draggable.defaults.deltaY;
		/**
		 * ?
		 */
		var handle = $.fn.draggable.defaults.handle;
		/**
		 * 禁止拖动
		 */
		var disabled = $.fn.draggable.defaults.disabled;
		/**
		 * 可拖动的宽度
		 */
		var edge = $.fn.draggable.defaults.edge;
		/**
		 * 元素移动的轴,v/h
		 */
		var axis = $.fn.draggable.defaults.axis;
		/**
		 * 延迟启动拖动毫秒值
		 */
		var delay = $.fn.draggable.defaults.delay;

		/**
		 * 事件
		 */
		/**
		 * 拖动前
		 */
		var onBeforeDrag = $.fn.draggable.defaults.onBeforeDrag;
		/**
		 * 开始拖动
		 */
		var onStartDrag = $.fn.draggable.defaults.onStartDrag;
		/**
		 * 拖动中
		 */
		var onDrag = $.fn.draggable.defaults.onDrag;
		/**
		 * 结束拖动前
		 */
		var onEndDrag = $.fn.draggable.defaults.onEndDrag;
		/**
		 * 结束拖动
		 */
		var onStopDrag = $.fn.draggable.defaults.onStopDrag;

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.base.Draggable", "构造参数异常", "非字符或jQuery对象");
		}

		/**
		 * 获取jQuery对象
		 */
		this.$jQuery = function() {

			return $jQuery;
		};

		/**
		 * 获取/设置代理
		 * 
		 * @param proxy
		 */
		this.proxy = function() {

			switch (arguments.length) {
			case 0:
				return proxy;
			default:
				proxy = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置停止拖动,元素是否返回初始位置
		 * 
		 * @param revert
		 */
		this.revert = function() {

			switch (arguments.length) {
			case 0:
				return revert;
			default:
				revert = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置拖动时,鼠标样式
		 * 
		 * @param cursor
		 */
		this.cursor = function() {

			switch (arguments.length) {
			case 0:
				return cursor;
			default:
				cursor = arguments[0];
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
		 * 获取/设置
		 * 
		 * @param handle
		 */
		this.handle = function() {

			switch (arguments.length) {
			case 0:
				return handle;
			default:
				handle = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置禁止拖动
		 * 
		 * @param disabled
		 */
		this.disabled = function() {

			switch (arguments.length) {
			case 0:
				return disabled;
			default:
				disabled = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置可拖动的宽度
		 * 
		 * @param edge
		 */
		this.edge = function() {

			switch (arguments.length) {
			case 0:
				return edge;
			default:
				edge = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置元素移动的轴,v/h
		 * 
		 * @param axis
		 */
		this.axis = function() {

			switch (arguments.length) {
			case 0:
				return axis;
			default:
				axis = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置延迟启动拖动毫秒值
		 * 
		 * @param delay
		 */
		this.delay = function() {

			switch (arguments.length) {
			case 0:
				return delay;
			default:
				delay = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置拖动前事件
		 * 
		 * @param onBeforeDrag
		 */
		this.onBeforeDrag = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeDrag;
			default:
				onBeforeDrag = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置开始拖动事件
		 * 
		 * @param onStartDrag
		 */
		this.onStartDrag = function() {

			switch (arguments.length) {
			case 0:
				return onStartDrag;
			default:
				onStartDrag = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置拖动中事件
		 * 
		 * @param onDrag
		 */
		this.onDrag = function() {

			switch (arguments.length) {
			case 0:
				return onDrag;
			default:
				onDrag = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置结束拖动前事件
		 * 
		 * @param onEndDrag
		 */
		this.onEndDrag = function() {

			switch (arguments.length) {
			case 0:
				return onEndDrag;
			default:
				onEndDrag = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置结束拖动事件
		 * 
		 * @param onStopDrag
		 */
		this.onStopDrag = function() {

			switch (arguments.length) {
			case 0:
				return onStopDrag;
			default:
				onStopDrag = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.base.Draggable}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.base.Draggable", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().draggable({
			// 属性
			proxy : this.proxy(),
			revert : this.revert(),
			cursor : this.cursor(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			handle : this.handle(),
			disabled : this.disabled(),
			edge : this.edge(),
			axis : this.axis(),
			delay : this.delay(),

			// 事件
			onBeforeDrag : this.onBeforeDrag(),
			onStartDrag : this.onStartDrag(),
			onDrag : this.onDrag(),
			onEndDrag : this.onEndDrag(),
			onStopDrag : this.onStopDrag()
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

		return this.$jQuery().draggable("options");
	};

	// /**
	// *
	// * @returns
	// */
	// Constructor.prototype.proxy = function() {
	//
	// return this.$jQuery().draggable("proxy");
	// };

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().draggable("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function(e) {

		return this.$jQuery().draggable("disable");
	};

	// 返回构造函数
	return Constructor;
})();