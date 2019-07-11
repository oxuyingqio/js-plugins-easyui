/**
 * @name	ProgressBar
 * @package core.html.easyui.base
 * @desc	进度条模板
 * @type	类
 * 
 * @constructor	core.html.easyui.base.ProgressBar(string id/object jQuery)
 * 
 * @method	object											$jQuery()						获取/设置jQuery对象
 *			string/core.html.easyui.base.ProgressBar 		width(string width)				获取/设置
 *			number/core.html.easyui.base.ProgressBar 		height(number height) 			获取/设置
 *			number/core.html.easyui.base.ProgressBar 		value(number value) 			获取/设置
 *			string/core.html.easyui.base.ProgressBar 		text(string text) 				获取/设置
 *			function/core.html.easyui.base.ProgressBar 		onChange(function onChange)		获取/设置
 *			core.html.easyui.base.ProgressBar 				init() 							初始化组件模板
 *			object											options()
 *			void											resize(number width)				
 *			object											getValue()							
 *			void											setValue(object value)				
 * 
 * @date	2018年4月23日 10:46:02
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
		var width = $.fn.progressbar.defaults.width;
		/**
		 * 
		 */
		var height = $.fn.progressbar.defaults.height;
		/**
		 * 
		 */
		var value = $.fn.progressbar.defaults.value;
		/**
		 * 
		 */
		var text = $.fn.progressbar.defaults.text;

		/**
		 * 事件
		 */
		/**
		 * 
		 */
		var onChange = $.fn.progressbar.defaults.onChange;

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
		 * @param width{string}
		 * @returns {string/core.html.easyui.base.ProgressBar}
		 */
		this.width = function() {

			switch (arguments.length) {
			case 0:
				return width;
			default:
				width = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param height{number}
		 * @returns {number/core.html.easyui.base.ProgressBar}
		 */
		this.height = function() {

			switch (arguments.length) {
			case 0:
				return height;
			default:
				height = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param value{number}
		 * @returns {number/core.html.easyui.base.ProgressBar}
		 */
		this.value = function() {

			switch (arguments.length) {
			case 0:
				return value;
			default:
				value = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param text{string}
		 * @returns {string/core.html.easyui.base.ProgressBar}
		 */
		this.text = function() {

			switch (arguments.length) {
			case 0:
				return text;
			default:
				text = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onChange{function}
		 * @returns {function/core.html.easyui.base.ProgressBar}
		 */
		this.onChange = function() {

			switch (arguments.length) {
			case 0:
				return onChange;
			default:
				onChange = arguments[0];
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
			width : this.width(),
			height : this.height(),
			value : this.value(),
			text : this.text(),

			// 事件
			onChange : this.onChange()
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
	 * 
	 * @param width{number}
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return this.$jQuery().progressbar("resize", width);
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getValue = function() {

		return this.$jQuery().progressbar("getValue");
	};

	/**
	 * 
	 * @param value{object}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().progressbar("setValue", value);
	};

	// 返回构造函数
	return Constructor;
})();