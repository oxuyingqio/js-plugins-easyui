/**
 * @name RadioButton
 * @package core.html.easyui.form
 * @desc 单选框
 * @type 类
 * 
 * @constructor core.html.easyui.form.RadioButton(string id/object jQuery)
 * 
 * @method object $jQuery() 获取/设置jQuery对象
 * 
 * @date 2019年4月15日 10:18:04
 */
core.html.easyui.form.RadioButton = (function() {

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
		 * width
		 */
		var width = $.fn.radiobutton.defaults.width;
		/**
		 * height
		 */
		var height = $.fn.radiobutton.defaults.height;
		/**
		 * value
		 */
		var value = $.fn.radiobutton.defaults.value;
		/**
		 * checked
		 */
		var checked = $.fn.radiobutton.defaults.checked;
		/**
		 * disabled
		 */
		var disabled = $.fn.radiobutton.defaults.disabled;
		/**
		 * label
		 */
		var label = $.fn.radiobutton.defaults.label;
		/**
		 * labelWidth
		 */
		var labelWidth = $.fn.radiobutton.defaults.labelWidth;
		/**
		 * labelPosition
		 */
		var labelPosition = $.fn.radiobutton.defaults.labelPosition;
		/**
		 * labelAlign
		 */
		var labelAlign = $.fn.radiobutton.defaults.labelAlign;

		/**
		 * 事件
		 */
		/**
		 * 
		 */
		var onChange = $.fn.radiobutton.defaults.onChange;

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.form.RadioButton", "构造参数异常", "非字符或jQuery对象");
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
		 * @param width{number}
		 * @returns {number/core.html.easyui.form.RadioButton}
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
		 * @returns {number/core.html.easyui.form.RadioButton}
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
		 * @param value{string}
		 * @returns {string/core.html.easyui.form.RadioButton}
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
		 * @param checked{boolean}
		 * @returns {boolean/core.html.easyui.form.RadioButton}
		 */
		this.checked = function() {

			switch (arguments.length) {
			case 0:
				return checked;
			default:
				checked = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param disabled{boolean}
		 * @returns {boolean/core.html.easyui.form.RadioButton}
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
		 * @param label{string}
		 * @returns {string/core.html.easyui.form.RadioButton}
		 */
		this.label = function() {

			switch (arguments.length) {
			case 0:
				return label;
			default:
				label = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param labelWidth{number}
		 * @returns {number/core.html.easyui.form.RadioButton}
		 */
		this.labelWidth = function() {

			switch (arguments.length) {
			case 0:
				return labelWidth;
			default:
				labelWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param labelPosition{string}
		 * @returns {string/core.html.easyui.form.RadioButton}
		 */
		this.labelPosition = function() {

			switch (arguments.length) {
			case 0:
				return labelPosition;
			default:
				labelPosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param labelAlign{string}
		 * @returns {string/core.html.easyui.form.RadioButton}
		 */
		this.labelAlign = function() {

			switch (arguments.length) {
			case 0:
				return labelAlign;
			default:
				labelAlign = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onChange{function}
		 * @returns {function/core.html.easyui.form.RadioButton}
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
	 * @returns {core.html.easyui.form.RadioButton}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.RadioButton", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().radiobutton({
			// 属性
			width : this.width(),
			height : this.height(),
			value : this.value(),
			checked : this.checked(),
			disabled : this.disabled(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),

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

		return this.$jQuery().radiobutton("options");
	};

	/**
	 * 
	 * @param value{object}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().radiobutton("setValue", value);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().radiobutton("disable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().radiobutton("enable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.check = function() {

		return this.$jQuery().radiobutton("check");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.uncheck = function() {

		return this.$jQuery().radiobutton("uncheck");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().radiobutton("clear");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return this.$jQuery().radiobutton("reset");
	};

	// 返回构造函数
	return Constructor;
})();