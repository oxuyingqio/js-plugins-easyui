/**
 * @name	ValidateBox
 * @package core.html.easyui.form
 * @desc	校验文本框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.ValidateBox(string id/object jQuery)
 * 
 * @method	继承core.html.easyui.base.Tooltip所有方法
 * 			boolean/core.html.easyui.form.ValidateBox		required(boolean required)					获取/设置是否校验
 * 			string/core.html.easyui.form.ValidateBox		validType(string validType)					获取/设置校验方式
 * 			number/core.html.easyui.form.ValidateBox		delay(number delay)							获取/设置校验延迟时间
 * 			string/core.html.easyui.form.ValidateBox		missingMessage(string missingMessage)		获取/设置字段为空提示信息
 * 			string/core.html.easyui.form.ValidateBox		invalidMessage(string invalidMessage)		获取/设置校验提示信息
 * 			string/core.html.easyui.form.ValidateBox		tipPosition(string tipPosition)				获取/设置工具提示条位置
 * 			boolean/core.html.easyui.form.ValidateBox		novalidate(boolean novalidate)				获取/设置是否关闭校验
 * 			boolean/core.html.easyui.form.ValidateBox		editable(boolean editable)					获取/设置是否可输
 * 			boolean/core.html.easyui.form.ValidateBox		disabled(boolean disabled)					获取/设置是否可用
 * 			boolean/core.html.easyui.form.ValidateBox		readonly(boolean readonly)					获取/设置是否只读
 * 			boolean/core.html.easyui.form.ValidateBox		validateOnCreate(boolean validateOnCreate)	获取/设置是否创建时验证
 * 			boolean/core.html.easyui.form.ValidateBox		validateOnBlur(boolean validateOnBlur)		获取/设置是否失去焦点时验证
 * 			function/core.html.easyui.form.ValidateBox		onBeforeValidate(function onBeforeValidate)	获取/设置验证前事件
 * 			function/core.html.easyui.form.ValidateBox		onValidate(function onValidate)				获取/设置验证事件
 * 			core.html.easyui.form.ValidateBox				init()										初始化组件模板
 * 			object											options()				
 * 			void											destroy()									销毁组件
 * 			object											validate()									校验
 * 			object											isValid()									判断是否校验通过
 * 			void											enableValidation()							启用校验
 * 			void											disableValidation()							禁用校验
 * 			void											resetValidation()							重置校验
 * 			void											enable()									启用
 * 			void											disable()									禁用
 * 			void											readonly(boolean mode)						只读
 * 
 * @date	2018年4月23日 15:22:05
 */
core.html.easyui.form.ValidateBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.ValidateBox.superClass.constructor.call(this, arguments[0]);
		// 默认参数修改
		this.deltaX($.fn.validatebox.defaults.deltaX);

		/**
		 * 属性
		 */
		/**
		 * 是否校验
		 */
		var required = $.fn.validatebox.defaults.required;
		/**
		 * 校验方式
		 */
		var validType = $.fn.validatebox.defaults.validType;
		/**
		 * 校验延迟时间
		 */
		var delay = $.fn.validatebox.defaults.delay;
		/**
		 * 字段为空提示信息
		 */
		var missingMessage = $.fn.validatebox.defaults.missingMessage;
		/**
		 * 校验提示信息
		 */
		var invalidMessage = $.fn.validatebox.defaults.invalidMessage;
		/**
		 * 工具提示条位置
		 */
		var tipPosition = $.fn.validatebox.defaults.tipPosition;
		/**
		 * 是否关闭校验
		 */
		var novalidate = $.fn.validatebox.defaults.novalidate;
		/**
		 * 是否可输
		 */
		var editable = $.fn.validatebox.defaults.editable;
		/**
		 * 是否可用
		 */
		var disabled = $.fn.validatebox.defaults.disabled;
		/**
		 * 是否只读
		 */
		var readonly = $.fn.validatebox.defaults.readonly;
		/**
		 * 是否创建时验证
		 */
		var validateOnCreate = $.fn.validatebox.defaults.validateOnCreate;
		/**
		 * 是否失去焦点时验证
		 */
		var validateOnBlur = $.fn.validatebox.defaults.validateOnBlur;

		/**
		 * 事件
		 */
		/**
		 * 验证前事件
		 */
		var onBeforeValidate = $.fn.validatebox.defaults.onBeforeValidate;
		/**
		 * 验证事件
		 */
		var onValidate = $.fn.validatebox.defaults.onValidate;

		/**
		 * 获取/设置是否校验
		 * 
		 * @param required{boolean}
		 * @returns {boolean/core.html.easyui.form.ValidateBox}
		 */
		this.required = function() {

			switch (arguments.length) {
			case 0:
				return required;
			default:
				required = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置校验方式
		 * 
		 * @param validType{string}
		 * @returns {string/core.html.easyui.form.ValidateBox}
		 */
		this.validType = function() {

			switch (arguments.length) {
			case 0:
				return validType;
			default:
				validType = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置校验延迟时间
		 * 
		 * @param delay{number}
		 * @returns {number/core.html.easyui.form.ValidateBox}
		 */
		this.delay = function() {

			switch (arguments.length) {
			case 0:
				return delay;
			default:
				delay = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置字段为空提示信息
		 * 
		 * @param missingMessage{string}
		 * @returns {string/core.html.easyui.form.ValidateBox}
		 */
		this.missingMessage = function() {

			switch (arguments.length) {
			case 0:
				return missingMessage;
			default:
				missingMessage = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置校验提示信息
		 * 
		 * @param invalidMessage{string}
		 * @returns {string/core.html.easyui.form.ValidateBox}
		 */
		this.invalidMessage = function() {

			switch (arguments.length) {
			case 0:
				return invalidMessage;
			default:
				invalidMessage = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置工具提示条位置
		 * 
		 * @param tipPosition{string}
		 * @returns {string/core.html.easyui.form.ValidateBox}
		 */
		this.tipPosition = function() {

			switch (arguments.length) {
			case 0:
				return tipPosition;
			default:
				tipPosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否关闭校验
		 * 
		 * @param novalidate{boolean}
		 * @returns {boolean/core.html.easyui.form.ValidateBox}
		 */
		this.novalidate = function() {

			switch (arguments.length) {
			case 0:
				return novalidate;
			default:
				novalidate = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否可输
		 * 
		 * @param editable{boolean}
		 * @returns {boolean/core.html.easyui.form.ValidateBox}
		 */
		this.editable = function() {

			switch (arguments.length) {
			case 0:
				return editable;
			default:
				editable = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否可用
		 * 
		 * @param disabled{boolean}
		 * @returns {boolean/core.html.easyui.form.ValidateBox}
		 */
		this.disabled = function() {

			switch (arguments.length) {
			case 0:
				return disabled;
			default:
				disabled = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否只读
		 * 
		 * @param readonly{boolean}
		 * @returns {boolean/core.html.easyui.form.ValidateBox}
		 */
		this.readonly = function() {

			switch (arguments.length) {
			case 0:
				return readonly;
			default:
				readonly = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否创建时验证
		 * 
		 * @param validateOnCreate{boolean}
		 * @returns {boolean/core.html.easyui.form.ValidateBox}
		 */
		this.validateOnCreate = function() {

			switch (arguments.length) {
			case 0:
				return validateOnCreate;
			default:
				validateOnCreate = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否失去焦点时验证
		 * 
		 * @param validateOnBlur{boolean}
		 * @returns {boolean/core.html.easyui.form.ValidateBox}
		 */
		this.validateOnBlur = function() {

			switch (arguments.length) {
			case 0:
				return validateOnBlur;
			default:
				validateOnBlur = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置验证前事件
		 * 
		 * @param onBeforeValidate{function}
		 * @returns {function/core.html.easyui.form.ValidateBox}
		 */
		this.onBeforeValidate = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeValidate;
			default:
				onBeforeValidate = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置验证事件
		 * 
		 * @param onValidate{function}
		 * @returns {function/core.html.easyui.form.ValidateBox}
		 */
		this.onValidate = function() {

			switch (arguments.length) {
			case 0:
				return onValidate;
			default:
				onValidate = arguments[0];
				return this;
			}
		};
	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.base.Tooltip);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.ValidateBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.ValidateBox", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().validatebox({
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
			// 属性
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

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// 事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate()
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

		return this.$jQuery().validatebox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().validatebox("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.validate = function() {

		return this.$jQuery().validatebox("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.isValid = function() {

		return this.$jQuery().validatebox("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return this.$jQuery().validatebox("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return this.$jQuery().validatebox("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return this.$jQuery().validatebox("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().validatebox("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().validatebox("disable");
	};

	/**
	 * 只读
	 * 
	 * @param mode{boolean}
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return this.$jQuery().validatebox("readonly", mode);
	};

	// 返回构造函数
	return Constructor;
})();