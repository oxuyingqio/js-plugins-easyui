/**
 * @name	Menu
 * @package core.html.easyui.button
 * @desc	菜单模板
 * @type	类
 * 
 * @constructor	core.html.easyui.button.Menu(string id/object jQuery)
 * 
 * @method	object										$jQuery()								获取/设置jQuery对象
 *			number/core.html.easyui.button.Menu 		zIndex(number zIndex)					获取/设置
 *			number/core.html.easyui.button.Menu 		left(number left) 						获取/设置
 *			number/core.html.easyui.button.Menu 		top(number top) 						获取/设置
 *			string/core.html.easyui.button.Menu 		align(string align) 					获取/设置
 *			number/core.html.easyui.button.Menu 		minWidth(number minWidth) 				获取/设置
 *			number/core.html.easyui.button.Menu 		itemHeight(number itemHeight) 			获取/设置
 *			number/core.html.easyui.button.Menu 		disabled(number duration) 				获取/设置
 *			boolean/core.html.easyui.button.Menu 		hideOnUnhover(boolean hideOnUnhover) 	获取/设置
 *			boolean/core.html.easyui.button.Menu 		inline(boolean inline) 					获取/设置
 *			boolean/core.html.easyui.button.Menu 		fit(boolean fit) 						获取/设置
 *			function/core.html.easyui.button.Menu 		onShow(function onShow) 				获取/设置
 *			function/core.html.easyui.button.Menu 		onHide(function onHide) 				获取/设置
 *			function/core.html.easyui.button.Menu 		onClick(function onClick)				获取/设置
 *			core.html.easyui.button.Menu 				init() 									初始化组件模板
 *			object										options()
 *			void										show(object pos)
 *			void										hide()
 *			void										destroy()
 *			object										getItem(object itemEl)
 *			void										setText(object param)
 *			void										setIcon(object param)
 *			object										findItem(string text)
 *			void										appendItem(object options)
 *			void										removeItem(object object)
 *			void										enableItem(object itemEl)
 *			void										disableItem(object itemEl)
 *			void										showItem(object itemEl)
 *			void										hideItem(object itemEl)
 *			void										resize(object menuEl)
 * 
 * @date	2018年4月18日 16:56:48
 */
core.html.easyui.button.Menu = (function() {

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
		 * z-index
		 */
		var zIndex = $.fn.menu.defaults.zIndex;
		/**
		 * 左偏移
		 */
		var left = $.fn.menu.defaults.left;
		/**
		 * 上偏移
		 */
		var top = $.fn.menu.defaults.top;
		/**
		 * 位置
		 */
		var align = $.fn.menu.defaults.align;
		/**
		 * 最小宽度
		 */
		var minWidth = $.fn.menu.defaults.minWidth;
		/**
		 * 项目高度
		 */
		var itemHeight = $.fn.menu.defaults.itemHeight;
		/**
		 * 
		 */
		var duration = $.fn.menu.defaults.duration;
		/**
		 * 
		 */
		var hideOnUnhover = $.fn.menu.defaults.hideOnUnhover;
		/**
		 * 
		 */
		var inline = $.fn.menu.defaults.inline;
		/**
		 * 
		 */
		var fit = $.fn.menu.defaults.fit;

		/**
		 * 事件
		 */
		/**
		 * 
		 */
		var onShow = $.fn.menu.defaults.onShow;
		/**
		 * 
		 */
		var onHide = $.fn.menu.defaults.onHide;
		/**
		 * 
		 */
		var onClick = $.fn.menu.defaults.onClick;

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.button.Menu", "构造参数异常", "非字符或jQuery对象");
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
		 * 获取/设置
		 * 
		 * @param zIndex{number}
		 * @returns {number/core.html.easyui.button.Menu}
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
		 * 获取/设置
		 * 
		 * @param left{number}
		 * @returns {number/core.html.easyui.button.Menu}
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
		 * 获取/设置
		 * 
		 * @param top{number}
		 * @returns {number/core.html.easyui.button.Menu}
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
		 * 获取/设置
		 * 
		 * @param align{string}
		 * @returns {string/core.html.easyui.button.Menu}
		 */
		this.align = function() {

			switch (arguments.length) {
			case 0:
				return align;
			default:
				align = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param minWidth{number}
		 * @returns {number/core.html.easyui.button.Menu}
		 */
		this.minWidth = function() {

			switch (arguments.length) {
			case 0:
				return minWidth;
			default:
				minWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param itemHeight{number}
		 * @returns {number/core.html.easyui.button.Menu}
		 */
		this.itemHeight = function() {

			switch (arguments.length) {
			case 0:
				return itemHeight;
			default:
				itemHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param duration{number}
		 * @returns {number/core.html.easyui.button.Menu}
		 */
		this.duration = function() {

			switch (arguments.length) {
			case 0:
				return duration;
			default:
				duration = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param hideOnUnhover{boolean}
		 * @returns {boolean/core.html.easyui.button.Menu}
		 */
		this.hideOnUnhover = function() {

			switch (arguments.length) {
			case 0:
				return hideOnUnhover;
			default:
				hideOnUnhover = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param inline{boolean}
		 * @returns {boolean/core.html.easyui.button.Menu}
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
		 * 获取/设置
		 * 
		 * @param fit{boolean}
		 * @returns {boolean/core.html.easyui.button.Menu}
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
		 * 获取/设置
		 * 
		 * @param onShow{function}
		 * @returns {function/core.html.easyui.button.Menu}
		 */
		this.onShow = function() {

			switch (arguments.length) {
			case 0:
				return onShow;
			default:
				onShow = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onHide{function}
		 * @returns {function/core.html.easyui.button.Menu}
		 */
		this.onHide = function() {

			switch (arguments.length) {
			case 0:
				return onHide;
			default:
				onHide = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onClick{function}
		 * @returns {function/core.html.easyui.button.Menu}
		 */
		this.onClick = function() {

			switch (arguments.length) {
			case 0:
				return onClick;
			default:
				onClick = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.button.Menu}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.button.Menu", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().menu({
			// 属性
			zIndex : this.zIndex(),
			left : this.left(),
			top : this.top(),
			align : this.align(),
			minWidth : this.minWidth(),
			itemHeight : this.itemHeight(),
			duration : this.duration(),
			hideOnUnhover : this.hideOnUnhover(),
			inline : this.inline(),
			fit : this.fit(),

			// 事件
			onShow : this.onShow(),
			onHide : this.onHide(),
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
	Constructor.prototype.options = function() {

		return this.$jQuery().menu("options");
	};

	/**
	 * 
	 * @param pos{object}
	 * @returns
	 */
	Constructor.prototype.show = function(pos) {

		return this.$jQuery().menu("show", pos);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		return this.$jQuery().menu("hide");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().menu("destroy");
	};

	/**
	 * 
	 * @param itemEl{object}
	 * @returns {object}
	 */
	Constructor.prototype.getItem = function(itemEl) {

		return this.$jQuery().menu("getItem", itemEl);
	};

	/**
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.setText = function(param) {

		return this.$jQuery().menu("setText", param);
	};

	/**
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.setIcon = function(param) {

		return this.$jQuery().menu("setIcon", param);
	};

	/**
	 * 
	 * @param text{string}
	 * @returns {object}
	 */
	Constructor.prototype.findItem = function(text) {

		return this.$jQuery().menu("findItem", text);
	};

	/**
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.appendItem = function(options) {

		return this.$jQuery().menu("appendItem", options);
	};

	/**
	 * 
	 * @param itemEl{object}
	 * @returns
	 */
	Constructor.prototype.removeItem = function(itemEl) {

		return this.$jQuery().menu("removeItem", itemEl);
	};

	/**
	 * 
	 * @param itemEl{object}
	 * @returns
	 */
	Constructor.prototype.enableItem = function(itemEl) {

		return this.$jQuery().menu("enableItem", itemEl);
	};

	/**
	 * 
	 * @param itemEl{object}
	 * @returns
	 */
	Constructor.prototype.disableItem = function(itemEl) {

		return this.$jQuery().menu("disableItem", itemEl);
	};

	/**
	 * 
	 * @param itemEl{object}
	 * @returns
	 */
	Constructor.prototype.showItem = function(itemEl) {

		return this.$jQuery().menu("showItem", itemEl);
	};

	/**
	 * 
	 * @param itemEl{object}
	 * @returns
	 */
	Constructor.prototype.hideItem = function(itemEl) {

		return this.$jQuery().menu("hideItem", itemEl);
	};

	/**
	 * 
	 * @param menuEl{object}
	 * @returns
	 */
	Constructor.prototype.resize = function(menuEl) {

		return this.$jQuery().menu("resize", menuEl);
	};

	// 返回构造函数
	return Constructor;
})();