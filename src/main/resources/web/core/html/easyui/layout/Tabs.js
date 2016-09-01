/**
 * @name	Tabs
 * @package core.html.easyui.layout
 * @desc	Tab页模板
 * @type	类
 * 
 * @date	2016年8月26日 16:34:52
 */

core.html.easyui.layout.Tabs = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(_id) {

		// 校验ID
		if (_id === null || _id === undefined) {
			new core.lang.Exception(this, "core.html.easyui.layout.Tabs", "构造参数异常", "ID属性不能为空");
		}

		/**
		 * 属性
		 */
		/**
		 * ID
		 */
		var id = _id;
		/**
		 * 宽度
		 */
		var width = "auto";
		/**
		 * 高度
		 */
		var height = "auto";
		/**
		 * 无格式
		 */
		var plain = false;
		/**
		 * 自适应
		 */
		var fit = false;
		/**
		 * 边框
		 */
		var border = true;
		/**
		 * 
		 */
		var scrollIncrement = 100;
		/**
		 * 滚动持续时间
		 */
		var scrollDuration = 400;
		/**
		 * 工具条
		 */
		var tools = null;
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
		var tabWidth = "auto";
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
		 * 加载事件
		 */
		var onLoad = function(panel) {

		};
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
		 * 关闭前事件
		 */
		var onBeforeClose = function(title, index) {

		};
		/**
		 * 关闭事件
		 */
		var onClose = function(title, index) {

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
		 * 获取/设置ID
		 * 
		 * @param id
		 */
		this.id = function() {

			switch (arguments.length) {
			case 0:
				return id;
			default:
				id = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置宽度
		 * 
		 * @param width
		 */
		this.width = function() {

			switch (arguments.length) {
			case 0:
				return width;
			default:
				width = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置高度
		 * 
		 * @param height
		 */
		this.height = function() {

			switch (arguments.length) {
			case 0:
				return height;
			default:
				height = arguments[0];
				return this;
			}
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
		 * 获取/设置自适应
		 * 
		 * @param fit
		 */
		this.fit = function() {

			switch (arguments.length) {
			case 0:
				return fit;
			default:
				fit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置边框
		 * 
		 * @param border
		 */
		this.border = function() {

			switch (arguments.length) {
			case 0:
				return border;
			default:
				border = arguments[0];
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
		 * 获取/设置工具条
		 * 
		 * @param tools
		 */
		this.tools = function() {

			switch (arguments.length) {
			case 0:
				return tools;
			default:
				tools = arguments[0];
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
		 * 获取/设置加载事件
		 * 
		 * @param onLoad
		 */
		this.onLoad = function() {

			switch (arguments.length) {
			case 0:
				return onLoad;
			default:
				onLoad = arguments[0];
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
		 * 获取/设置关闭前事件
		 * 
		 * @param onBeforeClose
		 */
		this.onBeforeClose = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeClose;
			default:
				onBeforeClose = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置关闭事件
		 * 
		 * @param onClose
		 */
		this.onClose = function() {

			switch (arguments.length) {
			case 0:
				return onClose;
			default:
				onClose = arguments[0];
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
			width : this.width(),
			height : this.height(),
			plain : this.plain(),
			fit : this.fit(),
			border : this.border(),
			scrollIncrement : this.scrollIncrement(),
			scrollDuration : this.scrollDuration(),
			tools : this.tools(),
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
			onLoad : this.onLoad(),
			onSelect : this.onSelect(),
			onUnselect : this.onUnselect(),
			onBeforeClose : this.onBeforeClose(),
			onClose : this.onClose(),
			onAdd : this.onAdd(),
			onUpdate : this.onUpdate(),
			onContextMenu : this.onContextMenu()
		});
		// 扩展事件
		$jQuery.tabs("onDblClick", this.onDblClick());

		return this;
	};

	/**
	 * 方法
	 */
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
	Constructor.prototype.tabs = function() {

		return $("#" + this.id()).tabs("tabs");
	};

	/**
	 * 改变窗口大小
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function() {

		return $("#" + this.id()).tabs("resize");
	};

	/**
	 * 添加Tab页
	 * 
	 * @param options
	 * @returns
	 */
	Constructor.prototype.add = function(options) {

		return $("#" + this.id()).tabs("add", options);
	};

	/**
	 * 关闭指定Tab
	 * 
	 * @param which
	 * @returns
	 */
	Constructor.prototype.close = function(which) {

		return $("#" + this.id()).tabs("close", which);
	};

	/**
	 * 获取指定Tab
	 * 
	 * @param which
	 * @returns
	 */
	Constructor.prototype.getTab = function(which) {

		return $("#" + this.id()).tabs("getTab", which);
	};

	/**
	 * 获取指定Tab页索引
	 * 
	 * @param tab
	 * @returns
	 */
	Constructor.prototype.getTabIndex = function(tab) {

		return $("#" + this.id()).tabs("getTabIndex", tab);
	};

	/**
	 * 获取选中Tab页
	 * 
	 * @returns
	 */
	Constructor.prototype.getSelected = function() {

		return $("#" + this.id()).tabs("getSelected");
	};

	/**
	 * 选中指定Tab
	 * 
	 * @param which
	 * @returns
	 */
	Constructor.prototype.select = function(which) {

		return $("#" + this.id()).tabs("select", which);
	};

	/**
	 * 取消选中指定Tab
	 * 
	 * @param which
	 * @returns
	 */
	Constructor.prototype.unselect = function(which) {

		return $("#" + this.id()).tabs("unselect", which);
	};

	/**
	 * 显示头
	 * 
	 * @returns
	 */
	Constructor.prototype.showHeader = function() {

		return $("#" + this.id()).tabs("showHeader");
	};

	/**
	 * 隐藏头
	 * 
	 * @returns
	 */
	Constructor.prototype.hideHeader = function() {

		return $("#" + this.id()).tabs("hideHeader");
	};

	/**
	 * 显示工具
	 * 
	 * @returns
	 */
	Constructor.prototype.showTool = function() {

		return $("#" + this.id()).tabs("showTool");
	};

	/**
	 * 隐藏工具
	 * 
	 * @returns
	 */
	Constructor.prototype.hideTool = function() {

		return $("#" + this.id()).tabs("hideTool");
	};

	/**
	 * 判断指定Tab是否存在
	 * 
	 * @param which
	 * @returns
	 */
	Constructor.prototype.exists = function(which) {

		return $("#" + this.id()).tabs("exists", which);
	};

	/**
	 * 更新
	 * 
	 * @param param
	 * @returns
	 */
	Constructor.prototype.update = function(param) {

		return $("#" + this.id()).tabs("update", param);
	};

	/**
	 * 启用Tab
	 * 
	 * @param which
	 * @returns
	 */
	Constructor.prototype.enableTab = function(which) {

		return $("#" + this.id()).tabs("enableTab", which);
	};

	/**
	 * 禁用Tab
	 * 
	 * @param which
	 * @returns
	 */
	Constructor.prototype.disableTab = function(which) {

		return $("#" + this.id()).tabs("disableTab", which);
	};

	/**
	 * 滚动至
	 * 
	 * @param deltaX
	 * @returns
	 */
	Constructor.prototype.scrollBy = function(deltaX) {

		return $("#" + this.id()).tabs("scrollBy", deltaX);
	};

	// 返回构造函数
	return Constructor;
})();