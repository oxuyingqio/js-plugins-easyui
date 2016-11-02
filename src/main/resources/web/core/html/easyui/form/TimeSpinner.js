/**
 * @name	TimeSpinner
 * @package core.html.easyui.form
 * @desc	时间微调框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.TimeSpinner(String id)
 * 
 * @extend	core.html.easyui.form.Spinner
 * 
 * @method	String/core.html.easyui.form.TimeSpinner		separator()			获取/设置分隔符
 * 			Boolean/core.html.easyui.form.TimeSpinner		showSeconds()		获取/设置显示秒
 * 			Object/core.html.easyui.form.TimeSpinner		highlight()			获取/设置高亮
 * 			Object/core.html.easyui.form.TimeSpinner		formatter()			获取/设置格式化
 * 			Object/core.html.easyui.form.TimeSpinner		parser()			获取/设置解析时间
 * 			Object/core.html.easyui.form.TimeSpinner		selections()		获取/设置突出的部分
 * 			core.html.easyui.form.TimeSpinner				init()				初始化组件模板
 * 			Object											getHours()			获取小时值
 * 			Object											getMinutes()		获取分钟值
 * 			Object											getSeconds()		获取秒值
 * 
 * @date	2016年9月1日 10:28:12
 */

core.html.easyui.form.TimeSpinner = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.TimeSpinner.superClass.constructor.call(this, id);
		this.spin($.fn.timespinner.defaults.spin);

		/**
		 * 属性
		 */
		/**
		 * 分隔符
		 */
		var separator = $.fn.timespinner.defaults.separator;
		/**
		 * 显示秒
		 */
		var showSeconds = $.fn.timespinner.defaults.showSeconds;
		/**
		 * 高亮
		 */
		var highlight = $.fn.timespinner.defaults.highlight;
		/**
		 * 格式化
		 */
		var formatter = $.fn.timespinner.defaults.formatter;
		/**
		 * 解析时间
		 */
		var parser = $.fn.timespinner.defaults.parser;
		/**
		 * 突出的部分
		 */
		var selections = $.fn.timespinner.defaults.selections;

		/**
		 * 获取/设置分隔符
		 * 
		 * @param separator
		 */
		this.separator = function() {

			switch (arguments.length) {
			case 0:
				return separator;
			default:
				separator = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示秒
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
		 * 获取/设置高亮
		 * 
		 * @param highlight
		 */
		this.highlight = function() {

			switch (arguments.length) {
			case 0:
				return highlight;
			default:
				highlight = arguments[0];
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
		 * 获取/设置解析时间
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
		 * 获取/设置突出的部分
		 * 
		 * @param selections
		 */
		this.selections = function() {

			switch (arguments.length) {
			case 0:
				return selections;
			default:
				selections = arguments[0];
				return this;
			}
		};
	};
	// 继承微调框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.Spinner);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.TimeSpinner}
	 */
	Constructor.prototype.init = function() {

		// 校验ID个数
		var idLength = $("[id='" + this.id() + "']").length;
		if (idLength === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.TimeSpinner", "构造参数异常", "DIV(ID:" + this.id()
					+ ")不存在.");
		} else if (idLength > 1) {
			new core.lang.Warning(this, "core.html.easyui.form.TimeSpinner", "构造参数警告", "DIV(ID:" + this.id() + ")存在多个.");
		}
		
		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 参数配置
		$jQuery.timespinner({
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
			// 属性
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

		return $("#" + this.id()).timespinner("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).timespinner("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).timespinner("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).timespinner("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).timespinner("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).timespinner("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).timespinner("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).timespinner("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).timespinner("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).timespinner("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).timespinner("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).timespinner("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).timespinner("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).timespinner("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).timespinner("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).timespinner("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).timespinner("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).timespinner("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).timespinner("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).timespinner("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).timespinner("getIcon", index);
	};

	/**
	 * 方法
	 */
	/**
	 * 获取小时值
	 * 
	 * @returns
	 */
	Constructor.prototype.getHours = function() {

		return $("#" + this.id()).timespinner("getHours");
	};

	/**
	 * 获取分钟值
	 * 
	 * @returns
	 */
	Constructor.prototype.getMinutes = function() {

		return $("#" + this.id()).timespinner("getMinutes");
	};

	/**
	 * 获取秒值
	 * 
	 * @returns
	 */
	Constructor.prototype.getSeconds = function() {

		return $("#" + this.id()).timespinner("getSeconds");
	};

	// 返回构造函数
	return Constructor;
})();