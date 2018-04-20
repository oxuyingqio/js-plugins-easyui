/**
 * @name	Resizable
 * @package core.html.easyui.base
 * @desc	改变大小模板
 * @type	类
 * 
 * @constructor	core.html.easyui.base.Resizable(string id/object jQuery)
 * 
 * @method	object										$jQuery()								获取/设置jQuery对象
 *			boolean/core.html.easyui.base.Resizable 	disabled(boolean disabled) 				获取/设置禁止
 *			string/core.html.easyui.base.Resizable 		handles(string handles)					获取/设置
 *			number/core.html.easyui.base.Resizable 		minWidth(number minWidth) 				获取/设置
 *			number/core.html.easyui.base.Resizable 		minHeight(number minHeight) 			获取/设置
 *			number/core.html.easyui.base.Resizable 		maxWidth(number maxWidth) 				获取/设置
 *			number/core.html.easyui.base.Resizable 		maxHeight(number maxHeight) 			获取/设置
 *			number/core.html.easyui.base.Resizable 		edge(number edge) 						获取/设置
 *			function/core.html.easyui.base.Resizable 	onStartResize(function onStartResize) 	获取/设置
 *			function/core.html.easyui.base.Resizable 	onResize(function onResize) 			获取/设置
 *			function/core.html.easyui.base.Resizable 	onStopResize(function onStopResize)		获取/设置
 *			core.html.easyui.base.Resizable 			init() 									初始化组件模板
 *			object										options()
 *			void										enable()								启用
 *			void										disable()								禁用
 * 
 * @date	2018年4月20日 14:02:13
 */
core.html.easyui.base.Resizable = (function() {

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
		 * 禁止
		 */
		var disabled = $.fn.resizable.defaults.disabled;
		/**
		 * 
		 */
		var handles = $.fn.resizable.defaults.handles;
		/**
		 * 
		 */
		var minWidth = $.fn.resizable.defaults.minWidth;
		/**
		 * 
		 */
		var minHeight = $.fn.resizable.defaults.minHeight;
		/**
		 * 
		 */
		var maxWidth = $.fn.resizable.defaults.maxWidth;
		/**
		 * 
		 */
		var maxHeight = $.fn.resizable.defaults.maxHeight;
		/**
		 * 
		 */
		var edge = $.fn.resizable.defaults.edge;

		/**
		 * 事件
		 */
		/**
		 * 
		 */
		var onStartResize = $.fn.resizable.defaults.onStartResize;
		/**
		 * 
		 */
		var onResize = $.fn.resizable.defaults.onResize;
		/**
		 * 
		 */
		var onStopResize = $.fn.resizable.defaults.onStopResize;

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.base.Resizable", "构造参数异常", "非字符或jQuery对象");
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
		 * 获取/设置禁止
		 * 
		 * @param disabled{boolean}
		 * @returns {boolean/core.html.easyui.base.Resizable}
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
		 * 获取/设置
		 * 
		 * @param handles{string}
		 * @returns {string/core.html.easyui.base.Resizable}
		 */
		this.handles = function() {

			switch (arguments.length) {
			case 0:
				return handles;
			default:
				handles = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param minWidth{number}
		 * @returns {number/core.html.easyui.base.Resizable}
		 */
		this.minWidth = function() {

			switch (arguments.length) {
			case 0:
				return minWidth;
			default:
				minWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param minHeight{number}
		 * @returns {number/core.html.easyui.base.Resizable}
		 */
		this.minHeight = function() {

			switch (arguments.length) {
			case 0:
				return minHeight;
			default:
				minHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param maxWidth{number}
		 * @returns {number/core.html.easyui.base.Resizable}
		 */
		this.maxWidth = function() {

			switch (arguments.length) {
			case 0:
				return maxWidth;
			default:
				maxWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param maxHeight{number}
		 * @returns {number/core.html.easyui.base.Resizable}
		 */
		this.maxHeight = function() {

			switch (arguments.length) {
			case 0:
				return maxHeight;
			default:
				maxHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param edge{number}
		 * @returns {number/core.html.easyui.base.Resizable}
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
		 * 获取/设置
		 * 
		 * @param onStartResize{function}
		 * @returns {function/core.html.easyui.base.Resizable}
		 */
		this.onStartResize = function() {

			switch (arguments.length) {
			case 0:
				return onStartResize;
			default:
				onStartResize = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onResize{function}
		 * @returns {function/core.html.easyui.base.Resizable}
		 */
		this.onResize = function() {

			switch (arguments.length) {
			case 0:
				return onResize;
			default:
				onResize = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onStopResize{function}
		 * @returns {function/core.html.easyui.base.Resizable}
		 */
		this.onStopResize = function() {

			switch (arguments.length) {
			case 0:
				return onStopResize;
			default:
				onStopResize = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.base.Resizable}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.base.Resizable", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().resizable({
			// 属性
			disabled : this.disabled(),
			handles : this.handles(),
			minWidth : this.minWidth(),
			minHeight : this.minHeight(),
			maxWidth : this.maxWidth(),
			maxHeight : this.maxHeight(),
			edge : this.edge(),

			// 事件
			onStartResize : this.onStartResize(),
			onResize : this.onResize(),
			onStopResize : this.onStopResize()
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

		return this.$jQuery().resizable("options");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().resizable("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().resizable("disable");
	};

	// 返回构造函数
	return Constructor;
})();