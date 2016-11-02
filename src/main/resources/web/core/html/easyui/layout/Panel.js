/**
 * @name	Panel
 * @package	core.html.easyui.layout
 * @desc	面板模板
 * @type	类
 * 
 * @constructor	core.html.easyui.layout.Panel(String id)
 * 
 * @method	String/core.html.easyui.layout.Panel		id()								获取/设置 id
 * 			String/core.html.easyui.layout.Panel		title()								获取/设置标题
 * 			String/core.html.easyui.layout.Panel		iconCls()							获取/设置图标样式
 * 			Number/core.html.easyui.layout.Panel		width()								获取/设置宽度
 * 			Number/core.html.easyui.layout.Panel		height()							获取/设置高度
 * 			Number/core.html.easyui.layout.Panel		left()								获取/设置左偏移
 * 			Number/core.html.easyui.layout.Panel		top()								获取/设置上偏移
 * 			String/core.html.easyui.layout.Panel		cls()								获取/设置样式
 * 			String/core.html.easyui.layout.Panel		headerCls()							获取/设置标头样式
 * 			String/core.html.easyui.layout.Panel		bodyCls()							获取/设置内容样式
 * 			String/core.html.easyui.layout.Panel		style()								获取/设置样式
 * 			Boolean/core.html.easyui.layout.Panel		fit()								获取/设置自适应
 * 			Boolean/core.html.easyui.layout.Panel		border()							获取/设置边框
 * 			Boolean/core.html.easyui.layout.Panel		doSize()							获取/设置调整布局
 * 			Boolean/core.html.easyui.layout.Panel		noheader()							获取/设置不创建标头
 * 			String/core.html.easyui.layout.Panel		content()							获取/设置内容
 * 			Boolean/core.html.easyui.layout.Panel		collapsible()						获取/设置显示折叠按钮
 * 			Boolean/core.html.easyui.layout.Panel		minimizable()						获取/设置显示最小化按钮
 * 			Boolean/core.html.easyui.layout.Panel		maximizable()						获取/设置显示最大化按钮
 * 			Boolean/core.html.easyui.layout.Panel		closable()							获取/设置显示关闭按钮
 * 			Array/core.html.easyui.layout.Panel			tools()								获取/设置工具条
 * 			Object/core.html.easyui.layout.Panel		header()							获取/设置头
 * 			Object/core.html.easyui.layout.Panel		footer()							获取/设置脚
 * 			Object/core.html.easyui.layout.Panel		openAnimation()						获取/设置打开动画
 * 			Object/core.html.easyui.layout.Panel		openDuration()						获取/设置打开时间
 * 			Object/core.html.easyui.layout.Panel		closeAnimation()					获取/设置关闭动画
 * 			Object/core.html.easyui.layout.Panel		closeDuration()						获取/设置关闭时间
 * 			Object/core.html.easyui.layout.Panel		collapsed()							获取/设置初始化折叠
 * 			Object/core.html.easyui.layout.Panel		minimized()							获取/设置初始化最小
 * 			Object/core.html.easyui.layout.Panel		maximized()							获取/设置初始化最大
 * 			Object/core.html.easyui.layout.Panel		closed()							获取/设置初始化关闭
 * 			Object/core.html.easyui.layout.Panel		href()								获取/设置超链接
 * 			Object/core.html.easyui.layout.Panel		cache()								获取/设置缓存
 * 			Object/core.html.easyui.layout.Panel		loadingMessage()					获取/设置加载信息
 * 			Object/core.html.easyui.layout.Panel		extractor()							获取/设置ajax响应中提取数据
 * 			Object/core.html.easyui.layout.Panel		method()							获取/设置请求方式
 * 			Object/core.html.easyui.layout.Panel		queryParams()						获取/设置参数
 * 			function/core.html.easyui.layout.Panel		loader()							获取/设置加载器
 * 			function/core.html.easyui.layout.Panel		onBeforeLoad()						获取/设置加载前事件
 * 			function/core.html.easyui.layout.Panel		onLoad()							获取/设置加载事件
 * 			function/core.html.easyui.layout.Panel		onLoadError()						获取/设置加载失败事件
 * 			function/core.html.easyui.layout.Panel		onBeforeOpen()						获取/设置打开前事件
 * 			function/core.html.easyui.layout.Panel		onOpen()							获取/设置打开事件
 * 			function/core.html.easyui.layout.Panel		onBeforeClose()						获取/设置关闭前事件
 * 			function/core.html.easyui.layout.Panel		onClose()							获取/设置关闭事件
 * 			function/core.html.easyui.layout.Panel		onBeforeDestroy()					获取/设置销毁事件
 * 			function/core.html.easyui.layout.Panel		onDestroy()							获取/设置销毁事件
 * 			function/core.html.easyui.layout.Panel		onBeforeCollapse()					获取/设置折叠前事件
 * 			function/core.html.easyui.layout.Panel		onCollapse()						获取/设置折叠事件
 * 			function/core.html.easyui.layout.Panel		onBeforeExpand()					获取/设置展开事件
 * 			function/core.html.easyui.layout.Panel		onExpand()							获取/设置展开事件
 * 			function/core.html.easyui.layout.Panel		onResize()							获取/设置窗口大小改变事件
 * 			function/core.html.easyui.layout.Panel		onMove()							获取/设置移动事件
 * 			function/core.html.easyui.layout.Panel		onMaximize()						获取/设置最大化事件
 * 			function/core.html.easyui.layout.Panel		onRestore()							获取/设置恢复事件
 * 			function/core.html.easyui.layout.Panel		onMinimize()						获取/设置最小化事件
 * 			core.html.easyui.layout.Panel				init()								初始化组件模板
 * 			Object										options()			
 * 			Object										panel()				
 * 			Object										header()
 * 			Object										footer()
 * 			Object										body()
 * 			Object										setTitle(String titile)				设置标题
 * 			Object										open(Boolean forceOpen)				打开面板
 * 			Object										close(Boolean forceClose)			关闭面板
 * 			Object										destroy(Boolean forceDestroy)		销毁面板
 * 			Object										clear()								清空面板内容
 * 			Object										refresh()							刷新面板
 * 			Object										resize()							改变面板窗口大小
 * 			Object										doLayout()							调整布局
 * 			Object										move(Object options)				移动面板
 * 			Object										maximize()							最大化
 * 			Object										minimize()							最小化
 * 			Object										restore()							恢复面板
 * 			Object										collapse()							折叠面板
 * 			Object										expand()							展开面板
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
		
		// 校验ID个数
		var idLength = $("[id='" + this.id() + "']").length;
		if (idLength === 0) {
			new core.lang.Exception(this, "core.html.easyui.layout.Panel", "构造参数异常", "DIV(ID:" + this.id() + ")不存在.");
		} else if (idLength > 1) {
			new core.lang.Warning(this, "core.html.easyui.layout.Panel", "构造参数警告", "DIV(ID:" + this.id() + ")存在多个.");
		}
		
		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
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