/**
 * @name	DateTimeBox
 * @package core.html.easyui.form
 * @desc	日期时间框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.DateTimeBox(String id)
 * 
 * @method	继承core.html.easyui.form.DateBox所有方法
 * 			Object/core.html.easyui.form.DateTimeBox		spinnerWidth()			获取/设置spinner宽度
 * 			Object/core.html.easyui.form.DateTimeBox		showSeconds()			获取/设置是否显示秒信息
 * 			Object/core.html.easyui.form.DateTimeBox		timeSeparator()			获取/设置时间分割符
 * 			core.html.easyui.form.DateTimeBox				init()					初始化组件模板
 * 			Object											spinner()				获取spinner对象
 * 
 * @date	2016年8月31日 10:44:02
 */

core.html.easyui.form.DateTimeBox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.DateTimeBox.superClass.constructor.call(this, id);
		this.buttons($.fn.datetimebox.defaults.buttons);
		this.formatter($.fn.datetimebox.defaults.formatter);
		this.parser($.fn.datetimebox.defaults.parser);

		/**
		 * 属性
		 */
		/**
		 * spinner宽度
		 */
		var spinnerWidth = $.fn.datetimebox.defaults.spinnerWidth;
		/**
		 * 是否显示秒信息
		 */
		var showSeconds = $.fn.datetimebox.defaults.showSeconds;
		/**
		 * 时间分割符
		 */
		var timeSeparator = $.fn.datetimebox.defaults.timeSeparator;

		/**
		 * 获取/设置spinner宽度
		 * 
		 * @param spinnerWidth
		 */
		this.spinnerWidth = function() {

			switch (arguments.length) {
			case 0:
				return spinnerWidth;
			default:
				spinnerWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否显示秒信息
		 * 
		 * @param showSeconds
		 */
		this.showSeconds = function() {

			switch (arguments.length) {
			case 0:
				return showSeconds;
			default:
				showSeconds = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置时间分割符
		 * 
		 * @param timeSeparator
		 */
		this.timeSeparator = function() {

			switch (arguments.length) {
			case 0:
				return timeSeparator;
			default:
				timeSeparator = arguments[0];
				return this;
			}
		};
	};
	// 继承日期框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.DateBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.DateTimeBox}
	 */
	Constructor.prototype.init = function() {
				
		// 校验ID个数
		var idLength = $("[id='" + this.id() + "']").length;
		if (idLength === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.DateTimeBox", "构造参数异常", "DIV(ID:" + this.id()
					+ ")不存在.");
		} else if (idLength > 1) {
			new core.lang.Warning(this, "core.html.easyui.form.DateTimeBox", "构造参数警告", "DIV(ID:" + this.id() + ")存在多个.");
		}
		
		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 参数配置
		$jQuery.datetimebox({
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
			// DateBox继承属性
			currentText : this.currentText(),
			closeText : this.closeText(),
			okText : this.okText(),
			buttons : this.buttons(),
			sharedCalendar : this.sharedCalendar(),
			formatter : this.formatter(),
			parser : this.parser(),
			// 属性
			spinnerWidth : this.spinnerWidth(),
			showSeconds : this.showSeconds(),
			timeSeparator : this.timeSeparator(),

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
			// DateBox继承事件
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

		return $("#" + this.id()).datetimebox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).datetimebox("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).datetimebox("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).datetimebox("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).datetimebox("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).datetimebox("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).datetimebox("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).datetimebox("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).datetimebox("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).datetimebox("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).datetimebox("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).datetimebox("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).datetimebox("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).datetimebox("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).datetimebox("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).datetimebox("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).datetimebox("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).datetimebox("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).datetimebox("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).datetimebox("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).datetimebox("getIcon", index);
	};

	/**
	 * Combo继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.panel = function() {

		return $("#" + this.id()).datetimebox("panel");
	};

	/**
	 * 显示面板
	 * 
	 * @returns
	 */
	Constructor.prototype.showPanel = function() {

		return $("#" + this.id()).datetimebox("showPanel");
	};

	/**
	 * 隐藏面板
	 * 
	 * @returns
	 */
	Constructor.prototype.hidePanel = function() {

		return $("#" + this.id()).datetimebox("hidePanel");
	};

	/**
	 * 获取值集合
	 * 
	 * @returns
	 */
	Constructor.prototype.getValues = function() {

		return $("#" + this.id()).datetimebox("getValues");
	};

	/**
	 * 设置值集合
	 * 
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return $("#" + this.id()).datetimebox("setValues", values);
	};

	/**
	 * DateBox继承方法
	 */
	/**
	 * 获取日期面板对象
	 */
	Constructor.prototype.calendar = function() {

		return $("#" + this.id()).datetimebox("calendar");
	};

	/**
	 * 从xx复制
	 * 
	 * @param from
	 */
	Constructor.prototype.cloneFrom = function(from) {

		return $("#" + this.id()).datetimebox("cloneFrom");
	};

	/**
	 * 方法
	 */
	/**
	 * 获取spinner对象
	 */
	Constructor.prototype.spinner = function() {

		return $("#" + this.id()).datetimebox("spinner");
	};

	// 返回构造函数
	return Constructor;
})();