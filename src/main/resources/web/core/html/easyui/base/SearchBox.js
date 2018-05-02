/**
 * @name	SearchBox
 * @package core.html.easyui.base
 * @desc	搜索文本框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.base.SearchBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 			core.html.easyui.button.MenuButton
 * 
 * @method	继承core.html.easyui.base.Menu所有方法
 * 			继承core.html.easyui.base.LinkButton所有方法
 *			function/core.html.easyui.base.SearchBox 		searcher(function searcher)				获取/设置
 *			core.html.easyui.base.SearchBox 				init() 									初始化组件模板
 *			object											options()
 *			object											menu()
 *			object											textbox()
 *			string											getValue()
 *			void											setValue(string value)
 *			string											getName()
 *			object											selectName(string name)
 *			void											destroy()
 *			void											resize(number width)
 *			void											disable()
 *			void											enable()
 *			void											clear()
 *			void											reset()
 * 
 * @date	2018年4月23日 16:49:30
 */
core.html.easyui.base.SearchBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.TextBox.call(this, arguments[0]);
		core.html.easyui.button.MenuButton.call(this, arguments[0]);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var searcher = $.fn.searchbox.defaults.searcher;

		/**
		 * 获取/设置
		 * 
		 * @param searcher{function}
		 * @returns {function/core.html.easyui.base.SearchBox}
		 */
		this.searcher = function() {

			switch (arguments.length) {
			case 0:
				return searcher;
			default:
				searcher = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.base.SearchBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.base.SearchBox", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().searchbox({
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
			// Menu继承属性
			zIndex : this.zIndex(),
			left : this.left(),
			top : this.top(),
			align : this.align(),
			minWidth : this.minWidth(),
			itemHeight : this.itemHeight(),
			duration : this.duration(),
			hideOnUnhover : this.hideOnUnhover(),
			inline : this.inline(),
			fit : this.fit(),
			// MenuButton属性
			menu : this.menu(),
			menuAlign : this.menuAlign(),
			hasDownArrow : this.hasDownArrow(),
			// 属性
			searcher : this.searcher(),

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

		return this.$jQuery().searchbox("options");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.menu = function() {

		return this.$jQuery().searchbox("menu");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.textbox = function() {

		return this.$jQuery().searchbox("textbox");
	};

	/**
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getValue = function() {

		return this.$jQuery().searchbox("getValue");
	};

	/**
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().searchbox("setValue", value);
	};

	/**
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getName = function() {

		return this.$jQuery().searchbox("getName");
	};

	/**
	 * 
	 * @param name{string}
	 * @returns {object}
	 */
	Constructor.prototype.selectName = function(name) {

		return this.$jQuery().searchbox("selectName", name);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().searchbox("destroy");
	};

	/**
	 * 
	 * @param width{number}
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return this.$jQuery().searchbox("resize", width);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().searchbox("disable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().searchbox("enable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().searchbox("clear");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return this.$jQuery().searchbox("reset");
	};

	// 返回构造函数
	return Constructor;
})();