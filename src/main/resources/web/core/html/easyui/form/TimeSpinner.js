/**
 * @name	TimeSpinner
 * @package core.html.easyui.form
 * @desc	时间微调框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.TimeSpinner(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.Spinner
 * 
 * @method	继承core.html.easyui.form.Spinner所有方法
 * 			string/core.html.easyui.form.TimeSpinner	separator(string separator)			获取/设置分隔符
 * 			boolean/core.html.easyui.form.TimeSpinner	showSeconds(boolean showSeconds)	获取/设置显示秒
 * 			number/core.html.easyui.form.TimeSpinner	highlight(number highlight)			获取/设置高亮
 * 			function/core.html.easyui.form.TimeSpinner	formatter(function formatter)		获取/设置格式化
 * 			function/core.html.easyui.form.TimeSpinner	parser(function parser)				获取/设置解析时间
 * 			array/core.html.easyui.form.TimeSpinner		selections(array selections)		获取/设置突出的部分
 * 			core.html.easyui.form.TimeSpinner			init()								初始化组件模板
 * 			void										options()
 * 			void										setValue(string value)
 * 			number										getHours()							获取小时值
 * 			number										getMinutes()						获取分钟值
 * 			number										getSeconds()						获取秒值
 * 
 * @date	2018年5月4日 14:30:31
 */
core.html.easyui.form.TimeSpinner = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.TimeSpinner.superClass.constructor.call(this, arguments[0]);

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
		 * @param separator{string}
		 * @returns {string/core.html.easyui.form.TimeSpinner}
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
		 * @param showSeconds{boolean}
		 * @returns {boolean/core.html.easyui.form.TimeSpinner}
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
		 * @param highlight{number}
		 * @returns {number/core.html.easyui.form.TimeSpinner}
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
		 * @param formatter{function}
		 * @returns {function/core.html.easyui.form.TimeSpinner}
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
		 * @param parser{function}
		 * @returns {function/core.html.easyui.form.TimeSpinner}
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
		 * @param selections{array}
		 * @returns {array/core.html.easyui.form.TimeSpinner}
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
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.form.Spinner);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.TimeSpinner}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.Spinner", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().timespinner({
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
			// TextBox继承属性
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
	 * 方法
	 */
	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.options = function() {

		return this.$jQuery().timespinner("options");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().timespinner("setValue", value);
	};

	/**
	 * 获取小时值
	 * 
	 * @returns {number}
	 */
	Constructor.prototype.getHours = function() {

		return this.$jQuery().timespinner("getHours");
	};

	/**
	 * 获取分钟值
	 * 
	 * @returns {number}
	 */
	Constructor.prototype.getMinutes = function() {

		return this.$jQuery().timespinner("getMinutes");
	};

	/**
	 * 获取秒值
	 * 
	 * @returns {number}
	 */
	Constructor.prototype.getSeconds = function() {

		return this.$jQuery().timespinner("getSeconds");
	};

	// 返回构造函数
	return Constructor;
})();