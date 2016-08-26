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
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(_id) {

		// 对象个数+1
		count++;

		/**
		 * 属性
		 */
		/**
		 * ID
		 */
		var id = _id || "coreHtmlEasyuiLayoutPanel" + count;
		/**
		 * 标题
		 */
		var title = null;
		/**
		 * 按钮样式
		 */
		var iconCls = null;
		/**
		 * 宽
		 */
		var width = undefined;
		/**
		 * 高
		 */
		var height = undefined;
		/**
		 * 左偏移
		 */
		var left = null;
		/**
		 * 上偏移
		 */
		var top = null;
		/**
		 * 样式
		 */
		var cls = null;
		/**
		 * 标头样式
		 */
		var headerCls = null;
		/**
		 * 内容样式
		 */
		var bodyCls = null;
		/**
		 * 样式
		 */
		var style = {};
		/**
		 * 自适应
		 */
		var fit = false;
		/**
		 * 边框
		 */
		var border = true;
		/**
		 * 调整布局
		 */
		var doSize = true;
		/**
		 * 不创建标头
		 */
		var noheader = false;
		/**
		 * 内容
		 */
		var content = null;
		/**
		 * 显示折叠按钮
		 */
		var collapsible = false;
		/**
		 * 显示最小化按钮
		 */
		var minimizable = false;
		/**
		 * 显示最大化按钮
		 */
		var maximizable = false;
		/**
		 * 显示关闭按钮
		 */
		var closable = false;
		/**
		 * 工具条
		 */
		var tools = [];
		/**
		 * 头
		 */
		var header = null;
		/**
		 * 脚
		 */
		var footer = null;
		/**
		 * 打开动画
		 */
		var openAnimation = "";
		/**
		 * 打开时间
		 */
		var openDuration = 400;
		/**
		 * 关闭动画
		 */
		var closeAnimation = "";
		/**
		 * 关闭时间
		 */
		var closeDuration = 400;
		/**
		 * 初始化折叠
		 */
		var collapsed = false;
		/**
		 * 初始化最小
		 */
		var minimized = false;
		/**
		 * 初始化最大
		 */
		var maximized = false;
		/**
		 * 初始化关闭
		 */
		var closed = false;
		/**
		 * 超链接
		 */
		var href = null;
		/**
		 * 缓存
		 */
		var cache = true;
		/**
		 * 加载信息
		 */
		var loadingMessage = "Loading…";
		/**
		 * ajax响应中提取数据
		 */
		var extractor = function(data) {
			return data;
		};
		/**
		 * 请求方式
		 */
		var method = "get";
		/**
		 * 参数
		 */
		var queryParams = {};
		/**
		 * 加载器
		 */
		var loader = function() {

		};

		/**
		 * 事件
		 */
		/**
		 * 加载前事件
		 * 
		 * @param param
		 */
		var onBeforeLoad = function(param) {

		};
		/**
		 * 加载事件
		 */
		var onLoad = function() {

		};
		/**
		 * 加载失败事件
		 */
		var onLoadError = function() {

		};
		/**
		 * 打开前事件
		 */
		var onBeforeOpen = function() {

		};
		/**
		 * 打开事件
		 */
		var onOpen = function() {

		};
		/**
		 * 关闭前事件
		 */
		var onBeforeClose = function() {

		};
		/**
		 * 关闭事件
		 */
		var onClose = function() {

		};
		/**
		 * 销毁前事件
		 */
		var onBeforeDestroy = function() {

		};
		/**
		 * 销毁事件
		 */
		var onDestroy = function() {

		};
		/**
		 * 折叠前事件
		 */
		var onBeforeCollapse = function() {

		};
		/**
		 * 折叠事件
		 */
		var onCollapse = function() {

		};
		/**
		 * 展开前事件
		 */
		var onBeforeExpand = function() {

		};
		/**
		 * 展开事件
		 */
		var onExpand = function() {

		};
		/**
		 * 改变大小事件
		 * 
		 * @param width
		 * @param height
		 */
		var onResize = function(width, height) {

		};
		/**
		 * 移动事件
		 * 
		 * @param left
		 * @param top
		 */
		var onMove = function(left, top) {

		};
		/**
		 * 最大化事件
		 */
		var onMaximize = function() {

		};
		/**
		 * 恢复事件
		 */
		var onRestore = function() {

		};
		/**
		 * 最小化事件
		 */
		var onMinimize = function() {

		};

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
	 * 
	 * @returns
	 */
	Constructor.prototype.setTitle = function(title) {

		return $("#" + this.id()).panel("setTitle", title);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.open = function(forceOpen) {

		return $("#" + this.id()).panel("open", forceOpen);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.close = function(forceClose) {

		return $("#" + this.id()).panel("close", forceClose);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function(forceDestroy) {

		return $("#" + this.id()).panel("destroy", forceDestroy);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).panel("clear");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.refresh = function(href) {

		return $("#" + this.id()).panel("refresh", href);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function(options) {

		return $("#" + this.id()).panel("resize", options);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.doLayout = function() {

		return $("#" + this.id()).panel("doLayout");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.move = function(options) {

		return $("#" + this.id()).panel("move", options);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.maximize = function() {

		return $("#" + this.id()).panel("maximize");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.minimize = function() {

		return $("#" + this.id()).panel("minimize");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.restore = function() {

		return $("#" + this.id()).panel("restore");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.collapse = function(animate) {

		return $("#" + this.id()).panel("collapse", animate);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.expand = function(animate) {

		return $("#" + this.id()).panel("expand", animate);
	};

	// 返回构造函数
	return Constructor;
})();