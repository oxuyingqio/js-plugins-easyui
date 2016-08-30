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
		this.collapsible(false);
		this.minimizable(false);
		this.maximizable(false);
		this.resizable(false);

		/**
		 * 属性
		 */
		/**
		 * 工具条
		 */
		var toolbar = null;
		/**
		 * 按钮组
		 */
		var buttons = null;

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