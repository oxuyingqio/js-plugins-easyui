/**
 * @name	MaskedBox
 * @package core.html.easyui.form
 * @desc	模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.MaskedBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 
 * @method	继承core.html.easyui.form.TextBox所有方法
 * 			string/core.html.easyui.form.MaskedBox		passwordChar(string passwordChar)	获取/设置密码显示字符
 * 			number/core.html.easyui.form.MaskedBox		checkInterval(number checkInterval)	获取/设置检查间隔时间
 * 			number/core.html.easyui.form.MaskedBox		lastDelay(number lastDelay)			获取/设置延迟转换
 * 			boolean/core.html.easyui.form.MaskedBox		revealed(boolean revealed)			获取/设置是否隐藏密码
 * 			boolean/core.html.easyui.form.MaskedBox		showEye(boolean showEye)			获取/设置是否显示显示密码按钮
 * 			core.html.easyui.form.MaskedBox				init()								初始化组件模板		
 * 			object										options()
 * 			void										initValue(string value)				
 * 			void										setValue(string value)				
 * 
 * @date	2018年5月2日 16:11:07
 */
core.html.easyui.form.MaskedBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.MaskedBox.superClass.constructor.call(this, arguments[0]);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var mask = $.fn.maskedbox.defaults.mask;
		/**
		 * 
		 */
		var promptChar = $.fn.maskedbox.defaults.promptChar;
		/**
		 * 
		 */
		var masks = $.fn.maskedbox.defaults.masks;

		/**
		 * 获取/设置
		 * 
		 * @param mask{string}
		 * @returns {string/core.html.easyui.form.MaskedBox}
		 */
		this.mask = function() {

			switch (arguments.length) {
			case 0:
				return mask;
			default:
				mask = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param promptChar{string}
		 * @returns {string/core.html.easyui.form.MaskedBox}
		 */
		this.promptChar = function() {

			switch (arguments.length) {
			case 0:
				return promptChar;
			default:
				promptChar = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param masks{string}
		 * @returns {string/core.html.easyui.form.MaskedBox}
		 */
		this.masks = function() {

			switch (arguments.length) {
			case 0:
				return masks;
			default:
				masks = arguments[0];
				return this;
			}
		};
	};
	// 继承文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.MaskedBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.MaskedBox", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().maskedbox({
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
			mask : this.mask(),
			promptChar : this.promptChar(),
			masks : this.masks(),

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

		return this.$jQuery().maskedbox("options");
	};

	/**
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return this.$jQuery().maskedbox("initValue", value);
	};

	/**
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().maskedbox("setValue", value);
	};

	// 返回构造函数
	return Constructor;
})();