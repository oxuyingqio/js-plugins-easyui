/**
 * @name	Pagination
 * @package core.html.easyui.base
 * @desc	分割按钮模板
 * @type	类
 * 
 * @constructor	core.html.easyui.base.Pagination(string id/object jQuery)
 * 
 * @method	继承core.html.easyui.base.LinkButton所有方法
 * 			number/core.html.easyui.base.Pagination		total(number total)								获取/设置
 * 			number/core.html.easyui.base.Pagination		pageSize(number pageSize)						获取/设置
 * 			number/core.html.easyui.base.Pagination		pageNumber(number pageNumber)					获取/设置
 * 			array/core.html.easyui.base.Pagination		pageList(array pageList)						获取/设置
 * 			boolean/core.html.easyui.base.Pagination	loading(boolean loading)						获取/设置
 * 			array/core.html.easyui.base.Pagination		buttons(array buttons)							获取/设置
 * 			array/core.html.easyui.base.Pagination		layout(array layout)							获取/设置
 * 			number/core.html.easyui.base.Pagination		links(number links)								获取/设置
 * 			boolean/core.html.easyui.base.Pagination	showPageList(boolean showPageList)				获取/设置
 * 			boolean/core.html.easyui.base.Pagination	showRefresh(boolean showRefresh)				获取/设置
 * 			boolean/core.html.easyui.base.Pagination	showPageInfo(boolean showPageInfo)				获取/设置
 * 			string/core.html.easyui.base.Pagination		beforePageText(string beforePageText)			获取/设置
 * 			string/core.html.easyui.base.Pagination		afterPageText(string afterPageText)				获取/设置
 * 			string/core.html.easyui.base.Pagination		displayMsg(string displayMsg)					获取/设置
 * 			function/core.html.easyui.base.Pagination	onSelectPage(function onSelectPage)				获取/设置
 * 			function/core.html.easyui.base.Pagination	onBeforeRefresh(function onBeforeRefresh)		获取/设置
 * 			function/core.html.easyui.base.Pagination	onRefresh(function onRefresh)					获取/设置
 * 			function/core.html.easyui.base.Pagination	onChangePageSize(function onChangePageSize)		获取/设置
 *			core.html.easyui.base.Pagination 			init() 											初始化组件模板
 *			object										options()
 *			void										loading()
 *			void										loaded()
 *			void										refresh(object options)
 *			void										select(number page)
 * 
 * @date	2018年4月20日 15:16:58
 */
core.html.easyui.base.Pagination = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.base.Pagination.superClass.constructor.call(this, arguments[0]);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var total = $.fn.pagination.defaults.total;
		/**
		 * 
		 */
		var pageSize = $.fn.pagination.defaults.pageSize;
		/**
		 * 
		 */
		var pageNumber = $.fn.pagination.defaults.pageNumber;
		/**
		 * 
		 */
		var pageList = $.fn.pagination.defaults.pageList;
		/**
		 * 
		 */
		var loading = $.fn.pagination.defaults.loading;
		/**
		 * 
		 */
		var buttons = $.fn.pagination.defaults.buttons;
		/**
		 * 
		 */
		var layout = $.fn.pagination.defaults.layout;
		/**
		 * 
		 */
		var links = $.fn.pagination.defaults.links;
		/**
		 * 
		 */
		var showPageList = $.fn.pagination.defaults.showPageList;
		/**
		 * 
		 */
		var showRefresh = $.fn.pagination.defaults.showRefresh;
		/**
		 * 
		 */
		var showPageInfo = $.fn.pagination.defaults.showPageInfo;
		/**
		 * 
		 */
		var beforePageText = $.fn.pagination.defaults.beforePageText;
		/**
		 * 
		 */
		var afterPageText = $.fn.pagination.defaults.afterPageText;
		/**
		 * 
		 */
		var displayMsg = $.fn.pagination.defaults.displayMsg;

		/**
		 * 事件
		 */
		/**
		 * 
		 */
		var onSelectPage = $.fn.pagination.defaults.onSelectPage;
		/**
		 * 
		 */
		var onBeforeRefresh = $.fn.pagination.defaults.onBeforeRefresh;
		/**
		 * 
		 */
		var onRefresh = $.fn.pagination.defaults.onRefresh;
		/**
		 * 
		 */
		var onChangePageSize = $.fn.pagination.defaults.onChangePageSize;

		/**
		 * 获取/设置
		 * 
		 * @param total{number}
		 * @returns {number/core.html.easyui.base.Pagination}
		 */
		this.total = function() {

			switch (arguments.length) {
			case 0:
				return total;
			default:
				total = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param pageSize{number}
		 * @returns {number/core.html.easyui.base.Pagination}
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
		 * 获取/设置
		 * 
		 * @param pageNumber{number}
		 * @returns {number/core.html.easyui.base.Pagination}
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
		 * 获取/设置
		 * 
		 * @param pageList{array}
		 * @returns {array/core.html.easyui.base.Pagination}
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
		 * 获取/设置
		 * 
		 * @param loading{boolean}
		 * @returns {boolean/core.html.easyui.base.Pagination}
		 */
		this.loading = function() {

			switch (arguments.length) {
			case 0:
				return loading;
			default:
				loading = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param buttons{array}
		 * @returns {array/core.html.easyui.base.Pagination}
		 */
		this.buttons = function() {

			switch (arguments.length) {
			case 0:
				return buttons;
			default:
				buttons = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param layout{array}
		 * @returns {array/core.html.easyui.base.Pagination}
		 */
		this.layout = function() {

			switch (arguments.length) {
			case 0:
				return layout;
			default:
				layout = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param links{number}
		 * @returns {number/core.html.easyui.base.Pagination}
		 */
		this.links = function() {

			switch (arguments.length) {
			case 0:
				return links;
			default:
				links = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param showPageList{boolean}
		 * @returns {boolean/core.html.easyui.base.Pagination}
		 */
		this.showPageList = function() {

			switch (arguments.length) {
			case 0:
				return showPageList;
			default:
				showPageList = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param showRefresh{boolean}
		 * @returns {boolean/core.html.easyui.base.Pagination}
		 */
		this.showRefresh = function() {

			switch (arguments.length) {
			case 0:
				return showRefresh;
			default:
				showRefresh = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param showPageInfo{boolean}
		 * @returns {boolean/core.html.easyui.base.Pagination}
		 */
		this.showPageInfo = function() {

			switch (arguments.length) {
			case 0:
				return showPageInfo;
			default:
				showPageInfo = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param beforePageText{string}
		 * @returns {string/core.html.easyui.base.Pagination}
		 */
		this.beforePageText = function() {

			switch (arguments.length) {
			case 0:
				return beforePageText;
			default:
				beforePageText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param afterPageText{string}
		 * @returns {string/core.html.easyui.base.Pagination}
		 */
		this.afterPageText = function() {

			switch (arguments.length) {
			case 0:
				return afterPageText;
			default:
				afterPageText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param displayMsg{string}
		 * @returns {string/core.html.easyui.base.Pagination}
		 */
		this.displayMsg = function() {

			switch (arguments.length) {
			case 0:
				return displayMsg;
			default:
				displayMsg = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onSelectPage{function}
		 * @returns {function/core.html.easyui.base.Pagination}
		 */
		this.onSelectPage = function() {

			switch (arguments.length) {
			case 0:
				return onSelectPage;
			default:
				onSelectPage = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onBeforeRefresh{function}
		 * @returns {function/core.html.easyui.base.Pagination}
		 */
		this.onBeforeRefresh = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeRefresh;
			default:
				onBeforeRefresh = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onRefresh{function}
		 * @returns {function/core.html.easyui.base.Pagination}
		 */
		this.onRefresh = function() {

			switch (arguments.length) {
			case 0:
				return onRefresh;
			default:
				onRefresh = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onChangePageSize{function}
		 * @returns {function/core.html.easyui.base.Pagination}
		 */
		this.onChangePageSize = function() {

			switch (arguments.length) {
			case 0:
				return onChangePageSize;
			default:
				onChangePageSize = arguments[0];
				return this;
			}
		};
	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.button.LinkButton);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.base.Pagination}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.base.Pagination", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().pagination({
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			disabled : this.disabled(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// 属性
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

			// LinkButton继承事件
			onClick : this.onClick(),
			// 事件
			onSelectPage : this.onSelectPage(),
			onBeforeRefresh : this.onBeforeRefresh(),
			onRefresh : this.onRefresh(),
			onChangePageSize : this.onChangePageSize()
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

		return this.$jQuery().pagination("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.loading = function() {

		return this.$jQuery().pagination("loading");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.loaded = function() {

		return this.$jQuery().pagination("loaded");
	};

	/**
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.refresh = function(options) {

		return this.$jQuery().pagination("refresh", options);
	};

	/**
	 * 
	 * @param page{number}
	 * @returns
	 */
	Constructor.prototype.select = function(page) {

		return this.$jQuery().pagination("select", page);
	};

	// 返回构造函数
	return Constructor;
})();