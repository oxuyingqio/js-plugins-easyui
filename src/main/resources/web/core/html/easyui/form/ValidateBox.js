/**
 * @name	ValidateBox
 * @package core.html.easyui.form
 * @desc	校验文本框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.ValidateBox(String id)
 * 
 * @method	Object/core.html.easyui.form.ValidateBox			id()					获取/设置ID
 * 			Object/core.html.easyui.form.ValidateBox			required()				获取/设置是否校验
 * 			Object/core.html.easyui.form.ValidateBox			validType()				获取/设置校验方式
 * 			Object/core.html.easyui.form.ValidateBox			delay()					获取/设置校验延迟时间
 * 			Object/core.html.easyui.form.ValidateBox			missingMessage()		获取/设置字段为空提示信息
 * 			Object/core.html.easyui.form.ValidateBox			invalidMessage()		获取/设置校验提示信息
 * 			Object/core.html.easyui.form.ValidateBox			tipPosition()			获取/设置工具提示条位置
 * 			Object/core.html.easyui.form.ValidateBox			deltaX()				获取/设置水平位置偏移值
 * 			Object/core.html.easyui.form.ValidateBox			novalidate()			获取/设置是否关闭校验
 * 			Object/core.html.easyui.form.ValidateBox			editable()				获取/设置是否可输
 * 			Object/core.html.easyui.form.ValidateBox			disabled()				获取/设置是否可用
 * 			Object/core.html.easyui.form.ValidateBox			readonly()				获取/设置是否只读
 * 			Object/core.html.easyui.form.ValidateBox			validateOnCreate()		获取/设置是否创建时验证
 * 			Object/core.html.easyui.form.ValidateBox			validateOnBlur()		获取/设置是否失去焦点时验证
 * 			Object/core.html.easyui.form.ValidateBox			onBeforeValidate()		获取/设置验证前事件
 * 			Object/core.html.easyui.form.ValidateBox			onValidate()			获取/设置验证事件
 * 			core.html.easyui.form.ValidateBox					init()					初始化组件模板
 * 			Object												options()				
 * 			Object												destroy()				销毁组件
 * 			Object												validate()				校验
 * 			Object												isValid()				判断是否校验通过
 * 			Object												enableValidation()		启用校验
 * 			Object												disableValidation()		禁用校验
 * 			Object												resetValidation()		重置校验
 * 			Object												enable()				启用
 * 			Object												disable()				禁用
 * 			Object												readonly()				只读
 * 
 * @date	2016年8月29日 16:39:29
 */

core.html.easyui.form.ValidateBox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(_id) {

		// 校验ID
		if (_id === null || _id === undefined) {
			new core.lang.Exception(this, "core.html.easyui.form.ValidateBox", "构造参数异常", "ID属性不能为空");
		}

		/**
		 * 属性
		 */
		/**
		 * ID
		 */
		var id = _id;
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
		 * 水平位置偏移值
		 */
		var deltaX = $.fn.validatebox.defaults.deltaX;
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
		 * 获取/设置ID
		 * 
		 * @param id
		 */
		this.id = function() {

			switch (arguments.length) {
			case 0:
				return id;
			default:
				id = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否校验
		 * 
		 * @param required
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
		 * @param validType
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
		 * @param delay
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
		 * @param missingMessage
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
		 * @param invalidMessage
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
		 * @param tipPosition
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
		 * 获取/设置水平位置偏移值
		 * 
		 * @param deltaX
		 */
		this.deltaX = function() {

			switch (arguments.length) {
			case 0:
				return deltaX;
			default:
				deltaX = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否关闭校验
		 * 
		 * @param novalidate
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
		 * @param editable
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
		 * @param disabled
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
		 * @param readonly
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
		 * @param validateOnCreate
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
		 * @param validateOnBlur
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
		 * @param onBeforeValidate
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
		 * @param onValidate
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

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.ValidateBox}
	 */
	Constructor.prototype.init = function() {
				
		// 校验ID个数
		var idLength = $("[id='" + this.id() + "']").length;
		if (idLength === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.ValidateBox", "构造参数异常", "DIV(ID:" + this.id()
					+ ")不存在.");
		} else if (idLength > 1) {
			new core.lang.Warning(this, "core.html.easyui.form.ValidateBox", "构造参数警告", "DIV(ID:" + this.id() + ")存在多个.");
		}
		
		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 参数配置
		$jQuery.validatebox({
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
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).validatebox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).validatebox("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).validatebox("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).validatebox("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).validatebox("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).validatebox("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).validatebox("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).validatebox("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).validatebox("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).validatebox("readonly", mode);
	};

	// 返回构造函数
	return Constructor;
})();