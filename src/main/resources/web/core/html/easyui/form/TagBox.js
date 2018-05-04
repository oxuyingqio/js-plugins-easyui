/**
 * @name	TagBox
 * @package	core.html.easyui.form
 * @desc	标签模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.TagBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.ComboBox
 * 
 * @method	继承core.html.easyui.form.ComboBox所有方法
 * 			function/core.html.easyui.form.TagBox	tagFormatter(function tagFormatter)				获取/设置格式化值
 * 			function/core.html.easyui.form.TagBox	tagStyler(function tagStyler)					获取/设置样式
 * 			function/core.html.easyui.form.TagBox	onClickTag(function onClickTag)					获取/设置点击事件
 * 			function/core.html.easyui.form.TagBox	onBeforeRemoveTag(function onBeforeRemoveTag)	获取/设置移除前事件
 * 			function/core.html.easyui.form.TagBox	onRemoveTag(function onRemoveTag)				获取/设置移除事件
 *			core.html.easyui.form.TagBox			init()											初始化组件模板
 * 
 * @date	2018年5月4日 10:57:32
 */
core.html.easyui.form.TagBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.TagBox.superClass.constructor.call(this, this, arguments[0]);
		// 修改默认参数
		this.hasDownArrow($.fn.tagbox.defaults.hasDownArrow);

		/**
		 * 属性
		 */
		/**
		 * 格式化值
		 */
		var tagFormatter = $.fn.tagbox.defaults.tagFormatter;
		/**
		 * 样式
		 */
		var tagStyler = $.fn.tagbox.defaults.tagStyler;

		/**
		 * 事件
		 */
		/**
		 * 点击事件
		 */
		var onClickTag = $.fn.tagbox.defaults.onClickTag;
		/**
		 * 移除前事件
		 */
		var onBeforeRemoveTag = $.fn.tagbox.defaults.onBeforeRemoveTag;
		/**
		 * 移除事件
		 */
		var onRemoveTag = $.fn.tagbox.defaults.onRemoveTag;

		/**
		 * 获取/设置格式化值
		 * 
		 * @param tagFormatter{function}
		 * @returns {function/core.html.easyui.form.TagBox}
		 */
		this.tagFormatter = function() {

			switch (arguments.length) {
			case 0:
				return tagFormatter;
			default:
				tagFormatter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置样式
		 * 
		 * @param tagStyler{function}
		 * @returns {function/core.html.easyui.form.TagBox}
		 */
		this.tagStyler = function() {

			switch (arguments.length) {
			case 0:
				return tagStyler;
			default:
				tagStyler = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置点击事件
		 * 
		 * @param onClickTag{function}
		 * @returns {function/core.html.easyui.form.TagBox}
		 */
		this.onClickTag = function() {

			switch (arguments.length) {
			case 0:
				return onClickTag;
			default:
				onClickTag = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置移除前事件
		 * 
		 * @param onBeforeRemoveTag{function}
		 * @returns {function/core.html.easyui.form.TagBox}
		 */
		this.onBeforeRemoveTag = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeRemoveTag;
			default:
				onBeforeRemoveTag = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置移除事件
		 * 
		 * @param onRemoveTag{function}
		 * @returns {function/core.html.easyui.form.TagBox}
		 */
		this.onRemoveTag = function() {

			switch (arguments.length) {
			case 0:
				return onRemoveTag;
			default:
				onRemoveTag = arguments[0];
				return this;
			}
		};

	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.form.ComboBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.TagBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.TagBox", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().tagbox({
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
			// ComboBox继承属性
			valueField : this.valueField(),
			textField : this.textField(),
			groupField : this.groupField(),
			groupFormatter : this.groupFormatter(),
			mode : this.mode(),
			url : this.url(),
			data : this.data(),
			limitToList : this.limitToList(),
			showItemIcon : this.showItemIcon(),
			groupPosition : this.groupPosition(),
			filter : this.filter(),
			formatter : this.formatter(),
			loadFilter : this.loadFilter(),
			// 属性
			tagFormatter : this.tagFormatter(),
			tagStyler : this.tagStyler(),

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
			// ComboBox继承事件
			onLoadSuccess : this.onLoadSuccess(),
			onSelect : this.onSelect(),
			onUnselect : this.onUnselect(),
			// 事件
			onClickTag : this.onClickTag(),
			onBeforeRemoveTag : this.onBeforeRemoveTag(),
			onRemoveTag : this.onRemoveTag()
		});

		return this;
	};

	// 返回构造函数
	return Constructor;
})();