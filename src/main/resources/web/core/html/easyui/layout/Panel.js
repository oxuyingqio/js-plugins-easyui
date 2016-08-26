/**
 * @name Panel
 * @package core.html.easyui.layout
 * @desc 面板模板
 * @type 类
 * 
 * @date 2016年8月25日 17:57:53
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
		 * 加载前
		 * 
		 * @param param
		 */
		var onBeforeLoad = function(param) {

		};
		/**
		 * 加载
		 */
		var onLoad = function() {

		};
		/**
		 * 加载失败
		 */
		var onLoadError = function() {

		};
		/**
		 * 打开前
		 */
		var onBeforeOpen = function() {

		};
		/**
		 * 打开
		 */
		var onOpen = function() {

		};
		/**
		 * 关闭前
		 */
		var onBeforeClose = function() {

		};
		/**
		 * 关闭
		 */
		var onClose = function() {

		};
		/**
		 * 销毁前
		 */
		var onBeforeDestroy = function() {

		};
		/**
		 * 销毁
		 */
		var onDestroy = function() {

		};
		/**
		 * 折叠前
		 */
		var onBeforeCollapse = function() {

		};
		/**
		 * 折叠
		 */
		var onCollapse = function() {

		};
		/**
		 * 展开前
		 */
		var onBeforeExpand = function() {

		};
		/**
		 * 展开
		 */
		var onExpand = function() {

		};
		/**
		 * 改变大小
		 * 
		 * @param width
		 * @param height
		 */
		var onResize = function(width, height) {

		};
		/**
		 * 移动
		 * 
		 * @param left
		 * @param top
		 */
		var onMove = function(left, top) {

		};
		/**
		 * 最大化
		 */
		var onMaximize = function() {

		};
		/**
		 * 恢复
		 */
		var onRestore = function() {

		};
		/**
		 * 最小化
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

		this.height = function() {

			switch (arguments.length) {
			case 0:
				return height;
			default:
				height = arguments[0];
				return this;
			}
		};

		this.left = function() {

			switch (arguments.length) {
			case 0:
				return left;
			default:
				left = arguments[0];
				return this;
			}
		};

		this.top = function() {

			switch (arguments.length) {
			case 0:
				return top;
			default:
				top = arguments[0];
				return this;
			}
		};

		this.cls = function() {

			switch (arguments.length) {
			case 0:
				return cls;
			default:
				cls = arguments[0];
				return this;
			}
		};

		this.headerCls = function() {

			switch (arguments.length) {
			case 0:
				return headerCls;
			default:
				headerCls = arguments[0];
				return this;
			}
		};

		this.bodyCls = function() {

			switch (arguments.length) {
			case 0:
				return bodyCls;
			default:
				bodyCls = arguments[0];
				return this;
			}
		};

		this.style = function() {

			switch (arguments.length) {
			case 0:
				return style;
			default:
				style = arguments[0];
				return this;
			}
		};

		this.fit = function() {

			switch (arguments.length) {
			case 0:
				return fit;
			default:
				fit = arguments[0];
				return this;
			}
		};

		this.border = function() {

			switch (arguments.length) {
			case 0:
				return border;
			default:
				border = arguments[0];
				return this;
			}
		};

		this.doSize = function() {

			switch (arguments.length) {
			case 0:
				return doSize;
			default:
				doSize = arguments[0];
				return this;
			}
		};

		this.noheader = function() {

			switch (arguments.length) {
			case 0:
				return noheader;
			default:
				noheader = arguments[0];
				return this;
			}
		};

		this.content = function() {

			switch (arguments.length) {
			case 0:
				return content;
			default:
				content = arguments[0];
				return this;
			}
		};

		this.collapsible = function() {

			switch (arguments.length) {
			case 0:
				return collapsible;
			default:
				collapsible = arguments[0];
				return this;
			}
		};

		this.minimizable = function() {

			switch (arguments.length) {
			case 0:
				return minimizable;
			default:
				minimizable = arguments[0];
				return this;
			}
		};

		this.maximizable = function() {

			switch (arguments.length) {
			case 0:
				return maximizable;
			default:
				maximizable = arguments[0];
				return this;
			}
		};

		this.closable = function() {

			switch (arguments.length) {
			case 0:
				return closable;
			default:
				closable = arguments[0];
				return this;
			}
		};

		this.tools = function() {

			switch (arguments.length) {
			case 0:
				return tools;
			default:
				tools = arguments[0];
				return this;
			}
		};

		this.header = function() {

			switch (arguments.length) {
			case 0:
				return header;
			default:
				header = arguments[0];
				return this;
			}
		};

		this.footer = function() {

			switch (arguments.length) {
			case 0:
				return footer;
			default:
				footer = arguments[0];
				return this;
			}
		};

		this.openAnimation = function() {

			switch (arguments.length) {
			case 0:
				return openAnimation;
			default:
				openAnimation = arguments[0];
				return this;
			}
		};

		this.openDuration = function() {

			switch (arguments.length) {
			case 0:
				return openDuration;
			default:
				openDuration = arguments[0];
				return this;
			}
		};

		this.closeAnimation = function() {

			switch (arguments.length) {
			case 0:
				return closeAnimation;
			default:
				closeAnimation = arguments[0];
				return this;
			}
		};

		this.closeDuration = function() {

			switch (arguments.length) {
			case 0:
				return closeDuration;
			default:
				closeDuration = arguments[0];
				return this;
			}
		};

		this.collapsed = function() {

			switch (arguments.length) {
			case 0:
				return collapsed;
			default:
				collapsed = arguments[0];
				return this;
			}
		};

		this.minimized = function() {

			switch (arguments.length) {
			case 0:
				return minimized;
			default:
				minimized = arguments[0];
				return this;
			}
		};

		this.maximized = function() {

			switch (arguments.length) {
			case 0:
				return maximized;
			default:
				maximized = arguments[0];
				return this;
			}
		};

		this.closed = function() {

			switch (arguments.length) {
			case 0:
				return closed;
			default:
				closed = arguments[0];
				return this;
			}
		};

		this.href = function() {

			switch (arguments.length) {
			case 0:
				return href;
			default:
				href = arguments[0];
				return this;
			}
		};

		this.cache = function() {

			switch (arguments.length) {
			case 0:
				return cache;
			default:
				cache = arguments[0];
				return this;
			}
		};

		this.loadingMessage = function() {

			switch (arguments.length) {
			case 0:
				return loadingMessage;
			default:
				loadingMessage = arguments[0];
				return this;
			}
		};

		this.extractor = function() {

			switch (arguments.length) {
			case 0:
				return extractor;
			default:
				extractor = arguments[0];
				return this;
			}
		};

		this.method = function() {

			switch (arguments.length) {
			case 0:
				return method;
			default:
				method = arguments[0];
				return this;
			}
		};

		this.queryParams = function() {

			switch (arguments.length) {
			case 0:
				return queryParams;
			default:
				queryParams = arguments[0];
				return this;
			}
		};

		this.loader = function() {

			switch (arguments.length) {
			case 0:
				return loader;
			default:
				loader = arguments[0];
				return this;
			}
		};

		this.onBeforeLoad = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeLoad;
			default:
				onBeforeLoad = arguments[0];
				return this;
			}
		};

		this.onLoad = function() {

			switch (arguments.length) {
			case 0:
				return onLoad;
			default:
				onLoad = arguments[0];
				return this;
			}
		};

		this.onLoadError = function() {

			switch (arguments.length) {
			case 0:
				return onLoadError;
			default:
				onLoadError = arguments[0];
				return this;
			}
		};

		this.onBeforeOpen = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeOpen;
			default:
				onBeforeOpen = arguments[0];
				return this;
			}
		};

		this.onOpen = function() {

			switch (arguments.length) {
			case 0:
				return onOpen;
			default:
				onOpen = arguments[0];
				return this;
			}
		};

		this.onBeforeClose = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeClose;
			default:
				onBeforeClose = arguments[0];
				return this;
			}
		};

		this.onClose = function() {

			switch (arguments.length) {
			case 0:
				return onClose;
			default:
				onClose = arguments[0];
				return this;
			}
		};

		this.onBeforeDestroy = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeDestroy;
			default:
				onBeforeDestroy = arguments[0];
				return this;
			}
		};

		this.onDestroy = function() {

			switch (arguments.length) {
			case 0:
				return onDestroy;
			default:
				onDestroy = arguments[0];
				return this;
			}
		};

		this.onBeforeCollapse = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeCollapse;
			default:
				onBeforeCollapse = arguments[0];
				return this;
			}
		};

		this.onCollapse = function() {

			switch (arguments.length) {
			case 0:
				return onCollapse;
			default:
				onCollapse = arguments[0];
				return this;
			}
		};

		this.onBeforeExpand = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeExpand;
			default:
				onBeforeExpand = arguments[0];
				return this;
			}
		};

		this.onExpand = function() {

			switch (arguments.length) {
			case 0:
				return onExpand;
			default:
				onExpand = arguments[0];
				return this;
			}
		};

		this.onResize = function() {

			switch (arguments.length) {
			case 0:
				return onResize;
			default:
				onResize = arguments[0];
				return this;
			}
		};

		this.onMove = function() {

			switch (arguments.length) {
			case 0:
				return onMove;
			default:
				onMove = arguments[0];
				return this;
			}
		};

		this.onMaximize = function() {

			switch (arguments.length) {
			case 0:
				return onMaximize;
			default:
				onMaximize = arguments[0];
				return this;
			}
		};

		this.onRestore = function() {

			switch (arguments.length) {
			case 0:
				return onRestore;
			default:
				onRestore = arguments[0];
				return this;
			}
		};

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

	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.layout.Panel", "方法异常", "div(id:" + this.id() + ")不存在.");
		}

		$jQuery.panel({
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
	};

	Constructor.prototype.options = function() {

	};

	Constructor.prototype.panel = function() {

	};

	Constructor.prototype.header = function() {

	};

	Constructor.prototype.footer = function() {

	};

	Constructor.prototype.body = function() {

	};

	Constructor.prototype.setTitle = function(title) {

	};

	Constructor.prototype.open = function(forceOpen) {

	};

	Constructor.prototype.close = function(forceClose) {

	};

	Constructor.prototype.destroy = function(forceDestroy) {

	};

	Constructor.prototype.clear = function() {

	};

	Constructor.prototype.refresh = function(href) {

	};

	Constructor.prototype.resize = function(options) {

	};

	Constructor.prototype.doLayout = function() {

	};

	Constructor.prototype.move = function(options) {

	};

	Constructor.prototype.maximize = function() {

	};

	Constructor.prototype.minimize = function() {

	};

	Constructor.prototype.restore = function() {

	};

	Constructor.prototype.collapse = function(animate) {

	};

	Constructor.prototype.expand = function(animate) {

	};

	// 返回构造函数
	return Constructor;
})();