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
		pageSize : cookie.get("coreHtmlEasyuiDatagrid") == null ? 20 : cookie.getCookie().get("coreHtmlEasyuiDatagrid"),
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
		 * @param index
		 *            行号
		 * @param row
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
		 * @param data
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
		 * @param data
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
		 * @param param
		 * @returns
		 */
		onBeforeLoad : function(param) {
		},
		/**
		 * 行单击事件
		 * 
		 * @param index
		 *            行号
		 * @param row
		 *            行对象
		 */
		onClickRow : function(index, row) {
		},
		/**
		 * 行双击事件
		 * 
		 * @param index
		 *            行号
		 * @param row
		 *            行对象
		 */
		onDblClickRow : function(index, row) {
		},
		/**
		 * 单元格单击事件
		 * 
		 * @param index
		 *            行号
		 * @param field
		 *            字段
		 * @param value
		 *            值
		 * @returns
		 */
		onClickCell : function(index, field, value) {
		},
		/**
		 * 单元格双击事件
		 * 
		 * @param index
		 *            行号
		 * @param field
		 *            字段
		 * @param value
		 *            值
		 * @returns
		 */
		onDblClickCell : function(index, field, value) {
		},
		/**
		 * 排序前
		 * 
		 * @param sort
		 *            排序字段
		 * @param order
		 *            排序方式
		 * @returns
		 */
		onBeforeSortColumn : function(sort, order) {
		},
		/**
		 * 排序
		 * 
		 * @param sort
		 *            排序字段
		 * @param order
		 *            排序方式
		 * @returns
		 */
		onSortColumn : function(sort, order) {
		},
		/**
		 * 改变列宽
		 * 
		 * @param field
		 *            字段
		 * @param width
		 *            宽度
		 * @returns
		 */
		onResizeColumn : function(field, width) {
		},
		/**
		 * 选中前
		 * 
		 * @param index
		 *            行号
		 * @param row
		 *            行对象
		 * @returns
		 */
		onBeforeSelect : function(index, row) {
		},
		/**
		 * 选中
		 * 
		 * @param index
		 *            行号
		 * @param row
		 *            行对象
		 * @returns
		 */
		onSelect : function(index, row) {
		},
		/**
		 * 取消选中前
		 * 
		 * @param index
		 *            行号
		 * @param row
		 *            行对象
		 * @returns
		 */
		onBeforeUnselect : function(index, row) {
		},
		/**
		 * 取消选中
		 * 
		 * @param index
		 *            行号
		 * @param row
		 *            行对象
		 * @returns
		 */
		onUnselect : function(index, row) {
		},
		/**
		 * 选中所有时
		 * 
		 * @param rows
		 *            选中的行对象集合
		 * @returns
		 */
		onSelectAll : function(rows) {
		},
		/**
		 * 取消选中所有时
		 * 
		 * @param rows
		 *            取消选中的行对象集合
		 * @returns
		 */
		onUnselectAll : function(rows) {
		},
		/**
		 * 勾选前
		 * 
		 * @param index
		 *            行号
		 * @param row
		 *            行对象
		 * @returns
		 */
		onBeforeCheck : function(index, row) {
		},
		/**
		 * 勾选
		 * 
		 * @param index
		 *            行号
		 * @param row
		 *            行对象
		 * @returns
		 */
		onCheck : function(index, row) {
		},
		/**
		 * 取消勾选前
		 * 
		 * @param index
		 *            行号
		 * @param row
		 *            行对象
		 * @returns
		 */
		onBeforeUncheck : function(index, row) {
		},
		/**
		 * 取消勾选
		 * 
		 * @param index
		 *            行号
		 * @param row
		 *            行对象
		 * @returns
		 */
		onUncheck : function(index, row) {
		},
		/**
		 * 勾选所有
		 * 
		 * @param rows
		 *            行对象集合
		 * @returns
		 */
		onCheckAll : function(rows) {
		},
		/**
		 * 取消勾选所有
		 * 
		 * @param rows
		 *            行对象集合
		 * @returns
		 */
		onUncheckAll : function(rows) {
		},
		/**
		 * 编辑前
		 * 
		 * @param index
		 *            行号
		 * @param row
		 *            行对象
		 * @returns
		 */
		onBeforeEdit : function(index, row) {
		},
		/**
		 * 编辑
		 * 
		 * @param index
		 *            行号
		 * @param row
		 *            行对象
		 * @returns
		 */
		onBeginEdit : function(index, row) {
		},
		/**
		 * 结束编辑
		 * 
		 * @param index
		 *            行号
		 * @param row
		 *            行对象
		 * @param changes
		 *            改变的行对象集合
		 * @returns
		 */
		onEndEdit : function(index, row, changes) {
		},
		/**
		 * 编辑后
		 * 
		 * @param index
		 *            行号
		 * @param row
		 *            行对象
		 * @param changes
		 *            改变的行对象集合
		 * @returns
		 */
		onAfterEdit : function(index, row, changes) {
		},
		/**
		 * 取消编辑
		 * 
		 * @param index
		 *            行号
		 * @param row
		 *            行对象
		 * @returns
		 */
		onCancelEdit : function(index, row) {
		},
		/**
		 * 标题头右键点击
		 * 
		 * @param e
		 * @param field
		 *            字段
		 * @returns
		 */
		onHeaderContextMenu : function(e, field) {
		},
		/**
		 * 行右键点击事件
		 * 
		 * @param e
		 * @param index
		 *            行号
		 * @param row
		 *            行对象
		 * @returns
		 */
		onRowContextMenu : function(e, index, row) {
		}
	};

	/**
	 * 打包封装模板的jQuery对象
	 * 
	 * @param $datagrid
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
		 * @param frozen
		 * @returns {Object}
		 */
		$datagrid.getColumnFields = function(frozen) {
			return $datagrid.datagrid("getPanel", frozen);
		};

		/**
		 * 获取列属性
		 * 
		 * @param field
		 * @returns
		 */
		$datagrid.getColumnOption = function(field) {
			return $datagrid.datagrid("getColumnOption", field);
		};

		/**
		 * 调整大小
		 * 
		 * @param param
		 *            参数
		 * @returns
		 */
		$datagrid.resize = function(param) {
			return $datagrid.datagrid("resize", param);
		};

		/**
		 * 重新加载数据
		 * 
		 * @param param
		 *            参数
		 * @returns
		 */
		$datagrid.load = function(param) {
			return $datagrid.datagrid("load", param);
		};

		/**
		 * 重新加载数据,且停留在当前页面
		 * 
		 * @param param
		 *            参数
		 * @returns
		 */
		$datagrid.reload = function(param) {
			return $datagrid.datagrid("reload", param);
		};

		/**
		 * 重载页脚
		 * 
		 * @param footer
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
		 * @param field
		 *            字段
		 * @returns
		 */
		$datagrid.fixColumnSize = function(field) {
			return $datagrid.datagrid("fixColumnSize", field);
		};

		/**
		 * 固定指定列高度
		 * 
		 * @param index
		 *            行号
		 * @returns
		 */
		$datagrid.fixRowHeight = function(index) {
			return $datagrid.datagrid("fixRowHeight", index);
		};

		/**
		 * 冻结指定行
		 * 
		 * @param index
		 *            行号
		 * @returns
		 */
		$datagrid.freezeRow = function(index) {
			return $datagrid.datagrid("freezeRow", index);
		};

		/**
		 * 列宽自适应
		 * 
		 * @param field
		 *            列字段
		 * @returns
		 */
		$datagrid.autoSizeColumn = function(field) {
			return $datagrid.datagrid("autoSizeColumn", field);
		};

		/**
		 * 加载数据
		 * 
		 * @param data
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
		 * @param row
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
		 * @param index
		 *            行号
		 * @returns
		 */
		$datagrid.scrollTo = function(index) {
			return $datagrid.datagrid("scrollTo", index);
		};

		/**
		 * 跳至某页
		 * 
		 * @param param
		 *            参数
		 * @returns
		 */
		$datagrid.gotoPage = function(param) {
			return $datagrid.datagrid("gotoPage", param);
		};

		/**
		 * 高亮行
		 * 
		 * @param index
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
		 * @param index
		 *            行号
		 * @returns
		 */
		$datagrid.selectRow = function(index) {
			return $datagrid.datagrid("selectRow", index);
		};

		/**
		 * 通过ID选中行
		 * 
		 * @param idValue
		 *            id值
		 * @returns
		 */
		$datagrid.selectRecord = function(idValue) {
			return $datagrid.datagrid("selectRecord", idValue);
		};

		/**
		 * 取消选中行
		 * 
		 * @param index
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
		 * @param index
		 *            行号
		 * @returns
		 */
		$datagrid.checkRow = function(index) {
			return $datagrid.datagrid("checkRow", index);
		};

		/**
		 * 取消勾选行
		 * 
		 * @param index
		 *            行号
		 * @returns
		 */
		$datagrid.uncheckRow = function(index) {
			return $datagrid.datagrid("uncheckRow", index);
		};

		/**
		 * 编辑行
		 * 
		 * @param index
		 *            行号
		 * @returns
		 */
		$datagrid.beginEdit = function(index) {
			return $datagrid.datagrid("beginEdit", index);
		};

		/**
		 * 结束编辑行
		 * 
		 * @param index
		 *            行号
		 * @returns
		 */
		$datagrid.endEdit = function(index) {
			return $datagrid.datagrid("endEdit", index);
		};

		/**
		 * 取消编辑行
		 * 
		 * @param index
		 *            行号
		 * @returns
		 */
		$datagrid.cancelEdit = function(index) {
			return $datagrid.datagrid("cancelEdit", index);
		};

		/**
		 * 获取行所有编辑器
		 * 
		 * @param index
		 *            行号
		 * @returns
		 */
		$datagrid.getEditors = function(index) {
			return $datagrid.datagrid("getEditors", index);
		};

		/**
		 * 获取行中某列编辑器
		 * 
		 * @param options
		 *            参数
		 * @returns
		 */
		$datagrid.getEditor = function(options) {
			return $datagrid.datagrid("getEditor", options);
		};

		/**
		 * 刷新行
		 * 
		 * @param index
		 *            行号
		 * @returns
		 */
		$datagrid.refreshRow = function(index) {
			return $datagrid.datagrid("refreshRow", index);
		};

		/**
		 * 验证行
		 * 
		 * @param index
		 *            行号
		 * @returns
		 */
		$datagrid.validateRow = function(index) {
			return $datagrid.datagrid("validateRow", index);
		};

		/**
		 * 更新行
		 * 
		 * @param param
		 *            参数
		 * @returns
		 */
		$datagrid.updateRow = function(param) {
			return $datagrid.datagrid("updateRow", param);
		};

		/**
		 * 添加行
		 * 
		 * @param row
		 *            行对象
		 * @returns
		 */
		$datagrid.appendRow = function(row) {
			return $datagrid.datagrid("appendRow", row);
		};

		/**
		 * 插入行
		 * 
		 * @param param
		 *            参数
		 * @returns
		 */
		$datagrid.insertRow = function(param) {
			return $datagird.datagrid("insertRow", param);
		};

		/**
		 * 删除行
		 * 
		 * @param index
		 *            行号
		 * @returns
		 */
		$datagrid.deleteRow = function(index) {

			return $datagrid.datagrid("deleteRow", index);
		};

		/**
		 * 获取修改行
		 * 
		 * @param type
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
		 * @param options
		 * @returns
		 */
		$datagrid.mergeCells = function(options) {

			return $datagrid.datagrid("mergeCells", options);
		};

		/**
		 * 显示列
		 * 
		 * @param field
		 *            列字段
		 * @returns
		 */
		$datagrid.showColumn = function(field) {

			return $datagrid.datagrid("showColumn", field);
		};

		/**
		 * 隐藏列
		 * 
		 * @param field
		 *            列字段
		 * @returns
		 */
		$datagrid.hideColumn = function(field) {

			return $datagrid.datagrid("hideColumn", field);
		};

		/**
		 * 排序
		 * 
		 * @param param
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
		 * @param width
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
		 * @param height
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
		 * @param index
		 *            行号
		 * @returns
		 */
		$datagrid.getRow = function(index) {

			return $datagrid.getRows()[index];
		};

		/**
		 * 互换两行位置
		 * 
		 * @param index1
		 *            行号1
		 * @param index2
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
	 * 模板所在Div 初始化
	 * 
	 * @param $datagrid
	 *            模板所在Div的jQuery对象
	 */
	function divInit($datagrid) {

		$datagrid.empty();
	}

	/**
	 * 构造函数
	 * 
	 * @param divid
	 *            模板所在的Div id
	 */
	var Constructor = function(_divid) {

		// 模板所在的Div id
		var divid = _divid;
		// 模板所在Div的jQuery对象
		var $datagrid = $("#" + divid);
		if ($datagrid.length === 0) {
			throw "core.html.easyui.datagrid.Datagrid:构造异常.DIV(ID:" + divid + ")不存在.";
		}

		// datagrid 配置
		var datagridConfig = Object.clone(DEFAULT_CONFIG);

		this.getDivid = function() {
			return divid;
		};

		this.getDatagridjQuery = function() {
			return $datagrid;
		};

		this.getDatagridConfig = function() {
			return datagridConfig;
		};

		this.setDatagridConfig = function(_datagridConfig) {
			datagridConfig = _datagridConfig;
		};
	};

	Constructor.prototype.getWidth = function() {

		return this.getDatagridConfig().width;
	};

	Constructor.prototype.setWidth = function(width) {

		this.getDatagridConfig().width = width;
		return this;
	};

	Constructor.prototype.getHeight = function() {

		return this.getDatagridConfig().height;
	};

	Constructor.prototype.setHeight = function(height) {

		this.getDatagridConfig().height = height;
		return this;
	};

	Constructor.prototype.getColumns = function() {

		return this.getDatagridConfig().columns;
	};

	Constructor.prototype.setColumns = function(columns) {

		this.getDatagridConfig().columns = columns;
		return this;
	};

	Constructor.prototype.getFrozenColumns = function() {

		return this.getDatagridConfig().frozenColumns;
	};

	Constructor.prototype.setFrozenColumns = function(frozenColumns) {

		this.getDatagridConfig().frozenColumns = frozenColumns;
		return this;
	};

	Constructor.prototype.getFitColumns = function() {

		return this.getDatagridConfig().fitColumns;
	};

	Constructor.prototype.setFitColumns = function(fitColumns) {

		this.getDatagridConfig().fitColumns = fitColumns;
		return this;
	};

	Constructor.prototype.getResizeHandle = function() {

		return this.getDatagridConfig().resizeHandle;
	};

	Constructor.prototype.setResizeHandle = function(resizeHandle) {

		this.getDatagridConfig().resizeHandle = resizeHandle;
		return this;
	};

	Constructor.prototype.getAutoRowHeight = function() {

		return this.getDatagridConfig().autoRowHeight;
	};

	Constructor.prototype.setAutoRowHeight = function(autoRowHeight) {

		this.getDatagridConfig().autoRowHeight = autoRowHeight;
		return this;
	};

	Constructor.prototype.getToolbar = function() {

		return this.getDatagridConfig().toolbar;
	};

	Constructor.prototype.setToolbar = function(toolbar) {

		this.getDatagridConfig().toolbar = toolbar;
		return this;
	};

	Constructor.prototype.getStriped = function() {

		return this.getDatagridConfig().striped;
	};

	Constructor.prototype.setStriped = function(striped) {

		this.getDatagridConfig().striped = striped;
		return this;
	};

	Constructor.prototype.getMethod = function() {

		return this.getDatagridConfig().method;
	};

	Constructor.prototype.setMethod = function(method) {

		this.getDatagridConfig().method = method;
		return this;
	};

	Constructor.prototype.getNowrap = function() {

		return this.getDatagridConfig().nowrap;
	};

	Constructor.prototype.setNowrap = function(nowrap) {

		this.getDatagridConfig().nowrap = nowrap;
		return this;
	};

	Constructor.prototype.getIdField = function() {

		return this.getDatagridConfig().idField;
	};

	Constructor.prototype.setIdField = function(idField) {

		this.getDatagridConfig().idField = idField;
		return this;
	};

	Constructor.prototype.getUrl = function() {

		return this.getDatagridConfig().url;
	};

	Constructor.prototype.setUrl = function(url) {

		this.getDatagridConfig().url = url;
		return this;
	};

	Constructor.prototype.getData = function() {

		return this.getDatagridConfig().data;
	};

	Constructor.prototype.setData = function(data) {

		this.getDatagridConfig().data = data;
		return this;
	};

	Constructor.prototype.getLoadMsg = function() {

		return this.getDatagridConfig().loadMsg;
	};

	Constructor.prototype.setLoadMsg = function(loadMsg) {

		this.getDatagridConfig().loadMsg = loadMsg;
		return this;
	};

	Constructor.prototype.getPagination = function() {

		return this.getDatagridConfig().pagination;
	};

	Constructor.prototype.setPagination = function(pagination) {

		this.getDatagridConfig().pagination = pagination;
		return this;
	};

	Constructor.prototype.getRownumbers = function() {

		return this.getDatagridConfig().rownumbers;
	};

	Constructor.prototype.setRownumbers = function(rownumbers) {

		this.getDatagridConfig().rownumbers = rownumbers;
		return this;
	};

	Constructor.prototype.getSingleSelect = function() {

		return this.getDatagridConfig().singleSelect;
	};

	Constructor.prototype.setSingleSelect = function(singleSelect) {

		this.getDatagridConfig().singleSelect = singleSelect;
		return this;
	};

	Constructor.prototype.getCtrlSelect = function() {

		return this.getDatagridConfig().ctrlSelect;
	};

	Constructor.prototype.setCtrlSelect = function(ctrlSelect) {

		this.getDatagridConfig().ctrlSelect = ctrlSelect;
		return this;
	};

	Constructor.prototype.getCheckOnSelect = function() {

		return this.getDatagridConfig().checkOnSelect;
	};

	Constructor.prototype.setCheckOnSelect = function(checkOnSelect) {

		this.getDatagridConfig().checkOnSelect = checkOnSelect;
		return this;
	};

	Constructor.prototype.getSelectOnCheck = function() {

		return this.getDatagridConfig().selectOnCheck;
	};

	Constructor.prototype.setSelectOnCheck = function(selectOnCheck) {

		this.getDatagridConfig().selectOnCheck = selectOnCheck;
		return this;
	};

	Constructor.prototype.getPagePosition = function() {

		return this.getDatagridConfig().pagePosition;
	};

	Constructor.prototype.setPagePosition = function(pagePosition) {

		this.getDatagridConfig().pagePosition = pagePosition;
		return this;
	};

	Constructor.prototype.getPageNumber = function() {

		return this.getDatagridConfig().pageNumber;
	};

	Constructor.prototype.setPageNumber = function(pageNumber) {

		this.getDatagridConfig().pageNumber = pageNumber;
		return this;
	};

	Constructor.prototype.getPageSize = function() {

		return this.getDatagridConfig().pageSize;
	};

	Constructor.prototype.setPageSize = function(pageSize) {

		this.getDatagridConfig().pageSize = pageSize;
		return this;
	};

	Constructor.prototype.getPageList = function() {

		return this.getDatagridConfig().pageList;
	};

	Constructor.prototype.setPageList = function(pageList) {

		this.getDatagridConfig().pageList = pageList;
		return this;
	};

	Constructor.prototype.getQueryParams = function() {

		return this.getDatagridConfig().queryParams;
	};

	Constructor.prototype.setQueryParams = function(queryParams) {

		this.getDatagridConfig().queryParams = queryParams;
		return this;
	};

	Constructor.prototype.getSortName = function() {

		return this.getDatagridConfig().sortName;
	};

	Constructor.prototype.setSortName = function(sortName) {

		this.getDatagridConfig().sortName = sortName;
		return this;
	};

	Constructor.prototype.getSortOrder = function() {

		return this.getDatagridConfig().sortOrder;
	};

	Constructor.prototype.setSortOrder = function(sortOrder) {

		this.getDatagridConfig().sortOrder = sortOrder;
		return this;
	};

	Constructor.prototype.getMultiSort = function() {

		return this.getDatagridConfig().multiSort;
	};

	Constructor.prototype.setMultiSort = function(multiSort) {

		this.getDatagridConfig().multiSort = multiSort;
		return this;
	};

	Constructor.prototype.getRemoteSort = function() {

		return this.getDatagridConfig().remoteSort;
	};

	Constructor.prototype.setRemoteSort = function(remoteSort) {

		this.getDatagridConfig().remoteSort = remoteSort;
		return this;
	};

	Constructor.prototype.getShowHeader = function() {

		return this.getDatagridConfig().showHeader;
	};

	Constructor.prototype.setShowHeader = function(showHeader) {

		this.getDatagridConfig().showHeader = showHeader;
		return this;
	};

	Constructor.prototype.getShowFooter = function() {

		return this.getDatagridConfig().showFooter;
	};

	Constructor.prototype.setShowFooter = function(showFooter) {

		this.getDatagridConfig().showFooter = showFooter;
		return this;
	};

	Constructor.prototype.getScrollbarSize = function() {

		return this.getDatagridConfig().scrollbarSize;
	};

	Constructor.prototype.setScrollbarSize = function(scrollbarSize) {

		this.getDatagridConfig().scrollbarSize = scrollbarSize;
		return this;
	};

	Constructor.prototype.getRowStyler = function() {

		return this.getDatagridConfig().rowStyler;
	};

	Constructor.prototype.setRowStyler = function(rowStyler) {

		this.getDatagridConfig().rowStyler = rowStyler;
		return this;
	};

	Constructor.prototype.getLoader = function() {

		return this.getDatagridConfig().loader;
	};

	Constructor.prototype.setLoader = function(loader) {

		this.getDatagridConfig().loader = loader;
		return this;
	};

	Constructor.prototype.getLoadFilter = function() {

		return this.getDatagridConfig().loadFilter;
	};

	Constructor.prototype.setLoadFilter = function(loadFilter) {

		this.getDatagridConfig().loadFilter = loadFilter;
		return this;
	};

	Constructor.prototype.getEditors = function() {

		return this.getDatagridConfig().editors;
	};

	Constructor.prototype.setEditors = function(editors) {

		this.getDatagridConfig().editors = editors;
		return this;
	};

	Constructor.prototype.getView = function() {

		return this.getDatagridConfig().view;
	};

	Constructor.prototype.setView = function(view) {

		this.getDatagridConfig().view = view;
		return this;
	};

	Constructor.prototype.getOnLoadSuccess = function() {

		return this.getDatagridConfig().onLoadSuccess;
	};

	Constructor.prototype.setOnLoadSuccess = function(onLoadSuccess) {

		this.getDatagridConfig().onLoadSuccess = onLoadSuccess;
		return this;
	};

	Constructor.prototype.getOnLoadError = function() {

		return this.getDatagridConfig().onLoadError;
	};

	Constructor.prototype.setOnLoadError = function(onLoadError) {

		this.getDatagridConfig().onLoadError = onLoadError;
		return this;
	};

	Constructor.prototype.getOnBeforeLoad = function() {

		return this.getDatagridConfig().onBeforeLoad;
	};

	Constructor.prototype.setOnBeforeLoad = function(onBeforeLoad) {

		this.getDatagridConfig().onBeforeLoad = onBeforeLoad;
		return this;
	};

	Constructor.prototype.getOnClickRow = function() {

		return this.getDatagridConfig().onClickRow;
	};

	Constructor.prototype.setOnClickRow = function(onClickRow) {

		this.getDatagridConfig().onClickRow = onClickRow;
		return this;
	};

	Constructor.prototype.getOnDblClickRow = function() {

		return this.getDatagridConfig().onDblClickRow;
	};

	Constructor.prototype.setOnDblClickRow = function(onDblClickRow) {

		this.getDatagridConfig().onDblClickRow = onDblClickRow;
		return this;
	};

	Constructor.prototype.getOnClickCell = function() {

		return this.getDatagridConfig().onClickCell;
	};

	Constructor.prototype.setOnClickCell = function(onClickCell) {

		this.getDatagridConfig().onClickCell = onClickCell;
		return this;
	};

	Constructor.prototype.getOnDblClickCell = function() {

		return this.getDatagridConfig().onDblClickCell;
	};

	Constructor.prototype.setOnDblClickCell = function(onDblClickCell) {

		this.getDatagridConfig().onDblClickCell = onDblClickCell;
		return this;
	};

	Constructor.prototype.getOnBeforeSortColumn = function() {

		return this.getDatagridConfig().onBeforeSortColumn;
	};

	Constructor.prototype.setOnBeforeSortColumn = function(onBeforeSortColumn) {

		this.getDatagridConfig().onBeforeSortColumn = onBeforeSortColumn;
		return this;
	};

	Constructor.prototype.getOnSortColumn = function() {

		return this.getDatagridConfig().onSortColumn;
	};

	Constructor.prototype.setOnSortColumn = function(onSortColumn) {

		this.getDatagridConfig().onSortColumn = onSortColumn;
		return this;
	};

	Constructor.prototype.getOnResizeColumn = function() {

		return this.getDatagridConfig().onResizeColumn;
	};

	Constructor.prototype.setOnResizeColumn = function(onResizeColumn) {

		this.getDatagridConfig().onResizeColumn = onResizeColumn;
		return this;
	};

	Constructor.prototype.getOnBeforeSelect = function() {

		return this.getDatagridConfig().onBeforeSelect;
	};

	Constructor.prototype.setOnBeforeSelect = function(onBeforeSelect) {

		this.getDatagridConfig().onBeforeSelect = onBeforeSelect;
		return this;
	};

	Constructor.prototype.getOnSelect = function() {

		return this.getDatagridConfig().onSelect;
	};

	Constructor.prototype.setOnSelect = function(onSelect) {

		this.getDatagridConfig().onSelect = onSelect;
		return this;
	};

	Constructor.prototype.getOnBeforeUnselect = function() {

		return this.getDatagridConfig().onBeforeUnselect;
	};

	Constructor.prototype.setOnBeforeUnselect = function(onBeforeUnselect) {

		this.getDatagridConfig().onBeforeUnselect = onBeforeUnselect;
		return this;
	};

	Constructor.prototype.getOnUnselect = function() {

		return this.getDatagridConfig().onUnselect;
	};

	Constructor.prototype.setOnUnselect = function(onUnselect) {

		this.getDatagridConfig().onUnselect = onUnselect;
		return this;
	};

	Constructor.prototype.getOnSelectAll = function() {

		return this.getDatagridConfig().onSelectAll;
	};

	Constructor.prototype.getOnSelectAll = function(onSelectAll) {

		this.getDatagridConfig().onSelectAll = onSelectAll;
		return this;
	};

	Constructor.prototype.getOnUnselectAll = function() {

		return this.getDatagridConfig().onUnselectAll;
	};

	Constructor.prototype.setOnUnselectAll = function(onUnselectAll) {

		this.getDatagridConfig().onUnselectAll = onUnselectAll;
		return this;
	};

	Constructor.prototype.getOnBeforeCheck = function() {

		return this.getDatagridConfig().onBeforeCheck;
	};

	Constructor.prototype.setOnBeforeCheck = function(onBeforeCheck) {

		this.getDatagridConfig().onBeforeCheck = onBeforeCheck;
		return this;
	};

	Constructor.prototype.getOnCheck = function() {

		return this.getDatagridConfig().onCheck;
	};

	Constructor.prototype.setOnCheck = function(onCheck) {

		this.getDatagridConfig().onCheck = onCheck;
		return this;
	};

	Constructor.prototype.getOnBeforeUncheck = function() {

		return this.getDatagridConfig().onBeforeUncheck;
	};

	Constructor.prototype.setOnBeforeUncheck = function(onBeforeUncheck) {

		this.getDatagridConfig().onBeforeUncheck = onBeforeUncheck;
		return this;
	};

	Constructor.prototype.getOnUncheck = function() {

		return this.getDatagridConfig().onUncheck;
	};

	Constructor.prototype.setOnUncheck = function(onUncheck) {

		this.getDatagridConfig().onUncheck = onUncheck;
		return this;
	};

	Constructor.prototype.getOnCheckAll = function() {

		return this.getDatagridConfig().onCheckAll;
	};

	Constructor.prototype.setOnCheckAll = function(onCheckAll) {

		this.getDatagridConfig().onCheckAll = onCheckAll;
		return this;
	};

	Constructor.prototype.getOnUncheckAll = function() {

		return this.getDatagridConfig().onUncheckAll;
	};

	Constructor.prototype.setOnUncheckAll = function(onUncheckAll) {

		this.getDatagridConfig().onUncheckAll = onUncheckAll;
		return this;
	};

	Constructor.prototype.getOnBeforeEdit = function() {

		return this.getDatagridConfig().onBeforeEdit;
	};

	Constructor.prototype.setOnBeforeEdit = function(onBeforeEdit) {

		this.getDatagridConfig().onBeforeEdit = onBeforeEdit;
		return this;
	};

	Constructor.prototype.getOnBeginEdit = function() {

		return this.getDatagridConfig().onBeginEdit;
	};

	Constructor.prototype.setOnBeginEdit = function(onBeginEdit) {

		this.getDatagridConfig().onBeginEdit = onBeginEdit;
		return this;
	};

	Constructor.prototype.getOnEndEdit = function() {

		return this.getDatagridConfig().onEndEdit;
	};

	Constructor.prototype.setOnEndEdit = function(onEndEdit) {

		this.getDatagridConfig().onEndEdit = onEndEdit;
		return this;
	};

	Constructor.prototype.getOnAfterEdit = function() {

		return this.getDatagridConfig().onAfterEdit;
	};

	Constructor.prototype.setOnAfterEdit = function(onAfterEdit) {

		this.getDatagridConfig().onAfterEdit = onAfterEdit;
		return this;
	};

	Constructor.prototype.getOnCancelEdit = function() {

		return this.getDatagridConfig().onCancelEdit;
	};

	Constructor.prototype.setOnCancelEdit = function(onCancelEdit) {

		this.getDatagridConfig().onCancelEdit = onCancelEdit;
		return this;
	};

	Constructor.prototype.getOnHeaderContextMenu = function() {

		return this.getDatagridConfig().onHeaderContextMenu;
	};

	Constructor.prototype.setOnHeaderContextMenu = function(onHeaderContextMenu) {

		this.getDatagridConfig().onHeaderContextMenu = onHeaderContextMenu;
		return this;
	};

	Constructor.prototype.getOnRowContextMenu = function() {

		return this.getDatagridConfig().onRowContextMenu;
	};

	Constructor.prototype.setOnRowContextMenu = function(onRowContextMenu) {

		this.getDatagridConfig().onRowContextMenu = onRowContextMenu;
		return this;
	};

	/**
	 * 模板初始化
	 */
	Constructor.prototype.init = function() {

		// 模板的jQuery对象
		var $datagrid = this.getDatagridjQuery();

		// 模板所在Div 初始化
		divInit($datagrid);

		// 生成对应的datagrid
		$datagrid.datagrid(this.getDatagridConfig());

		return packagejQuery($datagrid);
	};

	return Constructor;
})();