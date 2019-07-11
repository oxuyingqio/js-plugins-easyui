/**
 * @name	MenuButton
 * @package core.html.easyui.button
 * @desc	菜单按钮模板
 * @type	类
 * 
 * @constructor	core.html.easyui.button.MenuButton(string id/object jQuery)
 * 
 * @extend	core.html.easyui.button.Menu
 * 			core.html.easyui.button.LinkButton
 * 
 * @method	继承core.html.easyui.button.Menu所有方法
 * 			继承core.html.easyui.button.LinkButton所有方法
 *			string/core.html.easyui.button.MenuButton 		menu(string menu)						获取/设置
 *			string/core.html.easyui.button.MenuButton 		menuAlign(string menuAlign) 			获取/设置
 *			string/core.html.easyui.button.MenuButton 		showEvent(string showEvent) 			获取/设置
 *			string/core.html.easyui.button.MenuButton 		hideEvent(string hideEvent) 			获取/设置
 *			boolean/core.html.easyui.button.MenuButton 		hasDownArrow(boolean hasDownArrow) 		获取/设置
 *			core.html.easyui.button.MenuButton 				init() 									初始化组件模板
 *			object											options()
 *			void											disable()
 *			void											enable()
 *			void											destroy()
 * 
 * @date	2018年4月23日 16:51:01
 */
core.html.easyui.button.MenuButton = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.button.Menu.call(this, arguments[0]);
		core.html.easyui.button.LinkButton.call(this, arguments[0]);
		// 默认参数修改
		this.plain($.fn.menubutton.defaults.plain);
		this.duration($.fn.menubutton.defaults.duration);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var menu = $.fn.menubutton.defaults.menu;
		/**
		 * 
		 */
		var menuAlign = $.fn.menubutton.defaults.menuAlign;
		/**
		 * 
		 */
		var showEvent = $.fn.menubutton.defaults.showEvent;
		/**
		 * 
		 */
		var hideEvent = $.fn.menubutton.defaults.hideEvent;
		/**
		 * 
		 */
		var hasDownArrow = $.fn.menubutton.defaults.hasDownArrow;

		/**
		 * 获取/设置
		 * 
		 * @param menu{string}
		 * @returns {string/core.html.easyui.button.MenuButton}
		 */
		this.menu = function() {

			switch (arguments.length) {
			case 0:
				return menu;
			default:
				menu = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param menuAlign{string}
		 * @returns {string/core.html.easyui.button.MenuButton}
		 */
		this.menuAlign = function() {

			switch (arguments.length) {
			case 0:
				return menuAlign;
			default:
				menuAlign = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param showEvent{string}
		 * @returns {string/core.html.easyui.button.MenuButton}
		 */
		this.showEvent = function() {

			switch (arguments.length) {
			case 0:
				return showEvent;
			default:
				showEvent = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param hideEvent{string}
		 * @returns {string/core.html.easyui.button.MenuButton}
		 */
		this.hideEvent = function() {

			switch (arguments.length) {
			case 0:
				return hideEvent;
			default:
				hideEvent = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param hasDownArrow{boolean}
		 * @returns {boolean/core.html.easyui.button.MenuButton}
		 */
		this.hasDownArrow = function() {

			switch (arguments.length) {
			case 0:
				return hasDownArrow;
			default:
				hasDownArrow = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.button.MenuButton}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.button.MenuButton", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().menubutton({
			// Menu继承属性
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
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			disabled : this.disabled(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// 属性
			menu : this.menu(),
			menuAlign : this.menuAlign(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			hasDownArrow : this.hasDownArrow(),
			
			// menu继承事件
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

		return this.$jQuery().menubutton("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().menubutton("disable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().menubutton("enable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().menubutton("destroy");
	};

	// 返回构造函数
	return Constructor;
})();