/**
 * @name	NumberBox
 * @package core.html.easyui.form
 * @desc	数字框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.NumberBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 
 * @method	继承core.html.easyui.form.NumberBox所有方法
 * 			number/core.html.easyui.form.NumberBox			min(number min)								获取/设置最小值
 * 			number/core.html.easyui.form.NumberBox			max(number max)								获取/设置最大值
 * 			number/core.html.easyui.form.NumberBox			precision(number precision)					获取/设置精度
 * 			string/core.html.easyui.form.NumberBox			decimalSeparator(string decimalSeparator)	获取/设置分隔符
 * 			string/core.html.easyui.form.NumberBox			groupSeparator(string groupSeparator)		获取/设置分组分隔符
 * 			string/core.html.easyui.form.NumberBox			prefix(string prefix)						获取/设置前缀字符串
 * 			string/core.html.easyui.form.NumberBox			suffix(string suffix)						获取/设置后缀字符串
 * 			function/core.html.easyui.form.NumberBox		filter(function filter)						获取/设置过滤
 * 			function/core.html.easyui.form.NumberBox		formatter(function formatter)				获取/设置格式化
 * 			function/core.html.easyui.form.NumberBox		parser(function parser)						获取/设置解析
 * 			core.html.easyui.form.NumberBox					init()										初始化组件模板
 * 			object											options()
 * 			void											destroy()
 * 			void											disable()
 * 			void											enable()
 * 			void											fix()
 * 			void											setValue(string value)
 * 			string											getValue()
 * 			void											clear()						
 * 			void											reset()
 * 
 * @date	2018年5月4日 11:14:00
 */

core.html.easyui.form.NumberBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.NumberBox.superClass.constructor.call(this, arguments[0]);
		// 修改默认参数
		this.disabled($.fn.numberbox.defaults.disabled);
		this.value($.fn.numberbox.defaults.value);
		this.onChange($.fn.numberbox.defaults.onChange);

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
		 * @param min{number}
		 * @returns {number/core.html.easyui.form.NumberBox}
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
		 * @param max{number}
		 * @returns {number/core.html.easyui.form.NumberBox}
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
		 * @param precision{number}
		 * @returns {number/core.html.easyui.form.NumberBox}
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
		 * @param decimalSeparator{string}
		 * @returns {string/core.html.easyui.form.NumberBox}
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
		 * @param groupSeparator{string}
		 * @returns {string/core.html.easyui.form.NumberBox}
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
		 * @param prefix{string}
		 * @returns {string/core.html.easyui.form.NumberBox}
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
		 * @param suffix{string}
		 * @returns {string/core.html.easyui.form.NumberBox}
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
		 * @param filter{function}
		 * @returns {function/core.html.easyui.form.NumberBox}
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
		 * @param formatter{function}
		 * @returns {function/core.html.easyui.form.NumberBox}
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
		 * @param parser{function}
		 * @returns {function/core.html.easyui.form.NumberBox}
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
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.NumberBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.NumberBox", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().numberbox({
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

		return this.$jQuery().numberbox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().numberbox("destroy");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().numberbox("disable");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().numberbox("enable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.fix = function() {

		return this.$jQuery().numberbox("fix");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().numberbox("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getValue = function() {

		return this.$jQuery().numberbox("getValue");
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().numberbox("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return this.$jQuery().numberbox("reset");
	};

	// 返回构造函数
	return Constructor;
})();