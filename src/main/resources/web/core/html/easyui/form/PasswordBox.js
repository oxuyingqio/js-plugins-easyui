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
			passwordChar : this.passwordChar(),
			checkInterval : this.checkInterval(),
			lastDelay : this.lastDelay(),
			revealed : this.revealed(),
			showEye : this.showEye(),

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

		return $("#" + this.id()).passwordbox("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).passwordbox("destroy");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).passwordbox("validate");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).passwordbox("isValid");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).passwordbox("enableValidation");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).passwordbox("disableValidation");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).passwordbox("resetValidation");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).passwordbox("enable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).passwordbox("disable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).passwordbox("readonly", mode);
	};

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
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).passwordbox("resize", width);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).passwordbox("clear");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).passwordbox("reset");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).passwordbox("initValue", value);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).passwordbox("setText", text);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).passwordbox("getText");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).passwordbox("setValue", value);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).passwordbox("getValue");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).passwordbox("getIcon", index);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.showPassword = function() {

		return $("#" + this.id()).passwordbox("showPassword");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.hidePassword = function() {

		return $("#" + this.id()).passwordbox("hidePassword");
	};

	// 返回构造函数
	return Constructor;
})();