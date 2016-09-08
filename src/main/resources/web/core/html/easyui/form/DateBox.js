/**
 * @name	DateBox
 * @package core.html.easyui.form
 * @desc	日期框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.DateBox(String id)
 * 
 * @extend	core.html.easyui.form.Combo
 * 
 * @method	Object/core.html.easyui.form.DateBox			currentText()				获取/设置今天按钮
 * 			Object/core.html.easyui.form.DateBox			closeText()					获取/设置关闭按钮
 * 			Object/core.html.easyui.form.DateBox			okText()					获取/设置确认按钮
 * 			Object/core.html.easyui.form.DateBox			buttons()					获取/设置按钮组
 * 			Object/core.html.easyui.form.DateBox			sharedCalendar()			获取/设置日期框索引
 * 			Object/core.html.easyui.form.DateBox			formatter()					获取/设置格式化
 * 			Object/core.html.easyui.form.DateBox			parser()					获取/设置解析
 * 			Object/core.html.easyui.form.DateBox			onSelect()					获取/设置选择事件
 * 			core.html.easyui.form.DateBox					init()						初始化组件模板			
 * 			Object											calendar()					获取日期面板对象
 * 			Object											cloneFrom(String from)		从xx复制
 * 
 * @date	2016年8月30日 13:53:06
 */

core.html.easyui.form.DateBox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.DateBox.superClass.constructor.call(this, id);
		this.panelWidth($.fn.datebox.defaults.panelWidth);
		this.panelHeight($.fn.datebox.defaults.panelHeight);

		/**
		 * 属性
		 */
		/**
		 * 今天按钮
		 */
		var currentText = $.fn.datebox.defaults.currentText;
		/**
		 * 关闭按钮
		 */
		var closeText = $.fn.datebox.defaults.closeText;
		/**
		 * 确认按钮
		 */
		var okText = $.fn.datebox.defaults.okText;
		/**
		 * 按钮组
		 */
		var buttons = $.fn.datebox.defaults.buttons;
		/**
		 * 日期框索引
		 */
		var sharedCalendar = $.fn.datebox.defaults.sharedCalendar;
		/**
		 * 格式化
		 */
		var formatter = $.fn.datebox.defaults.formatter;
		/**
		 * 解析
		 */
		var parser = $.fn.datebox.defaults.parser;

		/**
		 * 事件
		 */
		/**
		 * 选择事件
		 */
		var onSelect = $.fn.datebox.defaults.onSelect;

		/**
		 * 获取/设置今天按钮
		 * 
		 * @param currentText
		 */
		this.currentText = function() {

			switch (arguments.length) {
			case 0:
				return currentText;
			default:
				currentText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置关闭按钮
		 * 
		 * @param closeText
		 */
		this.closeText = function() {

			switch (arguments.length) {
			case 0:
				return closeText;
			default:
				closeText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置确认按钮
		 * 
		 * @param okText
		 */
		this.okText = function() {

			switch (arguments.length) {
			case 0:
				return okText;
			default:
				okText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按钮组
		 * 
		 * @param buttons
		 */
		this.buttons = function() {

			switch (arguments.length) {
			case 0:
				return buttons;
			default:
				buttons = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置日期框索引
		 * 
		 * @param sharedCalendar
		 */
		this.sharedCalendar = function() {

			switch (arguments.length) {
			case 0:
				return sharedCalendar;
			default:
				sharedCalendar = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置格式化
		 * 
		 * @param formatter
		 */
		this.formatter = function() {

			switch (arguments.length) {
			case 0:
				return formatter;
			default:
				formatter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置解析
		 * 
		 * @param parser
		 */
		this.parser = function() {

			switch (arguments.length) {
			case 0:
				return parser;
			default:
				parser = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置选择事件
		 * 
		 * @param onSelect
		 */
		this.onSelect = function() {

			switch (arguments.length) {
			case 0:
				return onSelect;
			default:
				onSelect = arguments[0];
				return this;
			}
		};
	};
	// 继承文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.Combo);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.DateBox}
	 */
	Constructor.prototype.init = function() {
				
		// 校验ID个数
		var idLength = $("[id='" + this.id() + "']").length;
		if (idLength === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.DateBox", "参数异常", "div(id:" + this.id() + ")不存在.");
		} else if (idLength > 1) {
			new core.lang.Warning(this, "core.html.easyui.form.DateBox", "参数警告", "div(id:" + this.id() + ")存在多个.");
		}
		
		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 参数配置
		$jQuery.datebox({
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
			// TextBox继承属性
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
			// Combo继承属性
			panelWidth : this.panelWidth(),
			panelHeight : this.panelHeight(),
			panelMinWidth : this.panelMinWidth(),
			panelMaxWidth : this.panelMaxWidth(),
			panelMinHeight : this.panelMinHeight(),
			panelMaxHeight : this.panelMaxHeight(),
			panelAlign : this.panelAlign(),
			multiple : this.multiple(),
			selectOnNavigation : this.selectOnNavigation(),
			separator : this.separator(),
			hasDownArrow : this.hasDownArrow(),
			keyHandler : this.keyHandler(),
			// 属性
			currentText : this.currentText(),
			closeText : this.closeText(),
			okText : this.okText(),
			buttons : this.buttons(),
			sharedCalendar : this.sharedCalendar(),
			formatter : this.formatter(),
			parser : this.parser(),

			// 事件
			// Validate继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Combo继承事件
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel(),
			// 事件
			onSelect : this.onSelect()
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

		return $("#" + this.id()).datebox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).datebox("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).datebox("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).datebox("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).datebox("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).datebox("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).datebox("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).datebox("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).datebox("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).datebox("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).datebox("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).datebox("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).datebox("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).datebox("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).datebox("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).datebox("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).datebox("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).datebox("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).datebox("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).datebox("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).datebox("getIcon", index);
	};

	/**
	 * Combo继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.panel = function() {

		return $("#" + this.id()).datebox("panel");
	};

	/**
	 * 显示面板
	 * 
	 * @returns
	 */
	Constructor.prototype.showPanel = function() {

		return $("#" + this.id()).datebox("showPanel");
	};

	/**
	 * 隐藏面板
	 * 
	 * @returns
	 */
	Constructor.prototype.hidePanel = function() {

		return $("#" + this.id()).datebox("hidePanel");
	};

	/**
	 * 获取值集合
	 * 
	 * @returns
	 */
	Constructor.prototype.getValues = function() {

		return $("#" + this.id()).datebox("getValues");
	};

	/**
	 * 设置值集合
	 * 
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return $("#" + this.id()).datebox("setValues", values);
	};

	/**
	 * 方法
	 */
	/**
	 * 获取日期面板对象
	 */
	Constructor.prototype.calendar = function() {

		return $("#" + this.id()).datebox("calendar");
	};

	/**
	 * 从xx复制
	 * 
	 * @param from
	 */
	Constructor.prototype.cloneFrom = function(from) {

		return $("#" + this.id()).datebox("cloneFrom");
	};

	// 返回构造函数
	return Constructor;
})();