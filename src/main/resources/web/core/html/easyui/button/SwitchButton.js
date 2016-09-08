/**
 * @name	SwitchButton
 * @package core.html.easyui.button
 * @desc	开关按钮模板
 * @type	类
 * 
 * @constructor	core.html.easyui.button.SwitchButton(String id)
 * 
 * @method	String/core.html.easyui.button.SwitchButton		id()					获取/设置id
 * 			Number/core.html.easyui.button.SwitchButton		width()					获取/设置宽度
 * 			Number/core.html.easyui.button.SwitchButton		height()				获取/设置高度
 * 			Number/core.html.easyui.button.SwitchButton		handleWidth()			获取/设置中心宽度
 * 			Boolean/core.html.easyui.button.SwitchButton	checked()				获取/设置选中
 * 			Boolean/core.html.easyui.button.SwitchButton	disabled()				获取/设置不可用
 * 			Boolean/core.html.easyui.button.SwitchButton	readonly()				获取/设置只读
 * 			Boolean/core.html.easyui.button.SwitchButton	reversed()				获取/设置开关位置反转
 * 			String/core.html.easyui.button.SwitchButton		onText()				获取/设置开文字描述
 * 			String/core.html.easyui.button.SwitchButton		offText()				获取/设置关文字描述
 * 			String/core.html.easyui.button.SwitchButton		handleText()			获取/设置中心文字
 * 			String/core.html.easyui.button.SwitchButton		value()					获取/设置值
 * 			function/core.html.easyui.button.SwitchButton	onChange()				获取/设置改变事件
 * 			core.html.easyui.button.SwitchButton			init()					初始化组件模板
 * 			Object											options()				
 * 			Object											resize(Object param)	改变大小
 * 			Object											disable()				禁用
 * 			Object											enable()				启用
 * 			Object											readonly(Object mode)	只读
 * 			Object											check()					选中
 * 			Object											uncheck()				取消选中
 * 			Object											clear()					清除选中值
 * 			Object											reset()					重置选中值
 * 			Object											setValue()				设置值
 * 
 * @date	2016年8月29日 15:52:53
 */

core.html.easyui.button.SwitchButton = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(_id) {

		// 校验ID
		if (_id === null || _id === undefined) {
			new core.lang.Exception(this, "core.html.easyui.button.SwitchButton", "构造参数异常", "ID属性不能为空");
		}

		/**
		 * 属性
		 */
		/**
		 * ID
		 */
		var id = _id;
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
		 * 获取/设置宽度
		 * 
		 * @param width
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
		 * @param height
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
		 * @param handleWidth
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
		 * @param checked
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
		 * 获取/设置只读
		 * 
		 * @param readonly
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
		 * @param reversed
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
		 * @param onText
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
		 * @param offText
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
		 * @param handleText
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
		 * @param value
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
		 * @param onChange
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
				
		// 校验ID个数
		var idLength = $("[id='" + this.id() + "']").length;
		if (idLength === 0) {
			new core.lang.Exception(this, "core.html.easyui.button.SwitchButton", "参数异常", "div(id:" + this.id()
					+ ")不存在.");
		} else if (idLength > 1) {
			new core.lang.Warning(this, "core.html.easyui.button.SwitchButton", "参数警告", "div(id:" + this.id()
					+ ")存在多个.");
		}
		
		// 备份this对象
		var _this = this;

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 参数配置
		$jQuery.switchbutton({
			// 属性
			id : this.id(),
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
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).switchbutton("options");
	};

	/**
	 * 改变大小
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function(param) {

		return $("#" + this.id()).switchbutton("resize", param);
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).switchbutton("disable");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).switchbutton("enable");
	};

	/**
	 * 只读
	 * 
	 * @param mode
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).switchbutton("readonly", mode);
	};

	/**
	 * 选中
	 * 
	 * @returns
	 */
	Constructor.prototype.check = function() {

		return $("#" + this.id()).switchbutton("check");
	};

	/**
	 * 取消选中
	 * 
	 * @returns
	 */
	Constructor.prototype.uncheck = function() {

		return $("#" + this.id()).switchbutton("uncheck");
	};

	/**
	 * 清除选中值
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).switchbutton("clear");
	};

	/**
	 * 重置选中值
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).switchbutton("reset");
	};

	/**
	 * 设置值
	 * 
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).switchbutton("setValue", value);
	};

	// 返回构造函数
	return Constructor;
})();