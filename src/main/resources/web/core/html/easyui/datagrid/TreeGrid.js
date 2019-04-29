/**
 * @name	TreeGrid
 * @package core.html.easyui.datagrid
 * @desc	数据列表模板
 * @type	类
 * 
 * @constructor	core.html.easyui.datagrid.TreeGrid(string id/object jQuery)
 * 
 * @extend	core.html.easyui.datagrid.DataGrid
 * 
 * @method	继承core.html.easyui.datagrid.DataGrid所有方法
 * 			string/core.html.easyui.datagrid.TreeGrid	treeField(string treeField)						获取/设置
 * 			boolean/core.html.easyui.datagrid.TreeGrid	animate(boolean animate)						获取/设置
 * 			function/core.html.easyui.datagrid.TreeGrid	checkbox(function checkbox)						获取/设置
 * 			boolean/core.html.easyui.datagrid.TreeGrid	cascadeCheck(boolean cascadeCheck)				获取/设置
 * 			boolean/core.html.easyui.datagrid.TreeGrid	onlyLeafCheck(boolean onlyLeafCheck)			获取/设置
 * 			boolean/core.html.easyui.datagrid.TreeGrid	lines(boolean lines)							获取/设置
 * 			function/core.html.easyui.datagrid.TreeGrid	onBeforeCheckNode(function onBeforeCheckNode)	获取/设置
 * 			function/core.html.easyui.datagrid.TreeGrid	onCheckNode(function onCheckNode)				获取/设置
 * 			function/core.html.easyui.datagrid.TreeGrid	onContextMenu(function onContextMenu)			获取/设置
 * 			core.html.easyui.treegrid.Datagrid			init()											初始化组件模板
 * 			object										options()
 * 			void										resize(object options)
 * 			void										fixRowHeight(string id)
 * 			void										loadData(object data)
 * 			void										load(object param)
 * 			void										reload(string id)
 * 			object										reloadFooter(object footer)
 * 			object										getData()
 * 			object										getFooterRows()
 * 			object										getRoot()
 * 			object										getRoots()
 * 			object										getParent(string id)
 * 			object										getChildren(string id)
 * 			object										getSelected()
 * 			object										getSelections()
 * 			object										getCheckedNodes()
 * 			object										getLevel(string id)
 * 			void										find(string id)
 * 			void										select(string id)
 * 			void										unselect(string id)
 * 			void										selectAll()
 * 			void										unselectAll()
 * 			void										checkNode(string id)
 * 			void										uncheckNode(string id)
 * 			void										collapse(string id)
 * 			void										expand(string id)
 * 			void										collapseAll(string id)
 * 			void										expandAll(string id)
 * 			void										expandTo(string id)
 * 			void										toggle(string id)
 * 			void										append(object param)
 * 			void										insert(object param)
 * 			void										remove(string id)
 * 			void										pop(string id)
 * 			void										refresh(string id)
 * 			void										update(object param)
 * 			void										beginEdit(string id)
 * 			void										endEdit(string id)
 * 			void										cancelEdit(string id)
 * 			object										getEditors(string id)
 * 			object										getEditor(object param)
 * 			void										showLines()
 * 
 * @date	2018年5月2日 15:23:09
 */
core.html.easyui.datagrid.TreeGrid = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.datagrid.TreeGrid.superClass.constructor.call(this, arguments[0]);
		// 默认参数修改
		this.idField($.fn.treegrid.defaults.idField);
		this.loader($.fn.treegrid.defaults.loader);
		this.loadFilter($.fn.treegrid.defaults.loadFilter);
		this.view($.fn.treegrid.defaults.view);
		this.onClickRow($.fn.treegrid.defaults.onClickRow);
		this.onDblClickRow($.fn.treegrid.defaults.onDblClickRow);
		this.onClickCell($.fn.treegrid.defaults.onClickCell);
		this.onDblClickCell($.fn.treegrid.defaults.onDblClickCell);
		this.onBeforeLoad($.fn.treegrid.defaults.onBeforeLoad);
		this.onLoadSuccess($.fn.treegrid.defaults.onLoadSuccess);
		this.onLoadError($.fn.treegrid.defaults.onLoadError);
		this.onBeforeSelect($.fn.treegrid.defaults.onBeforeSelect);
		this.onSelect($.fn.treegrid.defaults.onSelect);
		this.onBeforeUnselect($.fn.treegrid.defaults.onBeforeUnselect);
		this.onUnselect($.fn.treegrid.defaults.onUnselect);
		this.onBeforeExpand($.fn.treegrid.defaults.onBeforeExpand);
		this.onExpand($.fn.treegrid.defaults.onExpand);
		this.onBeforeCollapse($.fn.treegrid.defaults.onBeforeCollapse);
		this.onCollapse($.fn.treegrid.defaults.onCollapse);
		this.onBeforeEdit($.fn.treegrid.defaults.onBeforeEdit);
		this.onAfterEdit($.fn.treegrid.defaults.onAfterEdit);
		this.onCancelEdit($.fn.treegrid.defaults.onCancelEdit);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var treeField = $.fn.treegrid.defaults.treeField;
		/**
		 * 
		 */
		var animate = $.fn.treegrid.defaults.animate;
		/**
		 * 
		 */
		var checkbox = $.fn.treegrid.defaults.checkbox;
		/**
		 * 
		 */
		var cascadeCheck = $.fn.treegrid.defaults.cascadeCheck;
		/**
		 * 
		 */
		var onlyLeafCheck = $.fn.treegrid.defaults.onlyLeafCheck;
		/**
		 * 
		 */
		var lines = $.fn.treegrid.defaults.lines;

		/**
		 * 事件
		 */
		/**
		 * 
		 */
		var onBeforeCheckNode = $.fn.treegrid.defaults.onBeforeCheckNode;
		/**
		 * 
		 */
		var onCheckNode = $.fn.treegrid.defaults.onCheckNode;
		/**
		 * 
		 */
		var onContextMenu = $.fn.treegrid.defaults.onContextMenu;

		/**
		 * 获取/设置
		 * 
		 * @param treeField{string}
		 * @returns {string/core.html.easyui.datagrid.TreeGrid}
		 */
		this.treeField = function() {

			switch (arguments.length) {
			case 0:
				return treeField;
			default:
				treeField = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param animate{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.TreeGrid}
		 */
		this.animate = function() {

			switch (arguments.length) {
			case 0:
				return animate;
			default:
				animate = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param checkbox{function}
		 * @returns {function/core.html.easyui.datagrid.TreeGrid}
		 */
		this.checkbox = function() {

			switch (arguments.length) {
			case 0:
				return checkbox;
			default:
				checkbox = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param cascadeCheck{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.TreeGrid}
		 */
		this.cascadeCheck = function() {

			switch (arguments.length) {
			case 0:
				return cascadeCheck;
			default:
				cascadeCheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onlyLeafCheck{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.TreeGrid}
		 */
		this.onlyLeafCheck = function() {

			switch (arguments.length) {
			case 0:
				return onlyLeafCheck;
			default:
				onlyLeafCheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param lines{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.TreeGrid}
		 */
		this.lines = function() {

			switch (arguments.length) {
			case 0:
				return lines;
			default:
				lines = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onBeforeCheckNode{function}
		 * @returns {function/core.html.easyui.datagrid.TreeGrid}
		 */
		this.onBeforeCheckNode = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeCheckNode;
			default:
				onBeforeCheckNode = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onCheckNode{function}
		 * @returns {function/core.html.easyui.datagrid.TreeGrid}
		 */
		this.onCheckNode = function() {

			switch (arguments.length) {
			case 0:
				return onCheckNode;
			default:
				onCheckNode = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu{function}
		 * @returns {function/core.html.easyui.datagrid.TreeGrid}
		 */
		this.onContextMenu = function() {

			switch (arguments.length) {
			case 0:
				return onContextMenu;
			default:
				onContextMenu = arguments[0];
				return this;
			}
		};
	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.datagrid.DataGrid);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.datagrid.TreeGrid}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.datagrid.TreeGrid", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().treegrid({
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
			treeField : this.treeField(),
			animate : this.animate(),
			checkbox : this.checkbox(),
			cascadeCheck : this.cascadeCheck(),
			onlyLeafCheck : this.onlyLeafCheck(),
			lines : this.lines(),

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
			onRowContextMenu : this.onRowContextMenu(),
			// 事件
			onBeforeCheckNode : this.onBeforeCheckNode(),
			onCheckNode : this.onCheckNode(),
			onContextMenu : this.onContextMenu()
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

		return this.$jQuery().treegrid("options");
	};

	/**
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.resize = function(options) {

		return this.$jQuery().treegrid("resize", options);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.fixRowHeight = function(id) {

		return this.$jQuery().treegrid("fixRowHeight", id);
	};

	/**
	 * 
	 * @param data{object}
	 * @returns
	 */
	Constructor.prototype.loadData = function(data) {

		return this.$jQuery().treegrid("loadData", data);
	};

	/**
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.load = function(param) {

		return this.$jQuery().treegrid("load", param);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.reload = function(id) {

		return this.$jQuery().treegrid("reload", id);
	};

	/**
	 * 
	 * @param footer{object}
	 * @returns {object}
	 */
	Constructor.prototype.reloadFooter = function(footer) {

		return this.$jQuery().treegrid("reloadFooter", footer);
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getData = function() {

		return this.$jQuery().treegrid("getData");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getFooterRows = function() {

		return this.$jQuery().treegrid("getFooterRows");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getRoot = function() {

		return this.$jQuery().treegrid("getRoot");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getRoots = function() {

		return this.$jQuery().treegrid("getRoots");
	};

	/**
	 * 
	 * @param id{string}
	 * @returns {object}
	 */
	Constructor.prototype.getParent = function(id) {

		return this.$jQuery().treegrid("getParent", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns {object}
	 */
	Constructor.prototype.getChildren = function(id) {

		return this.$jQuery().treegrid("getChildren", id);
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getSelected = function() {

		return this.$jQuery().treegrid("getSelected");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getSelections = function() {

		return this.$jQuery().treegrid("getSelections");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getCheckedNodes = function() {

		return this.$jQuery().treegrid("getCheckedNodes");
	};

	/**
	 * 
	 * @param id{string}
	 * @returns {object}
	 */
	Constructor.prototype.getLevel = function(id) {

		return this.$jQuery().treegrid("getLevel", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.find = function(id) {

		return this.$jQuery().treegrid("find", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.select = function(id) {

		return this.$jQuery().treegrid("select", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.unselect = function(id) {

		return this.$jQuery().treegrid("unselect", id);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.selectAll = function() {

		return this.$jQuery().treegrid("selectAll");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.unselectAll = function() {

		return this.$jQuery().treegrid("unselectAll");
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.checkNode = function(id) {

		return this.$jQuery().treegrid("checkNode", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.uncheckNode = function(id) {

		return this.$jQuery().treegrid("uncheckNode", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.collapse = function(id) {

		return this.$jQuery().treegrid("collapse", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.expand = function(id) {

		return this.$jQuery().treegrid("expand", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.collapseAll = function(id) {

		return this.$jQuery().treegrid("collapseAll", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.expandAll = function(id) {

		return this.$jQuery().treegrid("expandAll", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.expandTo = function(id) {

		return this.$jQuery().treegrid("expandTo", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.toggle = function(id) {

		return this.$jQuery().treegrid("toggle", id);
	};

	/**
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.append = function(param) {

		return this.$jQuery().treegrid("append", param);
	};

	/**
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.insert = function(param) {

		return this.$jQuery().treegrid("insert", param);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.remove = function(id) {

		return this.$jQuery().treegrid("remove", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.pop = function(id) {

		return this.$jQuery().treegrid("pop", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.refresh = function(id) {

		return this.$jQuery().treegrid("refresh", id);
	};

	/**
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.update = function(param) {

		return this.$jQuery().treegrid("update", param);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.beginEdit = function(id) {

		return this.$jQuery().treegrid("beginEdit", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.endEdit = function(id) {

		return this.$jQuery().treegrid("endEdit", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.cancelEdit = function(id) {

		return this.$jQuery().treegrid("cancelEdit", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns {object}
	 */
	Constructor.prototype.getEditors = function(id) {

		return this.$jQuery().treegrid("getEditors", id);
	};

	/**
	 * 
	 * @param param{object}
	 * @returns {object}
	 */
	Constructor.prototype.getEditor = function(param) {

		return this.$jQuery().treegrid("getEditor", param);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.showLines = function() {

		return this.$jQuery().treegrid("showLines");
	};

	// 返回构造函数
	return Constructor;
})();