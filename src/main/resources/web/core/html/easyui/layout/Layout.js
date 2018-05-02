/**
 * @name	Layout
 * @package core.html.easyui.layout
 * @desc	Tab页模板
 * @type	类
 * 
 * @constructor	core.html.easyui.layout.Layout(string id/object jQuery)
 * 
 * @extend	core.html.easyui.layout.Panel
 * 			core.html.easyui.base.Resizable
 * 
 * @method	继承core.html.easyui.layout.Panel所有方法
 * 			继承core.html.easyui.base.Resizable所有方法
 * 			function/core.html.easyui.layout.Layout		onAdd(function onAdd)				获取/设置添加事件
 * 			function/core.html.easyui.layout.Layout		onRemove(function onRemove)			获取/设置
 * 			core.html.easyui.layout.Layout				init()								初始化
 * 			void										resize(object param)				
 * 			object										panel(string region)					
 * 			void										collapse(string region)				
 * 			void										expand(string region)				
 * 			void										add(object options)					
 * 			void										remove(string region)				
 * 			void										split(string region)				
 * 			void										unsplit(string region)				
 * 
 * @date	2018年4月24日 16:05:50
 */
core.html.easyui.layout.Layout = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.layout.Panel.call(this, arguments[0]);
		core.html.easyui.base.Resizable.call(this, arguments[0]);
		// 默认参数修改
		this.fit($.fn.layout.defaults.fit);
		this.onCollapse($.fn.layout.defaults.onCollapse);
		this.onExpand($.fn.layout.defaults.onExpand);

		/**
		 * 属性
		 */

		/**
		 * 事件
		 */
		/**
		 * 添加事件
		 */
		var onAdd = $.fn.layout.defaults.onAdd;
		/**
		 * 
		 */
		var onRemove = $.fn.layout.defaults.onRemove;

		/**
		 * 获取/设置添加事件
		 * 
		 * @param onAdd{function}
		 * @returns {function/core.html.easyui.layout.Layout}
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
		 * 获取/设置
		 * 
		 * @param onRemove{function}
		 * @returns {function/core.html.easyui.layout.Layout}
		 */
		this.onRemove = function() {

			switch (arguments.length) {
			case 0:
				return onRemove;
			default:
				onRemove = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化
	 * 
	 * @returns {core.html.easyui.layout.Layout}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.layout.Layout", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().layout({
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
			// Resizable继承属性
			disabled : this.disabled(),
			handles : this.handles(),
			minWidth : this.minWidth(),
			minHeight : this.minHeight(),
			maxWidth : this.maxWidth(),
			maxHeight : this.maxHeight(),
			edge : this.edge(),

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
			// Resizable继承事件
			onStartResize : this.onStartResize(),
			onStopResize : this.onStopResize(),
			// 事件
			onAdd : this.onAdd(),
			onRemove : this.onRemove()
		});

		return this;
	};

	/**
	 * 方法
	 */
	/**
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.resize = function(param) {

		return this.$jQuery().layout("resize", param);
	};

	/**
	 * 
	 * @param region{string}
	 * @returns {object}
	 */
	Constructor.prototype.panel = function(region) {

		return this.$jQuery().layout("panel", region);
	};

	/**
	 * 
	 * @param region{string}
	 * @returns
	 */
	Constructor.prototype.collapse = function(region) {

		return this.$jQuery().layout("collapse", region);
	};

	/**
	 * 
	 * @param region{string}
	 * @returns
	 */
	Constructor.prototype.expand = function(region) {

		return this.$jQuery().layout("expand", region);
	};

	/**
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.add = function(options) {

		return this.$jQuery().layout("add", options);
	};

	/**
	 * 
	 * @param region{string}
	 * @returns
	 */
	Constructor.prototype.remove = function(region) {

		return this.$jQuery().layout("remove", region);
	};

	/**
	 * 
	 * @param region{string}
	 * @returns
	 */
	Constructor.prototype.split = function(region) {

		return this.$jQuery().layout("split", region);
	};

	/**
	 * 
	 * @param region{string}
	 * @returns
	 */
	Constructor.prototype.unsplit = function(region) {

		return this.$jQuery().layout("unsplit", region);
	};

	// 返回构造函数
	return Constructor;
})();