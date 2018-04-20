/**
 * @name	ProgressBar
 * @package core.html.easyui.base
 * @desc	模板
 * @type	类
 * 
 * @constructor	core.html.easyui.base.ProgressBar(string id/object jQuery)
 * 
 * @method	object										$jQuery()							获取/设置jQuery对象
 *			object/core.html.easyui.base.ProgressBar 		accept(object accept)				获取/设置
 *			boolean/core.html.easyui.base.ProgressBar 	disabled(boolean disabled) 			获取/设置
 *			function/core.html.easyui.base.ProgressBar 	onDragEnter(function onDragEnter) 	获取/设置
 *			function/core.html.easyui.base.ProgressBar 	onDragOver(function onDragOver) 	获取/设置
 *			function/core.html.easyui.base.ProgressBar 	onDragLeave(function onDragLeave)	获取/设置
 *			function/core.html.easyui.base.ProgressBar 	onDrop(function onDrop) 			获取/设置
 *			core.html.easyui.base.ProgressBar 			init() 								初始化组件模板
 *			object										options()
 *			void										enable()							启用
 *			void										disable()							禁用
 * 
 * @date	2018年4月20日 13:54:43
 */
core.html.easyui.base.ProgressBar = (function() {

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
		 * 
		 */
		var accept = $.fn.progressbar.defaults.accept;
		/**
		 * 禁止
		 */
		var disabled = $.fn.progressbar.defaults.disabled;

		/**
		 * 事件
		 */
		/**
		 * 
		 */
		var onDragEnter = $.fn.progressbar.defaults.onDragEnter;
		/**
		 * 
		 */
		var onDragOver = $.fn.progressbar.defaults.onDragOver;
		/**
		 * 
		 */
		var onDragLeave = $.fn.progressbar.defaults.onDragLeave;
		/**
		 * 
		 */
		var onDrop = $.fn.progressbar.defaults.onDrop;

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.base.ProgressBar", "构造参数异常", "非字符或jQuery对象");
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
		 * 获取/设置
		 * 
		 * @param accept{object}
		 * @returns {object/core.html.easyui.base.ProgressBar}
		 */
		this.accept = function() {

			switch (arguments.length) {
			case 0:
				return accept;
			default:
				accept = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置禁止
		 * 
		 * @param disabled{boolean}
		 * @returns {boolean/core.html.easyui.base.ProgressBar}
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
		 * @param onDragEnter{function}
		 * @returns {function/core.html.easyui.base.ProgressBar}
		 */
		this.onDragEnter = function() {

			switch (arguments.length) {
			case 0:
				return onDragEnter;
			default:
				onDragEnter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onDragOver{function}
		 * @returns {function/core.html.easyui.base.ProgressBar}
		 */
		this.onDragOver = function() {

			switch (arguments.length) {
			case 0:
				return onDragOver;
			default:
				onDragOver = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onDragLeave{function}
		 * @returns {function/core.html.easyui.base.ProgressBar}
		 */
		this.onDragLeave = function() {

			switch (arguments.length) {
			case 0:
				return onDragLeave;
			default:
				onDragLeave = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onDrop{function}
		 * @returns {function/core.html.easyui.base.ProgressBar}
		 */
		this.onDrop = function() {

			switch (arguments.length) {
			case 0:
				return onDrop;
			default:
				onDrop = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.base.ProgressBar}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.base.ProgressBar", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().progressbar({
			// 属性
			accept : this.accept(),
			disabled : this.disabled(),

			// 事件
			onDragEnter : this.onDragEnter(),
			onDragOver : this.onDragOver(),
			onDragLeave : this.onDragLeave(),
			onDrop : this.onDrop()
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

		return this.$jQuery().progressbar("options");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().progressbar("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function(e) {

		return this.$jQuery().progressbar("disable");
	};

	// 返回构造函数
	return Constructor;
})();