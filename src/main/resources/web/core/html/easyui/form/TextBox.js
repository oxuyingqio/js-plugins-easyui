/**
 * @name	TextBox
 * @package	core.html.easyui.form
 * @desc	文本框模板
 * @type	类
 * 
 * @date 2016年8月29日 17:37:49
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
		var width = undefined;
		/**
		 * 高度
		 */
		var height = undefined;
		/**
		 * 输入框提示信息
		 */
		var prompt = "";
		/**
		 * 值
		 */
		var value = "";
		/**
		 * 输入框类型
		 */
		var type = "text";
		/**
		 * 标签
		 */
		var label = null;
		/**
		 * 标签宽度
		 */
		var labelWidth = undefined;
		/**
		 * 标签位置
		 */
		var labelPosition = "before";
		/**
		 * 标签排列
		 */
		var labelAlign = "right";
		/**
		 * 多行文本框
		 */
		var multiline = false;
		/**
		 * 图标
		 */
		var icons = [];
		/**
		 * 图标样式
		 */
		var iconCls = null;
		/**
		 * 图标排列
		 */
		var iconAlign = "right";
		/**
		 * 图标宽度
		 */
		var iconWidth = 18;
		/**
		 * 按钮文本
		 */
		var buttonText = "";
		/**
		 * 按钮图标
		 */
		var buttonIcon = null;
		/**
		 * 按钮排列
		 */
		var buttonAlign = "right";

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
		var onChange = function(newValue, oldValue) {

		};
		/**
		 * 改变大小事件
		 * 
		 * @param width
		 *            宽度
		 * @param height
		 *            高度
		 */
		var onResize = function(width, height) {

		};
		/**
		 * 点击按钮事件
		 */
		var onClickButton = function() {

		};
		/**
		 * 点击图标事件
		 */
		var onClickIcon = function(index) {

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
		 * @param id
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

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.TextBox", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.textbox({
			// 属性
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
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon()
		});

		return this;
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).textbox("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).textbox("destroy");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).textbox("validate");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).textbox("isValid");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).textbox("enableValidation");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).textbox("disableValidation");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).textbox("resetValidation");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).textbox("enable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).textbox("disable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).textbox("readonly", mode);
	};

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
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).textbox("resize", width);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).textbox("clear");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).textbox("reset");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).textbox("initValue", value);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).textbox("setText", text);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).textbox("getText");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).textbox("setValue", value);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).textbox("getValue");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).textbox("getIcon", index);
	};

	// 返回构造函数
	return Constructor;
})();