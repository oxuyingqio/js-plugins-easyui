/**
 * @name	NumberSpinner
 * @package core.html.easyui.form
 * @desc	数字微调框模板
 * @type	类
 * 
 * @constructor core.html.easyui.form.NumberSpinner(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.Spinner
 * 			core.html.easyui.form.NumberBox
 * 
 * @method	继承core.html.easyui.form.Spinner所有方法
 * 			继承core.html.easyui.form.NumberBox所有方法
 * 			core.html.easyui.form.NumberSpinner		init()					初始化组件模板
 * 			void									options()
 * 			void									setValue(number value)
 * 
 * @date	2018年5月4日 14:55:27
 */
core.html.easyui.form.NumberSpinner = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {
		
		// 调用父类构造
		core.html.easyui.form.Spinner.call(this, arguments[0]);
		core.html.easyui.form.NumberBox.call(this, arguments[0]);
		// 额外参数修改
		this.spin($.fn.numberspinner.defaults.spin);
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.NumberSpinner}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.NumberSpinner", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().numberspinner({
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
			// NumberBox继承属性
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

		return this.$jQuery().numberspinner("options");
	};

	/**
	 * 设置值
	 * 
	 * @param value{number}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().numberspinner("setValue", value);
	};
	
	/**
	 * 扩展方法
	 */
	/**
	 * 获取值
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getValue = function() {

		return this.$jQuery().numberspinner("getValue");
	};

	// 返回构造函数
	return Constructor;
})();