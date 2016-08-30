/**
 * @name	NumberBox
 * @package	core.html.easyui.form
 * @desc	数字框模板
 * @type	类
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
		var min = null;
		/**
		 * 最大值
		 */
		var max = null;
		/**
		 * 精度
		 */
		var precision = 0;
		/**
		 * 分隔符
		 */
		var decimalSeparator = ".";
		/**
		 * 分组分隔符
		 */
		var groupSeparator = "";
		/**
		 * 前缀字符串
		 */
		var prefix = "";
		/**
		 * 后缀字符串
		 */
		var suffix = "";
		/**
		 * 过滤
		 */
		var filter = function(e) {

		};
		/**
		 * 格式化
		 */
		var formatter = function(value) {

			return value;
		};
		/**
		 * 解析
		 */
		var parser = function(s) {

		};

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

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.NumberBox", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.numberbox({
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
			min : this.min(),
			max : this.max(),
			precision : this.precision(),
			decimalSeparator : this.decimalSeparator(),
			groupSeparator : this.groupSeparator(),
			prefix : this.prefix(),
			suffix : this.suffix(),
			filter : this.filter(),
			formatter : this.formatter(),
			// parser : this.parser(),

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

		return $("#" + this.id()).numberbox("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).numberbox("destroy");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).numberbox("validate");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).numberbox("isValid");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).numberbox("enableValidation");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).numberbox("disableValidation");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).numberbox("resetValidation");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).numberbox("enable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).numberbox("disable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).numberbox("readonly", mode);
	};

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
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).numberbox("resize", width);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).numberbox("clear");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).numberbox("reset");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).numberbox("initValue", value);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).numberbox("setText", text);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).numberbox("getText");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).numberbox("setValue", value);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).numberbox("getValue");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).numberbox("getIcon", index);
	};

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