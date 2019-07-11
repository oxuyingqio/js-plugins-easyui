/**
 * @name	Combo
 * @package core.html.easyui.form
 * @desc	下拉框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.Combo(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 			core.html.easyui.layout.Panel
 * 
 * @method	继承core.html.easyui.form.TextBox所有方法
 * 			继承core.html.easyui.layout.Panel所有方法
 * 			number/core.html.easyui.form.Combo			panelWidth(number panelWidth)					获取/设置面板宽度
 * 			number/core.html.easyui.form.Combo			panelHeight(number panelHeight)					获取/设置面板高度
 * 			number/core.html.easyui.form.Combo			panelMinWidth(number panelMinWidth)				获取/设置面板最小宽度
 * 			number/core.html.easyui.form.Combo			panelMaxWidth(number panelMaxWidth)				获取/设置面板最大宽度
 * 			number/core.html.easyui.form.Combo			panelMinHeight(number panelMinHeight)			获取/设置面板最小高度
 * 			number/core.html.easyui.form.Combo			panelMaxHeight(number panelMaxHeight)			获取/设置面板最大高度
 * 			string/core.html.easyui.form.Combo			panelAlign(string panelAlign)					获取/设置面板位置
 * 			boolean/core.html.easyui.form.Combo			multiple(boolean multiple)						获取/设置是否多选
 * 			boolean/core.html.easyui.form.Combo			multivalue(boolean multivalue)					获取/设置
 * 			boolean/core.html.easyui.form.Combo			reversed(boolean reversed)						获取/设置
 * 			boolean/core.html.easyui.form.Combo			selectOnNavigation(boolean selectOnNavigation)	获取/设置
 * 			string/core.html.easyui.form.Combo			separator(string separator)						获取/设置多选分割符号
 * 			boolean/core.html.easyui.form.Combo			hasDownArrow(boolean hasDownArrow)				获取/设置是否显示向下按钮
 * 			object/core.html.easyui.form.Combo			keyHandler(object keyHandler)					获取/设置按键事件
 * 			function/core.html.easyui.form.Combo		onShowPanel(function onShowPanel)				获取/设置显示面板事件
 * 			function/core.html.easyui.form.Combo		onHidePanel(function onHidePanel)				获取/设置隐藏面板事件
 * 			core.html.easyui.form.Combo					init()											初始化组件模板
 * 			object										options()
 * 			object										panel()	
 * 			object										textbox()
 * 			void										destroy()
 * 			void										resize(number width)					
 * 			void										showPanel()										显示面板
 * 			void										hidePanel()										隐藏面板
 * 			void										disable()
 * 			void										enable()
 * 			void										readonly(boolean mode)
 * 			void										validate()
 * 			boolean										isValid()
 * 			void										clear()
 * 			void										reset()
 * 			string										getText()
 * 			void										setText(string text)
 * 			array										getValues()										获取值集合
 * 			void										setValues(array values)							设置值集合
 * 			string										getValue()
 * 			void										setValue(string value)
 * 
 * @date	2018年5月3日 14:32:25
 */
core.html.easyui.form.Combo = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.TextBox.call(this, arguments[0]);
		core.html.easyui.layout.Panel.call(this, arguments[0]);
		// 默认参数修改
		this.width($.fn.combo.defaults.width);
		this.height($.fn.combo.defaults.height);
		this.editable($.fn.combo.defaults.editable);
		this.disabled($.fn.combo.defaults.disabled);
		this.readonly($.fn.combo.defaults.readonly);
		this.value($.fn.combo.defaults.value);
		this.delay($.fn.combo.defaults.delay);
		this.onChange($.fn.combo.defaults.onChange);

		/**
		 * 属性
		 */
		/**
		 * 面板宽度
		 */
		var panelWidth = $.fn.combo.defaults.panelWidth;
		/**
		 * 面板高度
		 */
		var panelHeight = $.fn.combo.defaults.panelHeight;
		/**
		 * 面板最小宽度
		 */
		var panelMinWidth = $.fn.combo.defaults.panelMinWidth;
		/**
		 * 面板最大宽度
		 */
		var panelMaxWidth = $.fn.combo.defaults.panelMaxWidth;
		/**
		 * 面板最小高度
		 */
		var panelMinHeight = $.fn.combo.defaults.panelMinHeight;
		/**
		 * 面板最大高度
		 */
		var panelMaxHeight = $.fn.combo.defaults.panelMaxHeight;
		/**
		 * 面板位置
		 */
		var panelAlign = $.fn.combo.defaults.panelAlign;
		/**
		 * 是否多选
		 */
		var multiple = $.fn.combo.defaults.multiple;
		/**
		 * 
		 */
		var multivalue = $.fn.combo.defaults.multivalue;
		/**
		 * 
		 */
		var reversed = $.fn.combo.defaults.reversed;
		/**
		 * 
		 */
		var selectOnNavigation = $.fn.combo.defaults.selectOnNavigation;
		/**
		 * 多选分割符号
		 */
		var separator = $.fn.combo.defaults.separator;
		/**
		 * 是否显示向下按钮
		 */
		var hasDownArrow = $.fn.combo.defaults.hasDownArrow;
		/**
		 * 按键事件
		 */
		var keyHandler = $.fn.combo.defaults.keyHandler;

		/**
		 * 事件
		 */
		/**
		 * 显示面板事件
		 */
		var onShowPanel = $.fn.combo.defaults.onShowPanel;
		/**
		 * 隐藏面板事件
		 */
		var onHidePanel = $.fn.combo.defaults.onHidePanel;

		/**
		 * 获取/设置面板宽度
		 * 
		 * @param panelWidth{number}
		 * @returns {number/core.html.easyui.form.Combo}
		 */
		this.panelWidth = function() {

			switch (arguments.length) {
			case 0:
				return panelWidth;
			default:
				panelWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置面板高度
		 * 
		 * @param panelHeight{number}
		 * @returns {number/core.html.easyui.form.Combo}
		 */
		this.panelHeight = function() {

			switch (arguments.length) {
			case 0:
				return panelHeight;
			default:
				panelHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置面板最小宽度
		 * 
		 * @param panelMinWidth{number}
		 * @returns {number/core.html.easyui.form.Combo}
		 */
		this.panelMinWidth = function() {

			switch (arguments.length) {
			case 0:
				return panelMinWidth;
			default:
				panelMinWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置面板最大宽度
		 * 
		 * @param panelMaxWidth{number}
		 * @returns {number/core.html.easyui.form.Combo}
		 */
		this.panelMaxWidth = function() {

			switch (arguments.length) {
			case 0:
				return panelMaxWidth;
			default:
				panelMaxWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置面板最小高度
		 * 
		 * @param panelMinHeight{number}
		 * @returns {number/core.html.easyui.form.Combo}
		 */
		this.panelMinHeight = function() {

			switch (arguments.length) {
			case 0:
				return panelMinHeight;
			default:
				panelMinHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置面板最大高度
		 * 
		 * @param panelMaxHeight{number}
		 * @returns {number/core.html.easyui.form.Combo}
		 */
		this.panelMaxHeight = function() {

			switch (arguments.length) {
			case 0:
				return panelMaxHeight;
			default:
				panelMaxHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置面板位置
		 * 
		 * @param panelAlign{string}
		 * @returns {string/core.html.easyui.form.Combo}
		 */
		this.panelAlign = function() {

			switch (arguments.length) {
			case 0:
				return panelAlign;
			default:
				panelAlign = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否多选
		 * 
		 * @param multiple{boolean}
		 * @returns {boolean/core.html.easyui.form.Combo}
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
		 * 获取/设置
		 * 
		 * @param multivalue{boolean}
		 * @returns {boolean/core.html.easyui.form.Combo}
		 */
		this.multivalue = function() {

			switch (arguments.length) {
			case 0:
				return multivalue;
			default:
				multivalue = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param reversed{boolean}
		 * @returns {boolean/core.html.easyui.form.Combo}
		 */
		this.reversed = function() {

			switch (arguments.length) {
			case 0:
				return reversed;
			default:
				reversed = arguments[0];
				return this;
			}
		};
		
		/**
		 * 获取/设置
		 * 
		 * @param selectOnNavigation{boolean}
		 * @returns {boolean/core.html.easyui.form.Combo}
		 */
		this.selectOnNavigation = function() {

			switch (arguments.length) {
			case 0:
				return selectOnNavigation;
			default:
				selectOnNavigation = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置多选分割符号
		 * 
		 * @param separator{string}
		 * @returns {string/core.html.easyui.form.Combo}
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

		/**
		 * 获取/设置是否显示向下按钮
		 * 
		 * @param hasDownArrow{boolean}
		 * @returns {boolean/core.html.easyui.form.Combo}
		 */
		this.hasDownArrow = function() {

			switch (arguments.length) {
			case 0:
				return hasDownArrow;
			default:
				hasDownArrow = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按键事件
		 * 
		 * @param keyHandler{object}
		 * @returns {object/core.html.easyui.form.Combo}
		 */
		this.keyHandler = function() {

			switch (arguments.length) {
			case 0:
				return keyHandler;
			default:
				keyHandler = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示面板事件
		 * 
		 * @param onShowPanel{function}
		 * @returns {function/core.html.easyui.form.Combo}
		 */
		this.onShowPanel = function() {

			switch (arguments.length) {
			case 0:
				return onShowPanel;
			default:
				onShowPanel = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置隐藏面板事件
		 * 
		 * @param onHidePanel{function}
		 * @returns {function/core.html.easyui.form.Combo}
		 */
		this.onHidePanel = function() {

			switch (arguments.length) {
			case 0:
				return onHidePanel;
			default:
				onHidePanel = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.Combo}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.Combo", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().combo({
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
			// 属性
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
			// 事件
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel()
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

		return this.$jQuery().combo("options");
	};
	
	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.panel = function() {

		return this.$jQuery().combo("panel");
	};
	
	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.textbox = function() {

		return this.$jQuery().combo("textbox");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().combo("destroy");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width{number}
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return this.$jQuery().combo("resize", width);
	};

	/**
	 * 显示面板
	 * 
	 * @returns
	 */
	Constructor.prototype.showPanel = function() {

		return this.$jQuery().combo("showPanel");
	};

	/**
	 * 隐藏面板
	 * 
	 * @returns
	 */
	Constructor.prototype.hidePanel = function() {

		return this.$jQuery().combo("hidePanel");
	};
	
	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().combo("disable");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().combo("enable");
	};

	/**
	 * 只读
	 * 
	 * @param mode{boolean}
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return this.$jQuery().combo("readonly", mode);
	};
	
	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return this.$jQuery().combo("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns {boolean}
	 */
	Constructor.prototype.isValid = function() {

		return this.$jQuery().combo("isValid");
	};
	
	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().combo("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return this.$jQuery().combo("reset");
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getText = function() {

		return this.$jQuery().combo("getText");
	};
	
	/**
	 * 设置显示文本
	 * 
	 * @param text{string}
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return this.$jQuery().combo("setText", text);
	};
	
	/**
	 * 获取值集合
	 * 
	 * @returns {array}
	 */
	Constructor.prototype.getValues = function() {

		return this.$jQuery().combo("getValues");
	};

	/**
	 * 设置值集合
	 * 
	 * @param values{array}
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return this.$jQuery().combo("setValues", values);
	};

	/**
	 * 获取值
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getValue = function() {

		return this.$jQuery().combo("getValue");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().combo("setValue", value);
	};

	// 返回构造函数
	return Constructor;
})();