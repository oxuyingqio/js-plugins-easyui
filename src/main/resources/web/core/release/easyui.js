/**
 * 包
 */

// HTML EasyUI扩展包
core.html.easyui = {

	// 基础包
	base : {},

	// 按钮包
	button : {},

	// 列表包
	datagrid : {},

	// 表单包
	form : {},

	// 布局包
	layout : {},

	// 窗口包
	window : {}
};
/**
 * @name	datebox
 * @package	core.html.easyui
 * @desc	日期输入框扩展
 * @type	对象扩展
 * 
 * @date	2016年8月25日 12:01:20
 */

/**
 * 日期输入框格式化
 * 
 * @param date{Date}
 *            日期
 * @returns {String}
 */
$.fn.datebox.defaults.formatter = function(date) {

	return date.format("yyyy-MM-dd");
};

/**
 * 日期输入框解析器
 * 
 * @param str{String}
 *            日期字符串
 * @returns {Date}
 */
$.fn.datebox.defaults.parser = function(str) {

	if (!str)
		return new Date();

	var ss = str.split("-");
	// 年
	var year = parseInt(ss[0], 10);
	// 月
	var month = parseInt(ss[1], 10);
	// 日
	var day = parseInt(ss[2], 10);

	if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
		return new Date(year, month - 1, day);
	} else {
		return new Date();
	}
};
/**
 * @name	tabs
 * @package	core.html.easyui
 * @desc	Tab页扩展
 * @type	对象扩展
 * 
 * @date	2016年8月25日 12:02:47
 */

$.extend($.fn.tabs.methods, {

	/**
	 * 双击事件
	 * 
	 * @param jq
	 * @param caller
	 */
	onDblClick : function(jq, caller) {
		return jq.each(function() {
			var that = this;
			$(this).children("div.tabs-header").find("ul.tabs").undelegate("li", "dblclick.tabs").delegate("li",
					"dblclick.tabs", function(e) {
						if (caller && typeof (caller) == "function") {
							var title = $(this).text();
							var index = $(that).tabs("getTabIndex", $(that).tabs("getTab", title));
							caller(index, title);
						}
					});
		});
	}
});
/**
 * @name	Tooltip
 * @package core.html.easyui.base
 * @desc	工具提示模板
 * @type	类
 * 
 * @date	2016年8月29日 15:03:57
 */

core.html.easyui.base.Tooltip = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(_id) {

		// 校验ID
		if (_id === null || _id === undefined) {
			new core.lang.Exception(this, "core.html.easyui.base.Tooltip", "构造参数异常", "ID属性不能为空");
		}

		/**
		 * 属性
		 */
		/**
		 * ID
		 */
		var id = _id;
		/**
		 * 工具提示的位置
		 */
		var position = $.fn.tooltip.defaults.position;
		/**
		 * 提示内容
		 */
		var content = $.fn.tooltip.defaults.content;
		/**
		 * 提示工具随着鼠标移动
		 */
		var trackMouse = $.fn.tooltip.defaults.trackMouse;
		/**
		 * 水平偏移值
		 */
		var deltaX = $.fn.tooltip.defaults.deltaX;
		/**
		 * 垂直偏移值
		 */
		var deltaY = $.fn.tooltip.defaults.deltaY;
		/**
		 * 显示事件
		 */
		var showEvent = $.fn.tooltip.defaults.showEvent;
		/**
		 * 隐藏事件
		 */
		var hideEvent = $.fn.tooltip.defaults.hideEvent;
		/**
		 * 显示工具延迟时间
		 */
		var showDelay = $.fn.tooltip.defaults.showDelay;
		/**
		 * 隐藏工具延迟时间
		 */
		var hideDelay = $.fn.tooltip.defaults.hideDelay;

		/**
		 * 事件
		 */
		/**
		 * 显示事件
		 */
		var onShow = $.fn.tooltip.defaults.onShow;
		/**
		 * 隐藏事件
		 */
		var onHide = $.fn.tooltip.defaults.onHide;
		/**
		 * 更新事件
		 */
		var onUpdate = $.fn.tooltip.defaults.onUpdate;
		/**
		 * 位置改变事件
		 */
		var onPosition = $.fn.tooltip.defaults.onPosition;
		/**
		 * 销毁事件
		 */
		var onDestroy = $.fn.tooltip.defaults.onDestroy;

		/**
		 * 获取/设置id
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
		 * 获取/设置工具提示的位置
		 * 
		 * @param position
		 */
		this.position = function() {

			switch (arguments.length) {
			case 0:
				return position;
			default:
				position = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置提示内容
		 * 
		 * @param content
		 */
		this.content = function() {

			switch (arguments.length) {
			case 0:
				return content;
			default:
				content = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置提示工具随着鼠标移动
		 * 
		 * @param trackMouse
		 */
		this.trackMouse = function() {

			switch (arguments.length) {
			case 0:
				return trackMouse;
			default:
				trackMouse = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置水平偏移值
		 * 
		 * @param deltaX
		 */
		this.deltaX = function() {

			switch (arguments.length) {
			case 0:
				return deltaX;
			default:
				deltaX = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置垂直偏移值
		 * 
		 * @param deltaY
		 */
		this.deltaY = function() {

			switch (arguments.length) {
			case 0:
				return deltaY;
			default:
				deltaY = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示事件
		 * 
		 * @param showEvent
		 */
		this.showEvent = function() {

			switch (arguments.length) {
			case 0:
				return showEvent;
			default:
				showEvent = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置隐藏事件
		 * 
		 * @param hideEvent
		 */
		this.hideEvent = function() {

			switch (arguments.length) {
			case 0:
				return hideEvent;
			default:
				hideEvent = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示工具延迟时间
		 * 
		 * @param showDelay
		 */
		this.showDelay = function() {

			switch (arguments.length) {
			case 0:
				return showDelay;
			default:
				showDelay = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置隐藏工具延迟时间
		 * 
		 * @param hideDelay
		 */
		this.hideDelay = function() {

			switch (arguments.length) {
			case 0:
				return hideDelay;
			default:
				hideDelay = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示事件
		 * 
		 * @param onShow
		 */
		this.onShow = function() {

			switch (arguments.length) {
			case 0:
				return onShow;
			default:
				onShow = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置隐藏事件
		 * 
		 * @param onHide
		 */
		this.onHide = function() {

			switch (arguments.length) {
			case 0:
				return onHide;
			default:
				onHide = arguments[0];
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
		 * 获取/设置位置改变事件
		 * 
		 * @param onPosition
		 */
		this.onPosition = function() {

			switch (arguments.length) {
			case 0:
				return onPosition;
			default:
				onPosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置销毁事件
		 * 
		 * @param onDestroy
		 */
		this.onDestroy = function() {

			switch (arguments.length) {
			case 0:
				return onDestroy;
			default:
				onDestroy = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.base.Tooltip}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.base.Tooltip", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.tooltip({
			// 属性
			id : this.id(),
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),

			// 事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy()
		});

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

		return $("#" + this.id()).tooltip("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.tip = function() {

		return $("#" + this.id()).tooltip("tip");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.arrow = function() {

		return $("#" + this.id()).tooltip("arrow");
	};

	/**
	 * 显示
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function(e) {

		return $("#" + this.id()).tooltip("show", e);
	};

	/**
	 * 隐藏
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function(e) {

		return $("#" + this.id()).tooltip("hide", e);
	};

	/**
	 * 更新内容
	 * 
	 * @returns
	 */
	Constructor.prototype.update = function(content) {

		return $("#" + this.id()).tooltip("update", content);
	};

	/**
	 * 重置显示位置
	 * 
	 * @returns
	 */
	Constructor.prototype.reposition = function() {

		return $("#" + this.id()).tooltip("reposition");
	};

	/**
	 * 销毁对象
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).tooltip("destroy");
	};

	// 返回构造函数
	return Constructor;
})();


/**
 * @name	Panel
 * @package	core.html.easyui.layout
 * @desc	面板模板
 * @type	类
 * 
 * @date	2016年8月25日 17:57:53
 */

core.html.easyui.layout.Panel = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(_id) {

		// 校验ID
		if (_id === null || _id === undefined) {
			new core.lang.Exception(this, "core.html.easyui.layout.Panel", "构造参数异常", "ID属性不能为空");
		}

		/**
		 * 属性
		 */
		/**
		 * ID
		 */
		var id = _id;
		/**
		 * 标题
		 */
		var title = $.fn.panel.defaults.title;
		/**
		 * 按钮样式
		 */
		var iconCls = $.fn.panel.defaults.iconCls;
		/**
		 * 宽
		 */
		var width = $.fn.panel.defaults.width;
		/**
		 * 高
		 */
		var height = $.fn.panel.defaults.height;
		/**
		 * 左偏移
		 */
		var left = $.fn.panel.defaults.left;
		/**
		 * 上偏移
		 */
		var top = $.fn.panel.defaults.top;
		/**
		 * 样式
		 */
		var cls = $.fn.panel.defaults.cls;
		/**
		 * 标头样式
		 */
		var headerCls = $.fn.panel.defaults.headerCls;
		/**
		 * 内容样式
		 */
		var bodyCls = $.fn.panel.defaults.bodyCls;
		/**
		 * 样式
		 */
		var style = $.fn.panel.defaults.style;
		/**
		 * 自适应
		 */
		var fit = $.fn.panel.defaults.fit;
		/**
		 * 边框
		 */
		var border = $.fn.panel.defaults.border;
		/**
		 * 调整布局
		 */
		var doSize = $.fn.panel.defaults.doSize;
		/**
		 * 不创建标头
		 */
		var noheader = $.fn.panel.defaults.noheader;
		/**
		 * 内容
		 */
		var content = $.fn.panel.defaults.content;
		/**
		 * 显示折叠按钮
		 */
		var collapsible = $.fn.panel.defaults.collapsible;
		/**
		 * 显示最小化按钮
		 */
		var minimizable = $.fn.panel.defaults.minimizable;
		/**
		 * 显示最大化按钮
		 */
		var maximizable = $.fn.panel.defaults.maximizable;
		/**
		 * 显示关闭按钮
		 */
		var closable = $.fn.panel.defaults.closable;
		/**
		 * 工具条
		 */
		var tools = $.fn.panel.defaults.tools;
		/**
		 * 头
		 */
		var header = $.fn.panel.defaults.header;
		/**
		 * 脚
		 */
		var footer = $.fn.panel.defaults.footer;
		/**
		 * 打开动画
		 */
		var openAnimation = $.fn.panel.defaults.openAnimation;
		/**
		 * 打开时间
		 */
		var openDuration = $.fn.panel.defaults.openDuration;
		/**
		 * 关闭动画
		 */
		var closeAnimation = $.fn.panel.defaults.closeAnimation;
		/**
		 * 关闭时间
		 */
		var closeDuration = $.fn.panel.defaults.closeDuration;
		/**
		 * 初始化折叠
		 */
		var collapsed = $.fn.panel.defaults.collapsed;
		/**
		 * 初始化最小
		 */
		var minimized = $.fn.panel.defaults.minimized;
		/**
		 * 初始化最大
		 */
		var maximized = $.fn.panel.defaults.maximized;
		/**
		 * 初始化关闭
		 */
		var closed = $.fn.panel.defaults.closed;
		/**
		 * 超链接
		 */
		var href = $.fn.panel.defaults.href;
		/**
		 * 缓存
		 */
		var cache = $.fn.panel.defaults.cache;
		/**
		 * 加载信息
		 */
		var loadingMessage = $.fn.panel.defaults.loadingMessage;
		/**
		 * ajax响应中提取数据
		 */
		var extractor = $.fn.panel.defaults.extractor;
		/**
		 * 请求方式
		 */
		var method = $.fn.panel.defaults.method;
		/**
		 * 参数
		 */
		var queryParams = $.fn.panel.defaults.queryParams;
		/**
		 * 加载器
		 */
		var loader = $.fn.panel.defaults.loader;

		/**
		 * 事件
		 */
		/**
		 * 加载前事件
		 * 
		 * @param param
		 */
		var onBeforeLoad = $.fn.panel.defaults.onBeforeLoad;
		/**
		 * 加载事件
		 */
		var onLoad = $.fn.panel.defaults.onLoad;
		/**
		 * 加载失败事件
		 */
		var onLoadError = $.fn.panel.defaults.onLoadError;
		/**
		 * 打开前事件
		 */
		var onBeforeOpen = $.fn.panel.defaults.onBeforeOpen;
		/**
		 * 打开事件
		 */
		var onOpen = $.fn.panel.defaults.onOpen;
		/**
		 * 关闭前事件
		 */
		var onBeforeClose = $.fn.panel.defaults.onBeforeClose;
		/**
		 * 关闭事件
		 */
		var onClose = $.fn.panel.defaults.onClose;
		/**
		 * 销毁前事件
		 */
		var onBeforeDestroy = $.fn.panel.defaults.onBeforeDestroy;
		/**
		 * 销毁事件
		 */
		var onDestroy = $.fn.panel.defaults.onDestroy;
		/**
		 * 折叠前事件
		 */
		var onBeforeCollapse = $.fn.panel.defaults.onBeforeCollapse;
		/**
		 * 折叠事件
		 */
		var onCollapse = $.fn.panel.defaults.onCollapse;
		/**
		 * 展开前事件
		 */
		var onBeforeExpand = $.fn.panel.defaults.onBeforeExpand;
		/**
		 * 展开事件
		 */
		var onExpand = $.fn.panel.defaults.onExpand;
		/**
		 * 改变大小事件
		 * 
		 * @param width
		 * @param height
		 */
		var onResize = $.fn.panel.defaults.onResize;
		/**
		 * 移动事件
		 * 
		 * @param left
		 * @param top
		 */
		var onMove = $.fn.panel.defaults.onMove;
		/**
		 * 最大化事件
		 */
		var onMaximize = $.fn.panel.defaults.onMaximize;
		/**
		 * 恢复事件
		 */
		var onRestore = $.fn.panel.defaults.onRestore;
		/**
		 * 最小化事件
		 */
		var onMinimize = $.fn.panel.defaults.onMinimize;

		/**
		 * 获取/设置 id
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
		 * 获取/设置标题
		 * 
		 * @param title
		 */
		this.title = function() {

			switch (arguments.length) {
			case 0:
				return title;
			default:
				title = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置图标样式
		 * 
		 * @param iconCls
		 */
		this.iconCls = function() {

			switch (arguments.length) {
			case 0:
				return iconCls;
			default:
				iconCls = arguments[0];
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
		 * 获取/设置左偏移
		 * 
		 * @param left
		 */
		this.left = function() {

			switch (arguments.length) {
			case 0:
				return left;
			default:
				left = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置上偏移
		 * 
		 * @param top
		 */
		this.top = function() {

			switch (arguments.length) {
			case 0:
				return top;
			default:
				top = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置样式
		 * 
		 * @param cls
		 */
		this.cls = function() {

			switch (arguments.length) {
			case 0:
				return cls;
			default:
				cls = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置标头样式
		 * 
		 * @param headerCls
		 */
		this.headerCls = function() {

			switch (arguments.length) {
			case 0:
				return headerCls;
			default:
				headerCls = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置内容样式
		 * 
		 * @param bodyCls
		 */
		this.bodyCls = function() {

			switch (arguments.length) {
			case 0:
				return bodyCls;
			default:
				bodyCls = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置样式
		 * 
		 * @param style
		 */
		this.style = function() {

			switch (arguments.length) {
			case 0:
				return style;
			default:
				style = arguments[0];
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
		 * 获取/设置调整布局
		 * 
		 * @param doSize
		 */
		this.doSize = function() {

			switch (arguments.length) {
			case 0:
				return doSize;
			default:
				doSize = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置不创建标头
		 * 
		 * @param noheader
		 */
		this.noheader = function() {

			switch (arguments.length) {
			case 0:
				return noheader;
			default:
				noheader = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置内容
		 * 
		 * @param content
		 */
		this.content = function() {

			switch (arguments.length) {
			case 0:
				return content;
			default:
				content = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示折叠按钮
		 * 
		 * @param collapsible
		 */
		this.collapsible = function() {

			switch (arguments.length) {
			case 0:
				return collapsible;
			default:
				collapsible = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示最小化按钮
		 * 
		 * @param minimizable
		 */
		this.minimizable = function() {

			switch (arguments.length) {
			case 0:
				return minimizable;
			default:
				minimizable = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示最大化按钮
		 * 
		 * @param maximizable
		 */
		this.maximizable = function() {

			switch (arguments.length) {
			case 0:
				return maximizable;
			default:
				maximizable = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示关闭按钮
		 * 
		 * @param closable
		 */
		this.closable = function() {

			switch (arguments.length) {
			case 0:
				return closable;
			default:
				closable = arguments[0];
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
		 * 获取/设置头
		 * 
		 * @param header
		 */
		this.header = function() {

			switch (arguments.length) {
			case 0:
				return header;
			default:
				header = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置脚
		 * 
		 * @param footer
		 */
		this.footer = function() {

			switch (arguments.length) {
			case 0:
				return footer;
			default:
				footer = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置打开动画
		 * 
		 * @param openAnimation
		 */
		this.openAnimation = function() {

			switch (arguments.length) {
			case 0:
				return openAnimation;
			default:
				openAnimation = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置打开时间
		 * 
		 * @param openDuration
		 */
		this.openDuration = function() {

			switch (arguments.length) {
			case 0:
				return openDuration;
			default:
				openDuration = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置关闭动画
		 * 
		 * @param closeAnimation
		 */
		this.closeAnimation = function() {

			switch (arguments.length) {
			case 0:
				return closeAnimation;
			default:
				closeAnimation = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置关闭时间
		 * 
		 * @param closeDuration
		 */
		this.closeDuration = function() {

			switch (arguments.length) {
			case 0:
				return closeDuration;
			default:
				closeDuration = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置初始化折叠
		 * 
		 * @param collapsed
		 */
		this.collapsed = function() {

			switch (arguments.length) {
			case 0:
				return collapsed;
			default:
				collapsed = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置初始化最小
		 * 
		 * @param minimized
		 */
		this.minimized = function() {

			switch (arguments.length) {
			case 0:
				return minimized;
			default:
				minimized = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置初始化最大
		 * 
		 * @param maximized
		 */
		this.maximized = function() {

			switch (arguments.length) {
			case 0:
				return maximized;
			default:
				maximized = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置初始化关闭
		 * 
		 * @param closed
		 */
		this.closed = function() {

			switch (arguments.length) {
			case 0:
				return closed;
			default:
				closed = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置超链接
		 * 
		 * @param href
		 */
		this.href = function() {

			switch (arguments.length) {
			case 0:
				return href;
			default:
				href = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置缓存
		 * 
		 * @param cache
		 */
		this.cache = function() {

			switch (arguments.length) {
			case 0:
				return cache;
			default:
				cache = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置加载信息
		 * 
		 * @param loadingMessage
		 */
		this.loadingMessage = function() {

			switch (arguments.length) {
			case 0:
				return loadingMessage;
			default:
				loadingMessage = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置ajax响应中提取数据
		 * 
		 * @param extractor
		 */
		this.extractor = function() {

			switch (arguments.length) {
			case 0:
				return extractor;
			default:
				extractor = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置请求方式
		 * 
		 * @param method
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
		 * 获取/设置参数
		 * 
		 * @param queryParams
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
		 * 获取/设置加载器
		 * 
		 * @param loader
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
		 * 获取/设置加载前事件
		 * 
		 * @param onBeforeLoad
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
		 * 获取/设置加载失败事件
		 * 
		 * @param onLoadError
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
		 * 获取/设置打开前事件
		 * 
		 * @param onBeforeOpen
		 */
		this.onBeforeOpen = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeOpen;
			default:
				onBeforeOpen = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置打开事件
		 * 
		 * @param onOpen
		 */
		this.onOpen = function() {

			switch (arguments.length) {
			case 0:
				return onOpen;
			default:
				onOpen = arguments[0];
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
		 * 获取/设置销毁事件
		 * 
		 * @param onBeforeDestroy
		 */
		this.onBeforeDestroy = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeDestroy;
			default:
				onBeforeDestroy = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置销毁事件
		 * 
		 * @param onDestroy
		 */
		this.onDestroy = function() {

			switch (arguments.length) {
			case 0:
				return onDestroy;
			default:
				onDestroy = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置折叠前事件
		 * 
		 * @param onBeforeCollapse
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
		 * 获取/设置折叠事件
		 * 
		 * @param onCollapse
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
		 * 获取/设置展开事件
		 * 
		 * @param onBeforeExpand
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
		 * 获取/设置展开事件
		 * 
		 * @param onExpand
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
		 * 获取/设置窗口大小改变事件
		 * 
		 * @param onResize
		 */
		this.onResize = function() {

			switch (arguments.length) {
			case 0:
				return onResize;
			default:
				onResize = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置移动事件
		 * 
		 * @param onMove
		 */
		this.onMove = function() {

			switch (arguments.length) {
			case 0:
				return onMove;
			default:
				onMove = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置最大化事件
		 * 
		 * @param onMaximize
		 */
		this.onMaximize = function() {

			switch (arguments.length) {
			case 0:
				return onMaximize;
			default:
				onMaximize = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置恢复事件
		 * 
		 * @param onRestore
		 */
		this.onRestore = function() {

			switch (arguments.length) {
			case 0:
				return onRestore;
			default:
				onRestore = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置最小化事件
		 * 
		 * @param onMinimize
		 */
		this.onMinimize = function() {

			switch (arguments.length) {
			case 0:
				return onMinimize;
			default:
				onMinimize = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.layout.Panel}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.layout.Panel", "参数异常", "div(id:" + this.id() + ")不存在.");
		}
		// 清空内容
		$jQuery.empty();

		// 参数配置
		$jQuery.panel({
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
			onMinimize : this.onMinimize()
		});

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

		return $("#" + this.id()).panel("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.panel = function() {

		return $("#" + this.id()).panel("panel");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.header = function() {

		return $("#" + this.id()).panel("header");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.footer = function() {

		return $("#" + this.id()).panel("footer");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.body = function() {

		return $("#" + this.id()).panel("body");
	};

	/**
	 * 设置标题
	 * 
	 * @param title
	 * @returns
	 */
	Constructor.prototype.setTitle = function(title) {

		return $("#" + this.id()).panel("setTitle", title);
	};

	/**
	 * 打开面板
	 * 
	 * @param forceOpen
	 *            是否调用回调
	 * @returns
	 */
	Constructor.prototype.open = function(forceOpen) {

		return $("#" + this.id()).panel("open", forceOpen);
	};

	/**
	 * 关闭面板
	 * 
	 * @param forceClose
	 *            是否调用回调
	 * @returns
	 */
	Constructor.prototype.close = function(forceClose) {

		return $("#" + this.id()).panel("close", forceClose);
	};

	/**
	 * 销毁面板
	 * 
	 * @param forceDestroy
	 *            是否调用回调
	 * @returns
	 */
	Constructor.prototype.destroy = function(forceDestroy) {

		return $("#" + this.id()).panel("destroy", forceDestroy);
	};

	/**
	 * 清空面板内容
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).panel("clear");
	};

	/**
	 * 刷新面板
	 * 
	 * @param href
	 *            链接
	 * @returns
	 */
	Constructor.prototype.refresh = function(href) {

		return $("#" + this.id()).panel("refresh", href);
	};

	/**
	 * 改变面板窗口大小
	 * 
	 * @param options
	 * @returns
	 */
	Constructor.prototype.resize = function(options) {

		return $("#" + this.id()).panel("resize", options);
	};

	/**
	 * 调整布局
	 * 
	 * @returns
	 */
	Constructor.prototype.doLayout = function() {

		return $("#" + this.id()).panel("doLayout");
	};

	/**
	 * 移动面板
	 * 
	 * @param options
	 * @returns
	 */
	Constructor.prototype.move = function(options) {

		return $("#" + this.id()).panel("move", options);
	};

	/**
	 * 最大化
	 * 
	 * @returns
	 */
	Constructor.prototype.maximize = function() {

		return $("#" + this.id()).panel("maximize");
	};

	/**
	 * 最小化
	 * 
	 * @returns
	 */
	Constructor.prototype.minimize = function() {

		return $("#" + this.id()).panel("minimize");
	};

	/**
	 * 恢复面板
	 * 
	 * @returns
	 */
	Constructor.prototype.restore = function() {

		return $("#" + this.id()).panel("restore");
	};

	/**
	 * 折叠面板
	 * 
	 * @returns
	 */
	Constructor.prototype.collapse = function(animate) {

		return $("#" + this.id()).panel("collapse", animate);
	};

	/**
	 * 展开面板
	 * 
	 * @returns
	 */
	Constructor.prototype.expand = function(animate) {

		return $("#" + this.id()).panel("expand", animate);
	};

	// 返回构造函数
	return Constructor;
})();
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
		var width = $.fn.tabs.defaults.width;
		/**
		 * 高度
		 */
		var height = $.fn.tabs.defaults.height;
		/**
		 * 无格式
		 */
		var plain = $.fn.tabs.defaults.plain;
		/**
		 * 自适应
		 */
		var fit = $.fn.tabs.defaults.fit;
		/**
		 * 边框
		 */
		var border = $.fn.tabs.defaults.border;
		/**
		 * 
		 */
		var scrollIncrement = $.fn.tabs.defaults.scrollIncrement;
		/**
		 * 滚动持续时间
		 */
		var scrollDuration = $.fn.tabs.defaults.scrollDuration;
		/**
		 * 工具条
		 */
		var tools = $.fn.tabs.defaults.tools;
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
		 * 初始化选中Tab页索引
		 */
		var selected = $.fn.tabs.defaults.selected;
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
		 * 加载事件
		 */
		var onLoad = $.fn.tabs.defaults.onLoad;
		/**
		 * 选择事件
		 */
		var onSelect = $.fn.tabs.defaults.onSelect;
		/**
		 * 取消选择事件
		 */
		var onUnselect = $.fn.tabs.defaults.onUnselect;
		/**
		 * 关闭前事件
		 */
		var onBeforeClose = $.fn.tabs.defaults.onBeforeClose;
		/**
		 * 关闭事件
		 */
		var onClose = $.fn.tabs.defaults.onClose;
		/**
		 * 添加事件
		 * 
		 * @param onAdd
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

/**
 * @name	LinkButton
 * @package core.html.easyui.button
 * @desc	按钮模板
 * @type	类
 * 
 * @date	2016年9月1日 08:43:11
 */

core.html.easyui.button.LinkButton = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(_id) {

		// 校验ID
		if (_id === null || _id === undefined) {
			new core.lang.Exception(this, "core.html.easyui.button.LinkButton", "构造参数异常", "ID属性不能为空");
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
		var width = $.fn.linkbutton.defaults.width;
		/**
		 * 高度
		 */
		var height = $.fn.linkbutton.defaults.height;
		/**
		 * 禁用
		 */
		var disabled = $.fn.linkbutton.defaults.disabled;
		/**
		 * 
		 */
		var toggle = $.fn.linkbutton.defaults.toggle;
		/**
		 * 是否已选
		 */
		var selected = $.fn.linkbutton.defaults.selected;
		/**
		 * 分组
		 */
		var group = $.fn.linkbutton.defaults.group;
		/**
		 * 平的
		 */
		var plain = $.fn.linkbutton.defaults.plain;
		/**
		 * 按钮文本
		 */
		var text = $.fn.linkbutton.defaults.text;
		/**
		 * 按钮图标
		 */
		var iconCls = $.fn.linkbutton.defaults.iconCls;
		/**
		 * 图标位置
		 */
		var iconAlign = $.fn.linkbutton.defaults.iconAlign;
		/**
		 * 尺寸
		 */
		var size = $.fn.linkbutton.defaults.size;

		/**
		 * 事件
		 */
		/**
		 * 点击事件
		 */
		var onClick = $.fn.linkbutton.defaults.onClick;

		/**
		 * 获取/设置id
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
		 * 获取/设置禁用
		 * 
		 * @param disabled
		 */
		this.disabled = function() {

			switch (arguments.length) {
			case 0:
				return disabled;
			default:
				disabled = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param toggle
		 */
		this.toggle = function() {

			switch (arguments.length) {
			case 0:
				return toggle;
			default:
				toggle = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否已选
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
		 * 获取/设置分组
		 * 
		 * @param group
		 */
		this.group = function() {

			switch (arguments.length) {
			case 0:
				return group;
			default:
				group = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置平的
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
		 * 获取/设置按钮文本
		 * 
		 * @param text
		 */
		this.text = function() {

			switch (arguments.length) {
			case 0:
				return text;
			default:
				text = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按钮图标
		 * 
		 * @param iconCls
		 */
		this.iconCls = function() {

			switch (arguments.length) {
			case 0:
				return iconCls;
			default:
				iconCls = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置图标位置
		 * 
		 * @param iconAlign
		 */
		this.iconAlign = function() {

			switch (arguments.length) {
			case 0:
				return iconAlign;
			default:
				iconAlign = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置尺寸
		 * 
		 * @param size
		 */
		this.size = function() {

			switch (arguments.length) {
			case 0:
				return size;
			default:
				size = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置点击事件
		 * 
		 * @param onClick
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
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.button.LinkButton}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.button.LinkButton", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.linkbutton({
			// 属性
			id : this.id(),
			width : this.width(),
			height : this.height(),
			disabled : this.disabled(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),

			// 事件
			onClick : this.onClick()
		});

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

		return $("#" + this.id()).linkbutton("options");
	};

	/**
	 * 改变大小
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function(param) {

		return $("#" + this.id()).linkbutton("resize", param);
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).linkbutton("disable");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).linkbutton("enable");
	};

	/**
	 * 选中
	 * 
	 * @returns
	 */
	Constructor.prototype.select = function() {

		return $("#" + this.id()).linkbutton("select");
	};

	/**
	 * 取消选中
	 * 
	 * @returns
	 */
	Constructor.prototype.unselect = function() {

		return $("#" + this.id()).linkbutton("unselect");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	SwitchButton
 * @package core.html.easyui.button
 * @desc	开关按钮模板
 * @type	类
 * 
 * @date	2016年8月29日 15:52:53
 */

core.html.easyui.button.SwitchButton = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(_id) {

		// 校验ID
		if (_id === null || _id === undefined) {
			new core.lang.Exception(this, "core.html.easyui.button.SwitchButton", "构造参数异常", "ID属性不能为空");
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
		var width = $.fn.switchbutton.defaults.width;
		/**
		 * 高度
		 */
		var height = $.fn.switchbutton.defaults.height;
		/**
		 * 中心宽度
		 */
		var handleWidth = $.fn.switchbutton.defaults.handleWidth;
		/**
		 * 选中
		 */
		var checked = $.fn.switchbutton.defaults.checked;
		/**
		 * 不可用
		 */
		var disabled = $.fn.switchbutton.defaults.disabled;
		/**
		 * 只读
		 */
		var readonly = $.fn.switchbutton.defaults.readonly;
		/**
		 * 开关位置反转
		 */
		var reversed = $.fn.switchbutton.defaults.reversed;
		/**
		 * 开文字描述
		 */
		var onText = $.fn.switchbutton.defaults.onText;
		/**
		 * 关文字描述
		 */
		var offText = $.fn.switchbutton.defaults.offText;
		/**
		 * 中心文字
		 */
		var handleText = $.fn.switchbutton.defaults.handleText;
		/**
		 * 值
		 */
		var value = $.fn.switchbutton.defaults.value;

		/**
		 * 事件
		 */
		/**
		 * 改变事件
		 */
		var onChange = $.fn.switchbutton.defaults.onChange;

		/**
		 * 获取/设置id
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
		 * 获取/设置中心宽度
		 * 
		 * @param handleWidth
		 */
		this.handleWidth = function() {

			switch (arguments.length) {
			case 0:
				return handleWidth;
			default:
				handleWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置选中
		 * 
		 * @param checked
		 */
		this.checked = function() {

			switch (arguments.length) {
			case 0:
				return checked;
			default:
				checked = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置不可用
		 * 
		 * @param disabled
		 */
		this.disabled = function() {

			switch (arguments.length) {
			case 0:
				return disabled;
			default:
				disabled = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置只读
		 * 
		 * @param readonly
		 */
		this.readonly = function() {

			switch (arguments.length) {
			case 0:
				return readonly;
			default:
				readonly = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置开关位置反转
		 * 
		 * @param reversed
		 */
		this.reversed = function() {

			switch (arguments.length) {
			case 0:
				return reversed;
			default:
				reversed = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置开文字描述
		 * 
		 * @param onText
		 */
		this.onText = function() {

			switch (arguments.length) {
			case 0:
				return onText;
			default:
				onText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置关文字描述
		 * 
		 * @param offText
		 */
		this.offText = function() {

			switch (arguments.length) {
			case 0:
				return offText;
			default:
				offText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置中心文字
		 * 
		 * @param handleText
		 */
		this.handleText = function() {

			switch (arguments.length) {
			case 0:
				return handleText;
			default:
				handleText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置值
		 * 
		 * @param value
		 */
		this.value = function() {

			switch (arguments.length) {
			case 0:
				return value;
			default:
				value = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置改变事件
		 * 
		 * @param onChange
		 */
		this.onChange = function() {

			switch (arguments.length) {
			case 0:
				return onChange;
			default:
				onChange = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.button.SwitchButton}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.button.SwitchButton", "参数异常", "div(id:" + this.id()
					+ ")不存在.");
		}

		// 备份this对象
		var _this = this;

		// 参数配置
		$jQuery.switchbutton({
			// 属性
			id : this.id(),
			width : this.width(),
			height : this.height(),
			handleWidth : this.handleWidth(),
			checked : this.checked(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			reversed : this.reversed(),
			onText : this.onText(),
			offText : this.offText(),
			handleText : this.handleText(),
			value : this.value(),

			// 事件
			onChange : function(checked) {

				// 修改input值
				checked ? $("#" + _this.id()).val(_this.value()) : $("#" + _this.id()).val("");
				// 调用自定义改变事件
				_this.onChange()(checked);
			}
		});

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

		return $("#" + this.id()).switchbutton("options");
	};

	/**
	 * 改变大小
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function(param) {

		return $("#" + this.id()).switchbutton("resize", param);
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).switchbutton("disable");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).switchbutton("enable");
	};

	/**
	 * 只读
	 * 
	 * @param mode
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).switchbutton("readonly", mode);
	};

	/**
	 * 选中
	 * 
	 * @returns
	 */
	Constructor.prototype.check = function() {

		return $("#" + this.id()).switchbutton("check");
	};

	/**
	 * 取消选中
	 * 
	 * @returns
	 */
	Constructor.prototype.uncheck = function() {

		return $("#" + this.id()).switchbutton("uncheck");
	};

	/**
	 * 清除选中值
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).switchbutton("clear");
	};

	/**
	 * 重置选中值
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).switchbutton("reset");
	};

	/**
	 * 设置值
	 * 
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).switchbutton("setValue", value);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Window
 * @package core.html.easyui.window
 * @desc	窗口模板
 * @type	类
 * 
 * @date	2016年8月29日 11:24:13
 */

core.html.easyui.window.Window = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.window.Window.superClass.constructor.call(this, id);
		this.title($.fn.window.defaults.title);
		this.collapsible($.fn.window.defaults.collapsible);
		this.minimizable($.fn.window.defaults.minimizable);
		this.maximizable($.fn.window.defaults.maximizable);
		this.closable($.fn.window.defaults.closable);

		/**
		 * 属性
		 */
		/**
		 * z-index
		 */
		var zIndex = $.fn.window.defaults.zIndex;
		/**
		 * 是否可拖
		 */
		var draggable = $.fn.window.defaults.draggable;
		/**
		 * 是否可改变大小
		 */
		var resizable = $.fn.window.defaults.resizable;
		/**
		 * 是否显示影子
		 */
		var shadow = $.fn.window.defaults.shadow;
		/**
		 * 
		 */
		var inline = $.fn.window.defaults.inline;
		/**
		 * 模态窗口
		 */
		var modal = $.fn.window.defaults.modal;
		/**
		 * 是否限制窗口位置
		 */
		var constrain = $.fn.window.defaults.constrain;

		/**
		 * 获取/设置zIndex
		 * 
		 * @param zIndex
		 */
		this.zIndex = function() {

			switch (arguments.length) {
			case 0:
				return zIndex;
			default:
				zIndex = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否可拖
		 * 
		 * @param draggable
		 */
		this.draggable = function() {

			switch (arguments.length) {
			case 0:
				return draggable;
			default:
				draggable = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否可改变大小
		 * 
		 * @param resizable
		 */
		this.resizable = function() {

			switch (arguments.length) {
			case 0:
				return resizable;
			default:
				resizable = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否显示影子
		 * 
		 * @param shadow
		 */
		this.shadow = function() {

			switch (arguments.length) {
			case 0:
				return shadow;
			default:
				shadow = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param inline
		 */
		this.inline = function() {

			switch (arguments.length) {
			case 0:
				return inline;
			default:
				inline = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置模态窗口
		 * 
		 * @param modal
		 */
		this.modal = function() {

			switch (arguments.length) {
			case 0:
				return modal;
			default:
				modal = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否限制窗口位置
		 * 
		 * @param constrain
		 */
		this.constrain = function() {

			switch (arguments.length) {
			case 0:
				return constrain;
			default:
				constrain = arguments[0];
				return this;
			}
		};
	};
	// 继承面板模板
	core.lang.Class.extend(Constructor, core.html.easyui.layout.Panel);

	/**
	 * 初始化
	 * 
	 * @returns {core.html.easyui.window.Window}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.window.Window", "参数异常", "div(id:" + this.id() + ")不存在.");
		}
		// 清空内容
		$jQuery.empty();

		// 参数配置
		$jQuery.window({
			// 属性
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
			// 属性
			zIndex : this.zIndex(),
			draggable : this.draggable(),
			resizable : this.resizable(),
			shadow : this.shadow(),
			inline : this.inline(),
			modal : this.modal(),
			constrain : this.constrain(),

			// 事件
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
			onMinimize : this.onMinimize()
		});

		return this;
	};

	/**
	 * Panel继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).window("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.panel = function() {

		return $("#" + this.id()).window("panel");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.header = function() {

		return $("#" + this.id()).window("header");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.footer = function() {

		return $("#" + this.id()).window("footer");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.body = function() {

		return $("#" + this.id()).window("body");
	};

	/**
	 * 设置标题
	 * 
	 * @param title
	 * @returns
	 */
	Constructor.prototype.setTitle = function(title) {

		return $("#" + this.id()).window("setTitle", title);
	};

	/**
	 * 打开面板
	 * 
	 * @param forceOpen
	 *            是否调用回调
	 * @returns
	 */
	Constructor.prototype.open = function(forceOpen) {

		return $("#" + this.id()).window("open", forceOpen);
	};

	/**
	 * 关闭面板
	 * 
	 * @param forceClose
	 *            是否调用回调
	 * @returns
	 */
	Constructor.prototype.close = function(forceClose) {

		return $("#" + this.id()).window("close", forceClose);
	};

	/**
	 * 销毁面板
	 * 
	 * @param forceDestroy
	 *            是否调用回调
	 * @returns
	 */
	Constructor.prototype.destroy = function(forceDestroy) {

		return $("#" + this.id()).window("destroy", forceDestroy);
	};

	/**
	 * 清空面板内容
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).window("clear");
	};

	/**
	 * 刷新面板
	 * 
	 * @param href
	 *            链接
	 * @returns
	 */
	Constructor.prototype.refresh = function(href) {

		return $("#" + this.id()).window("refresh", href);
	};

	/**
	 * 改变面板窗口大小
	 * 
	 * @param options
	 * @returns
	 */
	Constructor.prototype.resize = function(options) {

		return $("#" + this.id()).window("resize", options);
	};

	/**
	 * 调整布局
	 * 
	 * @returns
	 */
	Constructor.prototype.doLayout = function() {

		return $("#" + this.id()).window("doLayout");
	};

	/**
	 * 移动面板
	 * 
	 * @param options
	 * @returns
	 */
	Constructor.prototype.move = function(options) {

		return $("#" + this.id()).window("move", options);
	};

	/**
	 * 最大化
	 * 
	 * @returns
	 */
	Constructor.prototype.maximize = function() {

		return $("#" + this.id()).window("maximize");
	};

	/**
	 * 最小化
	 * 
	 * @returns
	 */
	Constructor.prototype.minimize = function() {

		return $("#" + this.id()).window("minimize");
	};

	/**
	 * 恢复面板
	 * 
	 * @returns
	 */
	Constructor.prototype.restore = function() {

		return $("#" + this.id()).window("restore");
	};

	/**
	 * 折叠面板
	 * 
	 * @returns
	 */
	Constructor.prototype.collapse = function(animate) {

		return $("#" + this.id()).window("collapse", animate);
	};

	/**
	 * 展开面板
	 * 
	 * @returns
	 */
	Constructor.prototype.expand = function(animate) {

		return $("#" + this.id()).window("expand", animate);
	};

	/**
	 * 方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.window = function() {

		return $("#" + this.id()).window("window");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.hcenter = function() {

		return $("#" + this.id()).window("hcenter");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.vcenter = function() {

		return $("#" + this.id()).window("vcenter");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.center = function() {

		return $("#" + this.id()).window("center");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Dialog
 * @package core.html.easyui.window
 * @desc	弹出框模板
 * @type	类
 * 
 * @date	2016年8月29日 11:36:31
 */

core.html.easyui.window.Dialog = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.window.Dialog.superClass.constructor.call(this, id);
		this.title($.fn.dialog.defaults.title);
		this.collapsible($.fn.dialog.defaults.collapsible);
		this.minimizable($.fn.dialog.defaults.minimizable);
		this.maximizable($.fn.dialog.defaults.maximizable);
		this.resizable($.fn.dialog.defaults.resizable);

		/**
		 * 属性
		 */
		/**
		 * 工具条
		 */
		var toolbar = $.fn.dialog.defaults.toolbar;
		/**
		 * 按钮组
		 */
		var buttons = $.fn.dialog.defaults.buttons;

		/**
		 * 获取/设置工具条
		 * 
		 * @param toolbar
		 */
		this.toolbar = function() {

			switch (arguments.length) {
			case 0:
				return toolbar;
			default:
				toolbar = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按钮组
		 * 
		 * @param buttons
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
	};
	// 继承窗口模板
	core.lang.Class.extend(Constructor, core.html.easyui.window.Window);

	/**
	 * 初始化
	 * 
	 * @returns {core.html.easyui.window.Dialog}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.window.Dialog", "参数异常", "div(id:" + this.id() + ")不存在.");
		}
		// 清空内容
		$jQuery.empty();

		// 参数配置
		$jQuery.dialog({
			// 属性
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
			// Window继承属性
			zIndex : this.zIndex(),
			draggable : this.draggable(),
			resizable : this.resizable(),
			shadow : this.shadow(),
			inline : this.inline(),
			modal : this.modal(),
			constrain : this.constrain(),
			// 属性
			toolbar : this.toolbar(),
			buttons : this.buttons(),

			// 事件
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
			onMinimize : this.onMinimize()
		});

		return this;
	};

	/**
	 * Panel继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).dialog("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.panel = function() {

		return $("#" + this.id()).dialog("panel");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.header = function() {

		return $("#" + this.id()).dialog("header");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.footer = function() {

		return $("#" + this.id()).dialog("footer");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.body = function() {

		return $("#" + this.id()).dialog("body");
	};

	/**
	 * 设置标题
	 * 
	 * @param title
	 * @returns
	 */
	Constructor.prototype.setTitle = function(title) {

		return $("#" + this.id()).dialog("setTitle", title);
	};

	/**
	 * 打开面板
	 * 
	 * @param forceOpen
	 *            是否调用回调
	 * @returns
	 */
	Constructor.prototype.open = function(forceOpen) {

		return $("#" + this.id()).dialog("open", forceOpen);
	};

	/**
	 * 关闭面板
	 * 
	 * @param forceClose
	 *            是否调用回调
	 * @returns
	 */
	Constructor.prototype.close = function(forceClose) {

		return $("#" + this.id()).dialog("close", forceClose);
	};

	/**
	 * 销毁面板
	 * 
	 * @param forceDestroy
	 *            是否调用回调
	 * @returns
	 */
	Constructor.prototype.destroy = function(forceDestroy) {

		return $("#" + this.id()).dialog("destroy", forceDestroy);
	};

	/**
	 * 清空面板内容
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).dialog("clear");
	};

	/**
	 * 刷新面板
	 * 
	 * @param href
	 *            链接
	 * @returns
	 */
	Constructor.prototype.refresh = function(href) {

		return $("#" + this.id()).dialog("refresh", href);
	};

	/**
	 * 改变面板窗口大小
	 * 
	 * @param options
	 * @returns
	 */
	Constructor.prototype.resize = function(options) {

		return $("#" + this.id()).dialog("resize", options);
	};

	/**
	 * 调整布局
	 * 
	 * @returns
	 */
	Constructor.prototype.doLayout = function() {

		return $("#" + this.id()).dialog("doLayout");
	};

	/**
	 * 移动面板
	 * 
	 * @param options
	 * @returns
	 */
	Constructor.prototype.move = function(options) {

		return $("#" + this.id()).dialog("move", options);
	};

	/**
	 * 最大化
	 * 
	 * @returns
	 */
	Constructor.prototype.maximize = function() {

		return $("#" + this.id()).dialog("maximize");
	};

	/**
	 * 最小化
	 * 
	 * @returns
	 */
	Constructor.prototype.minimize = function() {

		return $("#" + this.id()).dialog("minimize");
	};

	/**
	 * 恢复面板
	 * 
	 * @returns
	 */
	Constructor.prototype.restore = function() {

		return $("#" + this.id()).dialog("restore");
	};

	/**
	 * 折叠面板
	 * 
	 * @returns
	 */
	Constructor.prototype.collapse = function(animate) {

		return $("#" + this.id()).dialog("collapse", animate);
	};

	/**
	 * 展开面板
	 * 
	 * @returns
	 */
	Constructor.prototype.expand = function(animate) {

		return $("#" + this.id()).dialog("expand", animate);
	};

	/**
	 * Window继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.window = function() {

		return $("#" + this.id()).dialog("window");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.hcenter = function() {

		return $("#" + this.id()).dialog("hcenter");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.vcenter = function() {

		return $("#" + this.id()).dialog("vcenter");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.center = function() {

		return $("#" + this.id()).dialog("center");
	};

	/**
	 * 方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.dialog = function() {

		return $("#" + this.id()).dialog("dialog");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Messager
 * @package core.html.easyui.window
 * @desc	消息
 * @type	类
 * 
 * @date	2016年8月29日 14:10:46
 */

core.html.easyui.window.Messager = (function() {

	/**
	 * 消息
	 */
	var messager;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 提示框
	 * 
	 * @param options
	 */
	Constructor.prototype.show = function(options) {

		$.messager.show(options);
	};

	/**
	 * 提示框
	 * 
	 * @param title{String}
	 *            标题头
	 * @param msg{String}
	 *            信息
	 * @param time{Number}
	 *            显示时间
	 */
	Constructor.prototype.showMessage = function(title, msg, time) {

		title = title === null ? "温馨提示" : title;
		title = title === "" ? "&nbsp;" : title;

		time = time === null || time === "" ? 1200 : time;

		this.show({
			title : title,
			msg : msg,
			timeout : time,
			showType : "show",
			style : {
				right : "",
				top : document.body.scrollTop + document.documentElement.scrollTop,
				bottom : ""
			}
		});
	};

	/**
	 * 提示成功
	 */
	Constructor.prototype.showSuccess = function() {

		this.showMessage(null, "操作成功!", null);
	};

	/**
	 * 提示失败
	 */
	Constructor.prototype.showFail = function() {

		this.showMessage(null, "操作失败!", null);
	};

	/**
	 * 弹出框
	 * 
	 * @param title{String}
	 *            标题
	 * @param msg{String}
	 *            信息
	 * @param icon{String}
	 *            图标
	 * @param fn{function}
	 *            回调
	 */
	Constructor.prototype.alert = function(title, msg, icon, fn) {

		title = title === null ? "警告" : title;
		title = title === "" ? "&nbsp;" : title;

		icon = icon === null ? "error" : icon;

		$.messager.alert(title, msg, icon, fn);
	};

	/**
	 * 弹出异常
	 * 
	 * @param e{Object}
	 *            异常对象
	 * @param attr{String}
	 *            异常对象属性
	 */
	Constructor.prototype.alertException = function(e, attr) {

		this.alert(null, e[attr === undefined ? "responseText" : attr], null);
	};

	/**
	 * 确认框
	 * 
	 * @param title{String}
	 *            标题头
	 * @param msg{String}
	 *            信息
	 * @param fn{function}
	 *            回调
	 */
	Constructor.prototype.confirm = function(title, msg, fn) {

		title = title === null ? "温馨提示" : title;
		title = title === "" ? "&nbsp;" : title;

		$.messager.confirm(title, msg, fn);
	};

	Constructor.prototype.prompt = function(title, msg, fn) {

		title = title === null ? "温馨提示" : title;
		title = title === "" ? "&nbsp;" : title;

		$.messager.prompt(title, msg, fn);
	};

	/**
	 * 进度条
	 * 
	 * @param obj
	 */
	Constructor.prototype.progress = function(obj) {

		$.messager.progress(obj);
	};

	/**
	 * 进度条
	 * 
	 * @param title
	 *            标题
	 * @param msg
	 *            信息
	 */
	Constructor.prototype.progressMessage = function(title, msg) {

		title = title === null ? "温馨提示" : title;
		title = title === "" ? "&nbsp;" : title;

		this.progress({
			title : title,
			msg : msg
		});
	};

	return {

		/**
		 * 获取消息实例
		 * 
		 * @returns {core.html.easyui.window.Messager}
		 */
		getInstance : function() {

			if (messager == null) {
				messager = new Constructor();
			}

			return messager;
		}
	};
})();
/**
 * @name	Datagrid
 * @package core.html.easyui.datagrid
 * @desc	数据列表模板
 * @type	类型
 * 
 * @date	2016年8月26日 16:51:16
 */

core.html.easyui.datagrid.DataGrid = (function() {

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

		// 调用父类构造
		core.html.easyui.datagrid.DataGrid.superClass.constructor.call(this, id);
		this.loader($.fn.datagrid.defaults.loader);

		/**
		 * 属性
		 */
		/**
		 * 列
		 */
		var columns = $.fn.datagrid.defaults.columns;
		/**
		 * 冻结列
		 */
		var frozenColumns = $.fn.datagrid.defaults.frozenColumns;
		/**
		 * 列宽自适应
		 */
		var fitColumns = $.fn.datagrid.defaults.fitColumns;
		/**
		 * 
		 */
		var resizeHandle = $.fn.datagrid.defaults.resizeHandle;
		/**
		 * 行高自适应
		 */
		var autoRowHeight = $.fn.datagrid.defaults.autoRowHeight;
		/**
		 * 工具条
		 */
		var toolbar = $.fn.datagrid.defaults.toolbar;
		/**
		 * 隔行变色
		 */
		var striped = $.fn.datagrid.defaults.striped;
		/**
		 * 禁止文字自动换行
		 */
		var nowrap = $.fn.datagrid.defaults.nowrap;
		/**
		 * id字段
		 */
		var idField = $.fn.datagrid.defaults.idField;
		/**
		 * 数据URL
		 */
		var url = $.fn.datagrid.defaults.url;
		/**
		 * 数据
		 */
		var data = $.fn.datagrid.defaults.data;
		/**
		 * 数据加载等待提示
		 */
		var loadMsg = $.fn.datagrid.defaults.loadMsg;
		/**
		 * 
		 */
		var emptyMsg = $.fn.datagrid.defaults.emptyMsg;
		/**
		 * 添加页脚工具栏
		 */
		var pagination = $.fn.datagrid.defaults.pagination;
		/**
		 * 显示行号
		 */
		var rownumbers = $.fn.datagrid.defaults.rownumbers;
		/**
		 * 仅能选中单行
		 */
		var singleSelect = $.fn.datagrid.defaults.singleSelect;
		/**
		 * ctrl键选中
		 */
		var ctrlSelect = $.fn.datagrid.defaults.ctrlSelect;
		/**
		 * check时选中
		 */
		var checkOnSelect = $.fn.datagrid.defaults.checkOnSelect;
		/**
		 * 选中时check
		 */
		var selectOnCheck = $.fn.datagrid.defaults.selectOnCheck;
		/**
		 * 分页工具条位置
		 */
		var pagePosition = $.fn.datagrid.defaults.pagePosition;
		/**
		 * 默认页码
		 */
		var pageNumber = $.fn.datagrid.defaults.pageNumber;
		/**
		 * 分页数
		 */
		var pageSize = cookie.get("coreHtmlEasyuiDatagridDataGridPageSize") == null ? $.fn.datagrid.defaults.pageSize
				: cookie.get("coreHtmlEasyuiDatagridDataGridPageSize");
		/**
		 * 分页数可选列表
		 */
		var pageList = $.fn.datagrid.defaults.pageList;
		/**
		 * 排序字段
		 */
		var sortName = $.fn.datagrid.defaults.sortName;
		/**
		 * 排序方式
		 */
		var sortOrder = $.fn.datagrid.defaults.sortOrder;
		/**
		 * 
		 */
		var multiSort = $.fn.datagrid.defaults.multiSort;
		/**
		 * 向后台发送排序条件
		 */
		var remoteSort = $.fn.datagrid.defaults.remoteSort;
		/**
		 * 显示标头
		 */
		var showHeader = $.fn.datagrid.defaults.showHeader;
		/**
		 * 显示脚
		 */
		var showFooter = $.fn.datagrid.defaults.showFooter;
		/**
		 * 
		 */
		var scrollbarSize = $.fn.datagrid.defaults.scrollbarSize;
		/**
		 * 行号宽度
		 */
		var rownumberWidth = $.fn.datagrid.defaults.rownumberWidth;
		/**
		 * 编辑框高度
		 */
		var editorHeight = $.fn.datagrid.defaults.editorHeight;
		/**
		 * 行样式
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns {String} css样式
		 */
		var rowStyler = $.fn.datagrid.defaults.rowStyler;
		/**
		 * 数据加载过滤
		 * 
		 * @param data{Object}
		 *            原始数据
		 * @returns {Object} 过滤后数据
		 */
		var loadFilter = $.fn.datagrid.defaults.loadFilter;
		/**
		 * 编辑
		 */
		var editors = $.fn.datagrid.defaults.editors;
		/**
		 * 展示
		 */
		var view = $.fn.datagrid.defaults.view;

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
		var onLoadSuccess = $.fn.datagrid.defaults.onLoadSuccess;
		/**
		 * 行单击事件
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onClickRow = $.fn.datagrid.defaults.onClickRow;
		/**
		 * 行双击事件
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onDblClickRow = $.fn.datagrid.defaults.onDblClickRow;
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
		var onClickCell = $.fn.datagrid.defaults.onClickCell;
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
		var onDblClickCell = $.fn.datagrid.defaults.onDblClickCell;
		/**
		 * 排序前
		 * 
		 * @param sort{Object}
		 *            排序字段
		 * @param order{String}
		 *            排序方式
		 * @returns
		 */
		var onBeforeSortColumn = $.fn.datagrid.defaults.onBeforeSortColumn;
		/**
		 * 排序
		 * 
		 * @param sort{Object}
		 *            排序字段
		 * @param order{String}
		 *            排序方式
		 * @returns
		 */
		var onSortColumn = $.fn.datagrid.defaults.onSortColumn;
		/**
		 * 改变列宽
		 * 
		 * @param field{Object}
		 *            字段
		 * @param width{Number}
		 *            宽度
		 * @returns
		 */
		var onResizeColumn = $.fn.datagrid.defaults.onResizeColumn;
		/**
		 * 选中前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onBeforeSelect = $.fn.datagrid.defaults.onBeforeSelect;
		/**
		 * 选中
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onSelect = $.fn.datagrid.defaults.onSelect;
		/**
		 * 取消选中前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onBeforeUnselect = $.fn.datagrid.defaults.onBeforeUnselect;
		/**
		 * 取消选中
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onUnselect = $.fn.datagrid.defaults.onUnselect;
		/**
		 * 选中所有时
		 * 
		 * @param rows{Array}
		 *            选中的行对象集合
		 * @returns
		 */
		var onSelectAll = $.fn.datagrid.defaults.onSelectAll;
		/**
		 * 取消选中所有时
		 * 
		 * @param rows{Array}
		 *            取消选中的行对象集合
		 * @returns
		 */
		var onUnselectAll = $.fn.datagrid.defaults.onUnselectAll;
		/**
		 * 勾选前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onBeforeCheck = $.fn.datagrid.defaults.onBeforeCheck;
		/**
		 * 勾选
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onCheck = $.fn.datagrid.defaults.onCheck;
		/**
		 * 取消勾选前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onBeforeUncheck = $.fn.datagrid.defaults.onBeforeUncheck;
		/**
		 * 取消勾选
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onUncheck = $.fn.datagrid.defaults.onUncheck;
		/**
		 * 勾选所有
		 * 
		 * @param rows{Array}
		 *            行对象集合
		 * @returns
		 */
		var onCheckAll = $.fn.datagrid.defaults.onCheckAll;
		/**
		 * 取消勾选所有
		 * 
		 * @param rows{Array}
		 *            行对象集合
		 * @returns
		 */
		var onUncheckAll = $.fn.datagrid.defaults.onUncheckAll;
		/**
		 * 编辑前
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onBeforeEdit = $.fn.datagrid.defaults.onBeforeEdit;
		/**
		 * 编辑
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onBeginEdit = $.fn.datagrid.defaults.onBeginEdit;
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
		var onEndEdit = $.fn.datagrid.defaults.onEndEdit;
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
		var onAfterEdit = $.fn.datagrid.defaults.onAfterEdit;
		/**
		 * 取消编辑
		 * 
		 * @param index{Number}
		 *            行号
		 * @param row{Object}
		 *            行对象
		 * @returns
		 */
		var onCancelEdit = $.fn.datagrid.defaults.onCancelEdit;
		/**
		 * 标题头右键点击
		 * 
		 * @param e{Object}
		 * @param field{Object}
		 *            字段
		 * @returns
		 */
		var onHeaderContextMenu = $.fn.datagrid.defaults.onHeaderContextMenu;
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
		var onRowContextMenu = $.fn.datagrid.defaults.onRowContextMenu;

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
		 * 获取/设置列宽自适应
		 * 
		 * @param fitColumns
		 */
		this.fitColumns = function() {

			switch (arguments.length) {
			case 0:
				return fitColumns;
			default:
				fitColumns = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param resizeHandle
		 */
		this.resizeHandle = function() {

			switch (arguments.length) {
			case 0:
				return resizeHandle;
			default:
				resizeHandle = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置行高自适应
		 * 
		 * @param autoRowHeight
		 */
		this.autoRowHeight = function() {

			switch (arguments.length) {
			case 0:
				return autoRowHeight;
			default:
				autoRowHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置工具条
		 * 
		 * @param toolbar
		 */
		this.toolbar = function() {

			switch (arguments.length) {
			case 0:
				return toolbar;
			default:
				toolbar = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置隔行变色
		 * 
		 * @param striped
		 */
		this.striped = function() {

			switch (arguments.length) {
			case 0:
				return striped;
			default:
				striped = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置禁止文字自动换行
		 * 
		 * @param nowrap
		 */
		this.nowrap = function() {

			switch (arguments.length) {
			case 0:
				return nowrap;
			default:
				nowrap = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置id字段
		 * 
		 * @param idField
		 */
		this.idField = function() {

			switch (arguments.length) {
			case 0:
				return idField;
			default:
				idField = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置数据URL
		 * 
		 * @param url
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
		 * 获取/设置数据
		 * 
		 * @param data
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
		 * 获取/设置数据加载等待提示
		 * 
		 * @param loadMsg
		 */
		this.loadMsg = function() {

			switch (arguments.length) {
			case 0:
				return loadMsg;
			default:
				loadMsg = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param emptyMsg
		 */
		this.emptyMsg = function() {

			switch (arguments.length) {
			case 0:
				return emptyMsg;
			default:
				emptyMsg = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置添加页脚工具栏
		 * 
		 * @param pagination
		 */
		this.pagination = function() {

			switch (arguments.length) {
			case 0:
				return pagination;
			default:
				pagination = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示行号
		 * 
		 * @param rownumbers
		 */
		this.rownumbers = function() {

			switch (arguments.length) {
			case 0:
				return rownumbers;
			default:
				rownumbers = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置仅能选中单行
		 * 
		 * @param singleSelect
		 */
		this.singleSelect = function() {

			switch (arguments.length) {
			case 0:
				return singleSelect;
			default:
				singleSelect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置ctrl键选中
		 * 
		 * @param ctrlSelect
		 */
		this.ctrlSelect = function() {

			switch (arguments.length) {
			case 0:
				return ctrlSelect;
			default:
				ctrlSelect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置check时选中
		 * 
		 * @param checkOnSelect
		 */
		this.checkOnSelect = function() {

			switch (arguments.length) {
			case 0:
				return checkOnSelect;
			default:
				checkOnSelect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置选中时check
		 * 
		 * @param selectOnCheck
		 */
		this.selectOnCheck = function() {

			switch (arguments.length) {
			case 0:
				return selectOnCheck;
			default:
				selectOnCheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置分页工具条位置
		 * 
		 * @param pagePosition
		 */
		this.pagePosition = function() {

			switch (arguments.length) {
			case 0:
				return pagePosition;
			default:
				pagePosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置默认页码
		 * 
		 * @param pageNumber
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
		 * 获取/设置分页数
		 * 
		 * @param pageSize
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
		 * 获取/设置分页数可选列表
		 * 
		 * @param pageList
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
		 * 获取/设置排序字段
		 * 
		 * @param sortName
		 */
		this.sortName = function() {

			switch (arguments.length) {
			case 0:
				return sortName;
			default:
				sortName = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置排序方式
		 * 
		 * @param sortOrder
		 */
		this.sortOrder = function() {

			switch (arguments.length) {
			case 0:
				return sortOrder;
			default:
				sortOrder = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param multiSort
		 */
		this.multiSort = function() {

			switch (arguments.length) {
			case 0:
				return multiSort;
			default:
				multiSort = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置向后台发送排序条件
		 * 
		 * @param remoteSort
		 */
		this.remoteSort = function() {

			switch (arguments.length) {
			case 0:
				return remoteSort;
			default:
				remoteSort = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示标头
		 * 
		 * @param showHeader
		 */
		this.showHeader = function() {

			switch (arguments.length) {
			case 0:
				return showHeader;
			default:
				showHeader = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示脚
		 * 
		 * @param showFooter
		 */
		this.showFooter = function() {

			switch (arguments.length) {
			case 0:
				return showFooter;
			default:
				showFooter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param scrollbarSize
		 */
		this.scrollbarSize = function() {

			switch (arguments.length) {
			case 0:
				return scrollbarSize;
			default:
				scrollbarSize = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置行号宽度
		 * 
		 * @param rownumberWidth
		 */
		this.rownumberWidth = function() {

			switch (arguments.length) {
			case 0:
				return rownumberWidth;
			default:
				rownumberWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置编辑框高度
		 * 
		 * @param editorHeight
		 */
		this.editorHeight = function() {

			switch (arguments.length) {
			case 0:
				return editorHeight;
			default:
				editorHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置行样式
		 * 
		 * @param rowStyler
		 */
		this.rowStyler = function() {

			switch (arguments.length) {
			case 0:
				return rowStyler;
			default:
				rowStyler = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置数据加载过滤
		 * 
		 * @param loadFilter
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
		 * 获取/设置编辑
		 * 
		 * @param editors
		 */
		this.editors = function() {

			switch (arguments.length) {
			case 0:
				return editors;
			default:
				editors = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置展示
		 * 
		 * @param view
		 */
		this.view = function() {

			switch (arguments.length) {
			case 0:
				return view;
			default:
				view = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置数据加载成功事件
		 * 
		 * @param onLoadSuccess
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
		 * 获取/设置行单击事件
		 * 
		 * @param onClickRow
		 */
		this.onClickRow = function() {

			switch (arguments.length) {
			case 0:
				return onClickRow;
			default:
				onClickRow = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置行双击事件
		 * 
		 * @param onDblClickRow
		 */
		this.onDblClickRow = function() {

			switch (arguments.length) {
			case 0:
				return onDblClickRow;
			default:
				onDblClickRow = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置单元格单击事件
		 * 
		 * @param onClickCell
		 */
		this.onClickCell = function() {

			switch (arguments.length) {
			case 0:
				return onClickCell;
			default:
				onClickCell = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置单元格双击事件
		 * 
		 * @param onDblClickCell
		 */
		this.onDblClickCell = function() {

			switch (arguments.length) {
			case 0:
				return onDblClickCell;
			default:
				onDblClickCell = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置排序前
		 * 
		 * @param onBeforeSortColumn
		 */
		this.onBeforeSortColumn = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeSortColumn;
			default:
				onBeforeSortColumn = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置排序
		 * 
		 * @param onSortColumn
		 */
		this.onSortColumn = function() {

			switch (arguments.length) {
			case 0:
				return onSortColumn;
			default:
				onSortColumn = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置改变列宽
		 * 
		 * @param onResizeColumn
		 */
		this.onResizeColumn = function() {

			switch (arguments.length) {
			case 0:
				return onResizeColumn;
			default:
				onResizeColumn = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置选中前
		 * 
		 * @param onBeforeSelect
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
		 * 获取/设置选中
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
		 * 获取/设置取消选中前
		 * 
		 * @param onBeforeUnselect
		 */
		this.onBeforeUnselect = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeUnselect;
			default:
				onBeforeUnselect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置取消选中
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
		 * 获取/设置选中所有时
		 * 
		 * @param onSelectAll
		 */
		this.onSelectAll = function() {

			switch (arguments.length) {
			case 0:
				return onSelectAll;
			default:
				onSelectAll = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置取消选中所有时
		 * 
		 * @param onUnselectAll
		 */
		this.onUnselectAll = function() {

			switch (arguments.length) {
			case 0:
				return onUnselectAll;
			default:
				onUnselectAll = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置勾选前
		 * 
		 * @param onBeforeCheck
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
		 * 获取/设置勾选
		 * 
		 * @param onCheck
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
		 * 获取/设置取消勾选前
		 * 
		 * @param onBeforeUncheck
		 */
		this.onBeforeUncheck = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeUncheck;
			default:
				onBeforeUncheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置取消勾选
		 * 
		 * @param onUncheck
		 */
		this.onUncheck = function() {

			switch (arguments.length) {
			case 0:
				return onUncheck;
			default:
				onUncheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置勾选所有
		 * 
		 * @param onCheckAll
		 */
		this.onCheckAll = function() {

			switch (arguments.length) {
			case 0:
				return onCheckAll;
			default:
				onCheckAll = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置取消勾选所有
		 * 
		 * @param onUncheckAll
		 */
		this.onUncheckAll = function() {

			switch (arguments.length) {
			case 0:
				return onUncheckAll;
			default:
				onUncheckAll = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置编辑前
		 * 
		 * @param onBeforeEdit
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
		 * 获取/设置编辑
		 * 
		 * @param onBeginEdit
		 */
		this.onBeginEdit = function() {

			switch (arguments.length) {
			case 0:
				return onBeginEdit;
			default:
				onBeginEdit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置结束编辑
		 * 
		 * @param onEndEdit
		 */
		this.onEndEdit = function() {

			switch (arguments.length) {
			case 0:
				return onEndEdit;
			default:
				onEndEdit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置编辑后
		 * 
		 * @param onAfterEdit
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
		 * 获取/设置取消编辑
		 * 
		 * @param onCancelEdit
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

		/**
		 * 获取/设置标题头右键点击
		 * 
		 * @param onHeaderContextMenu
		 */
		this.onHeaderContextMenu = function() {

			switch (arguments.length) {
			case 0:
				return onHeaderContextMenu;
			default:
				onHeaderContextMenu = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置行右键点击事件
		 * 
		 * @param onRowContextMenu
		 */
		this.onRowContextMenu = function() {

			switch (arguments.length) {
			case 0:
				return onRowContextMenu;
			default:
				onRowContextMenu = arguments[0];
				return this;
			}
		};
	};
	// 继承面板模板
	core.lang.Class.extend(Constructor, core.html.easyui.layout.Panel);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.datagrid.Datagrid}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.datagrid.Datagrid", "参数异常", "div(id:" + this.id() + ")不存在.");
		}
		// 清空内容
		$jQuery.empty();

		// 参数配置
		$jQuery.datagrid({
			// 属性
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
			// 属性
			columns : this.columns(),
			frozenColumns : this.frozenColumns(),
			fitColumns : this.fitColumns(),
			resizeHandle : this.resizeHandle(),
			autoRowHeight : this.autoRowHeight(),
			toolbar : this.toolbar(),
			striped : this.striped(),
			nowrap : this.nowrap(),
			idField : this.idField(),
			url : this.url(),
			data : this.data(),
			loadMsg : this.loadMsg(),
			emptyMsg : this.emptyMsg(),
			pagination : this.pagination(),
			rownumbers : this.rownumbers(),
			singleSelect : this.singleSelect(),
			ctrlSelect : this.ctrlSelect(),
			checkOnSelect : this.checkOnSelect(),
			selectOnCheck : this.selectOnCheck(),
			pagePosition : this.pagePosition(),
			pageNumber : this.pageNumber(),
			pageSize : this.pageSize(),
			pageList : this.pageList(),
			sortName : this.sortName(),
			sortOrder : this.sortOrder(),
			multiSort : this.multiSort(),
			remoteSort : this.remoteSort(),
			showHeader : this.showHeader(),
			showFooter : this.showFooter(),
			scrollbarSize : this.scrollbarSize(),
			rownumberWidth : this.rownumberWidth(),
			editorHeight : this.editorHeight(),
			rowStyler : this.rowStyler(),
			loadFilter : this.loadFilter(),
			editors : this.editors(),
			view : this.view(),

			// 事件
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
			// 事件
			onLoadSuccess : this.onLoadSuccess(),
			onClickRow : this.onClickRow(),
			onDblClickRow : this.onDblClickRow(),
			onClickCell : this.onClickCell(),
			onDblClickCell : this.onDblClickCell(),
			onBeforeSortColumn : this.onBeforeSortColumn(),
			onSortColumn : this.onSortColumn(),
			onResizeColumn : this.onResizeColumn(),
			onBeforeSelect : this.onBeforeSelect(),
			onSelect : this.onSelect(),
			onBeforeUnselect : this.onBeforeUnselect(),
			onUnselect : this.onUnselect(),
			onSelectAll : this.onSelectAll(),
			onUnselectAll : this.onUnselectAll(),
			onBeforeCheck : this.onBeforeCheck(),
			onCheck : this.onCheck(),
			onBeforeUncheck : this.onBeforeUncheck(),
			onUncheck : this.onUncheck(),
			onCheckAll : this.onCheckAll(),
			onUncheckAll : this.onUncheckAll(),
			onBeforeEdit : this.onBeforeEdit(),
			onBeginEdit : this.onBeginEdit(),
			onEndEdit : this.onEndEdit(),
			onAfterEdit : this.onAfterEdit(),
			onCancelEdit : this.onCancelEdit(),
			onHeaderContextMenu : this.onHeaderContextMenu(),
			onRowContextMenu : this.onRowContextMenu()
		});

		$(this.getPager()).pagination({
			onChangePageSize : function(pageSize) {
				cookie.set("coreHtmlEasyuiDatagridDataGridPageSize", pageSize);
			}
		});
	};

	/**
	 * 方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).datagrid("options");
	};

	/**
	 * 获取页面对象
	 * 
	 * @returns {Object}
	 */
	Constructor.prototype.getPager = function() {

		return $("#" + this.id()).datagrid("getPager");
	};

	/**
	 * 获取面板对象
	 * 
	 * @returns {Object}
	 */
	Constructor.prototype.getPanel = function() {

		return $("#" + this.id()).datagrid("getPanel");
	};

	/**
	 * 获取列字段
	 * 
	 * @param frozen{Object}
	 * @returns {Object}
	 */
	Constructor.prototype.getColumnFields = function(frozen) {

		return $("#" + this.id()).datagrid("getColumnFields", frozen);
	};

	/**
	 * 获取列属性
	 * 
	 * @param field{Object}
	 * @returns {Object}
	 */
	Constructor.prototype.getColumnOption = function(field) {

		return $("#" + this.id()).datagrid("getColumnOption", field);
	};

	/**
	 * 调整大小
	 * 
	 * @param param{Object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.resize = function(param) {

		return $("#" + this.id()).datagrid("resize", param);
	};

	/**
	 * 重新加载数据
	 * 
	 * @param param{Object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.load = function(param) {

		return $("#" + this.id()).datagrid("load", param);
	};

	/**
	 * 重新加载数据,且停留在当前页面
	 * 
	 * @param param{Object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.reload = function(param) {

		return $("#" + this.id()).datagrid("reload", param);
	};

	/**
	 * 重载页脚
	 * 
	 * @param footer{Object}
	 * @returns
	 */
	Constructor.prototype.reloadFooter = function(footer) {

		return $("#" + this.id()).datagrid("reloadFooter", footer);
	};

	/**
	 * 显示载入中
	 * 
	 * @returns
	 */
	Constructor.prototype.loading = function() {

		return $("#" + this.id()).datagrid("loading");
	};

	/**
	 * 隐藏载入中
	 * 
	 * @returns
	 */
	Constructor.prototype.loaded = function() {

		return $("#" + this.id()).datagrid("loaded");
	};

	/**
	 * 列宽自适应
	 * 
	 * @returns
	 */
	Constructor.prototype.fitColumns = function() {

		return $("#" + this.id()).datagrid("fitColumns");
	};

	/**
	 * 固定列宽
	 * 
	 * @param field{Object}
	 *            字段
	 * @returns
	 */
	Constructor.prototype.fixColumnSize = function(field) {

		return $("#" + this.id()).datagrid("fixColumnSize", field);
	};

	/**
	 * 固定指定列高度
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.fixRowHeight = function(index) {

		return $("#" + this.id()).datagrid("fixRowHeight", index);
	};

	/**
	 * 冻结指定行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.freezeRow = function(index) {

		return $("#" + this.id()).datagrid("freezeRow", index);
	};

	/**
	 * 列宽自适应
	 * 
	 * @param field{Object}
	 *            列字段
	 * @returns
	 */
	Constructor.prototype.autoSizeColumn = function(field) {

		return $("#" + this.id()).datagrid("autoSizeColumn", field);
	};

	/**
	 * 加载数据
	 * 
	 * @param data{Object}
	 *            需要加载的数据
	 * @returns
	 */
	Constructor.prototype.loadData = function(data) {

		return $("#" + this.id()).datagrid("loadData", data);
	};

	/**
	 * 获取当前数据
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getData = function() {

		return $("#" + this.id()).datagrid("getData");
	};

	/**
	 * 获取所有行
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getRows = function() {

		return $("#" + this.id()).datagrid("getRows");
	};

	/**
	 * 获取所有行
	 * 
	 * @returns
	 */
	Constructor.prototype.getFooterRows = function() {

		return $("#" + this.id()).datagrid("getFooterRows");
	};

	/**
	 * 获取指定行号
	 * 
	 * @param row{Object}
	 *            行对象
	 * @returns {Number}
	 */
	Constructor.prototype.getRowIndex = function(row) {

		return $("#" + this.id()).datagrid("getRowIndex", row);
	};

	/**
	 * 获取勾选行
	 * 
	 * @returns {Object}
	 */
	Constructor.prototype.getChecked = function() {

		return $("#" + this.id()).datagrid("getChecked");
	};

	/**
	 * 获取选中节点
	 * 
	 * @returns {Object}
	 */
	Constructor.prototype.getSelected = function() {

		return $("#" + this.id()).datagrid("getSelected");
	};

	/**
	 * 获取所有选中行
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getSelections = function() {

		return $("#" + this.id()).datagrid("getSelections");
	};

	/**
	 * 清除所有选中行
	 * 
	 * @returns
	 */
	Constructor.prototype.clearSelections = function() {

		return $("#" + this.id()).datagrid("clearSelections");
	};

	/**
	 * 清除所有勾选的行
	 * 
	 * @returns
	 */
	Constructor.prototype.clearChecked = function() {

		return $("#" + this.id()).datagrid("clearChecked");
	};

	/**
	 * 滚动至指定行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.scrollTo = function(index) {

		return $("#" + this.id()).datagrid("scrollTo", index);
	};

	/**
	 * 跳至某页
	 * 
	 * @param param{Object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.gotoPage = function(param) {

		return $("#" + this.id()).datagrid("gotoPage", param);
	};

	/**
	 * 高亮行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.highlightRow = function(index) {

		return $("#" + this.id()).datagrid("highlightRow", index);
	};

	/**
	 * 选中所有行
	 * 
	 * @returns
	 */
	Constructor.prototype.selectAll = function() {

		return $("#" + this.id()).datagrid("selectAll");
	};

	/**
	 * 取消选中所有行
	 * 
	 * @returns
	 */
	Constructor.prototype.unselectAll = function() {

		return $("#" + this.id()).datagrid("unselectAll");
	};

	/**
	 * 选中行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.selectRow = function(index) {

		return $("#" + this.id()).datagrid("selectRow", index);
	};

	/**
	 * 通过ID选中行
	 * 
	 * @param idValue{String}
	 *            id值
	 * @returns
	 */
	Constructor.prototype.selectRecord = function(idValue) {

		return $("#" + this.id()).datagrid("selectRecord", idValue);
	};

	/**
	 * 取消选中行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.unselectRow = function(index) {

		return $("#" + this.id()).datagrid("unselectRow", index);
	};

	/**
	 * 勾选所有行
	 * 
	 * @returns
	 */
	Constructor.prototype.checkAll = function() {

		return $("#" + this.id()).datagrid("checkAll");
	};

	/**
	 * 取消勾选所有行
	 * 
	 * @returns
	 */
	Constructor.prototype.uncheckAll = function() {

		return $("#" + this.id()).datagrid("uncheckAll");
	};

	/**
	 * 勾选行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.checkRow = function(index) {

		return $("#" + this.id()).datagrid("checkRow", index);
	};

	/**
	 * 取消勾选行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.uncheckRow = function(index) {

		return $("#" + this.id()).datagrid("uncheckRow", index);
	};

	/**
	 * 编辑行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.beginEdit = function(index) {

		return $("#" + this.id()).datagrid("beginEdit", index);
	};

	/**
	 * 结束编辑行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.endEdit = function(index) {

		return $("#" + this.id()).datagrid("endEdit", index);
	};

	/**
	 * 取消编辑行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.cancelEdit = function(index) {

		return $("#" + this.id()).datagrid("cancelEdit", index);
	};

	/**
	 * 获取行所有编辑器
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.getEditors = function(index) {

		return $("#" + this.id()).datagrid("getEditors", index);
	};

	/**
	 * 获取行中某列编辑器
	 * 
	 * @param options{Object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.getEditor = function(options) {

		return $("#" + this.id()).datagrid("getEditor", options);
	};

	/**
	 * 刷新行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.refreshRow = function(index) {

		return $("#" + this.id()).datagrid("refreshRow", index);
	};

	/**
	 * 验证行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.validateRow = function(index) {

		return $("#" + this.id()).datagrid("validateRow", index);
	};

	/**
	 * 更新行
	 * 
	 * @param param{Object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.updateRow = function(param) {

		return $("#" + this.id()).datagrid("updateRow", param);
	};

	/**
	 * 添加行
	 * 
	 * @param row{Object}
	 *            行对象
	 * @returns
	 */
	Constructor.prototype.appendRow = function(row) {

		return $("#" + this.id()).datagrid("appendRow", row);
	};

	/**
	 * 插入行
	 * 
	 * @param param{Object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.insertRow = function(param) {

		return $("#" + this.id()).datagrid("insertRow", param);
	};

	/**
	 * 删除行
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.deleteRow = function(index) {

		return $("#" + this.id()).datagrid("deleteRow", index);
	};

	/**
	 * 获取修改行
	 * 
	 * @param type{Object}
	 *            类型
	 * @returns
	 */
	Constructor.prototype.getChanges = function(type) {

		return $("#" + this.id()).datagrid("getChanges", type);
	};

	/**
	 * 提交所有修改行
	 * 
	 * @returns
	 */
	Constructor.prototype.acceptChanges = function() {

		return $("#" + this.id()).datagrid("acceptChanges");
	};

	/**
	 * 回滚修改行
	 * 
	 * @returns
	 */
	Constructor.prototype.rejectChanges = function() {

		return $("#" + this.id()).datagrid("rejectChanges");
	};

	/**
	 * 合并单元格
	 * 
	 * @param options{Object}
	 * @returns
	 */
	Constructor.prototype.mergeCells = function(options) {

		return $("#" + this.id()).datagrid("mergeCells", options);
	};

	/**
	 * 显示列
	 * 
	 * @param field{Object}
	 *            列字段
	 * @returns
	 */
	Constructor.prototype.showColumn = function(field) {

		return $("#" + this.id()).datagrid("showColumn", field);
	};

	/**
	 * 隐藏列
	 * 
	 * @param field{Object}
	 *            列字段
	 * @returns
	 */
	Constructor.prototype.hideColumn = function(field) {

		return $("#" + this.id()).datagrid("hideColumn", field);
	};

	/**
	 * 排序
	 * 
	 * @param param{Object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.sort = function(param) {

		return $("#" + this.id()).datagrid("sort", param);
	};

	/** ==========扩展方法========== */
	/**
	 * 设置宽度
	 * 
	 * @param width{Number}
	 *            宽度
	 * @returns
	 */
	Constructor.prototype.setWidth = function(width) {

		return this.resize({
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
	Constructor.prototype.setHeight = function(height) {

		return this.resize({
			height : height
		});
	};

	/**
	 * 获取当前页数据条数
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getCurrentDataNum = function() {

		var data = this.getData();
		return data.rows.length;
	}

	/**
	 * 获取记录总条数
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getTotalDataNum = function() {

		var data = this.getData();
		return data.total;
	}

	/**
	 * 获取分页数
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getPageSize = function() {

		var options = $(this.getPager()).pagination("options");
		return options.pageSize;
	}

	/**
	 * 获取总页数
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getPageNum = function() {

		var options = $(this.getPager()).pagination("options");
		var total = options.total;
		var max = Math.ceil(total / options.pageSize);
		return max;
	}

	/**
	 * 获取当前页码
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getCurrentPageNum = function() {

		var options = $(this.getPager()).pagination("options");
		return options.pageNumber;
	}

	/**
	 * 翻至前一页
	 * 
	 * @returns
	 */
	Constructor.prototype.selectBeforePage = function() {

		this.gotoPage(this.getCurrentPageNum() - 1);
	}

	/**
	 * 翻至后一页
	 * 
	 * @returns
	 */
	Constructor.prototype.selectNextPage = function() {

		this.gotoPage(this.getCurrentPageNum() + 1);
	}

	/**
	 * 获取指定行数据
	 * 
	 * @param index{Number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.getRow = function(index) {

		return this.getRows()[index];
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
	Constructor.prototype.changeRowOrder = function(index1, index2) {

		var min = index1 > index2 ? index2 : index1;
		var max = index1 > index2 ? index1 : index2;

		var rowMin = this.getRows()[min];
		var rowMax = this.getRows()[max];

		// 删除
		this.deleteRow(max);
		this.deleteRow(min);

		// 添加
		this.insertRow({
			index : min,
			row : rowMax
		});
		this.insertRow({
			index : max,
			row : rowMin
		});
	}

	/**
	 * 获取选中行索引
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getSelectedRowIndex = function() {

		return this.getRowIndex(this.getSelected());
	};

	// 返回构造函数
	return Constructor;
})();




/**
 * @name	ValidateBox
 * @package core.html.easyui.form
 * @desc	校验文本框模板
 * @type	类
 * 
 * @date	2016年8月29日 16:39:29
 */

core.html.easyui.form.ValidateBox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(_id) {

		// 校验ID
		if (_id === null || _id === undefined) {
			new core.lang.Exception(this, "core.html.easyui.form.ValidateBox", "构造参数异常", "ID属性不能为空");
		}

		/**
		 * 属性
		 */
		/**
		 * ID
		 */
		var id = _id;
		/**
		 * 是否校验
		 */
		var required = $.fn.validatebox.defaults.required;
		/**
		 * 校验方式
		 */
		var validType = $.fn.validatebox.defaults.validType;
		/**
		 * 校验延迟时间
		 */
		var delay = $.fn.validatebox.defaults.delay;
		/**
		 * 字段为空提示信息
		 */
		var missingMessage = $.fn.validatebox.defaults.missingMessage;
		/**
		 * 校验提示信息
		 */
		var invalidMessage = $.fn.validatebox.defaults.invalidMessage;
		/**
		 * 工具提示条位置
		 */
		var tipPosition = $.fn.validatebox.defaults.tipPosition;
		/**
		 * 水平位置偏移值
		 */
		var deltaX = $.fn.validatebox.defaults.deltaX;
		/**
		 * 是否关闭校验
		 */
		var novalidate = $.fn.validatebox.defaults.novalidate;
		/**
		 * 是否可输
		 */
		var editable = $.fn.validatebox.defaults.editable;
		/**
		 * 是否可用
		 */
		var disabled = $.fn.validatebox.defaults.disabled;
		/**
		 * 是否只读
		 */
		var readonly = $.fn.validatebox.defaults.readonly;
		/**
		 * 是否创建时验证
		 */
		var validateOnCreate = $.fn.validatebox.defaults.validateOnCreate;
		/**
		 * 是否失去焦点时验证
		 */
		var validateOnBlur = $.fn.validatebox.defaults.validateOnBlur;

		/**
		 * 事件
		 */
		/**
		 * 验证前事件
		 */
		var onBeforeValidate = $.fn.validatebox.defaults.onBeforeValidate;
		/**
		 * 验证事件
		 */
		var onValidate = $.fn.validatebox.defaults.onValidate;

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
		 * 获取/设置是否校验
		 * 
		 * @param required
		 */
		this.required = function() {

			switch (arguments.length) {
			case 0:
				return required;
			default:
				required = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置校验方式
		 * 
		 * @param validType
		 */
		this.validType = function() {

			switch (arguments.length) {
			case 0:
				return validType;
			default:
				validType = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置校验延迟时间
		 * 
		 * @param delay
		 */
		this.delay = function() {

			switch (arguments.length) {
			case 0:
				return delay;
			default:
				delay = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置字段为空提示信息
		 * 
		 * @param missingMessage
		 */
		this.missingMessage = function() {

			switch (arguments.length) {
			case 0:
				return missingMessage;
			default:
				missingMessage = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置校验提示信息
		 * 
		 * @param invalidMessage
		 */
		this.invalidMessage = function() {

			switch (arguments.length) {
			case 0:
				return invalidMessage;
			default:
				invalidMessage = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置工具提示条位置
		 * 
		 * @param tipPosition
		 */
		this.tipPosition = function() {

			switch (arguments.length) {
			case 0:
				return tipPosition;
			default:
				tipPosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置水平位置偏移值
		 * 
		 * @param deltaX
		 */
		this.deltaX = function() {

			switch (arguments.length) {
			case 0:
				return deltaX;
			default:
				deltaX = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否关闭校验
		 * 
		 * @param novalidate
		 */
		this.novalidate = function() {

			switch (arguments.length) {
			case 0:
				return novalidate;
			default:
				novalidate = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否可输
		 * 
		 * @param editable
		 */
		this.editable = function() {

			switch (arguments.length) {
			case 0:
				return editable;
			default:
				editable = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否可用
		 * 
		 * @param disabled
		 */
		this.disabled = function() {

			switch (arguments.length) {
			case 0:
				return disabled;
			default:
				disabled = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否只读
		 * 
		 * @param readonly
		 */
		this.readonly = function() {

			switch (arguments.length) {
			case 0:
				return readonly;
			default:
				readonly = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否创建时验证
		 * 
		 * @param validateOnCreate
		 */
		this.validateOnCreate = function() {

			switch (arguments.length) {
			case 0:
				return validateOnCreate;
			default:
				validateOnCreate = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否失去焦点时验证
		 * 
		 * @param validateOnBlur
		 */
		this.validateOnBlur = function() {

			switch (arguments.length) {
			case 0:
				return validateOnBlur;
			default:
				validateOnBlur = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置验证前事件
		 * 
		 * @param onBeforeValidate
		 */
		this.onBeforeValidate = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeValidate;
			default:
				onBeforeValidate = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置验证事件
		 * 
		 * @param onValidate
		 */
		this.onValidate = function() {

			switch (arguments.length) {
			case 0:
				return onValidate;
			default:
				onValidate = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.ValidateBox}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.ValidateBox", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.validatebox({
			// 属性
			id : this.id(),
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			deltaX : this.deltaX(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),

			// 事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate()
		});

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

		return $("#" + this.id()).validatebox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).validatebox("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).validatebox("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).validatebox("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).validatebox("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).validatebox("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).validatebox("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).validatebox("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).validatebox("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).validatebox("readonly", mode);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	TextBox
 * @package core.html.easyui.form
 * @desc	文本框模板
 * @type	类
 * 
 * @date	2016年8月29日 17:37:49
 */

core.html.easyui.form.TextBox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.TextBox.superClass.constructor.call(this, id);

		/**
		 * 属性
		 */
		/**
		 * 宽度
		 */
		var width = $.fn.textbox.defaults.width;
		/**
		 * 高度
		 */
		var height = $.fn.textbox.defaults.height;
		/**
		 * 输入框提示信息
		 */
		var prompt = $.fn.textbox.defaults.prompt;
		/**
		 * 值
		 */
		var value = $.fn.textbox.defaults.value;
		/**
		 * 输入框类型
		 */
		var type = $.fn.textbox.defaults.type;
		/**
		 * 标签
		 */
		var label = $.fn.textbox.defaults.label;
		/**
		 * 标签宽度
		 */
		var labelWidth = $.fn.textbox.defaults.labelWidth;
		/**
		 * 标签位置
		 */
		var labelPosition = $.fn.textbox.defaults.labelPosition;
		/**
		 * 标签排列
		 */
		var labelAlign = $.fn.textbox.defaults.labelAlign;
		/**
		 * 多行文本框
		 */
		var multiline = $.fn.textbox.defaults.multiline;
		/**
		 * 图标
		 */
		var icons = $.fn.textbox.defaults.icons;
		/**
		 * 图标样式
		 */
		var iconCls = $.fn.textbox.defaults.iconCls;
		/**
		 * 图标排列
		 */
		var iconAlign = $.fn.textbox.defaults.iconAlign;
		/**
		 * 图标宽度
		 */
		var iconWidth = $.fn.textbox.defaults.iconWidth;
		/**
		 * 按钮文本
		 */
		var buttonText = $.fn.textbox.defaults.buttonText;
		/**
		 * 按钮图标
		 */
		var buttonIcon = $.fn.textbox.defaults.buttonIcon;
		/**
		 * 按钮排列
		 */
		var buttonAlign = $.fn.textbox.defaults.buttonAlign;

		/**
		 * 事件
		 */
		/**
		 * 改变事件
		 * 
		 * @param newValue
		 *            新值
		 * @param oldValue
		 *            旧值
		 */
		var onChange = $.fn.textbox.defaults.onChange;
		/**
		 * 改变大小事件
		 * 
		 * @param width
		 *            宽度
		 * @param height
		 *            高度
		 */
		var onResize = $.fn.textbox.defaults.onResize;
		/**
		 * 点击按钮事件
		 */
		var onClickButton = $.fn.textbox.defaults.onClickButton;
		/**
		 * 点击图标事件
		 * 
		 * @param index
		 */
		var onClickIcon = $.fn.textbox.defaults.onClickIcon;

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
		 * 获取/设置输入框提示信息
		 * 
		 * @param prompt
		 */
		this.prompt = function() {

			switch (arguments.length) {
			case 0:
				return prompt;
			default:
				prompt = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置值
		 * 
		 * @param value
		 */
		this.value = function() {

			switch (arguments.length) {
			case 0:
				return value;
			default:
				value = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置输入框类型
		 * 
		 * @param id
		 */
		this.type = function() {

			switch (arguments.length) {
			case 0:
				return type;
			default:
				type = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置标签
		 * 
		 * @param label
		 */
		this.label = function() {

			switch (arguments.length) {
			case 0:
				return label;
			default:
				label = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置标签宽度
		 * 
		 * @param labelWidth
		 */
		this.labelWidth = function() {

			switch (arguments.length) {
			case 0:
				return labelWidth;
			default:
				labelWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置标签位置
		 * 
		 * @param labelPosition
		 */
		this.labelPosition = function() {

			switch (arguments.length) {
			case 0:
				return labelPosition;
			default:
				labelPosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置标签排列
		 * 
		 * @param labelAlign
		 */
		this.labelAlign = function() {

			switch (arguments.length) {
			case 0:
				return labelAlign;
			default:
				labelAlign = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置多行文本框
		 * 
		 * @param multiline
		 */
		this.multiline = function() {

			switch (arguments.length) {
			case 0:
				return multiline;
			default:
				multiline = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置图标
		 * 
		 * @param icons
		 */
		this.icons = function() {

			switch (arguments.length) {
			case 0:
				return icons;
			default:
				icons = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置图标样式
		 * 
		 * @param iconCls
		 */
		this.iconCls = function() {

			switch (arguments.length) {
			case 0:
				return iconCls;
			default:
				iconCls = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置图标排列
		 * 
		 * @param iconAlign
		 */
		this.iconAlign = function() {

			switch (arguments.length) {
			case 0:
				return iconAlign;
			default:
				iconAlign = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置图标宽度
		 * 
		 * @param iconWidth
		 */
		this.iconWidth = function() {

			switch (arguments.length) {
			case 0:
				return iconWidth;
			default:
				iconWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按钮文本
		 * 
		 * @param buttonText
		 */
		this.buttonText = function() {

			switch (arguments.length) {
			case 0:
				return buttonText;
			default:
				buttonText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按钮图标
		 * 
		 * @param buttonIcon
		 */
		this.buttonIcon = function() {

			switch (arguments.length) {
			case 0:
				return buttonIcon;
			default:
				buttonIcon = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按钮排列
		 * 
		 * @param buttonAlign
		 */
		this.buttonAlign = function() {

			switch (arguments.length) {
			case 0:
				return buttonAlign;
			default:
				buttonAlign = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置改变事件
		 * 
		 * @param onChange
		 */
		this.onChange = function() {

			switch (arguments.length) {
			case 0:
				return onChange;
			default:
				onChange = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置改变大小事件
		 * 
		 * @param onResize
		 */
		this.onResize = function() {

			switch (arguments.length) {
			case 0:
				return onResize;
			default:
				onResize = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置点击按钮事件
		 * 
		 * @param onClickButton
		 */
		this.onClickButton = function() {

			switch (arguments.length) {
			case 0:
				return onClickButton;
			default:
				onClickButton = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置点击图标事件
		 * 
		 * @param onClickIcon
		 */
		this.onClickIcon = function() {

			switch (arguments.length) {
			case 0:
				return onClickIcon;
			default:
				onClickIcon = arguments[0];
				return this;
			}
		};
	};
	// 继承验证文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.ValidateBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.TextBox}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.TextBox", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.textbox({
			// 属性
			// Validate继承属性
			id : this.id(),
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			deltaX : this.deltaX(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// 属性
			width : this.width(),
			height : this.height(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),

			// 事件
			// Validate继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// 事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon()
		});

		return this;
	};

	/**
	 * Validate继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).textbox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).textbox("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).textbox("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).textbox("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).textbox("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).textbox("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).textbox("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).textbox("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).textbox("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).textbox("readonly", mode);
	};

	/**
	 * 方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).textbox("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).textbox("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).textbox("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).textbox("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).textbox("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).textbox("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).textbox("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).textbox("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).textbox("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).textbox("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).textbox("getIcon", index);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	PasswordBox
 * @package core.html.easyui.form
 * @desc	密码框模板
 * @type	类
 * 
 * @date	2016年8月29日 17:37:49
 */

core.html.easyui.form.PasswordBox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.PasswordBox.superClass.constructor.call(this, id);

		/**
		 * 属性
		 */
		/**
		 * 密码显示字符
		 */
		var passwordChar = $.fn.passwordbox.defaults.passwordChar;
		/**
		 * 检查间隔时间
		 */
		var checkInterval = $.fn.passwordbox.defaults.checkInterval;
		/**
		 * 延迟转换
		 */
		var lastDelay = $.fn.passwordbox.defaults.lastDelay;
		/**
		 * 是否显示密码明文
		 */
		var revealed = $.fn.passwordbox.defaults.revealed;
		/**
		 * 是否显示显示密码按钮
		 */
		var showEye = $.fn.passwordbox.defaults.showEye;

		/**
		 * 获取/设置密码显示字符
		 * 
		 * @param passwordChar
		 */
		this.passwordChar = function() {

			switch (arguments.length) {
			case 0:
				return passwordChar;
			default:
				passwordChar = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置检查间隔时间
		 * 
		 * @param checkInterval
		 */
		this.checkInterval = function() {

			switch (arguments.length) {
			case 0:
				return checkInterval;
			default:
				checkInterval = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置延迟转换
		 * 
		 * @param lastDelay
		 */
		this.lastDelay = function() {

			switch (arguments.length) {
			case 0:
				return lastDelay;
			default:
				lastDelay = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否隐藏密码
		 * 
		 * @param revealed
		 */
		this.revealed = function() {

			switch (arguments.length) {
			case 0:
				return revealed;
			default:
				revealed = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否显示显示密码按钮
		 * 
		 * @param showEye
		 */
		this.showEye = function() {

			switch (arguments.length) {
			case 0:
				return showEye;
			default:
				showEye = arguments[0];
				return this;
			}
		};
	};
	// 继承文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.PasswordBox}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.PasswordBox", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.passwordbox({
			// 属性
			// Validate继承属性
			id : this.id(),
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			deltaX : this.deltaX(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// TextBox继承属性
			width : this.width(),
			height : this.height(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// 属性
			passwordChar : this.passwordChar(),
			checkInterval : this.checkInterval(),
			lastDelay : this.lastDelay(),
			revealed : this.revealed(),
			showEye : this.showEye(),

			// 事件
			// Validate继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon()
		});

		return this;
	};

	/**
	 * Validate继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).passwordbox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).passwordbox("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).passwordbox("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).passwordbox("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).passwordbox("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).passwordbox("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).passwordbox("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).passwordbox("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).passwordbox("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).passwordbox("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).passwordbox("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).passwordbox("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).passwordbox("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).passwordbox("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).passwordbox("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).passwordbox("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).passwordbox("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).textbox("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).textbox("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).passwordbox("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).passwordbox("getIcon", index);
	};

	/**
	 * 方法
	 */
	/**
	 * 显示密码
	 * 
	 * @returns
	 */
	Constructor.prototype.showPassword = function() {

		return $("#" + this.id()).passwordbox("showPassword");
	};

	/**
	 * 隐藏密码
	 * 
	 * @returns
	 */
	Constructor.prototype.hidePassword = function() {

		return $("#" + this.id()).passwordbox("hidePassword");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Combo
 * @package core.html.easyui.form
 * @desc	下拉框模板
 * @type	类
 * 
 * @date	2016年8月29日 19:06:36
 */

core.html.easyui.form.Combo = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.Combo.superClass.constructor.call(this, id);
		this.height($.fn.combo.defaults.height);

		/**
		 * 属性
		 */
		/**
		 * 面板宽度
		 */
		var panelWidth = $.fn.combo.defaults.panelWidth;
		/**
		 * 面板高度
		 */
		var panelHeight = $.fn.combo.defaults.panelHeight;
		/**
		 * 面板最小宽度
		 */
		var panelMinWidth = $.fn.combo.defaults.panelMinWidth;
		/**
		 * 面板最大宽度
		 */
		var panelMaxWidth = $.fn.combo.defaults.panelMaxWidth;
		/**
		 * 面板最小高度
		 */
		var panelMinHeight = $.fn.combo.defaults.panelMinHeight;
		/**
		 * 面板最大高度
		 */
		var panelMaxHeight = $.fn.combo.defaults.panelMaxHeight;
		/**
		 * 面板位置
		 */
		var panelAlign = $.fn.combo.defaults.panelAlign;
		/**
		 * 是否多选
		 */
		var multiple = $.fn.combo.defaults.multiple;
		/**
		 * 
		 */
		var selectOnNavigation = $.fn.combo.defaults.selectOnNavigation;
		/**
		 * 多选分割符号
		 */
		var separator = $.fn.combo.defaults.separator;
		/**
		 * 是否显示向下按钮
		 */
		var hasDownArrow = $.fn.combo.defaults.hasDownArrow;
		/**
		 * 按键事件
		 */
		var keyHandler = $.fn.combo.defaults.keyHandler;

		/**
		 * 事件
		 */
		/**
		 * 显示面板事件
		 */
		var onShowPanel = $.fn.combo.defaults.onShowPanel;
		/**
		 * 隐藏面板事件
		 */
		var onHidePanel = $.fn.combo.defaults.onHidePanel;

		/**
		 * 获取/设置面板宽度
		 * 
		 * @param panelWidth
		 */
		this.panelWidth = function() {

			switch (arguments.length) {
			case 0:
				return panelWidth;
			default:
				panelWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置面板高度
		 * 
		 * @param panelHeight
		 */
		this.panelHeight = function() {

			switch (arguments.length) {
			case 0:
				return panelHeight;
			default:
				panelHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置面板最小宽度
		 * 
		 * @param panelMinWidth
		 */
		this.panelMinWidth = function() {

			switch (arguments.length) {
			case 0:
				return panelMinWidth;
			default:
				panelMinWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置面板最大宽度
		 * 
		 * @param panelMaxWidth
		 */
		this.panelMaxWidth = function() {

			switch (arguments.length) {
			case 0:
				return panelMaxWidth;
			default:
				panelMaxWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置面板最小高度
		 * 
		 * @param panelMinHeight
		 */
		this.panelMinHeight = function() {

			switch (arguments.length) {
			case 0:
				return panelMinHeight;
			default:
				panelMinHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置面板最大高度
		 * 
		 * @param panelMaxHeight
		 */
		this.panelMaxHeight = function() {

			switch (arguments.length) {
			case 0:
				return panelMaxHeight;
			default:
				panelMaxHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置面板位置
		 * 
		 * @param panelAlign
		 */
		this.panelAlign = function() {

			switch (arguments.length) {
			case 0:
				return panelAlign;
			default:
				panelAlign = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否多选
		 * 
		 * @param multiple
		 */
		this.multiple = function() {

			switch (arguments.length) {
			case 0:
				return multiple;
			default:
				multiple = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param selectOnNavigation
		 */
		this.selectOnNavigation = function() {

			switch (arguments.length) {
			case 0:
				return selectOnNavigation;
			default:
				selectOnNavigation = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置多选分割符号
		 * 
		 * @param separator
		 */
		this.separator = function() {

			switch (arguments.length) {
			case 0:
				return separator;
			default:
				separator = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否显示向下按钮
		 * 
		 * @param hasDownArrow
		 */
		this.hasDownArrow = function() {

			switch (arguments.length) {
			case 0:
				return hasDownArrow;
			default:
				hasDownArrow = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按键事件
		 * 
		 * @param keyHandler
		 */
		this.keyHandler = function() {

			switch (arguments.length) {
			case 0:
				return keyHandler;
			default:
				keyHandler = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示面板事件
		 * 
		 * @param onShowPanel
		 */
		this.onShowPanel = function() {

			switch (arguments.length) {
			case 0:
				return onShowPanel;
			default:
				onShowPanel = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置隐藏面板事件
		 * 
		 * @param onHidePanel
		 */
		this.onHidePanel = function() {

			switch (arguments.length) {
			case 0:
				return onHidePanel;
			default:
				onHidePanel = arguments[0];
				return this;
			}
		};
	};
	// 继承文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.Combo}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.Combo", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.combo({
			// 属性
			// Validate继承属性
			id : this.id(),
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			deltaX : this.deltaX(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// TextBox继承属性
			width : this.width(),
			height : this.height(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// 属性
			panelWidth : this.panelWidth(),
			panelHeight : this.panelHeight(),
			panelMinWidth : this.panelMinWidth(),
			panelMaxWidth : this.panelMaxWidth(),
			panelMinHeight : this.panelMinHeight(),
			panelMaxHeight : this.panelMaxHeight(),
			panelAlign : this.panelAlign(),
			multiple : this.multiple(),
			selectOnNavigation : this.selectOnNavigation(),
			separator : this.separator(),
			hasDownArrow : this.hasDownArrow(),
			keyHandler : this.keyHandler(),

			// 事件
			// Validate继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// 事件
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel()
		});

		return this;
	};

	/**
	 * Validate继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).combo("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).combo("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).combo("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).combo("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).combo("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).combo("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).combo("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).combo("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).combo("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).combo("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).combo("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).combo("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).combo("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).combo("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).combo("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).combo("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).combo("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).combo("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).combo("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).combo("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).combo("getIcon", index);
	};

	/**
	 * 方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.panel = function() {

		return $("#" + this.id()).combo("panel");
	};

	/**
	 * 显示面板
	 * 
	 * @returns
	 */
	Constructor.prototype.showPanel = function() {

		return $("#" + this.id()).combo("showPanel");
	};

	/**
	 * 隐藏面板
	 * 
	 * @returns
	 */
	Constructor.prototype.hidePanel = function() {

		return $("#" + this.id()).combo("hidePanel");
	};

	/**
	 * 获取值集合
	 * 
	 * @returns
	 */
	Constructor.prototype.getValues = function() {

		return $("#" + this.id()).combo("getValues");
	};

	/**
	 * 设置值集合
	 * 
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return $("#" + this.id()).combo("setValues", values);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	ComboBox
 * @package core.html.easyui.form
 * @desc	下拉框模板
 * @type	类
 * 
 * @date	2016年8月30日 08:39:57
 */

core.html.easyui.form.ComboBox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.ComboBox.superClass.constructor.call(this, id);

		/**
		 * 属性
		 */
		/**
		 * 值域字段名
		 */
		var valueField = $.fn.combobox.defaults.valueField;
		/**
		 * 显示域字段名
		 */
		var textField = $.fn.combobox.defaults.textField;
		/**
		 * 分组字段
		 */
		var groupField = $.fn.combobox.defaults.groupField;
		/**
		 * 分组格式化
		 */
		var groupFormatter = $.fn.combobox.defaults.groupFormatter;
		/**
		 * 数据获取模式
		 */
		var mode = $.fn.combobox.defaults.mode;
		/**
		 * 链接
		 */
		var url = $.fn.combobox.defaults.url;
		/**
		 * 请求方式
		 */
		var method = $.fn.combobox.defaults.method;
		/**
		 * 数据
		 */
		var data = $.fn.combobox.defaults.data;
		/**
		 * 过滤参数
		 */
		var queryParams = $.fn.combobox.defaults.queryParams;
		/**
		 * 
		 */
		var limitToList = $.fn.combobox.defaults.limitToList;
		/**
		 * 项目图标
		 */
		var showItemIcon = $.fn.combobox.defaults.showItemIcon;
		/**
		 * 分组位置
		 */
		var groupPosition = $.fn.combobox.defaults.groupPosition;
		/**
		 * 过滤
		 */
		var filter = $.fn.combobox.defaults.filter;
		/**
		 * 格式化
		 */
		var formatter = $.fn.combobox.defaults.formatter;
		/**
		 * 加载
		 */
		var loader = $.fn.combobox.defaults.loader;
		/**
		 * 加载过滤
		 */
		var loadFilter = $.fn.combobox.defaults.loadFilter;

		/**
		 * 事件
		 */
		/**
		 * 加载前事件
		 */
		var onBeforeLoad = $.fn.combobox.defaults.onBeforeLoad;
		/**
		 * 加载成功事件
		 */
		var onLoadSuccess = $.fn.combobox.defaults.onLoadSuccess;
		/**
		 * 加载失败事件
		 */
		var onLoadError = $.fn.combobox.defaults.onLoadError;
		/**
		 * 选择事件
		 */
		var onSelect = $.fn.combobox.defaults.onSelect;
		/**
		 * 取消选择事件
		 */
		var onUnselect = $.fn.combobox.defaults.onUnselect;

		/**
		 * 获取/设置值域字段名
		 * 
		 * @param valueField
		 */
		this.valueField = function() {

			switch (arguments.length) {
			case 0:
				return valueField;
			default:
				valueField = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示域字段名
		 * 
		 * @param textField
		 */
		this.textField = function() {

			switch (arguments.length) {
			case 0:
				return textField;
			default:
				textField = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置分组字段
		 * 
		 * @param groupField
		 */
		this.groupField = function() {

			switch (arguments.length) {
			case 0:
				return groupField;
			default:
				groupField = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置分组格式化
		 * 
		 * @param groupFormatter
		 */
		this.groupFormatter = function() {

			switch (arguments.length) {
			case 0:
				return groupFormatter;
			default:
				groupFormatter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置数据获取模式
		 * 
		 * @param mode
		 */
		this.mode = function() {

			switch (arguments.length) {
			case 0:
				return mode;
			default:
				mode = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置链接
		 * 
		 * @param url
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
		 * 获取/设置请求方式
		 * 
		 * @param method
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
		 * 获取/设置数据
		 * 
		 * @param data
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
		 * 获取/设置过滤参数
		 * 
		 * @param queryParams
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
		 * @param limitToList
		 */
		this.limitToList = function() {

			switch (arguments.length) {
			case 0:
				return limitToList;
			default:
				limitToList = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置项目图标
		 * 
		 * @param showItemIcon
		 */
		this.showItemIcon = function() {

			switch (arguments.length) {
			case 0:
				return showItemIcon;
			default:
				showItemIcon = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置分组位置
		 * 
		 * @param groupPosition
		 */
		this.groupPosition = function() {

			switch (arguments.length) {
			case 0:
				return groupPosition;
			default:
				groupPosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置过滤
		 * 
		 * @param filter
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
		 * 获取/设置格式化
		 * 
		 * @param formatter
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
		 * 获取/设置加载
		 * 
		 * @param loader
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
		 * 获取/设置加载过滤
		 * 
		 * @param loadFilter
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
		 * 获取/设置加载前事件
		 * 
		 * @param onBeforeLoad
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
		 * 获取/设置加载成功事件
		 * 
		 * @param onLoadSuccess
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
		 * 获取/设置加载失败事件
		 * 
		 * @param onLoadError
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
	};
	// 继承下拉框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.Combo);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.ComboBox}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.ComboBox", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.combobox({
			// 属性
			// Validate继承属性
			id : this.id(),
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			deltaX : this.deltaX(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// TextBox继承属性
			width : this.width(),
			height : this.height(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// Combo继承属性
			panelWidth : this.panelWidth(),
			panelHeight : this.panelHeight(),
			panelMinWidth : this.panelMinWidth(),
			panelMaxWidth : this.panelMaxWidth(),
			panelMinHeight : this.panelMinHeight(),
			panelMaxHeight : this.panelMaxHeight(),
			panelAlign : this.panelAlign(),
			multiple : this.multiple(),
			selectOnNavigation : this.selectOnNavigation(),
			separator : this.separator(),
			hasDownArrow : this.hasDownArrow(),
			keyHandler : this.keyHandler(),
			// 属性
			valueField : this.valueField(),
			textField : this.textField(),
			groupField : this.groupField(),
			groupFormatter : this.groupFormatter(),
			mode : this.mode(),
			url : this.url(),
			method : this.method(),
			data : this.data(),
			queryParams : this.queryParams(),
			limitToList : this.limitToList(),
			showItemIcon : this.showItemIcon(),
			groupPosition : this.groupPosition(),
			filter : this.filter(),
			formatter : this.formatter(),
			loader : this.loader(),
			loadFilter : this.loadFilter(),

			// 事件
			// Validate继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Combo继承事件
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel(),
			// 事件
			onBeforeLoad : this.onBeforeLoad(),
			onLoadSuccess : this.onLoadSuccess(),
			onLoadError : this.onLoadError(),
			onSelect : this.onSelect(),
			onUnselect : this.onUnselect()
		});

		return this;
	};

	/**
	 * Validate继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).combobox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).combobox("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).combobox("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).combobox("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).combobox("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).combobox("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).combobox("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).combobox("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).combobox("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).combobox("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).combobox("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).combobox("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).combobox("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).combobox("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).combobox("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).combobox("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).combobox("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).combobox("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).combobox("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).combobox("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).combobox("getIcon", index);
	};

	/**
	 * Combo继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.panel = function() {

		return $("#" + this.id()).combobox("panel");
	};

	/**
	 * 显示面板
	 * 
	 * @returns
	 */
	Constructor.prototype.showPanel = function() {

		return $("#" + this.id()).combobox("showPanel");
	};

	/**
	 * 隐藏面板
	 * 
	 * @returns
	 */
	Constructor.prototype.hidePanel = function() {

		return $("#" + this.id()).combobox("hidePanel");
	};

	/**
	 * 获取值集合
	 * 
	 * @returns
	 */
	Constructor.prototype.getValues = function() {

		return $("#" + this.id()).combobox("getValues");
	};

	/**
	 * 设置值集合
	 * 
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return $("#" + this.id()).combobox("setValues", values);
	};

	/**
	 * 方法
	 */
	/**
	 * 获取数据
	 * 
	 * @returns
	 */
	Constructor.prototype.getData = function() {

		return $("#" + this.id()).combobox("getData");
	};

	/**
	 * 加载数据
	 * 
	 * @param data
	 * @returns
	 */
	Constructor.prototype.loadData = function(data) {

		return $("#" + this.id()).combobox("loadData", data);
	};

	/**
	 * 远程加载数据
	 * 
	 * @param url
	 * @returns
	 */
	Constructor.prototype.reload = function(url) {

		return $("#" + this.id()).combobox("reload", url);
	};

	/**
	 * 选择某值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.select = function(value) {

		return $("#" + this.id()).combobox("select", value);
	};

	/**
	 * 取消选择某值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.unselect = function(value) {

		return $("#" + this.id()).combobox("unselect", value);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	NumberBox
 * @package core.html.easyui.form
 * @desc	数字框模板
 * @type	类
 * 
 * @date 2016年8月30日 11:26:43
 */

core.html.easyui.form.NumberBox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.NumberBox.superClass.constructor.call(this, id);

		/**
		 * 属性
		 */
		/**
		 * 最小值
		 */
		var min = $.fn.numberbox.defaults.min;
		/**
		 * 最大值
		 */
		var max = $.fn.numberbox.defaults.max;
		/**
		 * 精度
		 */
		var precision = $.fn.numberbox.defaults.precision;
		/**
		 * 分隔符
		 */
		var decimalSeparator = $.fn.numberbox.defaults.decimalSeparator;
		/**
		 * 分组分隔符
		 */
		var groupSeparator = $.fn.numberbox.defaults.groupSeparator;
		/**
		 * 前缀字符串
		 */
		var prefix = $.fn.numberbox.defaults.prefix;
		/**
		 * 后缀字符串
		 */
		var suffix = $.fn.numberbox.defaults.suffix;
		/**
		 * 过滤
		 */
		var filter = $.fn.numberbox.defaults.filter;
		/**
		 * 格式化
		 */
		var formatter = $.fn.numberbox.defaults.formatter;
		/**
		 * 解析
		 */
		var parser = $.fn.numberbox.defaults.parser;

		/**
		 * 获取/设置最小值
		 * 
		 * @param min
		 */
		this.min = function() {

			switch (arguments.length) {
			case 0:
				return min;
			default:
				min = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置最大值
		 * 
		 * @param max
		 */
		this.max = function() {

			switch (arguments.length) {
			case 0:
				return max;
			default:
				max = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置精度
		 * 
		 * @param precision
		 */
		this.precision = function() {

			switch (arguments.length) {
			case 0:
				return precision;
			default:
				precision = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置分隔符
		 * 
		 * @param decimalSeparator
		 */
		this.decimalSeparator = function() {

			switch (arguments.length) {
			case 0:
				return decimalSeparator;
			default:
				decimalSeparator = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置分组分隔符
		 * 
		 * @param groupSeparator
		 */
		this.groupSeparator = function() {

			switch (arguments.length) {
			case 0:
				return groupSeparator;
			default:
				groupSeparator = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置前缀字符串
		 * 
		 * @param prefix
		 */
		this.prefix = function() {

			switch (arguments.length) {
			case 0:
				return prefix;
			default:
				prefix = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置后缀字符串
		 * 
		 * @param suffix
		 */
		this.suffix = function() {

			switch (arguments.length) {
			case 0:
				return suffix;
			default:
				suffix = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置过滤
		 * 
		 * @param filter
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
		 * 获取/设置格式化
		 * 
		 * @param formatter
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
		 * 获取/设置解析
		 * 
		 * @param parser
		 */
		this.parser = function() {

			switch (arguments.length) {
			case 0:
				return parser;
			default:
				parser = arguments[0];
				return this;
			}
		};
	};
	// 继承文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.NumberBox}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.NumberBox", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.numberbox({
			// 属性
			// Validate继承属性
			id : this.id(),
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			deltaX : this.deltaX(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// TextBox继承属性
			width : this.width(),
			height : this.height(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// 属性
			min : this.min(),
			max : this.max(),
			precision : this.precision(),
			decimalSeparator : this.decimalSeparator(),
			groupSeparator : this.groupSeparator(),
			prefix : this.prefix(),
			suffix : this.suffix(),
			filter : this.filter(),
			formatter : this.formatter(),
			parser : this.parser(),

			// 事件
			// Validate继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon()
		});

		return this;
	};

	/**
	 * Validate继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).numberbox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).numberbox("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).numberbox("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).numberbox("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).numberbox("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).numberbox("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).numberbox("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).numberbox("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).numberbox("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).numberbox("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).numberbox("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).numberbox("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).numberbox("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).numberbox("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).numberbox("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).numberbox("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).numberbox("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).numberbox("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).numberbox("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).numberbox("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).numberbox("getIcon", index);
	};

	/**
	 * 方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.fix = function() {

		return $("#" + this.id()).numberbox("fix");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	DateBox
 * @package core.html.easyui.form
 * @desc	日期框模板
 * @type	类
 * 
 * @date	2016年8月30日 13:53:06
 */

core.html.easyui.form.DateBox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.DateBox.superClass.constructor.call(this, id);
		this.panelWidth($.fn.datebox.defaults.panelWidth);
		this.panelHeight($.fn.datebox.defaults.panelHeight);

		/**
		 * 属性
		 */
		/**
		 * 今天按钮
		 */
		var currentText = $.fn.datebox.defaults.currentText;
		/**
		 * 关闭按钮
		 */
		var closeText = $.fn.datebox.defaults.closeText;
		/**
		 * 确认按钮
		 */
		var okText = $.fn.datebox.defaults.okText;
		/**
		 * 按钮组
		 */
		var buttons = $.fn.datebox.defaults.buttons;
		/**
		 * 日期框索引
		 */
		var sharedCalendar = $.fn.datebox.defaults.sharedCalendar;
		/**
		 * 格式化
		 */
		var formatter = $.fn.datebox.defaults.formatter;
		/**
		 * 解析
		 */
		var parser = $.fn.datebox.defaults.parser;

		/**
		 * 事件
		 */
		/**
		 * 选择事件
		 */
		var onSelect = $.fn.datebox.defaults.onSelect;

		/**
		 * 获取/设置今天按钮
		 * 
		 * @param currentText
		 */
		this.currentText = function() {

			switch (arguments.length) {
			case 0:
				return currentText;
			default:
				currentText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置关闭按钮
		 * 
		 * @param closeText
		 */
		this.closeText = function() {

			switch (arguments.length) {
			case 0:
				return closeText;
			default:
				closeText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置确认按钮
		 * 
		 * @param okText
		 */
		this.okText = function() {

			switch (arguments.length) {
			case 0:
				return okText;
			default:
				okText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按钮组
		 * 
		 * @param buttons
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
		 * 获取/设置日期框索引
		 * 
		 * @param sharedCalendar
		 */
		this.sharedCalendar = function() {

			switch (arguments.length) {
			case 0:
				return sharedCalendar;
			default:
				sharedCalendar = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置格式化
		 * 
		 * @param formatter
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
		 * 获取/设置解析
		 * 
		 * @param parser
		 */
		this.parser = function() {

			switch (arguments.length) {
			case 0:
				return parser;
			default:
				parser = arguments[0];
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
	};
	// 继承文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.Combo);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.DateBox}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.DateBox", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.datebox({
			// 属性
			// Validate继承属性
			id : this.id(),
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			deltaX : this.deltaX(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// TextBox继承属性
			width : this.width(),
			height : this.height(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// Combo继承属性
			panelWidth : this.panelWidth(),
			panelHeight : this.panelHeight(),
			panelMinWidth : this.panelMinWidth(),
			panelMaxWidth : this.panelMaxWidth(),
			panelMinHeight : this.panelMinHeight(),
			panelMaxHeight : this.panelMaxHeight(),
			panelAlign : this.panelAlign(),
			multiple : this.multiple(),
			selectOnNavigation : this.selectOnNavigation(),
			separator : this.separator(),
			hasDownArrow : this.hasDownArrow(),
			keyHandler : this.keyHandler(),
			// 属性
			currentText : this.currentText(),
			closeText : this.closeText(),
			okText : this.okText(),
			buttons : this.buttons(),
			sharedCalendar : this.sharedCalendar(),
			formatter : this.formatter(),
			parser : this.parser(),

			// 事件
			// Validate继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Combo继承事件
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel(),
			// 事件
			onSelect : this.onSelect()
		});

		return this;
	};

	/**
	 * Validate继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).datebox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).datebox("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).datebox("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).datebox("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).datebox("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).datebox("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).datebox("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).datebox("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).datebox("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).datebox("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).datebox("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).datebox("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).datebox("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).datebox("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).datebox("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).datebox("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).datebox("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).datebox("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).datebox("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).datebox("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).datebox("getIcon", index);
	};

	/**
	 * Combo继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.panel = function() {

		return $("#" + this.id()).datebox("panel");
	};

	/**
	 * 显示面板
	 * 
	 * @returns
	 */
	Constructor.prototype.showPanel = function() {

		return $("#" + this.id()).datebox("showPanel");
	};

	/**
	 * 隐藏面板
	 * 
	 * @returns
	 */
	Constructor.prototype.hidePanel = function() {

		return $("#" + this.id()).datebox("hidePanel");
	};

	/**
	 * 获取值集合
	 * 
	 * @returns
	 */
	Constructor.prototype.getValues = function() {

		return $("#" + this.id()).datebox("getValues");
	};

	/**
	 * 设置值集合
	 * 
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return $("#" + this.id()).datebox("setValues", values);
	};

	/**
	 * 方法
	 */
	/**
	 * 获取日期面板对象
	 */
	Constructor.prototype.calendar = function() {

		return $("#" + this.id()).datebox("calendar");
	};

	/**
	 * 从xx复制
	 * 
	 * @param from
	 */
	Constructor.prototype.cloneFrom = function(from) {

		return $("#" + this.id()).datebox("cloneFrom");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	DateTimeBox
 * @package core.html.easyui.form
 * @desc	日期时间框模板
 * @type	类
 * 
 * @date	2016年8月31日 10:44:02
 */

core.html.easyui.form.DateTimeBox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.DateTimeBox.superClass.constructor.call(this, id);

		/**
		 * 属性
		 */
		/**
		 * spinner宽度
		 */
		var spinnerWidth = $.fn.datetimebox.defaults.spinnerWidth;
		/**
		 * 是否显示秒信息
		 */
		var showSeconds = $.fn.datetimebox.defaults.showSeconds;
		/**
		 * 时间分割符
		 */
		var timeSeparator = $.fn.datetimebox.defaults.timeSeparator;

		/**
		 * 获取/设置spinner宽度
		 * 
		 * @param spinnerWidth
		 */
		this.spinnerWidth = function() {

			switch (arguments.length) {
			case 0:
				return spinnerWidth;
			default:
				spinnerWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否显示秒信息
		 * 
		 * @param showSeconds
		 */
		this.showSeconds = function() {

			switch (arguments.length) {
			case 0:
				return showSeconds;
			default:
				showSeconds = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置时间分割符
		 * 
		 * @param timeSeparator
		 */
		this.timeSeparator = function() {

			switch (arguments.length) {
			case 0:
				return timeSeparator;
			default:
				timeSeparator = arguments[0];
				return this;
			}
		};
	};
	// 继承日期框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.DateBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.DateTimeBox}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.DateTimeBox", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.datetimebox({
			// 属性
			// Validate继承属性
			id : this.id(),
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			deltaX : this.deltaX(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// TextBox继承属性
			width : this.width(),
			height : this.height(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// Combo继承属性
			panelWidth : this.panelWidth(),
			panelHeight : this.panelHeight(),
			panelMinWidth : this.panelMinWidth(),
			panelMaxWidth : this.panelMaxWidth(),
			panelMinHeight : this.panelMinHeight(),
			panelMaxHeight : this.panelMaxHeight(),
			panelAlign : this.panelAlign(),
			multiple : this.multiple(),
			selectOnNavigation : this.selectOnNavigation(),
			separator : this.separator(),
			hasDownArrow : this.hasDownArrow(),
			keyHandler : this.keyHandler(),
			// DateBox继承属性
			currentText : this.currentText(),
			closeText : this.closeText(),
			okText : this.okText(),
			buttons : this.buttons(),
			sharedCalendar : this.sharedCalendar(),
			formatter : this.formatter(),
			parser : this.parser(),
			// 属性
			spinnerWidth : this.spinnerWidth(),
			showSeconds : this.showSeconds(),
			timeSeparator : this.timeSeparator(),

			// 事件
			// Validate继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Combo继承事件
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel(),
			// DateBox继承事件
			onSelect : this.onSelect()
		});

		return this;
	};

	/**
	 * Validate继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).datetimebox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).datetimebox("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).datetimebox("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).datetimebox("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).datetimebox("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).datetimebox("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).datetimebox("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).datetimebox("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).datetimebox("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).datetimebox("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).datetimebox("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).datetimebox("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).datetimebox("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).datetimebox("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).datetimebox("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).datetimebox("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).datetimebox("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).datetimebox("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).datetimebox("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).datetimebox("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).datetimebox("getIcon", index);
	};

	/**
	 * Combo继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.panel = function() {

		return $("#" + this.id()).datetimebox("panel");
	};

	/**
	 * 显示面板
	 * 
	 * @returns
	 */
	Constructor.prototype.showPanel = function() {

		return $("#" + this.id()).datetimebox("showPanel");
	};

	/**
	 * 隐藏面板
	 * 
	 * @returns
	 */
	Constructor.prototype.hidePanel = function() {

		return $("#" + this.id()).datetimebox("hidePanel");
	};

	/**
	 * 获取值集合
	 * 
	 * @returns
	 */
	Constructor.prototype.getValues = function() {

		return $("#" + this.id()).datetimebox("getValues");
	};

	/**
	 * 设置值集合
	 * 
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return $("#" + this.id()).datetimebox("setValues", values);
	};

	/**
	 * DateBox继承方法
	 */
	/**
	 * 获取日期面板对象
	 */
	Constructor.prototype.calendar = function() {

		return $("#" + this.id()).datetimebox("calendar");
	};

	/**
	 * 从xx复制
	 * 
	 * @param from
	 */
	Constructor.prototype.cloneFrom = function(from) {

		return $("#" + this.id()).datetimebox("cloneFrom");
	};

	/**
	 * 方法
	 */
	/**
	 * 获取spinner对象
	 */
	Constructor.prototype.spinner = function() {

		return $("#" + this.id()).datetimebox("spinner");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Spinner
 * @package core.html.easyui.form
 * @desc	微调框模板
 * @type	类
 * 
 * @date	2016年8月31日 11:23:11
 */

core.html.easyui.form.Spinner = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.Spinner.superClass.constructor.call(this, id);
		this.height($.fn.spinner.defaults.height);

		/**
		 * 属性
		 */
		/**
		 * 最小值
		 */
		var min = $.fn.spinner.defaults.min;
		/**
		 * 最大值
		 */
		var max = $.fn.spinner.defaults.max;
		/**
		 * 步幅
		 */
		var increment = $.fn.spinner.defaults.increment;
		/**
		 * 位置
		 */
		var spinAlign = $.fn.spinner.defaults.spinAlign;
		/**
		 * 用户点击旋转调用函数
		 */
		var spin = $.fn.spinner.defaults.spin;

		/**
		 * 事件
		 */
		/**
		 * 抬起事件
		 */
		var onSpinUp = $.fn.spinner.defaults.onSpinUp;
		/**
		 * 按下事件
		 */
		var onSpinDown = $.fn.spinner.defaults.onSpinDown;

		/**
		 * 获取/设置最小值
		 * 
		 * @param min
		 */
		this.min = function() {

			switch (arguments.length) {
			case 0:
				return min;
			default:
				min = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置最大值
		 * 
		 * @param max
		 */
		this.max = function() {

			switch (arguments.length) {
			case 0:
				return max;
			default:
				max = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置步幅
		 * 
		 * @param increment
		 */
		this.increment = function() {

			switch (arguments.length) {
			case 0:
				return increment;
			default:
				increment = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置位置
		 * 
		 * @param spinAlign
		 */
		this.spinAlign = function() {

			switch (arguments.length) {
			case 0:
				return spinAlign;
			default:
				spinAlign = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置用户点击旋转调用函数
		 * 
		 * @param spin
		 */
		this.spin = function() {

			switch (arguments.length) {
			case 0:
				return spin;
			default:
				spin = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置抬起事件
		 * 
		 * @param onSpinUp
		 */
		this.onSpinUp = function() {

			switch (arguments.length) {
			case 0:
				return onSpinUp;
			default:
				onSpinUp = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按下事件
		 * 
		 * @param onSpinDown
		 */
		this.onSpinDown = function() {

			switch (arguments.length) {
			case 0:
				return onSpinDown;
			default:
				onSpinDown = arguments[0];
				return this;
			}
		};
	};
	// 继承文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.Spinner}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.Spinner", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.spinner({
			// 属性
			// Validate继承属性
			id : this.id(),
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			deltaX : this.deltaX(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// TextBox继承属性
			width : this.width(),
			height : this.height(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// 属性
			min : this.min(),
			max : this.max(),
			increment : this.increment(),
			spinAlign : this.spinAlign(),
			spin : this.spin(),

			// 事件
			// Validate继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// 事件
			onSpinUp : this.onSpinUp(),
			onSpinDown : this.onSpinDown()
		});

		return this;
	};

	/**
	 * Validate继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).spinner("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).spinner("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).spinner("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).spinner("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).spinner("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).spinner("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).spinner("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).spinner("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).spinner("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).spinner("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).spinner("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).spinner("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).spinner("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).spinner("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).spinner("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).spinner("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).spinner("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).spinner("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).spinner("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).spinner("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).spinner("getIcon", index);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	NumberSpinner
 * @package core.html.easyui.form
 * @desc	数字微调框模板
 * @type	类
 * 
 * @date	2016年8月31日 14:02:08
 */

core.html.easyui.form.NumberSpinner = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {
		
		// 多继承
		// 调用微调框模板构造
		core.html.easyui.form.Spinner.call(this, id);
		// 调用数字框模板构造
		core.html.easyui.form.NumberBox.call(this, id);
		this.spin($.fn.numberspinner.defaults.spin);
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.Spinner}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.NumberSpinner", "参数异常", "div(id:" + this.id()
					+ ")不存在.");
		}

		// 参数配置
		$jQuery.numberspinner({
			// 属性
			// Validate继承属性
			id : this.id(),
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			deltaX : this.deltaX(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// TextBox继承属性
			width : this.width(),
			height : this.height(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// Spinner继承属性
			min : this.min(),
			max : this.max(),
			increment : this.increment(),
			spinAlign : this.spinAlign(),
			spin : this.spin(),
			// NumberBox属性
			precision : this.precision(),
			decimalSeparator : this.decimalSeparator(),
			groupSeparator : this.groupSeparator(),
			prefix : this.prefix(),
			suffix : this.suffix(),
			filter : this.filter(),
			formatter : this.formatter(),
			parser : this.parser(),

			// 事件
			// Validate继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Spinner继承事件
			onSpinUp : this.onSpinUp(),
			onSpinDown : this.onSpinDown()
		});

		return this;
	};

	/**
	 * Validate继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).numberspinner("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).numberspinner("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).numberspinner("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).numberspinner("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).numberspinner("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).numberspinner("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).numberspinner("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).numberspinner("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).numberspinner("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).numberspinner("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).numberspinner("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).numberspinner("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).numberspinner("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).numberspinner("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).numberspinner("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).numberspinner("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).numberspinner("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).numberspinner("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).numberspinner("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).numberspinner("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).numberspinner("getIcon", index);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	TimeSpinner
 * @package core.html.easyui.form
 * @desc	时间微调框模板
 * @type	类
 * 
 * @date	2016年9月1日 10:28:12
 */

core.html.easyui.form.TimeSpinner = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.TimeSpinner.superClass.constructor.call(this, id);
		this.spin($.fn.timespinner.defaults.spin);

		/**
		 * 属性
		 */
		/**
		 * 分隔符
		 */
		var separator = $.fn.timespinner.defaults.separator;
		/**
		 * 显示秒
		 */
		var showSeconds = $.fn.timespinner.defaults.showSeconds;
		/**
		 * 高亮
		 */
		var highlight = $.fn.timespinner.defaults.highlight;
		/**
		 * 格式化
		 */
		var formatter = $.fn.timespinner.defaults.formatter;
		/**
		 * 解析时间
		 */
		var parser = $.fn.timespinner.defaults.parser;
		/**
		 * 突出的部分
		 */
		var selections = $.fn.timespinner.defaults.selections;

		/**
		 * 获取/设置分隔符
		 * 
		 * @param separator
		 */
		this.separator = function() {

			switch (arguments.length) {
			case 0:
				return separator;
			default:
				separator = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示秒
		 * 
		 * @param showSeconds
		 */
		this.showSeconds = function() {

			switch (arguments.length) {
			case 0:
				return showSeconds;
			default:
				showSeconds = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置高亮
		 * 
		 * @param highlight
		 */
		this.highlight = function() {

			switch (arguments.length) {
			case 0:
				return highlight;
			default:
				highlight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置格式化
		 * 
		 * @param formatter
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
		 * 获取/设置解析时间
		 * 
		 * @param parser
		 */
		this.parser = function() {

			switch (arguments.length) {
			case 0:
				return parser;
			default:
				parser = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置突出的部分
		 * 
		 * @param selections
		 */
		this.selections = function() {

			switch (arguments.length) {
			case 0:
				return selections;
			default:
				selections = arguments[0];
				return this;
			}
		};
	};
	// 继承微调框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.Spinner);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.TimeSpinner}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.TimeSpinner", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.timespinner({
			// 属性
			// Validate继承属性
			id : this.id(),
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			deltaX : this.deltaX(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// TextBox继承属性
			width : this.width(),
			height : this.height(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// Spinner继承属性
			min : this.min(),
			max : this.max(),
			increment : this.increment(),
			spinAlign : this.spinAlign(),
			spin : this.spin(),
			// 属性
			separator : this.separator(),
			showSeconds : this.showSeconds(),
			highlight : this.highlight(),
			formatter : this.formatter(),
			parser : this.parser(),
			selections : this.selections(),

			// 事件
			// Validate继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Spinner继承事件
			onSpinUp : this.onSpinUp(),
			onSpinDown : this.onSpinDown()
		});

		return this;
	};

	/**
	 * Validate继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).timespinner("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).timespinner("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).timespinner("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).timespinner("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).timespinner("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).timespinner("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).timespinner("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).timespinner("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).timespinner("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).timespinner("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).timespinner("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).timespinner("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).timespinner("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).timespinner("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).timespinner("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).timespinner("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).timespinner("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).timespinner("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).timespinner("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).timespinner("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).timespinner("getIcon", index);
	};

	/**
	 * 方法
	 */
	/**
	 * 获取小时值
	 * 
	 * @returns
	 */
	Constructor.prototype.getHours = function() {

		return $("#" + this.id()).timespinner("getHours");
	};

	/**
	 * 获取分钟值
	 * 
	 * @returns
	 */
	Constructor.prototype.getMinutes = function() {

		return $("#" + this.id()).timespinner("getMinutes");
	};

	/**
	 * 获取秒值
	 * 
	 * @returns
	 */
	Constructor.prototype.getSeconds = function() {

		return $("#" + this.id()).timespinner("getSeconds");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	DateTimeSpinner
 * @package core.html.easyui.form
 * @desc	日期时间微调框模板
 * @type	类
 * 
 * @date	2016年9月1日 10:41:10
 */

core.html.easyui.form.DateTimeSpinner = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.DateTimeSpinner.superClass.constructor.call(this, id);
		this.spin($.fn.datetimespinner.defaults.spin);
		this.separator($.fn.datetimespinner.defaults.separator);
		this.showSeconds($.fn.datetimespinner.defaults.showSeconds);
		this.formatter($.fn.datetimespinner.defaults.formatter);
		this.parser($.fn.datetimespinner.defaults.parser);
		this.selections($.fn.datetimespinner.defaults.selections);
	};
	// 继承时间微调框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.TimeSpinner);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.DateTimeSpinner}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.DateTimeSpinner", "参数异常", "div(id:" + this.id()
					+ ")不存在.");
		}

		// 参数配置
		$jQuery.datetimespinner({
			// 属性
			// Validate继承属性
			id : this.id(),
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			deltaX : this.deltaX(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// TextBox继承属性
			width : this.width(),
			height : this.height(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// Spinner继承属性
			min : this.min(),
			max : this.max(),
			increment : this.increment(),
			spinAlign : this.spinAlign(),
			spin : this.spin(),
			// TimeSpinner继承属性
			separator : this.separator(),
			showSeconds : this.showSeconds(),
			highlight : this.highlight(),
			formatter : this.formatter(),
			parser : this.parser(),
			selections : this.selections(),

			// 事件
			// Validate继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Spinner继承事件
			onSpinUp : this.onSpinUp(),
			onSpinDown : this.onSpinDown()
		});

		return this;
	};

	/**
	 * Validate继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).datetimespinner("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).datetimespinner("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).datetimespinner("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).datetimespinner("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).datetimespinner("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).datetimespinner("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).datetimespinner("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).datetimespinner("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).datetimespinner("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).datetimespinner("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).datetimespinner("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).datetimespinner("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).datetimespinner("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).datetimespinner("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).datetimespinner("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).datetimespinner("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).datetimespinner("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).datetimespinner("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).datetimespinner("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).datetimespinner("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).datetimespinner("getIcon", index);
	};

	/**
	 * TimeSpinner继承方法
	 */
	/**
	 * 获取小时值
	 * 
	 * @returns
	 */
	Constructor.prototype.getHours = function() {

		return $("#" + this.id()).datetimespinner("getHours");
	};

	/**
	 * 获取分钟值
	 * 
	 * @returns
	 */
	Constructor.prototype.getMinutes = function() {

		return $("#" + this.id()).datetimespinner("getMinutes");
	};

	/**
	 * 获取秒值
	 * 
	 * @returns
	 */
	Constructor.prototype.getSeconds = function() {

		return $("#" + this.id()).datetimespinner("getSeconds");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Slider
 * @package core.html.easyui.form
 * @desc	拖动条模板
 * @type	类
 * 
 * @date	2016年9月1日 11:19:58
 */

core.html.easyui.form.Slider = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(_id) {

		// 校验ID
		if (_id === null || _id === undefined) {
			new core.lang.Exception(this, "core.html.easyui.form.Slider", "构造参数异常", "ID属性不能为空");
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
		var width = $.fn.slider.defaults.width;
		/**
		 * 高度
		 */
		var height = $.fn.slider.defaults.height;
		/**
		 * 拖动条方向
		 */
		var mode = $.fn.slider.defaults.mode;
		/**
		 * 方向反转
		 */
		var reversed = $.fn.slider.defaults.reversed;
		/**
		 * 显示值信息
		 */
		var showTip = $.fn.slider.defaults.showTip;
		/**
		 * 禁用
		 */
		var disabled = $.fn.slider.defaults.disabled;
		/**
		 * 拖动条范围
		 */
		var range = $.fn.slider.defaults.range;
		/**
		 * 值
		 */
		var value = $.fn.slider.defaults.value;
		/**
		 * 最小值
		 */
		var min = $.fn.slider.defaults.min;
		/**
		 * 最大值
		 */
		var max = $.fn.slider.defaults.max;
		/**
		 * 步幅
		 */
		var step = $.fn.slider.defaults.step;
		/**
		 * 
		 */
		var rule = $.fn.slider.defaults.rule;
		/**
		 * 格式化显示信息
		 */
		var tipFormatter = $.fn.slider.defaults.tipFormatter;
		/**
		 * 转换某些值
		 */
		var converter = $.fn.slider.defaults.converter;

		/**
		 * 事件
		 */
		/**
		 * 改变事件
		 */
		var onChange = $.fn.slider.defaults.onChange;
		/**
		 * 开始拖动事件
		 */
		var onSlideStart = $.fn.slider.defaults.onSlideStart;
		/**
		 * 结束拖动事件
		 */
		var onSlideEnd = $.fn.slider.defaults.onSlideEnd;
		/**
		 * 完整
		 */
		var onComplete = $.fn.slider.defaults.onComplete;

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
		 * 获取/设置拖动条方向
		 * 
		 * @param mode
		 */
		this.mode = function() {

			switch (arguments.length) {
			case 0:
				return mode;
			default:
				mode = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置方向反转
		 * 
		 * @param reversed
		 */
		this.reversed = function() {

			switch (arguments.length) {
			case 0:
				return reversed;
			default:
				reversed = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示值信息
		 * 
		 * @param showTip
		 */
		this.showTip = function() {

			switch (arguments.length) {
			case 0:
				return showTip;
			default:
				showTip = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置禁用
		 * 
		 * @param disabled
		 */
		this.disabled = function() {

			switch (arguments.length) {
			case 0:
				return disabled;
			default:
				disabled = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置拖动条范围
		 * 
		 * @param range
		 */
		this.range = function() {

			switch (arguments.length) {
			case 0:
				return range;
			default:
				range = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置值
		 * 
		 * @param value
		 */
		this.value = function() {

			switch (arguments.length) {
			case 0:
				return value;
			default:
				value = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置最小值
		 * 
		 * @param min
		 */
		this.min = function() {

			switch (arguments.length) {
			case 0:
				return min;
			default:
				min = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置最大值
		 * 
		 * @param max
		 */
		this.max = function() {

			switch (arguments.length) {
			case 0:
				return max;
			default:
				max = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置步幅
		 * 
		 * @param step
		 */
		this.step = function() {

			switch (arguments.length) {
			case 0:
				return step;
			default:
				step = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param rule
		 */
		this.rule = function() {

			switch (arguments.length) {
			case 0:
				return rule;
			default:
				rule = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置格式化显示信息
		 * 
		 * @param tipFormatter
		 */
		this.tipFormatter = function() {

			switch (arguments.length) {
			case 0:
				return tipFormatter;
			default:
				tipFormatter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置转换某些值
		 * 
		 * @param converter
		 */
		this.converter = function() {

			switch (arguments.length) {
			case 0:
				return converter;
			default:
				converter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置改变事件
		 * 
		 * @param onChange
		 */
		this.onChange = function() {

			switch (arguments.length) {
			case 0:
				return onChange;
			default:
				onChange = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置开始拖动事件
		 * 
		 * @param onSlideStart
		 */
		this.onSlideStart = function() {

			switch (arguments.length) {
			case 0:
				return onSlideStart;
			default:
				onSlideStart = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置结束拖动事件
		 * 
		 * @param onSlideEnd
		 */
		this.onSlideEnd = function() {

			switch (arguments.length) {
			case 0:
				return onSlideEnd;
			default:
				onSlideEnd = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置完整
		 * 
		 * @param onComplete
		 */
		this.onComplete = function() {

			switch (arguments.length) {
			case 0:
				return onComplete;
			default:
				onComplete = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.Slider}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.Slider", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.slider({
			// 属性
			id : this.id(),
			width : this.width(),
			height : this.height(),
			mode : this.mode(),
			reversed : this.reversed(),
			showTip : this.showTip(),
			disabled : this.disabled(),
			range : this.range(),
			value : this.value(),
			min : this.min(),
			max : this.max(),
			step : this.step(),
			rule : this.rule(),
			tipFormatter : this.tipFormatter(),
			converter : this.converter(),

			// 事件
			onChange : this.onChange(),
			onSlideStart : this.onSlideStart(),
			onSlideEnd : this.onSlideEnd(),
			onComplete : this.onComplete()
		});

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

		return $("#" + this.id()).slider("options");
	};

	/**
	 * 销毁对象
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).slider("destroy");
	};

	/**
	 * 改变大小
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function(param) {

		return $("#" + this.id()).slider("resize", param);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).slider("getValue");
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValues = function() {

		return $("#" + this.id()).slider("getValues");
	};

	/**
	 * 设置值
	 * 
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).slider("setValue", value);
	};

	/**
	 * 设置值
	 * 
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return $("#" + this.id()).slider("setValues", values);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).slider("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).slider("reset");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).slider("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).slider("disable");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	FileBox
 * @package core.html.easyui.form
 * @desc	文件框模板
 * @type	类
 * 
 * @date	2016年9月1日 14:28:07
 */

core.html.easyui.form.FileBox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.FileBox.superClass.constructor.call(this, id);
		this.buttonText($.fn.filebox.defaults.buttonText);

		/**
		 * 属性
		 */
		/**
		 * 指定文件类型
		 */
		var accept = $.fn.filebox.defaults.accept;
		/**
		 * 是否可接收多个文件
		 */
		var multiple = $.fn.filebox.defaults.multiple;
		/**
		 * 多文件名之间的分隔符
		 */
		var separator = $.fn.filebox.defaults.separator;

		/**
		 * 获取/设置指定文件类型
		 * 
		 * @param accept
		 */
		this.accept = function() {

			switch (arguments.length) {
			case 0:
				return accept;
			default:
				accept = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否可接收多个文件
		 * 
		 * @param multiple
		 */
		this.multiple = function() {

			switch (arguments.length) {
			case 0:
				return multiple;
			default:
				multiple = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置多文件名之间的分隔符
		 * 
		 * @param separator
		 */
		this.separator = function() {

			switch (arguments.length) {
			case 0:
				return separator;
			default:
				separator = arguments[0];
				return this;
			}
		};
	};
	// 继承验证文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.FileBox}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.FileBox", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.filebox({
			// 属性
			// Validate继承属性
			id : this.id(),
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			deltaX : this.deltaX(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// TextBox继承属性
			width : this.width(),
			height : this.height(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// 属性
			accept : this.accept(),
			multiple : this.multiple(),
			separator : this.separator(),

			// 事件
			// Validate继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon()
		});

		return this;
	};

	/**
	 * Validate继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).filebox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).filebox("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).filebox("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).filebox("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).filebox("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).filebox("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).filebox("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).filebox("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).filebox("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).filebox("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).filebox("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).filebox("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).filebox("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).filebox("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).filebox("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).filebox("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).filebox("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).filebox("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).filebox("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).filebox("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).filebox("getIcon", index);
	};

	// 返回构造函数
	return Constructor;
})();
