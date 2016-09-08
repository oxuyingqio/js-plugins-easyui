/**
 * @name	TextBox
 * @package core.html.easyui.form
 * @desc	文本框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.TextBox(String id)
 * 
 * @extend	core.html.easyui.form.ValidateBox
 * 
 * @method	Object/core.html.easyui.form.TextBox			width()						获取/设置宽度
 * 			Object/core.html.easyui.form.TextBox			height()					获取/设置高度
 * 			Object/core.html.easyui.form.TextBox			prompt()					获取/设置输入框提示信息
 * 			Object/core.html.easyui.form.TextBox			value()						获取/设置值
 * 			Object/core.html.easyui.form.TextBox			type()						获取/设置输入框类型
 * 			Object/core.html.easyui.form.TextBox			label()						获取/设置标签
 * 			Object/core.html.easyui.form.TextBox			labelWidth()				获取/设置标签宽度
 * 			Object/core.html.easyui.form.TextBox			labelPosition()				获取/设置标签位置
 * 			Object/core.html.easyui.form.TextBox			labelAlign()				获取/设置标签排列
 * 			Object/core.html.easyui.form.TextBox			multiline()					获取/设置多行文本框
 * 			Object/core.html.easyui.form.TextBox			icons()						获取/设置图标
 * 			Object/core.html.easyui.form.TextBox			iconCls()					获取/设置图标样式
 * 			Object/core.html.easyui.form.TextBox			iconAlign()					获取/设置图标排列
 * 			Object/core.html.easyui.form.TextBox			iconWidth()					获取/设置图标宽度
 * 			Object/core.html.easyui.form.TextBox			buttonText()				获取/设置按钮文本
 * 			Object/core.html.easyui.form.TextBox			buttonIcon()				获取/设置按钮图标
 * 			Object/core.html.easyui.form.TextBox			buttonAlign()				获取/设置按钮排列
 * 			Object/core.html.easyui.form.TextBox			onChange()					获取/设置改变事件
 * 			Object/core.html.easyui.form.TextBox			onResize()					获取/设置改变大小事件
 * 			Object/core.html.easyui.form.TextBox			onClickButton()				获取/设置点击按钮事件
 * 			Object/core.html.easyui.form.TextBox			onClickIcon()				获取/设置点击图标事件
 * 			core.html.easyui.form.TextBox					init()						初始化组件模板
 * 			Object											textbox()				
 * 			Object											button()				
 * 			Object											resize(Object width)		改变宽度
 * 			Object											clear()						清除
 * 			Object											reset()						重置
 * 			Object											initValue(Object value)	
 * 			Object											setText(String text)		设置显示文本
 * 			Object											getText()					获取显示文本
 * 			Object											setValue(Object value)		设置值
 * 			Object											getValue()					获取值
 * 			Object											getIcon(Number index)		获取图标对象
 * 
 * @date	2016年8月29日 17:37:49
 */

core.html.easyui.form.TextBox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.TextBox.superClass.constructor.call(this, id);

		/**
		 * 属性
		 */
		/**
		 * 宽度
		 */
		var width = $.fn.textbox.defaults.width;
		/**
		 * 高度
		 */
		var height = $.fn.textbox.defaults.height;
		/**
		 * 输入框提示信息
		 */
		var prompt = $.fn.textbox.defaults.prompt;
		/**
		 * 值
		 */
		var value = $.fn.textbox.defaults.value;
		/**
		 * 输入框类型
		 */
		var type = $.fn.textbox.defaults.type;
		/**
		 * 标签
		 */
		var label = $.fn.textbox.defaults.label;
		/**
		 * 标签宽度
		 */
		var labelWidth = $.fn.textbox.defaults.labelWidth;
		/**
		 * 标签位置
		 */
		var labelPosition = $.fn.textbox.defaults.labelPosition;
		/**
		 * 标签排列
		 */
		var labelAlign = $.fn.textbox.defaults.labelAlign;
		/**
		 * 多行文本框
		 */
		var multiline = $.fn.textbox.defaults.multiline;
		/**
		 * 图标
		 */
		var icons = $.fn.textbox.defaults.icons;
		/**
		 * 图标样式
		 */
		var iconCls = $.fn.textbox.defaults.iconCls;
		/**
		 * 图标排列
		 */
		var iconAlign = $.fn.textbox.defaults.iconAlign;
		/**
		 * 图标宽度
		 */
		var iconWidth = $.fn.textbox.defaults.iconWidth;
		/**
		 * 按钮文本
		 */
		var buttonText = $.fn.textbox.defaults.buttonText;
		/**
		 * 按钮图标
		 */
		var buttonIcon = $.fn.textbox.defaults.buttonIcon;
		/**
		 * 按钮排列
		 */
		var buttonAlign = $.fn.textbox.defaults.buttonAlign;

		/**
		 * 事件
		 */
		/**
		 * 改变事件
		 * 
		 * @param newValue
		 *            新值
		 * @param oldValue
		 *            旧值
		 */
		var onChange = $.fn.textbox.defaults.onChange;
		/**
		 * 改变大小事件
		 * 
		 * @param width
		 *            宽度
		 * @param height
		 *            高度
		 */
		var onResize = $.fn.textbox.defaults.onResize;
		/**
		 * 点击按钮事件
		 */
		var onClickButton = $.fn.textbox.defaults.onClickButton;
		/**
		 * 点击图标事件
		 * 
		 * @param index
		 */
		var onClickIcon = $.fn.textbox.defaults.onClickIcon;

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
		 * 获取/设置输入框提示信息
		 * 
		 * @param prompt
		 */
		this.prompt = function() {

			switch (arguments.length) {
			case 0:
				return prompt;
			default:
				prompt = arguments[0];
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
		 * 获取/设置输入框类型
		 * 
		 * @param type
		 */
		this.type = function() {

			switch (arguments.length) {
			case 0:
				return type;
			default:
				type = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置标签
		 * 
		 * @param label
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
		 * 获取/设置标签宽度
		 * 
		 * @param labelWidth
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
		 * 获取/设置标签位置
		 * 
		 * @param labelPosition
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
		 * 获取/设置标签排列
		 * 
		 * @param labelAlign
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
		 * 获取/设置多行文本框
		 * 
		 * @param multiline
		 */
		this.multiline = function() {

			switch (arguments.length) {
			case 0:
				return multiline;
			default:
				multiline = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置图标
		 * 
		 * @param icons
		 */
		this.icons = function() {

			switch (arguments.length) {
			case 0:
				return icons;
			default:
				icons = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置图标样式
		 * 
		 * @param iconCls
		 */
		this.iconCls = function() {

			switch (arguments.length) {
			case 0:
				return iconCls;
			default:
				iconCls = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置图标排列
		 * 
		 * @param iconAlign
		 */
		this.iconAlign = function() {

			switch (arguments.length) {
			case 0:
				return iconAlign;
			default:
				iconAlign = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置图标宽度
		 * 
		 * @param iconWidth
		 */
		this.iconWidth = function() {

			switch (arguments.length) {
			case 0:
				return iconWidth;
			default:
				iconWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按钮文本
		 * 
		 * @param buttonText
		 */
		this.buttonText = function() {

			switch (arguments.length) {
			case 0:
				return buttonText;
			default:
				buttonText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按钮图标
		 * 
		 * @param buttonIcon
		 */
		this.buttonIcon = function() {

			switch (arguments.length) {
			case 0:
				return buttonIcon;
			default:
				buttonIcon = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按钮排列
		 * 
		 * @param buttonAlign
		 */
		this.buttonAlign = function() {

			switch (arguments.length) {
			case 0:
				return buttonAlign;
			default:
				buttonAlign = arguments[0];
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

		/**
		 * 获取/设置改变大小事件
		 * 
		 * @param onResize
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
		 * 获取/设置点击按钮事件
		 * 
		 * @param onClickButton
		 */
		this.onClickButton = function() {

			switch (arguments.length) {
			case 0:
				return onClickButton;
			default:
				onClickButton = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置点击图标事件
		 * 
		 * @param onClickIcon
		 */
		this.onClickIcon = function() {

			switch (arguments.length) {
			case 0:
				return onClickIcon;
			default:
				onClickIcon = arguments[0];
				return this;
			}
		};
	};
	// 继承验证文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.ValidateBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.TextBox}
	 */
	Constructor.prototype.init = function() {
				
		// 校验ID个数
		var idLength = $("[id='" + this.id() + "']").length;
		if (idLength === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.TextBox", "参数异常", "div(id:" + this.id() + ")不存在.");
		} else if (idLength > 1) {
			new core.lang.Warning(this, "core.html.easyui.form.TextBox", "参数警告", "div(id:" + this.id() + ")存在多个.");
		}
		
		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 参数配置
		$jQuery.textbox({
			// 属性
			// Validate继承属性
			id : this.id(),
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			deltaX : this.deltaX(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// 属性
			width : this.width(),
			height : this.height(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),

			// 事件
			// Validate继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// 事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon()
		});

		return this;
	};

	/**
	 * Validate继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).textbox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).textbox("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).textbox("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).textbox("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).textbox("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).textbox("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).textbox("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).textbox("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).textbox("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).textbox("readonly", mode);
	};

	/**
	 * 方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).textbox("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).textbox("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).textbox("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).textbox("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).textbox("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).textbox("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).textbox("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).textbox("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).textbox("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).textbox("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).textbox("getIcon", index);
	};

	// 返回构造函数
	return Constructor;
})();