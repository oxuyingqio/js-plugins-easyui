/**
 * @name	DateTimeBox
 * @package core.html.easyui.form
 * @desc	日期时间框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.DateTimeBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.DateBox
 * 			core.html.easyui.form.TimeSpinner
 * 
 * @method	继承core.html.easyui.form.DateBox所有方法
 * 			继承core.html.easyui.form.TimeSpinner所有方法
 * 			number/core.html.easyui.form.DateTimeBox	spinnerWidth(number spinnerWidth)	获取/设置spinner宽度
 * 			string/core.html.easyui.form.DateTimeBox	timeSeparator(string timeSeparator)	获取/设置时间分割符
 * 			core.html.easyui.form.DateTimeBox			init()								初始化组件模板
 * 			object										options()
 * 			object										spinner()							获取spinner对象
 * 			void										setValue(string value)
 * 			void										cloneFrom(string from)
 * 			string										getValue()							获取值
 * 
 * @date	2018年5月4日 14:44:09
 */
core.html.easyui.form.DateTimeBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {
		
		// 调用父类构造
		core.html.easyui.form.DateBox.call(this, arguments[0]);
		core.html.easyui.form.TimeSpinner.call(this, arguments[0]);
		// 默认参数修改
		this.currentText($.fn.datetimebox.defaults.currentText);
		this.closeText($.fn.datetimebox.defaults.closeText);
		this.okText($.fn.datetimebox.defaults.okText);
		this.showSeconds($.fn.datetimebox.defaults.showSeconds);
		// 额外参数修改
		this.buttons($.fn.datetimebox.defaults.buttons);
		this.formatter($.fn.datetimebox.defaults.formatter);
		this.parser($.fn.datetimebox.defaults.parser);

		/**
		 * 属性
		 */
		/**
		 * spinner宽度
		 */
		var spinnerWidth = $.fn.datetimebox.defaults.spinnerWidth;
		/**
		 * 时间分割符
		 */
		var timeSeparator = $.fn.datetimebox.defaults.timeSeparator;

		/**
		 * 获取/设置spinner宽度
		 * 
		 * @param spinnerWidth{number}
		 * @returns {number/core.html.easyui.form.DateTimeBox}
		 */
		this.spinnerWidth = function() {

			switch (arguments.length) {
			case 0:
				return spinnerWidth;
			default:
				spinnerWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置时间分割符
		 * 
		 * @param timeSeparator{string}
		 * @returns {string/core.html.easyui.form.DateTimeBox}
		 */
		this.timeSeparator = function() {

			switch (arguments.length) {
			case 0:
				return timeSeparator;
			default:
				timeSeparator = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.DateTimeBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.Spinner", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().datetimebox({
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
			// Panel继承属性
			title : this.title(),
			left : this.left(),
			top : this.top(),
			headerCls : this.headerCls(),
			bodyCls : this.bodyCls(),
			style : this.style(),
			fit : this.fit(),
			border : this.border(),
			doSize : this.doSize(),
			noheader : this.noheader(),
			halign : this.halign(),
			titleDirection : this.titleDirection(),
			collapsible : this.collapsible(),
			minimizable : this.minimizable(),
			maximizable : this.maximizable(),
			closable : this.closable(),
			tools : this.tools(),
			header : this.header(),
			footer : this.footer(),
			openAnimation : this.openAnimation(),
			openDuration : this.openDuration(),
			closeAnimation : this.closeAnimation(),
			closeDuration : this.closeDuration(),
			collapsed : this.collapsed(),
			minimized : this.minimized(),
			maximized : this.maximized(),
			closed : this.closed(),
			href : this.href(),
			cache : this.cache(),
			loadingMessage : this.loadingMessage(),
			extractor : this.extractor(),
			method : this.method(),
			queryParams : this.queryParams(),
			loader : this.loader(),
			// Combo继承属性
			panelWidth : this.panelWidth(),
			panelHeight : this.panelHeight(),
			panelMinWidth : this.panelMinWidth(),
			panelMaxWidth : this.panelMaxWidth(),
			panelMinHeight : this.panelMinHeight(),
			panelMaxHeight : this.panelMaxHeight(),
			panelAlign : this.panelAlign(),
			multiple : this.multiple(),
			multivalue : this.multivalue(),
			reversed : this.reversed(),
			selectOnNavigation : this.selectOnNavigation(),
			separator : this.separator(),
			hasDownArrow : this.hasDownArrow(),
			keyHandler : this.keyHandler(),
			// Calendar继承属性
			showWeek : this.showWeek(),
			weekNumberHeader : this.weekNumberHeader(),
			getWeekNumber : this.getWeekNumber(),
			firstDay : this.firstDay(),
			weeks : this.weeks(),
			months : this.months(),
			year : this.year(),
			month : this.month(),
			current : this.current(),
			formatter : this.formatter(),
			styler : this.styler(),
			validator : this.validator(),
			// DateBox继承属性
			currentText : this.currentText(),
			closeText : this.closeText(),
			okText : this.okText(),
			buttons : this.buttons(),
			sharedCalendar : this.sharedCalendar(),
			parser : this.parser(),
			// Spinner继承属性
			min : this.min(),
			max : this.max(),
			increment : this.increment(),
			spinAlign : this.spinAlign(),
			spin : this.spin(),
			// TimeSpinner继承属性
			showSeconds : this.showSeconds(),
			highlight : this.highlight(),
			parser : this.parser(),
			selections : this.selections(),
			// 属性
			spinnerWidth : this.spinnerWidth(),
			timeSeparator : this.timeSeparator(),

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
			// Panel继承事件
			onBeforeLoad : this.onBeforeLoad(),
			onLoad : this.onLoad(),
			onLoadError : this.onLoadError(),
			onBeforeOpen : this.onBeforeOpen(),
			onOpen : this.onOpen(),
			onBeforeClose : this.onBeforeClose(),
			onClose : this.onClose(),
			onBeforeDestroy : this.onBeforeDestroy(),
			onBeforeCollapse : this.onBeforeCollapse(),
			onCollapse : this.onCollapse(),
			onBeforeExpand : this.onBeforeExpand(),
			onExpand : this.onExpand(),
			onMove : this.onMove(),
			onMaximize : this.onMaximize(),
			onRestore : this.onRestore(),
			onMinimize : this.onMinimize(),
			// Combo继承事件
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel(),
			// Calendar继承事件
			onSelect : this.onSelect(),
			// Spinner继承事件
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

		return this.$jQuery().datetimebox("options");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.spinner = function() {

		return this.$jQuery().datetimebox("spinner");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().datetimebox("setValue", value);
	};

	/**
	 * 从xx复制
	 * 
	 * @param from{string}
	 * @returns
	 */
	Constructor.prototype.cloneFrom = function(from) {

		return this.$jQuery().datetimebox("cloneFrom");
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

		return this.$jQuery().datetimebox("getValue");
	};

	// 返回构造函数
	return Constructor;
})();