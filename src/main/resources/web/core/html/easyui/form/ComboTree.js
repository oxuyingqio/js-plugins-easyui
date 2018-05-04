/**
 * @name	ComboTree
 * @package core.html.easyui.form
 * @desc	下拉框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.ComboTree(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.Combo
 * 			core.html.easyui.datagrid.Tree
 * 
 * @method	继承core.html.easyui.form.Combo所有方法
 * 			继承core.html.easyui.datagrid.Tree所有方法
 * 			string/core.html.easyui.form.ComboTree		textField(string textField)			获取/设置
 * 			core.html.easyui.form.ComboTree				init()								初始化组件模板
 * 			object										options()
 * 			object										tree()	
 * 			void										loadData(array data)
 * 			void										reload(string url)
 * 			void										clear()
 * 			void										setValues(array values)				设置值集合
 * 			void										setValue(string value)
 * 
 * @date	2018年5月4日 09:07:22
 */
core.html.easyui.form.ComboTree = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.Combo.call(this, arguments[0]);
		core.html.easyui.datagrid.Tree.call(this, arguments[0]);
		// 默认参数修改
		this.editable($.fn.combotree.defaults.editable);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var textField = $.fn.combotree.defaults.textField;

		/**
		 * 获取/设置
		 * 
		 * @param textField{string}
		 * @returns {string/core.html.easyui.form.ComboTree}
		 */
		this.textField = function() {

			switch (arguments.length) {
			case 0:
				return textField;
			default:
				textField = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.ComboTree}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.ComboTree", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().combotree({
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
			// Draggable继承属性
			proxy : this.proxy(),
			revert : this.revert(),
			cursor : this.cursor(),
			handle : this.handle(),
			edge : this.edge(),
			axis : this.axis(),
			// Droppable继承属性
			accept : this.accept(),
			// Tree继承属性
			url : this.url(),
			animate : this.animate(),
			checkbox : this.checkbox(),
			cascadeCheck : this.cascadeCheck(),
			onlyLeafCheck : this.onlyLeafCheck(),
			lines : this.lines(),
			dnd : this.dnd(),
			data : this.data(),
			formatter : this.formatter(),
			filter : this.filter(),
			loadFilter : this.loadFilter(),
			// 属性
			textField : this.textField(),

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
			// Draggable继承事件
			onBeforeDrag : this.onBeforeDrag(),
			onStartDrag : this.onStartDrag(),
			onDrag : this.onDrag(),
			onEndDrag : this.onEndDrag(),
			onStopDrag : this.onStopDrag(),
			// Droppable继承事件
			onDragOver : this.onDragOver(),
			onDragLeave : this.onDragLeave(),
			onDrop : this.onDrop(),
			// Tree继承事件
			onDblClick : this.onDblClick(),
			onLoadSuccess : this.onLoadSuccess(),
			onBeforeCheck : this.onBeforeCheck(),
			onCheck : this.onCheck(),
			onBeforeSelect : this.onBeforeSelect(),
			onSelect : this.onSelect(),
			onContextMenu : this.onContextMenu(),
			onBeforeDrop : this.onBeforeDrop(),
			onBeforeEdit : this.onBeforeEdit(),
			onAfterEdit : this.onAfterEdit(),
			onCancelEdit : this.onCancelEdit()
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

		return this.$jQuery().combotree("options");
	};
	
	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.tree = function() {

		return this.$jQuery().combotree("tree");
	};

	/**
	 * 
	 * @param data{array}
	 * @returns
	 */
	Constructor.prototype.loadData = function(data) {

		return this.$jQuery().combotree("loadData", data);
	};

	/**
	 * 
	 * @param url{string}
	 * @returns
	 */
	Constructor.prototype.reload = function(url) {

		return this.$jQuery().combotree("reload", url);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().combotree("clear");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().combotree("setValue", value);
	};

	/**
	 * 设置值集合
	 * 
	 * @param values{array}
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return this.$jQuery().combotree("setValues", values);
	};

	// 返回构造函数
	return Constructor;
})();