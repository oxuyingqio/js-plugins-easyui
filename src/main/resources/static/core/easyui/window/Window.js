/**
 * @name	Window
 * @package core.html.easyui.window
 * @desc	窗口模板
 * @type	类
 * 
 * @constructor core.html.easyui.window.Window(string id/object jQuery)
 * 
 * @extend	core.html.easyui.base.Draggable
 * 			core.html.easyui.base.Resizable
 * 			core.html.easyui.layout.Panel
 * 
 * @method	继承core.html.easyui.base.Draggable所有方法
 * 			继承core.html.easyui.base.Resizable所有方法
 * 			继承core.html.easyui.layout.Panel所有方法
 * 			number/core.html.easyui.window.Window		zIndex(number zIndex)				获取/设置zIndex
 * 			boolean/core.html.easyui.window.Window		draggable(boolean draggable)		获取/设置是否可拖
 * 			boolean/core.html.easyui.window.Window		resizable(boolean resizable)		获取/设置是否可改变大小
 * 			boolean/core.html.easyui.window.Window		shadow(boolean shadow)				获取/设置是否显示影子
 * 			boolean/core.html.easyui.window.Window		inline(boolean inline)				获取/设置
 * 			boolean/core.html.easyui.window.Window		modal(boolean modal)				获取/设置模态窗口
 * 			boolean/core.html.easyui.window.Window		constrain(boolean constrain)		获取/设置是否限制窗口位置
 * 			core.html.easyui.window.Window				init()								初始化
 * 			object										window()	
 * 			void										hcenter()
 * 			void										vcenter()
 * 			void										center()
 * 
 * @date	2018年4月25日 13:51:13
 */
core.html.easyui.window.Window = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.base.Draggable.call(this, arguments[0]);
		core.html.easyui.base.Resizable.call(this, arguments[0]);
		core.html.easyui.layout.Panel.call(this, arguments[0]);
		this.title($.fn.window.defaults.title);
		this.collapsible($.fn.window.defaults.collapsible);
		this.minimizable($.fn.window.defaults.minimizable);
		this.maximizable($.fn.window.defaults.maximizable);
		this.closable($.fn.window.defaults.closable);
		this.closed($.fn.window.defaults.closed);
		this.border($.fn.window.defaults.border);

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
		 * @param zIndex{number}
		 * @returns {number/core.html.easyui.window.Window}
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
		 * @param draggable{boolean}
		 * @returns {boolean/core.html.easyui.window.Window}
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
		 * @param resizable{boolean}
		 * @returns {boolean/core.html.easyui.window.Window}
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
		 * @param shadow{boolean}
		 * @returns {boolean/core.html.easyui.window.Window}
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
		 * @param inline{boolean}
		 * @returns {boolean/core.html.easyui.window.Window}
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
		 * @param modal{boolean}
		 * @returns {boolean/core.html.easyui.window.Window}
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
		 * @param constrain{boolean}
		 * @returns {boolean/core.html.easyui.window.Window}
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

	/**
	 * 初始化
	 * 
	 * @returns {core.html.easyui.window.Window}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.window.Window", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().window({
			// Draggable继承属性
			proxy : this.proxy(),
			revert : this.revert(),
			cursor : this.cursor(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			handle : this.handle(),
			disabled : this.disabled(),
			edge : this.edge(),
			axis : this.axis(),
			delay : this.delay(),
			// Resizable继承属性
			handles : this.handles(),
			minWidth : this.minWidth(),
			minHeight : this.minHeight(),
			maxWidth : this.maxWidth(),
			maxHeight : this.maxHeight(),
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
			// 属性
			zIndex : this.zIndex(),
			draggable : this.draggable(),
			resizable : this.resizable(),
			shadow : this.shadow(),
			inline : this.inline(),
			modal : this.modal(),
			constrain : this.constrain(),

			// Draggable继承事件
			onBeforeDrag : this.onBeforeDrag(),
			onStartDrag : this.onStartDrag(),
			onDrag : this.onDrag(),
			onEndDrag : this.onEndDrag(),
			onStopDrag : this.onStopDrag(),
			// Resizable继承事件
			onStartResize : this.onStartResize(),
			onResize : this.onResize(),
			onStopResize : this.onStopResize(),
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
	Constructor.prototype.window = function() {

		return this.$jQuery().window("window");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.hcenter = function() {

		return this.$jQuery().window("hcenter");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.vcenter = function() {

		return this.$jQuery().window("vcenter");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.center = function() {

		return this.$jQuery().window("center");
	};

	// 返回构造函数
	return Constructor;
})();