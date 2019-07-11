/**
 * @name	Tabs
 * @package core.html.easyui.layout
 * @desc	Tab页模板
 * @type	类
 * 
 * @constructor	core.html.easyui.layout.Tabs(string id/object jQuery)
 * 
 * @extend	core.html.easyui.layout.Panel
 * 			core.html.easyui.button.LinkButton
 * 
 * @method	继承core.html.easyui.layout.Panel所有方法
 * 			继承core.html.easyui.button.LinkButton所有方法
 * 			number/core.html.easyui.layout.Tabs		scrollIncrement(number scrollIncrement)	
 * 			number/core.html.easyui.layout.Tabs		scrollDuration(number scrollDuration)	获取/设置滚动时间
 * 			string/core.html.easyui.layout.Tabs		toolPosition(string toolPosition)		获取/设置工具条位置
 * 			string/core.html.easyui.layout.Tabs		tabPosition(string tabPosition)			获取/设置Tab页位置
 * 			number/core.html.easyui.layout.Tabs		headerWidth(number headerWidth)			获取/设置头宽度
 * 			number/core.html.easyui.layout.Tabs		tabWidth(number tabWidth)				获取/设置Tab页宽度
 * 			number/core.html.easyui.layout.Tabs		tabHeight(number tabHeight)				获取/设置Tab页高度
 * 			boolean/core.html.easyui.layout.Tabs	showHeaderAttr(boolean showHeaderAttr)	获取/设置显示标头
 * 			boolean/core.html.easyui.layout.Tabs	justified(boolean justified)			获取/设置Tab页宽度自适应
 * 			boolean/core.html.easyui.layout.Tabs	narrow(boolean narrow)					获取/设置Tab页之间的空间
 * 			boolean/core.html.easyui.layout.Tabs	pill(boolean pill)						获取/设置Tab页样式
 * 			function/core.html.easyui.layout.Tabs	onSelect(function onSelect)				获取/设置选择事件
 * 			function/core.html.easyui.layout.Tabs	onUnselect(function onUnselect)			获取/设置取消选择事件
 * 			function/core.html.easyui.layout.Tabs	onAdd(function onAdd)					获取/设置添加事件
 * 			function/core.html.easyui.layout.Tabs	onUpdate(function onUpdate)				获取/设置更新事件
 * 			function/core.html.easyui.layout.Tabs	onContextMenu(function onContextMenu)	获取/设置右键事件
 * 			function/core.html.easyui.layout.Tabs	onDblClick(function onDblClick)			获取/设置双击事件
 * 			core.html.easyui.layout.Tabs			init()									初始化
 * 			object									options()					
 * 			object									tabs()						
 * 			void									resize()								改变窗口大小
 * 			void									add(object options)						添加Tab页
 * 			void									close(object which)						关闭指定Tab
 * 			object									getTab(object which)					获取指定Tab
 * 			number									getTabIndex(object tab)					获取指定Tab页索引
 * 			object									getSelected()							获取选中Tab页
 * 			void									select(object which)					选中指定Tab
 * 			void									unselect(object which)					取消选中指定Tab
 * 			void									showHeader()							显示头
 * 			void									hideHeader()							隐藏头
 * 			void									showTool()								显示工具
 * 			void									hideTool()								隐藏工具
 * 			boolean									exists(object which)					判断指定Tab是否存在
 * 			void									update(object param)					更新
 * 			void									enableTab(object which)					启用Tab
 * 			void									disableTab(object which)				禁用Tab
 * 			void									scrollBy(number deltaX)					滚动至
 * 
 * @date	2018年4月24日 11:53:56
 */
core.html.easyui.layout.Tabs = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.layout.Panel.call(this, arguments[0]);
		core.html.easyui.button.LinkButton.call(this, arguments[0]);
		// 默认参数修改
		this.width($.fn.tabs.defaults.width);
		this.height($.fn.tabs.defaults.height);
		this.plain($.fn.tabs.defaults.plain);
		this.fit($.fn.tabs.defaults.fit);
		this.border($.fn.tabs.defaults.border);
		this.tools($.fn.tabs.defaults.tools);
		this.selected($.fn.tabs.defaults.selected);
		this.onLoad($.fn.tabs.defaults.onLoad);
		this.onBeforeClose($.fn.tabs.defaults.onBeforeClose);
		this.onClose($.fn.tabs.defaults.onClose);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var scrollIncrement = $.fn.tabs.defaults.scrollIncrement;
		/**
		 * 滚动持续时间
		 */
		var scrollDuration = $.fn.tabs.defaults.scrollDuration;
		/**
		 * 工具条位置
		 */
		var toolPosition = $.fn.tabs.defaults.toolPosition;
		/**
		 * Tab页位置
		 */
		var tabPosition = $.fn.tabs.defaults.tabPosition;
		/**
		 * 头宽度
		 */
		var headerWidth = $.fn.tabs.defaults.headerWidth;
		/**
		 * Tab页宽度
		 */
		var tabWidth = $.fn.tabs.defaults.tabWidth;
		/**
		 * Tab页高度
		 */
		var tabHeight = $.fn.tabs.defaults.tabHeight;
		/**
		 * 显示头
		 */
		var showHeaderAttr = $.fn.tabs.defaults.showHeader;
		/**
		 * Tab页宽度自适应
		 */
		var justified = $.fn.tabs.defaults.justified;
		/**
		 * 去除Tab页之间的空间
		 */
		var narrow = $.fn.tabs.defaults.narrow;
		/**
		 * Tab页按钮样式
		 */
		var pill = $.fn.tabs.defaults.pill;

		/**
		 * 事件
		 */
		/**
		 * 选择事件
		 */
		var onSelect = $.fn.tabs.defaults.onSelect;
		/**
		 * 取消选择事件
		 */
		var onUnselect = $.fn.tabs.defaults.onUnselect;
		/**
		 * 添加事件
		 */
		var onAdd = $.fn.tabs.defaults.onAdd;
		/**
		 * 更新事件
		 */
		var onUpdate = $.fn.tabs.defaults.onUpdate;
		/**
		 * 右键事件
		 */
		var onContextMenu = $.fn.tabs.defaults.onContextMenu;
		/**
		 * 双击事件
		 */
		var onDblClick = function(index, title) {

		};

		/**
		 * 获取/设置
		 * 
		 * @param scrollIncrement{number}
		 * @returns {number/core.html.easyui.layout.Tabs}
		 */
		this.scrollIncrement = function() {

			switch (arguments.length) {
			case 0:
				return scrollIncrement;
			default:
				scrollIncrement = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置滚动时间
		 * 
		 * @param scrollDuration{number}
		 * @returns {number/core.html.easyui.layout.Tabs}
		 */
		this.scrollDuration = function() {

			switch (arguments.length) {
			case 0:
				return scrollDuration;
			default:
				scrollDuration = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置工具条位置
		 * 
		 * @param toolPosition{string}
		 * @returns {string/core.html.easyui.layout.Tabs}
		 */
		this.toolPosition = function() {

			switch (arguments.length) {
			case 0:
				return toolPosition;
			default:
				toolPosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置Tab页位置
		 * 
		 * @param tabPosition{string}
		 * @returns {string/core.html.easyui.layout.Tabs}
		 */
		this.tabPosition = function() {

			switch (arguments.length) {
			case 0:
				return tabPosition;
			default:
				tabPosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置头宽度
		 * 
		 * @param headerWidth{number}
		 * @returns {number/core.html.easyui.layout.Tabs}
		 */
		this.headerWidth = function() {

			switch (arguments.length) {
			case 0:
				return headerWidth;
			default:
				headerWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置Tab页宽度
		 * 
		 * @param tabWidth{number}
		 * @returns {number/core.html.easyui.layout.Tabs}
		 */
		this.tabWidth = function() {

			switch (arguments.length) {
			case 0:
				return tabWidth;
			default:
				tabWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置Tab页高度
		 * 
		 * @param tabHeight{number}
		 * @returns {number/core.html.easyui.layout.Tabs}
		 */
		this.tabHeight = function() {

			switch (arguments.length) {
			case 0:
				return tabHeight;
			default:
				tabHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示标头
		 * 
		 * @param showHeader{boolean}
		 * @returns {boolean/core.html.easyui.layout.Tabs}
		 */
		this.showHeaderAttr = function() {

			switch (arguments.length) {
			case 0:
				return showHeaderAttr;
			default:
				showHeaderAttr = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置Tab页宽度自适应
		 * 
		 * @param justified{boolean}
		 * @returns {boolean/core.html.easyui.layout.Tabs}
		 */
		this.justified = function() {

			switch (arguments.length) {
			case 0:
				return justified;
			default:
				justified = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置Tab页之间的空间
		 * 
		 * @param narrow{boolean}
		 * @returns {boolean/core.html.easyui.layout.Tabs}
		 */
		this.narrow = function() {

			switch (arguments.length) {
			case 0:
				return narrow;
			default:
				narrow = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置Tab页样式
		 * 
		 * @param pill{boolean}
		 * @returns {boolean/core.html.easyui.layout.Tabs}
		 */
		this.pill = function() {

			switch (arguments.length) {
			case 0:
				return pill;
			default:
				pill = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置选择事件
		 * 
		 * @param onSelect{function}
		 * @returns {function/core.html.easyui.layout.Tabs}
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
		 * 获取/设置取消选择事件
		 * 
		 * @param onUnselect{function}
		 * @returns {function/core.html.easyui.layout.Tabs}
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
		 * 获取/设置添加事件
		 * 
		 * @param onAdd{function}
		 * @returns {function/core.html.easyui.layout.Tabs}
		 */
		this.onAdd = function() {

			switch (arguments.length) {
			case 0:
				return onAdd;
			default:
				onAdd = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置更新事件
		 * 
		 * @param onUpdate{function}
		 * @returns {function/core.html.easyui.layout.Tabs}
		 */
		this.onUpdate = function() {

			switch (arguments.length) {
			case 0:
				return onUpdate;
			default:
				onUpdate = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置右键事件
		 * 
		 * @param onContextMenu{function}
		 * @returns {function/core.html.easyui.layout.Tabs}
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
		 * 获取/设置双击事件
		 * 
		 * @param onDblClick{function}
		 * @returns {function/core.html.easyui.layout.Tabs}
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

	/**
	 * 初始化
	 * 
	 * @returns {core.html.easyui.layout.Tabs}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.layout.Tabs", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().tabs({
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
			// LinkButton继承属性
			disabled : this.disabled(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// 属性
			scrollIncrement : this.scrollIncrement(),
			scrollDuration : this.scrollDuration(),
			toolPosition : this.toolPosition(),
			tabPosition : this.tabPosition(),
			headerWidth : this.headerWidth(),
			tabWidth : this.tabWidth(),
			tabHeight : this.tabHeight(),
			showHeaderAttr : this.showHeaderAttr(),
			justified : this.justified(),
			narrow : this.narrow(),
			pill : this.pill(),

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
			// LinkButton继承事件
			onClick : this.onClick(),
			// 事件
			onSelect : this.onSelect(),
			onUnselect : this.onUnselect(),
			onAdd : this.onAdd(),
			onUpdate : this.onUpdate(),
			onContextMenu : this.onContextMenu()
		});
		// 扩展事件
		this.$jQuery().tabs("onDblClick", this.onDblClick());

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

		return this.$jQuery().tabs("options");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.tabs = function() {

		return this.$jQuery().tabs("tabs");
	};

	/**
	 * 改变窗口大小
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function() {

		return this.$jQuery().tabs("resize");
	};

	/**
	 * 添加Tab页
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.add = function(options) {

		return this.$jQuery().tabs("add", options);
	};

	/**
	 * 关闭指定Tab
	 * 
	 * @param which{object}
	 * @returns
	 */
	Constructor.prototype.close = function(which) {

		return this.$jQuery().tabs("close", which);
	};

	/**
	 * 获取指定Tab
	 * 
	 * @param which{object}
	 * @returns {object}
	 */
	Constructor.prototype.getTab = function(which) {

		return this.$jQuery().tabs("getTab", which);
	};

	/**
	 * 获取指定Tab页索引
	 * 
	 * @param tab{object}
	 * @returns {number}
	 */
	Constructor.prototype.getTabIndex = function(tab) {

		return this.$jQuery().tabs("getTabIndex", tab);
	};

	/**
	 * 获取选中Tab页
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getSelected = function() {

		return this.$jQuery().tabs("getSelected");
	};

	/**
	 * 选中指定Tab
	 * 
	 * @param which{object}
	 * @returns
	 */
	Constructor.prototype.select = function(which) {

		return this.$jQuery().tabs("select", which);
	};

	/**
	 * 取消选中指定Tab
	 * 
	 * @param which{object}
	 * @returns
	 */
	Constructor.prototype.unselect = function(which) {

		return this.$jQuery().tabs("unselect", which);
	};

	/**
	 * 显示头
	 * 
	 * @returns
	 */
	Constructor.prototype.showHeader = function() {

		return this.$jQuery().tabs("showHeader");
	};

	/**
	 * 隐藏头
	 * 
	 * @returns
	 */
	Constructor.prototype.hideHeader = function() {

		return this.$jQuery().tabs("hideHeader");
	};

	/**
	 * 显示工具
	 * 
	 * @returns
	 */
	Constructor.prototype.showTool = function() {

		return this.$jQuery().tabs("showTool");
	};

	/**
	 * 隐藏工具
	 * 
	 * @returns
	 */
	Constructor.prototype.hideTool = function() {

		return this.$jQuery().tabs("hideTool");
	};

	/**
	 * 判断指定Tab是否存在
	 * 
	 * @param which{object}
	 * @returns {boolean}
	 */
	Constructor.prototype.exists = function(which) {

		return this.$jQuery().tabs("exists", which);
	};

	/**
	 * 更新
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.update = function(param) {

		return this.$jQuery().tabs("update", param);
	};

	/**
	 * 启用Tab
	 * 
	 * @param which{object}
	 * @returns
	 */
	Constructor.prototype.enableTab = function(which) {

		return this.$jQuery().tabs("enableTab", which);
	};

	/**
	 * 禁用Tab
	 * 
	 * @param which{object}
	 * @returns
	 */
	Constructor.prototype.disableTab = function(which) {

		return this.$jQuery().tabs("disableTab", which);
	};

	/**
	 * 滚动至
	 * 
	 * @param deltaX{number}
	 * @returns
	 */
	Constructor.prototype.scrollBy = function(deltaX) {

		return this.$jQuery().tabs("scrollBy", deltaX);
	};

	// 返回构造函数
	return Constructor;
})();