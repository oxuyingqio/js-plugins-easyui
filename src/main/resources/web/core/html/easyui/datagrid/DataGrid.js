/**
 * @name Datagrid
 * @package core.html.easyui.datagrid
 * @desc 数据列表模板
 * @type 类型
 * 
 * @date 2016年8月26日 16:51:16
 */

core.html.easyui.datagrid.Datagrid = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * cookie操作
	 */
	var cookie = core.html.util.Cookie.getInstance();

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.easyui.datagrid.Datagrid.superClass.constructor.call(this, id || "coreHtmlEasyuiDatagridDataGrid"
				+ count);

		/**
		 * 属性
		 */
		/**
		 * 列
		 */
		var columns = undefined;
		/**
		 * 冻结列
		 */
		var frozenColumns = undefined;
		/**
		 * 列宽自适应
		 */
		var fitColumns = true;
		/**
		 * 
		 */
		var resizeHandle = "right";
		/**
		 * 行高自适应
		 */
		var autoRowHeight = true;
		/**
		 * 工具条
		 */
		var toolbar = null;
		/**
		 * 隔行变色
		 */
		var striped = true;
		/**
		 * 禁止文字自动换行
		 */
		var nowrap = true;
		/**
		 * id字段
		 */
		var idField = null;
		/**
		 * 数据URL
		 */
		var url = null;
		/**
		 * 数据
		 */
		var data = null;
		/**
		 * 数据加载等待提示
		 */
		var loadMsg = "Processing, please wait …";
		/**
		 * 
		 */
		var emptyMsg = "";
		/**
		 * 添加页脚工具栏
		 */
		var pagination = true;
		/**
		 * 显示行号
		 */
		var rownumbers = true;
		/**
		 * 仅能选中单行
		 */
		var singleSelect = true;
		/**
		 * ctrl键选中
		 */
		var ctrlSelect = false;
		/**
		 * check时选中
		 */
		var checkOnSelect = true;
		/**
		 * 选中时check
		 */
		var selectOnCheck = true;
		/**
		 * 分页工具条位置
		 */
		var pagePosition = "bottom";
		/**
		 * 默认页码
		 */
		var pageNumber = 1;
		/**
		 * 分页数
		 */
		var pageSize = cookie.get("coreHtmlEasyuiDatagridDataGridPageSize") == null ? 20 : cookie
				.get("coreHtmlEasyuiDatagridDataGridPageSize");
		/**
		 * 分页数可选列表
		 */
		var pageList = [ 10, 20, 30, 40, 50 ];
		/**
		 * 排序字段
		 */
		var sortName = null;
		/**
		 * 排序方式
		 */
		var sortOrder = "asc";
		/**
		 * 
		 */
		var multiSort = false;
		/**
		 * 向后台发送排序条件
		 */
		var remoteSort = true;
		/**
		 * 显示标头
		 */
		var showHeader = true;
		/**
		 * 显示脚
		 */
		var showFooter = false;
		/**
		 * 
		 */
		var scrollbarSize = 18;
		/**
		 * 行号宽度
		 */
		var rownumberWidth = 30;
		/**
		 * 编辑框高度
		 */
		var editorHeight = 24;
		/**
		 * 行样式
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns {String} css样式
		 */
		var rowStyler = function(index, row) {

		};
		/**
		 * 数据加载过滤
		 * 
		 * @param data{Object}
		 *            原始数据
		 * @returns {Object} 过滤后数据
		 */
		var loadFilter = function(data) {
			return data;
		};

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
		var onLoadSuccess = function(data) {

		};
		/**
		 * 行单击事件
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onClickRow = function(index, row) {

		};
		/**
		 * 行双击事件
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onDblClickRow = function(index, row) {

		};
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
		var onClickCell = function(index, field, value) {

		};
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
		var onDblClickCell = function(index, field, value) {

		};
		/**
		 * 排序前
		 * 
		 * @param sort{Object}
		 *            排序字段
		 * @param order{String}
		 *            排序方式
		 * @returns
		 */
		var onBeforeSortColumn = function(sort, order) {

		};
		/**
		 * 排序
		 * 
		 * @param sort{Object}
		 *            排序字段
		 * @param order{String}
		 *            排序方式
		 * @returns
		 */
		var onSortColumn = function(sort, order) {

		};
		/**
		 * 改变列宽
		 * 
		 * @param field{Object}
		 *            字段
		 * @param width{Number}
		 *            宽度
		 * @returns
		 */
		var onResizeColumn = function(field, width) {

		};
		/**
		 * 选中前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onBeforeSelect = function(index, row) {

		};
		/**
		 * 选中
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onSelect = function(index, row) {

		};
		/**
		 * 取消选中前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onBeforeUnselect = function(index, row) {

		};
		/**
		 * 取消选中
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onUnselect = function(index, row) {

		};
		/**
		 * 选中所有时
		 * 
		 * @param rows{Array}
		 *            选中的行对象集合
		 * @returns
		 */
		var onSelectAll = function(rows) {

		};
		/**
		 * 取消选中所有时
		 * 
		 * @param rows{Array}
		 *            取消选中的行对象集合
		 * @returns
		 */
		var onUnselectAll = function(rows) {

		};
		/**
		 * 勾选前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onBeforeCheck = function(index, row) {

		};
		/**
		 * 勾选
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onCheck = function(index, row) {

		};
		/**
		 * 取消勾选前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onBeforeUncheck = function(index, row) {

		};
		/**
		 * 取消勾选
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onUncheck = function(index, row) {

		};
		/**
		 * 勾选所有
		 * 
		 * @param rows{Array}
		 *            行对象集合
		 * @returns
		 */
		var onCheckAll = function(rows) {

		};
		/**
		 * 取消勾选所有
		 * 
		 * @param rows{Array}
		 *            行对象集合
		 * @returns
		 */
		var onUncheckAll = function(rows) {

		};
		/**
		 * 编辑前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onBeforeEdit = function(index, row) {

		};
		/**
		 * 编辑
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onBeginEdit = function(index, row) {

		};
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
		var onEndEdit = function(index, row, changes) {

		};
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
		var onAfterEdit = function(index, row, changes) {

		};
		/**
		 * 取消编辑
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onCancelEdit = function(index, row) {

		};
		/**
		 * 标题头右键点击
		 * 
		 * @param e{Object}
		 * @param field{Object}
		 *            字段
		 * @returns
		 */
		var onHeaderContextMenu = function(e, field) {

		};
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
		var onRowContextMenu = function(e, index, row) {

		};

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
	// 继承Panel面板模板
	core.lang.Class.extend(Constructor, core.html.easyui.layout.Panel);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.datagrid.Datagrid", "参数异常", "div(id:" + this.id() + ")不存在.");
		}
		// 清空内容
		$jQuery.empty();

		// 参数配置
		$jQuery.datagrid({
			// 属性
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
			columns : this.columns(),
			frozenColumns : this.frozenColumns(),
			fitColumns : this.fitColumns(),
			resizeHandle : this.resizeHandle(),
			autoRowHeight : this.autoRowHeight(),
			toolbar : this.toolbar(),

			// 事件
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
			onMinimize : this.onMinimize()
		});
	};

	// 返回构造函数
	return Constructor;
})();