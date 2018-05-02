/**
 * @name	Dialog
 * @package core.html.easyui.window
 * @desc	弹出框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.window.Dialog(string id/object jQuery)
 * 
 * @extend	core.html.easyui.window.Window
 * 			core.html.easyui.button.LinkButton
 * 
 * @method	继承core.html.easyui.window.Window所有方法
 * 			继承core.html.easyui.button.LinkButton所有方法
 * 			array/core.html.easyui.window.Dialog	toolbar(array toolbar)				获取/设置工具条
 * 			array/core.html.easyui.window.Dialog	buttons(array buttons)				获取/设置按钮组
 * 			core.html.easyui.window.Dialog			init()								初始化
 * 			object									dialog()
 * 
 * @date	2018年4月25日 14:05:00
 */
core.html.easyui.window.Dialog = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.window.Window.call(this, arguments[0]);
		core.html.easyui.button.LinkButton.call(this, arguments[0]);
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
		 * @param toolbar{array}
		 * @returns {array/core.html.easyui.window.Dialog}
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
		 * @param buttons{array}
		 * @returns {array/core.html.easyui.window.Dialog}
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

	/**
	 * 初始化
	 * 
	 * @returns {core.html.easyui.window.Dialog}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.window.Dialog", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().dialog({
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
			// Window继承属性
			zIndex : this.zIndex(),
			draggable : this.draggable(),
			resizable : this.resizable(),
			shadow : this.shadow(),
			inline : this.inline(),
			modal : this.modal(),
			constrain : this.constrain(),
			// LinkButton继承属性
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconAlign : this.iconAlign(),
			size : this.size(),

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
			onMinimize : this.onMinimize(),
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
	 * @returns {object}
	 */
	Constructor.prototype.dialog = function() {

		return this.$jQuery().dialog("dialog");
	};

	// 返回构造函数
	return Constructor;
})();