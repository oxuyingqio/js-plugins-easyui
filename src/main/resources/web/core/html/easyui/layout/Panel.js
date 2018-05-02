/**
 * @name	Panel
 * @package	core.html.easyui.layout
 * @desc	面板模板
 * @type	类
 * 
 * @constructor	core.html.easyui.button.LinkButton(string id/object jQuery)
 * 
 * @method	object									$jQuery()									获取/设置jQuery对象
 * 			string/core.html.easyui.layout.Panel	id(string id)								获取/设置 id
 * 			string/core.html.easyui.layout.Panel	title(string title)							获取/设置标题
 * 			string/core.html.easyui.layout.Panel	iconCls(string iconCls)						获取/设置图标样式
 * 			number/core.html.easyui.layout.Panel	width(number width)							获取/设置宽度
 * 			number/core.html.easyui.layout.Panel	height(number height)						获取/设置高度
 * 			number/core.html.easyui.layout.Panel	left(number left)							获取/设置左偏移
 * 			number/core.html.easyui.layout.Panel	top(number top)								获取/设置上偏移
 * 			string/core.html.easyui.layout.Panel	cls(string cls)								获取/设置样式
 * 			string/core.html.easyui.layout.Panel	headerCls(string headerCls)					获取/设置标头样式
 * 			string/core.html.easyui.layout.Panel	bodyCls(string bodyCls)						获取/设置内容样式
 * 			string/core.html.easyui.layout.Panel	style(string style)							获取/设置样式
 * 			boolean/core.html.easyui.layout.Panel	fit(boolean fit)							获取/设置自适应
 * 			boolean/core.html.easyui.layout.Panel	border(boolean border)						获取/设置边框
 * 			boolean/core.html.easyui.layout.Panel	doSize(boolean doSize)						获取/设置调整布局
 * 			boolean/core.html.easyui.layout.Panel	noheader(boolean noheader)					获取/设置不创建标头
 * 			string/core.html.easyui.layout.Panel	content(string content)						获取/设置内容
 * 			string/core.html.easyui.layout.Panel	halign(string halign)						获取/设置
 * 			string/core.html.easyui.layout.Panel	titleDirection(string titleDirection)		获取/设置
 * 			boolean/core.html.easyui.layout.Panel	collapsible(boolean collapsible)			获取/设置显示折叠按钮
 * 			boolean/core.html.easyui.layout.Panel	minimizable(boolean minimizable)			获取/设置显示最小化按钮
 * 			boolean/core.html.easyui.layout.Panel	maximizable(boolean maximizable)			获取/设置显示最大化按钮
 * 			boolean/core.html.easyui.layout.Panel	closable(boolean closable)					获取/设置显示关闭按钮
 * 			array/core.html.easyui.layout.Panel		tools(array tools)							获取/设置工具条
 * 			object/core.html.easyui.layout.Panel	header(object header)						获取/设置头
 * 			object/core.html.easyui.layout.Panel	footer(object footer)						获取/设置脚
 * 			string/core.html.easyui.layout.Panel	openAnimation(string openAnimation)			获取/设置打开动画
 * 			number/core.html.easyui.layout.Panel	openDuration(number openDuration)			获取/设置打开时间
 * 			string/core.html.easyui.layout.Panel	closeAnimation(string closeAnimation)		获取/设置关闭动画
 * 			number/core.html.easyui.layout.Panel	closeDuration(number closeDuration)			获取/设置关闭时间
 * 			boolean/core.html.easyui.layout.Panel	collapsed(boolean collapsed)				获取/设置初始化折叠
 * 			boolean/core.html.easyui.layout.Panel	minimized(boolean minimized)				获取/设置初始化最小
 * 			boolean/core.html.easyui.layout.Panel	maximized(boolean maximized)				获取/设置初始化最大
 * 			boolean/core.html.easyui.layout.Panel	closed(boolean closed)						获取/设置初始化关闭
 * 			string/core.html.easyui.layout.Panel	href(string href)							获取/设置超链接
 * 			boolean/core.html.easyui.layout.Panel	cache(boolean cache)						获取/设置缓存
 * 			string/core.html.easyui.layout.Panel	loadingMessage(string loadingMessage)		获取/设置加载信息
 * 			function/core.html.easyui.layout.Panel	extractor(function extractor)				获取/设置ajax响应中提取数据
 * 			string/core.html.easyui.layout.Panel	method(string method)						获取/设置请求方式
 * 			object/core.html.easyui.layout.Panel	queryParams(object queryParams)				获取/设置参数
 * 			function/core.html.easyui.layout.Panel	loader(function loader)						获取/设置加载器
 * 			function/core.html.easyui.layout.Panel	onBeforeLoad(function onBeforeLoad)			获取/设置加载前事件
 * 			function/core.html.easyui.layout.Panel	onLoad(function onLoad)						获取/设置加载事件
 * 			function/core.html.easyui.layout.Panel	onLoadError(function onLoadError)			获取/设置加载失败事件
 * 			function/core.html.easyui.layout.Panel	onBeforeOpen(function onBeforeOpen)			获取/设置打开前事件
 * 			function/core.html.easyui.layout.Panel	onOpen(function onOpen)						获取/设置打开事件
 * 			function/core.html.easyui.layout.Panel	onBeforeClose(function onBeforeClose)		获取/设置关闭前事件
 * 			function/core.html.easyui.layout.Panel	onClose(function onClose)					获取/设置关闭事件
 * 			function/core.html.easyui.layout.Panel	onBeforeDestroy(function onBeforeDestroy)	获取/设置销毁事件
 * 			function/core.html.easyui.layout.Panel	onDestroy(function onDestroy)				获取/设置销毁事件
 * 			function/core.html.easyui.layout.Panel	onBeforeCollapse(function onBeforeCollapse)	获取/设置折叠前事件
 * 			function/core.html.easyui.layout.Panel	onCollapse(function onCollapse)				获取/设置折叠事件
 * 			function/core.html.easyui.layout.Panel	onBeforeExpand(function onBeforeExpand)		获取/设置展开事件
 * 			function/core.html.easyui.layout.Panel	onExpand(function onExpand)					获取/设置展开事件
 * 			function/core.html.easyui.layout.Panel	onResize(function onResize)					获取/设置窗口大小改变事件
 * 			function/core.html.easyui.layout.Panel	onMove(function onMove)						获取/设置移动事件
 * 			function/core.html.easyui.layout.Panel	onMaximize(function onMaximize)				获取/设置最大化事件
 * 			function/core.html.easyui.layout.Panel	onRestore(function onRestore)				获取/设置恢复事件
 * 			function/core.html.easyui.layout.Panel	onMinimize(function onMinimize)				获取/设置最小化事件
 * 			core.html.easyui.layout.Panel			init()										初始化组件模板
 * 			object									options()			
 * 			object									panel()				
 * 			object									header()
 * 			object									footer()
 * 			object									body()
 * 			void									setTitle(string titile)						设置标题
 * 			void									open(function forceOpen)					打开面板
 * 			void									close(function forceClose)					关闭面板
 * 			void									destroy(function forceDestroy)				销毁面板
 * 			void									clear()										清空面板内容
 * 			void									refresh(string href)						刷新面板
 * 			void									resize(object options)						改变面板窗口大小
 * 			void									doLayout()									调整布局
 * 			void									move(object options)						移动面板
 * 			void									maximize()									最大化
 * 			void									minimize()									最小化
 * 			void									restore()									恢复面板
 * 			void									collapse(number animate)					折叠面板
 * 			void									expand(number animate)						展开面板
 * 
 * @date	2018年4月24日 11:02:50
 */
core.html.easyui.layout.Panel = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		/**
		 * 属性
		 */
		/**
		 * jQuery对象
		 */
		var $jQuery;
		/**
		 * ID
		 */
		var id = $.fn.panel.defaults.id;
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
		 * 
		 */
		var halign = $.fn.panel.defaults.halign;
		/**
		 * 
		 */
		var titleDirection = $.fn.panel.defaults.titleDirection;
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
		 */
		var onResize = $.fn.panel.defaults.onResize;
		/**
		 * 移动事件
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

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.button.LinkButton", "构造参数异常", "非字符或jQuery对象");
		}

		/**
		 * 获取jQuery对象
		 * 
		 * @returns {object}
		 */
		this.$jQuery = function() {

			return $jQuery;
		};
		
		/**
		 * 获取/设置 id
		 * 
		 * @param id{string}
		 * @returns {string/core.html.easyui.layout.Panel}
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
		 * @param title{string}
		 * @returns {string/core.html.easyui.layout.Panel}
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
		 * @param iconCls{string}
		 * @returns {string/core.html.easyui.layout.Panel}
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
		 * @param width{number}
		 * @returns {number/core.html.easyui.layout.Panel}
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
		 * @param height{number}
		 * @returns {number/core.html.easyui.layout.Panel}
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
		 * @param left{number}
		 * @returns {number/core.html.easyui.layout.Panel}
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
		 * @param top{number}
		 * @returns {number/core.html.easyui.layout.Panel}
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
		 * @param cls{string}
		 * @returns {string/core.html.easyui.layout.Panel}
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
		 * @param headerCls{string}
		 * @returns {string/core.html.easyui.layout.Panel}
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
		 * @param bodyCls{string}
		 * @returns {string/core.html.easyui.layout.Panel}
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
		 * @param style{object}
		 * @returns {object/core.html.easyui.layout.Panel}
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
		 * @param fit{boolean}
		 * @returns {boolean/core.html.easyui.layout.Panel}
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
		 * @param border{boolean}
		 * @returns {boolean/core.html.easyui.layout.Panel}
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
		 * @param doSize{boolean}
		 * @returns {boolean/core.html.easyui.layout.Panel}
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
		 * @param noheader{boolean}
		 * @returns {boolean/core.html.easyui.layout.Panel}
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
		 * @param content{string}
		 * @returns {string/core.html.easyui.layout.Panel}
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
		 * 获取/设置
		 * 
		 * @param halign{string}
		 * @returns {string/core.html.easyui.layout.Panel}
		 */
		this.halign = function() {

			switch (arguments.length) {
			case 0:
				return halign;
			default:
				halign = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param titleDirection{string}
		 * @returns {string/core.html.easyui.layout.Panel}
		 */
		this.titleDirection = function() {

			switch (arguments.length) {
			case 0:
				return titleDirection;
			default:
				titleDirection = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示折叠按钮
		 * 
		 * @param collapsible{boolean}
		 * @returns {boolean/core.html.easyui.layout.Panel}
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
		 * @param minimizable{boolean}
		 * @returns {boolean/core.html.easyui.layout.Panel}
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
		 * @param maximizable{boolean}
		 * @returns {boolean/core.html.easyui.layout.Panel}
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
		 * @param closable{boolean}
		 * @returns {boolean/core.html.easyui.layout.Panel}
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
		 * @param tools{array}
		 * @returns {array/core.html.easyui.layout.Panel}
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
		 * @param header{object}
		 * @returns {object/core.html.easyui.layout.Panel}
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
		 * @param footer{object}
		 * @returns {object/core.html.easyui.layout.Panel}
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
		 * @param openAnimation{string}
		 * @returns {string/core.html.easyui.layout.Panel}
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
		 * @param openDuration{number}
		 * @returns {number/core.html.easyui.layout.Panel}
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
		 * @param closeAnimation{string}
		 * @returns {string/core.html.easyui.layout.Panel}
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
		 * @param closeDuration{number}
		 * @returns {number/core.html.easyui.layout.Panel}
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
		 * @param collapsed{boolean}
		 * @returns {boolean/core.html.easyui.layout.Panel}
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
		 * @param minimized{boolean}
		 * @returns {boolean/core.html.easyui.layout.Panel}
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
		 * @param maximized{boolean}
		 * @returns {boolean/core.html.easyui.layout.Panel}
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
		 * @param closed{boolean}
		 * @returns {boolean/core.html.easyui.layout.Panel}
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
		 * @param href{string}
		 * @returns {string/core.html.easyui.layout.Panel}
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
		 * @param cache{boolean}
		 * @returns {boolean/core.html.easyui.layout.Panel}
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
		 * @param loadingMessage{string}
		 * @returns {string/core.html.easyui.layout.Panel}
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
		 * @param extractor{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param method{string}
		 * @returns {string/core.html.easyui.layout.Panel}
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
		 * @param queryParams{object}
		 * @returns {object/core.html.easyui.layout.Panel}
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
		 * @param loader{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param onBeforeLoad{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param onLoad{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param onLoadError{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param onBeforeOpen{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param onOpen{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param onBeforeClose{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param onClose{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param onBeforeDestroy{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param onDestroy{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param onBeforeCollapse{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param onCollapse{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param onBeforeExpand{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param onExpand{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param onResize{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param onMove{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param onMaximize{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param onRestore{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		 * @param onMinimize{function}
		 * @returns {function/core.html.easyui.layout.Panel}
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
		
		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.layout.Panel", "构造参数异常", "Document不存在.");
		}
		
		// 参数配置
		this.$jQuery().panel({
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
	 * @returns {object}
	 */
	Constructor.prototype.options = function() {

		return this.$jQuery().panel("options");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.panel = function() {

		return this.$jQuery().panel("panel");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.header = function() {

		return this.$jQuery().panel("header");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.footer = function() {

		return this.$jQuery().panel("footer");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.body = function() {

		return this.$jQuery().panel("body");
	};

	/**
	 * 设置标题
	 * 
	 * @param title{string}
	 * @returns
	 */
	Constructor.prototype.setTitle = function(title) {

		return this.$jQuery().panel("setTitle", title);
	};

	/**
	 * 打开面板
	 * 
	 * @param forceOpen{function}
	 *            是否调用回调
	 * @returns
	 */
	Constructor.prototype.open = function(forceOpen) {

		return this.$jQuery().panel("open", forceOpen);
	};

	/**
	 * 关闭面板
	 * 
	 * @param forceClose{function}
	 *            是否调用回调
	 * @returns
	 */
	Constructor.prototype.close = function(forceClose) {

		return this.$jQuery().panel("close", forceClose);
	};

	/**
	 * 销毁面板
	 * 
	 * @param forceDestroy{function}
	 *            是否调用回调
	 * @returns
	 */
	Constructor.prototype.destroy = function(forceDestroy) {

		return this.$jQuery().panel("destroy", forceDestroy);
	};

	/**
	 * 清空面板内容
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().panel("clear");
	};

	/**
	 * 刷新面板
	 * 
	 * @param href{string}
	 *            链接
	 * @returns
	 */
	Constructor.prototype.refresh = function(href) {

		return this.$jQuery().panel("refresh", href);
	};

	/**
	 * 改变面板窗口大小
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.resize = function(options) {

		return this.$jQuery().panel("resize", options);
	};

	/**
	 * 调整布局
	 * 
	 * @returns
	 */
	Constructor.prototype.doLayout = function() {

		return this.$jQuery().panel("doLayout");
	};

	/**
	 * 移动面板
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.move = function(options) {

		return this.$jQuery().panel("move", options);
	};

	/**
	 * 最大化
	 * 
	 * @returns
	 */
	Constructor.prototype.maximize = function() {

		return this.$jQuery().panel("maximize");
	};

	/**
	 * 最小化
	 * 
	 * @returns
	 */
	Constructor.prototype.minimize = function() {

		return this.$jQuery().panel("minimize");
	};

	/**
	 * 恢复面板
	 * 
	 * @returns
	 */
	Constructor.prototype.restore = function() {

		return this.$jQuery().panel("restore");
	};

	/**
	 * 折叠面板
	 * 
	 * @param animate{number}
	 * @returns
	 */
	Constructor.prototype.collapse = function(animate) {

		return this.$jQuery().panel("collapse", animate);
	};

	/**
	 * 展开面板
	 * 
	 * @param animate{number}
	 * @returns
	 */
	Constructor.prototype.expand = function(animate) {

		return this.$jQuery().panel("expand", animate);
	};

	// 返回构造函数
	return Constructor;
})();