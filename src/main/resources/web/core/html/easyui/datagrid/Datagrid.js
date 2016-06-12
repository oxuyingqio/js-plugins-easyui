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

		/**
		 * panel属性
		 */
		// 宽度
		width : null,
		// 高度
		height : null,
		/**
		 * datagrid属性
		 */
		// 列
		columns : null,
		// 冻结列
		frozenColumns : null,
		// 列宽自适应
		fitColumns : true,
		resizeHandle : "right",
		// 行高自适应
		autoRowHeight : true,
		// 工具条
		toolbar : null,
		// 隔行变色
		striped : true,
		method : "post",
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
		ctrlSelect : false,
		checkOnSelect : true,
		selectOnCheck : true,
		pagePosition : "bottom",
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
		remoteSort : true,
		showHeader : true,
		showFooter : false,
		scrollbarSize : 18,
		// 行样式
		rowStyler : function(index, row) {
		},
		// what's this?
		loader : function() {
		},
		loadFilter : function(data) {
			return data;
		},
		editors : null,
		// what's this?
		view : null,

		/**
		 * datagrid事件
		 */
		// 数据加载成功
		onLoadSuccess : function(data) {
		},
		// 数据加载失败
		onLoadError : function() {
		},
		// 数据加载前
		onBeforeLoad : function(param) {
		},
		// 行单击事件
		onClickRow : function(index, row) {
		},
		// 行双击事件
		onDblClickRow : function(index, row) {
		},
		// 单元格单击事件
		onClickCell : function(index, field, value) {
		},
		// 单元格双击事件
		onDblClickCell : function(index, field, value) {
		},
		// 排序前
		onBeforeSortColumn : function(sort, order) {
		},
		// 排序
		onSortColumn : function(sort, order) {
		},
		// 改变列宽
		onResizeColumn : function(field, width) {
		},
		// 选中前
		onBeforeSelect : function(index, row) {
		},
		// 选中
		onSelect : function(index, row) {
		},
		// 取消选中前
		onBeforeUnselect : function(index, row) {
		},
		// 取消选中
		onUnselect : function(index, row) {
		},
		// 选中所有时
		onSelectAll : function(rows) {
		},
		// 取消选中所有时
		onUnselectAll : function(rows) {
		},
		// 勾选前
		onBeforeCheck : function(index, row) {
		},
		// 勾选
		onCheck : function(index, row) {
		},
		// 取消勾选前
		onBeforeUncheck : function(index, row) {
		},
		// 取消勾选
		onUncheck : function(index, row) {
		},
		// 勾选所有
		onCheckAll : function(rows) {
		},
		// 取消勾选所有
		onUncheckAll : function(rows) {
		},
		// 编辑前
		onBeforeEdit : function(index, row) {
		},
		// 编辑
		onBeginEdit : function(index, row) {
		},
		// 结束编辑
		onEndEdit : function(index, row, changes) {
		},
		// 编辑后
		onAfterEdit : function(index, row, changes) {
		},
		// 取消编辑
		onCancelEdit : function(index, row) {
		},
		// 标题头右键点击
		onHeaderContextMenu : function(e, field) {
		},
		// 行右键点击事件
		onRowContextMenu : function(e, index, row) {
		}
	};

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

	for (i in DEFAULT_CONFIG) {

		if (typeof (Constructor.prototype["get" + i]) !== "function") {
			Constructor.prototype["get" + i] = function() {
				return this.getDatagridConfig()[i];
			}
		}
	}

//	Constructor.prototype.getWidth = function() {
//
//		return this.getDatagridConfig().width;
//	};
//
//	Constructor.prototype.setWidth = function(width) {
//
//		this.getDatagridConfig().width = width;
//	};
//
//	Constructor.prototype.getHeight = function() {
//
//		return this.getDatagridConfig().height;
//	};
//
//	Constructor.prototype.setHeight = function(height) {
//
//		this.getDatagridConfig().height = height;
//	};
//
//	Constructor.prototype.getColumns = function() {
//
//		return this.getDatagridConfig().columns;
//	};
//
//	Constructor.prototype.setColumns = function(columns) {
//
//		this.getDatagridConfig().columns = columns;
//	};
//
//	Constructor.prototype.getFrozenColumns = function() {
//
//		return this.getDatagridConfig().frozenColumns;
//	};
//
//	Constructor.prototype.setFrozenColumns = function(frozenColumns) {
//
//		this.getDatagridConfig().frozenColumns = frozenColumns;
//	};
//
//	Constructor.prototype.getFitColumns = function() {
//
//		return this.getDatagridConfig().fitColumns;
//	};
//
//	Constructor.prototype.setFitColumns = function(fitColumns) {
//
//		this.getDatagridConfig().fitColumns = fitColumns;
//	};
//
//	Constructor.prototype.getResizeHandle = function() {
//
//		return this.getDatagridConfig().resizeHandle;
//	};
//
//	Constructor.prototype.setResizeHandle = function(resizeHandle) {
//
//		this.getDatagridConfig().resizeHandle = resizeHandle;
//	};
//
//	Constructor.prototype.getAutoRowHeight = function() {
//
//		return this.getDatagridConfig().autoRowHeight;
//	};
//
//	Constructor.prototype.setAutoRowHeight = function(autoRowHeight) {
//
//		this.getDatagridConfig().autoRowHeight = autoRowHeight;
//	};
//
//	Constructor.prototype.getToolbar = function() {
//
//		return this.getDatagridConfig().toolbar;
//	};
//
//	Constructor.prototype.setToolbar = function(toolbar) {
//
//		this.getDatagridConfig().toolbar = toolbar;
//	};
//
//	Constructor.prototype.getStriped = function() {
//
//		return this.getDatagridConfig().striped;
//	};
//
//	Constructor.prototype.setStriped = function(striped) {
//
//		this.getDatagridConfig().striped = striped;
//	};
//
//	Constructor.prototype.getMethod = function() {
//
//		return this.getDatagridConfig().method;
//	};
//
//	Constructor.prototype.setMethod = function(method) {
//
//		this.getDatagridConfig().method = method;
//	};
//
//	Constructor.prototype.getNowrap = function() {
//
//		return this.getDatagridConfig().nowrap;
//	};
//
//	Constructor.prototype.setNowrap = function(nowrap) {
//
//		this.getDatagridConfig().nowrap = nowrap;
//	};

	// // id字段
	// idField : null,
	// // 数据URL
	// url : null,
	// // 数据
	// data : null,
	// // 数据加载等待提示
	// loadMsg : "Processing, please wait …",
	// // 添加页脚工具栏
	// pagination : true,
	// // 显示行号
	// rownumbers : true,
	// // 仅能选中单行
	// singleSelect : true,
	// ctrlSelect : false,
	// checkOnSelect : true,
	// selectOnCheck : true,
	// pagePosition : "bottom",
	// pageNumber : 1,
	// // 分页数
	// pageSize : cookie.get("coreHtmlEasyuiDatagrid") == null ? 20 :
	// cookie.getCookie().get("coreHtmlEasyuiDatagrid"),
	// // 分页数可选列表
	// pageList : [ 10, 20, 30, 40, 50 ],
	// // 传入后台的参数
	// queryParams : {},
	// // 排序字段
	// sortName : null,
	// // 排序方式
	// sortOrder : "asc",
	// multiSort : false,
	// remoteSort : true,
	// showHeader : true,
	// showFooter : false,
	// scrollbarSize : 18,
	// // 行样式
	// rowStyler : function(index, row) {
	// },
	// // what's this?
	// loader : function() {
	// },
	// loadFilter : function(data) {
	// return data;
	// },
	// editors : null,
	// // what's this?
	// view : null,
	//
	// /**
	// * datagrid事件
	// */
	// // 数据加载成功
	// onLoadSuccess : function(data) {
	// },
	// // 数据加载失败
	// onLoadError : function() {
	// },
	// // 数据加载前
	// onBeforeLoad : function(param) {
	// },
	// // 行单击事件
	// onClickRow : function(index, row) {
	// },
	// // 行双击事件
	// onDblClickRow : function(index, row) {
	// },
	// // 单元格单击事件
	// onClickCell : function(index, field, value) {
	// },
	// // 单元格双击事件
	// onDblClickCell : function(index, field, value) {
	// },
	// // 排序前
	// onBeforeSortColumn : function(sort, order) {
	// },
	// // 排序
	// onSortColumn : function(sort, order) {
	// },
	// // 改变列宽
	// onResizeColumn : function(field, width) {
	// },
	// // 选中前
	// onBeforeSelect : function(index, row) {
	// },
	// // 选中
	// onSelect : function(index, row) {
	// },
	// // 取消选中前
	// onBeforeUnselect : function(index, row) {
	// },
	// // 取消选中
	// onUnselect : function(index, row) {
	// },
	// // 选中所有时
	// onSelectAll : function(rows) {
	// },
	// // 取消选中所有时
	// onUnselectAll : function(rows) {
	// },
	// // 勾选前
	// onBeforeCheck : function(index, row) {
	// },
	// // 勾选
	// onCheck : function(index, row) {
	// },
	// // 取消勾选前
	// onBeforeUncheck : function(index, row) {
	// },
	// // 取消勾选
	// onUncheck : function(index, row) {
	// },
	// // 勾选所有
	// onCheckAll : function(rows) {
	// },
	// // 取消勾选所有
	// onUncheckAll : function(rows) {
	// },
	// // 编辑前
	// onBeforeEdit : function(index, row) {
	// },
	// // 编辑
	// onBeginEdit : function(index, row) {
	// },
	// // 结束编辑
	// onEndEdit : function(index, row, changes) {
	// },
	// // 编辑后
	// onAfterEdit : function(index, row, changes) {
	// },
	// // 取消编辑
	// onCancelEdit : function(index, row) {
	// },
	// // 标题头右键点击
	// onHeaderContextMenu : function(e, field) {
	// },
	// // 行右键点击事件
	// onRowContextMenu : function(e, index, row) {
	// }

	/**
	 * 模板初始化
	 */
	Constructor.prototype.init = function() {

		// 模板所在Div 初始化
		divInit(this.getDatagridjQuery());

		// 生成对应的datagrid
		$datagrid.datagrid(this.getDatagridConfig());
	};

	return Constructor;
})();