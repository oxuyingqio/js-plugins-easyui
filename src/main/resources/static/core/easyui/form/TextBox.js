/**
 * @name	TextBox
 * @package core.html.easyui.form
 * @desc	文本框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.TextBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.ValidateBox
 * 			core.html.easyui.button.LinkButton
 * 
 * @method	继承core.html.easyui.form.ValidateBox所有方法
 * 			继承core.html.easyui.button.LinkButton所有方法
 * 			string/core.html.easyui.form.TextBox		cls(string cls)							获取/设置样式
 * 			string/core.html.easyui.form.TextBox		prompt(string prompt)					获取/设置输入框提示信息
 * 			string/core.html.easyui.form.TextBox		value(string value)						获取/设置值
 * 			string/core.html.easyui.form.TextBox		type(string type)						获取/设置输入框类型
 * 			string/core.html.easyui.form.TextBox		label(string label)						获取/设置标签
 * 			number/core.html.easyui.form.TextBox		labelWidth(number labelWidth)			获取/设置标签宽度
 * 			string/core.html.easyui.form.TextBox		labelPosition(string labelPosition)		获取/设置标签位置
 * 			string/core.html.easyui.form.TextBox		labelAlign(string labelAlign)			获取/设置标签排列
 * 			boolean/core.html.easyui.form.TextBox		multiline(boolean multiline)			获取/设置多行文本框
 * 			array/core.html.easyui.form.TextBox			icons(array icons)						获取/设置图标
 * 			number/core.html.easyui.form.TextBox		iconWidth(number iconWidth)				获取/设置图标宽度
 * 			string/core.html.easyui.form.TextBox		buttonText(string buttonText)			获取/设置按钮文本
 * 			string/core.html.easyui.form.TextBox		buttonIcon(string buttonIcon)			获取/设置按钮图标
 * 			string/core.html.easyui.form.TextBox		buttonAlign(string buttonAlign)			获取/设置按钮排列
 * 			function/core.html.easyui.form.TextBox		onChange(function onChange)				获取/设置改变事件
 * 			function/core.html.easyui.form.TextBox		onResize(function function)				获取/设置改变大小事件
 * 			function/core.html.easyui.form.TextBox		onClickButton(function onClickButton)	获取/设置点击按钮事件
 * 			function/core.html.easyui.form.TextBox		onClickIcon(function onClickIcon)		获取/设置点击图标事件
 * 			core.html.easyui.form.TextBox				init()									初始化组件模板
 * 			object										options()					
 * 			object										textbox()				
 * 			object										button()	
 * 			void										destroy()
 * 			void										resize(number width)					改变宽度
 * 			void										disable()
 * 			void										enable()
 * 			void										readonly(boolean mode)
 * 			void										clear()									清除
 * 			void										reset()									重置
 * 			void										initValue(string value)	
 * 			void										setText(string text)					设置显示文本
 * 			string										getText()								获取显示文本
 * 			void										setValue(string value)					设置值
 * 			string										getValue()								获取值
 * 			object										getIcon(number index)					获取图标对象
 * 
 * @date	2018年4月23日 16:35:16
 */
core.html.easyui.form.TextBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.ValidateBox.call(this, arguments[0]);
		core.html.easyui.button.LinkButton.call(this, arguments[0]);
		// 默认参数修改
		this.width($.fn.textbox.defaults.width);
		this.height($.fn.textbox.defaults.height);
		this.editable($.fn.textbox.defaults.editable);
		this.disabled($.fn.textbox.defaults.disabled);
		this.readonly($.fn.textbox.defaults.readonly);
		this.iconCls($.fn.textbox.defaults.iconCls);
		this.iconAlign($.fn.textbox.defaults.iconAlign);

		/**
		 * 属性
		 */
		/**
		 * 样式
		 */
		var cls = $.fn.textbox.defaults.cls;
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
		 */
		var onChange = $.fn.textbox.defaults.onChange;
		/**
		 * 改变大小事件
		 */
		var onResize = $.fn.textbox.defaults.onResize;
		/**
		 * 点击按钮事件
		 */
		var onClickButton = $.fn.textbox.defaults.onClickButton;
		/**
		 * 点击图标事件
		 */
		var onClickIcon = $.fn.textbox.defaults.onClickIcon;

		/**
		 * 获取/设置样式
		 * 
		 * @param cls{string}
		 * @returns {string/core.html.easyui.form.TextBox}
		 */
		this.cls = function() {

			switch (arguments.length) {
			case 0:
				return cls;
			default:
				cls = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置输入框提示信息
		 * 
		 * @param prompt{string}
		 * @returns {string/core.html.easyui.form.TextBox}
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
		 * @param value{string}
		 * @returns {string/core.html.easyui.form.TextBox}
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
		 * @param type{string}
		 * @returns {string/core.html.easyui.form.TextBox}
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
		 * @param label{string}
		 * @returns {string/core.html.easyui.form.TextBox}
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
		 * @param labelWidth{number}
		 * @returns {number/core.html.easyui.form.TextBox}
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
		 * @param labelPosition{string}
		 * @returns {string/core.html.easyui.form.TextBox}
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
		 * @param labelAlign{string}
		 * @returns {string/core.html.easyui.form.TextBox}
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
		 * @param multiline{boolean}
		 * @returns {boolean/core.html.easyui.form.TextBox}
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
		 * @param icons{array}
		 * @returns {array/core.html.easyui.form.TextBox}
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
		 * 获取/设置图标宽度
		 * 
		 * @param iconWidth{number}
		 * @returns {number/core.html.easyui.form.TextBox}
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
		 * @param buttonText{string}
		 * @returns {string/core.html.easyui.form.TextBox}
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
		 * @param buttonIcon{string}
		 * @returns {string/core.html.easyui.form.TextBox}
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
		 * @param buttonAlign{string}
		 * @returns {string/core.html.easyui.form.TextBox}
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
		 * @param onChange{function}
		 * @returns {function/core.html.easyui.form.TextBox}
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
		 * @param onResize{function}
		 * @returns {function/core.html.easyui.form.TextBox}
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
		 * @param onClickButton{function}
		 * @returns {function/core.html.easyui.form.TextBox}
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
		 * @param onClickIcon{function}
		 * @returns {function/core.html.easyui.form.TextBox}
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

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.TextBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.TextBox", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().textbox({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// 属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// 事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon()
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

		return this.$jQuery().textbox("options");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.textbox = function() {

		return this.$jQuery().textbox("textbox");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.button = function() {

		return this.$jQuery().textbox("button");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().textbox("destroy");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width{number}
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return this.$jQuery().textbox("resize", width);
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().textbox("disable");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().textbox("enable");
	};

	/**
	 * 只读
	 * 
	 * @param mode{boolean}
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return this.$jQuery().textbox("readonly", mode);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().textbox("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return this.$jQuery().textbox("reset");
	};

	/**
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return this.$jQuery().textbox("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text{string}
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return this.$jQuery().textbox("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getText = function() {

		return this.$jQuery().textbox("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().textbox("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getValue = function() {

		return this.$jQuery().textbox("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index{number}
	 * @returns {object}
	 */
	Constructor.prototype.getIcon = function(index) {

		return this.$jQuery().textbox("getIcon", index);
	};

	// 返回构造函数
	return Constructor;
})();