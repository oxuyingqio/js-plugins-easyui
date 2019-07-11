/**
 * @name	DateBox
 * @package core.html.easyui.form
 * @desc	日期框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.DateBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.Combo
 * 			core.html.easyui.form.Calendar
 * 
 * @method	继承core.html.easyui.form.Combo所有方法
 * 			继承core.html.easyui.form.Calendar所有方法
 * 			string/core.html.easyui.form.DateBox		currentText(string )		获取/设置今天按钮
 * 			string/core.html.easyui.form.DateBox		closeText(string )			获取/设置关闭按钮
 * 			string/core.html.easyui.form.DateBox		okText(string )				获取/设置确认按钮
 * 			array/core.html.easyui.form.DateBox			buttons(array )				获取/设置按钮组
 * 			string/core.html.easyui.form.DateBox		sharedCalendar(string )		获取/设置日期框索引
 * 			function/core.html.easyui.form.DateBox		parser(function )			获取/设置解析
 * 			core.html.easyui.form.DateBox				init()						初始化组件模板			
 * 			object										options()
 * 			object										calendar()					获取日期面板对象
 * 			void										cloneFrom(string from)		从xx复制
 * 			string										getValue()					获取值
 * 
 * @date	2018年5月4日 13:55:49
 */

core.html.easyui.form.DateBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.Combo.call(this, arguments[0]);
		core.html.easyui.form.Calendar.call(this, arguments[0]);
		// 默认参数修改
		this.panelWidth($.fn.datebox.defaults.panelWidth);
		this.panelHeight($.fn.datebox.defaults.panelHeight);
		this.disabled($.fn.datebox.defaults.disabled);
		this.formatter($.fn.datebox.defaults.formatter);
		this.onSelect($.fn.datebox.defaults.onSelect);
		// 额外参数修改
		this.width($.fn.datebox.defaults.width);
		this.height($.fn.datebox.defaults.height);

		/**
		 * 属性
		 */
		/**
		 * 今天按钮
		 */
		var currentText = $.fn.datebox.defaults.currentText;
		/**
		 * 关闭按钮
		 */
		var closeText = $.fn.datebox.defaults.closeText;
		/**
		 * 确认按钮
		 */
		var okText = $.fn.datebox.defaults.okText;
		/**
		 * 按钮组
		 */
		var buttons = $.fn.datebox.defaults.buttons;
		/**
		 * 日期框索引
		 */
		var sharedCalendar = $.fn.datebox.defaults.sharedCalendar;
		/**
		 * 解析
		 */
		var parser = $.fn.datebox.defaults.parser;

		/**
		 * 获取/设置今天按钮
		 * 
		 * @param currentText{string}
		 * @returns {string/core.html.easyui.form.DateBox}
		 */
		this.currentText = function() {

			switch (arguments.length) {
			case 0:
				return currentText;
			default:
				currentText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置关闭按钮
		 * 
		 * @param closeText{string}
		 * @returns {string/core.html.easyui.form.DateBox}
		 */
		this.closeText = function() {

			switch (arguments.length) {
			case 0:
				return closeText;
			default:
				closeText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置确认按钮
		 * 
		 * @param okText{string}
		 * @returns {string/core.html.easyui.form.DateBox}
		 */
		this.okText = function() {

			switch (arguments.length) {
			case 0:
				return okText;
			default:
				okText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按钮组
		 * 
		 * @param buttons{array}
		 * @returns {array/core.html.easyui.form.DateBox}
		 */
		this.buttons = function() {

			switch (arguments.length) {
			case 0:
				return buttons;
			default:
				buttons = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置日期框索引
		 * 
		 * @param sharedCalendar{string}
		 * @returns {string/core.html.easyui.form.DateBox}
		 */
		this.sharedCalendar = function() {

			switch (arguments.length) {
			case 0:
				return sharedCalendar;
			default:
				sharedCalendar = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置解析
		 * 
		 * @param parser{function}
		 * @returns {function/core.html.easyui.form.DateBox}
		 */
		this.parser = function() {

			switch (arguments.length) {
			case 0:
				return parser;
			default:
				parser = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.DateBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.Calendar", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().datebox({
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
			// 属性
			currentText: this.currentText(),
			closeText: this.closeText(),
			okText: this.okText(),
			buttons: this.buttons(),
			sharedCalendar: this.sharedCalendar(),
			parser: this.parser(),

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
			onSelect : this.onSelect()
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

		return this.$jQuery().datebox("options");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.calendar = function() {

		return this.$jQuery().datebox("calendar");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().datebox("setValue", value);
	};

	/**
	 * 从xx复制
	 * 
	 * @param from{string}
	 * @returns
	 */
	Constructor.prototype.cloneFrom = function(from) {

		return this.$jQuery().datebox("cloneFrom");
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

		return this.$jQuery().datebox("getValue");
	};

	// 返回构造函数
	return Constructor;
})();