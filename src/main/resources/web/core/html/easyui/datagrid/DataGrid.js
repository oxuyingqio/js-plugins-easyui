/**
 * @name	DataGrid
 * @package core.html.easyui.datagrid
 * @desc	数据列表模板
 * @type	类型
 * 
 * @constructor	core.html.easyui.datagrid.DataGrid(string id/object jQuery)
 * 
 * @extend	core.html.easyui.layout.Panel
 * 			core.html.easyui.base.Resizable
 * 			core.html.easyui.button.LinkButton
 * 			core.html.easyui.base.Pagination
 * 
 * @method	继承core.html.easyui.layout.Panel所有方法
 * 			继承core.html.easyui.base.Resizable所有方法
 * 			继承core.html.easyui.button.LinkButton所有方法
 * 			继承core.html.easyui.base.Pagination所有方法
 * 			array/core.html.easyui.datagrid.DataGrid	columns(array columns)								获取/设置列
 * 			array/core.html.easyui.datagrid.DataGrid	frozenColumns(array frozenColumns)					获取/设置冻结列
 * 			boolean/core.html.easyui.datagrid.DataGrid	fitColumns(boolean fitColumns)						获取/设置列宽自适应
 * 			string/core.html.easyui.datagrid.DataGrid	resizeHandle(string resizeHandle)					获取/设置
 * 			number/core.html.easyui.datagrid.DataGrid	resizeEdge(number resizeEdge)						获取/设置
 * 			boolean/core.html.easyui.datagrid.DataGrid	autoRowHeight(boolean autoRowHeight)				获取/设置行高自适应
 * 			array/core.html.easyui.datagrid.DataGrid	toolbar(array toolbar)								获取/设置工具条
 * 			boolean/core.html.easyui.datagrid.DataGrid	striped(boolean striped)							获取/设置隔行变色
 * 			boolean/core.html.easyui.datagrid.DataGrid	nowrap(boolean nowrap)								获取/设置禁止文字自动换行
 * 			string/core.html.easyui.datagrid.DataGrid	idField(string idField)								获取/设置id字段
 * 			string/core.html.easyui.datagrid.DataGrid	url(string url)										获取/设置数据URL
 * 			array/core.html.easyui.datagrid.DataGrid	data(array data)									获取/设置数据
 * 			string/core.html.easyui.datagrid.DataGrid	loadMsg(string loadMsg)								获取/设置数据加载等待提示
 * 			string/core.html.easyui.datagrid.DataGrid	emptyMsg(string emptyMsg)							获取/设置
 * 			boolean/core.html.easyui.datagrid.DataGrid	pagination(boolean pagination)						获取/设置添加页脚工具栏
 * 			boolean/core.html.easyui.datagrid.DataGrid	rownumbers(boolean rownumbers)						获取/设置显示行号
 * 			boolean/core.html.easyui.datagrid.DataGrid	singleSelect(boolean singleSelect)					获取/设置仅能选中单行
 * 			boolean/core.html.easyui.datagrid.DataGrid	ctrlSelect(boolean ctrlSelect)						获取/设置ctrl键选中
 * 			boolean/core.html.easyui.datagrid.DataGrid	checkOnSelect(boolean checkOnSelect)				获取/设置check时选中
 * 			boolean/core.html.easyui.datagrid.DataGrid	selectOnCheck(boolean selectOnCheck)				获取/设置选中时check
 * 			boolean/core.html.easyui.datagrid.DataGrid	scrollOnSelect(boolean scrollOnSelect)				获取/设置选中时check
 * 			string/core.html.easyui.datagrid.DataGrid	pagePosition(string pagePosition)					获取/设置分页工具条位置
 * 			string/core.html.easyui.datagrid.DataGrid	sortName(string sortName)							获取/设置排序字段
 * 			string/core.html.easyui.datagrid.DataGrid	sortOrder(string sortOrder)							获取/设置排序方式
 * 			boolean/core.html.easyui.datagrid.DataGrid	multiSort(boolean multiSort)						获取/设置
 * 			boolean/core.html.easyui.datagrid.DataGrid	remoteSort(boolean remoteSort)						获取/设置向后台发送排序条件
 * 			boolean/core.html.easyui.datagrid.DataGrid	showHeader(boolean showHeader)						获取/设置显示标头
 * 			boolean/core.html.easyui.datagrid.DataGrid	showFooter(boolean showFooter)						获取/设置显示脚
 * 			number/core.html.easyui.datagrid.DataGrid	scrollbarSize(number scrollbarSize)					获取/设置
 * 			number/core.html.easyui.datagrid.DataGrid	rownumberWidth(number rownumberWidth)				获取/设置行号宽度
 * 			number/core.html.easyui.datagrid.DataGrid	editorHeight(number editorHeight)					获取/设置编辑框高度
 * 			function/core.html.easyui.datagrid.DataGrid	rowStyler(function rowStyler)						获取/设置行样式
 * 			function/core.html.easyui.datagrid.DataGrid	loadFilter(function loadFilter)						获取/设置数据加载过滤
 * 			object/core.html.easyui.datagrid.DataGrid	editors(object editors)								获取/设置编辑
 * 			object/core.html.easyui.datagrid.DataGrid	view(object view)									获取/设置展示
 * 			function/core.html.easyui.datagrid.DataGrid	onLoadSuccess(function onLoadSuccess)				获取/设置数据加载成功事件
 * 			function/core.html.easyui.datagrid.DataGrid	onClickRow(function onClickRow)						获取/设置行单击事件
 * 			function/core.html.easyui.datagrid.DataGrid	onDblClickRow(function onDblClickRow)				获取/设置行双击事件
 * 			function/core.html.easyui.datagrid.DataGrid	onClickCell(function onClickCell)					获取/设置单元格单击事件
 * 			function/core.html.easyui.datagrid.DataGrid	onDblClickCell(function onDblClickCell)				获取/设置单元格双击事件
 * 			function/core.html.easyui.datagrid.DataGrid	onBeforeSortColumn(function onBeforeSortColumn)		获取/设置排序前
 * 			function/core.html.easyui.datagrid.DataGrid	onSortColumn(function onSortColumn)					获取/设置排序
 * 			function/core.html.easyui.datagrid.DataGrid	onResizeColumn(function onResizeColumn)				获取/设置改变列宽
 * 			function/core.html.easyui.datagrid.DataGrid	onBeforeSelect(function onBeforeSelect)				获取/设置选中前
 * 			function/core.html.easyui.datagrid.DataGrid	onSelect(function onSelect)							获取/设置选中
 * 			function/core.html.easyui.datagrid.DataGrid	onBeforeUnselect(function onBeforeUnselect)			获取/设置取消选中前
 * 			function/core.html.easyui.datagrid.DataGrid	onUnselect(function onUnselect)						获取/设置取消选中
 * 			function/core.html.easyui.datagrid.DataGrid	onSelectAll(function onSelectAll)					获取/设置选中所有时
 * 			function/core.html.easyui.datagrid.DataGrid	onUnselectAll(function onUnselectAll)				获取/设置取消选中所有时
 * 			function/core.html.easyui.datagrid.DataGrid	onBeforeCheck(function onBeforeCheck)				获取/设置勾选前
 * 			function/core.html.easyui.datagrid.DataGrid	onCheck(function onCheck)							获取/设置勾选
 * 			function/core.html.easyui.datagrid.DataGrid	onBeforeUncheck(function onBeforeUncheck)			获取/设置取消勾选前
 * 			function/core.html.easyui.datagrid.DataGrid	onUncheck(function onUncheck)						获取/设置取消勾选
 * 			function/core.html.easyui.datagrid.DataGrid	onCheckAll(function onCheckAll)						获取/设置勾选所有
 * 			function/core.html.easyui.datagrid.DataGrid	onUncheckAll(function onUncheckAll)					获取/设置取消勾选所有
 * 			function/core.html.easyui.datagrid.DataGrid	onBeforeEdit(function onBeforeEdit)					获取/设置编辑前
 * 			function/core.html.easyui.datagrid.DataGrid	onBeginEdit(function onBeginEdit)					获取/设置编辑
 * 			function/core.html.easyui.datagrid.DataGrid	onEndEdit(function onEndEdit)						获取/设置结束编辑
 * 			function/core.html.easyui.datagrid.DataGrid	onAfterEdit(function onAfterEdit)					获取/设置编辑后
 * 			function/core.html.easyui.datagrid.DataGrid	onCancelEdit(function onCancelEdit)					获取/设置取消编辑
 * 			function/core.html.easyui.datagrid.DataGrid	onHeaderContextMenu(function onHeaderContextMenu)	获取/设置标题头右键点击
 * 			function/core.html.easyui.datagrid.DataGrid	onRowContextMenu(function onRowContextMenu)			获取/设置行右键点击事件
 * 			core.html.easyui.datagrid.Datagrid			init()												初始化组件模板
 * 			object										options()
 * 			object										getPager()											获取页面对象
 * 			object										getPanel()											获取面板对象
 * 			object										getColumnFields(boolean frozen)						获取列字段
 * 			object										getColumnOption(object field)						获取列属性
 * 			void										resize(object param)								调整大小
 * 			void										load(object param)									重新加载数据
 * 			void										reload(object param)								重新加载数据,且停留在当前页面
 * 			void										reloadFooter(object footer)							重载页脚
 * 			void										loading()											显示载入中
 * 			void										loaded()											隐藏载入中
 * 			void										fitColumns()										列宽自适应
 * 			void										fixColumnSize(object field)							固定列宽
 * 			void										fixRowHeight(number index)							固定指定列高度
 * 			void										freezeRow(number index)								冻结指定行
 * 			void										autoSizeColumn(object field)						列宽自适应
 * 			void										loadData(array data)								加载数据
 * 			array										getData()											获取当前数据
 * 			array										getRows()											获取所有行
 * 			object										getFooterRows()										获取所有行
 * 			number										getRowIndex(object row)								获取指定行号
 * 			object										getChecked()										获取勾选行
 * 			object										getSelected()										获取选中节点
 * 			array										getSelections()										获取所有选中行
 * 			void										clearSelections()									清除所有选中行
 * 			void										clearChecked()										清除所有勾选的行
 * 			void										scrollTo(number index)								滚动至指定行
 * 			void										gotoPage(number param)								跳至某页
 * 			void										highlightRow(number index)							高亮行
 * 			void										selectAll()											选中所有行
 * 			void										unselectAll()										取消选中所有行
 * 			void										selectRow(number index)								选中行
 * 			void										selectRecord(string idValue)						通过ID选中行
 * 			void										unselectRow(number index)							取消选中行
 * 			void										checkAll()											勾选所有行
 * 			void										uncheckAll()										取消勾选所有行
 * 			void										checkRow(number index)								勾选行
 * 			void										uncheckRow(number index)							取消勾选行
 * 			void										beginEdit(number index)								编辑行
 * 			void										endEdit(number index)								结束编辑行
 * 			void										cancelEdit(number index)							取消编辑行
 * 			object										getEditors(number index)							获取行所有编辑器
 * 			object										getEditor(object options)							获取行中某列编辑器
 * 			void										refreshRow(number index)							刷新行
 * 			void										validateRow(number index)							验证行
 * 			void										updateRow(object param)								更新行
 * 			void										appendRow(object row)								添加行
 * 			void										insertRow(object row)								插入行
 * 			void										deleteRow(number index)								删除行
 * 			array										getChanges(object type)								获取修改行
 * 			void										acceptChanges()										提交所有修改行
 * 			void										rejectChanges()										回滚修改行
 * 			void										mergeCells(object options)							合并单元格
 * 			void										showColumn(object field)							显示列
 * 			void										hideColumn(object field)							隐藏列
 * 			void										sort(object param)									排序
 * 			void										setWidth(number width)								设置宽度
 * 			void										setHeight(number height)							设置高度
 * 			number										getCurrentPageDataNum()								获取当前页数据条数
 * 			number										getTotalDataNum()									获取记录总条数
 * 			number										getPageSize()										获取分页数
 * 			number										getPageNum()										获取总页数
 * 			number										getCurrentPageNum()									获取当前页码
 * 			void										selectBeforePage()									翻至前一页
 * 			void										selectNextPage()									翻至后一页
 * 			object										getRow(number index)								获取指定行数据
 * 			number										getSelectedRowIndex()								获取选中行索引
 * 
 * @date	2018年4月27日 15:27:12
 */
core.html.easyui.datagrid.DataGrid = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.layout.Panel.call(this, arguments[0]);
		core.html.easyui.base.Resizable.call(this, arguments[0]);
		core.html.easyui.button.LinkButton.call(this, arguments[0]);
		core.html.easyui.base.Pagination.call(this, arguments[0]);
		// 默认参数修改
		this.method($.fn.datagrid.defaults.method);
		this.pageNumber($.fn.datagrid.defaults.pageNumber);
		this
				.pageSize(core.html.util.Cookie.getInstance().get("coreHtmlEasyuiDatagridDataGridPageSize") == null ? $.fn.datagrid.defaults.pageSize
						: core.html.util.Cookie.getInstance().get("coreHtmlEasyuiDatagridDataGridPageSize"));
		this.pageList($.fn.datagrid.defaults.pageList);
		this.queryParams($.fn.datagrid.defaults.queryParams);
		this.loader($.fn.datagrid.defaults.loader);
		this.onLoadError($.fn.datagrid.defaults.onLoadError);
		this.onBeforeLoad($.fn.datagrid.defaults.onBeforeLoad);

		/**
		 * 属性
		 */
		/**
		 * 列
		 */
		var columns = $.fn.datagrid.defaults.columns;
		/**
		 * 冻结列
		 */
		var frozenColumns = $.fn.datagrid.defaults.frozenColumns;
		/**
		 * 列宽自适应
		 */
		var fitColumns = $.fn.datagrid.defaults.fitColumns;
		/**
		 * 
		 */
		var resizeHandle = $.fn.datagrid.defaults.resizeHandle;
		/**
		 * 
		 */
		var resizeEdge = $.fn.datagrid.defaults.resizeEdge;
		/**
		 * 行高自适应
		 */
		var autoRowHeight = $.fn.datagrid.defaults.autoRowHeight;
		/**
		 * 工具条
		 */
		var toolbar = $.fn.datagrid.defaults.toolbar;
		/**
		 * 隔行变色
		 */
		var striped = $.fn.datagrid.defaults.striped;
		/**
		 * 禁止文字自动换行
		 */
		var nowrap = $.fn.datagrid.defaults.nowrap;
		/**
		 * id字段
		 */
		var idField = $.fn.datagrid.defaults.idField;
		/**
		 * 数据URL
		 */
		var url = $.fn.datagrid.defaults.url;
		/**
		 * 数据
		 */
		var data = $.fn.datagrid.defaults.data;
		/**
		 * 数据加载等待提示
		 */
		var loadMsg = $.fn.datagrid.defaults.loadMsg;
		/**
		 * 
		 */
		var emptyMsg = $.fn.datagrid.defaults.emptyMsg;
		/**
		 * 添加页脚工具栏
		 */
		var pagination = $.fn.datagrid.defaults.pagination;
		/**
		 * 显示行号
		 */
		var rownumbers = $.fn.datagrid.defaults.rownumbers;
		/**
		 * 仅能选中单行
		 */
		var singleSelect = $.fn.datagrid.defaults.singleSelect;
		/**
		 * ctrl键选中
		 */
		var ctrlSelect = $.fn.datagrid.defaults.ctrlSelect;
		/**
		 * check时选中
		 */
		var checkOnSelect = $.fn.datagrid.defaults.checkOnSelect;
		/**
		 * 选中时check
		 */
		var selectOnCheck = $.fn.datagrid.defaults.selectOnCheck;
		/**
		 * 
		 */
		var scrollOnSelect = $.fn.datagrid.defaults.scrollOnSelect;
		/**
		 * 分页工具条位置
		 */
		var pagePosition = $.fn.datagrid.defaults.pagePosition;
		/**
		 * 排序字段
		 */
		var sortName = $.fn.datagrid.defaults.sortName;
		/**
		 * 排序方式
		 */
		var sortOrder = $.fn.datagrid.defaults.sortOrder;
		/**
		 * 
		 */
		var multiSort = $.fn.datagrid.defaults.multiSort;
		/**
		 * 向后台发送排序条件
		 */
		var remoteSort = $.fn.datagrid.defaults.remoteSort;
		/**
		 * 显示标头
		 */
		var showHeader = $.fn.datagrid.defaults.showHeader;
		/**
		 * 显示脚
		 */
		var showFooter = $.fn.datagrid.defaults.showFooter;
		/**
		 * 
		 */
		var scrollbarSize = $.fn.datagrid.defaults.scrollbarSize;
		/**
		 * 行号宽度
		 */
		var rownumberWidth = $.fn.datagrid.defaults.rownumberWidth;
		/**
		 * 编辑框高度
		 */
		var editorHeight = $.fn.datagrid.defaults.editorHeight;
		/**
		 * 行样式
		 */
		var rowStyler = $.fn.datagrid.defaults.rowStyler;
		/**
		 * 数据加载过滤
		 */
		var loadFilter = $.fn.datagrid.defaults.loadFilter;
		/**
		 * 编辑
		 */
		var editors = $.fn.datagrid.defaults.editors;
		/**
		 * 展示
		 */
		var view = $.fn.datagrid.defaults.view;

		/**
		 * 事件
		 */
		/**
		 * 数据加载成功
		 */
		var onLoadSuccess = $.fn.datagrid.defaults.onLoadSuccess;
		/**
		 * 行单击事件
		 */
		var onClickRow = $.fn.datagrid.defaults.onClickRow;
		/**
		 * 行双击事件
		 */
		var onDblClickRow = $.fn.datagrid.defaults.onDblClickRow;
		/**
		 * 单元格单击事件
		 */
		var onClickCell = $.fn.datagrid.defaults.onClickCell;
		/**
		 * 单元格双击事件
		 */
		var onDblClickCell = $.fn.datagrid.defaults.onDblClickCell;
		/**
		 * 排序前
		 */
		var onBeforeSortColumn = $.fn.datagrid.defaults.onBeforeSortColumn;
		/**
		 * 排序
		 */
		var onSortColumn = $.fn.datagrid.defaults.onSortColumn;
		/**
		 * 改变列宽
		 */
		var onResizeColumn = $.fn.datagrid.defaults.onResizeColumn;
		/**
		 * 选中前
		 */
		var onBeforeSelect = $.fn.datagrid.defaults.onBeforeSelect;
		/**
		 * 选中
		 */
		var onSelect = $.fn.datagrid.defaults.onSelect;
		/**
		 * 取消选中前
		 */
		var onBeforeUnselect = $.fn.datagrid.defaults.onBeforeUnselect;
		/**
		 * 取消选中
		 */
		var onUnselect = $.fn.datagrid.defaults.onUnselect;
		/**
		 * 选中所有时
		 */
		var onSelectAll = $.fn.datagrid.defaults.onSelectAll;
		/**
		 * 取消选中所有时
		 */
		var onUnselectAll = $.fn.datagrid.defaults.onUnselectAll;
		/**
		 * 勾选前
		 */
		var onBeforeCheck = $.fn.datagrid.defaults.onBeforeCheck;
		/**
		 * 勾选
		 */
		var onCheck = $.fn.datagrid.defaults.onCheck;
		/**
		 * 取消勾选前
		 */
		var onBeforeUncheck = $.fn.datagrid.defaults.onBeforeUncheck;
		/**
		 * 取消勾选
		 */
		var onUncheck = $.fn.datagrid.defaults.onUncheck;
		/**
		 * 勾选所有
		 */
		var onCheckAll = $.fn.datagrid.defaults.onCheckAll;
		/**
		 * 取消勾选所有
		 */
		var onUncheckAll = $.fn.datagrid.defaults.onUncheckAll;
		/**
		 * 编辑前
		 */
		var onBeforeEdit = $.fn.datagrid.defaults.onBeforeEdit;
		/**
		 * 编辑
		 */
		var onBeginEdit = $.fn.datagrid.defaults.onBeginEdit;
		/**
		 * 结束编辑
		 */
		var onEndEdit = $.fn.datagrid.defaults.onEndEdit;
		/**
		 * 编辑后
		 */
		var onAfterEdit = $.fn.datagrid.defaults.onAfterEdit;
		/**
		 * 取消编辑
		 */
		var onCancelEdit = $.fn.datagrid.defaults.onCancelEdit;
		/**
		 * 标题头右键点击
		 */
		var onHeaderContextMenu = $.fn.datagrid.defaults.onHeaderContextMenu;
		/**
		 * 行右键点击事件
		 */
		var onRowContextMenu = $.fn.datagrid.defaults.onRowContextMenu;

		/**
		 * 获取/设置列
		 * 
		 * @param columns{array}
		 * @returns {array/core.html.easyui.datagrid.DataGrid}
		 */
		this.columns = function() {

			switch (arguments.length) {
			case 0:
				return columns;
			default:
				columns = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置冻结列
		 * 
		 * @param frozenColumns{array}
		 * @returns {array/core.html.easyui.datagrid.DataGrid}
		 */
		this.frozenColumns = function() {

			switch (arguments.length) {
			case 0:
				return frozenColumns;
			default:
				frozenColumns = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置列宽自适应
		 * 
		 * @param fitColumns{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.fitColumns = function() {

			switch (arguments.length) {
			case 0:
				return fitColumns;
			default:
				fitColumns = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param resizeHandle{string}
		 * @returns {string/core.html.easyui.datagrid.DataGrid}
		 */
		this.resizeHandle = function() {

			switch (arguments.length) {
			case 0:
				return resizeHandle;
			default:
				resizeHandle = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param resizeEdge{number}
		 * @returns {number/core.html.easyui.datagrid.DataGrid}
		 */
		this.resizeEdge = function() {

			switch (arguments.length) {
			case 0:
				return resizeEdge;
			default:
				resizeEdge = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置行高自适应
		 * 
		 * @param autoRowHeight{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.autoRowHeight = function() {

			switch (arguments.length) {
			case 0:
				return autoRowHeight;
			default:
				autoRowHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置工具条
		 * 
		 * @param toolbar{array}
		 * @returns {array/core.html.easyui.datagrid.DataGrid}
		 */
		this.toolbar = function() {

			switch (arguments.length) {
			case 0:
				return toolbar;
			default:
				toolbar = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置隔行变色
		 * 
		 * @param striped{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.striped = function() {

			switch (arguments.length) {
			case 0:
				return striped;
			default:
				striped = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置禁止文字自动换行
		 * 
		 * @param nowrap{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.nowrap = function() {

			switch (arguments.length) {
			case 0:
				return nowrap;
			default:
				nowrap = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置id字段
		 * 
		 * @param idField{string}
		 * @returns {string/core.html.easyui.datagrid.DataGrid}
		 */
		this.idField = function() {

			switch (arguments.length) {
			case 0:
				return idField;
			default:
				idField = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置数据URL
		 * 
		 * @param url{string}
		 * @returns {string/core.html.easyui.datagrid.DataGrid}
		 */
		this.url = function() {

			switch (arguments.length) {
			case 0:
				return url;
			default:
				url = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置数据
		 * 
		 * @param data{array}
		 * @returns {array/core.html.easyui.datagrid.DataGrid}
		 */
		this.data = function() {

			switch (arguments.length) {
			case 0:
				return data;
			default:
				data = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置数据加载等待提示
		 * 
		 * @param loadMsg{string}
		 * @returns {string/core.html.easyui.datagrid.DataGrid}
		 */
		this.loadMsg = function() {

			switch (arguments.length) {
			case 0:
				return loadMsg;
			default:
				loadMsg = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param emptyMsg{string}
		 * @returns {string/core.html.easyui.datagrid.DataGrid}
		 */
		this.emptyMsg = function() {

			switch (arguments.length) {
			case 0:
				return emptyMsg;
			default:
				emptyMsg = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置添加页脚工具栏
		 * 
		 * @param pagination{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.pagination = function() {

			switch (arguments.length) {
			case 0:
				return pagination;
			default:
				pagination = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示行号
		 * 
		 * @param rownumbers{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.rownumbers = function() {

			switch (arguments.length) {
			case 0:
				return rownumbers;
			default:
				rownumbers = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置仅能选中单行
		 * 
		 * @param singleSelect{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.singleSelect = function() {

			switch (arguments.length) {
			case 0:
				return singleSelect;
			default:
				singleSelect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置ctrl键选中
		 * 
		 * @param ctrlSelect{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.ctrlSelect = function() {

			switch (arguments.length) {
			case 0:
				return ctrlSelect;
			default:
				ctrlSelect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置check时选中
		 * 
		 * @param checkOnSelect{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.checkOnSelect = function() {

			switch (arguments.length) {
			case 0:
				return checkOnSelect;
			default:
				checkOnSelect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置选中时check
		 * 
		 * @param selectOnCheck{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.selectOnCheck = function() {

			switch (arguments.length) {
			case 0:
				return selectOnCheck;
			default:
				selectOnCheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param scrollOnSelect{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.scrollOnSelect = function() {

			switch (arguments.length) {
			case 0:
				return scrollOnSelect;
			default:
				scrollOnSelect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置分页工具条位置
		 * 
		 * @param pagePosition{string}
		 * @returns {string/core.html.easyui.datagrid.DataGrid}
		 */
		this.pagePosition = function() {

			switch (arguments.length) {
			case 0:
				return pagePosition;
			default:
				pagePosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置排序字段
		 * 
		 * @param sortName{string}
		 * @returns {string/core.html.easyui.datagrid.DataGrid}
		 */
		this.sortName = function() {

			switch (arguments.length) {
			case 0:
				return sortName;
			default:
				sortName = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置排序方式
		 * 
		 * @param sortOrder{string}
		 * @returns {string/core.html.easyui.datagrid.DataGrid}
		 */
		this.sortOrder = function() {

			switch (arguments.length) {
			case 0:
				return sortOrder;
			default:
				sortOrder = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param multiSort{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.multiSort = function() {

			switch (arguments.length) {
			case 0:
				return multiSort;
			default:
				multiSort = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置向后台发送排序条件
		 * 
		 * @param remoteSort{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.remoteSort = function() {

			switch (arguments.length) {
			case 0:
				return remoteSort;
			default:
				remoteSort = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示标头
		 * 
		 * @param showHeader{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.showHeader = function() {

			switch (arguments.length) {
			case 0:
				return showHeader;
			default:
				showHeader = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示脚
		 * 
		 * @param showFooter{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.showFooter = function() {

			switch (arguments.length) {
			case 0:
				return showFooter;
			default:
				showFooter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param scrollbarSize{number}
		 * @returns {number/core.html.easyui.datagrid.DataGrid}
		 */
		this.scrollbarSize = function() {

			switch (arguments.length) {
			case 0:
				return scrollbarSize;
			default:
				scrollbarSize = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置行号宽度
		 * 
		 * @param rownumberWidth{number}
		 * @returns {number/core.html.easyui.datagrid.DataGrid}
		 */
		this.rownumberWidth = function() {

			switch (arguments.length) {
			case 0:
				return rownumberWidth;
			default:
				rownumberWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置编辑框高度
		 * 
		 * @param editorHeight{number}
		 * @returns {number/core.html.easyui.datagrid.DataGrid}
		 */
		this.editorHeight = function() {

			switch (arguments.length) {
			case 0:
				return editorHeight;
			default:
				editorHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置行样式
		 * 
		 * @param rowStyler{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.rowStyler = function() {

			switch (arguments.length) {
			case 0:
				return rowStyler;
			default:
				rowStyler = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置数据加载过滤
		 * 
		 * @param loadFilter{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.loadFilter = function() {

			switch (arguments.length) {
			case 0:
				return loadFilter;
			default:
				loadFilter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置编辑
		 * 
		 * @param editors{object}
		 * @returns {object/core.html.easyui.datagrid.DataGrid}
		 */
		this.editors = function() {

			switch (arguments.length) {
			case 0:
				return editors;
			default:
				editors = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置展示
		 * 
		 * @param view{object}
		 * @returns {object/core.html.easyui.datagrid.DataGrid}
		 */
		this.view = function() {

			switch (arguments.length) {
			case 0:
				return view;
			default:
				view = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置数据加载成功事件
		 * 
		 * @param onLoadSuccess{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onLoadSuccess = function() {

			switch (arguments.length) {
			case 0:
				return onLoadSuccess;
			default:
				onLoadSuccess = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置行单击事件
		 * 
		 * @param onClickRow{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onClickRow = function() {

			switch (arguments.length) {
			case 0:
				return onClickRow;
			default:
				onClickRow = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置行双击事件
		 * 
		 * @param onDblClickRow{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onDblClickRow = function() {

			switch (arguments.length) {
			case 0:
				return onDblClickRow;
			default:
				onDblClickRow = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置单元格单击事件
		 * 
		 * @param onClickCell{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onClickCell = function() {

			switch (arguments.length) {
			case 0:
				return onClickCell;
			default:
				onClickCell = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置单元格双击事件
		 * 
		 * @param onDblClickCell{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onDblClickCell = function() {

			switch (arguments.length) {
			case 0:
				return onDblClickCell;
			default:
				onDblClickCell = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置排序前
		 * 
		 * @param onBeforeSortColumn{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onBeforeSortColumn = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeSortColumn;
			default:
				onBeforeSortColumn = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置排序
		 * 
		 * @param onSortColumn{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onSortColumn = function() {

			switch (arguments.length) {
			case 0:
				return onSortColumn;
			default:
				onSortColumn = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置改变列宽
		 * 
		 * @param onResizeColumn{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onResizeColumn = function() {

			switch (arguments.length) {
			case 0:
				return onResizeColumn;
			default:
				onResizeColumn = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置选中前
		 * 
		 * @param onBeforeSelect{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onBeforeSelect = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeSelect;
			default:
				onBeforeSelect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置选中
		 * 
		 * @param onSelect{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onSelect = function() {

			switch (arguments.length) {
			case 0:
				return onSelect;
			default:
				onSelect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置取消选中前
		 * 
		 * @param onBeforeUnselect{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onBeforeUnselect = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeUnselect;
			default:
				onBeforeUnselect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置取消选中
		 * 
		 * @param onUnselect{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onUnselect = function() {

			switch (arguments.length) {
			case 0:
				return onUnselect;
			default:
				onUnselect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置选中所有时
		 * 
		 * @param onSelectAll{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onSelectAll = function() {

			switch (arguments.length) {
			case 0:
				return onSelectAll;
			default:
				onSelectAll = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置取消选中所有时
		 * 
		 * @param onUnselectAll{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onUnselectAll = function() {

			switch (arguments.length) {
			case 0:
				return onUnselectAll;
			default:
				onUnselectAll = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置勾选前
		 * 
		 * @param onBeforeCheck{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onBeforeCheck = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeCheck;
			default:
				onBeforeCheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置勾选
		 * 
		 * @param onCheck{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onCheck = function() {

			switch (arguments.length) {
			case 0:
				return onCheck;
			default:
				onCheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置取消勾选前
		 * 
		 * @param onBeforeUncheck{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onBeforeUncheck = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeUncheck;
			default:
				onBeforeUncheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置取消勾选
		 * 
		 * @param onUncheck{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onUncheck = function() {

			switch (arguments.length) {
			case 0:
				return onUncheck;
			default:
				onUncheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置勾选所有
		 * 
		 * @param onCheckAll{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onCheckAll = function() {

			switch (arguments.length) {
			case 0:
				return onCheckAll;
			default:
				onCheckAll = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置取消勾选所有
		 * 
		 * @param onUncheckAll{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onUncheckAll = function() {

			switch (arguments.length) {
			case 0:
				return onUncheckAll;
			default:
				onUncheckAll = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置编辑前
		 * 
		 * @param onBeforeEdit{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onBeforeEdit = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeEdit;
			default:
				onBeforeEdit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置编辑
		 * 
		 * @param onBeginEdit{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onBeginEdit = function() {

			switch (arguments.length) {
			case 0:
				return onBeginEdit;
			default:
				onBeginEdit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置结束编辑
		 * 
		 * @param onEndEdit{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onEndEdit = function() {

			switch (arguments.length) {
			case 0:
				return onEndEdit;
			default:
				onEndEdit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置编辑后
		 * 
		 * @param onAfterEdit{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onAfterEdit = function() {

			switch (arguments.length) {
			case 0:
				return onAfterEdit;
			default:
				onAfterEdit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置取消编辑
		 * 
		 * @param onCancelEdit{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onCancelEdit = function() {

			switch (arguments.length) {
			case 0:
				return onCancelEdit;
			default:
				onCancelEdit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置标题头右键点击
		 * 
		 * @param onHeaderContextMenu{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onHeaderContextMenu = function() {

			switch (arguments.length) {
			case 0:
				return onHeaderContextMenu;
			default:
				onHeaderContextMenu = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置行右键点击事件
		 * 
		 * @param onRowContextMenu{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onRowContextMenu = function() {

			switch (arguments.length) {
			case 0:
				return onRowContextMenu;
			default:
				onRowContextMenu = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.datagrid.DataGrid", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().datagrid({
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
			// 属性
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
			// 事件
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

		$(this.getPager()).pagination({
			
			onChangePageSize : function(pageSize) {
				
				core.html.util.Cookie.getInstance().set("coreHtmlEasyuiDatagridDataGridPageSize", pageSize);
			}
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

		return this.$jQuery().datagrid("options");
	};

	/**
	 * 获取页面对象
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getPager = function() {

		return this.$jQuery().datagrid("getPager");
	};

	/**
	 * 获取面板对象
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getPanel = function() {

		return this.$jQuery().datagrid("getPanel");
	};

	/**
	 * 获取列字段
	 * 
	 * @param frozen{boolean}
	 * @returns {object}
	 */
	Constructor.prototype.getColumnFields = function(frozen) {

		return this.$jQuery().datagrid("getColumnFields", frozen);
	};

	/**
	 * 获取列属性
	 * 
	 * @param field{object}
	 * @returns {object}
	 */
	Constructor.prototype.getColumnOption = function(field) {

		return this.$jQuery().datagrid("getColumnOption", field);
	};

	/**
	 * 调整大小
	 * 
	 * @param param{object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.resize = function(param) {

		return this.$jQuery().datagrid("resize", param);
	};

	/**
	 * 重新加载数据
	 * 
	 * @param param{object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.load = function(param) {

		return this.$jQuery().datagrid("load", param);
	};

	/**
	 * 重新加载数据,且停留在当前页面
	 * 
	 * @param param{object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.reload = function(param) {

		return this.$jQuery().datagrid("reload", param);
	};

	/**
	 * 重载页脚
	 * 
	 * @param footer{object}
	 * @returns
	 */
	Constructor.prototype.reloadFooter = function(footer) {

		return this.$jQuery().datagrid("reloadFooter", footer);
	};

	/**
	 * 显示载入中
	 * 
	 * @returns
	 */
	Constructor.prototype.loading = function() {

		return this.$jQuery().datagrid("loading");
	};

	/**
	 * 隐藏载入中
	 * 
	 * @returns
	 */
	Constructor.prototype.loaded = function() {

		return this.$jQuery().datagrid("loaded");
	};

	/**
	 * 列宽自适应
	 * 
	 * @returns
	 */
	Constructor.prototype.fitColumns = function() {

		return this.$jQuery().datagrid("fitColumns");
	};

	/**
	 * 固定列宽
	 * 
	 * @param field{object}
	 *            字段
	 * @returns
	 */
	Constructor.prototype.fixColumnSize = function(field) {

		return this.$jQuery().datagrid("fixColumnSize", field);
	};

	/**
	 * 固定指定列高度
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.fixRowHeight = function(index) {

		return this.$jQuery().datagrid("fixRowHeight", index);
	};

	/**
	 * 冻结指定行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.freezeRow = function(index) {

		return this.$jQuery().datagrid("freezeRow", index);
	};

	/**
	 * 列宽自适应
	 * 
	 * @param field{object}
	 *            列字段
	 * @returns
	 */
	Constructor.prototype.autoSizeColumn = function(field) {

		return this.$jQuery().datagrid("autoSizeColumn", field);
	};

	/**
	 * 加载数据
	 * 
	 * @param data{array}
	 *            需要加载的数据
	 * @returns
	 */
	Constructor.prototype.loadData = function(data) {

		return this.$jQuery().datagrid("loadData", data);
	};

	/**
	 * 获取当前数据
	 * 
	 * @returns {array}
	 */
	Constructor.prototype.getData = function() {

		return this.$jQuery().datagrid("getData");
	};

	/**
	 * 获取所有行
	 * 
	 * @returns {array}
	 */
	Constructor.prototype.getRows = function() {

		return this.$jQuery().datagrid("getRows");
	};

	/**
	 * 获取页脚所有行
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getFooterRows = function() {

		return this.$jQuery().datagrid("getFooterRows");
	};

	/**
	 * 获取指定行号
	 * 
	 * @param row{object}
	 *            行对象
	 * @returns {number}
	 */
	Constructor.prototype.getRowIndex = function(row) {

		return this.$jQuery().datagrid("getRowIndex", row);
	};

	/**
	 * 获取勾选行
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getChecked = function() {

		return this.$jQuery().datagrid("getChecked");
	};

	/**
	 * 获取选中节点
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getSelected = function() {

		return this.$jQuery().datagrid("getSelected");
	};

	/**
	 * 获取所有选中行
	 * 
	 * @returns {array}
	 */
	Constructor.prototype.getSelections = function() {

		return this.$jQuery().datagrid("getSelections");
	};

	/**
	 * 清除所有选中行
	 * 
	 * @returns
	 */
	Constructor.prototype.clearSelections = function() {

		return this.$jQuery().datagrid("clearSelections");
	};

	/**
	 * 清除所有勾选的行
	 * 
	 * @returns
	 */
	Constructor.prototype.clearChecked = function() {

		return this.$jQuery().datagrid("clearChecked");
	};

	/**
	 * 滚动至指定行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.scrollTo = function(index) {

		return this.$jQuery().datagrid("scrollTo", index);
	};

	/**
	 * 跳至某页
	 * 
	 * @param param{number}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.gotoPage = function(param) {

		return this.$jQuery().datagrid("gotoPage", param);
	};

	/**
	 * 高亮行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.highlightRow = function(index) {

		return this.$jQuery().datagrid("highlightRow", index);
	};

	/**
	 * 选中所有行
	 * 
	 * @returns
	 */
	Constructor.prototype.selectAll = function() {

		return this.$jQuery().datagrid("selectAll");
	};

	/**
	 * 取消选中所有行
	 * 
	 * @returns
	 */
	Constructor.prototype.unselectAll = function() {

		return this.$jQuery().datagrid("unselectAll");
	};

	/**
	 * 选中行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.selectRow = function(index) {

		return this.$jQuery().datagrid("selectRow", index);
	};

	/**
	 * 通过ID选中行
	 * 
	 * @param idValue{string}
	 *            id值
	 * @returns
	 */
	Constructor.prototype.selectRecord = function(idValue) {

		return this.$jQuery().datagrid("selectRecord", idValue);
	};

	/**
	 * 取消选中行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.unselectRow = function(index) {

		return this.$jQuery().datagrid("unselectRow", index);
	};

	/**
	 * 勾选所有行
	 * 
	 * @returns
	 */
	Constructor.prototype.checkAll = function() {

		return this.$jQuery().datagrid("checkAll");
	};

	/**
	 * 取消勾选所有行
	 * 
	 * @returns
	 */
	Constructor.prototype.uncheckAll = function() {

		return this.$jQuery().datagrid("uncheckAll");
	};

	/**
	 * 勾选行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.checkRow = function(index) {

		return this.$jQuery().datagrid("checkRow", index);
	};

	/**
	 * 取消勾选行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.uncheckRow = function(index) {

		return this.$jQuery().datagrid("uncheckRow", index);
	};

	/**
	 * 编辑行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.beginEdit = function(index) {

		return this.$jQuery().datagrid("beginEdit", index);
	};

	/**
	 * 结束编辑行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.endEdit = function(index) {

		return this.$jQuery().datagrid("endEdit", index);
	};

	/**
	 * 取消编辑行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.cancelEdit = function(index) {

		return this.$jQuery().datagrid("cancelEdit", index);
	};

	/**
	 * 获取行所有编辑器
	 * 
	 * @param index{number}
	 *            行号
	 * @returns {object}
	 */
	Constructor.prototype.getEditors = function(index) {

		return this.$jQuery().datagrid("getEditors", index);
	};

	/**
	 * 获取行中某列编辑器
	 * 
	 * @param options{object}
	 *            参数
	 * @returns {object}
	 */
	Constructor.prototype.getEditor = function(options) {

		return this.$jQuery().datagrid("getEditor", options);
	};

	/**
	 * 刷新行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.refreshRow = function(index) {

		return this.$jQuery().datagrid("refreshRow", index);
	};

	/**
	 * 验证行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.validateRow = function(index) {

		return this.$jQuery().datagrid("validateRow", index);
	};

	/**
	 * 更新行
	 * 
	 * @param param{object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.updateRow = function(param) {

		return this.$jQuery().datagrid("updateRow", param);
	};

	/**
	 * 添加行
	 * 
	 * @param row{object}
	 *            行对象
	 * @returns
	 */
	Constructor.prototype.appendRow = function(row) {

		return this.$jQuery().datagrid("appendRow", row);
	};

	/**
	 * 插入行
	 * 
	 * @param param{object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.insertRow = function(param) {

		return this.$jQuery().datagrid("insertRow", param);
	};

	/**
	 * 删除行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.deleteRow = function(index) {

		return this.$jQuery().datagrid("deleteRow", index);
	};

	/**
	 * 获取修改行
	 * 
	 * @param type{object}
	 *            类型
	 * @returns {array}
	 */
	Constructor.prototype.getChanges = function(type) {

		return this.$jQuery().datagrid("getChanges", type);
	};

	/**
	 * 提交所有修改行
	 * 
	 * @returns
	 */
	Constructor.prototype.acceptChanges = function() {

		return this.$jQuery().datagrid("acceptChanges");
	};

	/**
	 * 回滚修改行
	 * 
	 * @returns
	 */
	Constructor.prototype.rejectChanges = function() {

		return this.$jQuery().datagrid("rejectChanges");
	};

	/**
	 * 合并单元格
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.mergeCells = function(options) {

		return this.$jQuery().datagrid("mergeCells", options);
	};

	/**
	 * 显示列
	 * 
	 * @param field{object}
	 *            列字段
	 * @returns
	 */
	Constructor.prototype.showColumn = function(field) {

		return this.$jQuery().datagrid("showColumn", field);
	};

	/**
	 * 隐藏列
	 * 
	 * @param field{object}
	 *            列字段
	 * @returns
	 */
	Constructor.prototype.hideColumn = function(field) {

		return this.$jQuery().datagrid("hideColumn", field);
	};

	/**
	 * 排序
	 * 
	 * @param param{object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.sort = function(param) {

		return this.$jQuery().datagrid("sort", param);
	};

	/** ==========扩展方法========== */
	/**
	 * 设置宽度
	 * 
	 * @param width{number}
	 *            宽度
	 * @returns
	 */
	Constructor.prototype.setWidth = function(width) {

		return this.resize({
			
			width : width
		});
	};

	/**
	 * 设置高度
	 * 
	 * @param height{number}
	 *            高度
	 * @returns
	 */
	Constructor.prototype.setHeight = function(height) {

		return this.resize({
			
			height : height
		});
	};

	/**
	 * 获取当前页数据条数
	 * 
	 * @returns {number}
	 */
	Constructor.prototype.getCurrentPageDataNum = function() {

		return this.getData().rows.length;
	}

	/**
	 * 获取记录总条数
	 * 
	 * @returns {number}
	 */
	Constructor.prototype.getTotalDataNum = function() {

		return this.getData().total;
	}

	/**
	 * 获取分页数
	 * 
	 * @returns {number}
	 */
	Constructor.prototype.getPageSize = function() {

		return $(this.getPager()).pagination("options").pageSize;
	}

	/**
	 * 获取总页数
	 * 
	 * @returns {number}
	 */
	Constructor.prototype.getPageNum = function() {

		var options = $(this.getPager()).pagination("options");
		var total = options.total;
		var max = Math.ceil(total / options.pageSize);
		
		return max;
	}

	/**
	 * 获取当前页码
	 * 
	 * @returns {number}
	 */
	Constructor.prototype.getCurrentPageNum = function() {

		return $(this.getPager()).pagination("options").pageNumber;
	}

	/**
	 * 翻至前一页
	 * 
	 * @returns
	 */
	Constructor.prototype.gotoBeforePage = function() {

		this.gotoPage(this.getCurrentPageNum() - 1);
	}

	/**
	 * 翻至后一页
	 * 
	 * @returns
	 */
	Constructor.prototype.gotoNextPage = function() {

		this.gotoPage(this.getCurrentPageNum() + 1);
	}

	/**
	 * 获取指定行数据
	 * 
	 * @param index{number}
	 *            行号
	 * @returns {object}
	 */
	Constructor.prototype.getRow = function(index) {

		return this.getRows()[index];
	};

	/**
	 * 获取选中行索引
	 * 
	 * @returns {number}
	 */
	Constructor.prototype.getSelectedRowIndex = function() {

		return this.getRowIndex(this.getSelected());
	};

	// 返回构造函数
	return Constructor;
})();