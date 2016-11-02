/**
 * @name	DateTimeSpinner
 * @package core.html.easyui.form
 * @desc	日期时间微调框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.DateTimeSpinner(String id)
 * 
 * @extend	core.html.easyui.form.TimeSpinner
 * 
 * @method	core.html.easyui.form.DateTimeSpinner		init()		初始化组件模板
 * 
 * @date	2016年9月1日 10:41:10
 */

core.html.easyui.form.DateTimeSpinner = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.DateTimeSpinner.superClass.constructor.call(this, id);
		this.spin($.fn.datetimespinner.defaults.spin);
		this.separator($.fn.datetimespinner.defaults.separator);
		this.showSeconds($.fn.datetimespinner.defaults.showSeconds);
		this.formatter($.fn.datetimespinner.defaults.formatter);
		this.parser($.fn.datetimespinner.defaults.parser);
		this.selections($.fn.datetimespinner.defaults.selections);
	};
	// 继承时间微调框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.TimeSpinner);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.DateTimeSpinner}
	 */
	Constructor.prototype.init = function() {

		// 校验ID个数
		var idLength = $("[id='" + this.id() + "']").length;
		if (idLength === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.DateTimeSpinner", "构造参数异常", "DIV(ID:" + this.id()
					+ ")不存在.");
		} else if (idLength > 1) {
			new core.lang.Warning(this, "core.html.easyui.form.DateTimeSpinner", "构造参数警告", "DIV(ID:" + this.id()
					+ ")存在多个.");
		}
		
		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 参数配置
		$jQuery.datetimespinner({
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
			// Spinner继承属性
			min : this.min(),
			max : this.max(),
			increment : this.increment(),
			spinAlign : this.spinAlign(),
			spin : this.spin(),
			// TimeSpinner继承属性
			separator : this.separator(),
			showSeconds : this.showSeconds(),
			highlight : this.highlight(),
			formatter : this.formatter(),
			parser : this.parser(),
			selections : this.selections(),

			// 事件
			// Validate继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Spinner继承事件
			onSpinUp : this.onSpinUp(),
			onSpinDown : this.onSpinDown()
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

		return $("#" + this.id()).datetimespinner("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).datetimespinner("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).datetimespinner("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).datetimespinner("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).datetimespinner("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).datetimespinner("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).datetimespinner("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).datetimespinner("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).datetimespinner("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).datetimespinner("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).datetimespinner("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).datetimespinner("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).datetimespinner("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).datetimespinner("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).datetimespinner("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).datetimespinner("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).datetimespinner("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).datetimespinner("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).datetimespinner("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).datetimespinner("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).datetimespinner("getIcon", index);
	};

	/**
	 * TimeSpinner继承方法
	 */
	/**
	 * 获取小时值
	 * 
	 * @returns
	 */
	Constructor.prototype.getHours = function() {

		return $("#" + this.id()).datetimespinner("getHours");
	};

	/**
	 * 获取分钟值
	 * 
	 * @returns
	 */
	Constructor.prototype.getMinutes = function() {

		return $("#" + this.id()).datetimespinner("getMinutes");
	};

	/**
	 * 获取秒值
	 * 
	 * @returns
	 */
	Constructor.prototype.getSeconds = function() {

		return $("#" + this.id()).datetimespinner("getSeconds");
	};

	// 返回构造函数
	return Constructor;
})();