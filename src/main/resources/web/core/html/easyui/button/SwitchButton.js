/**
 * @name	SwitchButton
 * @package core.html.easyui.button
 * @desc	开关按钮模板
 * @type	类
 * 
 * @constructor	core.html.easyui.button.SwitchButton(string id/object jQuery)
 * 
 * @method	object											$jQuery()							获取jQuery对象
 * 			number/core.html.easyui.button.SwitchButton		width(number width)					获取/设置宽度
 * 			number/core.html.easyui.button.SwitchButton		height(number height)				获取/设置高度
 * 			number/core.html.easyui.button.SwitchButton		handleWidth(number handleWidth)		获取/设置中心宽度
 * 			boolean/core.html.easyui.button.SwitchButton	checked(boolean checked)			获取/设置选中
 * 			boolean/core.html.easyui.button.SwitchButton	disabled(boolean disabled)			获取/设置不可用
 * 			boolean/core.html.easyui.button.SwitchButton	readonly(boolean readonly)			获取/设置只读
 * 			boolean/core.html.easyui.button.SwitchButton	reversed(boolean reversed)			获取/设置开关位置反转
 * 			string/core.html.easyui.button.SwitchButton		onText(string onText)				获取/设置开文字描述
 * 			string/core.html.easyui.button.SwitchButton		offText(string offText)				获取/设置关文字描述
 * 			string/core.html.easyui.button.SwitchButton		handleText(string handleText)		获取/设置中心文字
 * 			string/core.html.easyui.button.SwitchButton		value(string value)					获取/设置值
 * 			function/core.html.easyui.button.SwitchButton	onChange(function onChange)			获取/设置改变事件
 * 			core.html.easyui.button.SwitchButton			init()								初始化组件模板
 * 			object											options()				
 * 			void											resize(object param)				改变大小
 * 			void											disable()							禁用
 * 			void											enable()							启用
 * 			void											readonly(object mode)				只读
 * 			void											check()								选中
 * 			void											uncheck()							取消选中
 * 			void											clear()								清除选中值
 * 			void											reset()								重置选中值
 * 			void											setValue(string value)				设置值
 * 			string											getValue()							获取值
 * 
 * @date	2018年4月20日 10:34:28
 */
core.html.easyui.button.SwitchButton = (function() {

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
		 * 宽度
		 */
		var width = $.fn.switchbutton.defaults.width;
		/**
		 * 高度
		 */
		var height = $.fn.switchbutton.defaults.height;
		/**
		 * 中心宽度
		 */
		var handleWidth = $.fn.switchbutton.defaults.handleWidth;
		/**
		 * 选中
		 */
		var checked = $.fn.switchbutton.defaults.checked;
		/**
		 * 不可用
		 */
		var disabled = $.fn.switchbutton.defaults.disabled;
		/**
		 * 只读
		 */
		var readonly = $.fn.switchbutton.defaults.readonly;
		/**
		 * 开关位置反转
		 */
		var reversed = $.fn.switchbutton.defaults.reversed;
		/**
		 * 开文字描述
		 */
		var onText = $.fn.switchbutton.defaults.onText;
		/**
		 * 关文字描述
		 */
		var offText = $.fn.switchbutton.defaults.offText;
		/**
		 * 中心文字
		 */
		var handleText = $.fn.switchbutton.defaults.handleText;
		/**
		 * 值
		 */
		var value = $.fn.switchbutton.defaults.value;

		/**
		 * 事件
		 */
		/**
		 * 改变事件
		 */
		var onChange = $.fn.switchbutton.defaults.onChange;

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.button.SwitchButton", "构造参数异常", "非字符或jQuery对象");
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
		 * 获取/设置宽度
		 * 
		 * @param width{number}
		 * @returns {number/core.html.easyui.button.SwitchButton}
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
		 * 获取/设置高度
		 * 
		 * @param height{number}
		 * @returns {number/core.html.easyui.button.SwitchButton}
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
		 * 获取/设置中心宽度
		 * 
		 * @param handleWidth{number}
		 * @returns {number/core.html.easyui.button.SwitchButton}
		 */
		this.handleWidth = function() {

			switch (arguments.length) {
			case 0:
				return handleWidth;
			default:
				handleWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置选中
		 * 
		 * @param checked{boolean}
		 * @returns {boolean/core.html.easyui.button.SwitchButton}
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
		 * 获取/设置不可用
		 * 
		 * @param disabled{boolean}
		 * @returns {boolean/core.html.easyui.button.SwitchButton}
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
		 * 获取/设置只读
		 * 
		 * @param readonly{boolean}
		 * @returns {boolean/core.html.easyui.button.SwitchButton}
		 */
		this.readonly = function() {

			switch (arguments.length) {
			case 0:
				return readonly;
			default:
				readonly = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置开关位置反转
		 * 
		 * @param reversed{boolean}
		 * @returns {boolean/core.html.easyui.button.SwitchButton}
		 */
		this.reversed = function() {

			switch (arguments.length) {
			case 0:
				return reversed;
			default:
				reversed = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置开文字描述
		 * 
		 * @param onText{string}
		 * @returns {string/core.html.easyui.button.SwitchButton}
		 */
		this.onText = function() {

			switch (arguments.length) {
			case 0:
				return onText;
			default:
				onText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置关文字描述
		 * 
		 * @param offText{string}
		 * @returns {string/core.html.easyui.button.SwitchButton}
		 */
		this.offText = function() {

			switch (arguments.length) {
			case 0:
				return offText;
			default:
				offText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置中心文字
		 * 
		 * @param handleText{string}
		 * @returns {string/core.html.easyui.button.SwitchButton}
		 */
		this.handleText = function() {

			switch (arguments.length) {
			case 0:
				return handleText;
			default:
				handleText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置值
		 * 
		 * @param value{string}
		 * @returns {string/core.html.easyui.button.SwitchButton}
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
		 * 获取/设置改变事件
		 * 
		 * @param onChange{function}
		 * @returns {function/core.html.easyui.button.SwitchButton}
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
	 * @returns {core.html.easyui.button.SwitchButton}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.button.SwitchButton", "构造参数异常", "Document不存在.");
		}

		// 备份this对象
		var _this = this;

		// 参数配置
		this.$jQuery().switchbutton({
			// 属性
			width : this.width(),
			height : this.height(),
			handleWidth : this.handleWidth(),
			checked : this.checked(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			reversed : this.reversed(),
			onText : this.onText(),
			offText : this.offText(),
			handleText : this.handleText(),
			value : this.value(),

			// 事件
			onChange : function(checked) {

				// 修改值
				checked ? _this.setValue(_this.value()) : _this.setValue("");
				// 调用自定义改变事件
				_this.onChange()(checked);
			}
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

		return this.$jQuery()
		switchbutton("options");
	};

	/**
	 * 改变大小
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.resize = function(param) {

		return this.$jQuery().switchbutton("resize", param);
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().switchbutton("disable");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().switchbutton("enable");
	};

	/**
	 * 只读
	 * 
	 * @param mode{object}
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return this.$jQuery().switchbutton("readonly", mode);
	};

	/**
	 * 选中
	 * 
	 * @returns
	 */
	Constructor.prototype.check = function() {

		return this.$jQuery().switchbutton("check");
	};

	/**
	 * 取消选中
	 * 
	 * @returns
	 */
	Constructor.prototype.uncheck = function() {

		return this.$jQuery().switchbutton("uncheck");
	};

	/**
	 * 清除选中值
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().switchbutton("clear");
	};

	/**
	 * 重置选中值
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return this.$jQuery().switchbutton("reset");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().switchbutton("setValue", value);
	};
	
	/**
	 * 扩展方法
	 */
	/**
	 * 获取值
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getValue = function() {

		return this.$jQuery().switchbutton("getValue");
	};

	// 返回构造函数
	return Constructor;
})();