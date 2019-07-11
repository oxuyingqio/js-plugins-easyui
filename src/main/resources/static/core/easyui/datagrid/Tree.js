/**
 * @name	Tree
 * @package core.html.easyui.datagrid
 * @desc	树模板
 * @type	类
 * 
 * @constructor	core.html.easyui.datagrid.Tree(string id/object jQuery)
 * 
 * @extend	core.html.easyui.base.Draggable
 * 			core.html.easyui.base.Droppable
 * 
 * @method	继承core.html.easyui.base.Draggable所有方法
 * 			继承core.html.easyui.base.Droppable所有方法
 * 			string/core.html.easyui.datagrid.Tree	url(string url)									获取/设置
 * 			string/core.html.easyui.datagrid.Tree	method(string method)							获取/设置
 * 			boolean/core.html.easyui.datagrid.Tree	animate(boolean animate)						获取/设置
 * 			boolean/core.html.easyui.datagrid.Tree	checkbox(boolean checkbox)						获取/设置
 * 			boolean/core.html.easyui.datagrid.Tree	cascadeCheck(boolean cascadeCheck)				获取/设置
 * 			boolean/core.html.easyui.datagrid.Tree	onlyLeafCheck(boolean onlyLeafCheck)			获取/设置
 * 			boolean/core.html.easyui.datagrid.Tree	lines(boolean lines)							获取/设置
 * 			boolean/core.html.easyui.datagrid.Tree	dnd(boolean dnd)								获取/设置
 * 			array/core.html.easyui.datagrid.Tree	data(array data)								获取/设置
 * 			object/core.html.easyui.datagrid.Tree	queryParams(object queryParams)					获取/设置
 * 			function/core.html.easyui.datagrid.Tree	formatter(function formatter)					获取/设置
 * 			function/core.html.easyui.datagrid.Tree	filter(function filter)							获取/设置
 * 			function/core.html.easyui.datagrid.Tree	loader(function loader)							获取/设置
 * 			function/core.html.easyui.datagrid.Tree	loadFilter(function loadFilter)					获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onClick(function onClick)						获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onDblClick(function onDblClick)					获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onBeforeLoad(function onBeforeLoad)				获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onLoadSuccess(function onLoadSuccess)			获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onLoadError(function onLoadError)				获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onBeforeExpand(function onBeforeExpand)			获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onExpand(function onExpand)						获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onBeforeCollapse(function onBeforeCollapse)		获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onCollapse(function onCollapse)					获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onBeforeCheck(function onBeforeCheck)			获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onCheck(function onCheck)						获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onBeforeSelect(function onBeforeSelect)			获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onSelect(function onSelect)						获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onContextMenu(function onContextMenu)			获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onBeforeDrop(function onBeforeDrop)				获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onBeforeEdit(function onBeforeEdit)				获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onAfterEdit(function onAfterEdit)				获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onCancelEdit(function onCancelEdit)				获取/设置
 * 			core.html.easyui.datagrid.Tree			init()											初始化组件模板
 * 			object									options()
 * 			void									loadData(object data)							
 * 			object									getNode(object target)							
 * 			object									getData(object target)							
 * 			void									reload(object target)							
 * 			object									getRoot()										
 * 			object									getRoots()										
 * 			object									getParent(object target)						
 * 			object									getChildren(object target)						
 * 			object									getChecked(object state)						
 * 			object									getSelected()									
 * 			boolean									isLeaf(object target)							
 * 			object									find(string id)									
 * 			void									select(object target)							
 * 			void									check(object target)							
 * 			void									uncheck(object target)							
 * 			void									collapse(object target)							
 * 			void									expand(object target)							
 * 			void									collapseAll(object target)						
 * 			void									expandAll(object target)						
 * 			void									expandTo(object target)							
 * 			void									scrollTo(object target)							
 * 			void									append(object param)							
 * 			void									toggle(object target)							
 * 			void									insert(object param)							
 * 			void									remove(object target)							
 * 			void									pop(object target)								
 * 			void									update(object param)							
 * 			void									enableDnd()										
 * 			void									disableDnd()									
 * 			void									beginEdit(object target)						
 * 			void									endEdit(object target)							
 * 			void									cancelEdit(object target)						
 * 			void									doFilter(string text)							
 * 
 * @date	2018年5月2日 14:21:54
 */
core.html.easyui.datagrid.Tree = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.base.Draggable.call(this, arguments[0]);
		core.html.easyui.base.Droppable.call(this, arguments[0]);
		// 默认参数修改
		this.onBeforeDrag($.fn.tree.defaults.onBeforeDrag);
		this.onStartDrag($.fn.tree.defaults.onStartDrag);
		this.onStopDrag($.fn.tree.defaults.onStopDrag);
		this.onDragEnter($.fn.tree.defaults.onDragEnter);
		this.onDragOver($.fn.tree.defaults.onDragOver);
		this.onDragLeave($.fn.tree.defaults.onDragLeave);
		this.onDrop($.fn.tree.defaults.onDrop);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var url = $.fn.tree.defaults.url;
		/**
		 * 
		 */
		var method = $.fn.tree.defaults.method;
		/**
		 * 
		 */
		var animate = $.fn.tree.defaults.animate;
		/**
		 * 
		 */
		var checkbox = $.fn.tree.defaults.checkbox;
		/**
		 * 
		 */
		var cascadeCheck = $.fn.tree.defaults.cascadeCheck;
		/**
		 * 
		 */
		var onlyLeafCheck = $.fn.tree.defaults.onlyLeafCheck;
		/**
		 * 
		 */
		var lines = $.fn.tree.defaults.lines;
		/**
		 * 
		 */
		var dnd = $.fn.tree.defaults.dnd;
		/**
		 * 
		 */
		var data = $.fn.tree.defaults.data;
		/**
		 * 
		 */
		var queryParams = $.fn.tree.defaults.queryParams;
		/**
		 * 
		 */
		var formatter = $.fn.tree.defaults.formatter;
		/**
		 * 
		 */
		var filter = $.fn.tree.defaults.filter;
		/**
		 * 
		 */
		var loader = $.fn.tree.defaults.loader;
		/**
		 * 
		 */
		var loadFilter = $.fn.tree.defaults.loadFilter;

		/**
		 * 事件
		 */
		/**
		 * 
		 */
		var onClick = $.fn.tree.defaults.onClick;
		/**
		 * 
		 */
		var onDblClick = $.fn.tree.defaults.onDblClick;
		/**
		 * 
		 */
		var onBeforeLoad = $.fn.tree.defaults.onBeforeLoad;
		/**
		 * 
		 */
		var onLoadSuccess = $.fn.tree.defaults.onLoadSuccess;
		/**
		 * 
		 */
		var onLoadError = $.fn.tree.defaults.onLoadError;
		/**
		 * 
		 */
		var onBeforeExpand = $.fn.tree.defaults.onBeforeExpand;
		/**
		 * 
		 */
		var onExpand = $.fn.tree.defaults.onExpand;
		/**
		 * 
		 */
		var onBeforeCollapse = $.fn.tree.defaults.onBeforeCollapse;
		/**
		 * 
		 */
		var onCollapse = $.fn.tree.defaults.onCollapse;
		/**
		 * 
		 */
		var onBeforeCheck = $.fn.tree.defaults.onBeforeCheck;
		/**
		 * 
		 */
		var onCheck = $.fn.tree.defaults.onCheck;
		/**
		 * 
		 */
		var onBeforeSelect = $.fn.tree.defaults.onBeforeSelect;
		/**
		 * 
		 */
		var onSelect = $.fn.tree.defaults.onSelect;
		/**
		 * 
		 */
		var onContextMenu = $.fn.tree.defaults.onContextMenu;
		/**
		 * 
		 */
		var onBeforeDrop = $.fn.tree.defaults.onBeforeDrop;
		/**
		 * 
		 */
		var onBeforeEdit = $.fn.tree.defaults.onBeforeEdit;
		/**
		 * 
		 */
		var onAfterEdit = $.fn.tree.defaults.onAfterEdit;
		/**
		 * 
		 */
		var onCancelEdit = $.fn.tree.defaults.onCancelEdit;

		/**
		 * 获取/设置
		 * 
		 * @param url{string}
		 * @returns {string/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param method{string}
		 * @returns {string/core.html.easyui.datagrid.Tree}
		 */
		this.method = function() {

			switch (arguments.length) {
			case 0:
				return method;
			default:
				method = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param animate{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.Tree}
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
		 * @param checkbox{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.Tree}
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
		 * @returns {boolean/core.html.easyui.datagrid.Tree}
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
		 * @returns {boolean/core.html.easyui.datagrid.Tree}
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
		 * @returns {boolean/core.html.easyui.datagrid.Tree}
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
		 * @param dnd{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.Tree}
		 */
		this.dnd = function() {

			switch (arguments.length) {
			case 0:
				return dnd;
			default:
				dnd = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param data{array}
		 * @returns {array/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param queryParams{object}
		 * @returns {object/core.html.easyui.datagrid.Tree}
		 */
		this.queryParams = function() {

			switch (arguments.length) {
			case 0:
				return queryParams;
			default:
				queryParams = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param formatter{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.formatter = function() {

			switch (arguments.length) {
			case 0:
				return formatter;
			default:
				formatter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param filter{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.filter = function() {

			switch (arguments.length) {
			case 0:
				return filter;
			default:
				filter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param loader{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.loader = function() {

			switch (arguments.length) {
			case 0:
				return loader;
			default:
				loader = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param loadFilter{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param onClick{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.onClick = function() {

			switch (arguments.length) {
			case 0:
				return onClick;
			default:
				onClick = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onDblClick{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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
		 * @param onBeforeLoad{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.onBeforeLoad = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeLoad;
			default:
				onBeforeLoad = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onLoadSuccess{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param onLoadError{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.onLoadError = function() {

			switch (arguments.length) {
			case 0:
				return onLoadError;
			default:
				onLoadError = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onBeforeExpand{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.onBeforeExpand = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeExpand;
			default:
				onBeforeExpand = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onExpand{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.onExpand = function() {

			switch (arguments.length) {
			case 0:
				return onExpand;
			default:
				onExpand = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onBeforeCollapse{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.onBeforeCollapse = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeCollapse;
			default:
				onBeforeCollapse = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onCollapse{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.onCollapse = function() {

			switch (arguments.length) {
			case 0:
				return onCollapse;
			default:
				onCollapse = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onBeforeCheck{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param onCheck{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param onBeforeSelect{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param onSelect{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param onContextMenu{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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

		/**
		 * 获取/设置
		 * 
		 * @param onBeforeDrop{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.onBeforeDrop = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeDrop;
			default:
				onBeforeDrop = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onBeforeEdit{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param onAfterEdit{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param onCancelEdit{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.datagrid.Tree}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.datagrid.Tree", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().tree({
			// Draggable继承属性
			proxy : this.proxy(),
			revert : this.revert(),
			cursor : this.cursor(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			handle : this.handle(),
			disabled : this.disabled(),
			edge : this.edge(),
			axis : this.axis(),
			delay : this.delay(),
			// Droppable继承属性
			accept : this.accept(),
			// 属性
			url : this.url(),
			method : this.method(),
			animate : this.animate(),
			checkbox : this.checkbox(),
			cascadeCheck : this.cascadeCheck(),
			onlyLeafCheck : this.onlyLeafCheck(),
			lines : this.lines(),
			dnd : this.dnd(),
			data : this.data(),
			queryParams : this.queryParams(),
			formatter : this.formatter(),
			filter : this.filter(),
			loader : this.loader(),
			loadFilter : this.loadFilter(),

			// Draggable继承事件
			onBeforeDrag : this.onBeforeDrag(),
			onStartDrag : this.onStartDrag(),
			onDrag : this.onDrag(),
			onEndDrag : this.onEndDrag(),
			onStopDrag : this.onStopDrag(),
			// Droppable继承事件
			onDragEnter : this.onDragEnter(),
			onDragOver : this.onDragOver(),
			onDragLeave : this.onDragLeave(),
			onDrop : this.onDrop(),
			// 事件
			onClick : this.onClick(),
			onDblClick : this.onDblClick(),
			onBeforeLoad : this.onBeforeLoad(),
			onLoadSuccess : this.onLoadSuccess(),
			onLoadError : this.onLoadError(),
			onBeforeExpand : this.onBeforeExpand(),
			onExpand : this.onExpand(),
			onBeforeCollapse : this.onBeforeCollapse(),
			onCollapse : this.onCollapse(),
			onBeforeCheck : this.onBeforeCheck(),
			onCheck : this.onCheck(),
			onBeforeSelect : this.onBeforeSelect(),
			onSelect : this.onSelect(),
			onContextMenu : this.onContextMenu(),
			onBeforeDrop : this.onBeforeDrop(),
			onBeforeEdit : this.onBeforeEdit(),
			onAfterEdit : this.onAfterEdit(),
			onCancelEdit : this.onCancelEdit()
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

		return this.$jQuery().tree("options");
	};

	/**
	 * 
	 * @param data{object}
	 * @returns
	 */
	Constructor.prototype.loadData = function(data) {

		return this.$jQuery().tree("loadData", data);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns {object}
	 */
	Constructor.prototype.getNode = function(target) {

		return this.$jQuery().tree("getNode", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns {object}
	 */
	Constructor.prototype.getData = function(target) {

		return this.$jQuery().tree("getData", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.reload = function(target) {

		return this.$jQuery().tree("reload", target);
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getRoot = function() {

		return this.$jQuery().tree("getRoot");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getRoots = function() {

		return this.$jQuery().tree("getRoots");
	};

	/**
	 * 
	 * @param target{object}
	 * @returns {object}
	 */
	Constructor.prototype.getParent = function(target) {

		return this.$jQuery().tree("getParent", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns {object}
	 */
	Constructor.prototype.getChildren = function(target) {

		return this.$jQuery().tree("getChildren", target);
	};

	/**
	 * 
	 * @param state{object}
	 * @returns {object}
	 */
	Constructor.prototype.getChecked = function(state) {

		return this.$jQuery().tree("getChecked", state);
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getSelected = function() {

		return this.$jQuery().tree("getSelected");
	};

	/**
	 * 
	 * @param target{object}
	 * @returns {boolean}
	 */
	Constructor.prototype.isLeaf = function(target) {

		return this.$jQuery().tree("isLeaf", target);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns {object}
	 */
	Constructor.prototype.find = function(id) {

		return this.$jQuery().tree("find", id);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.select = function(target) {

		return this.$jQuery().tree("select", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.check = function(target) {

		return this.$jQuery().tree("check", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.uncheck = function(target) {

		return this.$jQuery().tree("uncheck", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.collapse = function(target) {

		return this.$jQuery().tree("collapse", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.expand = function(target) {

		return this.$jQuery().tree("expand", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.collapseAll = function(target) {

		return this.$jQuery().tree("collapseAll", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.expandAll = function(target) {

		return this.$jQuery().tree("expandAll", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.expandTo = function(target) {

		return this.$jQuery().tree("expandTo", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.scrollTo = function(target) {

		return this.$jQuery().tree("scrollTo", target);
	};

	/**
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.append = function(param) {

		return this.$jQuery().tree("append", param);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.toggle = function(target) {

		return this.$jQuery().tree("toggle", target);
	};

	/**
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.insert = function(param) {

		return this.$jQuery().tree("insert", param);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.remove = function(target) {

		return this.$jQuery().tree("remove", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.pop = function(target) {

		return this.$jQuery().tree("pop", target);
	};

	/**
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.update = function(param) {

		return this.$jQuery().tree("update", param);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enableDnd = function() {

		return this.$jQuery().tree("enableDnd");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disableDnd = function() {

		return this.$jQuery().tree("disableDnd");
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.beginEdit = function(target) {

		return this.$jQuery().tree("beginEdit", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.endEdit = function(target) {

		return this.$jQuery().tree("endEdit", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.cancelEdit = function(target) {

		return this.$jQuery().tree("cancelEdit", target);
	};

	/**
	 * 
	 * @param text{string}
	 * @returns
	 */
	Constructor.prototype.doFilter = function(text) {

		return this.$jQuery().tree("doFilter", text);
	};

	// 返回构造函数
	return Constructor;
})();