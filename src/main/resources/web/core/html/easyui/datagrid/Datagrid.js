/**
 * Datagrid
 * 
 * EasyUI datagrid模板
 * 
 * 类
 */

core.html.easyui.datagrid.Datagrid = (function() {

	// cookie管理者
	var cookie = core.html.util.Cookie.getCookie();

	// 默认配置
	var DEFAULT_CONFIG = {

		/** ==========panel属性========== */
		// 宽度
		width : null,
		// 高度
		height : null,

		/** ==========datagrid属性========== */
		// 列
		columns : null,
		// 冻结列
		frozenColumns : null,
		// 列宽自适应
		fitColumns : true,
		resizeHandle : "left",
		// 行高自适应
		autoRowHeight : true,
		// 工具条
		toolbar : null,
		// 隔行变色
		striped : true,
		// 加载远程连接数据方式
		method : "post",
		// 禁止文字自动换行
		nowrap : true,
		// id字段
		idField : null,
		// 数据URL
		url : null,
		// 数据
		data : null,
		// 数据加载等待提示
		loadMsg : "Processing, please wait …",
		// 添加页脚工具栏
		pagination : true,
		// 显示行号
		rownumbers : true,
		// 仅能选中单行
		singleSelect : true,
		// ctrl键选中
		ctrlSelect : false,
		// check时选中
		checkOnSelect : true,
		// 选中时check
		selectOnCheck : true,
		// 分页工具条位置
		pagePosition : "bottom",
		// 默认页码
		pageNumber : 1,
		// 分页数
		pageSize : cookie.get("coreHtmlEasyuiDatagrid") == null ? 20 : cookie.get("coreHtmlEasyuiDatagrid"),
		// 分页数可选列表
		pageList : [ 10, 20, 30, 40, 50 ],
		// 传入后台的参数
		queryParams : {},
		// 排序字段
		sortName : null,
		// 排序方式
		sortOrder : "asc",
		multiSort : false,
		// 向后台发送排序条件
		remoteSort : true,
		// 显示标头
		showHeader : true,
		// 显示脚
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
		// 编辑器
		editors : null,
		// what's this?
		// view : null,

		/** ==========datagrid事件========== */
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
	 * @param $datagrid{Object}
	 *            模板所在Div的jQuery对象
	 */
	function divInit($datagrid) {

		$datagrid.empty();
	}

	/**
	 * 打包封装模板的jQuery对象
	 * 
	 * @param $datagrid{Object}
	 *            模板的jQuery对象
	 * @returns {Object} 模板的jQuery对象
	 */
	function packagejQuery($datagrid) {

		/** ==========datagrid方法========== */
		/**
		 * 获取属性对象
		 * 
		 * @returns {Object}
		 */
		$datagrid.options = function() {

			return $datagrid.datagrid("options");
		};

		/**
		 * 获取页面对象
		 * 
		 * @returns {Object}
		 */
		$datagrid.getPager = function() {

			return $datagrid.datagrid("getPager");
		};

		/**
		 * 获取面板对象
		 * 
		 * @returns {Object}
		 */
		$datagrid.getPanel = function() {

			return $datagrid.datagrid("getPanel");
		};

		/**
		 * 获取列字段
		 * 
		 * @param frozen{Object}
		 * @returns {Object}
		 */
		$datagrid.getColumnFields = function(frozen) {

			return $datagrid.datagrid("getPanel", frozen);
		};

		/**
		 * 获取列属性
		 * 
		 * @param field{Object}
		 * @returns {Object}
		 */
		$datagrid.getColumnOption = function(field) {

			return $datagrid.datagrid("getColumnOption", field);
		};

		/**
		 * 调整大小
		 * 
		 * @param param{Object}
		 *            参数
		 * @returns
		 */
		$datagrid.resize = function(param) {

			return $datagrid.datagrid("resize", param);
		};

		/**
		 * 重新加载数据
		 * 
		 * @param param{Object}
		 *            参数
		 * @returns
		 */
		$datagrid.load = function(param) {

			return $datagrid.datagrid("load", param);
		};

		/**
		 * 重新加载数据,且停留在当前页面
		 * 
		 * @param param{Object}
		 *            参数
		 * @returns
		 */
		$datagrid.reload = function(param) {

			return $datagrid.datagrid("reload", param);
		};

		/**
		 * 重载页脚
		 * 
		 * @param footer{Object}
		 * @returns
		 */
		$datagrid.reloadFooter = function(footer) {
			return $datagrid.datagrid("reloadFooter", footer);
		};

		/**
		 * 显示载入中
		 * 
		 * @returns
		 */
		$datagrid.loading = function() {

			return $datagrid.datagrid("loading");
		};

		/**
		 * 隐藏载入中
		 * 
		 * @returns
		 */
		$datagrid.loaded = function() {

			return $datagrid.datagrid("loaded");
		};

		/**
		 * 列宽自适应
		 * 
		 * @returns
		 */
		$datagrid.fitColumns = function() {

			return $datagrid.datagrid("fitColumns");
		};

		/**
		 * 固定列宽
		 * 
		 * @param field{Object}
		 *            字段
		 * @returns
		 */
		$datagrid.fixColumnSize = function(field) {

			return $datagrid.datagrid("fixColumnSize", field);
		};

		/**
		 * 固定指定列高度
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$datagrid.fixRowHeight = function(index) {

			return $datagrid.datagrid("fixRowHeight", index);
		};

		/**
		 * 冻结指定行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$datagrid.freezeRow = function(index) {

			return $datagrid.datagrid("freezeRow", index);
		};

		/**
		 * 列宽自适应
		 * 
		 * @param field{Object}
		 *            列字段
		 * @returns
		 */
		$datagrid.autoSizeColumn = function(field) {

			return $datagrid.datagrid("autoSizeColumn", field);
		};

		/**
		 * 加载数据
		 * 
		 * @param data{Object}
		 *            需要加载的数据
		 * @returns
		 */
		$datagrid.loadData = function(data) {

			return $datagrid.datagrid("loadData", data);
		};

		/**
		 * 获取当前数据
		 * 
		 * @returns {Array}
		 */
		$datagrid.getData = function() {

			return $datagrid.datagrid("getData");
		};

		/**
		 * 获取所有行
		 * 
		 * @returns {Array}
		 */
		$datagrid.getRows = function() {

			return $datagrid.datagrid("getRows");
		};

		/**
		 * 获取所有行
		 * 
		 * @returns
		 */
		$datagrid.getFooterRows = function() {

			return $datagrid.datagrid("getFooterRows");
		};

		/**
		 * 获取指定行号
		 * 
		 * @param row{Object}
		 *            行对象
		 * @returns {Number}
		 */
		$datagrid.getRowIndex = function(row) {

			return $datagrid.datagrid("getRowIndex", row);
		};

		/**
		 * 获取勾选行
		 * 
		 * @returns {Object}
		 */
		$datagrid.getChecked = function() {

			return $datagrid.datagrid("getChecked");
		};

		/**
		 * 获取选中节点
		 * 
		 * @returns {Object}
		 */
		$datagrid.getSelected = function() {

			return $datagrid.datagrid("getSelected");
		};

		/**
		 * 获取所有选中行
		 * 
		 * @returns {Array}
		 */
		$datagrid.getSelections = function() {

			return $datagrid.datagrid("getSelections");
		};

		/**
		 * 清除所有选中行
		 * 
		 * @returns
		 */
		$datagrid.clearSelections = function() {

			return $datagrid.datagrid("clearSelections");
		};

		/**
		 * 清除所有勾选的行
		 * 
		 * @returns
		 */
		$datagrid.clearChecked = function() {

			return $datagrid.datagrid("clearChecked");
		};

		/**
		 * 滚动至指定行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$datagrid.scrollTo = function(index) {

			return $datagrid.datagrid("scrollTo", index);
		};

		/**
		 * 跳至某页
		 * 
		 * @param param{Object}
		 *            参数
		 * @returns
		 */
		$datagrid.gotoPage = function(param) {

			return $datagrid.datagrid("gotoPage", param);
		};

		/**
		 * 高亮行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$datagrid.highlightRow = function(index) {

			return $datagrid.datagrid("highlightRow", index);
		};

		/**
		 * 选中所有行
		 * 
		 * @returns
		 */
		$datagrid.selectAll = function() {

			return $datagrid.datagrid("selectAll");
		};

		/**
		 * 取消选中所有行
		 * 
		 * @returns
		 */
		$datagrid.unselectAll = function() {

			return $datagrid.datagrid("unselectAll");
		};

		/**
		 * 选中行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$datagrid.selectRow = function(index) {

			return $datagrid.datagrid("selectRow", index);
		};

		/**
		 * 通过ID选中行
		 * 
		 * @param idValue{String}
		 *            id值
		 * @returns
		 */
		$datagrid.selectRecord = function(idValue) {

			return $datagrid.datagrid("selectRecord", idValue);
		};

		/**
		 * 取消选中行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$datagrid.unselectRow = function(index) {

			return $datagrid.datagrid("unselectRow", index);
		};

		/**
		 * 勾选所有行
		 * 
		 * @returns
		 */
		$datagrid.checkAll = function() {

			return $datagrid.datagrid("checkAll");
		};

		/**
		 * 取消勾选所有行
		 * 
		 * @returns
		 */
		$datagrid.uncheckAll = function() {

			return $datagrid.datagrid("uncheckAll");
		};

		/**
		 * 勾选行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$datagrid.checkRow = function(index) {

			return $datagrid.datagrid("checkRow", index);
		};

		/**
		 * 取消勾选行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$datagrid.uncheckRow = function(index) {

			return $datagrid.datagrid("uncheckRow", index);
		};

		/**
		 * 编辑行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$datagrid.beginEdit = function(index) {

			return $datagrid.datagrid("beginEdit", index);
		};

		/**
		 * 结束编辑行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$datagrid.endEdit = function(index) {

			return $datagrid.datagrid("endEdit", index);
		};

		/**
		 * 取消编辑行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$datagrid.cancelEdit = function(index) {

			return $datagrid.datagrid("cancelEdit", index);
		};

		/**
		 * 获取行所有编辑器
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$datagrid.getEditors = function(index) {

			return $datagrid.datagrid("getEditors", index);
		};

		/**
		 * 获取行中某列编辑器
		 * 
		 * @param options{Object}
		 *            参数
		 * @returns
		 */
		$datagrid.getEditor = function(options) {

			return $datagrid.datagrid("getEditor", options);
		};

		/**
		 * 刷新行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$datagrid.refreshRow = function(index) {

			return $datagrid.datagrid("refreshRow", index);
		};

		/**
		 * 验证行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$datagrid.validateRow = function(index) {

			return $datagrid.datagrid("validateRow", index);
		};

		/**
		 * 更新行
		 * 
		 * @param param{Object}
		 *            参数
		 * @returns
		 */
		$datagrid.updateRow = function(param) {

			return $datagrid.datagrid("updateRow", param);
		};

		/**
		 * 添加行
		 * 
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		$datagrid.appendRow = function(row) {

			return $datagrid.datagrid("appendRow", row);
		};

		/**
		 * 插入行
		 * 
		 * @param param{Object}
		 *            参数
		 * @returns
		 */
		$datagrid.insertRow = function(param) {

			return $datagird.datagrid("insertRow", param);
		};

		/**
		 * 删除行
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$datagrid.deleteRow = function(index) {

			return $datagrid.datagrid("deleteRow", index);
		};

		/**
		 * 获取修改行
		 * 
		 * @param type{Object}
		 *            类型
		 * @returns
		 */
		$datagrid.getChanges = function(type) {

			return $datagrid.datagrid("getChanges", type);
		};

		/**
		 * 提交所有修改行
		 * 
		 * @returns
		 */
		$datagrid.acceptChanges = function() {

			return $datagrid.datagrid("acceptChanges");
		};

		/**
		 * 回滚修改行
		 * 
		 * @returns
		 */
		$datagrid.rejectChanges = function() {

			return $datagird.datagrid("rejectChanges");
		};

		/**
		 * 合并单元格
		 * 
		 * @param options{Object}
		 * @returns
		 */
		$datagrid.mergeCells = function(options) {

			return $datagrid.datagrid("mergeCells", options);
		};

		/**
		 * 显示列
		 * 
		 * @param field{Object}
		 *            列字段
		 * @returns
		 */
		$datagrid.showColumn = function(field) {

			return $datagrid.datagrid("showColumn", field);
		};

		/**
		 * 隐藏列
		 * 
		 * @param field{Object}
		 *            列字段
		 * @returns
		 */
		$datagrid.hideColumn = function(field) {

			return $datagrid.datagrid("hideColumn", field);
		};

		/**
		 * 排序
		 * 
		 * @param param{Object}
		 *            参数
		 * @returns
		 */
		$datagrid.sort = function(param) {

			return $datagrid.datagrid("sort", param);
		};

		/** ==========扩展方法========== */
		/**
		 * 设置宽度
		 * 
		 * @param width{Number}
		 *            宽度
		 * @returns
		 */
		$datagrid.setWidth = function(width) {

			return $datagrid.resize({
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
		$datagrid.setHeight = function(height) {

			return $datagrid.resize({
				height : height
			});
		};

		/**
		 * 获取当前页数据条数
		 * 
		 * @returns {Number}
		 */
		$datagrid.getCurrentDataNum = function() {

			var data = $datagrid.getData();
			return data.rows.length;
		}

		/**
		 * 获取记录总条数
		 * 
		 * @returns {Number}
		 */
		$datagrid.getTotalDataNum = function() {

			var data = $datagrid.getData();
			return data.total;
		}

		/**
		 * 获取分页数
		 * 
		 * @returns {Number}
		 */
		$datagrid.getPageSize = function() {

			var options = $datagrid.getPager().data("pagination").options;
			return options.pageSize;
		}

		/**
		 * 获取总页数
		 * 
		 * @returns {Number}
		 */
		$datagrid.getPageNum = function() {

			var options = $datagrid.getPager().data("pagination").options;
			var total = options.total;
			var max = Math.ceil(total / options.pageSize);
			return max;
		}

		/**
		 * 获取当前页码
		 * 
		 * @returns {Number}
		 */
		$datagrid.getCurrentPageNum = function() {

			var options = $datagrid.getPager().data("pagination").options;
			return options.pageNumber;
		}

		/**
		 * 翻至前一页
		 * 
		 * @returns
		 */
		$datagrid.selectBeforePage = function() {

			var Pager = $datagrid.getPager();
			var options = Pager.data("pagination").options;
			$datagrid.gotoPage(options.pageNumber - 1);
		}

		/**
		 * 翻至后一页
		 * 
		 * @returns
		 */
		$datagrid.selectNextPage = function() {

			var Pager = $datagrid.getPager();
			var options = Pager.data("pagination").options;
			$datagrid.gotoPage(options.pageNumber + 1);
		}

		/**
		 * 获取指定行数据
		 * 
		 * @param index{Number}
		 *            行号
		 * @returns
		 */
		$datagrid.getRow = function(index) {

			return $datagrid.getRows()[index];
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
		$datagrid.changeRowOrder = function(index1, index2) {

			var min = index1 > index2 ? index2 : index1;
			var max = index1 > index2 ? index1 : index2;

			var rowMin = $datagrid.getRows()[min];
			var rowMax = $datagrid.getRows()[max];

			// 删除
			$datagrid.deleteRow(max);
			$datagrid.deleteRow(min);

			// 添加
			$datagrid.insertRow({
				index : min,
				row : rowMax
			});
			$datagrid.insertRow({
				index : max,
				row : rowMin
			});
		}

		/**
		 * 获取选中行索引
		 * 
		 * @returns {Number}
		 */
		$datagrid.getSelectedRowIndex = function() {

			return $datagrid.getRowIndex($datagrid.getSelected());
		};

		return $datagrid;
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
		var $datagrid = $("#" + divid);
		if ($datagrid.length === 0) {
			throw "core.html.easyui.datagrid.Datagrid:参数异常.DIV(ID:" + divid + ")不存在.";
		}

		// datagrid 配置
		var datagridConfig = Object.clone(DEFAULT_CONFIG);

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
		 * @returns {Object}
		 */
		this.getDatagridjQuery = function() {

			return $datagrid;
		};

		/**
		 * 获取模板配置
		 * 
		 * @returns {Object}
		 */
		this.getDatagridConfig = function() {

			return datagridConfig;
		};

		/**
		 * 设置模板配置
		 * 
		 * @param datagridConfig{Object}
		 *            模板配置
		 * @returns {core.html.easyui.datagrid.Datagrid}
		 */
		this.setDatagridConfig = function(_datagridConfig) {

			datagridConfig = _datagridConfig;
			return this;
		};
	};

	/**
	 * 获取宽度
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getWidth = function() {

		return this.getDatagridConfig().width;
	};

	/**
	 * 设置宽度
	 * 
	 * @param width{Number}
	 *            宽度
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setWidth = function(width) {

		this.getDatagridConfig().width = width;

		return this;
	};

	/**
	 * 获取高度
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getHeight = function() {

		return this.getDatagridConfig().height;
	};

	/**
	 * 设置高度
	 * 
	 * @param height{Number}
	 *            高度
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setHeight = function(height) {

		this.getDatagridConfig().height = height;

		return this;
	};

	/**
	 * 获取列
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getColumns = function() {

		return this.getDatagridConfig().columns;
	};

	/**
	 * 设置列
	 * 
	 * @param columns{Array}
	 *            列
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setColumns = function(columns) {

		this.getDatagridConfig().columns = columns;

		return this;
	};

	/**
	 * 获取冻结列
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getFrozenColumns = function() {

		return this.getDatagridConfig().frozenColumns;
	};

	/**
	 * 设置冻结列
	 * 
	 * @param frozenColumns{Array}
	 *            冻结列
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setFrozenColumns = function(frozenColumns) {

		this.getDatagridConfig().frozenColumns = frozenColumns;

		return this;
	};

	/**
	 * 获取是否列宽自适应
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getFitColumns = function() {

		return this.getDatagridConfig().fitColumns;
	};

	/**
	 * 设置列宽自适应
	 * 
	 * @param fitColumns{Boolean}
	 *            是否列宽自适应
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setFitColumns = function(fitColumns) {

		this.getDatagridConfig().fitColumns = fitColumns;

		return this;
	};

	/**
	 * 获取改变列头
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getResizeHandle = function() {

		return this.getDatagridConfig().resizeHandle;
	};

	/**
	 * 设置改变列头
	 * 
	 * @param resizeHandle{Boolean}
	 *            是否改变列头
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setResizeHandle = function(resizeHandle) {

		this.getDatagridConfig().resizeHandle = resizeHandle;

		return this;
	};

	/**
	 * 获取是否行高自适应
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getAutoRowHeight = function() {

		return this.getDatagridConfig().autoRowHeight;
	};

	/**
	 * 设置行高自适应
	 * 
	 * @param autoRowHeight{Boolean}
	 *            是否行高自适应
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setAutoRowHeight = function(autoRowHeight) {

		this.getDatagridConfig().autoRowHeight = autoRowHeight;

		return this;
	};

	/**
	 * 获取工具条
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getToolbar = function() {

		return this.getDatagridConfig().toolbar;
	};

	/**
	 * 设置工具条
	 * 
	 * @param toolbar{Array}
	 *            工具条
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setToolbar = function(toolbar) {

		this.getDatagridConfig().toolbar = toolbar;

		return this;
	};

	/**
	 * 获取是否各行变色
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getStriped = function() {

		return this.getDatagridConfig().striped;
	};

	/**
	 * 设置是否各行变色
	 * 
	 * @param striped{Boolean}
	 *            是否各行变色
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setStriped = function(striped) {

		this.getDatagridConfig().striped = striped;

		return this;
	};

	/**
	 * 获取提交方式
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getMethod = function() {

		return this.getDatagridConfig().method;
	};

	/**
	 * 设置提交方式
	 * 
	 * @param method{String}
	 *            提交方式
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setMethod = function(method) {

		this.getDatagridConfig().method = method;

		return this;
	};

	/**
	 * 获取是否禁止文字自动换行
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getNowrap = function() {

		return this.getDatagridConfig().nowrap;
	};

	/**
	 * 设置禁止文字自动换行
	 * 
	 * @param nowrap{Boolean}
	 *            是否禁止文字自动换行
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setNowrap = function(nowrap) {

		this.getDatagridConfig().nowrap = nowrap;

		return this;
	};

	/**
	 * 获取id字段
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getIdField = function() {

		return this.getDatagridConfig().idField;
	};

	/**
	 * 设置id字段
	 * 
	 * @param idField{String}
	 *            id字段
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setIdField = function(idField) {

		this.getDatagridConfig().idField = idField;

		return this;
	};

	/**
	 * 获取数据URL
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getUrl = function() {

		return this.getDatagridConfig().url;
	};

	/**
	 * 设置数据URL
	 * 
	 * @param url{String}
	 *            数据URL
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setUrl = function(url) {

		this.getDatagridConfig().url = url;

		return this;
	};

	/**
	 * 获取数据
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getData = function() {

		return this.getDatagridConfig().data;
	};

	/**
	 * 设置数据
	 * 
	 * @param data{Array}
	 *            数据
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setData = function(data) {

		this.getDatagridConfig().data = data;

		return this;
	};

	/**
	 * 获取数据加载等待提示
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getLoadMsg = function() {

		return this.getDatagridConfig().loadMsg;
	};

	/**
	 * 设置数据加载等待提示
	 * 
	 * @param loadMsg{String}
	 *            数据加载等待提示
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setLoadMsg = function(loadMsg) {

		this.getDatagridConfig().loadMsg = loadMsg;

		return this;
	};

	/**
	 * 获取页脚工具栏
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getPagination = function() {

		return this.getDatagridConfig().pagination;
	};

	/**
	 * 设置是否显示页脚工具栏
	 * 
	 * @param pagination{Boolean}
	 *            是否显示页脚工具栏
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setPagination = function(pagination) {

		this.getDatagridConfig().pagination = pagination;

		return this;
	};

	/**
	 * 获取是否显示行号
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getRownumbers = function() {

		return this.getDatagridConfig().rownumbers;
	};

	/**
	 * 设置是否显示行号
	 * 
	 * @param rownumbers{Boolean}
	 *            是否显示行号
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setRownumbers = function(rownumbers) {

		this.getDatagridConfig().rownumbers = rownumbers;

		return this;
	};

	/**
	 * 获取是否仅能选中单行
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getSingleSelect = function() {

		return this.getDatagridConfig().singleSelect;
	};

	/**
	 * 设置是否仅能选中单行
	 * 
	 * @param singleSelect{Boolean}
	 *            是否仅能选中单行
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setSingleSelect = function(singleSelect) {

		this.getDatagridConfig().singleSelect = singleSelect;

		return this;
	};

	/**
	 * 获取是否ctrl键选中
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getCtrlSelect = function() {

		return this.getDatagridConfig().ctrlSelect;
	};

	/**
	 * 设置是否ctrl键选中
	 * 
	 * @param ctrlSelect{Boolean}
	 *            是否ctrl键选中
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setCtrlSelect = function(ctrlSelect) {

		this.getDatagridConfig().ctrlSelect = ctrlSelect;

		return this;
	};

	/**
	 * 获取是否check时选中
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getCheckOnSelect = function() {

		return this.getDatagridConfig().checkOnSelect;
	};

	/**
	 * 设置是否check时选中
	 * 
	 * @param checkOnSelect{Boolean}
	 *            是否check时选中
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setCheckOnSelect = function(checkOnSelect) {

		this.getDatagridConfig().checkOnSelect = checkOnSelect;

		return this;
	};

	/**
	 * 获取是否选中时check
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getSelectOnCheck = function() {

		return this.getDatagridConfig().selectOnCheck;
	};

	/**
	 * 设置是否选中时check
	 * 
	 * @param selectOnCheck{Boolean}
	 *            是否选中时check
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setSelectOnCheck = function(selectOnCheck) {

		this.getDatagridConfig().selectOnCheck = selectOnCheck;

		return this;
	};

	/**
	 * 获取分页工具条位置
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getPagePosition = function() {

		return this.getDatagridConfig().pagePosition;
	};

	/**
	 * 设置分页工具条位置
	 * 
	 * @param pagePosition{String}
	 *            分页工具条位置
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setPagePosition = function(pagePosition) {

		this.getDatagridConfig().pagePosition = pagePosition;

		return this;
	};

	/**
	 * 获取默认页码
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getPageNumber = function() {

		return this.getDatagridConfig().pageNumber;
	};

	/**
	 * 设置默认页码
	 * 
	 * @param pageNumber{Number}
	 *            默认页码
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setPageNumber = function(pageNumber) {

		this.getDatagridConfig().pageNumber = pageNumber;

		return this;
	};

	/**
	 * 获取分页数
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getPageSize = function() {

		return this.getDatagridConfig().pageSize;
	};

	/**
	 * 设置分页数
	 * 
	 * @param pageSize{Number}
	 *            分页数
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setPageSize = function(pageSize) {

		this.getDatagridConfig().pageSize = pageSize;

		return this;
	};

	/**
	 * 获取分页数可选列表
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getPageList = function() {

		return this.getDatagridConfig().pageList;
	};

	/**
	 * 设置分页数可选列表
	 * 
	 * @param pageList{Array}
	 *            分页数可选列表
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setPageList = function(pageList) {

		this.getDatagridConfig().pageList = pageList;

		return this;
	};

	/**
	 * 获取传入后台的参数
	 * 
	 * @returns {Object}
	 */
	Constructor.prototype.getQueryParams = function() {

		return this.getDatagridConfig().queryParams;
	};

	/**
	 * 设置传入后台的参数
	 * 
	 * @param queryParams{Object}
	 *            传入后台的参数
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setQueryParams = function(queryParams) {

		this.getDatagridConfig().queryParams = queryParams;

		return this;
	};

	/**
	 * 获取排序字段
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getSortName = function() {

		return this.getDatagridConfig().sortName;
	};

	/**
	 * 设置排序字段
	 * 
	 * @param sortName{String}
	 *            排序字段
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setSortName = function(sortName) {

		this.getDatagridConfig().sortName = sortName;

		return this;
	};

	/**
	 * 获取排序方式
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getSortOrder = function() {

		return this.getDatagridConfig().sortOrder;
	};

	/**
	 * 设置排序方式
	 * 
	 * @param sortOrder{String}
	 *            排序方式
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setSortOrder = function(sortOrder) {

		this.getDatagridConfig().sortOrder = sortOrder;

		return this;
	};

	/**
	 * 获取multiSort
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getMultiSort = function() {

		return this.getDatagridConfig().multiSort;
	};

	/**
	 * 设置multiSort
	 * 
	 * @param multiSort{Boolean}
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setMultiSort = function(multiSort) {

		this.getDatagridConfig().multiSort = multiSort;

		return this;
	};

	/**
	 * 获取向后台发送排序条件
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getRemoteSort = function() {

		return this.getDatagridConfig().remoteSort;
	};

	/**
	 * 设置向后台发送排序条件
	 * 
	 * @param remoteSort{Boolean}
	 *            向后台发送排序条件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setRemoteSort = function(remoteSort) {

		this.getDatagridConfig().remoteSort = remoteSort;

		return this;
	};

	/**
	 * 获取显示标头
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getShowHeader = function() {

		return this.getDatagridConfig().showHeader;
	};

	/**
	 * 设置显示标头
	 * 
	 * @param showHeader{Boolean}
	 *            显示标头
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setShowHeader = function(showHeader) {

		this.getDatagridConfig().showHeader = showHeader;

		return this;
	};

	/**
	 * 获取显示脚
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getShowFooter = function() {

		return this.getDatagridConfig().showFooter;
	};

	/**
	 * 设置显示脚
	 * 
	 * @param showFooter{Boolean}
	 *            显示脚
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setShowFooter = function(showFooter) {

		this.getDatagridConfig().showFooter = showFooter;

		return this;
	};

	/**
	 * 获取scrollbarSize
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getScrollbarSize = function() {

		return this.getDatagridConfig().scrollbarSize;
	};

	/**
	 * 设置scrollbarSize
	 * 
	 * @param scrollbarSize{Number}
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setScrollbarSize = function(scrollbarSize) {

		this.getDatagridConfig().scrollbarSize = scrollbarSize;

		return this;
	};

	/**
	 * 获取行样式
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getRowStyler = function() {

		return this.getDatagridConfig().rowStyler;
	};

	/**
	 * 设置行样式
	 * 
	 * @param rowStyler{function}
	 *            行样式
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setRowStyler = function(rowStyler) {

		this.getDatagridConfig().rowStyler = rowStyler;

		return this;
	};

	// Constructor.prototype.getLoader = function() {
	//
	// return this.getDatagridConfig().loader;
	// };

	// Constructor.prototype.setLoader = function(loader) {
	//
	// this.getDatagridConfig().loader = loader;
	// return this;
	// };

	/**
	 * 获取数据加载过滤
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getLoadFilter = function() {

		return this.getDatagridConfig().loadFilter;
	};

	/**
	 * 设置数据加载过滤
	 * 
	 * @param loader{function}
	 *            数据加载过滤
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setLoadFilter = function(loadFilter) {

		this.getDatagridConfig().loadFilter = loadFilter;

		return this;
	};

	/**
	 * 获取编辑器
	 * 
	 * @returns {Object}
	 */
	Constructor.prototype.getEditors = function() {

		return this.getDatagridConfig().editors;
	};

	/**
	 * 设置编辑器
	 * 
	 * @param editors{Object}
	 *            编辑器
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setEditors = function(editors) {

		this.getDatagridConfig().editors = editors;

		return this;
	};

	// Constructor.prototype.getView = function() {
	//
	// return this.getDatagridConfig().view;
	// };

	// Constructor.prototype.setView = function(view) {
	//
	// this.getDatagridConfig().view = view;
	// return this;
	// };

	/**
	 * 获取数据加载成功事件
	 * 
	 * @returns
	 */
	Constructor.prototype.getOnLoadSuccess = function() {

		return this.getDatagridConfig().onLoadSuccess;
	};

	/**
	 * 设置数据加载成功事件
	 * 
	 * @param onLoadSuccess{function}
	 *            数据加载成功事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnLoadSuccess = function(onLoadSuccess) {

		this.getDatagridConfig().onLoadSuccess = onLoadSuccess;

		return this;
	};

	/**
	 * 获取数据加载失败事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnLoadError = function() {

		return this.getDatagridConfig().onLoadError;
	};

	/**
	 * 设置数据加载失败事件
	 * 
	 * @param onLoadError{function}
	 *            数据加载失败事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnLoadError = function(onLoadError) {

		this.getDatagridConfig().onLoadError = onLoadError;

		return this;
	};

	/**
	 * 获取数据加载前事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnBeforeLoad = function() {

		return this.getDatagridConfig().onBeforeLoad;
	};

	/**
	 * 设置数据加载前事件
	 * 
	 * @param onBeforeLoad{function}
	 *            数据加载前事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnBeforeLoad = function(onBeforeLoad) {

		this.getDatagridConfig().onBeforeLoad = onBeforeLoad;

		return this;
	};

	/**
	 * 获取行单击事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnClickRow = function() {

		return this.getDatagridConfig().onClickRow;
	};

	/**
	 * 设置行单击事件
	 * 
	 * @param onClickRow{function}
	 *            行单击事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnClickRow = function(onClickRow) {

		this.getDatagridConfig().onClickRow = onClickRow;

		return this;
	};

	/**
	 * 获取行双击事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnDblClickRow = function() {

		return this.getDatagridConfig().onDblClickRow;
	};

	/**
	 * 设置行双击事件
	 * 
	 * @param onDblClickRow{function}
	 *            行双击事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnDblClickRow = function(onDblClickRow) {

		this.getDatagridConfig().onDblClickRow = onDblClickRow;

		return this;
	};

	/**
	 * 获取单元格单击事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnClickCell = function() {

		return this.getDatagridConfig().onClickCell;
	};

	/**
	 * 设置单元格单击事件
	 * 
	 * @param onClickCell{function}
	 *            单元格单击事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnClickCell = function(onClickCell) {

		this.getDatagridConfig().onClickCell = onClickCell;

		return this;
	};

	/**
	 * 获取单元格双击事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnDblClickCell = function() {

		return this.getDatagridConfig().onDblClickCell;
	};

	/**
	 * 设置单元格双击事件
	 * 
	 * @param onDblClickCell{function}
	 *            单元格双击事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnDblClickCell = function(onDblClickCell) {

		this.getDatagridConfig().onDblClickCell = onDblClickCell;

		return this;
	};

	/**
	 * 获取排序前事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnBeforeSortColumn = function() {

		return this.getDatagridConfig().onBeforeSortColumn;
	};

	/**
	 * 设置排序前事件
	 * 
	 * @param onBeforeSortColumn{function}
	 *            排序前事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnBeforeSortColumn = function(onBeforeSortColumn) {

		this.getDatagridConfig().onBeforeSortColumn = onBeforeSortColumn;

		return this;
	};

	/**
	 * 获取排序事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnSortColumn = function() {

		return this.getDatagridConfig().onSortColumn;
	};

	/**
	 * 设置排序事件
	 * 
	 * @param onSortColumn{function}
	 *            排序事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnSortColumn = function(onSortColumn) {

		this.getDatagridConfig().onSortColumn = onSortColumn;

		return this;
	};

	/**
	 * 获取改变列宽事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnResizeColumn = function() {

		return this.getDatagridConfig().onResizeColumn;
	};

	/**
	 * 设置改变列宽事件
	 * 
	 * @param onResizeColumn{function}
	 *            改变列宽事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnResizeColumn = function(onResizeColumn) {

		this.getDatagridConfig().onResizeColumn = onResizeColumn;

		return this;
	};

	/**
	 * 获取选中前事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnBeforeSelect = function() {

		return this.getDatagridConfig().onBeforeSelect;
	};

	/**
	 * 设置选中前事件
	 * 
	 * @param onBeforeSelect{function}
	 *            选中前事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnBeforeSelect = function(onBeforeSelect) {

		this.getDatagridConfig().onBeforeSelect = onBeforeSelect;

		return this;
	};

	/**
	 * 获取选中事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnSelect = function() {

		return this.getDatagridConfig().onSelect;
	};

	/**
	 * 设置选中事件
	 * 
	 * @param onSelect{function}
	 *            选中事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnSelect = function(onSelect) {

		this.getDatagridConfig().onSelect = onSelect;

		return this;
	};

	/**
	 * 获取取消选中前事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnBeforeUnselect = function() {

		return this.getDatagridConfig().onBeforeUnselect;
	};

	/**
	 * 设置取消选中前事件
	 * 
	 * @param onBeforeUnselect{function}
	 *            取消选中前事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnBeforeUnselect = function(onBeforeUnselect) {

		this.getDatagridConfig().onBeforeUnselect = onBeforeUnselect;

		return this;
	};

	/**
	 * 获取取消选中事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnUnselect = function() {

		return this.getDatagridConfig().onUnselect;
	};

	/**
	 * 设置取消选中事件
	 * 
	 * @param onUnselect{function}
	 *            取消选中事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnUnselect = function(onUnselect) {

		this.getDatagridConfig().onUnselect = onUnselect;

		return this;
	};

	/**
	 * 获取选中所有时事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnSelectAll = function() {

		return this.getDatagridConfig().onSelectAll;
	};

	/**
	 * 设置选中所有时事件
	 * 
	 * @param onSelectAll{function}
	 *            选中所有时事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.getOnSelectAll = function(onSelectAll) {

		this.getDatagridConfig().onSelectAll = onSelectAll;

		return this;
	};

	/**
	 * 获取取消选中所有时事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnUnselectAll = function() {

		return this.getDatagridConfig().onUnselectAll;
	};

	/**
	 * 设置取消选中所有时事件
	 * 
	 * @param onUnselectAll{function}
	 *            取消选中所有时事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnUnselectAll = function(onUnselectAll) {

		this.getDatagridConfig().onUnselectAll = onUnselectAll;

		return this;
	};

	/**
	 * 获取勾选前事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnBeforeCheck = function() {

		return this.getDatagridConfig().onBeforeCheck;
	};

	/**
	 * 设置勾选前事件
	 * 
	 * @param onBeforeCheck{function}
	 *            勾选前事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnBeforeCheck = function(onBeforeCheck) {

		this.getDatagridConfig().onBeforeCheck = onBeforeCheck;

		return this;
	};

	/**
	 * 获取勾选事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnCheck = function() {

		return this.getDatagridConfig().onCheck;
	};

	/**
	 * 设置勾选事件
	 * 
	 * @param onCheck{function}
	 *            勾选事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnCheck = function(onCheck) {

		this.getDatagridConfig().onCheck = onCheck;

		return this;
	};

	/**
	 * 获取取消勾选前事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnBeforeUncheck = function() {

		return this.getDatagridConfig().onBeforeUncheck;
	};

	/**
	 * 设置取消勾选前事件
	 * 
	 * @param onBeforeUncheck{function}
	 *            取消勾选前事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnBeforeUncheck = function(onBeforeUncheck) {

		this.getDatagridConfig().onBeforeUncheck = onBeforeUncheck;

		return this;
	};

	/**
	 * 获取取消勾选事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnUncheck = function() {

		return this.getDatagridConfig().onUncheck;
	};

	/**
	 * 设置取消勾选事件
	 * 
	 * @param onUncheck{function}
	 *            取消勾选事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnUncheck = function(onUncheck) {

		this.getDatagridConfig().onUncheck = onUncheck;

		return this;
	};

	/**
	 * 获取勾选所有事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnCheckAll = function() {

		return this.getDatagridConfig().onCheckAll;
	};

	/**
	 * 设置勾选所有事件
	 * 
	 * @param onCheckAll{function}
	 *            勾选所有事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnCheckAll = function(onCheckAll) {

		this.getDatagridConfig().onCheckAll = onCheckAll;

		return this;
	};

	/**
	 * 获取取消勾选所有事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnUncheckAll = function() {

		return this.getDatagridConfig().onUncheckAll;
	};

	/**
	 * 设置取消勾选所有事件
	 * 
	 * @param onUncheckAll{function}
	 *            取消勾选所有事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnUncheckAll = function(onUncheckAll) {

		this.getDatagridConfig().onUncheckAll = onUncheckAll;

		return this;
	};

	/**
	 * 获取编辑前事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnBeforeEdit = function() {

		return this.getDatagridConfig().onBeforeEdit;
	};

	/**
	 * 设置编辑前事件
	 * 
	 * @param onBeforeEdit{function}
	 *            编辑前事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnBeforeEdit = function(onBeforeEdit) {

		this.getDatagridConfig().onBeforeEdit = onBeforeEdit;

		return this;
	};

	/**
	 * 获取编辑事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnBeginEdit = function() {

		return this.getDatagridConfig().onBeginEdit;
	};

	/**
	 * 设置编辑事件
	 * 
	 * @param onBeginEdit{function}
	 *            编辑事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnBeginEdit = function(onBeginEdit) {

		this.getDatagridConfig().onBeginEdit = onBeginEdit;

		return this;
	};

	/**
	 * 获取结束编辑事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnEndEdit = function() {

		return this.getDatagridConfig().onEndEdit;
	};

	/**
	 * 设置结束编辑事件
	 * 
	 * @param onEndEdit{function}
	 *            结束编辑事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnEndEdit = function(onEndEdit) {

		this.getDatagridConfig().onEndEdit = onEndEdit;

		return this;
	};

	/**
	 * 获取编辑后事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnAfterEdit = function() {

		return this.getDatagridConfig().onAfterEdit;
	};

	/**
	 * 设置编辑后事件
	 * 
	 * @param onAfterEdit{function}
	 *            编辑后事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnAfterEdit = function(onAfterEdit) {

		this.getDatagridConfig().onAfterEdit = onAfterEdit;

		return this;
	};

	/**
	 * 获取取消编辑事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnCancelEdit = function() {

		return this.getDatagridConfig().onCancelEdit;
	};

	/**
	 * 设置取消编辑事件
	 * 
	 * @param onCancelEdit{function}
	 *            取消编辑事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnCancelEdit = function(onCancelEdit) {

		this.getDatagridConfig().onCancelEdit = onCancelEdit;

		return this;
	};

	/**
	 * 获取标题头右键点击事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnHeaderContextMenu = function() {

		return this.getDatagridConfig().onHeaderContextMenu;
	};

	/**
	 * 设置标题头右键点击事件
	 * 
	 * @param onHeaderContextMenu{function}
	 *            标题头右键点击事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnHeaderContextMenu = function(onHeaderContextMenu) {

		this.getDatagridConfig().onHeaderContextMenu = onHeaderContextMenu;

		return this;
	};

	/**
	 * 获取行右键点击事件
	 * 
	 * @returns {function}
	 */
	Constructor.prototype.getOnRowContextMenu = function() {

		return this.getDatagridConfig().onRowContextMenu;
	};

	/**
	 * 设置行右键点击事件
	 * 
	 * @param onRowContextMenu{function}
	 *            行右键点击事件
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.setOnRowContextMenu = function(onRowContextMenu) {

		this.getDatagridConfig().onRowContextMenu = onRowContextMenu;

		return this;
	};

	/**
	 * 模板初始化
	 * 
	 * @returns {Object}
	 */
	Constructor.prototype.init = function() {

		// 模板的jQuery对象
		var $datagrid = this.getDatagridjQuery();
		// 模板所在Div 初始化
		divInit($datagrid);

		// 生成对应的datagrid
		$datagrid.datagrid(this.getDatagridConfig());
		// 修改分页数,设置cookie值保存本地
		$datagrid.datagrid("getPager").pagination({
			onChangePageSize : function(pageSize) {
				cookie.set("coreHtmlEasyuiDatagrid", pageSize);
			}
		});

		return packagejQuery($datagrid);
	};

	return Constructor;
})();