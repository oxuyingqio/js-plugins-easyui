/**
 * @name	PropertyGrid
 * @package core.html.easyui.datagrid
 * @desc	数据列表模板
 * @type	类型
 * 
 * @constructor	core.html.easyui.datagrid.PropertyGrid(string id/object jQuery)
 * 
 * @extend	core.html.easyui.datagrid.DataGrid
 * 
 * @method	继承core.html.easyui.datagrid.DataGrid所有方法
 *        	boolean/core.html.easyui.datagrid.PropertyGrid	showGroup(boolean showGroup) 				获取/设置
 *        	string/core.html.easyui.datagrid.PropertyGrid	groupField(string groupField)				获取/设置
 *			function/core.html.easyui.datagrid.PropertyGrid	groupFormatter(function groupFormatter) 	获取/设置
 *         	core.html.easyui.propertygrid.Datagrid 			init() 										初始化组件模板
 *         	object 											groups()
 *         	void 											expandGroup(number groupIndex)
 *         	void 											collapseGroup(number groupIndex)
 * 
 * @date	2019年1月3日 14:05:41
 */
core.html.easyui.datagrid.PropertyGrid = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.datagrid.PropertyGrid.superClass.constructor.call(this, arguments[0]);
		this.singleSelect($.fn.propertygrid.defaults.singleSelect);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var showGroup = $.fn.propertygrid.defaults.showGroup;
		/**
		 * 
		 */
		var groupField = $.fn.propertygrid.defaults.groupField;
		/**
		 * 
		 */
		var groupFormatter = $.fn.propertygrid.defaults.groupFormatter;

		/**
		 * 获取/设置
		 * 
		 * @param showGroup{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.PropertyGrid}
		 */
		this.showGroup = function() {

			switch (arguments.length) {
			case 0:
				return showGroup;
			default:
				showGroup = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param groupField{string}
		 * @returns {string/core.html.easyui.datagrid.PropertyGrid}
		 */
		this.groupField = function() {

			switch (arguments.length) {
			case 0:
				return groupField;
			default:
				groupField = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param groupFormatter{function}
		 * @returns {function/core.html.easyui.datagrid.PropertyGrid}
		 */
		this.groupFormatter = function() {

			switch (arguments.length) {
			case 0:
				return groupFormatter;
			default:
				groupFormatter = arguments[0];
				return this;
			}
		};
	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.datagrid.DataGrid);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.datagrid.PropertyGrid}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.datagrid.PropertyGrid", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().propertygrid({
			// Panel继承属性
			id : this.id(),
			title : this.title(),
			iconCls : this.iconCls(),
			width : this.width(),
			height : this.height(),
			left : this.left(),
			top : this.top(),
			cls : this.cls(),
			headerCls : this.headerCls(),
			bodyCls : this.bodyCls(),
			style : this.style(),
			fit : this.fit(),
			border : this.border(),
			doSize : this.doSize(),
			noheader : this.noheader(),
			content : this.content(),
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
			// Resizable继承属性
			disabled : this.disabled(),
			handles : this.handles(),
			minWidth : this.minWidth(),
			minHeight : this.minHeight(),
			maxWidth : this.maxWidth(),
			maxHeight : this.maxHeight(),
			edge : this.edge(),
			// LinkButton继承属性
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconAlign : this.iconAlign(),
			size : this.size(),
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
			// DataGrid继承属性
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
			showGroup : this.showGroup(),
			groupField : this.groupField(),
			groupFormatter : this.groupFormatter(),

			// Panel继承事件
			onBeforeLoad : this.onBeforeLoad(),
			onLoad : this.onLoad(),
			onLoadError : this.onLoadError(),
			onBeforeOpen : this.onBeforeOpen(),
			onOpen : this.onOpen(),
			onBeforeClose : this.onBeforeClose(),
			onClose : this.onClose(),
			onBeforeDestroy : this.onBeforeDestroy(),
			onDestroy : this.onDestroy(),
			onBeforeCollapse : this.onBeforeCollapse(),
			onCollapse : this.onCollapse(),
			onBeforeExpand : this.onBeforeExpand(),
			onExpand : this.onExpand(),
			onResize : this.onResize(),
			onMove : this.onMove(),
			onMaximize : this.onMaximize(),
			onRestore : this.onRestore(),
			onMinimize : this.onMinimize(),
			// Resizable继承事件
			onStartResize : this.onStartResize(),
			onStopResize : this.onStopResize(),
			// LinkButton继承事件
			onClick : this.onClick(),
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
	Constructor.prototype.groups = function() {

		return this.$jQuery().propertygrid("groups");
	};

	/**
	 * 获取页面对象
	 * 
	 * @param groupIndex{number}
	 * @returns
	 */
	Constructor.prototype.expandGroup = function(groupIndex) {

		return this.$jQuery().propertygrid("expandGroup", groupIndex);
	};

	/**
	 * 获取面板对象
	 * 
	 * @param groupIndex{number}
	 * @returns
	 */
	Constructor.prototype.collapseGroup = function(groupIndex) {

		return this.$jQuery().propertygrid("collapseGroup", groupIndex);
	};

	// 返回构造函数
	return Constructor;
})();