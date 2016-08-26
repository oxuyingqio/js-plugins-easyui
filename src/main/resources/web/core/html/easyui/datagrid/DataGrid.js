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
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
	};
	// 继承Panel面板模板
	core.lang.Class.extend(Constructor, core.html.easyui.layout.Panel);

	// 返回构造函数
	return Constructor;
})();