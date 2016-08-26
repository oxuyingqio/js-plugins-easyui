/**
 * @name	Tabs
 * @package	core.html.easyui.layout
 * @desc	Tab页模板
 * @type	类
 * 
 * @date	2016年8月26日 16:34:52
 */

core.html.easyui.layout.Tabs = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

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
		core.html.easyui.layout.Tabs.superClass.constructor.call(this, id || "coreHtmlEasyuiLayoutTabs" + count);
		// 设置工具条为空
		this.tools(null);

		/**
		 * 属性
		 */
		/**
		 * 无格式
		 */
		var plain = false;
		/**
		 * 
		 */
		var scrollIncrement = 100;
		/**
		 * 滚动持续时间
		 */
		var scrollDuration = 400;
		/**
		 * 工具条位置
		 */
		var toolPosition = "right";
		/**
		 * Tab页位置
		 */
		var tabPosition = "top";
		/**
		 * 头宽度
		 */
		var headerWidth = 150;
		/**
		 * Tab页宽度
		 */
		var tabWidth = undefined;
		/**
		 * Tab页高度
		 */
		var tabHeight = 27;
		/**
		 * 初始化选中Tab页索引
		 */
		var selected = 0;
		/**
		 * 显示头
		 */
		var showHeaderAttr = true;
		/**
		 * Tab页宽度自适应
		 */
		var justified = false;
		/**
		 * 去除Tab页之间的空间
		 */
		var narrow = false;
		/**
		 * Tab页按钮样式
		 */
		var pill = false;

		/**
		 * 事件
		 */
		/**
		 * 选择事件
		 * 
		 * @param onSelect
		 */
		var onSelect = function(title, index) {

		};
		/**
		 * 取消选择事件
		 * 
		 * @param onUnselect
		 */
		var onUnselect = function(title, index) {

		};
		/**
		 * 添加事件
		 * 
		 * @param onAdd
		 */
		var onAdd = function(title, index) {

		};
		/**
		 * 更新事件
		 * 
		 * @param onUpdate
		 */
		var onUpdate = function(title, index) {

		};
		/**
		 * 右键事件
		 * 
		 * @param onContextMenu
		 */
		var onContextMenu = function(e, title, index) {

		};
		/**
		 * 双击事件
		 * 
		 * @param onDblClick
		 */
		var onDblClick = function(index, title) {

		};

		/**
		 * 获取/设置无格式
		 * 
		 * @param plain
		 */
		this.plain = function() {

			switch (arguments.length) {
			case 0:
				return plain;
			default:
				plain = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param scrollIncrement
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
		 * @param scrollDuration
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
		 * @param toolPosition
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
		 * @param tabPosition
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
		 * @param headerWidth
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
		 * @param tabWidth
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
		 * @param tabHeight
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
		 * 获取/设置默认选中的Tab页索引
		 * 
		 * @param selected
		 */
		this.selected = function() {

			switch (arguments.length) {
			case 0:
				return selected;
			default:
				selected = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示标头
		 * 
		 * @param showHeader
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
		 * @param justified
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
		 * @param narrow
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
		 * @param pill
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
		 * 获取/设置取消选择事件
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
		 * 获取/设置添加事件
		 * 
		 * @param onAdd
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
		 * @param onUpdate
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
		 * @param onContextMenu
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

	/**
	 * 初始化
	 * 
	 * @returns {core.html.easyui.layout.Tabs}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.layout.Tabs", "参数异常", "div(id:" + this.id() + ")不存在.");
		}
		// 清空内容
		$jQuery.empty();

		// 参数配置
		$jQuery.tabs({
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
			plain : this.plain(),
			scrollIncrement : this.scrollIncrement(),
			scrollDuration : this.scrollDuration(),
			toolPosition : this.toolPosition(),
			tabPosition : this.tabPosition(),
			headerWidth : this.headerWidth(),
			tabWidth : this.tabWidth(),
			tabHeight : this.tabHeight(),
			selected : this.selected(),
			showHeader : this.showHeaderAttr(),
			justified : this.justified(),
			narrow : this.narrow(),
			pill : this.pill(),

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
			onMinimize : this.onMinimize(),
			onSelect : this.onSelect(),
			onUnselect : this.onUnselect(),
			onAdd : this.onAdd(),
			onUpdate : this.onUpdate(),
			onContextMenu : this.onContextMenu()
		});
		// 扩展事件
		$jQuery.tabs("onDblClick", this.onDblClick());

		return this;
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).tabs("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.panel = function() {

		return $("#" + this.id()).tabs("panel");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.header = function() {

		return $("#" + this.id()).tabs("header");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.footer = function() {

		return $("#" + this.id()).tabs("footer");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.body = function() {

		return $("#" + this.id()).tabs("body");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.setTitle = function(title) {

		return $("#" + this.id()).tabs("setTitle", title);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.open = function(forceOpen) {

		return $("#" + this.id()).tabs("open", forceOpen);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function(forceDestroy) {

		return $("#" + this.id()).tabs("destroy", forceDestroy);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).tabs("clear");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.refresh = function(href) {

		return $("#" + this.id()).tabs("refresh", href);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.doLayout = function() {

		return $("#" + this.id()).tabs("doLayout");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.move = function(options) {

		return $("#" + this.id()).tabs("move", options);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.maximize = function() {

		return $("#" + this.id()).tabs("maximize");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.minimize = function() {

		return $("#" + this.id()).tabs("minimize");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.restore = function() {

		return $("#" + this.id()).tabs("restore");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.collapse = function(animate) {

		return $("#" + this.id()).tabs("collapse", animate);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.expand = function(animate) {

		return $("#" + this.id()).tabs("expand", animate);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.tabs = function() {

		return $("#" + this.id()).tabs("tabs");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function() {

		return $("#" + this.id()).tabs("resize");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.add = function(options) {

		return $("#" + this.id()).tabs("add", options);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.close = function(which) {

		return $("#" + this.id()).tabs("close", which);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getTab = function(which) {

		return $("#" + this.id()).tabs("getTab", which);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getTabIndex = function(tab) {

		return $("#" + this.id()).tabs("getTabIndex", tab);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getSelected = function() {

		return $("#" + this.id()).tabs("getSelected");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.select = function(which) {

		return $("#" + this.id()).tabs("select", which);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.unselect = function(which) {

		return $("#" + this.id()).tabs("unselect", which);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.showHeader = function() {

		return $("#" + this.id()).tabs("showHeader");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.hideHeader = function() {

		return $("#" + this.id()).tabs("hideHeader");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.showTool = function() {

		return $("#" + this.id()).tabs("showTool");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.hideTool = function() {

		return $("#" + this.id()).tabs("hideTool");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.exists = function(which) {

		return $("#" + this.id()).tabs("exists", which);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.update = function(param) {

		return $("#" + this.id()).tabs("update", param);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enableTab = function(which) {

		return $("#" + this.id()).tabs("enableTab", which);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disableTab = function(which) {

		return $("#" + this.id()).tabs("disableTab", which);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.scrollBy = function(deltaX) {

		return $("#" + this.id()).tabs("scrollBy", deltaX);
	};

	// 返回构造函数
	return Constructor;
})();