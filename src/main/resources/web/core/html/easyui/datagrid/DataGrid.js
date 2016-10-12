/**
 * @name	Datagrid
 * @package core.html.easyui.datagrid
 * @desc	数据列表模板
 * @type	类型
 * 
 * @constructor	core.html.easyui.datagrid.DataGrid(String id)
 * 
 * @method	继承core.html.easyui.layout.Panel所有方法
 * 			Object/core.html.easyui.datagrid.DataGrid	columns()										获取/设置列
 * 			Object/core.html.easyui.datagrid.DataGrid	frozenColumns()									获取/设置冻结列
 * 			Object/core.html.easyui.datagrid.DataGrid	fitColumns()									获取/设置列宽自适应
 * 			Object/core.html.easyui.datagrid.DataGrid	resizeHandle()									获取/设置
 * 			Object/core.html.easyui.datagrid.DataGrid	autoRowHeight()									获取/设置行高自适应
 * 			Object/core.html.easyui.datagrid.DataGrid	toolbar()										获取/设置工具条
 * 			Object/core.html.easyui.datagrid.DataGrid	striped()										获取/设置隔行变色
 * 			Object/core.html.easyui.datagrid.DataGrid	nowrap()										获取/设置禁止文字自动换行
 * 			Object/core.html.easyui.datagrid.DataGrid	idField()										获取/设置id字段
 * 			Object/core.html.easyui.datagrid.DataGrid	url()											获取/设置数据URL
 * 			Object/core.html.easyui.datagrid.DataGrid	data()											获取/设置数据
 * 			Object/core.html.easyui.datagrid.DataGrid	loadMsg()										获取/设置数据加载等待提示
 * 			Object/core.html.easyui.datagrid.DataGrid	emptyMsg()										获取/设置
 * 			Object/core.html.easyui.datagrid.DataGrid	pagination()									获取/设置添加页脚工具栏
 * 			Object/core.html.easyui.datagrid.DataGrid	rownumbers()									获取/设置显示行号
 * 			Object/core.html.easyui.datagrid.DataGrid	singleSelect()									获取/设置仅能选中单行
 * 			Object/core.html.easyui.datagrid.DataGrid	ctrlSelect()									获取/设置ctrl键选中
 * 			Object/core.html.easyui.datagrid.DataGrid	checkOnSelect()									获取/设置check时选中
 * 			Object/core.html.easyui.datagrid.DataGrid	selectOnCheck()									获取/设置选中时check
 * 			Object/core.html.easyui.datagrid.DataGrid	pagePosition()									获取/设置分页工具条位置
 * 			Object/core.html.easyui.datagrid.DataGrid	pageNumber()									获取/设置默认页码
 * 			Object/core.html.easyui.datagrid.DataGrid	pageSize()										获取/设置分页数
 * 			Object/core.html.easyui.datagrid.DataGrid	pageList()										获取/设置分页数可选列表
 * 			Object/core.html.easyui.datagrid.DataGrid	sortName()										获取/设置排序字段
 * 			Object/core.html.easyui.datagrid.DataGrid	sortOrder()										获取/设置排序方式
 * 			Object/core.html.easyui.datagrid.DataGrid	multiSort()										获取/设置
 * 			Object/core.html.easyui.datagrid.DataGrid	remoteSort()									获取/设置向后台发送排序条件
 * 			Object/core.html.easyui.datagrid.DataGrid	showHeader()									获取/设置显示标头
 * 			Object/core.html.easyui.datagrid.DataGrid	showFooter()									获取/设置显示脚
 * 			Object/core.html.easyui.datagrid.DataGrid	scrollbarSize()									获取/设置
 * 			Object/core.html.easyui.datagrid.DataGrid	rownumberWidth()								获取/设置行号宽度
 * 			Object/core.html.easyui.datagrid.DataGrid	editorHeight()									获取/设置编辑框高度
 * 			Object/core.html.easyui.datagrid.DataGrid	rowStyler()										获取/设置行样式
 * 			Object/core.html.easyui.datagrid.DataGrid	loadFilter()									获取/设置数据加载过滤
 * 			Object/core.html.easyui.datagrid.DataGrid	editors()										获取/设置编辑
 * 			Object/core.html.easyui.datagrid.DataGrid	view()											获取/设置展示
 * 			Object/core.html.easyui.datagrid.DataGrid	onLoadSuccess()									获取/设置数据加载成功事件
 * 			Object/core.html.easyui.datagrid.DataGrid	onClickRow()									获取/设置行单击事件
 * 			Object/core.html.easyui.datagrid.DataGrid	onDblClickRow()									获取/设置行双击事件
 * 			Object/core.html.easyui.datagrid.DataGrid	onClickCell()									获取/设置单元格单击事件
 * 			Object/core.html.easyui.datagrid.DataGrid	onDblClickCell()								获取/设置单元格双击事件
 * 			Object/core.html.easyui.datagrid.DataGrid	onBeforeSortColumn()							获取/设置排序前
 * 			Object/core.html.easyui.datagrid.DataGrid	onSortColumn()									获取/设置排序
 * 			Object/core.html.easyui.datagrid.DataGrid	onResizeColumn()								获取/设置改变列宽
 * 			Object/core.html.easyui.datagrid.DataGrid	onBeforeSelect()								获取/设置选中前
 * 			Object/core.html.easyui.datagrid.DataGrid	onSelect()										获取/设置选中
 * 			Object/core.html.easyui.datagrid.DataGrid	onBeforeUnselect()								获取/设置取消选中前
 * 			Object/core.html.easyui.datagrid.DataGrid	onUnselect()									获取/设置取消选中
 * 			Object/core.html.easyui.datagrid.DataGrid	onSelectAll()									获取/设置选中所有时
 * 			Object/core.html.easyui.datagrid.DataGrid	onUnselectAll()									获取/设置取消选中所有时
 * 			Object/core.html.easyui.datagrid.DataGrid	onBeforeCheck()									获取/设置勾选前
 * 			Object/core.html.easyui.datagrid.DataGrid	onCheck()										获取/设置勾选
 * 			Object/core.html.easyui.datagrid.DataGrid	onBeforeUncheck()								获取/设置取消勾选前
 * 			Object/core.html.easyui.datagrid.DataGrid	onUncheck()										获取/设置取消勾选
 * 			Object/core.html.easyui.datagrid.DataGrid	onCheckAll()									获取/设置勾选所有
 * 			Object/core.html.easyui.datagrid.DataGrid	onUncheckAll()									获取/设置取消勾选所有
 * 			Object/core.html.easyui.datagrid.DataGrid	onBeforeEdit()									获取/设置编辑前
 * 			Object/core.html.easyui.datagrid.DataGrid	onBeginEdit()									获取/设置编辑
 * 			Object/core.html.easyui.datagrid.DataGrid	onEndEdit()										获取/设置结束编辑
 * 			Object/core.html.easyui.datagrid.DataGrid	onAfterEdit()									获取/设置编辑后
 * 			Object/core.html.easyui.datagrid.DataGrid	onCancelEdit()									获取/设置取消编辑
 * 			Object/core.html.easyui.datagrid.DataGrid	onHeaderContextMenu()							获取/设置标题头右键点击
 * 			Object/core.html.easyui.datagrid.DataGrid	onRowContextMenu()								获取/设置行右键点击事件
 * 			core.html.easyui.datagrid.Datagrid			init()											初始化组件模板
 * 			Object										options()		
 * 			Object										getPager()										获取页面对象
 * 			Object										getPanel()										获取面板对象
 * 			Object										getColumnFields(Object frozen)					获取列字段
 * 			Object										getColumnOption(Object field)					获取列属性
 * 			Object										resize(Object param)							调整大小
 * 			Object										load(Object param)								重新加载数据
 * 			Object										reload(Object param)							重新加载数据,且停留在当前页面
 * 			Object										reloadFooter(Object footer)						重载页脚
 * 			Object										loading()										显示载入中
 * 			Object										loaded()										隐藏载入中
 * 			Object										fitColumns()									列宽自适应
 * 			Object										fixColumnSize(Object field)						固定列宽
 * 			Object										fixRowHeight(Number index)						固定指定列高度
 * 			Object										freezeRow(Number index)							冻结指定行
 * 			Object										autoSizeColumn(Object field)					列宽自适应
 * 			Object										loadData(Object data)							加载数据
 * 			Object										getData()										获取当前数据
 * 			Object										getRows()										获取所有行
 * 			Object										getFooterRows()									获取所有行
 * 			Object										getRowIndex(Object row)							获取指定行号
 * 			Object										getChecked()									获取勾选行
 * 			Object										getSelected()									获取选中节点
 * 			Object										getSelections()									获取所有选中行
 * 			Object										clearSelections()								清除所有选中行
 * 			Object										clearChecked()									清除所有勾选的行
 * 			Object										scrollTo(Number index)							滚动至指定行
 * 			Object										gotoPage(Object param)							跳至某页
 * 			Object										highlightRow(Number index)						高亮行
 * 			Object										selectAll()										选中所有行
 * 			Object										unselectAll()									取消选中所有行
 * 			Object										selectRow(Number index)							选中行
 * 			Object										selectRecord(Object idValue)					通过ID选中行
 * 			Object										unselectRow(Number index)						取消选中行
 * 			Object										checkAll()										勾选所有行
 * 			Object										uncheckAll()									取消勾选所有行
 * 			Object										checkRow(Number index)							勾选行
 * 			Object										uncheckRow(Number index)						取消勾选行
 * 			Object										beginEdit(Number index)							编辑行
 * 			Object										endEdit(Number index)							结束编辑行
 * 			Object										cancelEdit(Number index)						取消编辑行
 * 			Object										getEditors(Number index)						获取行所有编辑器
 * 			Object										getEditor(Object options)						获取行中某列编辑器
 * 			Object										refreshRow(Number index)						刷新行
 * 			Object										validateRow(Number index)						验证行
 * 			Object										updateRow(Object param)							更新行
 * 			Object										appendRow(Object row)							添加行
 * 			Object										insertRow(Object row)							插入行
 * 			Object										deleteRow(Number index)							删除行
 * 			Object										getChanges(Object type)							获取修改行
 * 			Object										acceptChanges()									提交所有修改行
 * 			Object										rejectChanges()									回滚修改行
 * 			Object										mergeCells(Object options)						合并单元格
 * 			Object										showColumn(Object field)						显示列
 * 			Object										hideColumn(Object field)						隐藏列
 * 			Object										sort(Object param)								排序
 * 			Object										setWidth(Number width)							设置宽度
 * 			Object										setHeight(Number height)						设置高度
 * 			Object										getCurrentDataNum()								获取当前页数据条数
 * 			Object										getTotalDataNum()								获取记录总条数
 * 			Object										getPageSize()									获取分页数
 * 			Object										getPageNum()									获取总页数
 * 			Object										getCurrentPageNum()								获取当前页码
 * 			Object										selectBeforePage()								翻至前一页
 * 			Object										selectNextPage()								翻至后一页
 * 			Object										getRow(Number index)							获取指定行数据
 * 			Object										changeRowOrder(Number index1, Number index2)	互换两行位置
 * 			Object										getSelectedRowIndex()							获取选中行索引
 * 
 * @date	2016年8月26日 16:51:16
 */

core.html.easyui.datagrid.DataGrid = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.datagrid.DataGrid.superClass.constructor.call(this, id);
		this.loader($.fn.datagrid.defaults.loader);

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
		 * 分页工具条位置
		 */
		var pagePosition = $.fn.datagrid.defaults.pagePosition;
		/**
		 * 默认页码
		 */
		var pageNumber = $.fn.datagrid.defaults.pageNumber;
		/**
		 * 分页数
		 */
		var pageSize = core.html.util.Cookie.getInstance().get("coreHtmlEasyuiDatagridDataGridPageSize") == null ? $.fn.datagrid.defaults.pageSize
				: core.html.util.Cookie.getInstance().get("coreHtmlEasyuiDatagridDataGridPageSize");
		/**
		 * 分页数可选列表
		 */
		var pageList = $.fn.datagrid.defaults.pageList;
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
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns {String} css样式
		 */
		var rowStyler = $.fn.datagrid.defaults.rowStyler;
		/**
		 * 数据加载过滤
		 * 
		 * @param data{Object}
		 *            原始数据
		 * @returns {Object} 过滤后数据
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
		 * 
		 * @param data{Object}
		 *            加载数据
		 * @returns
		 */
		var onLoadSuccess = $.fn.datagrid.defaults.onLoadSuccess;
		/**
		 * 行单击事件
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onClickRow = $.fn.datagrid.defaults.onClickRow;
		/**
		 * 行双击事件
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onDblClickRow = $.fn.datagrid.defaults.onDblClickRow;
		/**
		 * 单元格单击事件
		 * 
		 * @param index{Number}
		 *            行号
		 * @param field{Object}
		 *            字段
		 * @param value{Object}
		 *            值
		 * @returns
		 */
		var onClickCell = $.fn.datagrid.defaults.onClickCell;
		/**
		 * 单元格双击事件
		 * 
		 * @param index{Number}
		 *            行号
		 * @param field{Object}
		 *            字段
		 * @param value{Object}
		 *            值
		 * @returns
		 */
		var onDblClickCell = $.fn.datagrid.defaults.onDblClickCell;
		/**
		 * 排序前
		 * 
		 * @param sort{Object}
		 *            排序字段
		 * @param order{String}
		 *            排序方式
		 * @returns
		 */
		var onBeforeSortColumn = $.fn.datagrid.defaults.onBeforeSortColumn;
		/**
		 * 排序
		 * 
		 * @param sort{Object}
		 *            排序字段
		 * @param order{String}
		 *            排序方式
		 * @returns
		 */
		var onSortColumn = $.fn.datagrid.defaults.onSortColumn;
		/**
		 * 改变列宽
		 * 
		 * @param field{Object}
		 *            字段
		 * @param width{Number}
		 *            宽度
		 * @returns
		 */
		var onResizeColumn = $.fn.datagrid.defaults.onResizeColumn;
		/**
		 * 选中前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onBeforeSelect = $.fn.datagrid.defaults.onBeforeSelect;
		/**
		 * 选中
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onSelect = $.fn.datagrid.defaults.onSelect;
		/**
		 * 取消选中前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onBeforeUnselect = $.fn.datagrid.defaults.onBeforeUnselect;
		/**
		 * 取消选中
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onUnselect = $.fn.datagrid.defaults.onUnselect;
		/**
		 * 选中所有时
		 * 
		 * @param rows{Array}
		 *            选中的行对象集合
		 * @returns
		 */
		var onSelectAll = $.fn.datagrid.defaults.onSelectAll;
		/**
		 * 取消选中所有时
		 * 
		 * @param rows{Array}
		 *            取消选中的行对象集合
		 * @returns
		 */
		var onUnselectAll = $.fn.datagrid.defaults.onUnselectAll;
		/**
		 * 勾选前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onBeforeCheck = $.fn.datagrid.defaults.onBeforeCheck;
		/**
		 * 勾选
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onCheck = $.fn.datagrid.defaults.onCheck;
		/**
		 * 取消勾选前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onBeforeUncheck = $.fn.datagrid.defaults.onBeforeUncheck;
		/**
		 * 取消勾选
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onUncheck = $.fn.datagrid.defaults.onUncheck;
		/**
		 * 勾选所有
		 * 
		 * @param rows{Array}
		 *            行对象集合
		 * @returns
		 */
		var onCheckAll = $.fn.datagrid.defaults.onCheckAll;
		/**
		 * 取消勾选所有
		 * 
		 * @param rows{Array}
		 *            行对象集合
		 * @returns
		 */
		var onUncheckAll = $.fn.datagrid.defaults.onUncheckAll;
		/**
		 * 编辑前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onBeforeEdit = $.fn.datagrid.defaults.onBeforeEdit;
		/**
		 * 编辑
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onBeginEdit = $.fn.datagrid.defaults.onBeginEdit;
		/**
		 * 结束编辑
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @param changes{Array}
		 *            改变的行对象集合
		 * @returns
		 */
		var onEndEdit = $.fn.datagrid.defaults.onEndEdit;
		/**
		 * 编辑后
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @param changes{Array}
		 *            改变的行对象集合
		 * @returns
		 */
		var onAfterEdit = $.fn.datagrid.defaults.onAfterEdit;
		/**
		 * 取消编辑
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onCancelEdit = $.fn.datagrid.defaults.onCancelEdit;
		/**
		 * 标题头右键点击
		 * 
		 * @param e{Object}
		 * @param field{Object}
		 *            字段
		 * @returns
		 */
		var onHeaderContextMenu = $.fn.datagrid.defaults.onHeaderContextMenu;
		/**
		 * 行右键点击事件
		 * 
		 * @param e{Object}
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onRowContextMenu = $.fn.datagrid.defaults.onRowContextMenu;

		/**
		 * 获取/设置列
		 * 
		 * @param columns
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
		 * @param frozenColumns
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
		 * @param fitColumns
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
		 * @param resizeHandle
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
		 * 获取/设置行高自适应
		 * 
		 * @param autoRowHeight
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
		 * @param toolbar
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
		 * @param striped
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
		 * @param nowrap
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
		 * @param idField
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
		 * @param url
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
		 * @param data
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
		 * @param loadMsg
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
		 * @param emptyMsg
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
		 * @param pagination
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
		 * @param rownumbers
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
		 * @param singleSelect
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
		 * @param ctrlSelect
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
		 * @param checkOnSelect
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
		 * @param selectOnCheck
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
		 * 获取/设置分页工具条位置
		 * 
		 * @param pagePosition
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
		 * 获取/设置默认页码
		 * 
		 * @param pageNumber
		 */
		this.pageNumber = function() {

			switch (arguments.length) {
			case 0:
				return pageNumber;
			default:
				pageNumber = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置分页数
		 * 
		 * @param pageSize
		 */
		this.pageSize = function() {

			switch (arguments.length) {
			case 0:
				return pageSize;
			default:
				pageSize = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置分页数可选列表
		 * 
		 * @param pageList
		 */
		this.pageList = function() {

			switch (arguments.length) {
			case 0:
				return pageList;
			default:
				pageList = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置排序字段
		 * 
		 * @param sortName
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
		 * @param sortOrder
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
		 * @param multiSort
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
		 * @param remoteSort
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
		 * @param showHeader
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
		 * @param showFooter
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
		 * @param scrollbarSize
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
		 * @param rownumberWidth
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
		 * @param editorHeight
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
		 * @param rowStyler
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
		 * @param loadFilter
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
		 * @param editors
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
		 * @param view
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
		 * @param onLoadSuccess
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
		 * @param onClickRow
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
		 * @param onDblClickRow
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
		 * @param onClickCell
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
		 * @param onDblClickCell
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
		 * @param onBeforeSortColumn
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
		 * @param onSortColumn
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
		 * @param onResizeColumn
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
		 * @param onBeforeSelect
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
		 * @param onSelect
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
		 * @param onBeforeUnselect
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
		 * @param onUnselect
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
		 * @param onSelectAll
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
		 * @param onUnselectAll
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
		 * @param onBeforeCheck
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
		 * @param onCheck
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
		 * @param onBeforeUncheck
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
		 * @param onUncheck
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
		 * @param onCheckAll
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
		 * @param onUncheckAll
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
		 * @param onBeforeEdit
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
		 * @param onBeginEdit
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
		 * @param onEndEdit
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
		 * @param onAfterEdit
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
		 * @param onCancelEdit
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
		 * @param onHeaderContextMenu
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
		 * @param onRowContextMenu
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
	// 继承面板模板
	core.lang.Class.extend(Constructor, core.html.easyui.layout.Panel);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.init = function() {

		// 校验ID个数
		var idLength = $("[id='" + this.id() + "']").length;
		if (idLength === 0) {
			new core.lang.Exception(this, "core.html.easyui.datagrid.Datagrid", "参数异常", "div(id:" + this.id() + ")不存在.");
		} else if (idLength > 1) {
			new core.lang.Warning(this, "core.html.easyui.datagrid.Datagrid", "参数警告", "div(id:" + this.id() + ")存在多个.");
		}
		
		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 参数配置
		$jQuery.datagrid({
			// 属性
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
			columns : this.columns(),
			frozenColumns : this.frozenColumns(),
			fitColumns : this.fitColumns(),
			resizeHandle : this.resizeHandle(),
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
			pagePosition : this.pagePosition(),
			pageNumber : this.pageNumber(),
			pageSize : this.pageSize(),
			pageList : this.pageList(),
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

			// 事件
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
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).datagrid("options");
	};

	/**
	 * 获取页面对象
	 * 
	 * @returns {Object}
	 */
	Constructor.prototype.getPager = function() {

		return $("#" + this.id()).datagrid("getPager");
	};

	/**
	 * 获取面板对象
	 * 
	 * @returns {Object}
	 */
	Constructor.prototype.getPanel = function() {

		return $("#" + this.id()).datagrid("getPanel");
	};

	/**
	 * 获取列字段
	 * 
	 * @param frozen{Object}
	 * @returns {Object}
	 */
	Constructor.prototype.getColumnFields = function(frozen) {

		return $("#" + this.id()).datagrid("getColumnFields", frozen);
	};

	/**
	 * 获取列属性
	 * 
	 * @param field{Object}
	 * @returns {Object}
	 */
	Constructor.prototype.getColumnOption = function(field) {

		return $("#" + this.id()).datagrid("getColumnOption", field);
	};

	/**
	 * 调整大小
	 * 
	 * @param param{Object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.resize = function(param) {

		return $("#" + this.id()).datagrid("resize", param);
	};

	/**
	 * 重新加载数据
	 * 
	 * @param param{Object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.load = function(param) {

		return $("#" + this.id()).datagrid("load", param);
	};

	/**
	 * 重新加载数据,且停留在当前页面
	 * 
	 * @param param{Object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.reload = function(param) {

		return $("#" + this.id()).datagrid("reload", param);
	};

	/**
	 * 重载页脚
	 * 
	 * @param footer{Object}
	 * @returns
	 */
	Constructor.prototype.reloadFooter = function(footer) {

		return $("#" + this.id()).datagrid("reloadFooter", footer);
	};

	/**
	 * 显示载入中
	 * 
	 * @returns
	 */
	Constructor.prototype.loading = function() {

		return $("#" + this.id()).datagrid("loading");
	};

	/**
	 * 隐藏载入中
	 * 
	 * @returns
	 */
	Constructor.prototype.loaded = function() {

		return $("#" + this.id()).datagrid("loaded");
	};

	/**
	 * 列宽自适应
	 * 
	 * @returns
	 */
	Constructor.prototype.fitColumns = function() {

		return $("#" + this.id()).datagrid("fitColumns");
	};

	/**
	 * 固定列宽
	 * 
	 * @param field{Object}
	 *            字段
	 * @returns
	 */
	Constructor.prototype.fixColumnSize = function(field) {

		return $("#" + this.id()).datagrid("fixColumnSize", field);
	};

	/**
	 * 固定指定列高度
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.fixRowHeight = function(index) {

		return $("#" + this.id()).datagrid("fixRowHeight", index);
	};

	/**
	 * 冻结指定行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.freezeRow = function(index) {

		return $("#" + this.id()).datagrid("freezeRow", index);
	};

	/**
	 * 列宽自适应
	 * 
	 * @param field{Object}
	 *            列字段
	 * @returns
	 */
	Constructor.prototype.autoSizeColumn = function(field) {

		return $("#" + this.id()).datagrid("autoSizeColumn", field);
	};

	/**
	 * 加载数据
	 * 
	 * @param data{Object}
	 *            需要加载的数据
	 * @returns
	 */
	Constructor.prototype.loadData = function(data) {

		return $("#" + this.id()).datagrid("loadData", data);
	};

	/**
	 * 获取当前数据
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getData = function() {

		return $("#" + this.id()).datagrid("getData");
	};

	/**
	 * 获取所有行
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getRows = function() {

		return $("#" + this.id()).datagrid("getRows");
	};

	/**
	 * 获取页脚所有行
	 * 
	 * @returns
	 */
	Constructor.prototype.getFooterRows = function() {

		return $("#" + this.id()).datagrid("getFooterRows");
	};

	/**
	 * 获取指定行号
	 * 
	 * @param row{Object}
	 *            行对象
	 * @returns {Number}
	 */
	Constructor.prototype.getRowIndex = function(row) {

		return $("#" + this.id()).datagrid("getRowIndex", row);
	};

	/**
	 * 获取勾选行
	 * 
	 * @returns {Object}
	 */
	Constructor.prototype.getChecked = function() {

		return $("#" + this.id()).datagrid("getChecked");
	};

	/**
	 * 获取选中节点
	 * 
	 * @returns {Object}
	 */
	Constructor.prototype.getSelected = function() {

		return $("#" + this.id()).datagrid("getSelected");
	};

	/**
	 * 获取所有选中行
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getSelections = function() {

		return $("#" + this.id()).datagrid("getSelections");
	};

	/**
	 * 清除所有选中行
	 * 
	 * @returns
	 */
	Constructor.prototype.clearSelections = function() {

		return $("#" + this.id()).datagrid("clearSelections");
	};

	/**
	 * 清除所有勾选的行
	 * 
	 * @returns
	 */
	Constructor.prototype.clearChecked = function() {

		return $("#" + this.id()).datagrid("clearChecked");
	};

	/**
	 * 滚动至指定行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.scrollTo = function(index) {

		return $("#" + this.id()).datagrid("scrollTo", index);
	};

	/**
	 * 跳至某页
	 * 
	 * @param param{Object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.gotoPage = function(param) {

		return $("#" + this.id()).datagrid("gotoPage", param);
	};

	/**
	 * 高亮行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.highlightRow = function(index) {

		return $("#" + this.id()).datagrid("highlightRow", index);
	};

	/**
	 * 选中所有行
	 * 
	 * @returns
	 */
	Constructor.prototype.selectAll = function() {

		return $("#" + this.id()).datagrid("selectAll");
	};

	/**
	 * 取消选中所有行
	 * 
	 * @returns
	 */
	Constructor.prototype.unselectAll = function() {

		return $("#" + this.id()).datagrid("unselectAll");
	};

	/**
	 * 选中行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.selectRow = function(index) {

		return $("#" + this.id()).datagrid("selectRow", index);
	};

	/**
	 * 通过ID选中行
	 * 
	 * @param idValue{String}
	 *            id值
	 * @returns
	 */
	Constructor.prototype.selectRecord = function(idValue) {

		return $("#" + this.id()).datagrid("selectRecord", idValue);
	};

	/**
	 * 取消选中行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.unselectRow = function(index) {

		return $("#" + this.id()).datagrid("unselectRow", index);
	};

	/**
	 * 勾选所有行
	 * 
	 * @returns
	 */
	Constructor.prototype.checkAll = function() {

		return $("#" + this.id()).datagrid("checkAll");
	};

	/**
	 * 取消勾选所有行
	 * 
	 * @returns
	 */
	Constructor.prototype.uncheckAll = function() {

		return $("#" + this.id()).datagrid("uncheckAll");
	};

	/**
	 * 勾选行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.checkRow = function(index) {

		return $("#" + this.id()).datagrid("checkRow", index);
	};

	/**
	 * 取消勾选行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.uncheckRow = function(index) {

		return $("#" + this.id()).datagrid("uncheckRow", index);
	};

	/**
	 * 编辑行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.beginEdit = function(index) {

		return $("#" + this.id()).datagrid("beginEdit", index);
	};

	/**
	 * 结束编辑行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.endEdit = function(index) {

		return $("#" + this.id()).datagrid("endEdit", index);
	};

	/**
	 * 取消编辑行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.cancelEdit = function(index) {

		return $("#" + this.id()).datagrid("cancelEdit", index);
	};

	/**
	 * 获取行所有编辑器
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.getEditors = function(index) {

		return $("#" + this.id()).datagrid("getEditors", index);
	};

	/**
	 * 获取行中某列编辑器
	 * 
	 * @param options{Object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.getEditor = function(options) {

		return $("#" + this.id()).datagrid("getEditor", options);
	};

	/**
	 * 刷新行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.refreshRow = function(index) {

		return $("#" + this.id()).datagrid("refreshRow", index);
	};

	/**
	 * 验证行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.validateRow = function(index) {

		return $("#" + this.id()).datagrid("validateRow", index);
	};

	/**
	 * 更新行
	 * 
	 * @param param{Object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.updateRow = function(param) {

		return $("#" + this.id()).datagrid("updateRow", param);
	};

	/**
	 * 添加行
	 * 
	 * @param row{Object}
	 *            行对象
	 * @returns
	 */
	Constructor.prototype.appendRow = function(row) {

		return $("#" + this.id()).datagrid("appendRow", row);
	};

	/**
	 * 插入行
	 * 
	 * @param param{Object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.insertRow = function(param) {

		return $("#" + this.id()).datagrid("insertRow", param);
	};

	/**
	 * 删除行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.deleteRow = function(index) {

		return $("#" + this.id()).datagrid("deleteRow", index);
	};

	/**
	 * 获取修改行
	 * 
	 * @param type{Object}
	 *            类型
	 * @returns
	 */
	Constructor.prototype.getChanges = function(type) {

		return $("#" + this.id()).datagrid("getChanges", type);
	};

	/**
	 * 提交所有修改行
	 * 
	 * @returns
	 */
	Constructor.prototype.acceptChanges = function() {

		return $("#" + this.id()).datagrid("acceptChanges");
	};

	/**
	 * 回滚修改行
	 * 
	 * @returns
	 */
	Constructor.prototype.rejectChanges = function() {

		return $("#" + this.id()).datagrid("rejectChanges");
	};

	/**
	 * 合并单元格
	 * 
	 * @param options{Object}
	 * @returns
	 */
	Constructor.prototype.mergeCells = function(options) {

		return $("#" + this.id()).datagrid("mergeCells", options);
	};

	/**
	 * 显示列
	 * 
	 * @param field{Object}
	 *            列字段
	 * @returns
	 */
	Constructor.prototype.showColumn = function(field) {

		return $("#" + this.id()).datagrid("showColumn", field);
	};

	/**
	 * 隐藏列
	 * 
	 * @param field{Object}
	 *            列字段
	 * @returns
	 */
	Constructor.prototype.hideColumn = function(field) {

		return $("#" + this.id()).datagrid("hideColumn", field);
	};

	/**
	 * 排序
	 * 
	 * @param param{Object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.sort = function(param) {

		return $("#" + this.id()).datagrid("sort", param);
	};

	/** ==========扩展方法========== */
	/**
	 * 设置宽度
	 * 
	 * @param width{Number}
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
	 * @param height{Number}
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
	 * @returns {Number}
	 */
	Constructor.prototype.getCurrentDataNum = function() {

		var data = this.getData();
		return data.rows.length;
	}

	/**
	 * 获取记录总条数
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getTotalDataNum = function() {

		var data = this.getData();
		return data.total;
	}

	/**
	 * 获取分页数
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getPageSize = function() {

		var options = $(this.getPager()).pagination("options");
		return options.pageSize;
	}

	/**
	 * 获取总页数
	 * 
	 * @returns {Number}
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
	 * @returns {Number}
	 */
	Constructor.prototype.getCurrentPageNum = function() {

		var options = $(this.getPager()).pagination("options");
		return options.pageNumber;
	}

	/**
	 * 翻至前一页
	 * 
	 * @returns
	 */
	Constructor.prototype.selectBeforePage = function() {

		this.gotoPage(this.getCurrentPageNum() - 1);
	}

	/**
	 * 翻至后一页
	 * 
	 * @returns
	 */
	Constructor.prototype.selectNextPage = function() {

		this.gotoPage(this.getCurrentPageNum() + 1);
	}

	/**
	 * 获取指定行数据
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.getRow = function(index) {

		return this.getRows()[index];
	};

	/**
	 * 互换两行位置
	 * 
	 * @param index1{Number}
	 *            行号1
	 * @param index2{Number}
	 *            行号2
	 * @returns
	 */
	Constructor.prototype.changeRowOrder = function(index1, index2) {

		var min = index1 > index2 ? index2 : index1;
		var max = index1 > index2 ? index1 : index2;

		var rowMin = this.getRows()[min];
		var rowMax = this.getRows()[max];

		// 删除
		this.deleteRow(max);
		this.deleteRow(min);

		// 添加
		this.insertRow({
			index : min,
			row : rowMax
		});
		this.insertRow({
			index : max,
			row : rowMin
		});
	}

	/**
	 * 获取选中行索引
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getSelectedRowIndex = function() {

		return this.getRowIndex(this.getSelected());
	};

	// 返回构造函数
	return Constructor;
})();