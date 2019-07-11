/**
 * @name	ComboGrid
 * @package core.html.easyui.form
 * @desc	下拉框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.ComboGrid(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.Combo
 * 			core.html.easyui.datagrid.DataGrid
 * 
 * @method	继承core.html.easyui.form.Combo所有方法
 * 			继承core.html.easyui.datagrid.DataGrid所有方法
 * 			string/core.html.easyui.form.ComboGrid		textField(string textField)			获取/设置
 * 			string/core.html.easyui.form.ComboGrid		mode(string mode)					获取/设置
 * 			function/core.html.easyui.form.ComboGrid	filter(function filter)				获取/设置
 * 			core.html.easyui.form.ComboGrid				init()								初始化组件模板
 * 			object										options()
 * 			object										grid()	
 * 			void										setValues(array values)				设置值集合
 * 			void										setValue(string value)
 * 			void										clear()
 * 
 * @date	2018年5月4日 10:17:42
 */
core.html.easyui.form.ComboGrid = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.Combo.call(this, arguments[0]);
		core.html.easyui.datagrid.DataGrid.call(this, arguments[0]);
		// 默认参数修改
		this.loadMsg($.fn.combogrid.defaults.loadMsg);
		this.idField($.fn.combogrid.defaults.idField);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var textField = $.fn.combogrid.defaults.textField;
		/**
		 * 
		 */
		var mode = $.fn.combogrid.defaults.mode;
		/**
		 * 
		 */
		var filter = $.fn.combogrid.defaults.filter;

		/**
		 * 获取/设置
		 * 
		 * @param textField{string}
		 * @returns {string/core.html.easyui.form.ComboGrid}
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

		/**
		 * 获取/设置
		 * 
		 * @param mode{string}
		 * @returns {string/core.html.easyui.form.ComboGrid}
		 */
		this.mode = function() {

			switch (arguments.length) {
			case 0:
				return mode;
			default:
				mode = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param filter{function}
		 * @returns {function/core.html.easyui.form.ComboGrid}
		 */
		this.filter = function() {

			switch (arguments.length) {
			case 0:
				return filter;
			default:
				filter = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.ComboGrid}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.ComboGrid", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().combogrid({
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
			// Resizable继承属性
			handles : this.handles(),
			minWidth : this.minWidth(),
			minHeight : this.minHeight(),
			maxWidth : this.maxWidth(),
			maxHeight : this.maxHeight(),
			edge : this.edge(),
			// Pagination继承属性
			total : this.total(),
			pageSize : this.pageSize(),
			pageNumber : this.pageNumber(),
			pageList : this.pageList(),
			loading : this.loading(),
			buttons : this.buttons(),
			layout : this.layout(),
			links : this.links(),
			showPageList : this.showPageList(),
			showRefresh : this.showRefresh(),
			showPageInfo : this.showPageInfo(),
			beforePageText : this.beforePageText(),
			afterPageText : this.afterPageText(),
			displayMsg : this.displayMsg(),
			// DataGrid属性
			columns : this.columns(),
			frozenColumns : this.frozenColumns(),
			fitColumns : this.fitColumns(),
			resizeHandle : this.resizeHandle(),
			resizeEdge : this.resizeEdge(),
			autoRowHeight : this.autoRowHeight(),
			toolbar : this.toolbar(),
			striped : this.striped(),
			nowrap : this.nowrap(),
			idField : this.idField(),
			url : this.url(),
			data : this.data(),
			loadMsg : this.loadMsg(),
			emptyMsg : this.emptyMsg(),
			pagination : this.pagination(),
			rownumbers : this.rownumbers(),
			singleSelect : this.singleSelect(),
			ctrlSelect : this.ctrlSelect(),
			checkOnSelect : this.checkOnSelect(),
			selectOnCheck : this.selectOnCheck(),
			scrollOnSelect : this.scrollOnSelect(),
			pagePosition : this.pagePosition(),
			sortName : this.sortName(),
			sortOrder : this.sortOrder(),
			multiSort : this.multiSort(),
			remoteSort : this.remoteSort(),
			showHeader : this.showHeader(),
			showFooter : this.showFooter(),
			scrollbarSize : this.scrollbarSize(),
			rownumberWidth : this.rownumberWidth(),
			editorHeight : this.editorHeight(),
			rowStyler : this.rowStyler(),
			loadFilter : this.loadFilter(),
			editors : this.editors(),
			view : this.view(),
			// 属性
			textField : this.textField(),
			mode : this.mode(),
			filter : this.filter(),
			
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
			// Resizable继承事件
			onStartResize : this.onStartResize(),
			onStopResize : this.onStopResize(),
			// Pagination继承事件
			onSelectPage : this.onSelectPage(),
			onBeforeRefresh : this.onBeforeRefresh(),
			onRefresh : this.onRefresh(),
			onChangePageSize : this.onChangePageSize(),
			// DataGrid继承事件
			onLoadSuccess : this.onLoadSuccess(),
			onClickRow : this.onClickRow(),
			onDblClickRow : this.onDblClickRow(),
			onClickCell : this.onClickCell(),
			onDblClickCell : this.onDblClickCell(),
			onBeforeSortColumn : this.onBeforeSortColumn(),
			onSortColumn : this.onSortColumn(),
			onResizeColumn : this.onResizeColumn(),
			onBeforeSelect : this.onBeforeSelect(),
			onSelect : this.onSelect(),
			onBeforeUnselect : this.onBeforeUnselect(),
			onUnselect : this.onUnselect(),
			onSelectAll : this.onSelectAll(),
			onUnselectAll : this.onUnselectAll(),
			onBeforeCheck : this.onBeforeCheck(),
			onCheck : this.onCheck(),
			onBeforeUncheck : this.onBeforeUncheck(),
			onUncheck : this.onUncheck(),
			onCheckAll : this.onCheckAll(),
			onUncheckAll : this.onUncheckAll(),
			onBeforeEdit : this.onBeforeEdit(),
			onBeginEdit : this.onBeginEdit(),
			onEndEdit : this.onEndEdit(),
			onAfterEdit : this.onAfterEdit(),
			onCancelEdit : this.onCancelEdit(),
			onHeaderContextMenu : this.onHeaderContextMenu(),
			onRowContextMenu : this.onRowContextMenu()
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

		return this.$jQuery().combogrid("options");
	};
	
	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.grid = function() {

		return this.$jQuery().combogrid("grid");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().combogrid("setValue", value);
	};

	/**
	 * 设置值集合
	 * 
	 * @param values{array}
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return this.$jQuery().combogrid("setValues", values);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().combogrid("clear");
	};

	// 返回构造函数
	return Constructor;
})();