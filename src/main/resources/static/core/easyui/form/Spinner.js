/**
 * @name	Spinner
 * @package core.html.easyui.form
 * @desc	微调框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.Spinner(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 
 * @method	继承core.html.easyui.form.TextBox所有方法
 * 			string/core.html.easyui.form.Spinner		min(string min)					获取/设置最小值
 * 			string/core.html.easyui.form.Spinner		max(string max)					获取/设置最大值
 * 			number/core.html.easyui.form.Spinner		increment(number increment)		获取/设置步幅
 * 			string/core.html.easyui.form.Spinner		spinAlign(string spinAlign)		获取/设置位置
 * 			function/core.html.easyui.form.Spinner		spin(function spin)				获取/设置用户点击旋转调用函数
 * 			function/core.html.easyui.form.Spinner		onSpinUp(function onSpinUp)		获取/设置抬起事件
 * 			function/core.html.easyui.form.Spinner		onSpinDown(function onSpinDown)	获取/设置按下事件
 * 			core.html.easyui.form.Spinner				init()							初始化组件模板
 * 			object										options()
 * 			void										destroy()
 * 			void										resize(number width)
 * 			void										enable()
 * 			void										disable()
 * 			string										getValue()
 * 			void										readonly(boolean mode)
 * 			void										setValue(string value)
 * 			void										clear()
 * 			void										reset()
 * 
 * @date	2018年5月4日 14:16:32
 */
core.html.easyui.form.Spinner = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.Spinner.superClass.constructor.call(this, arguments[0]);
		// 修改默认参数
		this.width($.fn.spinner.defaults.width);
		this.height($.fn.spinner.defaults.height);
		this.value($.fn.spinner.defaults.value);
		this.editable($.fn.spinner.defaults.editable);
		this.disabled($.fn.spinner.defaults.disabled);
		this.readonly($.fn.spinner.defaults.readonly);

		/**
		 * 属性
		 */
		/**
		 * 最小值
		 */
		var min = $.fn.spinner.defaults.min;
		/**
		 * 最大值
		 */
		var max = $.fn.spinner.defaults.max;
		/**
		 * 步幅
		 */
		var increment = $.fn.spinner.defaults.increment;
		/**
		 * 位置
		 */
		var spinAlign = $.fn.spinner.defaults.spinAlign;
		/**
		 * 用户点击旋转调用函数
		 */
		var spin = $.fn.spinner.defaults.spin;

		/**
		 * 事件
		 */
		/**
		 * 抬起事件
		 */
		var onSpinUp = $.fn.spinner.defaults.onSpinUp;
		/**
		 * 按下事件
		 */
		var onSpinDown = $.fn.spinner.defaults.onSpinDown;

		/**
		 * 获取/设置最小值
		 * 
		 * @param min{string}
		 * @returns {string/core.html.easyui.form.Spinner}
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
		 * @param max{string}
		 * @returns {string/core.html.easyui.form.Spinner}
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
		 * 获取/设置步幅
		 * 
		 * @param increment{number}
		 * @returns {number/core.html.easyui.form.Spinner}
		 */
		this.increment = function() {

			switch (arguments.length) {
			case 0:
				return increment;
			default:
				increment = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置位置
		 * 
		 * @param spinAlign{string}
		 * @returns {string/core.html.easyui.form.Spinner}
		 */
		this.spinAlign = function() {

			switch (arguments.length) {
			case 0:
				return spinAlign;
			default:
				spinAlign = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置用户点击旋转调用函数
		 * 
		 * @param spin{function}
		 * @returns {function/core.html.easyui.form.Spinner}
		 */
		this.spin = function() {

			switch (arguments.length) {
			case 0:
				return spin;
			default:
				spin = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置抬起事件
		 * 
		 * @param onSpinUp{function}
		 * @returns {function/core.html.easyui.form.Spinner}
		 */
		this.onSpinUp = function() {

			switch (arguments.length) {
			case 0:
				return onSpinUp;
			default:
				onSpinUp = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按下事件
		 * 
		 * @param onSpinDown{function}
		 * @returns {function/core.html.easyui.form.Spinner}
		 */
		this.onSpinDown = function() {

			switch (arguments.length) {
			case 0:
				return onSpinDown;
			default:
				onSpinDown = arguments[0];
				return this;
			}
		};
	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.Spinner}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.Spinner", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().spinner({
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
			increment : this.increment(),
			spinAlign : this.spinAlign(),
			spin : this.spin(),

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
			// 事件
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

		return this.$jQuery().spinner("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().spinner("destroy");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width{number}
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return this.$jQuery().spinner("resize", width);
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().spinner("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().spinner("disable");
	};

	/**
	 * 获取值
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getValue = function() {

		return this.$jQuery().spinner("getValue");
	};

	/**
	 * 只读
	 * 
	 * @param mode{boolean}
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return this.$jQuery().spinner("readonly", mode);
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().spinner("setValue", value);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().spinner("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return this.$jQuery().spinner("reset");
	};

	// 返回构造函数
	return Constructor;
})();