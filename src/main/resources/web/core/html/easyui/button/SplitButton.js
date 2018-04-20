/**
 * @name	SplitButton
 * @package core.html.easyui.button
 * @desc	分割按钮模板
 * @type	类
 * 
 * @constructor	core.html.easyui.button.SplitButton(string id/object jQuery)
 * 
 * @method	继承core.html.easyui.button.MenuButton所有方法
 *			core.html.easyui.button.SplitButton 			init() 						初始化组件模板
 *			object											options()
 *			void											disable()
 *			void											enable()
 *			void											destroy()
 * 
 * @date	2018年4月20日 09:54:48
 */
core.html.easyui.button.SplitButton = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.button.SplitButton.superClass.constructor.call(this, arguments[0]);
		// 默认参数修改
		this.plain($.fn.splitbutton.defaults.plain);
		this.menu($.fn.splitbutton.defaults.menu);
		this.duration($.fn.splitbutton.defaults.duration);
	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.button.MenuButton);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.button.SplitButton}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.button.SplitButton", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().splitbutton({
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
			// MenuButton继承属性
			menu : this.menu(),
			menuAlign : this.menuAlign(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			hasDownArrow : this.hasDownArrow(),

			// menu继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onClick : this.onClick(),
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

		return this.$jQuery().splitbutton("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().splitbutton("disable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().splitbutton("enable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().splitbutton("destroy");
	};

	// 返回构造函数
	return Constructor;
})();