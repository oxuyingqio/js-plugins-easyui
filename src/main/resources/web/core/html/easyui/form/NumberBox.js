/**
 * @name	NumberBox
 * @package core.html.easyui.form
 * @desc	数字框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.NumberBox(String id)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 
 * @method	Object/core.html.easyui.form.NumberBox			min()						获取/设置最小值
 * 			Object/core.html.easyui.form.NumberBox			max()						获取/设置最大值
 * 			Object/core.html.easyui.form.NumberBox			precision()					获取/设置精度
 * 			Object/core.html.easyui.form.NumberBox			decimalSeparator()			获取/设置分隔符
 * 			Object/core.html.easyui.form.NumberBox			groupSeparator()			获取/设置分组分隔符
 * 			Object/core.html.easyui.form.NumberBox			prefix()					获取/设置前缀字符串
 * 			Object/core.html.easyui.form.NumberBox			suffix()					获取/设置后缀字符串
 * 			Object/core.html.easyui.form.NumberBox			filter()					获取/设置过滤
 * 			Object/core.html.easyui.form.NumberBox			formatter()					获取/设置格式化
 * 			Object/core.html.easyui.form.NumberBox			parser()					获取/设置解析
 * 			core.html.easyui.form.NumberBox					init()						初始化组件模板
 * 			Object											fix()						
 * 
 * @date	2016年8月30日 11:26:43
 */

core.html.easyui.form.NumberBox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.NumberBox.superClass.constructor.call(this, id);

		/**
		 * 属性
		 */
		/**
		 * 最小值
		 */
		var min = $.fn.numberbox.defaults.min;
		/**
		 * 最大值
		 */
		var max = $.fn.numberbox.defaults.max;
		/**
		 * 精度
		 */
		var precision = $.fn.numberbox.defaults.precision;
		/**
		 * 分隔符
		 */
		var decimalSeparator = $.fn.numberbox.defaults.decimalSeparator;
		/**
		 * 分组分隔符
		 */
		var groupSeparator = $.fn.numberbox.defaults.groupSeparator;
		/**
		 * 前缀字符串
		 */
		var prefix = $.fn.numberbox.defaults.prefix;
		/**
		 * 后缀字符串
		 */
		var suffix = $.fn.numberbox.defaults.suffix;
		/**
		 * 过滤
		 */
		var filter = $.fn.numberbox.defaults.filter;
		/**
		 * 格式化
		 */
		var formatter = $.fn.numberbox.defaults.formatter;
		/**
		 * 解析
		 */
		var parser = $.fn.numberbox.defaults.parser;

		/**
		 * 获取/设置最小值
		 * 
		 * @param min
		 */
		this.min = function() {

			switch (arguments.length) {
			case 0:
				return min;
			default:
				min = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置最大值
		 * 
		 * @param max
		 */
		this.max = function() {

			switch (arguments.length) {
			case 0:
				return max;
			default:
				max = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置精度
		 * 
		 * @param precision
		 */
		this.precision = function() {

			switch (arguments.length) {
			case 0:
				return precision;
			default:
				precision = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置分隔符
		 * 
		 * @param decimalSeparator
		 */
		this.decimalSeparator = function() {

			switch (arguments.length) {
			case 0:
				return decimalSeparator;
			default:
				decimalSeparator = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置分组分隔符
		 * 
		 * @param groupSeparator
		 */
		this.groupSeparator = function() {

			switch (arguments.length) {
			case 0:
				return groupSeparator;
			default:
				groupSeparator = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置前缀字符串
		 * 
		 * @param prefix
		 */
		this.prefix = function() {

			switch (arguments.length) {
			case 0:
				return prefix;
			default:
				prefix = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置后缀字符串
		 * 
		 * @param suffix
		 */
		this.suffix = function() {

			switch (arguments.length) {
			case 0:
				return suffix;
			default:
				suffix = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置过滤
		 * 
		 * @param filter
		 */
		this.filter = function() {

			switch (arguments.length) {
			case 0:
				return filter;
			default:
				filter = arguments[0];
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
	};
	// 继承文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.NumberBox}
	 */
	Constructor.prototype.init = function() {

		// 校验ID个数
		var idLength = $("[id='" + this.id() + "']").length;
		if (idLength === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.NumberBox", "构造参数异常", "DIV(ID:" + this.id() + ")不存在.");
		} else if (idLength > 1) {
			new core.lang.Warning(this, "core.html.easyui.form.NumberBox", "构造参数警告", "DIV(ID:" + this.id() + ")存在多个.");
		}
		
		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 参数配置
		$jQuery.numberbox({
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
			// 属性
			min : this.min(),
			max : this.max(),
			precision : this.precision(),
			decimalSeparator : this.decimalSeparator(),
			groupSeparator : this.groupSeparator(),
			prefix : this.prefix(),
			suffix : this.suffix(),
			filter : this.filter(),
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

		return $("#" + this.id()).numberbox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).numberbox("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).numberbox("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).numberbox("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).numberbox("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).numberbox("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).numberbox("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).numberbox("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).numberbox("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).numberbox("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).numberbox("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).numberbox("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).numberbox("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).numberbox("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).numberbox("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).numberbox("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).numberbox("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).numberbox("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).numberbox("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).numberbox("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).numberbox("getIcon", index);
	};

	/**
	 * 方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.fix = function() {

		return $("#" + this.id()).numberbox("fix");
	};

	// 返回构造函数
	return Constructor;
})();