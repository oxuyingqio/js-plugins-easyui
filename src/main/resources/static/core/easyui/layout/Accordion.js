/**
 * @name	Accordion
 * @package core.html.easyui.layout
 * @desc	手风琴模板
 * @type	类
 * 
 * @constructor	core.html.easyui.layout.Accordion(string id/object jQuery)
 * 
 * @extend	core.html.easyui.layout.Panel
 * 
 * @method	继承core.html.easyui.layout.Panel所有方法
 * 			boolean/core.html.easyui.layout.Accordion	animate(boolean animate)	
 * 			boolean/core.html.easyui.layout.Accordion	multiple(boolean multiple)				获取/设置
 * 			number/core.html.easyui.layout.Accordion	selected(number selected)				获取/设置
 * 			function/core.html.easyui.layout.Accordion	onSelect(function onSelect)				获取/设置
 * 			function/core.html.easyui.layout.Accordion	onUnselect(function onUnselect)			获取/设置
 * 			function/core.html.easyui.layout.Accordion	onAdd(function onAdd)					获取/设置
 * 			function/core.html.easyui.layout.Accordion	onBeforeRemove(function onBeforeRemove)	获取/设置
 * 			function/core.html.easyui.layout.Accordion	onRemove(function onRemove)				获取/设置
 * 			core.html.easyui.layout.Accordion			init()									初始化
 * 			object										options()					
 * 			array										panels()						
 * 			void										resize()								改变窗口大小
 * 			object										getSelected()							获取选中
 * 			array										getSelections()							获取选中
 * 			object										getPanel(object which)					获取指定
 * 			number										getPanelIndex(object tab)				获取指定索引
 * 			void										select(object which)					选中指定
 * 			void										unselect(object which)					取消选中指定
 * 			void										add(object options)						添加
 * 			void										remove(object which)					
 * 
 * @date	2018年4月24日 15:06:56
 */
core.html.easyui.layout.Accordion = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.layout.Accordion.superClass.constructor.call(this, arguments[0]);
		// 默认参数修改
		this.width($.fn.accordion.defaults.width);
		this.height($.fn.accordion.defaults.height);
		this.fit($.fn.accordion.defaults.fit);
		this.border($.fn.accordion.defaults.border);
		this.halign($.fn.accordion.defaults.halign);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var animate = $.fn.accordion.defaults.animate;
		/**
		 * 
		 */
		var multiple = $.fn.accordion.defaults.multiple;
		/**
		 * 
		 */
		var selected = $.fn.accordion.defaults.selected;

		/**
		 * 事件
		 */
		/**
		 * 选择事件
		 */
		var onSelect = $.fn.accordion.defaults.onSelect;
		/**
		 * 取消选择事件
		 */
		var onUnselect = $.fn.accordion.defaults.onUnselect;
		/**
		 * 添加事件
		 */
		var onAdd = $.fn.accordion.defaults.onAdd;
		/**
		 * 
		 */
		var onBeforeRemove = $.fn.accordion.defaults.onBeforeRemove;
		/**
		 * 
		 */
		var onRemove = $.fn.accordion.defaults.onRemove;

		/**
		 * 获取/设置
		 * 
		 * @param animate{boolean}
		 * @returns {boolean/core.html.easyui.layout.Accordion}
		 */
		this.animate = function() {

			switch (arguments.length) {
			case 0:
				return animate;
			default:
				animate = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param multiple{boolean}
		 * @returns {boolean/core.html.easyui.layout.Accordion}
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
		 * @param selected{number}
		 * @returns {number/core.html.easyui.layout.Accordion}
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
		 * 获取/设置选择事件
		 * 
		 * @param onSelect{function}
		 * @returns {function/core.html.easyui.layout.Accordion}
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
		 * @param onUnselect{function}
		 * @returns {function/core.html.easyui.layout.Accordion}
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
		 * 获取/设置添加事件
		 * 
		 * @param onAdd{function}
		 * @returns {function/core.html.easyui.layout.Accordion}
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
		 * @param onBeforeRemove{function}
		 * @returns {function/core.html.easyui.layout.Accordion}
		 */
		this.onBeforeRemove = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeRemove;
			default:
				onBeforeRemove = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onRemove{function}
		 * @returns {function/core.html.easyui.layout.Accordion}
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
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.layout.Panel);

	/**
	 * 初始化
	 * 
	 * @returns {core.html.easyui.layout.Accordion}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.layout.Accordion", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().accordion({
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
			animate : this.animate(),
			multiple : this.multiple(),
			selected : this.selected(),

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
			onSelect : this.onSelect(),
			onUnselect : this.onUnselect(),
			onAdd : this.onAdd(),
			onBeforeRemove : this.onBeforeRemove(),
			onRemove : this.onRemove()
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

		return this.$jQuery().accordion("options");
	};

	/**
	 * 
	 * @returns {array}
	 */
	Constructor.prototype.panels = function() {

		return this.$jQuery().accordion("panels");
	};

	/**
	 * 改变窗口大小
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function() {

		return this.$jQuery().accordion("resize");
	};

	/**
	 * 获取选中
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getSelected = function() {

		return this.$jQuery().accordion("getSelected");
	};

	/**
	 * 获取选中
	 * 
	 * @returns {array}
	 */
	Constructor.prototype.getSelections = function() {

		return this.$jQuery().accordion("getSelections");
	};

	/**
	 * 获取指定
	 * 
	 * @param which{object}
	 * @returns {object}
	 */
	Constructor.prototype.getPanel = function(which) {

		return this.$jQuery().accordion("getPanel", which);
	};

	/**
	 * 获取指定索引
	 * 
	 * @param panel{object}
	 * @returns {number}
	 */
	Constructor.prototype.getPanelIndex = function(panel) {

		return this.$jQuery().accordion("getPanelIndex", panel);
	};

	/**
	 * 选中指定
	 * 
	 * @param which{object}
	 * @returns
	 */
	Constructor.prototype.select = function(which) {

		return this.$jQuery().accordion("select", which);
	};

	/**
	 * 取消选中指定
	 * 
	 * @param which{object}
	 * @returns
	 */
	Constructor.prototype.unselect = function(which) {

		return this.$jQuery().accordion("unselect", which);
	};

	/**
	 * 添加
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.add = function(options) {

		return this.$jQuery().accordion("add", options);
	};

	/**
	 * 移除指定
	 * 
	 * @param which{object}
	 * @returns
	 */
	Constructor.prototype.remove = function(which) {

		return this.$jQuery().accordion("remove", which);
	};

	// 返回构造函数
	return Constructor;
})();