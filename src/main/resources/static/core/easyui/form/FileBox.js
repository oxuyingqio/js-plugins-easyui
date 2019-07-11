/**
 * @name	FileBox
 * @package core.html.easyui.form
 * @desc	文件框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.FileBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 
 * @method	继承core.html.easyui.form.TextBox所有方法
 * 			string/core.html.easyui.form.FileBox	accept(string accept)		获取/设置指定文件类型
 * 			string/core.html.easyui.form.FileBox	multiple(string multiple)	获取/设置是否可接收多个文件
 * 			string/core.html.easyui.form.FileBox	separator(string separator)	获取/设置多文件名之间的分隔符
 * 			core.html.easyui.form.FileBox			init()						初始化组件模板
 * 			array									files()
 * 
 * @date	2018年5月4日 16:00:06
 */
core.html.easyui.form.FileBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.FileBox.superClass.constructor.call(this, arguments[0]);
		// 默认参数修改
		this.buttonText("选择文件");
		this.buttonIcon($.fn.filebox.defaults.buttonIcon);
		this.buttonAlign($.fn.filebox.defaults.buttonAlign);

		/**
		 * 属性
		 */
		/**
		 * 指定文件类型
		 */
		var accept = $.fn.filebox.defaults.accept;
		/**
		 * 是否可接收多个文件
		 */
		var multiple = $.fn.filebox.defaults.multiple;
		/**
		 * 多文件名之间的分隔符
		 */
		var separator = $.fn.filebox.defaults.separator;

		/**
		 * 获取/设置指定文件类型
		 * 
		 * @param accept{string}
		 * @returns {string/core.html.easyui.form.FileBox}
		 */
		this.accept = function() {

			switch (arguments.length) {
			case 0:
				return accept;
			default:
				accept = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否可接收多个文件
		 * 
		 * @param multiple{string}
		 * @returns {string/core.html.easyui.form.FileBox}
		 */
		this.multiple = function() {

			switch (arguments.length) {
			case 0:
				return multiple;
			default:
				multiple = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置多文件名之间的分隔符
		 * 
		 * @param separator{string}
		 * @returns {string/core.html.easyui.form.FileBox}
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
	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.FileBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.TextBox", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().filebox({
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
			accept: this.accept(),
			multiple: this.multiple(),
			separator: this.separator(),

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
	 * @returns {array}
	 */
	Constructor.prototype.files = function() {

		return this.$jQuery().filebox("files");
	};

	// 返回构造函数
	return Constructor;
})();