/**
 * @name	Window
 * @package	core.html.easyui.window
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
		this.title("新窗口");
		this.collapsible(true);
		this.minimizable(true);
		this.maximizable(true);
		this.closable(true);

		/**
		 * 属性
		 */
		/**
		 * z-index
		 */
		var zIndex = 9000;
		/**
		 * 是否可拖
		 */
		var draggable = true;
		/**
		 * 是否可改变大小
		 */
		var resizable = true;
		/**
		 * 是否显示影子
		 */
		var shadow = true;
		/**
		 * 
		 */
		var inline = false;
		/**
		 * 模态窗口
		 */
		var modal = true;
		/**
		 * 是否限制窗口位置
		 */
		var constrain = false;

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
			zIndex : this.zIndex(),
			draggable : this.draggable(),
			resizable : this.resizable(),
			shadow : this.shadow(),
			inline : this.inline(),
			modal : this.modal(),
			constrain : this.constrain(),

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
	 * 
	 * @returns
	 */
	Constructor.prototype.setTitle = function(title) {

		return $("#" + this.id()).window("setTitle", title);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.open = function(forceOpen) {

		return $("#" + this.id()).window("open", forceOpen);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.close = function(forceClose) {

		return $("#" + this.id()).window("close", forceClose);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function(forceDestroy) {

		return $("#" + this.id()).window("destroy", forceDestroy);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).window("clear");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.refresh = function(href) {

		return $("#" + this.id()).window("refresh", href);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function(options) {

		return $("#" + this.id()).window("resize", options);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.doLayout = function() {

		return $("#" + this.id()).window("doLayout");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.move = function(options) {

		return $("#" + this.id()).window("move", options);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.maximize = function() {

		return $("#" + this.id()).window("maximize");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.minimize = function() {

		return $("#" + this.id()).window("minimize");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.restore = function() {

		return $("#" + this.id()).window("restore");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.collapse = function(animate) {

		return $("#" + this.id()).window("collapse", animate);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.expand = function(animate) {

		return $("#" + this.id()).window("expand", animate);
	};

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