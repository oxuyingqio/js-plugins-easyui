/**
 * @name	PasswordBox
 * @package core.html.easyui.form
 * @desc	密码框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.PasswordBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 
 * @method	继承core.html.easyui.form.TextBox所有方法
 * 			string/core.html.easyui.form.PasswordBox		passwordChar(string passwordChar)	获取/设置密码显示字符
 * 			number/core.html.easyui.form.PasswordBox		checkInterval(number checkInterval)	获取/设置检查间隔时间
 * 			number/core.html.easyui.form.PasswordBox		lastDelay(number lastDelay)			获取/设置延迟转换
 * 			boolean/core.html.easyui.form.PasswordBox		revealed(boolean revealed)			获取/设置是否隐藏密码
 * 			boolean/core.html.easyui.form.PasswordBox		showEye(boolean showEye)			获取/设置是否显示显示密码按钮
 * 			core.html.easyui.form.PasswordBox				init()								初始化组件模板		
 * 			object											options()
 * 			void											showPassword()						显示密码
 * 			void											hidePassword()						隐藏密码
 * 
 * @date	2018年5月2日 16:05:52
 */
core.html.easyui.form.PasswordBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.PasswordBox.superClass.constructor.call(this, arguments[0]);

		/**
		 * 属性
		 */
		/**
		 * 密码显示字符
		 */
		var passwordChar = $.fn.passwordbox.defaults.passwordChar;
		/**
		 * 检查间隔时间
		 */
		var checkInterval = $.fn.passwordbox.defaults.checkInterval;
		/**
		 * 延迟转换
		 */
		var lastDelay = $.fn.passwordbox.defaults.lastDelay;
		/**
		 * 是否显示密码明文
		 */
		var revealed = $.fn.passwordbox.defaults.revealed;
		/**
		 * 是否显示显示密码按钮
		 */
		var showEye = $.fn.passwordbox.defaults.showEye;

		/**
		 * 获取/设置密码显示字符
		 * 
		 * @param passwordChar{string}
		 * @returns {string/core.html.easyui.form.PasswordBox}
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
		 * @param checkInterval{number}
		 * @returns {number/core.html.easyui.form.PasswordBox}
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
		 * @param lastDelay{number}
		 * @returns {number/core.html.easyui.form.PasswordBox}
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
		 * @param revealed{boolean}
		 * @returns {boolean/core.html.easyui.form.PasswordBox}
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
		 * @param showEye{boolean}
		 * @returns {boolean/core.html.easyui.form.PasswordBox}
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

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.PasswordBox", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().passwordbox({
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
			passwordChar : this.passwordChar(),
			checkInterval : this.checkInterval(),
			lastDelay : this.lastDelay(),
			revealed : this.revealed(),
			showEye : this.showEye(),

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

		return this.$jQuery().passwordbox("options");
	};

	/**
	 * 显示密码
	 * 
	 * @returns
	 */
	Constructor.prototype.showPassword = function() {

		return this.$jQuery().passwordbox("showPassword");
	};

	/**
	 * 隐藏密码
	 * 
	 * @returns
	 */
	Constructor.prototype.hidePassword = function() {

		return this.$jQuery().passwordbox("hidePassword");
	};

	// 返回构造函数
	return Constructor;
})();