/**
 * @name	DataGrid
 * @package core.html.easyui.DataGrid
 * @desc	DataGrid模板
 * @type	类
 * 
 * @date	2016年8月25日 14:14:50
 */

core.html.easyui.datagrid.DataGrid = (function() {

	/**
	 * cookie操作
	 */
	var cookie = core.html.util.Cookie.getInstance();

	/**
	 * 默认配置
	 */
	var DEFAULT_CONFIG = {

		/** ==========panel属性========== */
		/**
		 * 宽度
		 */
		width : null,
		/**
		 * 高度
		 */
		height : null,

		/** ==========DataGrid属性========== */
		/**
		 * 列
		 */
		columns : null,
		/**
		 * 冻结列
		 */
		frozenColumns : null,
		/**
		 * 列宽自适应
		 */
		fitColumns : true,
		resizeHandle : "left",
		/**
		 * 行高自适应
		 */
		autoRowHeight : true,
		/**
		 * 工具条
		 */
		toolbar : null,
		/**
		 * 隔行变色
		 */
		striped : true,
		/**
		 * 加载远程连接数据方式
		 */
		method : "post",
		/**
		 * 禁止文字自动换行
		 */
		nowrap : true,
		/**
		 * id字段
		 */
		idField : null,
		/**
		 * 数据URL
		 */
		url : null,
		/**
		 * 数据
		 */
		data : null,
		/**
		 * 数据加载等待提示
		 */
		loadMsg : "Processing, please wait …",
		/**
		 * 添加页脚工具栏
		 */
		pagination : true,
		/**
		 * 显示行号
		 */
		rownumbers : true,
		/**
		 * 仅能选中单行
		 */
		singleSelect : true,
		/**
		 * ctrl键选中
		 */
		ctrlSelect : false,
		/**
		 * check时选中
		 */
		checkOnSelect : true,
		/**
		 * 选中时check
		 */
		selectOnCheck : true,
		/**
		 * 分页工具条位置
		 */
		pagePosition : "bottom",
		/**
		 * 默认页码
		 */
		pageNumber : 1,
		/**
		 * 分页数
		 */
		pageSize : cookie.get("coreHtmlEasyuiDataGridPageSize") == null ? 20 : cookie
				.get("coreHtmlEasyuiDataGridPageSize"),
		/**
		 * 分页数可选列表
		 */
		pageList : [ 10, 20, 30, 40, 50 ],
		/**
		 * 传入后台的参数
		 */
		queryParams : {},
		/**
		 * 排序字段
		 */
		sortName : null,
		/**
		 * 排序方式
		 */
		sortOrder : "asc",
		multiSort : false,
		/**
		 * 向后台发送排序条件
		 */
		remoteSort : true,
		/**
		 * 显示标头
		 */
		showHeader : true,
		/**
		 * 显示脚
		 */
		showFooter : false,
		scrollbarSize : 18,
		/**
		 * 行样式
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns {String} css样式
		 */
		rowStyler : function(index, row) {
		},
		// what's this?
		// loader : function() {
		// },
		/**
		 * 数据加载过滤
		 * 
		 * @param data{Object}
		 *            原始数据
		 * @returns {Object} 过滤后数据
		 */
		loadFilter : function(data) {
			return data;
		},
		/**
		 * 编辑器
		 */
		editors : null,
		// what's this?
		// view : null,

		/** ==========DataGrid事件========== */
		/**
		 * 数据加载成功
		 * 
		 * @param data{Object}
		 *            加载数据
		 * @returns
		 */
		onLoadSuccess : function(data) {
		},
		/**
		 * 数据加载失败
		 * 
		 * @returns
		 */
		onLoadError : function() {
		},
		/**
		 * 数据加载前
		 * 
		 * @param param{Object}
		 * @returns
		 */
		onBeforeLoad : function(param) {
		},
		/**
		 * 行单击事件
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		onClickRow : function(index, row) {
		},
		/**
		 * 行双击事件
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		onDblClickRow : function(index, row) {
		},
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
		onClickCell : function(index, field, value) {
		},
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
		onDblClickCell : function(index, field, value) {
		},
		/**
		 * 排序前
		 * 
		 * @param sort{Object}
		 *            排序字段
		 * @param order{String}
		 *            排序方式
		 * @returns
		 */
		onBeforeSortColumn : function(sort, order) {
		},
		/**
		 * 排序
		 * 
		 * @param sort{Object}
		 *            排序字段
		 * @param order{String}
		 *            排序方式
		 * @returns
		 */
		onSortColumn : function(sort, order) {
		},
		/**
		 * 改变列宽
		 * 
		 * @param field{Object}
		 *            字段
		 * @param width{Number}
		 *            宽度
		 * @returns
		 */
		onResizeColumn : function(field, width) {
		},
		/**
		 * 选中前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		onBeforeSelect : function(index, row) {
		},
		/**
		 * 选中
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		onSelect : function(index, row) {
		},
		/**
		 * 取消选中前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		onBeforeUnselect : function(index, row) {
		},
		/**
		 * 取消选中
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		onUnselect : function(index, row) {
		},
		/**
		 * 选中所有时
		 * 
		 * @param rows{Array}
		 *            选中的行对象集合
		 * @returns
		 */
		onSelectAll : function(rows) {
		},
		/**
		 * 取消选中所有时
		 * 
		 * @param rows{Array}
		 *            取消选中的行对象集合
		 * @returns
		 */
		onUnselectAll : function(rows) {
		},
		/**
		 * 勾选前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		onBeforeCheck : function(index, row) {
		},
		/**
		 * 勾选
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		onCheck : function(index, row) {
		},
		/**
		 * 取消勾选前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		onBeforeUncheck : function(index, row) {
		},
		/**
		 * 取消勾选
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		onUncheck : function(index, row) {
		},
		/**
		 * 勾选所有
		 * 
		 * @param rows{Array}
		 *            行对象集合
		 * @returns
		 */
		onCheckAll : function(rows) {
		},
		/**
		 * 取消勾选所有
		 * 
		 * @param rows{Array}
		 *            行对象集合
		 * @returns
		 */
		onUncheckAll : function(rows) {
		},
		/**
		 * 编辑前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		onBeforeEdit : function(index, row) {
		},
		/**
		 * 编辑
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		onBeginEdit : function(index, row) {
		},
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
		onEndEdit : function(index, row, changes) {
		},
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
		onAfterEdit : function(index, row, changes) {
		},
		/**
		 * 取消编辑
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		onCancelEdit : function(index, row) {
		},
		/**
		 * 标题头右键点击
		 * 
		 * @param e{Object}
		 * @param field{Object}
		 *            字段
		 * @returns
		 */
		onHeaderContextMenu : function(e, field) {
		},
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
		onRowContextMenu : function(e, index, row) {
		}
	};

	/**
	 * 模板所在Div 初始化
	 * 
	 * @param $dataGrid{Object}
	 *            模板所在Div的jQuery对象
	 */
	function divInit($dataGrid) {

		$dataGrid.empty();
	}

	/**
	 * 打包封装模板的jQuery对象
	 * 
	 * @param $dataGrid{Object}
	 *            模板的jQuery对象
	 * @returns {Object} 模板的jQuery对象
	 */
	function packageJQuery($dataGrid) {

		/** ==========DataGrid方法========== */
		/**
		 * 获取属性对象
		 * 
		 * @returns {Object}
		 */
		$dataGrid.options = function() {

			return $dataGrid.datagrid("options");
		};

		/**
		 * 获取页面对象
		 * 
		 * @returns {Object}
		 */
		$dataGrid.getPager = function() {

			return $dataGrid.datagrid("getPager");
		};

		/**
		 * 获取面板对象
		 * 
		 * @returns {Object}
		 */
		$dataGrid.getPanel = function() {

			return $dataGrid.datagrid("getPanel");
		};

		/**
		 * 获取列字段
		 * 
		 * @param frozen{Object}
		 * @returns {Object}
		 */
		$dataGrid.getColumnFields = function(frozen) {

			return $dataGrid.datagrid("getColumnFields", frozen);
		};

		/**
		 * 获取列属性
		 * 
		 * @param field{Object}
		 * @returns {Object}
		 */
		$dataGrid.getColumnOption = function(field) {

			return $dataGrid.datagrid("getColumnOption", field);
		};

		/**
		 * 调整大小
		 * 
		 * @param param{Object}
		 *            参数
		 * @returns
		 */
		$dataGrid.resize = function(param) {

			return $dataGrid.datagrid("resize", param);
		};

		/**
		 * 重新加载数据
		 * 
		 * @param param{Object}
		 *            参数
		 * @returns
		 */
		$dataGrid.load = function(param) {

			return $dataGrid.datagrid("load", param);
		};

		/**
		 * 重新加载数据,且停留在当前页面
		 * 
		 * @param param{Object}
		 *            参数
		 * @returns
		 */
		$dataGrid.reload = function(param) {

			return $dataGrid.datagrid("reload", param);
		};

		/**
		 * 重载页脚
		 * 
		 * @param footer{Object}
		 * @returns
		 */
		$dataGrid.reloadFooter = function(footer) {
			return $dataGrid.datagrid("reloadFooter", footer);
		};

		/**
		 * 显示载入中
		 * 
		 * @returns
		 */
		$dataGrid.loading = function() {

			return $dataGrid.datagrid("loading");
		};

		/**
		 * 隐藏载入中
		 * 
		 * @returns
		 */
		$dataGrid.loaded = function() {

			return $dataGrid.datagrid("loaded");
		};

		/**
		 * 列宽自适应
		 * 
		 * @returns
		 */
		$dataGrid.fitColumns = function() {

			return $dataGrid.datagrid("fitColumns");
		};

		/**
		 * 固定列宽
		 * 
		 * @param field{Object}
		 *            字段
		 * @returns
		 */
		$dataGrid.fixColumnSize = function(field) {

			return $dataGrid.datagrid("fixColumnSize", field);
		};

		/**
		 * 固定指定列高度
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$dataGrid.fixRowHeight = function(index) {

			return $dataGrid.datagrid("fixRowHeight", index);
		};

		/**
		 * 冻结指定行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$dataGrid.freezeRow = function(index) {

			return $dataGrid.datagrid("freezeRow", index);
		};

		/**
		 * 列宽自适应
		 * 
		 * @param field{Object}
		 *            列字段
		 * @returns
		 */
		$dataGrid.autoSizeColumn = function(field) {

			return $dataGrid.datagrid("autoSizeColumn", field);
		};

		/**
		 * 加载数据
		 * 
		 * @param data{Object}
		 *            需要加载的数据
		 * @returns
		 */
		$dataGrid.loadData = function(data) {

			return $dataGrid.datagrid("loadData", data);
		};

		/**
		 * 获取当前数据
		 * 
		 * @returns {Array}
		 */
		$dataGrid.getData = function() {

			return $dataGrid.datagrid("getData");
		};

		/**
		 * 获取所有行
		 * 
		 * @returns {Array}
		 */
		$dataGrid.getRows = function() {

			return $dataGrid.datagrid("getRows");
		};

		/**
		 * 获取所有行
		 * 
		 * @returns
		 */
		$dataGrid.getFooterRows = function() {

			return $dataGrid.datagrid("getFooterRows");
		};

		/**
		 * 获取指定行号
		 * 
		 * @param row{Object}
		 *            行对象
		 * @returns {Number}
		 */
		$dataGrid.getRowIndex = function(row) {

			return $dataGrid.datagrid("getRowIndex", row);
		};

		/**
		 * 获取勾选行
		 * 
		 * @returns {Object}
		 */
		$dataGrid.getChecked = function() {

			return $dataGrid.datagrid("getChecked");
		};

		/**
		 * 获取选中节点
		 * 
		 * @returns {Object}
		 */
		$dataGrid.getSelected = function() {

			return $dataGrid.datagrid("getSelected");
		};

		/**
		 * 获取所有选中行
		 * 
		 * @returns {Array}
		 */
		$dataGrid.getSelections = function() {

			return $dataGrid.datagrid("getSelections");
		};

		/**
		 * 清除所有选中行
		 * 
		 * @returns
		 */
		$dataGrid.clearSelections = function() {

			return $dataGrid.datagrid("clearSelections");
		};

		/**
		 * 清除所有勾选的行
		 * 
		 * @returns
		 */
		$dataGrid.clearChecked = function() {

			return $dataGrid.datagrid("clearChecked");
		};

		/**
		 * 滚动至指定行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$dataGrid.scrollTo = function(index) {

			return $dataGrid.datagrid("scrollTo", index);
		};

		/**
		 * 跳至某页
		 * 
		 * @param param{Object}
		 *            参数
		 * @returns
		 */
		$dataGrid.gotoPage = function(param) {

			return $dataGrid.datagrid("gotoPage", param);
		};

		/**
		 * 高亮行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$dataGrid.highlightRow = function(index) {

			return $dataGrid.datagrid("highlightRow", index);
		};

		/**
		 * 选中所有行
		 * 
		 * @returns
		 */
		$dataGrid.selectAll = function() {

			return $dataGrid.datagrid("selectAll");
		};

		/**
		 * 取消选中所有行
		 * 
		 * @returns
		 */
		$dataGrid.unselectAll = function() {

			return $dataGrid.datagrid("unselectAll");
		};

		/**
		 * 选中行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$dataGrid.selectRow = function(index) {

			return $dataGrid.datagrid("selectRow", index);
		};

		/**
		 * 通过ID选中行
		 * 
		 * @param idValue{String}
		 *            id值
		 * @returns
		 */
		$dataGrid.selectRecord = function(idValue) {

			return $dataGrid.datagrid("selectRecord", idValue);
		};

		/**
		 * 取消选中行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$dataGrid.unselectRow = function(index) {

			return $dataGrid.datagrid("unselectRow", index);
		};

		/**
		 * 勾选所有行
		 * 
		 * @returns
		 */
		$dataGrid.checkAll = function() {

			return $dataGrid.datagrid("checkAll");
		};

		/**
		 * 取消勾选所有行
		 * 
		 * @returns
		 */
		$dataGrid.uncheckAll = function() {

			return $dataGrid.datagrid("uncheckAll");
		};

		/**
		 * 勾选行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$dataGrid.checkRow = function(index) {

			return $dataGrid.datagrid("checkRow", index);
		};

		/**
		 * 取消勾选行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$dataGrid.uncheckRow = function(index) {

			return $dataGrid.datagrid("uncheckRow", index);
		};

		/**
		 * 编辑行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$dataGrid.beginEdit = function(index) {

			return $dataGrid.datagrid("beginEdit", index);
		};

		/**
		 * 结束编辑行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$dataGrid.endEdit = function(index) {

			return $dataGrid.datagrid("endEdit", index);
		};

		/**
		 * 取消编辑行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$dataGrid.cancelEdit = function(index) {

			return $dataGrid.datagrid("cancelEdit", index);
		};

		/**
		 * 获取行所有编辑器
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$dataGrid.getEditors = function(index) {

			return $dataGrid.datagrid("getEditors", index);
		};

		/**
		 * 获取行中某列编辑器
		 * 
		 * @param options{Object}
		 *            参数
		 * @returns
		 */
		$dataGrid.getEditor = function(options) {

			return $dataGrid.datagrid("getEditor", options);
		};

		/**
		 * 刷新行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$dataGrid.refreshRow = function(index) {

			return $dataGrid.datagrid("refreshRow", index);
		};

		/**
		 * 验证行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$dataGrid.validateRow = function(index) {

			return $dataGrid.datagrid("validateRow", index);
		};

		/**
		 * 更新行
		 * 
		 * @param param{Object}
		 *            参数
		 * @returns
		 */
		$dataGrid.updateRow = function(param) {

			return $dataGrid.datagrid("updateRow", param);
		};

		/**
		 * 添加行
		 * 
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		$dataGrid.appendRow = function(row) {

			return $dataGrid.datagrid("appendRow", row);
		};

		/**
		 * 插入行
		 * 
		 * @param param{Object}
		 *            参数
		 * @returns
		 */
		$dataGrid.insertRow = function(param) {

			return $dataGrid.datagrid("insertRow", param);
		};

		/**
		 * 删除行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$dataGrid.deleteRow = function(index) {

			return $dataGrid.datagrid("deleteRow", index);
		};

		/**
		 * 获取修改行
		 * 
		 * @param type{Object}
		 *            类型
		 * @returns
		 */
		$dataGrid.getChanges = function(type) {

			return $dataGrid.datagrid("getChanges", type);
		};

		/**
		 * 提交所有修改行
		 * 
		 * @returns
		 */
		$dataGrid.acceptChanges = function() {

			return $dataGrid.datagrid("acceptChanges");
		};

		/**
		 * 回滚修改行
		 * 
		 * @returns
		 */
		$dataGrid.rejectChanges = function() {

			return $dataGrid.datagrid("rejectChanges");
		};

		/**
		 * 合并单元格
		 * 
		 * @param options{Object}
		 * @returns
		 */
		$dataGrid.mergeCells = function(options) {

			return $dataGrid.datagrid("mergeCells", options);
		};

		/**
		 * 显示列
		 * 
		 * @param field{Object}
		 *            列字段
		 * @returns
		 */
		$dataGrid.showColumn = function(field) {

			return $dataGrid.datagrid("showColumn", field);
		};

		/**
		 * 隐藏列
		 * 
		 * @param field{Object}
		 *            列字段
		 * @returns
		 */
		$dataGrid.hideColumn = function(field) {

			return $dataGrid.datagrid("hideColumn", field);
		};

		/**
		 * 排序
		 * 
		 * @param param{Object}
		 *            参数
		 * @returns
		 */
		$dataGrid.sort = function(param) {

			return $dataGrid.datagrid("sort", param);
		};

		/** ==========扩展方法========== */
		/**
		 * 设置宽度
		 * 
		 * @param width{Number}
		 *            宽度
		 * @returns
		 */
		$dataGrid.setWidth = function(width) {

			return $dataGrid.resize({
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
		$dataGrid.setHeight = function(height) {

			return $dataGrid.resize({
				height : height
			});
		};

		/**
		 * 获取当前页数据条数
		 * 
		 * @returns {Number}
		 */
		$dataGrid.getCurrentDataNum = function() {

			var data = $dataGrid.getData();
			return data.rows.length;
		}

		/**
		 * 获取记录总条数
		 * 
		 * @returns {Number}
		 */
		$dataGrid.getTotalDataNum = function() {

			var data = $dataGrid.getData();
			return data.total;
		}

		/**
		 * 获取分页数
		 * 
		 * @returns {Number}
		 */
		$dataGrid.getPageSize = function() {

			var options = $dataGrid.getPager().data("pagination").options;
			return options.pageSize;
		}

		/**
		 * 获取总页数
		 * 
		 * @returns {Number}
		 */
		$dataGrid.getPageNum = function() {

			var options = $dataGrid.getPager().data("pagination").options;
			var total = options.total;
			var max = Math.ceil(total / options.pageSize);
			return max;
		}

		/**
		 * 获取当前页码
		 * 
		 * @returns {Number}
		 */
		$dataGrid.getCurrentPageNum = function() {

			var options = $dataGrid.getPager().data("pagination").options;
			return options.pageNumber;
		}

		/**
		 * 翻至前一页
		 * 
		 * @returns
		 */
		$dataGrid.selectBeforePage = function() {

			var Pager = $dataGrid.getPager();
			var options = Pager.data("pagination").options;
			$dataGrid.gotoPage(options.pageNumber - 1);
		}

		/**
		 * 翻至后一页
		 * 
		 * @returns
		 */
		$dataGrid.selectNextPage = function() {

			var Pager = $dataGrid.getPager();
			var options = Pager.data("pagination").options;
			$dataGrid.gotoPage(options.pageNumber + 1);
		}

		/**
		 * 获取指定行数据
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$dataGrid.getRow = function(index) {

			return $dataGrid.getRows()[index];
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
		$dataGrid.changeRowOrder = function(index1, index2) {

			var min = index1 > index2 ? index2 : index1;
			var max = index1 > index2 ? index1 : index2;

			var rowMin = $dataGrid.getRows()[min];
			var rowMax = $dataGrid.getRows()[max];

			// 删除
			$dataGrid.deleteRow(max);
			$dataGrid.deleteRow(min);

			// 添加
			$dataGrid.insertRow({
				index : min,
				row : rowMax
			});
			$dataGrid.insertRow({
				index : max,
				row : rowMin
			});
		}

		/**
		 * 获取选中行索引
		 * 
		 * @returns {Number}
		 */
		$dataGrid.getSelectedRowIndex = function() {

			return $dataGrid.getRowIndex($dataGrid.getSelected());
		};

		return $dataGrid;
	}

	/**
	 * 构造函数
	 * 
	 * @param divid{String}
	 *            模板所在的Div id
	 */
	var Constructor = function(_divid) {

		// 模板所在的Div id
		var divid = _divid;
		// 模板所在Div的jQuery对象
		var $dataGrid = $("#" + divid);
		if ($dataGrid.length === 0) {
			new core.lang.Exception("core.html.easyui.datagrid.DataGrid", "构造参数异常", "div(id:" + divid + ")不存在.");
		}

		// DataGrid 配置
		var dataGridConfig = Object.clone(DEFAULT_CONFIG);

		/**
		 * 获取模板所在Div ID
		 * 
		 * @returns {String}
		 */
		this.getDivid = function() {

			return divid;
		};

		/**
		 * 获取模板所在Div jQuery对象
		 * 
		 * @returns {jQuery}
		 */
		this.getDataGridJQuery = function() {

			return $dataGrid;
		};

		/**
		 * 获取模板配置
		 * 
		 * @returns {Object}
		 */
		this.getDataGridConfig = function() {

			return dataGridConfig;
		};

		/**
		 * 设置模板配置
		 * 
		 * @param dataGridConfig{Object}
		 *            模板配置
		 * @returns {core.html.easyui.datagrid.DataGrid}
		 */
		this.setDataGridConfig = function(_dataGridConfig) {

			dataGridConfig = _dataGridConfig;
			return this;
		};
	};

	/**
	 * 获取宽度
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getWidth = function() {

		return this.getDataGridConfig().width;
	};

	/**
	 * 设置宽度
	 * 
	 * @param width{Number}
	 *            宽度
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setWidth = function(width) {

		this.getDataGridConfig().width = width;

		return this;
	};

	/**
	 * 获取高度
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getHeight = function() {

		return this.getDataGridConfig().height;
	};

	/**
	 * 设置高度
	 * 
	 * @param height{Number}
	 *            高度
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setHeight = function(height) {

		this.getDataGridConfig().height = height;

		return this;
	};

	/**
	 * 获取列
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getColumns = function() {

		return this.getDataGridConfig().columns;
	};

	/**
	 * 设置列
	 * 
	 * @param columns{Array}
	 *            列
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setColumns = function(columns) {

		this.getDataGridConfig().columns = columns;

		return this;
	};

	/**
	 * 获取冻结列
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getFrozenColumns = function() {

		return this.getDataGridConfig().frozenColumns;
	};

	/**
	 * 设置冻结列
	 * 
	 * @param frozenColumns{Array}
	 *            冻结列
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setFrozenColumns = function(frozenColumns) {

		this.getDataGridConfig().frozenColumns = frozenColumns;

		return this;
	};

	/**
	 * 获取是否列宽自适应
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getFitColumns = function() {

		return this.getDataGridConfig().fitColumns;
	};

	/**
	 * 设置列宽自适应
	 * 
	 * @param fitColumns{Boolean}
	 *            是否列宽自适应
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setFitColumns = function(fitColumns) {

		this.getDataGridConfig().fitColumns = fitColumns;

		return this;
	};

	/**
	 * 获取改变列头
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getResizeHandle = function() {

		return this.getDataGridConfig().resizeHandle;
	};

	/**
	 * 设置改变列头
	 * 
	 * @param resizeHandle{Boolean}
	 *            是否改变列头
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setResizeHandle = function(resizeHandle) {

		this.getDataGridConfig().resizeHandle = resizeHandle;

		return this;
	};

	/**
	 * 获取是否行高自适应
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getAutoRowHeight = function() {

		return this.getDataGridConfig().autoRowHeight;
	};

	/**
	 * 设置行高自适应
	 * 
	 * @param autoRowHeight{Boolean}
	 *            是否行高自适应
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setAutoRowHeight = function(autoRowHeight) {

		this.getDataGridConfig().autoRowHeight = autoRowHeight;

		return this;
	};

	/**
	 * 获取工具条
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getToolbar = function() {

		return this.getDataGridConfig().toolbar;
	};

	/**
	 * 设置工具条
	 * 
	 * @param toolbar{Array}
	 *            工具条
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setToolbar = function(toolbar) {

		this.getDataGridConfig().toolbar = toolbar;

		return this;
	};

	/**
	 * 获取是否各行变色
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getStriped = function() {

		return this.getDataGridConfig().striped;
	};

	/**
	 * 设置是否各行变色
	 * 
	 * @param striped{Boolean}
	 *            是否各行变色
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setStriped = function(striped) {

		this.getDataGridConfig().striped = striped;

		return this;
	};

	/**
	 * 获取提交方式
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getMethod = function() {

		return this.getDataGridConfig().method;
	};

	/**
	 * 设置提交方式
	 * 
	 * @param method{String}
	 *            提交方式
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setMethod = function(method) {

		this.getDataGridConfig().method = method;

		return this;
	};

	/**
	 * 获取是否禁止文字自动换行
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getNowrap = function() {

		return this.getDataGridConfig().nowrap;
	};

	/**
	 * 设置禁止文字自动换行
	 * 
	 * @param nowrap{Boolean}
	 *            是否禁止文字自动换行
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setNowrap = function(nowrap) {

		this.getDataGridConfig().nowrap = nowrap;

		return this;
	};

	/**
	 * 获取id字段
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getIdField = function() {

		return this.getDataGridConfig().idField;
	};

	/**
	 * 设置id字段
	 * 
	 * @param idField{String}
	 *            id字段
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setIdField = function(idField) {

		this.getDataGridConfig().idField = idField;

		return this;
	};

	/**
	 * 获取数据URL
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getUrl = function() {

		return this.getDataGridConfig().url;
	};

	/**
	 * 设置数据URL
	 * 
	 * @param url{String}
	 *            数据URL
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setUrl = function(url) {

		this.getDataGridConfig().url = url;

		return this;
	};

	/**
	 * 获取数据
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getData = function() {

		return this.getDataGridConfig().data;
	};

	/**
	 * 设置数据
	 * 
	 * @param data{Array}
	 *            数据
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setData = function(data) {

		this.getDataGridConfig().data = data;

		return this;
	};

	/**
	 * 获取数据加载等待提示
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getLoadMsg = function() {

		return this.getDataGridConfig().loadMsg;
	};

	/**
	 * 设置数据加载等待提示
	 * 
	 * @param loadMsg{String}
	 *            数据加载等待提示
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setLoadMsg = function(loadMsg) {

		this.getDataGridConfig().loadMsg = loadMsg;

		return this;
	};

	/**
	 * 获取页脚工具栏
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getPagination = function() {

		return this.getDataGridConfig().pagination;
	};

	/**
	 * 设置是否显示页脚工具栏
	 * 
	 * @param pagination{Boolean}
	 *            是否显示页脚工具栏
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setPagination = function(pagination) {

		this.getDataGridConfig().pagination = pagination;

		return this;
	};

	/**
	 * 获取是否显示行号
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getRownumbers = function() {

		return this.getDataGridConfig().rownumbers;
	};

	/**
	 * 设置是否显示行号
	 * 
	 * @param rownumbers{Boolean}
	 *            是否显示行号
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setRownumbers = function(rownumbers) {

		this.getDataGridConfig().rownumbers = rownumbers;

		return this;
	};

	/**
	 * 获取是否仅能选中单行
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getSingleSelect = function() {

		return this.getDataGridConfig().singleSelect;
	};

	/**
	 * 设置是否仅能选中单行
	 * 
	 * @param singleSelect{Boolean}
	 *            是否仅能选中单行
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setSingleSelect = function(singleSelect) {

		this.getDataGridConfig().singleSelect = singleSelect;

		return this;
	};

	/**
	 * 获取是否ctrl键选中
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getCtrlSelect = function() {

		return this.getDataGridConfig().ctrlSelect;
	};

	/**
	 * 设置是否ctrl键选中
	 * 
	 * @param ctrlSelect{Boolean}
	 *            是否ctrl键选中
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setCtrlSelect = function(ctrlSelect) {

		this.getDataGridConfig().ctrlSelect = ctrlSelect;

		return this;
	};

	/**
	 * 获取是否check时选中
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getCheckOnSelect = function() {

		return this.getDataGridConfig().checkOnSelect;
	};

	/**
	 * 设置是否check时选中
	 * 
	 * @param checkOnSelect{Boolean}
	 *            是否check时选中
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setCheckOnSelect = function(checkOnSelect) {

		this.getDataGridConfig().checkOnSelect = checkOnSelect;

		return this;
	};

	/**
	 * 获取是否选中时check
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getSelectOnCheck = function() {

		return this.getDataGridConfig().selectOnCheck;
	};

	/**
	 * 设置是否选中时check
	 * 
	 * @param selectOnCheck{Boolean}
	 *            是否选中时check
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setSelectOnCheck = function(selectOnCheck) {

		this.getDataGridConfig().selectOnCheck = selectOnCheck;

		return this;
	};

	/**
	 * 获取分页工具条位置
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getPagePosition = function() {

		return this.getDataGridConfig().pagePosition;
	};

	/**
	 * 设置分页工具条位置
	 * 
	 * @param pagePosition{String}
	 *            分页工具条位置
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setPagePosition = function(pagePosition) {

		this.getDataGridConfig().pagePosition = pagePosition;

		return this;
	};

	/**
	 * 获取默认页码
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getPageNumber = function() {

		return this.getDataGridConfig().pageNumber;
	};

	/**
	 * 设置默认页码
	 * 
	 * @param pageNumber{Number}
	 *            默认页码
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setPageNumber = function(pageNumber) {

		this.getDataGridConfig().pageNumber = pageNumber;

		return this;
	};

	/**
	 * 获取分页数
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getPageSize = function() {

		return this.getDataGridConfig().pageSize;
	};

	/**
	 * 设置分页数
	 * 
	 * @param pageSize{Number}
	 *            分页数
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setPageSize = function(pageSize) {

		this.getDataGridConfig().pageSize = pageSize;

		return this;
	};

	/**
	 * 获取分页数可选列表
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getPageList = function() {

		return this.getDataGridConfig().pageList;
	};

	/**
	 * 设置分页数可选列表
	 * 
	 * @param pageList{Array}
	 *            分页数可选列表
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setPageList = function(pageList) {

		this.getDataGridConfig().pageList = pageList;

		return this;
	};

	/**
	 * 获取传入后台的参数
	 * 
	 * @returns {Object}
	 */
	Constructor.prototype.getQueryParams = function() {

		return this.getDataGridConfig().queryParams;
	};

	/**
	 * 设置传入后台的参数
	 * 
	 * @param queryParams{Object}
	 *            传入后台的参数
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setQueryParams = function(queryParams) {

		this.getDataGridConfig().queryParams = queryParams;

		return this;
	};

	/**
	 * 获取排序字段
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getSortName = function() {

		return this.getDataGridConfig().sortName;
	};

	/**
	 * 设置排序字段
	 * 
	 * @param sortName{String}
	 *            排序字段
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setSortName = function(sortName) {

		this.getDataGridConfig().sortName = sortName;

		return this;
	};

	/**
	 * 获取排序方式
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getSortOrder = function() {

		return this.getDataGridConfig().sortOrder;
	};

	/**
	 * 设置排序方式
	 * 
	 * @param sortOrder{String}
	 *            排序方式
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setSortOrder = function(sortOrder) {

		this.getDataGridConfig().sortOrder = sortOrder;

		return this;
	};

	/**
	 * 获取multiSort
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getMultiSort = function() {

		return this.getDataGridConfig().multiSort;
	};

	/**
	 * 设置multiSort
	 * 
	 * @param multiSort{Boolean}
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setMultiSort = function(multiSort) {

		this.getDataGridConfig().multiSort = multiSort;

		return this;
	};

	/**
	 * 获取向后台发送排序条件
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getRemoteSort = function() {

		return this.getDataGridConfig().remoteSort;
	};

	/**
	 * 设置向后台发送排序条件
	 * 
	 * @param remoteSort{Boolean}
	 *            向后台发送排序条件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setRemoteSort = function(remoteSort) {

		this.getDataGridConfig().remoteSort = remoteSort;

		return this;
	};

	/**
	 * 获取显示标头
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getShowHeader = function() {

		return this.getDataGridConfig().showHeader;
	};

	/**
	 * 设置显示标头
	 * 
	 * @param showHeader{Boolean}
	 *            显示标头
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setShowHeader = function(showHeader) {

		this.getDataGridConfig().showHeader = showHeader;

		return this;
	};

	/**
	 * 获取显示脚
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getShowFooter = function() {

		return this.getDataGridConfig().showFooter;
	};

	/**
	 * 设置显示脚
	 * 
	 * @param showFooter{Boolean}
	 *            显示脚
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setShowFooter = function(showFooter) {

		this.getDataGridConfig().showFooter = showFooter;

		return this;
	};

	/**
	 * 获取scrollbarSize
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getScrollbarSize = function() {

		return this.getDataGridConfig().scrollbarSize;
	};

	/**
	 * 设置scrollbarSize
	 * 
	 * @param scrollbarSize{Number}
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setScrollbarSize = function(scrollbarSize) {

		this.getDataGridConfig().scrollbarSize = scrollbarSize;

		return this;
	};

	/**
	 * 获取行样式
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getRowStyler = function() {

		return this.getDataGridConfig().rowStyler;
	};

	/**
	 * 设置行样式
	 * 
	 * @param rowStyler{function}
	 *            行样式
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setRowStyler = function(rowStyler) {

		this.getDataGridConfig().rowStyler = rowStyler;

		return this;
	};

	// Constructor.prototype.getLoader = function() {
	//
	// return this.getDataGridConfig().loader;
	// };

	// Constructor.prototype.setLoader = function(loader) {
	//
	// this.getDataGridConfig().loader = loader;
	// return this;
	// };

	/**
	 * 获取数据加载过滤
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getLoadFilter = function() {

		return this.getDataGridConfig().loadFilter;
	};

	/**
	 * 设置数据加载过滤
	 * 
	 * @param loader{function}
	 *            数据加载过滤
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setLoadFilter = function(loadFilter) {

		this.getDataGridConfig().loadFilter = loadFilter;

		return this;
	};

	/**
	 * 获取编辑器
	 * 
	 * @returns {Object}
	 */
	Constructor.prototype.getEditors = function() {

		return this.getDataGridConfig().editors;
	};

	/**
	 * 设置编辑器
	 * 
	 * @param editors{Object}
	 *            编辑器
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setEditors = function(editors) {

		this.getDataGridConfig().editors = editors;

		return this;
	};

	// Constructor.prototype.getView = function() {
	//
	// return this.getDataGridConfig().view;
	// };

	// Constructor.prototype.setView = function(view) {
	//
	// this.getDataGridConfig().view = view;
	// return this;
	// };

	/**
	 * 获取数据加载成功事件
	 * 
	 * @returns
	 */
	Constructor.prototype.getOnLoadSuccess = function() {

		return this.getDataGridConfig().onLoadSuccess;
	};

	/**
	 * 设置数据加载成功事件
	 * 
	 * @param onLoadSuccess{function}
	 *            数据加载成功事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnLoadSuccess = function(onLoadSuccess) {

		this.getDataGridConfig().onLoadSuccess = onLoadSuccess;

		return this;
	};

	/**
	 * 获取数据加载失败事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnLoadError = function() {

		return this.getDataGridConfig().onLoadError;
	};

	/**
	 * 设置数据加载失败事件
	 * 
	 * @param onLoadError{function}
	 *            数据加载失败事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnLoadError = function(onLoadError) {

		this.getDataGridConfig().onLoadError = onLoadError;

		return this;
	};

	/**
	 * 获取数据加载前事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnBeforeLoad = function() {

		return this.getDataGridConfig().onBeforeLoad;
	};

	/**
	 * 设置数据加载前事件
	 * 
	 * @param onBeforeLoad{function}
	 *            数据加载前事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnBeforeLoad = function(onBeforeLoad) {

		this.getDataGridConfig().onBeforeLoad = onBeforeLoad;

		return this;
	};

	/**
	 * 获取行单击事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnClickRow = function() {

		return this.getDataGridConfig().onClickRow;
	};

	/**
	 * 设置行单击事件
	 * 
	 * @param onClickRow{function}
	 *            行单击事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnClickRow = function(onClickRow) {

		this.getDataGridConfig().onClickRow = onClickRow;

		return this;
	};

	/**
	 * 获取行双击事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnDblClickRow = function() {

		return this.getDataGridConfig().onDblClickRow;
	};

	/**
	 * 设置行双击事件
	 * 
	 * @param onDblClickRow{function}
	 *            行双击事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnDblClickRow = function(onDblClickRow) {

		this.getDataGridConfig().onDblClickRow = onDblClickRow;

		return this;
	};

	/**
	 * 获取单元格单击事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnClickCell = function() {

		return this.getDataGridConfig().onClickCell;
	};

	/**
	 * 设置单元格单击事件
	 * 
	 * @param onClickCell{function}
	 *            单元格单击事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnClickCell = function(onClickCell) {

		this.getDataGridConfig().onClickCell = onClickCell;

		return this;
	};

	/**
	 * 获取单元格双击事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnDblClickCell = function() {

		return this.getDataGridConfig().onDblClickCell;
	};

	/**
	 * 设置单元格双击事件
	 * 
	 * @param onDblClickCell{function}
	 *            单元格双击事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnDblClickCell = function(onDblClickCell) {

		this.getDataGridConfig().onDblClickCell = onDblClickCell;

		return this;
	};

	/**
	 * 获取排序前事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnBeforeSortColumn = function() {

		return this.getDataGridConfig().onBeforeSortColumn;
	};

	/**
	 * 设置排序前事件
	 * 
	 * @param onBeforeSortColumn{function}
	 *            排序前事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnBeforeSortColumn = function(onBeforeSortColumn) {

		this.getDataGridConfig().onBeforeSortColumn = onBeforeSortColumn;

		return this;
	};

	/**
	 * 获取排序事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnSortColumn = function() {

		return this.getDataGridConfig().onSortColumn;
	};

	/**
	 * 设置排序事件
	 * 
	 * @param onSortColumn{function}
	 *            排序事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnSortColumn = function(onSortColumn) {

		this.getDataGridConfig().onSortColumn = onSortColumn;

		return this;
	};

	/**
	 * 获取改变列宽事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnResizeColumn = function() {

		return this.getDataGridConfig().onResizeColumn;
	};

	/**
	 * 设置改变列宽事件
	 * 
	 * @param onResizeColumn{function}
	 *            改变列宽事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnResizeColumn = function(onResizeColumn) {

		this.getDataGridConfig().onResizeColumn = onResizeColumn;

		return this;
	};

	/**
	 * 获取选中前事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnBeforeSelect = function() {

		return this.getDataGridConfig().onBeforeSelect;
	};

	/**
	 * 设置选中前事件
	 * 
	 * @param onBeforeSelect{function}
	 *            选中前事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnBeforeSelect = function(onBeforeSelect) {

		this.getDataGridConfig().onBeforeSelect = onBeforeSelect;

		return this;
	};

	/**
	 * 获取选中事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnSelect = function() {

		return this.getDataGridConfig().onSelect;
	};

	/**
	 * 设置选中事件
	 * 
	 * @param onSelect{function}
	 *            选中事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnSelect = function(onSelect) {

		this.getDataGridConfig().onSelect = onSelect;

		return this;
	};

	/**
	 * 获取取消选中前事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnBeforeUnselect = function() {

		return this.getDataGridConfig().onBeforeUnselect;
	};

	/**
	 * 设置取消选中前事件
	 * 
	 * @param onBeforeUnselect{function}
	 *            取消选中前事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnBeforeUnselect = function(onBeforeUnselect) {

		this.getDataGridConfig().onBeforeUnselect = onBeforeUnselect;

		return this;
	};

	/**
	 * 获取取消选中事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnUnselect = function() {

		return this.getDataGridConfig().onUnselect;
	};

	/**
	 * 设置取消选中事件
	 * 
	 * @param onUnselect{function}
	 *            取消选中事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnUnselect = function(onUnselect) {

		this.getDataGridConfig().onUnselect = onUnselect;

		return this;
	};

	/**
	 * 获取选中所有时事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnSelectAll = function() {

		return this.getDataGridConfig().onSelectAll;
	};

	/**
	 * 设置选中所有时事件
	 * 
	 * @param onSelectAll{function}
	 *            选中所有时事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.getOnSelectAll = function(onSelectAll) {

		this.getDataGridConfig().onSelectAll = onSelectAll;

		return this;
	};

	/**
	 * 获取取消选中所有时事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnUnselectAll = function() {

		return this.getDataGridConfig().onUnselectAll;
	};

	/**
	 * 设置取消选中所有时事件
	 * 
	 * @param onUnselectAll{function}
	 *            取消选中所有时事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnUnselectAll = function(onUnselectAll) {

		this.getDataGridConfig().onUnselectAll = onUnselectAll;

		return this;
	};

	/**
	 * 获取勾选前事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnBeforeCheck = function() {

		return this.getDataGridConfig().onBeforeCheck;
	};

	/**
	 * 设置勾选前事件
	 * 
	 * @param onBeforeCheck{function}
	 *            勾选前事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnBeforeCheck = function(onBeforeCheck) {

		this.getDataGridConfig().onBeforeCheck = onBeforeCheck;

		return this;
	};

	/**
	 * 获取勾选事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnCheck = function() {

		return this.getDataGridConfig().onCheck;
	};

	/**
	 * 设置勾选事件
	 * 
	 * @param onCheck{function}
	 *            勾选事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnCheck = function(onCheck) {

		this.getDataGridConfig().onCheck = onCheck;

		return this;
	};

	/**
	 * 获取取消勾选前事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnBeforeUncheck = function() {

		return this.getDataGridConfig().onBeforeUncheck;
	};

	/**
	 * 设置取消勾选前事件
	 * 
	 * @param onBeforeUncheck{function}
	 *            取消勾选前事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnBeforeUncheck = function(onBeforeUncheck) {

		this.getDataGridConfig().onBeforeUncheck = onBeforeUncheck;

		return this;
	};

	/**
	 * 获取取消勾选事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnUncheck = function() {

		return this.getDataGridConfig().onUncheck;
	};

	/**
	 * 设置取消勾选事件
	 * 
	 * @param onUncheck{function}
	 *            取消勾选事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnUncheck = function(onUncheck) {

		this.getDataGridConfig().onUncheck = onUncheck;

		return this;
	};

	/**
	 * 获取勾选所有事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnCheckAll = function() {

		return this.getDataGridConfig().onCheckAll;
	};

	/**
	 * 设置勾选所有事件
	 * 
	 * @param onCheckAll{function}
	 *            勾选所有事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnCheckAll = function(onCheckAll) {

		this.getDataGridConfig().onCheckAll = onCheckAll;

		return this;
	};

	/**
	 * 获取取消勾选所有事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnUncheckAll = function() {

		return this.getDataGridConfig().onUncheckAll;
	};

	/**
	 * 设置取消勾选所有事件
	 * 
	 * @param onUncheckAll{function}
	 *            取消勾选所有事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnUncheckAll = function(onUncheckAll) {

		this.getDataGridConfig().onUncheckAll = onUncheckAll;

		return this;
	};

	/**
	 * 获取编辑前事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnBeforeEdit = function() {

		return this.getDataGridConfig().onBeforeEdit;
	};

	/**
	 * 设置编辑前事件
	 * 
	 * @param onBeforeEdit{function}
	 *            编辑前事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnBeforeEdit = function(onBeforeEdit) {

		this.getDataGridConfig().onBeforeEdit = onBeforeEdit;

		return this;
	};

	/**
	 * 获取编辑事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnBeginEdit = function() {

		return this.getDataGridConfig().onBeginEdit;
	};

	/**
	 * 设置编辑事件
	 * 
	 * @param onBeginEdit{function}
	 *            编辑事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnBeginEdit = function(onBeginEdit) {

		this.getDataGridConfig().onBeginEdit = onBeginEdit;

		return this;
	};

	/**
	 * 获取结束编辑事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnEndEdit = function() {

		return this.getDataGridConfig().onEndEdit;
	};

	/**
	 * 设置结束编辑事件
	 * 
	 * @param onEndEdit{function}
	 *            结束编辑事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnEndEdit = function(onEndEdit) {

		this.getDataGridConfig().onEndEdit = onEndEdit;

		return this;
	};

	/**
	 * 获取编辑后事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnAfterEdit = function() {

		return this.getDataGridConfig().onAfterEdit;
	};

	/**
	 * 设置编辑后事件
	 * 
	 * @param onAfterEdit{function}
	 *            编辑后事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnAfterEdit = function(onAfterEdit) {

		this.getDataGridConfig().onAfterEdit = onAfterEdit;

		return this;
	};

	/**
	 * 获取取消编辑事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnCancelEdit = function() {

		return this.getDataGridConfig().onCancelEdit;
	};

	/**
	 * 设置取消编辑事件
	 * 
	 * @param onCancelEdit{function}
	 *            取消编辑事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnCancelEdit = function(onCancelEdit) {

		this.getDataGridConfig().onCancelEdit = onCancelEdit;

		return this;
	};

	/**
	 * 获取标题头右键点击事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnHeaderContextMenu = function() {

		return this.getDataGridConfig().onHeaderContextMenu;
	};

	/**
	 * 设置标题头右键点击事件
	 * 
	 * @param onHeaderContextMenu{function}
	 *            标题头右键点击事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnHeaderContextMenu = function(onHeaderContextMenu) {

		this.getDataGridConfig().onHeaderContextMenu = onHeaderContextMenu;

		return this;
	};

	/**
	 * 获取行右键点击事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnRowContextMenu = function() {

		return this.getDataGridConfig().onRowContextMenu;
	};

	/**
	 * 设置行右键点击事件
	 * 
	 * @param onRowContextMenu{function}
	 *            行右键点击事件
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.setOnRowContextMenu = function(onRowContextMenu) {

		this.getDataGridConfig().onRowContextMenu = onRowContextMenu;

		return this;
	};

	/**
	 * 模板初始化
	 * 
	 * @returns {Object}
	 */
	Constructor.prototype.init = function() {

		// 模板的jQuery对象
		var $dataGrid = this.getDataGridJQuery();
		// 模板所在Div 初始化
		divInit($dataGrid);

		// 生成对应的DataGrid
		$dataGrid.datagrid(this.getDataGridConfig());
		// 修改分页数,设置cookie值保存本地
		$dataGrid.datagrid("getPager").pagination({
			onChangePageSize : function(pageSize) {
				cookie.set("coreHtmlEasyuiDataGridPageSize", pageSize);
			}
		});

		return packageJQuery($dataGrid);
	};

	// 返回构造函数
	return Constructor;
})();