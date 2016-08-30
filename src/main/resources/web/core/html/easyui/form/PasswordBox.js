/**
 * @name	PasswordBox
 * @package core.html.easyui.form
 * @desc	密码框模板
 * @type	类
 * 
 * @date	2016年8月29日 17:37:49
 */

core.html.easyui.form.PasswordBox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.PasswordBox.superClass.constructor.call(this, id);

		/**
		 * 属性
		 */
		/**
		 * 密码显示字符
		 */
		var passwordChar = "%u25CF";
		/**
		 * 检查间隔时间
		 */
		var checkInterval = 200;
		/**
		 * 延迟转换
		 */
		var lastDelay = 500;
		/**
		 * 是否显示密码明文
		 */
		var revealed = false;
		/**
		 * 是否显示显示密码按钮
		 */
		var showEye = true;

		/**
		 * 获取/设置密码显示字符
		 * 
		 * @param passwordChar
		 */
		this.passwordChar = function() {

			switch (arguments.length) {
			case 0:
				return passwordChar;
			default:
				passwordChar = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置检查间隔时间
		 * 
		 * @param checkInterval
		 */
		this.checkInterval = function() {

			switch (arguments.length) {
			case 0:
				return checkInterval;
			default:
				checkInterval = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置延迟转换
		 * 
		 * @param lastDelay
		 */
		this.lastDelay = function() {

			switch (arguments.length) {
			case 0:
				return lastDelay;
			default:
				lastDelay = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否隐藏密码
		 * 
		 * @param revealed
		 */
		this.revealed = function() {

			switch (arguments.length) {
			case 0:
				return revealed;
			default:
				revealed = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否显示显示密码按钮
		 * 
		 * @param showEye
		 */
		this.showEye = function() {

			switch (arguments.length) {
			case 0:
				return showEye;
			default:
				showEye = arguments[0];
				return this;
			}
		};
	};
	// 继承文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.PasswordBox}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.PasswordBox", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.passwordbox({
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
			passwordChar : this.passwordChar(),
			checkInterval : this.checkInterval(),
			lastDelay : this.lastDelay(),
			revealed : this.revealed(),
			showEye : this.showEye(),

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

		return $("#" + this.id()).passwordbox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).passwordbox("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).passwordbox("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).passwordbox("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).passwordbox("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).passwordbox("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).passwordbox("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).passwordbox("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).passwordbox("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).passwordbox("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).passwordbox("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).passwordbox("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).passwordbox("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).passwordbox("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).passwordbox("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).passwordbox("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).passwordbox("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).textbox("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).textbox("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).passwordbox("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).passwordbox("getIcon", index);
	};

	/**
	 * 方法
	 */
	/**
	 * 显示密码
	 * 
	 * @returns
	 */
	Constructor.prototype.showPassword = function() {

		return $("#" + this.id()).passwordbox("showPassword");
	};

	/**
	 * 隐藏密码
	 * 
	 * @returns
	 */
	Constructor.prototype.hidePassword = function() {

		return $("#" + this.id()).passwordbox("hidePassword");
	};

	// 返回构造函数
	return Constructor;
})();