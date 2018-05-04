/**
 * 包
 */

// HTML EasyUI扩展包
core.html.easyui = {

	// 基础包
	base : {},

	// 按钮包
	button : {},

	// 列表包
	datagrid : {},

	// 表单包
	form : {},

	// 布局包
	layout : {},

	// 窗口包
	window : {}
};
/**
 * @name	DateBox
 * @package	core.html.easyui
 * @desc	日期输入框扩展
 * @type	对象扩展
 * 
 * @date	2016年8月25日 12:01:20
 */

/**
 * 日期输入框格式化
 * 
 * @param date{date}
 *            日期
 * @returns {string}
 */
$.fn.datebox.defaults.formatter = function(date) {

	return date.format("yyyy-MM-dd");
};

/**
 * 日期输入框解析器
 * 
 * @param str{string}
 *            日期字符串
 * @returns {date}
 */
$.fn.datebox.defaults.parser = function(dateStr) {

	if (!dateStr)
		return new Date();

	// 日期字符串数据
	var data = dateStr.split("-");
	// 年
	var year = parseInt(data[0], 10);
	// 月
	var month = parseInt(data[1], 10);
	// 日
	var day = parseInt(data[2], 10);
	
	// 判断是否为数字
	if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {

		return new Date(year, month - 1, day);
	} else {

		return new Date();
	}
};
/**
 * @name	tabs
 * @package core.html.easyui.extend
 * @desc	Tab页扩展
 * @type	对象扩展
 * 
 * @date	2016年8月25日 12:02:47
 */
$.extend($.fn.tabs.methods, {

	/**
	 * 双击事件
	 * 
	 * @param $jQuery{object}
	 * @param callback{function}
	 * @returns
	 */
	onDblClick : function(jQuery, callback) {

		return jQuery.each(function() {

			var _this = this;

			$(this).children("div.tabs-header").find("ul.tabs").undelegate("li", "dblclick.tabs").delegate("li",
					"dblclick.tabs", function(e) {

						if (callback && typeof (callback) === "function") {

							var title = $(this).text();
							var index = $(_this).tabs("getTabIndex", $(_this).tabs("getTab", title));

							callback(index, title);
						}
					});
		});
	}
});
/**
 * @name	LinkButton
 * @package core.html.easyui.button
 * @desc	按钮模板
 * @type	类
 * 
 * @constructor	core.html.easyui.button.LinkButton(string id/object jQuery)
 * 
 * @method	object											$jQuery()						获取/设置jQuery对象
 * 			number/core.html.easyui.button.LinkButton		width(number width)				获取/设置宽度
 * 			number/core.html.easyui.button.LinkButton		height(number height)			获取/设置高度
 * 			string/core.html.easyui.button.LinkButton		id(string id)					获取/设置id
 * 			boolean/core.html.easyui.button.LinkButton		disabled(boolean disabled)		获取/设置禁用
 * 			boolean/core.html.easyui.button.LinkButton		toggle(boolean toggle)			获取/设置
 * 			boolean/core.html.easyui.button.LinkButton		selected(boolean selected)		获取/设置是否已选
 * 			string/core.html.easyui.button.LinkButton		group(string group)				获取/设置分组
 * 			boolean/core.html.easyui.button.LinkButton		plain(boolean plain)			获取/设置平的
 * 			string/core.html.easyui.button.LinkButton		text(string text)				获取/设置按钮文本
 * 			string/core.html.easyui.button.LinkButton		iconCls(string iconCls)			获取/设置按钮图标
 * 			string/core.html.easyui.button.LinkButton		iconAlign(string iconAlign)		获取/设置图标位置
 * 			string/core.html.easyui.button.LinkButton		size(string size)				获取/设置尺寸
 * 			function/core.html.easyui.button.LinkButton		onClick(function onClick)		获取/设置点击事件
 * 			core.html.easyui.button.LinkButton				init()							初始化组件模板
 * 			object											options()						
 * 			void											resize(object param)			改变大小
 * 			void											disable()						禁用
 * 			void											enable()						启用
 * 			void											select()						选中
 * 			void											unselect()						取消选中
 * 
 * @date	2018年4月19日 09:07:55
 */
core.html.easyui.button.LinkButton = (function() {

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
		 * 宽度
		 */
		var width = $.fn.linkbutton.defaults.width;
		/**
		 * 高度
		 */
		var height = $.fn.linkbutton.defaults.height;
		/**
		 * ID
		 */
		var id = $.fn.linkbutton.defaults.id;
		/**
		 * 禁用
		 */
		var disabled = $.fn.linkbutton.defaults.disabled;
		/**
		 * 
		 */
		var toggle = $.fn.linkbutton.defaults.toggle;
		/**
		 * 是否已选
		 */
		var selected = $.fn.linkbutton.defaults.selected;
		/**
		 * 分组
		 */
		var group = $.fn.linkbutton.defaults.group;
		/**
		 * 平的
		 */
		var plain = $.fn.linkbutton.defaults.plain;
		/**
		 * 按钮文本
		 */
		var text = $.fn.linkbutton.defaults.text;
		/**
		 * 按钮图标
		 */
		var iconCls = $.fn.linkbutton.defaults.iconCls;
		/**
		 * 图标位置
		 */
		var iconAlign = $.fn.linkbutton.defaults.iconAlign;
		/**
		 * 尺寸
		 */
		var size = $.fn.linkbutton.defaults.size;

		/**
		 * 事件
		 */
		/**
		 * 点击事件
		 */
		var onClick = $.fn.linkbutton.defaults.onClick;

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
		 * 获取/设置宽度
		 * 
		 * @param width{number}
		 * @returns {number/core.html.easyui.button.LinkButton}
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
		 * @returns {number/core.html.easyui.button.LinkButton}
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
		 * 获取/设置id
		 * 
		 * @param id{string}
		 * @returns {string/core.html.easyui.button.LinkButton}
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
		 * 获取/设置禁用
		 * 
		 * @param disabled{boolean}
		 * @returns {boolean/core.html.easyui.button.LinkButton}
		 */
		this.disabled = function() {

			switch (arguments.length) {
			case 0:
				return disabled;
			default:
				disabled = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param toggle{boolean}
		 * @returns {boolean/core.html.easyui.button.LinkButton}
		 */
		this.toggle = function() {

			switch (arguments.length) {
			case 0:
				return toggle;
			default:
				toggle = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否已选
		 * 
		 * @param selected{boolean}
		 * @returns {boolean/core.html.easyui.button.LinkButton}
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
		 * 获取/设置分组
		 * 
		 * @param group{string}
		 * @returns {string/core.html.easyui.button.LinkButton}
		 */
		this.group = function() {

			switch (arguments.length) {
			case 0:
				return group;
			default:
				group = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置平的
		 * 
		 * @param plain{boolean}
		 * @returns {boolean/core.html.easyui.button.LinkButton}
		 */
		this.plain = function() {

			switch (arguments.length) {
			case 0:
				return plain;
			default:
				plain = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按钮文本
		 * 
		 * @param text{string}
		 * @returns {string/core.html.easyui.button.LinkButton}
		 */
		this.text = function() {

			switch (arguments.length) {
			case 0:
				return text;
			default:
				text = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按钮图标
		 * 
		 * @param iconCls{string}
		 * @returns {string/core.html.easyui.button.LinkButton}
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
		 * 获取/设置图标位置
		 * 
		 * @param iconAlign{string}
		 * @returns {string/core.html.easyui.button.LinkButton}
		 */
		this.iconAlign = function() {

			switch (arguments.length) {
			case 0:
				return iconAlign;
			default:
				iconAlign = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置尺寸
		 * 
		 * @param size{string}
		 * @returns {string/core.html.easyui.button.LinkButton}
		 */
		this.size = function() {

			switch (arguments.length) {
			case 0:
				return size;
			default:
				size = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置点击事件
		 * 
		 * @param onClick{function}
		 * @returns {function/core.html.easyui.button.LinkButton}
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
	 * @returns {core.html.easyui.button.LinkButton}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.button.LinkButton", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().linkbutton({
			// 属性
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
	Constructor.prototype.options = function() {

		return $("#" + this.id()).linkbutton("options");
	};

	/**
	 * 改变大小
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.resize = function(param) {

		return $("#" + this.id()).linkbutton("resize", param);
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).linkbutton("disable");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).linkbutton("enable");
	};

	/**
	 * 选中
	 * 
	 * @returns
	 */
	Constructor.prototype.select = function() {

		return $("#" + this.id()).linkbutton("select");
	};

	/**
	 * 取消选中
	 * 
	 * @returns
	 */
	Constructor.prototype.unselect = function() {

		return $("#" + this.id()).linkbutton("unselect");
	};

	// 返回构造函数
	return Constructor;
})();
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
/**
 * @name	SplitButton
 * @package core.html.easyui.button
 * @desc	分割按钮模板
 * @type	类
 * 
 * @constructor	core.html.easyui.button.SplitButton(string id/object jQuery)
 * 
 * @extend	core.html.easyui.button.MenuButton
 * 
 * @method	继承core.html.easyui.button.MenuButton所有方法
 *			core.html.easyui.button.SplitButton 			init() 						初始化组件模板
 *			object											options()
 *			void											disable()
 *			void											enable()
 *			void											destroy()
 * 
 * @date	2018年4月23日 16:51:17
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
/**
 * @name	SwitchButton
 * @package core.html.easyui.button
 * @desc	开关按钮模板
 * @type	类
 * 
 * @constructor	core.html.easyui.button.SwitchButton(string id/object jQuery)
 * 
 * @method	object											$jQuery()							获取jQuery对象
 * 			number/core.html.easyui.button.SwitchButton		width(number width)					获取/设置宽度
 * 			number/core.html.easyui.button.SwitchButton		height(number height)				获取/设置高度
 * 			number/core.html.easyui.button.SwitchButton		handleWidth(number handleWidth)		获取/设置中心宽度
 * 			boolean/core.html.easyui.button.SwitchButton	checked(boolean checked)			获取/设置选中
 * 			boolean/core.html.easyui.button.SwitchButton	disabled(boolean disabled)			获取/设置不可用
 * 			boolean/core.html.easyui.button.SwitchButton	readonly(boolean readonly)			获取/设置只读
 * 			boolean/core.html.easyui.button.SwitchButton	reversed(boolean reversed)			获取/设置开关位置反转
 * 			string/core.html.easyui.button.SwitchButton		onText(string onText)				获取/设置开文字描述
 * 			string/core.html.easyui.button.SwitchButton		offText(string offText)				获取/设置关文字描述
 * 			string/core.html.easyui.button.SwitchButton		handleText(string handleText)		获取/设置中心文字
 * 			string/core.html.easyui.button.SwitchButton		value(string value)					获取/设置值
 * 			function/core.html.easyui.button.SwitchButton	onChange(function onChange)			获取/设置改变事件
 * 			core.html.easyui.button.SwitchButton			init()								初始化组件模板
 * 			object											options()				
 * 			void											resize(object param)				改变大小
 * 			void											disable()							禁用
 * 			void											enable()							启用
 * 			void											readonly(object mode)				只读
 * 			void											check()								选中
 * 			void											uncheck()							取消选中
 * 			void											clear()								清除选中值
 * 			void											reset()								重置选中值
 * 			void											setValue(string value)				设置值
 * 
 * @date	2018年4月20日 10:34:28
 */
core.html.easyui.button.SwitchButton = (function() {

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
		 * 宽度
		 */
		var width = $.fn.switchbutton.defaults.width;
		/**
		 * 高度
		 */
		var height = $.fn.switchbutton.defaults.height;
		/**
		 * 中心宽度
		 */
		var handleWidth = $.fn.switchbutton.defaults.handleWidth;
		/**
		 * 选中
		 */
		var checked = $.fn.switchbutton.defaults.checked;
		/**
		 * 不可用
		 */
		var disabled = $.fn.switchbutton.defaults.disabled;
		/**
		 * 只读
		 */
		var readonly = $.fn.switchbutton.defaults.readonly;
		/**
		 * 开关位置反转
		 */
		var reversed = $.fn.switchbutton.defaults.reversed;
		/**
		 * 开文字描述
		 */
		var onText = $.fn.switchbutton.defaults.onText;
		/**
		 * 关文字描述
		 */
		var offText = $.fn.switchbutton.defaults.offText;
		/**
		 * 中心文字
		 */
		var handleText = $.fn.switchbutton.defaults.handleText;
		/**
		 * 值
		 */
		var value = $.fn.switchbutton.defaults.value;

		/**
		 * 事件
		 */
		/**
		 * 改变事件
		 */
		var onChange = $.fn.switchbutton.defaults.onChange;

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.button.SwitchButton", "构造参数异常", "非字符或jQuery对象");
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
		 * 获取/设置宽度
		 * 
		 * @param width{number}
		 * @returns {number/core.html.easyui.button.SwitchButton}
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
		 * @returns {number/core.html.easyui.button.SwitchButton}
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
		 * 获取/设置中心宽度
		 * 
		 * @param handleWidth{number}
		 * @returns {number/core.html.easyui.button.SwitchButton}
		 */
		this.handleWidth = function() {

			switch (arguments.length) {
			case 0:
				return handleWidth;
			default:
				handleWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置选中
		 * 
		 * @param checked{boolean}
		 * @returns {boolean/core.html.easyui.button.SwitchButton}
		 */
		this.checked = function() {

			switch (arguments.length) {
			case 0:
				return checked;
			default:
				checked = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置不可用
		 * 
		 * @param disabled{boolean}
		 * @returns {boolean/core.html.easyui.button.SwitchButton}
		 */
		this.disabled = function() {

			switch (arguments.length) {
			case 0:
				return disabled;
			default:
				disabled = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置只读
		 * 
		 * @param readonly{boolean}
		 * @returns {boolean/core.html.easyui.button.SwitchButton}
		 */
		this.readonly = function() {

			switch (arguments.length) {
			case 0:
				return readonly;
			default:
				readonly = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置开关位置反转
		 * 
		 * @param reversed{boolean}
		 * @returns {boolean/core.html.easyui.button.SwitchButton}
		 */
		this.reversed = function() {

			switch (arguments.length) {
			case 0:
				return reversed;
			default:
				reversed = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置开文字描述
		 * 
		 * @param onText{string}
		 * @returns {string/core.html.easyui.button.SwitchButton}
		 */
		this.onText = function() {

			switch (arguments.length) {
			case 0:
				return onText;
			default:
				onText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置关文字描述
		 * 
		 * @param offText{string}
		 * @returns {string/core.html.easyui.button.SwitchButton}
		 */
		this.offText = function() {

			switch (arguments.length) {
			case 0:
				return offText;
			default:
				offText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置中心文字
		 * 
		 * @param handleText{string}
		 * @returns {string/core.html.easyui.button.SwitchButton}
		 */
		this.handleText = function() {

			switch (arguments.length) {
			case 0:
				return handleText;
			default:
				handleText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置值
		 * 
		 * @param value{string}
		 * @returns {string/core.html.easyui.button.SwitchButton}
		 */
		this.value = function() {

			switch (arguments.length) {
			case 0:
				return value;
			default:
				value = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置改变事件
		 * 
		 * @param onChange{function}
		 * @returns {function/core.html.easyui.button.SwitchButton}
		 */
		this.onChange = function() {

			switch (arguments.length) {
			case 0:
				return onChange;
			default:
				onChange = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.button.SwitchButton}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.button.SwitchButton", "构造参数异常", "Document不存在.");
		}

		// 备份this对象
		var _this = this;

		// 参数配置
		this.$jQuery().switchbutton({
			// 属性
			width : this.width(),
			height : this.height(),
			handleWidth : this.handleWidth(),
			checked : this.checked(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			reversed : this.reversed(),
			onText : this.onText(),
			offText : this.offText(),
			handleText : this.handleText(),
			value : this.value(),

			// 事件
			onChange : function(checked) {

				// 修改值
				checked ? _this.setValue(_this.value()) : _this.setValue("");
				// 调用自定义改变事件
				_this.onChange()(checked);
			}
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

		return this.$jQuery()
		switchbutton("options");
	};

	/**
	 * 改变大小
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.resize = function(param) {

		return this.$jQuery().switchbutton("resize", param);
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().switchbutton("disable");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().switchbutton("enable");
	};

	/**
	 * 只读
	 * 
	 * @param mode{object}
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return this.$jQuery().switchbutton("readonly", mode);
	};

	/**
	 * 选中
	 * 
	 * @returns
	 */
	Constructor.prototype.check = function() {

		return this.$jQuery().switchbutton("check");
	};

	/**
	 * 取消选中
	 * 
	 * @returns
	 */
	Constructor.prototype.uncheck = function() {

		return this.$jQuery().switchbutton("uncheck");
	};

	/**
	 * 清除选中值
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().switchbutton("clear");
	};

	/**
	 * 重置选中值
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return this.$jQuery().switchbutton("reset");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().switchbutton("setValue", value);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Draggable
 * @package core.html.easyui.base
 * @desc	拖动模板
 * @type	类
 * 
 * @constructor	core.html.easyui.base.Draggable(string id/object jQuery)
 * 
 * @method	object										$jQuery()								获取/设置jQuery对象
 *			function/core.html.easyui.base.Draggable 	proxy(function proxy)					获取/设置代理
 *			boolean/core.html.easyui.base.Draggable 	revert(boolean revert) 					获取/设置停止拖动,元素是否返回初始位置
 *			string/core.html.easyui.base.Draggable 		cursor(string cursor) 					获取/设置拖动时,鼠标样式
 *			number/core.html.easyui.base.Draggable 		deltaX(number deltaX) 					获取/设置水平偏移值
 *			number/core.html.easyui.base.Draggable 		deltaY(number deltaY) 					获取/设置垂直偏移值
 *			object/core.html.easyui.base.Draggable 		handle(object handle) 					获取/设置
 *			boolean/core.html.easyui.base.Draggable 	disabled(boolean disabled) 				获取/设置禁止拖动
 *			number/core.html.easyui.base.Draggable 		edge(number edge) 						获取/设置可拖动的宽度
 *			string/core.html.easyui.base.Draggable 		axis(string axis) 						获取/设置元素移动的轴,v/h
 *			number/core.html.easyui.base.Draggable 		delay(number delay) 					获取/设置延迟启动拖动毫秒值
 *			function/core.html.easyui.base.Draggable 	onBeforeDrag(function onBeforeDrag) 	获取/设置拖动前事件
 *			function/core.html.easyui.base.Draggable 	onStartDrag(function onStartDrag) 		获取/设置开始拖动事件
 *			function/core.html.easyui.base.Draggable 	onDrag(function onDrag)					获取/设置拖动中事件
 *			function/core.html.easyui.base.Draggable 	onEndDrag(function onEndDrag) 			获取/设置结束拖动前事件
 *			function/core.html.easyui.base.Draggable 	onStopDrag(function onStopDrag) 		获取/设置结束拖动事件
 *			core.html.easyui.base.Draggable 			init() 									初始化组件模板
 *			object										options()
 *			void										enable()								启用
 *			void										disable()								禁用
 * 
 * @date	2018年4月20日 11:39:25
 */
core.html.easyui.base.Draggable = (function() {

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
		 * 代理
		 */
		var proxy = $.fn.draggable.defaults.proxy;
		/**
		 * 停止拖动,元素是否返回初始位置
		 */
		var revert = $.fn.draggable.defaults.revert;
		/**
		 * 拖动时,鼠标样式
		 */
		var cursor = $.fn.draggable.defaults.cursor;
		/**
		 * 水平偏移值
		 */
		var deltaX = $.fn.draggable.defaults.deltaX;
		/**
		 * 垂直偏移值
		 */
		var deltaY = $.fn.draggable.defaults.deltaY;
		/**
		 * ?
		 */
		var handle = $.fn.draggable.defaults.handle;
		/**
		 * 禁止拖动
		 */
		var disabled = $.fn.draggable.defaults.disabled;
		/**
		 * 可拖动的宽度
		 */
		var edge = $.fn.draggable.defaults.edge;
		/**
		 * 元素移动的轴,v/h
		 */
		var axis = $.fn.draggable.defaults.axis;
		/**
		 * 延迟启动拖动毫秒值
		 */
		var delay = $.fn.draggable.defaults.delay;

		/**
		 * 事件
		 */
		/**
		 * 拖动前
		 */
		var onBeforeDrag = $.fn.draggable.defaults.onBeforeDrag;
		/**
		 * 开始拖动
		 */
		var onStartDrag = $.fn.draggable.defaults.onStartDrag;
		/**
		 * 拖动中
		 */
		var onDrag = $.fn.draggable.defaults.onDrag;
		/**
		 * 结束拖动前
		 */
		var onEndDrag = $.fn.draggable.defaults.onEndDrag;
		/**
		 * 结束拖动
		 */
		var onStopDrag = $.fn.draggable.defaults.onStopDrag;

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.base.Draggable", "构造参数异常", "非字符或jQuery对象");
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
		 * 获取/设置代理
		 * 
		 * @param proxy{function}
		 * @returns {function/core.html.easyui.base.Draggable}
		 */
		this.proxy = function() {

			switch (arguments.length) {
			case 0:
				return proxy;
			default:
				proxy = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置停止拖动,元素是否返回初始位置
		 * 
		 * @param revert{boolean}
		 * @returns {boolean/core.html.easyui.base.Draggable}
		 */
		this.revert = function() {

			switch (arguments.length) {
			case 0:
				return revert;
			default:
				revert = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置拖动时,鼠标样式
		 * 
		 * @param cursor{string}
		 * @returns {string/core.html.easyui.base.Draggable}
		 */
		this.cursor = function() {

			switch (arguments.length) {
			case 0:
				return cursor;
			default:
				cursor = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置水平偏移值
		 * 
		 * @param deltaX{number}
		 * @returns {number/core.html.easyui.base.Draggable}
		 */
		this.deltaX = function() {

			switch (arguments.length) {
			case 0:
				return deltaX;
			default:
				deltaX = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置垂直偏移值
		 * 
		 * @param deltaY{number}
		 * @returns {number/core.html.easyui.base.Draggable}
		 */
		this.deltaY = function() {

			switch (arguments.length) {
			case 0:
				return deltaY;
			default:
				deltaY = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param handle{object}
		 * @returns {object/core.html.easyui.base.Draggable}
		 */
		this.handle = function() {

			switch (arguments.length) {
			case 0:
				return handle;
			default:
				handle = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置禁止拖动
		 * 
		 * @param disabled{boolean}
		 * @returns {boolean/core.html.easyui.base.Draggable}
		 */
		this.disabled = function() {

			switch (arguments.length) {
			case 0:
				return disabled;
			default:
				disabled = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置可拖动的宽度
		 * 
		 * @param edge{number}
		 * @returns {number/core.html.easyui.base.Draggable}
		 */
		this.edge = function() {

			switch (arguments.length) {
			case 0:
				return edge;
			default:
				edge = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置元素移动的轴,v/h
		 * 
		 * @param axis{string}
		 * @returns {string/core.html.easyui.base.Draggable}
		 */
		this.axis = function() {

			switch (arguments.length) {
			case 0:
				return axis;
			default:
				axis = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置延迟启动拖动毫秒值
		 * 
		 * @param delay{number}
		 * @returns {number/core.html.easyui.base.Draggable}
		 */
		this.delay = function() {

			switch (arguments.length) {
			case 0:
				return delay;
			default:
				delay = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置拖动前事件
		 * 
		 * @param onBeforeDrag{function}
		 * @returns {function/core.html.easyui.base.Draggable}
		 */
		this.onBeforeDrag = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeDrag;
			default:
				onBeforeDrag = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置开始拖动事件
		 * 
		 * @param onStartDrag{function}
		 * @returns {function/core.html.easyui.base.Draggable}
		 */
		this.onStartDrag = function() {

			switch (arguments.length) {
			case 0:
				return onStartDrag;
			default:
				onStartDrag = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置拖动中事件
		 * 
		 * @param onDrag{function}
		 * @returns {function/core.html.easyui.base.Draggable}
		 */
		this.onDrag = function() {

			switch (arguments.length) {
			case 0:
				return onDrag;
			default:
				onDrag = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置结束拖动前事件
		 * 
		 * @param onEndDrag{function}
		 * @returns {function/core.html.easyui.base.Draggable}
		 */
		this.onEndDrag = function() {

			switch (arguments.length) {
			case 0:
				return onEndDrag;
			default:
				onEndDrag = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置结束拖动事件
		 * 
		 * @param onStopDrag{function}
		 * @returns {function/core.html.easyui.base.Draggable}
		 */
		this.onStopDrag = function() {

			switch (arguments.length) {
			case 0:
				return onStopDrag;
			default:
				onStopDrag = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.base.Draggable}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.base.Draggable", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().draggable({
			// 属性
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

			// 事件
			onBeforeDrag : this.onBeforeDrag(),
			onStartDrag : this.onStartDrag(),
			onDrag : this.onDrag(),
			onEndDrag : this.onEndDrag(),
			onStopDrag : this.onStopDrag()
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

		return this.$jQuery().draggable("options");
	};

	// /**
	// *
	// * @returns
	// */
	// Constructor.prototype.proxy = function() {
	//
	// return this.$jQuery().draggable("proxy");
	// };

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().draggable("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function(e) {

		return this.$jQuery().draggable("disable");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Droppable
 * @package core.html.easyui.base
 * @desc	模板
 * @type	类
 * 
 * @constructor	core.html.easyui.base.Droppable(string id/object jQuery)
 * 
 * @method	object										$jQuery()							获取/设置jQuery对象
 *			object/core.html.easyui.base.Droppable 		accept(object accept)				获取/设置
 *			boolean/core.html.easyui.base.Droppable 	disabled(boolean disabled) 			获取/设置
 *			function/core.html.easyui.base.Droppable 	onDragEnter(function onDragEnter) 	获取/设置
 *			function/core.html.easyui.base.Droppable 	onDragOver(function onDragOver) 	获取/设置
 *			function/core.html.easyui.base.Droppable 	onDragLeave(function onDragLeave)	获取/设置
 *			function/core.html.easyui.base.Droppable 	onDrop(function onDrop) 			获取/设置
 *			core.html.easyui.base.Droppable 			init() 								初始化组件模板
 *			object										options()
 *			void										enable()							启用
 *			void										disable()							禁用
 * 
 * @date	2018年4月20日 13:54:43
 */
core.html.easyui.base.Droppable = (function() {

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
		 * 
		 */
		var accept = $.fn.droppable.defaults.accept;
		/**
		 * 禁止
		 */
		var disabled = $.fn.droppable.defaults.disabled;

		/**
		 * 事件
		 */
		/**
		 * 
		 */
		var onDragEnter = $.fn.droppable.defaults.onDragEnter;
		/**
		 * 
		 */
		var onDragOver = $.fn.droppable.defaults.onDragOver;
		/**
		 * 
		 */
		var onDragLeave = $.fn.droppable.defaults.onDragLeave;
		/**
		 * 
		 */
		var onDrop = $.fn.droppable.defaults.onDrop;

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.base.Droppable", "构造参数异常", "非字符或jQuery对象");
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
		 * @param accept{object}
		 * @returns {object/core.html.easyui.base.Droppable}
		 */
		this.accept = function() {

			switch (arguments.length) {
			case 0:
				return accept;
			default:
				accept = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置禁止
		 * 
		 * @param disabled{boolean}
		 * @returns {boolean/core.html.easyui.base.Droppable}
		 */
		this.disabled = function() {

			switch (arguments.length) {
			case 0:
				return disabled;
			default:
				disabled = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onDragEnter{function}
		 * @returns {function/core.html.easyui.base.Droppable}
		 */
		this.onDragEnter = function() {

			switch (arguments.length) {
			case 0:
				return onDragEnter;
			default:
				onDragEnter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onDragOver{function}
		 * @returns {function/core.html.easyui.base.Droppable}
		 */
		this.onDragOver = function() {

			switch (arguments.length) {
			case 0:
				return onDragOver;
			default:
				onDragOver = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onDragLeave{function}
		 * @returns {function/core.html.easyui.base.Droppable}
		 */
		this.onDragLeave = function() {

			switch (arguments.length) {
			case 0:
				return onDragLeave;
			default:
				onDragLeave = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onDrop{function}
		 * @returns {function/core.html.easyui.base.Droppable}
		 */
		this.onDrop = function() {

			switch (arguments.length) {
			case 0:
				return onDrop;
			default:
				onDrop = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.base.Droppable}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.base.Droppable", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().droppable({
			// 属性
			accept : this.accept(),
			disabled : this.disabled(),

			// 事件
			onDragEnter : this.onDragEnter(),
			onDragOver : this.onDragOver(),
			onDragLeave : this.onDragLeave(),
			onDrop : this.onDrop()
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

		return this.$jQuery().droppable("options");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().droppable("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function(e) {

		return this.$jQuery().droppable("disable");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Resizable
 * @package core.html.easyui.base
 * @desc	改变大小模板
 * @type	类
 * 
 * @constructor	core.html.easyui.base.Resizable(string id/object jQuery)
 * 
 * @method	object										$jQuery()								获取/设置jQuery对象
 *			boolean/core.html.easyui.base.Resizable 	disabled(boolean disabled) 				获取/设置禁止
 *			string/core.html.easyui.base.Resizable 		handles(string handles)					获取/设置
 *			number/core.html.easyui.base.Resizable 		minWidth(number minWidth) 				获取/设置
 *			number/core.html.easyui.base.Resizable 		minHeight(number minHeight) 			获取/设置
 *			number/core.html.easyui.base.Resizable 		maxWidth(number maxWidth) 				获取/设置
 *			number/core.html.easyui.base.Resizable 		maxHeight(number maxHeight) 			获取/设置
 *			number/core.html.easyui.base.Resizable 		edge(number edge) 						获取/设置
 *			function/core.html.easyui.base.Resizable 	onStartResize(function onStartResize) 	获取/设置
 *			function/core.html.easyui.base.Resizable 	onResize(function onResize) 			获取/设置
 *			function/core.html.easyui.base.Resizable 	onStopResize(function onStopResize)		获取/设置
 *			core.html.easyui.base.Resizable 			init() 									初始化组件模板
 *			object										options()
 *			void										enable()								启用
 *			void										disable()								禁用
 * 
 * @date	2018年4月20日 14:02:13
 */
core.html.easyui.base.Resizable = (function() {

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
		 * 禁止
		 */
		var disabled = $.fn.resizable.defaults.disabled;
		/**
		 * 
		 */
		var handles = $.fn.resizable.defaults.handles;
		/**
		 * 
		 */
		var minWidth = $.fn.resizable.defaults.minWidth;
		/**
		 * 
		 */
		var minHeight = $.fn.resizable.defaults.minHeight;
		/**
		 * 
		 */
		var maxWidth = $.fn.resizable.defaults.maxWidth;
		/**
		 * 
		 */
		var maxHeight = $.fn.resizable.defaults.maxHeight;
		/**
		 * 
		 */
		var edge = $.fn.resizable.defaults.edge;

		/**
		 * 事件
		 */
		/**
		 * 
		 */
		var onStartResize = $.fn.resizable.defaults.onStartResize;
		/**
		 * 
		 */
		var onResize = $.fn.resizable.defaults.onResize;
		/**
		 * 
		 */
		var onStopResize = $.fn.resizable.defaults.onStopResize;

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.base.Resizable", "构造参数异常", "非字符或jQuery对象");
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
		 * 获取/设置禁止
		 * 
		 * @param disabled{boolean}
		 * @returns {boolean/core.html.easyui.base.Resizable}
		 */
		this.disabled = function() {

			switch (arguments.length) {
			case 0:
				return disabled;
			default:
				disabled = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param handles{string}
		 * @returns {string/core.html.easyui.base.Resizable}
		 */
		this.handles = function() {

			switch (arguments.length) {
			case 0:
				return handles;
			default:
				handles = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param minWidth{number}
		 * @returns {number/core.html.easyui.base.Resizable}
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
		 * @param minHeight{number}
		 * @returns {number/core.html.easyui.base.Resizable}
		 */
		this.minHeight = function() {

			switch (arguments.length) {
			case 0:
				return minHeight;
			default:
				minHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param maxWidth{number}
		 * @returns {number/core.html.easyui.base.Resizable}
		 */
		this.maxWidth = function() {

			switch (arguments.length) {
			case 0:
				return maxWidth;
			default:
				maxWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param maxHeight{number}
		 * @returns {number/core.html.easyui.base.Resizable}
		 */
		this.maxHeight = function() {

			switch (arguments.length) {
			case 0:
				return maxHeight;
			default:
				maxHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param edge{number}
		 * @returns {number/core.html.easyui.base.Resizable}
		 */
		this.edge = function() {

			switch (arguments.length) {
			case 0:
				return edge;
			default:
				edge = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onStartResize{function}
		 * @returns {function/core.html.easyui.base.Resizable}
		 */
		this.onStartResize = function() {

			switch (arguments.length) {
			case 0:
				return onStartResize;
			default:
				onStartResize = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onResize{function}
		 * @returns {function/core.html.easyui.base.Resizable}
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
		 * 获取/设置
		 * 
		 * @param onStopResize{function}
		 * @returns {function/core.html.easyui.base.Resizable}
		 */
		this.onStopResize = function() {

			switch (arguments.length) {
			case 0:
				return onStopResize;
			default:
				onStopResize = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.base.Resizable}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.base.Resizable", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().resizable({
			// 属性
			disabled : this.disabled(),
			handles : this.handles(),
			minWidth : this.minWidth(),
			minHeight : this.minHeight(),
			maxWidth : this.maxWidth(),
			maxHeight : this.maxHeight(),
			edge : this.edge(),

			// 事件
			onStartResize : this.onStartResize(),
			onResize : this.onResize(),
			onStopResize : this.onStopResize()
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

		return this.$jQuery().resizable("options");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().resizable("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().resizable("disable");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Pagination
 * @package core.html.easyui.base
 * @desc	分割按钮模板
 * @type	类
 * 
 * @constructor	core.html.easyui.base.Pagination(string id/object jQuery)
 * 
 * @extend	core.html.easyui.button.LinkButton
 * 
 * @method	继承core.html.easyui.base.LinkButton所有方法
 * 			number/core.html.easyui.base.Pagination		total(number total)								获取/设置
 * 			number/core.html.easyui.base.Pagination		pageSize(number pageSize)						获取/设置
 * 			number/core.html.easyui.base.Pagination		pageNumber(number pageNumber)					获取/设置
 * 			array/core.html.easyui.base.Pagination		pageList(array pageList)						获取/设置
 * 			boolean/core.html.easyui.base.Pagination	loading(boolean loading)						获取/设置
 * 			array/core.html.easyui.base.Pagination		buttons(array buttons)							获取/设置
 * 			array/core.html.easyui.base.Pagination		layout(array layout)							获取/设置
 * 			number/core.html.easyui.base.Pagination		links(number links)								获取/设置
 * 			boolean/core.html.easyui.base.Pagination	showPageList(boolean showPageList)				获取/设置
 * 			boolean/core.html.easyui.base.Pagination	showRefresh(boolean showRefresh)				获取/设置
 * 			boolean/core.html.easyui.base.Pagination	showPageInfo(boolean showPageInfo)				获取/设置
 * 			string/core.html.easyui.base.Pagination		beforePageText(string beforePageText)			获取/设置
 * 			string/core.html.easyui.base.Pagination		afterPageText(string afterPageText)				获取/设置
 * 			string/core.html.easyui.base.Pagination		displayMsg(string displayMsg)					获取/设置
 * 			function/core.html.easyui.base.Pagination	onSelectPage(function onSelectPage)				获取/设置
 * 			function/core.html.easyui.base.Pagination	onBeforeRefresh(function onBeforeRefresh)		获取/设置
 * 			function/core.html.easyui.base.Pagination	onRefresh(function onRefresh)					获取/设置
 * 			function/core.html.easyui.base.Pagination	onChangePageSize(function onChangePageSize)		获取/设置
 *			core.html.easyui.base.Pagination 			init() 											初始化组件模板
 *			object										options()
 *			void										loading()
 *			void										loaded()
 *			void										refresh(object options)
 *			void										select(number page)
 * 
 * @date	2018年4月20日 15:16:58
 */
core.html.easyui.base.Pagination = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.base.Pagination.superClass.constructor.call(this, arguments[0]);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var total = $.fn.pagination.defaults.total;
		/**
		 * 
		 */
		var pageSize = $.fn.pagination.defaults.pageSize;
		/**
		 * 
		 */
		var pageNumber = $.fn.pagination.defaults.pageNumber;
		/**
		 * 
		 */
		var pageList = $.fn.pagination.defaults.pageList;
		/**
		 * 
		 */
		var loading = $.fn.pagination.defaults.loading;
		/**
		 * 
		 */
		var buttons = $.fn.pagination.defaults.buttons;
		/**
		 * 
		 */
		var layout = $.fn.pagination.defaults.layout;
		/**
		 * 
		 */
		var links = $.fn.pagination.defaults.links;
		/**
		 * 
		 */
		var showPageList = $.fn.pagination.defaults.showPageList;
		/**
		 * 
		 */
		var showRefresh = $.fn.pagination.defaults.showRefresh;
		/**
		 * 
		 */
		var showPageInfo = $.fn.pagination.defaults.showPageInfo;
		/**
		 * 
		 */
		var beforePageText = $.fn.pagination.defaults.beforePageText;
		/**
		 * 
		 */
		var afterPageText = $.fn.pagination.defaults.afterPageText;
		/**
		 * 
		 */
		var displayMsg = $.fn.pagination.defaults.displayMsg;

		/**
		 * 事件
		 */
		/**
		 * 
		 */
		var onSelectPage = $.fn.pagination.defaults.onSelectPage;
		/**
		 * 
		 */
		var onBeforeRefresh = $.fn.pagination.defaults.onBeforeRefresh;
		/**
		 * 
		 */
		var onRefresh = $.fn.pagination.defaults.onRefresh;
		/**
		 * 
		 */
		var onChangePageSize = $.fn.pagination.defaults.onChangePageSize;

		/**
		 * 获取/设置
		 * 
		 * @param total{number}
		 * @returns {number/core.html.easyui.base.Pagination}
		 */
		this.total = function() {

			switch (arguments.length) {
			case 0:
				return total;
			default:
				total = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param pageSize{number}
		 * @returns {number/core.html.easyui.base.Pagination}
		 */
		this.pageSize = function() {

			switch (arguments.length) {
			case 0:
				return pageSize;
			default:
				pageSize = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param pageNumber{number}
		 * @returns {number/core.html.easyui.base.Pagination}
		 */
		this.pageNumber = function() {

			switch (arguments.length) {
			case 0:
				return pageNumber;
			default:
				pageNumber = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param pageList{array}
		 * @returns {array/core.html.easyui.base.Pagination}
		 */
		this.pageList = function() {

			switch (arguments.length) {
			case 0:
				return pageList;
			default:
				pageList = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param loading{boolean}
		 * @returns {boolean/core.html.easyui.base.Pagination}
		 */
		this.loading = function() {

			switch (arguments.length) {
			case 0:
				return loading;
			default:
				loading = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param buttons{array}
		 * @returns {array/core.html.easyui.base.Pagination}
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

		/**
		 * 获取/设置
		 * 
		 * @param layout{array}
		 * @returns {array/core.html.easyui.base.Pagination}
		 */
		this.layout = function() {

			switch (arguments.length) {
			case 0:
				return layout;
			default:
				layout = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param links{number}
		 * @returns {number/core.html.easyui.base.Pagination}
		 */
		this.links = function() {

			switch (arguments.length) {
			case 0:
				return links;
			default:
				links = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param showPageList{boolean}
		 * @returns {boolean/core.html.easyui.base.Pagination}
		 */
		this.showPageList = function() {

			switch (arguments.length) {
			case 0:
				return showPageList;
			default:
				showPageList = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param showRefresh{boolean}
		 * @returns {boolean/core.html.easyui.base.Pagination}
		 */
		this.showRefresh = function() {

			switch (arguments.length) {
			case 0:
				return showRefresh;
			default:
				showRefresh = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param showPageInfo{boolean}
		 * @returns {boolean/core.html.easyui.base.Pagination}
		 */
		this.showPageInfo = function() {

			switch (arguments.length) {
			case 0:
				return showPageInfo;
			default:
				showPageInfo = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param beforePageText{string}
		 * @returns {string/core.html.easyui.base.Pagination}
		 */
		this.beforePageText = function() {

			switch (arguments.length) {
			case 0:
				return beforePageText;
			default:
				beforePageText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param afterPageText{string}
		 * @returns {string/core.html.easyui.base.Pagination}
		 */
		this.afterPageText = function() {

			switch (arguments.length) {
			case 0:
				return afterPageText;
			default:
				afterPageText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param displayMsg{string}
		 * @returns {string/core.html.easyui.base.Pagination}
		 */
		this.displayMsg = function() {

			switch (arguments.length) {
			case 0:
				return displayMsg;
			default:
				displayMsg = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onSelectPage{function}
		 * @returns {function/core.html.easyui.base.Pagination}
		 */
		this.onSelectPage = function() {

			switch (arguments.length) {
			case 0:
				return onSelectPage;
			default:
				onSelectPage = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onBeforeRefresh{function}
		 * @returns {function/core.html.easyui.base.Pagination}
		 */
		this.onBeforeRefresh = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeRefresh;
			default:
				onBeforeRefresh = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onRefresh{function}
		 * @returns {function/core.html.easyui.base.Pagination}
		 */
		this.onRefresh = function() {

			switch (arguments.length) {
			case 0:
				return onRefresh;
			default:
				onRefresh = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onChangePageSize{function}
		 * @returns {function/core.html.easyui.base.Pagination}
		 */
		this.onChangePageSize = function() {

			switch (arguments.length) {
			case 0:
				return onChangePageSize;
			default:
				onChangePageSize = arguments[0];
				return this;
			}
		};
	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.button.LinkButton);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.base.Pagination}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.base.Pagination", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().pagination({
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
			total : this.total(),
			pageSize : this.pageSize(),
			pageNumber : this.pageNumber(),
			pageList : this.pageList(),
			loading : this.loading(),
			buttons : this.buttons(),
			layout : this.layout(),
			links : this.links(),
			showPageList : this.showPageList(),
			showRefresh : this.showRefresh(),
			showPageInfo : this.showPageInfo(),
			beforePageText : this.beforePageText(),
			afterPageText : this.afterPageText(),
			displayMsg : this.displayMsg(),

			// LinkButton继承事件
			onClick : this.onClick(),
			// 事件
			onSelectPage : this.onSelectPage(),
			onBeforeRefresh : this.onBeforeRefresh(),
			onRefresh : this.onRefresh(),
			onChangePageSize : this.onChangePageSize()
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

		return this.$jQuery().pagination("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.loading = function() {

		return this.$jQuery().pagination("loading");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.loaded = function() {

		return this.$jQuery().pagination("loaded");
	};

	/**
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.refresh = function(options) {

		return this.$jQuery().pagination("refresh", options);
	};

	/**
	 * 
	 * @param page{number}
	 * @returns
	 */
	Constructor.prototype.select = function(page) {

		return this.$jQuery().pagination("select", page);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	ProgressBar
 * @package core.html.easyui.base
 * @desc	进度条模板
 * @type	类
 * 
 * @constructor	core.html.easyui.base.ProgressBar(string id/object jQuery)
 * 
 * @method	object											$jQuery()						获取/设置jQuery对象
 *			string/core.html.easyui.base.ProgressBar 		width(string width)				获取/设置
 *			number/core.html.easyui.base.ProgressBar 		height(number height) 			获取/设置
 *			number/core.html.easyui.base.ProgressBar 		value(number value) 			获取/设置
 *			string/core.html.easyui.base.ProgressBar 		text(string text) 				获取/设置
 *			function/core.html.easyui.base.ProgressBar 		onChange(function onChange)		获取/设置
 *			core.html.easyui.base.ProgressBar 				init() 							初始化组件模板
 *			object											options()
 *			void											resize(number width)				
 *			object											getValue()							
 *			void											setValue(object value)				
 * 
 * @date	2018年4月23日 10:46:02
 */
core.html.easyui.base.ProgressBar = (function() {

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
		 * 
		 */
		var width = $.fn.progressbar.defaults.width;
		/**
		 * 
		 */
		var height = $.fn.progressbar.defaults.height;
		/**
		 * 
		 */
		var value = $.fn.progressbar.defaults.value;
		/**
		 * 
		 */
		var text = $.fn.progressbar.defaults.text;

		/**
		 * 事件
		 */
		/**
		 * 
		 */
		var onChange = $.fn.progressbar.defaults.onChange;

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.base.ProgressBar", "构造参数异常", "非字符或jQuery对象");
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
		 * @param width{string}
		 * @returns {string/core.html.easyui.base.ProgressBar}
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
		 * 获取/设置
		 * 
		 * @param height{number}
		 * @returns {number/core.html.easyui.base.ProgressBar}
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
		 * 获取/设置
		 * 
		 * @param value{number}
		 * @returns {number/core.html.easyui.base.ProgressBar}
		 */
		this.value = function() {

			switch (arguments.length) {
			case 0:
				return value;
			default:
				value = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param text{string}
		 * @returns {string/core.html.easyui.base.ProgressBar}
		 */
		this.text = function() {

			switch (arguments.length) {
			case 0:
				return text;
			default:
				text = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onChange{function}
		 * @returns {function/core.html.easyui.base.ProgressBar}
		 */
		this.onChange = function() {

			switch (arguments.length) {
			case 0:
				return onChange;
			default:
				onChange = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.base.ProgressBar}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.base.ProgressBar", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().progressbar({
			// 属性
			width : this.width(),
			height : this.height(),
			value : this.value(),
			text : this.text(),

			// 事件
			onChange : this.onChange()
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

		return this.$jQuery().progressbar("options");
	};

	/**
	 * 
	 * @param width{number}
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return this.$jQuery().progressbar("resize", width);
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getValue = function() {

		return this.$jQuery().progressbar("getValue");
	};

	/**
	 * 
	 * @param value{object}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().progressbar("setValue", value);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Tooltip
 * @package core.html.easyui.base
 * @desc	工具提示模板
 * @type	类
 * 
 * @constructor core.html.easyui.base.Tooltip(string id/object jQuery)
 * 
 * @method	object										$jQuery()							获取/设置jQuery对象
 *			string/core.html.easyui.base.Tooltip 		position(string position)			获取/设置工具提示的位置
 *			function/core.html.easyui.base.Tooltip 		content(function content) 			获取/设置提示内容
 *			boolean/core.html.easyui.base.Tooltip 		trackMouse(boolean trackMouse) 		获取/设置提示工具随着鼠标移动
 *			number/core.html.easyui.base.Tooltip 		deltaX(number deltaX) 				获取/设置水平偏移值
 *			number/core.html.easyui.base.Tooltip 		deltaY(number deltaY) 				获取/设置垂直偏移值
 *			string/core.html.easyui.base.Tooltip 		showEvent(string showEvent) 		获取/设置显示事件
 *			string/core.html.easyui.base.Tooltip 		hideEvent(string hideEvent) 		获取/设置隐藏事件
 *			number/core.html.easyui.base.Tooltip 		showDelay(number showDelay) 		获取/设置显示工具延迟时间
 *			number/core.html.easyui.base.Tooltip 		hideDelay(number hideDelay) 		获取/设置隐藏工具延迟时间
 *			function/core.html.easyui.base.Tooltip 		onShow(function onShow) 			获取/设置显示事件
 *			function/core.html.easyui.base.Tooltip 		onHide(function onHide) 			获取/设置隐藏事件
 *			function/core.html.easyui.base.Tooltip 		onUpdate(function onUpdate) 		获取/设置更新事件
 *			function/core.html.easyui.base.Tooltip 		onPosition(function onPosition)		获取/设置位置改变事件
 *			function/core.html.easyui.base.Tooltip 		onDestroy(function onDestroy) 		获取/设置销毁事件
 *			core.html.easyui.base.Tooltip 				init() 								初始化组件模板
 *			object										options()
 *			object										tip()
 *			object										arrow()
 *			void										show(object e)						显示
 *			void										hide(object e)						隐藏
 *			void										update(object content)				更新内容
 *			void										reposition()						重置显示位置
 *			void										destroy()							销毁对象
 * 
 * @date	2018年4月23日 14:11:19
 */
core.html.easyui.base.Tooltip = (function() {

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
		 * 工具提示的位置
		 */
		var position = $.fn.tooltip.defaults.position;
		/**
		 * 提示内容
		 */
		var content = $.fn.tooltip.defaults.content;
		/**
		 * 提示工具随着鼠标移动
		 */
		var trackMouse = $.fn.tooltip.defaults.trackMouse;
		/**
		 * 水平偏移值
		 */
		var deltaX = $.fn.tooltip.defaults.deltaX;
		/**
		 * 垂直偏移值
		 */
		var deltaY = $.fn.tooltip.defaults.deltaY;
		/**
		 * 显示事件
		 */
		var showEvent = $.fn.tooltip.defaults.showEvent;
		/**
		 * 隐藏事件
		 */
		var hideEvent = $.fn.tooltip.defaults.hideEvent;
		/**
		 * 显示工具延迟时间
		 */
		var showDelay = $.fn.tooltip.defaults.showDelay;
		/**
		 * 隐藏工具延迟时间
		 */
		var hideDelay = $.fn.tooltip.defaults.hideDelay;

		/**
		 * 事件
		 */
		/**
		 * 显示事件
		 */
		var onShow = $.fn.tooltip.defaults.onShow;
		/**
		 * 隐藏事件
		 */
		var onHide = $.fn.tooltip.defaults.onHide;
		/**
		 * 更新事件
		 */
		var onUpdate = $.fn.tooltip.defaults.onUpdate;
		/**
		 * 位置改变事件
		 */
		var onPosition = $.fn.tooltip.defaults.onPosition;
		/**
		 * 销毁事件
		 */
		var onDestroy = $.fn.tooltip.defaults.onDestroy;

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.base.Tooltip", "构造参数异常", "非字符或jQuery对象");
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
		 * 获取/设置工具提示的位置
		 * 
		 * @param position{string}
		 * @returns {string/core.html.easyui.base.Tooltip}
		 */
		this.position = function() {

			switch (arguments.length) {
			case 0:
				return position;
			default:
				position = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置提示内容
		 * 
		 * @param content{function}
		 * @returns {function/core.html.easyui.base.Tooltip}
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
		 * 获取/设置提示工具随着鼠标移动
		 * 
		 * @param trackMouse{boolean}
		 * @returns {boolean/core.html.easyui.base.Tooltip}
		 */
		this.trackMouse = function() {

			switch (arguments.length) {
			case 0:
				return trackMouse;
			default:
				trackMouse = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置水平偏移值
		 * 
		 * @param deltaX{number}
		 * @returns {number/core.html.easyui.base.Tooltip}
		 */
		this.deltaX = function() {

			switch (arguments.length) {
			case 0:
				return deltaX;
			default:
				deltaX = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置垂直偏移值
		 * 
		 * @param deltaY{number}
		 * @returns {number/core.html.easyui.base.Tooltip}
		 */
		this.deltaY = function() {

			switch (arguments.length) {
			case 0:
				return deltaY;
			default:
				deltaY = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示事件
		 * 
		 * @param showEvent{string}
		 * @returns {string/core.html.easyui.base.Tooltip}
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
		 * 获取/设置隐藏事件
		 * 
		 * @param hideEvent{string}
		 * @returns {string/core.html.easyui.base.Tooltip}
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
		 * 获取/设置显示工具延迟时间
		 * 
		 * @param showDelay{number}
		 * @returns {number/core.html.easyui.base.Tooltip}
		 */
		this.showDelay = function() {

			switch (arguments.length) {
			case 0:
				return showDelay;
			default:
				showDelay = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置隐藏工具延迟时间
		 * 
		 * @param hideDelay{number}
		 * @returns {number/core.html.easyui.base.Tooltip}
		 */
		this.hideDelay = function() {

			switch (arguments.length) {
			case 0:
				return hideDelay;
			default:
				hideDelay = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示事件
		 * 
		 * @param onShow{function}
		 * @returns {function/core.html.easyui.base.Tooltip}
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
		 * 获取/设置隐藏事件
		 * 
		 * @param onHide{function}
		 * @returns {function/core.html.easyui.base.Tooltip}
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
		 * 获取/设置更新事件
		 * 
		 * @param onUpdate{function}
		 * @returns {function/core.html.easyui.base.Tooltip}
		 */
		this.onUpdate = function() {

			switch (arguments.length) {
			case 0:
				return onUpdate;
			default:
				onUpdate = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置位置改变事件
		 * 
		 * @param onPosition{function}
		 * @returns {function/core.html.easyui.base.Tooltip}
		 */
		this.onPosition = function() {

			switch (arguments.length) {
			case 0:
				return onPosition;
			default:
				onPosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置销毁事件
		 * 
		 * @param onDestroy{function}
		 * @returns {function/core.html.easyui.base.Tooltip}
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
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.base.Tooltip}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.base.Tooltip", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().tooltip({
			// 属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),

			// 事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy()
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

		return this.$jQuery().tooltip("options");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.tip = function() {

		return this.$jQuery().tooltip("tip");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.arrow = function() {

		return this.$jQuery().tooltip("arrow");
	};

	/**
	 * 显示
	 * 
	 * @param e{object}
	 * @returns
	 */
	Constructor.prototype.show = function(e) {

		return this.$jQuery().tooltip("show", e);
	};

	/**
	 * 隐藏
	 * 
	 * @param e{object}
	 * @returns
	 */
	Constructor.prototype.hide = function(e) {

		return this.$jQuery().tooltip("hide", e);
	};

	/**
	 * 更新内容
	 * 
	 * @param content{object}
	 * @returns
	 */
	Constructor.prototype.update = function(content) {

		return this.$jQuery().tooltip("update", content);
	};

	/**
	 * 重置显示位置
	 * 
	 * @returns
	 */
	Constructor.prototype.reposition = function() {

		return this.$jQuery().tooltip("reposition");
	};

	/**
	 * 销毁对象
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().tooltip("destroy");
	};

	// 返回构造函数
	return Constructor;
})();
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
/**
 * @name	Tabs
 * @package core.html.easyui.layout
 * @desc	Tab页模板
 * @type	类
 * 
 * @constructor	core.html.easyui.layout.Tabs(string id/object jQuery)
 * 
 * @extend	core.html.easyui.layout.Panel
 * 			core.html.easyui.button.LinkButton
 * 
 * @method	继承core.html.easyui.layout.Panel所有方法
 * 			继承core.html.easyui.button.LinkButton所有方法
 * 			number/core.html.easyui.layout.Tabs		scrollIncrement(number scrollIncrement)	
 * 			number/core.html.easyui.layout.Tabs		scrollDuration(number scrollDuration)	获取/设置滚动时间
 * 			string/core.html.easyui.layout.Tabs		toolPosition(string toolPosition)		获取/设置工具条位置
 * 			string/core.html.easyui.layout.Tabs		tabPosition(string tabPosition)			获取/设置Tab页位置
 * 			number/core.html.easyui.layout.Tabs		headerWidth(number headerWidth)			获取/设置头宽度
 * 			number/core.html.easyui.layout.Tabs		tabWidth(number tabWidth)				获取/设置Tab页宽度
 * 			number/core.html.easyui.layout.Tabs		tabHeight(number tabHeight)				获取/设置Tab页高度
 * 			boolean/core.html.easyui.layout.Tabs	showHeaderAttr(boolean showHeaderAttr)	获取/设置显示标头
 * 			boolean/core.html.easyui.layout.Tabs	justified(boolean justified)			获取/设置Tab页宽度自适应
 * 			boolean/core.html.easyui.layout.Tabs	narrow(boolean narrow)					获取/设置Tab页之间的空间
 * 			boolean/core.html.easyui.layout.Tabs	pill(boolean pill)						获取/设置Tab页样式
 * 			function/core.html.easyui.layout.Tabs	onSelect(function onSelect)				获取/设置选择事件
 * 			function/core.html.easyui.layout.Tabs	onUnselect(function onUnselect)			获取/设置取消选择事件
 * 			function/core.html.easyui.layout.Tabs	onAdd(function onAdd)					获取/设置添加事件
 * 			function/core.html.easyui.layout.Tabs	onUpdate(function onUpdate)				获取/设置更新事件
 * 			function/core.html.easyui.layout.Tabs	onContextMenu(function onContextMenu)	获取/设置右键事件
 * 			function/core.html.easyui.layout.Tabs	onDblClick(function onDblClick)			获取/设置双击事件
 * 			core.html.easyui.layout.Tabs			init()									初始化
 * 			object									options()					
 * 			object									tabs()						
 * 			void									resize()								改变窗口大小
 * 			void									add(object options)						添加Tab页
 * 			void									close(object which)						关闭指定Tab
 * 			object									getTab(object which)					获取指定Tab
 * 			number									getTabIndex(object tab)					获取指定Tab页索引
 * 			object									getSelected()							获取选中Tab页
 * 			void									select(object which)					选中指定Tab
 * 			void									unselect(object which)					取消选中指定Tab
 * 			void									showHeader()							显示头
 * 			void									hideHeader()							隐藏头
 * 			void									showTool()								显示工具
 * 			void									hideTool()								隐藏工具
 * 			boolean									exists(object which)					判断指定Tab是否存在
 * 			void									update(object param)					更新
 * 			void									enableTab(object which)					启用Tab
 * 			void									disableTab(object which)				禁用Tab
 * 			void									scrollBy(number deltaX)					滚动至
 * 
 * @date	2018年4月24日 11:53:56
 */
core.html.easyui.layout.Tabs = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.layout.Panel.call(this, arguments[0]);
		core.html.easyui.button.LinkButton.call(this, arguments[0]);
		// 默认参数修改
		this.width($.fn.tabs.defaults.width);
		this.height($.fn.tabs.defaults.height);
		this.plain($.fn.tabs.defaults.plain);
		this.fit($.fn.tabs.defaults.fit);
		this.border($.fn.tabs.defaults.border);
		this.tools($.fn.tabs.defaults.tools);
		this.selected($.fn.tabs.defaults.selected);
		this.onLoad($.fn.tabs.defaults.onLoad);
		this.onBeforeClose($.fn.tabs.defaults.onBeforeClose);
		this.onClose($.fn.tabs.defaults.onClose);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var scrollIncrement = $.fn.tabs.defaults.scrollIncrement;
		/**
		 * 滚动持续时间
		 */
		var scrollDuration = $.fn.tabs.defaults.scrollDuration;
		/**
		 * 工具条位置
		 */
		var toolPosition = $.fn.tabs.defaults.toolPosition;
		/**
		 * Tab页位置
		 */
		var tabPosition = $.fn.tabs.defaults.tabPosition;
		/**
		 * 头宽度
		 */
		var headerWidth = $.fn.tabs.defaults.headerWidth;
		/**
		 * Tab页宽度
		 */
		var tabWidth = $.fn.tabs.defaults.tabWidth;
		/**
		 * Tab页高度
		 */
		var tabHeight = $.fn.tabs.defaults.tabHeight;
		/**
		 * 显示头
		 */
		var showHeaderAttr = $.fn.tabs.defaults.showHeader;
		/**
		 * Tab页宽度自适应
		 */
		var justified = $.fn.tabs.defaults.justified;
		/**
		 * 去除Tab页之间的空间
		 */
		var narrow = $.fn.tabs.defaults.narrow;
		/**
		 * Tab页按钮样式
		 */
		var pill = $.fn.tabs.defaults.pill;

		/**
		 * 事件
		 */
		/**
		 * 选择事件
		 */
		var onSelect = $.fn.tabs.defaults.onSelect;
		/**
		 * 取消选择事件
		 */
		var onUnselect = $.fn.tabs.defaults.onUnselect;
		/**
		 * 添加事件
		 */
		var onAdd = $.fn.tabs.defaults.onAdd;
		/**
		 * 更新事件
		 */
		var onUpdate = $.fn.tabs.defaults.onUpdate;
		/**
		 * 右键事件
		 */
		var onContextMenu = $.fn.tabs.defaults.onContextMenu;
		/**
		 * 双击事件
		 */
		var onDblClick = function(index, title) {

		};

		/**
		 * 获取/设置
		 * 
		 * @param scrollIncrement{number}
		 * @returns {number/core.html.easyui.layout.Tabs}
		 */
		this.scrollIncrement = function() {

			switch (arguments.length) {
			case 0:
				return scrollIncrement;
			default:
				scrollIncrement = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置滚动时间
		 * 
		 * @param scrollDuration{number}
		 * @returns {number/core.html.easyui.layout.Tabs}
		 */
		this.scrollDuration = function() {

			switch (arguments.length) {
			case 0:
				return scrollDuration;
			default:
				scrollDuration = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置工具条位置
		 * 
		 * @param toolPosition{string}
		 * @returns {string/core.html.easyui.layout.Tabs}
		 */
		this.toolPosition = function() {

			switch (arguments.length) {
			case 0:
				return toolPosition;
			default:
				toolPosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置Tab页位置
		 * 
		 * @param tabPosition{string}
		 * @returns {string/core.html.easyui.layout.Tabs}
		 */
		this.tabPosition = function() {

			switch (arguments.length) {
			case 0:
				return tabPosition;
			default:
				tabPosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置头宽度
		 * 
		 * @param headerWidth{number}
		 * @returns {number/core.html.easyui.layout.Tabs}
		 */
		this.headerWidth = function() {

			switch (arguments.length) {
			case 0:
				return headerWidth;
			default:
				headerWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置Tab页宽度
		 * 
		 * @param tabWidth{number}
		 * @returns {number/core.html.easyui.layout.Tabs}
		 */
		this.tabWidth = function() {

			switch (arguments.length) {
			case 0:
				return tabWidth;
			default:
				tabWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置Tab页高度
		 * 
		 * @param tabHeight{number}
		 * @returns {number/core.html.easyui.layout.Tabs}
		 */
		this.tabHeight = function() {

			switch (arguments.length) {
			case 0:
				return tabHeight;
			default:
				tabHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示标头
		 * 
		 * @param showHeader{boolean}
		 * @returns {boolean/core.html.easyui.layout.Tabs}
		 */
		this.showHeaderAttr = function() {

			switch (arguments.length) {
			case 0:
				return showHeaderAttr;
			default:
				showHeaderAttr = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置Tab页宽度自适应
		 * 
		 * @param justified{boolean}
		 * @returns {boolean/core.html.easyui.layout.Tabs}
		 */
		this.justified = function() {

			switch (arguments.length) {
			case 0:
				return justified;
			default:
				justified = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置Tab页之间的空间
		 * 
		 * @param narrow{boolean}
		 * @returns {boolean/core.html.easyui.layout.Tabs}
		 */
		this.narrow = function() {

			switch (arguments.length) {
			case 0:
				return narrow;
			default:
				narrow = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置Tab页样式
		 * 
		 * @param pill{boolean}
		 * @returns {boolean/core.html.easyui.layout.Tabs}
		 */
		this.pill = function() {

			switch (arguments.length) {
			case 0:
				return pill;
			default:
				pill = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置选择事件
		 * 
		 * @param onSelect{function}
		 * @returns {function/core.html.easyui.layout.Tabs}
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
		 * @returns {function/core.html.easyui.layout.Tabs}
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
		 * @returns {function/core.html.easyui.layout.Tabs}
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
		 * 获取/设置更新事件
		 * 
		 * @param onUpdate{function}
		 * @returns {function/core.html.easyui.layout.Tabs}
		 */
		this.onUpdate = function() {

			switch (arguments.length) {
			case 0:
				return onUpdate;
			default:
				onUpdate = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置右键事件
		 * 
		 * @param onContextMenu{function}
		 * @returns {function/core.html.easyui.layout.Tabs}
		 */
		this.onContextMenu = function() {

			switch (arguments.length) {
			case 0:
				return onContextMenu;
			default:
				onContextMenu = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置双击事件
		 * 
		 * @param onDblClick{function}
		 * @returns {function/core.html.easyui.layout.Tabs}
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化
	 * 
	 * @returns {core.html.easyui.layout.Tabs}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.layout.Tabs", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().tabs({
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
			// LinkButton继承属性
			disabled : this.disabled(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// 属性
			scrollIncrement : this.scrollIncrement(),
			scrollDuration : this.scrollDuration(),
			toolPosition : this.toolPosition(),
			tabPosition : this.tabPosition(),
			headerWidth : this.headerWidth(),
			tabWidth : this.tabWidth(),
			tabHeight : this.tabHeight(),
			showHeaderAttr : this.showHeaderAttr(),
			justified : this.justified(),
			narrow : this.narrow(),
			pill : this.pill(),

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
			// LinkButton继承事件
			onClick : this.onClick(),
			// 事件
			onSelect : this.onSelect(),
			onUnselect : this.onUnselect(),
			onAdd : this.onAdd(),
			onUpdate : this.onUpdate(),
			onContextMenu : this.onContextMenu()
		});
		// 扩展事件
		this.$jQuery().tabs("onDblClick", this.onDblClick());

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

		return this.$jQuery().tabs("options");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.tabs = function() {

		return this.$jQuery().tabs("tabs");
	};

	/**
	 * 改变窗口大小
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function() {

		return this.$jQuery().tabs("resize");
	};

	/**
	 * 添加Tab页
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.add = function(options) {

		return this.$jQuery().tabs("add", options);
	};

	/**
	 * 关闭指定Tab
	 * 
	 * @param which{object}
	 * @returns
	 */
	Constructor.prototype.close = function(which) {

		return this.$jQuery().tabs("close", which);
	};

	/**
	 * 获取指定Tab
	 * 
	 * @param which{object}
	 * @returns {object}
	 */
	Constructor.prototype.getTab = function(which) {

		return this.$jQuery().tabs("getTab", which);
	};

	/**
	 * 获取指定Tab页索引
	 * 
	 * @param tab{object}
	 * @returns {number}
	 */
	Constructor.prototype.getTabIndex = function(tab) {

		return this.$jQuery().tabs("getTabIndex", tab);
	};

	/**
	 * 获取选中Tab页
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getSelected = function() {

		return this.$jQuery().tabs("getSelected");
	};

	/**
	 * 选中指定Tab
	 * 
	 * @param which{object}
	 * @returns
	 */
	Constructor.prototype.select = function(which) {

		return this.$jQuery().tabs("select", which);
	};

	/**
	 * 取消选中指定Tab
	 * 
	 * @param which{object}
	 * @returns
	 */
	Constructor.prototype.unselect = function(which) {

		return this.$jQuery().tabs("unselect", which);
	};

	/**
	 * 显示头
	 * 
	 * @returns
	 */
	Constructor.prototype.showHeader = function() {

		return this.$jQuery().tabs("showHeader");
	};

	/**
	 * 隐藏头
	 * 
	 * @returns
	 */
	Constructor.prototype.hideHeader = function() {

		return this.$jQuery().tabs("hideHeader");
	};

	/**
	 * 显示工具
	 * 
	 * @returns
	 */
	Constructor.prototype.showTool = function() {

		return this.$jQuery().tabs("showTool");
	};

	/**
	 * 隐藏工具
	 * 
	 * @returns
	 */
	Constructor.prototype.hideTool = function() {

		return this.$jQuery().tabs("hideTool");
	};

	/**
	 * 判断指定Tab是否存在
	 * 
	 * @param which{object}
	 * @returns {boolean}
	 */
	Constructor.prototype.exists = function(which) {

		return this.$jQuery().tabs("exists", which);
	};

	/**
	 * 更新
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.update = function(param) {

		return this.$jQuery().tabs("update", param);
	};

	/**
	 * 启用Tab
	 * 
	 * @param which{object}
	 * @returns
	 */
	Constructor.prototype.enableTab = function(which) {

		return this.$jQuery().tabs("enableTab", which);
	};

	/**
	 * 禁用Tab
	 * 
	 * @param which{object}
	 * @returns
	 */
	Constructor.prototype.disableTab = function(which) {

		return this.$jQuery().tabs("disableTab", which);
	};

	/**
	 * 滚动至
	 * 
	 * @param deltaX{number}
	 * @returns
	 */
	Constructor.prototype.scrollBy = function(deltaX) {

		return this.$jQuery().tabs("scrollBy", deltaX);
	};

	// 返回构造函数
	return Constructor;
})();
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
/**
 * @name	Messager
 * @package core.html.easyui.window
 * @desc	消息
 * @type	类
 * 
 * @method	static core.html.easyui.window.Messager	getInstance()													获取消息实例
 * 			void									show(object options)											提示框
 * 			void									alert(string title, string msg, string icon, function callback)	弹出框
 * 			void									confirm(string title, string msg, function callback)			确认框
 * 			void									prompt(string title, string msg, function callback)				
 * 			void									progress(object options)										进度条
 * 			void									showMessage(string title, string msg, number time)				提示框
 * 			void									showSuccess()													提示成功
 * 			void									showFail()														提示失败
 * 			void									alertException(object e, string attribute)						弹出异常
 * 			void									progressMessage(string title, string msg)						进度条
 * 
 * @date	2018年4月25日 14:25:18
 */
core.html.easyui.window.Messager = (function() {

	/**
	 * 消息
	 */
	var messager;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 提示框
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.show = function(options) {

		$.messager.show(options);
	};

	/**
	 * 弹出框
	 * 
	 * @param title{string}
	 *            标题
	 * @param msg{string}
	 *            信息
	 * @param icon{string}
	 *            图标
	 * @param callback{function}
	 *            回调
	 * @returns
	 */
	Constructor.prototype.alert = function(title, msg, icon, callback) {

		title = title === null ? "警告" : title;
		title = title === "" ? "&nbsp;" : title;

		icon = icon === null ? "error" : icon;

		$.messager.alert(title, msg, icon, callback);
	};

	/**
	 * 确认框
	 * 
	 * @param title{string}
	 *            标题头
	 * @param msg{string}
	 *            信息
	 * @param callback{function}
	 *            回调
	 * @returns
	 */
	Constructor.prototype.confirm = function(title, msg, callback) {

		title = title === null ? "温馨提示" : title;
		title = title === "" ? "&nbsp;" : title;

		$.messager.confirm(title, msg, callback);
	};

	/**
	 * 输入确认框
	 * 
	 * @param title{string}
	 *            标题头
	 * @param msg{string}
	 *            信息
	 * @param callback{function}
	 *            回调
	 * @returns
	 */
	Constructor.prototype.prompt = function(title, msg, callback) {

		title = title === null ? "温馨提示" : title;
		title = title === "" ? "&nbsp;" : title;

		$.messager.prompt(title, msg, callback);
	};

	/**
	 * 进度条
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.progress = function(options) {

		$.messager.progress(options);
	};

	/**
	 * 提示框
	 * 
	 * @param title{string}
	 *            标题头
	 * @param msg{string}
	 *            信息
	 * @param time{number}
	 *            显示时间
	 * @returns
	 */
	Constructor.prototype.showMessage = function(title, msg, time) {

		title = title === null ? "温馨提示" : title;
		title = title === "" ? "&nbsp;" : title;

		time = time === null || time === "" ? 1200 : time;

		this.show({
			title : title,
			msg : msg,
			timeout : time,
			showType : "show",
			style : {
				right : "",
				top : document.body.scrollTop + document.documentElement.scrollTop,
				bottom : ""
			}
		});
	};

	/**
	 * 提示成功
	 * 
	 * @returns
	 */
	Constructor.prototype.showSuccess = function() {

		this.showMessage(null, "操作成功!", null);
	};

	/**
	 * 提示失败
	 * 
	 * @returns
	 */
	Constructor.prototype.showFail = function() {

		this.showMessage(null, "操作失败!", null);
	};

	/**
	 * 弹出异常
	 * 
	 * @param e{object}
	 *            异常对象
	 * @param attr{string}
	 *            异常对象属性
	 * @returns
	 */
	Constructor.prototype.alertException = function(e, attr) {

		this.alert(null, e[attr === undefined ? "responseText" : attr], null);
	};

	/**
	 * 进度条
	 * 
	 * @param title{string}
	 *            标题
	 * @param msg{string}
	 *            信息
	 * @returns
	 */
	Constructor.prototype.progressMessage = function(title, msg) {

		title = title === null ? "温馨提示" : title;
		title = title === "" ? "&nbsp;" : title;

		this.progress({
			title : title,
			msg : msg
		});
	};

	return {

		/**
		 * 获取消息实例
		 * 
		 * @returns {core.html.easyui.window.Messager}
		 */
		getInstance : function() {

			if (messager == null) {

				messager = new Constructor();
			}

			return messager;
		}
	};
})();
/**
 * @name	DataGrid
 * @package core.html.easyui.datagrid
 * @desc	数据列表模板
 * @type	类型
 * 
 * @constructor	core.html.easyui.datagrid.DataGrid(string id/object jQuery)
 * 
 * @extend	core.html.easyui.layout.Panel
 * 			core.html.easyui.base.Resizable
 * 			core.html.easyui.button.LinkButton
 * 			core.html.easyui.base.Pagination
 * 
 * @method	继承core.html.easyui.layout.Panel所有方法
 * 			继承core.html.easyui.base.Resizable所有方法
 * 			继承core.html.easyui.button.LinkButton所有方法
 * 			继承core.html.easyui.base.Pagination所有方法
 * 			array/core.html.easyui.datagrid.DataGrid	columns(array columns)								获取/设置列
 * 			array/core.html.easyui.datagrid.DataGrid	frozenColumns(array frozenColumns)					获取/设置冻结列
 * 			boolean/core.html.easyui.datagrid.DataGrid	fitColumns(boolean fitColumns)						获取/设置列宽自适应
 * 			string/core.html.easyui.datagrid.DataGrid	resizeHandle(string resizeHandle)					获取/设置
 * 			number/core.html.easyui.datagrid.DataGrid	resizeEdge(number resizeEdge)						获取/设置
 * 			boolean/core.html.easyui.datagrid.DataGrid	autoRowHeight(boolean autoRowHeight)				获取/设置行高自适应
 * 			array/core.html.easyui.datagrid.DataGrid	toolbar(array toolbar)								获取/设置工具条
 * 			boolean/core.html.easyui.datagrid.DataGrid	striped(boolean striped)							获取/设置隔行变色
 * 			boolean/core.html.easyui.datagrid.DataGrid	nowrap(boolean nowrap)								获取/设置禁止文字自动换行
 * 			string/core.html.easyui.datagrid.DataGrid	idField(string idField)								获取/设置id字段
 * 			string/core.html.easyui.datagrid.DataGrid	url(string url)										获取/设置数据URL
 * 			array/core.html.easyui.datagrid.DataGrid	data(array data)									获取/设置数据
 * 			string/core.html.easyui.datagrid.DataGrid	loadMsg(string loadMsg)								获取/设置数据加载等待提示
 * 			string/core.html.easyui.datagrid.DataGrid	emptyMsg(string emptyMsg)							获取/设置
 * 			boolean/core.html.easyui.datagrid.DataGrid	pagination(boolean pagination)						获取/设置添加页脚工具栏
 * 			boolean/core.html.easyui.datagrid.DataGrid	rownumbers(boolean rownumbers)						获取/设置显示行号
 * 			boolean/core.html.easyui.datagrid.DataGrid	singleSelect(boolean singleSelect)					获取/设置仅能选中单行
 * 			boolean/core.html.easyui.datagrid.DataGrid	ctrlSelect(boolean ctrlSelect)						获取/设置ctrl键选中
 * 			boolean/core.html.easyui.datagrid.DataGrid	checkOnSelect(boolean checkOnSelect)				获取/设置check时选中
 * 			boolean/core.html.easyui.datagrid.DataGrid	selectOnCheck(boolean selectOnCheck)				获取/设置选中时check
 * 			boolean/core.html.easyui.datagrid.DataGrid	scrollOnSelect(boolean scrollOnSelect)				获取/设置选中时check
 * 			string/core.html.easyui.datagrid.DataGrid	pagePosition(string pagePosition)					获取/设置分页工具条位置
 * 			string/core.html.easyui.datagrid.DataGrid	sortName(string sortName)							获取/设置排序字段
 * 			string/core.html.easyui.datagrid.DataGrid	sortOrder(string sortOrder)							获取/设置排序方式
 * 			boolean/core.html.easyui.datagrid.DataGrid	multiSort(boolean multiSort)						获取/设置
 * 			boolean/core.html.easyui.datagrid.DataGrid	remoteSort(boolean remoteSort)						获取/设置向后台发送排序条件
 * 			boolean/core.html.easyui.datagrid.DataGrid	showHeader(boolean showHeader)						获取/设置显示标头
 * 			boolean/core.html.easyui.datagrid.DataGrid	showFooter(boolean showFooter)						获取/设置显示脚
 * 			number/core.html.easyui.datagrid.DataGrid	scrollbarSize(number scrollbarSize)					获取/设置
 * 			number/core.html.easyui.datagrid.DataGrid	rownumberWidth(number rownumberWidth)				获取/设置行号宽度
 * 			number/core.html.easyui.datagrid.DataGrid	editorHeight(number editorHeight)					获取/设置编辑框高度
 * 			function/core.html.easyui.datagrid.DataGrid	rowStyler(function rowStyler)						获取/设置行样式
 * 			function/core.html.easyui.datagrid.DataGrid	loadFilter(function loadFilter)						获取/设置数据加载过滤
 * 			object/core.html.easyui.datagrid.DataGrid	editors(object editors)								获取/设置编辑
 * 			object/core.html.easyui.datagrid.DataGrid	view(object view)									获取/设置展示
 * 			function/core.html.easyui.datagrid.DataGrid	onLoadSuccess(function onLoadSuccess)				获取/设置数据加载成功事件
 * 			function/core.html.easyui.datagrid.DataGrid	onClickRow(function onClickRow)						获取/设置行单击事件
 * 			function/core.html.easyui.datagrid.DataGrid	onDblClickRow(function onDblClickRow)				获取/设置行双击事件
 * 			function/core.html.easyui.datagrid.DataGrid	onClickCell(function onClickCell)					获取/设置单元格单击事件
 * 			function/core.html.easyui.datagrid.DataGrid	onDblClickCell(function onDblClickCell)				获取/设置单元格双击事件
 * 			function/core.html.easyui.datagrid.DataGrid	onBeforeSortColumn(function onBeforeSortColumn)		获取/设置排序前
 * 			function/core.html.easyui.datagrid.DataGrid	onSortColumn(function onSortColumn)					获取/设置排序
 * 			function/core.html.easyui.datagrid.DataGrid	onResizeColumn(function onResizeColumn)				获取/设置改变列宽
 * 			function/core.html.easyui.datagrid.DataGrid	onBeforeSelect(function onBeforeSelect)				获取/设置选中前
 * 			function/core.html.easyui.datagrid.DataGrid	onSelect(function onSelect)							获取/设置选中
 * 			function/core.html.easyui.datagrid.DataGrid	onBeforeUnselect(function onBeforeUnselect)			获取/设置取消选中前
 * 			function/core.html.easyui.datagrid.DataGrid	onUnselect(function onUnselect)						获取/设置取消选中
 * 			function/core.html.easyui.datagrid.DataGrid	onSelectAll(function onSelectAll)					获取/设置选中所有时
 * 			function/core.html.easyui.datagrid.DataGrid	onUnselectAll(function onUnselectAll)				获取/设置取消选中所有时
 * 			function/core.html.easyui.datagrid.DataGrid	onBeforeCheck(function onBeforeCheck)				获取/设置勾选前
 * 			function/core.html.easyui.datagrid.DataGrid	onCheck(function onCheck)							获取/设置勾选
 * 			function/core.html.easyui.datagrid.DataGrid	onBeforeUncheck(function onBeforeUncheck)			获取/设置取消勾选前
 * 			function/core.html.easyui.datagrid.DataGrid	onUncheck(function onUncheck)						获取/设置取消勾选
 * 			function/core.html.easyui.datagrid.DataGrid	onCheckAll(function onCheckAll)						获取/设置勾选所有
 * 			function/core.html.easyui.datagrid.DataGrid	onUncheckAll(function onUncheckAll)					获取/设置取消勾选所有
 * 			function/core.html.easyui.datagrid.DataGrid	onBeforeEdit(function onBeforeEdit)					获取/设置编辑前
 * 			function/core.html.easyui.datagrid.DataGrid	onBeginEdit(function onBeginEdit)					获取/设置编辑
 * 			function/core.html.easyui.datagrid.DataGrid	onEndEdit(function onEndEdit)						获取/设置结束编辑
 * 			function/core.html.easyui.datagrid.DataGrid	onAfterEdit(function onAfterEdit)					获取/设置编辑后
 * 			function/core.html.easyui.datagrid.DataGrid	onCancelEdit(function onCancelEdit)					获取/设置取消编辑
 * 			function/core.html.easyui.datagrid.DataGrid	onHeaderContextMenu(function onHeaderContextMenu)	获取/设置标题头右键点击
 * 			function/core.html.easyui.datagrid.DataGrid	onRowContextMenu(function onRowContextMenu)			获取/设置行右键点击事件
 * 			core.html.easyui.datagrid.Datagrid			init()												初始化组件模板
 * 			object										options()
 * 			object										getPager()											获取页面对象
 * 			object										getPanel()											获取面板对象
 * 			object										getColumnFields(boolean frozen)						获取列字段
 * 			object										getColumnOption(object field)						获取列属性
 * 			void										resize(object param)								调整大小
 * 			void										load(object param)									重新加载数据
 * 			void										reload(object param)								重新加载数据,且停留在当前页面
 * 			void										reloadFooter(object footer)							重载页脚
 * 			void										loading()											显示载入中
 * 			void										loaded()											隐藏载入中
 * 			void										fitColumns()										列宽自适应
 * 			void										fixColumnSize(object field)							固定列宽
 * 			void										fixRowHeight(number index)							固定指定列高度
 * 			void										freezeRow(number index)								冻结指定行
 * 			void										autoSizeColumn(object field)						列宽自适应
 * 			void										loadData(array data)								加载数据
 * 			array										getData()											获取当前数据
 * 			array										getRows()											获取所有行
 * 			object										getFooterRows()										获取所有行
 * 			number										getRowIndex(object row)								获取指定行号
 * 			object										getChecked()										获取勾选行
 * 			object										getSelected()										获取选中节点
 * 			array										getSelections()										获取所有选中行
 * 			void										clearSelections()									清除所有选中行
 * 			void										clearChecked()										清除所有勾选的行
 * 			void										scrollTo(number index)								滚动至指定行
 * 			void										gotoPage(number param)								跳至某页
 * 			void										highlightRow(number index)							高亮行
 * 			void										selectAll()											选中所有行
 * 			void										unselectAll()										取消选中所有行
 * 			void										selectRow(number index)								选中行
 * 			void										selectRecord(string idValue)						通过ID选中行
 * 			void										unselectRow(number index)							取消选中行
 * 			void										checkAll()											勾选所有行
 * 			void										uncheckAll()										取消勾选所有行
 * 			void										checkRow(number index)								勾选行
 * 			void										uncheckRow(number index)							取消勾选行
 * 			void										beginEdit(number index)								编辑行
 * 			void										endEdit(number index)								结束编辑行
 * 			void										cancelEdit(number index)							取消编辑行
 * 			object										getEditors(number index)							获取行所有编辑器
 * 			object										getEditor(object options)							获取行中某列编辑器
 * 			void										refreshRow(number index)							刷新行
 * 			void										validateRow(number index)							验证行
 * 			void										updateRow(object param)								更新行
 * 			void										appendRow(object row)								添加行
 * 			void										insertRow(object row)								插入行
 * 			void										deleteRow(number index)								删除行
 * 			array										getChanges(object type)								获取修改行
 * 			void										acceptChanges()										提交所有修改行
 * 			void										rejectChanges()										回滚修改行
 * 			void										mergeCells(object options)							合并单元格
 * 			void										showColumn(object field)							显示列
 * 			void										hideColumn(object field)							隐藏列
 * 			void										sort(object param)									排序
 * 			void										setWidth(number width)								设置宽度
 * 			void										setHeight(number height)							设置高度
 * 			number										getCurrentDataNum()									获取当前页数据条数
 * 			number										getTotalDataNum()									获取记录总条数
 * 			number										getPageSize()										获取分页数
 * 			number										getPageNum()										获取总页数
 * 			number										getCurrentPageNum()									获取当前页码
 * 			void										selectBeforePage()									翻至前一页
 * 			void										selectNextPage()									翻至后一页
 * 			object										getRow(number index)								获取指定行数据
 * 			number										getSelectedRowIndex()								获取选中行索引
 * 
 * @date	2018年4月27日 15:27:12
 */
core.html.easyui.datagrid.DataGrid = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.layout.Panel.call(this, arguments[0]);
		core.html.easyui.base.Resizable.call(this, arguments[0]);
		core.html.easyui.button.LinkButton.call(this, arguments[0]);
		core.html.easyui.base.Pagination.call(this, arguments[0]);
		// 默认参数修改
		this.method($.fn.datagrid.defaults.method);
		this.pageNumber($.fn.datagrid.defaults.pageNumber);
		this
				.pageSize(core.html.util.Cookie.getInstance().get("coreHtmlEasyuiDatagridDataGridPageSize") == null ? $.fn.datagrid.defaults.pageSize
						: core.html.util.Cookie.getInstance().get("coreHtmlEasyuiDatagridDataGridPageSize"));
		this.pageList($.fn.datagrid.defaults.pageList);
		this.queryParams($.fn.datagrid.defaults.queryParams);
		this.loader($.fn.datagrid.defaults.loader);
		this.onLoadError($.fn.datagrid.defaults.onLoadError);
		this.onBeforeLoad($.fn.datagrid.defaults.onBeforeLoad);

		/**
		 * 属性
		 */
		/**
		 * 列
		 */
		var columns = $.fn.datagrid.defaults.columns;
		/**
		 * 冻结列
		 */
		var frozenColumns = $.fn.datagrid.defaults.frozenColumns;
		/**
		 * 列宽自适应
		 */
		var fitColumns = $.fn.datagrid.defaults.fitColumns;
		/**
		 * 
		 */
		var resizeHandle = $.fn.datagrid.defaults.resizeHandle;
		/**
		 * 
		 */
		var resizeEdge = $.fn.datagrid.defaults.resizeEdge;
		/**
		 * 行高自适应
		 */
		var autoRowHeight = $.fn.datagrid.defaults.autoRowHeight;
		/**
		 * 工具条
		 */
		var toolbar = $.fn.datagrid.defaults.toolbar;
		/**
		 * 隔行变色
		 */
		var striped = $.fn.datagrid.defaults.striped;
		/**
		 * 禁止文字自动换行
		 */
		var nowrap = $.fn.datagrid.defaults.nowrap;
		/**
		 * id字段
		 */
		var idField = $.fn.datagrid.defaults.idField;
		/**
		 * 数据URL
		 */
		var url = $.fn.datagrid.defaults.url;
		/**
		 * 数据
		 */
		var data = $.fn.datagrid.defaults.data;
		/**
		 * 数据加载等待提示
		 */
		var loadMsg = $.fn.datagrid.defaults.loadMsg;
		/**
		 * 
		 */
		var emptyMsg = $.fn.datagrid.defaults.emptyMsg;
		/**
		 * 添加页脚工具栏
		 */
		var pagination = $.fn.datagrid.defaults.pagination;
		/**
		 * 显示行号
		 */
		var rownumbers = $.fn.datagrid.defaults.rownumbers;
		/**
		 * 仅能选中单行
		 */
		var singleSelect = $.fn.datagrid.defaults.singleSelect;
		/**
		 * ctrl键选中
		 */
		var ctrlSelect = $.fn.datagrid.defaults.ctrlSelect;
		/**
		 * check时选中
		 */
		var checkOnSelect = $.fn.datagrid.defaults.checkOnSelect;
		/**
		 * 选中时check
		 */
		var selectOnCheck = $.fn.datagrid.defaults.selectOnCheck;
		/**
		 * 
		 */
		var scrollOnSelect = $.fn.datagrid.defaults.scrollOnSelect;
		/**
		 * 分页工具条位置
		 */
		var pagePosition = $.fn.datagrid.defaults.pagePosition;
		/**
		 * 排序字段
		 */
		var sortName = $.fn.datagrid.defaults.sortName;
		/**
		 * 排序方式
		 */
		var sortOrder = $.fn.datagrid.defaults.sortOrder;
		/**
		 * 
		 */
		var multiSort = $.fn.datagrid.defaults.multiSort;
		/**
		 * 向后台发送排序条件
		 */
		var remoteSort = $.fn.datagrid.defaults.remoteSort;
		/**
		 * 显示标头
		 */
		var showHeader = $.fn.datagrid.defaults.showHeader;
		/**
		 * 显示脚
		 */
		var showFooter = $.fn.datagrid.defaults.showFooter;
		/**
		 * 
		 */
		var scrollbarSize = $.fn.datagrid.defaults.scrollbarSize;
		/**
		 * 行号宽度
		 */
		var rownumberWidth = $.fn.datagrid.defaults.rownumberWidth;
		/**
		 * 编辑框高度
		 */
		var editorHeight = $.fn.datagrid.defaults.editorHeight;
		/**
		 * 行样式
		 */
		var rowStyler = $.fn.datagrid.defaults.rowStyler;
		/**
		 * 数据加载过滤
		 */
		var loadFilter = $.fn.datagrid.defaults.loadFilter;
		/**
		 * 编辑
		 */
		var editors = $.fn.datagrid.defaults.editors;
		/**
		 * 展示
		 */
		var view = $.fn.datagrid.defaults.view;

		/**
		 * 事件
		 */
		/**
		 * 数据加载成功
		 */
		var onLoadSuccess = $.fn.datagrid.defaults.onLoadSuccess;
		/**
		 * 行单击事件
		 */
		var onClickRow = $.fn.datagrid.defaults.onClickRow;
		/**
		 * 行双击事件
		 */
		var onDblClickRow = $.fn.datagrid.defaults.onDblClickRow;
		/**
		 * 单元格单击事件
		 */
		var onClickCell = $.fn.datagrid.defaults.onClickCell;
		/**
		 * 单元格双击事件
		 */
		var onDblClickCell = $.fn.datagrid.defaults.onDblClickCell;
		/**
		 * 排序前
		 */
		var onBeforeSortColumn = $.fn.datagrid.defaults.onBeforeSortColumn;
		/**
		 * 排序
		 */
		var onSortColumn = $.fn.datagrid.defaults.onSortColumn;
		/**
		 * 改变列宽
		 */
		var onResizeColumn = $.fn.datagrid.defaults.onResizeColumn;
		/**
		 * 选中前
		 */
		var onBeforeSelect = $.fn.datagrid.defaults.onBeforeSelect;
		/**
		 * 选中
		 */
		var onSelect = $.fn.datagrid.defaults.onSelect;
		/**
		 * 取消选中前
		 */
		var onBeforeUnselect = $.fn.datagrid.defaults.onBeforeUnselect;
		/**
		 * 取消选中
		 */
		var onUnselect = $.fn.datagrid.defaults.onUnselect;
		/**
		 * 选中所有时
		 */
		var onSelectAll = $.fn.datagrid.defaults.onSelectAll;
		/**
		 * 取消选中所有时
		 */
		var onUnselectAll = $.fn.datagrid.defaults.onUnselectAll;
		/**
		 * 勾选前
		 */
		var onBeforeCheck = $.fn.datagrid.defaults.onBeforeCheck;
		/**
		 * 勾选
		 */
		var onCheck = $.fn.datagrid.defaults.onCheck;
		/**
		 * 取消勾选前
		 */
		var onBeforeUncheck = $.fn.datagrid.defaults.onBeforeUncheck;
		/**
		 * 取消勾选
		 */
		var onUncheck = $.fn.datagrid.defaults.onUncheck;
		/**
		 * 勾选所有
		 */
		var onCheckAll = $.fn.datagrid.defaults.onCheckAll;
		/**
		 * 取消勾选所有
		 */
		var onUncheckAll = $.fn.datagrid.defaults.onUncheckAll;
		/**
		 * 编辑前
		 */
		var onBeforeEdit = $.fn.datagrid.defaults.onBeforeEdit;
		/**
		 * 编辑
		 */
		var onBeginEdit = $.fn.datagrid.defaults.onBeginEdit;
		/**
		 * 结束编辑
		 */
		var onEndEdit = $.fn.datagrid.defaults.onEndEdit;
		/**
		 * 编辑后
		 */
		var onAfterEdit = $.fn.datagrid.defaults.onAfterEdit;
		/**
		 * 取消编辑
		 */
		var onCancelEdit = $.fn.datagrid.defaults.onCancelEdit;
		/**
		 * 标题头右键点击
		 */
		var onHeaderContextMenu = $.fn.datagrid.defaults.onHeaderContextMenu;
		/**
		 * 行右键点击事件
		 */
		var onRowContextMenu = $.fn.datagrid.defaults.onRowContextMenu;

		/**
		 * 获取/设置列
		 * 
		 * @param columns{array}
		 * @returns {array/core.html.easyui.datagrid.DataGrid}
		 */
		this.columns = function() {

			switch (arguments.length) {
			case 0:
				return columns;
			default:
				columns = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置冻结列
		 * 
		 * @param frozenColumns{array}
		 * @returns {array/core.html.easyui.datagrid.DataGrid}
		 */
		this.frozenColumns = function() {

			switch (arguments.length) {
			case 0:
				return frozenColumns;
			default:
				frozenColumns = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置列宽自适应
		 * 
		 * @param fitColumns{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.fitColumns = function() {

			switch (arguments.length) {
			case 0:
				return fitColumns;
			default:
				fitColumns = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param resizeHandle{string}
		 * @returns {string/core.html.easyui.datagrid.DataGrid}
		 */
		this.resizeHandle = function() {

			switch (arguments.length) {
			case 0:
				return resizeHandle;
			default:
				resizeHandle = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param resizeEdge{number}
		 * @returns {number/core.html.easyui.datagrid.DataGrid}
		 */
		this.resizeEdge = function() {

			switch (arguments.length) {
			case 0:
				return resizeEdge;
			default:
				resizeEdge = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置行高自适应
		 * 
		 * @param autoRowHeight{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.autoRowHeight = function() {

			switch (arguments.length) {
			case 0:
				return autoRowHeight;
			default:
				autoRowHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置工具条
		 * 
		 * @param toolbar{array}
		 * @returns {array/core.html.easyui.datagrid.DataGrid}
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
		 * 获取/设置隔行变色
		 * 
		 * @param striped{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.striped = function() {

			switch (arguments.length) {
			case 0:
				return striped;
			default:
				striped = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置禁止文字自动换行
		 * 
		 * @param nowrap{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.nowrap = function() {

			switch (arguments.length) {
			case 0:
				return nowrap;
			default:
				nowrap = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置id字段
		 * 
		 * @param idField{string}
		 * @returns {string/core.html.easyui.datagrid.DataGrid}
		 */
		this.idField = function() {

			switch (arguments.length) {
			case 0:
				return idField;
			default:
				idField = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置数据URL
		 * 
		 * @param url{string}
		 * @returns {string/core.html.easyui.datagrid.DataGrid}
		 */
		this.url = function() {

			switch (arguments.length) {
			case 0:
				return url;
			default:
				url = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置数据
		 * 
		 * @param data{array}
		 * @returns {array/core.html.easyui.datagrid.DataGrid}
		 */
		this.data = function() {

			switch (arguments.length) {
			case 0:
				return data;
			default:
				data = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置数据加载等待提示
		 * 
		 * @param loadMsg{string}
		 * @returns {string/core.html.easyui.datagrid.DataGrid}
		 */
		this.loadMsg = function() {

			switch (arguments.length) {
			case 0:
				return loadMsg;
			default:
				loadMsg = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param emptyMsg{string}
		 * @returns {string/core.html.easyui.datagrid.DataGrid}
		 */
		this.emptyMsg = function() {

			switch (arguments.length) {
			case 0:
				return emptyMsg;
			default:
				emptyMsg = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置添加页脚工具栏
		 * 
		 * @param pagination{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.pagination = function() {

			switch (arguments.length) {
			case 0:
				return pagination;
			default:
				pagination = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示行号
		 * 
		 * @param rownumbers{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.rownumbers = function() {

			switch (arguments.length) {
			case 0:
				return rownumbers;
			default:
				rownumbers = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置仅能选中单行
		 * 
		 * @param singleSelect{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.singleSelect = function() {

			switch (arguments.length) {
			case 0:
				return singleSelect;
			default:
				singleSelect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置ctrl键选中
		 * 
		 * @param ctrlSelect{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.ctrlSelect = function() {

			switch (arguments.length) {
			case 0:
				return ctrlSelect;
			default:
				ctrlSelect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置check时选中
		 * 
		 * @param checkOnSelect{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.checkOnSelect = function() {

			switch (arguments.length) {
			case 0:
				return checkOnSelect;
			default:
				checkOnSelect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置选中时check
		 * 
		 * @param selectOnCheck{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.selectOnCheck = function() {

			switch (arguments.length) {
			case 0:
				return selectOnCheck;
			default:
				selectOnCheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param scrollOnSelect{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.scrollOnSelect = function() {

			switch (arguments.length) {
			case 0:
				return scrollOnSelect;
			default:
				scrollOnSelect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置分页工具条位置
		 * 
		 * @param pagePosition{string}
		 * @returns {string/core.html.easyui.datagrid.DataGrid}
		 */
		this.pagePosition = function() {

			switch (arguments.length) {
			case 0:
				return pagePosition;
			default:
				pagePosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置排序字段
		 * 
		 * @param sortName{string}
		 * @returns {string/core.html.easyui.datagrid.DataGrid}
		 */
		this.sortName = function() {

			switch (arguments.length) {
			case 0:
				return sortName;
			default:
				sortName = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置排序方式
		 * 
		 * @param sortOrder{string}
		 * @returns {string/core.html.easyui.datagrid.DataGrid}
		 */
		this.sortOrder = function() {

			switch (arguments.length) {
			case 0:
				return sortOrder;
			default:
				sortOrder = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param multiSort{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.multiSort = function() {

			switch (arguments.length) {
			case 0:
				return multiSort;
			default:
				multiSort = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置向后台发送排序条件
		 * 
		 * @param remoteSort{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.remoteSort = function() {

			switch (arguments.length) {
			case 0:
				return remoteSort;
			default:
				remoteSort = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示标头
		 * 
		 * @param showHeader{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.showHeader = function() {

			switch (arguments.length) {
			case 0:
				return showHeader;
			default:
				showHeader = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示脚
		 * 
		 * @param showFooter{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataGrid}
		 */
		this.showFooter = function() {

			switch (arguments.length) {
			case 0:
				return showFooter;
			default:
				showFooter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param scrollbarSize{number}
		 * @returns {number/core.html.easyui.datagrid.DataGrid}
		 */
		this.scrollbarSize = function() {

			switch (arguments.length) {
			case 0:
				return scrollbarSize;
			default:
				scrollbarSize = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置行号宽度
		 * 
		 * @param rownumberWidth{number}
		 * @returns {number/core.html.easyui.datagrid.DataGrid}
		 */
		this.rownumberWidth = function() {

			switch (arguments.length) {
			case 0:
				return rownumberWidth;
			default:
				rownumberWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置编辑框高度
		 * 
		 * @param editorHeight{number}
		 * @returns {number/core.html.easyui.datagrid.DataGrid}
		 */
		this.editorHeight = function() {

			switch (arguments.length) {
			case 0:
				return editorHeight;
			default:
				editorHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置行样式
		 * 
		 * @param rowStyler{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.rowStyler = function() {

			switch (arguments.length) {
			case 0:
				return rowStyler;
			default:
				rowStyler = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置数据加载过滤
		 * 
		 * @param loadFilter{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.loadFilter = function() {

			switch (arguments.length) {
			case 0:
				return loadFilter;
			default:
				loadFilter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置编辑
		 * 
		 * @param editors{object}
		 * @returns {object/core.html.easyui.datagrid.DataGrid}
		 */
		this.editors = function() {

			switch (arguments.length) {
			case 0:
				return editors;
			default:
				editors = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置展示
		 * 
		 * @param view{object}
		 * @returns {object/core.html.easyui.datagrid.DataGrid}
		 */
		this.view = function() {

			switch (arguments.length) {
			case 0:
				return view;
			default:
				view = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置数据加载成功事件
		 * 
		 * @param onLoadSuccess{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onLoadSuccess = function() {

			switch (arguments.length) {
			case 0:
				return onLoadSuccess;
			default:
				onLoadSuccess = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置行单击事件
		 * 
		 * @param onClickRow{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onClickRow = function() {

			switch (arguments.length) {
			case 0:
				return onClickRow;
			default:
				onClickRow = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置行双击事件
		 * 
		 * @param onDblClickRow{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onDblClickRow = function() {

			switch (arguments.length) {
			case 0:
				return onDblClickRow;
			default:
				onDblClickRow = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置单元格单击事件
		 * 
		 * @param onClickCell{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onClickCell = function() {

			switch (arguments.length) {
			case 0:
				return onClickCell;
			default:
				onClickCell = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置单元格双击事件
		 * 
		 * @param onDblClickCell{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onDblClickCell = function() {

			switch (arguments.length) {
			case 0:
				return onDblClickCell;
			default:
				onDblClickCell = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置排序前
		 * 
		 * @param onBeforeSortColumn{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onBeforeSortColumn = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeSortColumn;
			default:
				onBeforeSortColumn = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置排序
		 * 
		 * @param onSortColumn{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onSortColumn = function() {

			switch (arguments.length) {
			case 0:
				return onSortColumn;
			default:
				onSortColumn = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置改变列宽
		 * 
		 * @param onResizeColumn{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onResizeColumn = function() {

			switch (arguments.length) {
			case 0:
				return onResizeColumn;
			default:
				onResizeColumn = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置选中前
		 * 
		 * @param onBeforeSelect{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onBeforeSelect = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeSelect;
			default:
				onBeforeSelect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置选中
		 * 
		 * @param onSelect{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
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
		 * 获取/设置取消选中前
		 * 
		 * @param onBeforeUnselect{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onBeforeUnselect = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeUnselect;
			default:
				onBeforeUnselect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置取消选中
		 * 
		 * @param onUnselect{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
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
		 * 获取/设置选中所有时
		 * 
		 * @param onSelectAll{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onSelectAll = function() {

			switch (arguments.length) {
			case 0:
				return onSelectAll;
			default:
				onSelectAll = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置取消选中所有时
		 * 
		 * @param onUnselectAll{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onUnselectAll = function() {

			switch (arguments.length) {
			case 0:
				return onUnselectAll;
			default:
				onUnselectAll = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置勾选前
		 * 
		 * @param onBeforeCheck{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onBeforeCheck = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeCheck;
			default:
				onBeforeCheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置勾选
		 * 
		 * @param onCheck{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onCheck = function() {

			switch (arguments.length) {
			case 0:
				return onCheck;
			default:
				onCheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置取消勾选前
		 * 
		 * @param onBeforeUncheck{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onBeforeUncheck = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeUncheck;
			default:
				onBeforeUncheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置取消勾选
		 * 
		 * @param onUncheck{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onUncheck = function() {

			switch (arguments.length) {
			case 0:
				return onUncheck;
			default:
				onUncheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置勾选所有
		 * 
		 * @param onCheckAll{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onCheckAll = function() {

			switch (arguments.length) {
			case 0:
				return onCheckAll;
			default:
				onCheckAll = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置取消勾选所有
		 * 
		 * @param onUncheckAll{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onUncheckAll = function() {

			switch (arguments.length) {
			case 0:
				return onUncheckAll;
			default:
				onUncheckAll = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置编辑前
		 * 
		 * @param onBeforeEdit{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onBeforeEdit = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeEdit;
			default:
				onBeforeEdit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置编辑
		 * 
		 * @param onBeginEdit{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onBeginEdit = function() {

			switch (arguments.length) {
			case 0:
				return onBeginEdit;
			default:
				onBeginEdit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置结束编辑
		 * 
		 * @param onEndEdit{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onEndEdit = function() {

			switch (arguments.length) {
			case 0:
				return onEndEdit;
			default:
				onEndEdit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置编辑后
		 * 
		 * @param onAfterEdit{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onAfterEdit = function() {

			switch (arguments.length) {
			case 0:
				return onAfterEdit;
			default:
				onAfterEdit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置取消编辑
		 * 
		 * @param onCancelEdit{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onCancelEdit = function() {

			switch (arguments.length) {
			case 0:
				return onCancelEdit;
			default:
				onCancelEdit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置标题头右键点击
		 * 
		 * @param onHeaderContextMenu{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onHeaderContextMenu = function() {

			switch (arguments.length) {
			case 0:
				return onHeaderContextMenu;
			default:
				onHeaderContextMenu = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置行右键点击事件
		 * 
		 * @param onRowContextMenu{function}
		 * @returns {function/core.html.easyui.datagrid.DataGrid}
		 */
		this.onRowContextMenu = function() {

			switch (arguments.length) {
			case 0:
				return onRowContextMenu;
			default:
				onRowContextMenu = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.datagrid.DataGrid}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.datagrid.DataGrid", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().datagrid({
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
			// LinkButton继承属性
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// Pagination继承属性
			total : this.total(),
			pageSize : this.pageSize(),
			pageNumber : this.pageNumber(),
			pageList : this.pageList(),
			loading : this.loading(),
			buttons : this.buttons(),
			layout : this.layout(),
			links : this.links(),
			showPageList : this.showPageList(),
			showRefresh : this.showRefresh(),
			showPageInfo : this.showPageInfo(),
			beforePageText : this.beforePageText(),
			afterPageText : this.afterPageText(),
			displayMsg : this.displayMsg(),
			// 属性
			columns : this.columns(),
			frozenColumns : this.frozenColumns(),
			fitColumns : this.fitColumns(),
			resizeHandle : this.resizeHandle(),
			resizeEdge : this.resizeEdge(),
			autoRowHeight : this.autoRowHeight(),
			toolbar : this.toolbar(),
			striped : this.striped(),
			nowrap : this.nowrap(),
			idField : this.idField(),
			url : this.url(),
			data : this.data(),
			loadMsg : this.loadMsg(),
			emptyMsg : this.emptyMsg(),
			pagination : this.pagination(),
			rownumbers : this.rownumbers(),
			singleSelect : this.singleSelect(),
			ctrlSelect : this.ctrlSelect(),
			checkOnSelect : this.checkOnSelect(),
			selectOnCheck : this.selectOnCheck(),
			scrollOnSelect : this.scrollOnSelect(),
			pagePosition : this.pagePosition(),
			sortName : this.sortName(),
			sortOrder : this.sortOrder(),
			multiSort : this.multiSort(),
			remoteSort : this.remoteSort(),
			showHeader : this.showHeader(),
			showFooter : this.showFooter(),
			scrollbarSize : this.scrollbarSize(),
			rownumberWidth : this.rownumberWidth(),
			editorHeight : this.editorHeight(),
			rowStyler : this.rowStyler(),
			loadFilter : this.loadFilter(),
			editors : this.editors(),
			view : this.view(),

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
			// LinkButton继承事件
			onClick : this.onClick(),
			// Pagination继承事件
			onSelectPage : this.onSelectPage(),
			onBeforeRefresh : this.onBeforeRefresh(),
			onRefresh : this.onRefresh(),
			onChangePageSize : this.onChangePageSize(),
			// 事件
			onLoadSuccess : this.onLoadSuccess(),
			onClickRow : this.onClickRow(),
			onDblClickRow : this.onDblClickRow(),
			onClickCell : this.onClickCell(),
			onDblClickCell : this.onDblClickCell(),
			onBeforeSortColumn : this.onBeforeSortColumn(),
			onSortColumn : this.onSortColumn(),
			onResizeColumn : this.onResizeColumn(),
			onBeforeSelect : this.onBeforeSelect(),
			onSelect : this.onSelect(),
			onBeforeUnselect : this.onBeforeUnselect(),
			onUnselect : this.onUnselect(),
			onSelectAll : this.onSelectAll(),
			onUnselectAll : this.onUnselectAll(),
			onBeforeCheck : this.onBeforeCheck(),
			onCheck : this.onCheck(),
			onBeforeUncheck : this.onBeforeUncheck(),
			onUncheck : this.onUncheck(),
			onCheckAll : this.onCheckAll(),
			onUncheckAll : this.onUncheckAll(),
			onBeforeEdit : this.onBeforeEdit(),
			onBeginEdit : this.onBeginEdit(),
			onEndEdit : this.onEndEdit(),
			onAfterEdit : this.onAfterEdit(),
			onCancelEdit : this.onCancelEdit(),
			onHeaderContextMenu : this.onHeaderContextMenu(),
			onRowContextMenu : this.onRowContextMenu()
		});

		$(this.getPager()).pagination({
			
			onChangePageSize : function(pageSize) {
				
				core.html.util.Cookie.getInstance().set("coreHtmlEasyuiDatagridDataGridPageSize", pageSize);
			}
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

		return this.$jQuery().datagrid("options");
	};

	/**
	 * 获取页面对象
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getPager = function() {

		return this.$jQuery().datagrid("getPager");
	};

	/**
	 * 获取面板对象
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getPanel = function() {

		return this.$jQuery().datagrid("getPanel");
	};

	/**
	 * 获取列字段
	 * 
	 * @param frozen{boolean}
	 * @returns {object}
	 */
	Constructor.prototype.getColumnFields = function(frozen) {

		return this.$jQuery().datagrid("getColumnFields", frozen);
	};

	/**
	 * 获取列属性
	 * 
	 * @param field{object}
	 * @returns {object}
	 */
	Constructor.prototype.getColumnOption = function(field) {

		return this.$jQuery().datagrid("getColumnOption", field);
	};

	/**
	 * 调整大小
	 * 
	 * @param param{object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.resize = function(param) {

		return this.$jQuery().datagrid("resize", param);
	};

	/**
	 * 重新加载数据
	 * 
	 * @param param{object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.load = function(param) {

		return this.$jQuery().datagrid("load", param);
	};

	/**
	 * 重新加载数据,且停留在当前页面
	 * 
	 * @param param{object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.reload = function(param) {

		return this.$jQuery().datagrid("reload", param);
	};

	/**
	 * 重载页脚
	 * 
	 * @param footer{object}
	 * @returns
	 */
	Constructor.prototype.reloadFooter = function(footer) {

		return this.$jQuery().datagrid("reloadFooter", footer);
	};

	/**
	 * 显示载入中
	 * 
	 * @returns
	 */
	Constructor.prototype.loading = function() {

		return this.$jQuery().datagrid("loading");
	};

	/**
	 * 隐藏载入中
	 * 
	 * @returns
	 */
	Constructor.prototype.loaded = function() {

		return this.$jQuery().datagrid("loaded");
	};

	/**
	 * 列宽自适应
	 * 
	 * @returns
	 */
	Constructor.prototype.fitColumns = function() {

		return this.$jQuery().datagrid("fitColumns");
	};

	/**
	 * 固定列宽
	 * 
	 * @param field{object}
	 *            字段
	 * @returns
	 */
	Constructor.prototype.fixColumnSize = function(field) {

		return this.$jQuery().datagrid("fixColumnSize", field);
	};

	/**
	 * 固定指定列高度
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.fixRowHeight = function(index) {

		return this.$jQuery().datagrid("fixRowHeight", index);
	};

	/**
	 * 冻结指定行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.freezeRow = function(index) {

		return this.$jQuery().datagrid("freezeRow", index);
	};

	/**
	 * 列宽自适应
	 * 
	 * @param field{object}
	 *            列字段
	 * @returns
	 */
	Constructor.prototype.autoSizeColumn = function(field) {

		return this.$jQuery().datagrid("autoSizeColumn", field);
	};

	/**
	 * 加载数据
	 * 
	 * @param data{array}
	 *            需要加载的数据
	 * @returns
	 */
	Constructor.prototype.loadData = function(data) {

		return this.$jQuery().datagrid("loadData", data);
	};

	/**
	 * 获取当前数据
	 * 
	 * @returns {array}
	 */
	Constructor.prototype.getData = function() {

		return this.$jQuery().datagrid("getData");
	};

	/**
	 * 获取所有行
	 * 
	 * @returns {array}
	 */
	Constructor.prototype.getRows = function() {

		return this.$jQuery().datagrid("getRows");
	};

	/**
	 * 获取页脚所有行
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getFooterRows = function() {

		return this.$jQuery().datagrid("getFooterRows");
	};

	/**
	 * 获取指定行号
	 * 
	 * @param row{object}
	 *            行对象
	 * @returns {number}
	 */
	Constructor.prototype.getRowIndex = function(row) {

		return this.$jQuery().datagrid("getRowIndex", row);
	};

	/**
	 * 获取勾选行
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getChecked = function() {

		return this.$jQuery().datagrid("getChecked");
	};

	/**
	 * 获取选中节点
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getSelected = function() {

		return this.$jQuery().datagrid("getSelected");
	};

	/**
	 * 获取所有选中行
	 * 
	 * @returns {array}
	 */
	Constructor.prototype.getSelections = function() {

		return this.$jQuery().datagrid("getSelections");
	};

	/**
	 * 清除所有选中行
	 * 
	 * @returns
	 */
	Constructor.prototype.clearSelections = function() {

		return this.$jQuery().datagrid("clearSelections");
	};

	/**
	 * 清除所有勾选的行
	 * 
	 * @returns
	 */
	Constructor.prototype.clearChecked = function() {

		return this.$jQuery().datagrid("clearChecked");
	};

	/**
	 * 滚动至指定行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.scrollTo = function(index) {

		return this.$jQuery().datagrid("scrollTo", index);
	};

	/**
	 * 跳至某页
	 * 
	 * @param param{number}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.gotoPage = function(param) {

		return this.$jQuery().datagrid("gotoPage", param);
	};

	/**
	 * 高亮行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.highlightRow = function(index) {

		return this.$jQuery().datagrid("highlightRow", index);
	};

	/**
	 * 选中所有行
	 * 
	 * @returns
	 */
	Constructor.prototype.selectAll = function() {

		return this.$jQuery().datagrid("selectAll");
	};

	/**
	 * 取消选中所有行
	 * 
	 * @returns
	 */
	Constructor.prototype.unselectAll = function() {

		return this.$jQuery().datagrid("unselectAll");
	};

	/**
	 * 选中行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.selectRow = function(index) {

		return this.$jQuery().datagrid("selectRow", index);
	};

	/**
	 * 通过ID选中行
	 * 
	 * @param idValue{string}
	 *            id值
	 * @returns
	 */
	Constructor.prototype.selectRecord = function(idValue) {

		return this.$jQuery().datagrid("selectRecord", idValue);
	};

	/**
	 * 取消选中行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.unselectRow = function(index) {

		return this.$jQuery().datagrid("unselectRow", index);
	};

	/**
	 * 勾选所有行
	 * 
	 * @returns
	 */
	Constructor.prototype.checkAll = function() {

		return this.$jQuery().datagrid("checkAll");
	};

	/**
	 * 取消勾选所有行
	 * 
	 * @returns
	 */
	Constructor.prototype.uncheckAll = function() {

		return this.$jQuery().datagrid("uncheckAll");
	};

	/**
	 * 勾选行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.checkRow = function(index) {

		return this.$jQuery().datagrid("checkRow", index);
	};

	/**
	 * 取消勾选行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.uncheckRow = function(index) {

		return this.$jQuery().datagrid("uncheckRow", index);
	};

	/**
	 * 编辑行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.beginEdit = function(index) {

		return this.$jQuery().datagrid("beginEdit", index);
	};

	/**
	 * 结束编辑行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.endEdit = function(index) {

		return this.$jQuery().datagrid("endEdit", index);
	};

	/**
	 * 取消编辑行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.cancelEdit = function(index) {

		return this.$jQuery().datagrid("cancelEdit", index);
	};

	/**
	 * 获取行所有编辑器
	 * 
	 * @param index{number}
	 *            行号
	 * @returns {object}
	 */
	Constructor.prototype.getEditors = function(index) {

		return this.$jQuery().datagrid("getEditors", index);
	};

	/**
	 * 获取行中某列编辑器
	 * 
	 * @param options{object}
	 *            参数
	 * @returns {object}
	 */
	Constructor.prototype.getEditor = function(options) {

		return this.$jQuery().datagrid("getEditor", options);
	};

	/**
	 * 刷新行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.refreshRow = function(index) {

		return this.$jQuery().datagrid("refreshRow", index);
	};

	/**
	 * 验证行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.validateRow = function(index) {

		return this.$jQuery().datagrid("validateRow", index);
	};

	/**
	 * 更新行
	 * 
	 * @param param{object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.updateRow = function(param) {

		return this.$jQuery().datagrid("updateRow", param);
	};

	/**
	 * 添加行
	 * 
	 * @param row{object}
	 *            行对象
	 * @returns
	 */
	Constructor.prototype.appendRow = function(row) {

		return this.$jQuery().datagrid("appendRow", row);
	};

	/**
	 * 插入行
	 * 
	 * @param param{object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.insertRow = function(param) {

		return this.$jQuery().datagrid("insertRow", param);
	};

	/**
	 * 删除行
	 * 
	 * @param index{number}
	 *            行号
	 * @returns
	 */
	Constructor.prototype.deleteRow = function(index) {

		return this.$jQuery().datagrid("deleteRow", index);
	};

	/**
	 * 获取修改行
	 * 
	 * @param type{object}
	 *            类型
	 * @returns {array}
	 */
	Constructor.prototype.getChanges = function(type) {

		return this.$jQuery().datagrid("getChanges", type);
	};

	/**
	 * 提交所有修改行
	 * 
	 * @returns
	 */
	Constructor.prototype.acceptChanges = function() {

		return this.$jQuery().datagrid("acceptChanges");
	};

	/**
	 * 回滚修改行
	 * 
	 * @returns
	 */
	Constructor.prototype.rejectChanges = function() {

		return this.$jQuery().datagrid("rejectChanges");
	};

	/**
	 * 合并单元格
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.mergeCells = function(options) {

		return this.$jQuery().datagrid("mergeCells", options);
	};

	/**
	 * 显示列
	 * 
	 * @param field{object}
	 *            列字段
	 * @returns
	 */
	Constructor.prototype.showColumn = function(field) {

		return this.$jQuery().datagrid("showColumn", field);
	};

	/**
	 * 隐藏列
	 * 
	 * @param field{object}
	 *            列字段
	 * @returns
	 */
	Constructor.prototype.hideColumn = function(field) {

		return this.$jQuery().datagrid("hideColumn", field);
	};

	/**
	 * 排序
	 * 
	 * @param param{object}
	 *            参数
	 * @returns
	 */
	Constructor.prototype.sort = function(param) {

		return this.$jQuery().datagrid("sort", param);
	};

	/** ==========扩展方法========== */
	/**
	 * 设置宽度
	 * 
	 * @param width{number}
	 *            宽度
	 * @returns
	 */
	Constructor.prototype.setWidth = function(width) {

		return this.resize({
			
			width : width
		});
	};

	/**
	 * 设置高度
	 * 
	 * @param height{number}
	 *            高度
	 * @returns
	 */
	Constructor.prototype.setHeight = function(height) {

		return this.resize({
			
			height : height
		});
	};

	/**
	 * 获取当前页数据条数
	 * 
	 * @returns {number}
	 */
	Constructor.prototype.getCurrentPageDataNum = function() {

		return this.getData().rows.length;
	}

	/**
	 * 获取记录总条数
	 * 
	 * @returns {number}
	 */
	Constructor.prototype.getTotalDataNum = function() {

		return this.getData().total;
	}

	/**
	 * 获取分页数
	 * 
	 * @returns {number}
	 */
	Constructor.prototype.getPageSize = function() {

		return $(this.getPager()).pagination("options").pageSize;
	}

	/**
	 * 获取总页数
	 * 
	 * @returns {number}
	 */
	Constructor.prototype.getPageNum = function() {

		var options = $(this.getPager()).pagination("options");
		var total = options.total;
		var max = Math.ceil(total / options.pageSize);
		
		return max;
	}

	/**
	 * 获取当前页码
	 * 
	 * @returns {number}
	 */
	Constructor.prototype.getCurrentPageNum = function() {

		return $(this.getPager()).pagination("options").pageNumber;
	}

	/**
	 * 翻至前一页
	 * 
	 * @returns
	 */
	Constructor.prototype.gotoBeforePage = function() {

		this.gotoPage(this.getCurrentPageNum() - 1);
	}

	/**
	 * 翻至后一页
	 * 
	 * @returns
	 */
	Constructor.prototype.gotoNextPage = function() {

		this.gotoPage(this.getCurrentPageNum() + 1);
	}

	/**
	 * 获取指定行数据
	 * 
	 * @param index{number}
	 *            行号
	 * @returns {object}
	 */
	Constructor.prototype.getRow = function(index) {

		return this.getRows()[index];
	};

	/**
	 * 获取选中行索引
	 * 
	 * @returns {number}
	 */
	Constructor.prototype.getSelectedRowIndex = function() {

		return this.getRowIndex(this.getSelected());
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	DataList
 * @package core.html.easyui.datagrid
 * @desc	数据列表模板
 * @type	类型
 * 
 * @constructor	core.html.easyui.datagrid.DataList(string id/object jQuery)
 * 
 * @extend	core.html.easyui.datagrid.DataGrid
 * 
 * @method	继承core.html.easyui.datagrid.DataGrid所有方法
 * 			boolean/core.html.easyui.datagrid.DataList	lines(boolean lines)						获取/设置
 * 			boolean/core.html.easyui.datagrid.DataList	checkbox(boolean checkbox)					获取/设置
 * 			string/core.html.easyui.datagrid.DataList	valueField(string valueField)				获取/设置
 * 			string/core.html.easyui.datagrid.DataList	textField(string textField)					获取/设置
 * 			string/core.html.easyui.datagrid.DataList	groupField(string groupField)				获取/设置
 * 			function/core.html.easyui.datagrid.DataList	textFormatter(function textFormatter)		获取/设置
 * 			function/core.html.easyui.datagrid.DataList	groupFormatter(function groupFormatter)		获取/设置
 * 			core.html.easyui.datalist.Datagrid			init()										初始化组件模板
 * 
 * @date	2018年4月27日 15:57:55
 */
core.html.easyui.datagrid.DataList = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.datagrid.DataList.superClass.constructor.call(this, arguments[0]);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var lines = $.fn.datalist.defaults.lines;
		/**
		 * 
		 */
		var checkbox = $.fn.datalist.defaults.checkbox;
		/**
		 * 
		 */
		var valueField = $.fn.datalist.defaults.valueField;
		/**
		 * 
		 */
		var textField = $.fn.datalist.defaults.textField;
		/**
		 * 
		 */
		var groupField = $.fn.datalist.defaults.groupField;
		/**
		 * 
		 */
		var textFormatter = $.fn.datalist.defaults.textFormatter;
		/**
		 * 
		 */
		var groupFormatter = $.fn.datalist.defaults.groupFormatter;

		/**
		 * 获取/设置
		 * 
		 * @param lines{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataList}
		 */
		this.lines = function() {

			switch (arguments.length) {
			case 0:
				return lines;
			default:
				lines = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param checkbox{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.DataList}
		 */
		this.checkbox = function() {

			switch (arguments.length) {
			case 0:
				return checkbox;
			default:
				checkbox = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param valueField{string}
		 * @returns {string/core.html.easyui.datagrid.DataList}
		 */
		this.valueField = function() {

			switch (arguments.length) {
			case 0:
				return valueField;
			default:
				valueField = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param textField{string}
		 * @returns {string/core.html.easyui.datagrid.DataList}
		 */
		this.textField = function() {

			switch (arguments.length) {
			case 0:
				return textField;
			default:
				textField = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param groupField{string}
		 * @returns {string/core.html.easyui.datagrid.DataList}
		 */
		this.groupField = function() {

			switch (arguments.length) {
			case 0:
				return groupField;
			default:
				groupField = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param textFormatter{function}
		 * @returns {function/core.html.easyui.datagrid.DataList}
		 */
		this.textFormatter = function() {

			switch (arguments.length) {
			case 0:
				return textFormatter;
			default:
				textFormatter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param groupFormatter{function}
		 * @returns {function/core.html.easyui.datagrid.DataList}
		 */
		this.groupFormatter = function() {

			switch (arguments.length) {
			case 0:
				return groupFormatter;
			default:
				groupFormatter = arguments[0];
				return this;
			}
		};
	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.datagrid.DataGrid);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.datagrid.DataList}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.datagrid.DataList", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().datalist({
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
			// LinkButton继承属性
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// Pagination继承属性
			total : this.total(),
			pageSize : this.pageSize(),
			pageNumber : this.pageNumber(),
			pageList : this.pageList(),
			loading : this.loading(),
			buttons : this.buttons(),
			layout : this.layout(),
			links : this.links(),
			showPageList : this.showPageList(),
			showRefresh : this.showRefresh(),
			showPageInfo : this.showPageInfo(),
			beforePageText : this.beforePageText(),
			afterPageText : this.afterPageText(),
			displayMsg : this.displayMsg(),
			// DataGrid继承属性
			columns : this.columns(),
			frozenColumns : this.frozenColumns(),
			fitColumns : this.fitColumns(),
			resizeHandle : this.resizeHandle(),
			resizeEdge : this.resizeEdge(),
			autoRowHeight : this.autoRowHeight(),
			toolbar : this.toolbar(),
			striped : this.striped(),
			nowrap : this.nowrap(),
			idField : this.idField(),
			url : this.url(),
			data : this.data(),
			loadMsg : this.loadMsg(),
			emptyMsg : this.emptyMsg(),
			pagination : this.pagination(),
			rownumbers : this.rownumbers(),
			singleSelect : this.singleSelect(),
			ctrlSelect : this.ctrlSelect(),
			checkOnSelect : this.checkOnSelect(),
			selectOnCheck : this.selectOnCheck(),
			scrollOnSelect : this.scrollOnSelect(),
			pagePosition : this.pagePosition(),
			sortName : this.sortName(),
			sortOrder : this.sortOrder(),
			multiSort : this.multiSort(),
			remoteSort : this.remoteSort(),
			showHeader : this.showHeader(),
			showFooter : this.showFooter(),
			scrollbarSize : this.scrollbarSize(),
			rownumberWidth : this.rownumberWidth(),
			editorHeight : this.editorHeight(),
			rowStyler : this.rowStyler(),
			loadFilter : this.loadFilter(),
			editors : this.editors(),
			view : this.view(),
			// 属性
			lines : this.lines(),
			checkbox : this.checkbox(),
			valueField : this.valueField(),
			textField : this.textField(),
			groupField : this.groupField(),
			textFormatter : this.textFormatter(),
			groupFormatter : this.groupFormatter(),

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
			// LinkButton继承事件
			onClick : this.onClick(),
			// Pagination继承事件
			onSelectPage : this.onSelectPage(),
			onBeforeRefresh : this.onBeforeRefresh(),
			onRefresh : this.onRefresh(),
			onChangePageSize : this.onChangePageSize(),
			// DataGrid继承事件
			onLoadSuccess : this.onLoadSuccess(),
			onClickRow : this.onClickRow(),
			onDblClickRow : this.onDblClickRow(),
			onClickCell : this.onClickCell(),
			onDblClickCell : this.onDblClickCell(),
			onBeforeSortColumn : this.onBeforeSortColumn(),
			onSortColumn : this.onSortColumn(),
			onResizeColumn : this.onResizeColumn(),
			onBeforeSelect : this.onBeforeSelect(),
			onSelect : this.onSelect(),
			onBeforeUnselect : this.onBeforeUnselect(),
			onUnselect : this.onUnselect(),
			onSelectAll : this.onSelectAll(),
			onUnselectAll : this.onUnselectAll(),
			onBeforeCheck : this.onBeforeCheck(),
			onCheck : this.onCheck(),
			onBeforeUncheck : this.onBeforeUncheck(),
			onUncheck : this.onUncheck(),
			onCheckAll : this.onCheckAll(),
			onUncheckAll : this.onUncheckAll(),
			onBeforeEdit : this.onBeforeEdit(),
			onBeginEdit : this.onBeginEdit(),
			onEndEdit : this.onEndEdit(),
			onAfterEdit : this.onAfterEdit(),
			onCancelEdit : this.onCancelEdit(),
			onHeaderContextMenu : this.onHeaderContextMenu(),
			onRowContextMenu : this.onRowContextMenu()
		});

		return this;
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	PropertyGrid
 * @package core.html.easyui.datagrid
 * @desc	数据列表模板
 * @type	类型
 * 
 * @constructor	core.html.easyui.datagrid.PropertyGrid(string id/object jQuery)
 * 
 * @extend	core.html.easyui.datagrid.DataGrid
 * 
 * @method	继承core.html.easyui.datagrid.DataGrid所有方法
 * 			boolean/core.html.easyui.datagrid.PropertyGrid	showGroup(boolean showGroup)				获取/设置
 * 			string/core.html.easyui.datagrid.PropertyGrid	groupField(string groupField)				获取/设置
 * 			function/core.html.easyui.datagrid.PropertyGrid	groupFormatter(function groupFormatter)		获取/设置
 * 			core.html.easyui.propertygrid.Datagrid			init()										初始化组件模板
 * 			object											groups()
 * 			void											expandGroup(number groupIndex)
 * 			void											collapseGroup(number groupIndex)
 * 
 * @date	2018年4月27日 16:12:54
 */
core.html.easyui.datagrid.PropertyGrid = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.datagrid.PropertyGrid.superClass.constructor.call(this, arguments[0]);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var showGroup = $.fn.propertygrid.defaults.showGroup;
		/**
		 * 
		 */
		var groupField = $.fn.propertygrid.defaults.groupField;
		/**
		 * 
		 */
		var groupFormatter = $.fn.propertygrid.defaults.groupFormatter;

		/**
		 * 获取/设置
		 * 
		 * @param showGroup{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.PropertyGrid}
		 */
		this.showGroup = function() {

			switch (arguments.length) {
			case 0:
				return showGroup;
			default:
				showGroup = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param groupField{string}
		 * @returns {string/core.html.easyui.datagrid.PropertyGrid}
		 */
		this.groupField = function() {

			switch (arguments.length) {
			case 0:
				return groupField;
			default:
				groupField = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param groupFormatter{function}
		 * @returns {function/core.html.easyui.datagrid.PropertyGrid}
		 */
		this.groupFormatter = function() {

			switch (arguments.length) {
			case 0:
				return groupFormatter;
			default:
				groupFormatter = arguments[0];
				return this;
			}
		};
	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.datagrid.DataGrid);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.datagrid.PropertyGrid}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.datagrid.PropertyGrid", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().datagrid({
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
			// LinkButton继承属性
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// Pagination继承属性
			total : this.total(),
			pageSize : this.pageSize(),
			pageNumber : this.pageNumber(),
			pageList : this.pageList(),
			loading : this.loading(),
			buttons : this.buttons(),
			layout : this.layout(),
			links : this.links(),
			showPageList : this.showPageList(),
			showRefresh : this.showRefresh(),
			showPageInfo : this.showPageInfo(),
			beforePageText : this.beforePageText(),
			afterPageText : this.afterPageText(),
			displayMsg : this.displayMsg(),
			// DataGrid继承属性
			columns : this.columns(),
			frozenColumns : this.frozenColumns(),
			fitColumns : this.fitColumns(),
			resizeHandle : this.resizeHandle(),
			resizeEdge : this.resizeEdge(),
			autoRowHeight : this.autoRowHeight(),
			toolbar : this.toolbar(),
			striped : this.striped(),
			nowrap : this.nowrap(),
			idField : this.idField(),
			url : this.url(),
			data : this.data(),
			loadMsg : this.loadMsg(),
			emptyMsg : this.emptyMsg(),
			pagination : this.pagination(),
			rownumbers : this.rownumbers(),
			singleSelect : this.singleSelect(),
			ctrlSelect : this.ctrlSelect(),
			checkOnSelect : this.checkOnSelect(),
			selectOnCheck : this.selectOnCheck(),
			scrollOnSelect : this.scrollOnSelect(),
			pagePosition : this.pagePosition(),
			sortName : this.sortName(),
			sortOrder : this.sortOrder(),
			multiSort : this.multiSort(),
			remoteSort : this.remoteSort(),
			showHeader : this.showHeader(),
			showFooter : this.showFooter(),
			scrollbarSize : this.scrollbarSize(),
			rownumberWidth : this.rownumberWidth(),
			editorHeight : this.editorHeight(),
			rowStyler : this.rowStyler(),
			loadFilter : this.loadFilter(),
			editors : this.editors(),
			view : this.view(),
			// 属性
			showGroup : this.showGroup(),
			groupField : this.groupField(),
			groupFormatter : this.groupFormatter(),

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
			// LinkButton继承事件
			onClick : this.onClick(),
			// Pagination继承事件
			onSelectPage : this.onSelectPage(),
			onBeforeRefresh : this.onBeforeRefresh(),
			onRefresh : this.onRefresh(),
			onChangePageSize : this.onChangePageSize(),
			// DataGrid继承事件
			onLoadSuccess : this.onLoadSuccess(),
			onClickRow : this.onClickRow(),
			onDblClickRow : this.onDblClickRow(),
			onClickCell : this.onClickCell(),
			onDblClickCell : this.onDblClickCell(),
			onBeforeSortColumn : this.onBeforeSortColumn(),
			onSortColumn : this.onSortColumn(),
			onResizeColumn : this.onResizeColumn(),
			onBeforeSelect : this.onBeforeSelect(),
			onSelect : this.onSelect(),
			onBeforeUnselect : this.onBeforeUnselect(),
			onUnselect : this.onUnselect(),
			onSelectAll : this.onSelectAll(),
			onUnselectAll : this.onUnselectAll(),
			onBeforeCheck : this.onBeforeCheck(),
			onCheck : this.onCheck(),
			onBeforeUncheck : this.onBeforeUncheck(),
			onUncheck : this.onUncheck(),
			onCheckAll : this.onCheckAll(),
			onUncheckAll : this.onUncheckAll(),
			onBeforeEdit : this.onBeforeEdit(),
			onBeginEdit : this.onBeginEdit(),
			onEndEdit : this.onEndEdit(),
			onAfterEdit : this.onAfterEdit(),
			onCancelEdit : this.onCancelEdit(),
			onHeaderContextMenu : this.onHeaderContextMenu(),
			onRowContextMenu : this.onRowContextMenu()
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
	Constructor.prototype.groups = function() {

		return this.$jQuery().propertygrid("groups");
	};

	/**
	 * 获取页面对象
	 * 
	 * @param groupIndex{number}
	 * @returns
	 */
	Constructor.prototype.expandGroup = function(groupIndex) {

		return this.$jQuery().propertygrid("expandGroup", groupIndex);
	};

	/**
	 * 获取面板对象
	 * 
	 * @param groupIndex{number}
	 * @returns
	 */
	Constructor.prototype.collapseGroup = function(groupIndex) {

		return this.$jQuery().propertygrid("collapseGroup", groupIndex);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Tree
 * @package core.html.easyui.datagrid
 * @desc	树模板
 * @type	类
 * 
 * @constructor	core.html.easyui.datagrid.Tree(string id/object jQuery)
 * 
 * @extend	core.html.easyui.base.Draggable
 * 			core.html.easyui.base.Droppable
 * 
 * @method	继承core.html.easyui.base.Draggable所有方法
 * 			继承core.html.easyui.base.Droppable所有方法
 * 			string/core.html.easyui.datagrid.Tree	url(string url)									获取/设置
 * 			string/core.html.easyui.datagrid.Tree	method(string method)							获取/设置
 * 			boolean/core.html.easyui.datagrid.Tree	animate(boolean animate)						获取/设置
 * 			boolean/core.html.easyui.datagrid.Tree	checkbox(boolean checkbox)						获取/设置
 * 			boolean/core.html.easyui.datagrid.Tree	cascadeCheck(boolean cascadeCheck)				获取/设置
 * 			boolean/core.html.easyui.datagrid.Tree	onlyLeafCheck(boolean onlyLeafCheck)			获取/设置
 * 			boolean/core.html.easyui.datagrid.Tree	lines(boolean lines)							获取/设置
 * 			boolean/core.html.easyui.datagrid.Tree	dnd(boolean dnd)								获取/设置
 * 			array/core.html.easyui.datagrid.Tree	data(array data)								获取/设置
 * 			object/core.html.easyui.datagrid.Tree	queryParams(object queryParams)					获取/设置
 * 			function/core.html.easyui.datagrid.Tree	formatter(function formatter)					获取/设置
 * 			function/core.html.easyui.datagrid.Tree	filter(function filter)							获取/设置
 * 			function/core.html.easyui.datagrid.Tree	loader(function loader)							获取/设置
 * 			function/core.html.easyui.datagrid.Tree	loadFilter(function loadFilter)					获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onClick(function onClick)						获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onDblClick(function onDblClick)					获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onBeforeLoad(function onBeforeLoad)				获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onLoadSuccess(function onLoadSuccess)			获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onLoadError(function onLoadError)				获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onBeforeExpand(function onBeforeExpand)			获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onExpand(function onExpand)						获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onBeforeCollapse(function onBeforeCollapse)		获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onCollapse(function onCollapse)					获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onBeforeCheck(function onBeforeCheck)			获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onCheck(function onCheck)						获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onBeforeSelect(function onBeforeSelect)			获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onSelect(function onSelect)						获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onContextMenu(function onContextMenu)			获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onBeforeDrop(function onBeforeDrop)				获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onBeforeEdit(function onBeforeEdit)				获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onAfterEdit(function onAfterEdit)				获取/设置
 * 			function/core.html.easyui.datagrid.Tree	onCancelEdit(function onCancelEdit)				获取/设置
 * 			core.html.easyui.datagrid.Tree			init()											初始化组件模板
 * 			object									options()
 * 			void									loadData(object data)							
 * 			object									getNode(object target)							
 * 			object									getData(object target)							
 * 			void									reload(object target)							
 * 			object									getRoot()										
 * 			object									getRoots()										
 * 			object									getParent(object target)						
 * 			object									getChildren(object target)						
 * 			object									getChecked(object state)						
 * 			object									getSelected()									
 * 			boolean									isLeaf(object target)							
 * 			object									find(string id)									
 * 			void									select(object target)							
 * 			void									check(object target)							
 * 			void									uncheck(object target)							
 * 			void									collapse(object target)							
 * 			void									expand(object target)							
 * 			void									collapseAll(object target)						
 * 			void									expandAll(object target)						
 * 			void									expandTo(object target)							
 * 			void									scrollTo(object target)							
 * 			void									append(object param)							
 * 			void									toggle(object target)							
 * 			void									insert(object param)							
 * 			void									remove(object target)							
 * 			void									pop(object target)								
 * 			void									update(object param)							
 * 			void									enableDnd()										
 * 			void									disableDnd()									
 * 			void									beginEdit(object target)						
 * 			void									endEdit(object target)							
 * 			void									cancelEdit(object target)						
 * 			void									doFilter(string text)							
 * 
 * @date	2018年5月2日 14:21:54
 */
core.html.easyui.tree.Tree = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.base.Draggable.call(this, arguments[0]);
		core.html.easyui.base.Droppable.call(this, arguments[0]);
		// 默认参数修改
		this.onBeforeDrag($.fn.tree.defaults.onBeforeDrag);
		this.onStartDrag($.fn.tree.defaults.onStartDrag);
		this.onStopDrag($.fn.tree.defaults.onStopDrag);
		this.onDragEnter($.fn.tree.defaults.onDragEnter);
		this.onDragOver($.fn.tree.defaults.onDragOver);
		this.onDragLeave($.fn.tree.defaults.onDragLeave);
		this.onDrop($.fn.tree.defaults.onDrop);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var url = $.fn.tree.defaults.url;
		/**
		 * 
		 */
		var method = $.fn.tree.defaults.method;
		/**
		 * 
		 */
		var animate = $.fn.tree.defaults.animate;
		/**
		 * 
		 */
		var checkbox = $.fn.tree.defaults.checkbox;
		/**
		 * 
		 */
		var cascadeCheck = $.fn.tree.defaults.cascadeCheck;
		/**
		 * 
		 */
		var onlyLeafCheck = $.fn.tree.defaults.onlyLeafCheck;
		/**
		 * 
		 */
		var lines = $.fn.tree.defaults.lines;
		/**
		 * 
		 */
		var dnd = $.fn.tree.defaults.dnd;
		/**
		 * 
		 */
		var data = $.fn.tree.defaults.data;
		/**
		 * 
		 */
		var queryParams = $.fn.tree.defaults.queryParams;
		/**
		 * 
		 */
		var formatter = $.fn.tree.defaults.formatter;
		/**
		 * 
		 */
		var filter = $.fn.tree.defaults.filter;
		/**
		 * 
		 */
		var loader = $.fn.tree.defaults.loader;
		/**
		 * 
		 */
		var loadFilter = $.fn.tree.defaults.loadFilter;

		/**
		 * 事件
		 */
		/**
		 * 
		 */
		var onClick = $.fn.tree.defaults.onClick;
		/**
		 * 
		 */
		var onDblClick = $.fn.tree.defaults.onDblClick;
		/**
		 * 
		 */
		var onBeforeLoad = $.fn.tree.defaults.onBeforeLoad;
		/**
		 * 
		 */
		var onLoadSuccess = $.fn.tree.defaults.onLoadSuccess;
		/**
		 * 
		 */
		var onLoadError = $.fn.tree.defaults.onLoadError;
		/**
		 * 
		 */
		var onBeforeExpand = $.fn.tree.defaults.onBeforeExpand;
		/**
		 * 
		 */
		var onExpand = $.fn.tree.defaults.onExpand;
		/**
		 * 
		 */
		var onBeforeCollapse = $.fn.tree.defaults.onBeforeCollapse;
		/**
		 * 
		 */
		var onCollapse = $.fn.tree.defaults.onCollapse;
		/**
		 * 
		 */
		var onBeforeCheck = $.fn.tree.defaults.onBeforeCheck;
		/**
		 * 
		 */
		var onCheck = $.fn.tree.defaults.onCheck;
		/**
		 * 
		 */
		var onBeforeSelect = $.fn.tree.defaults.onBeforeSelect;
		/**
		 * 
		 */
		var onSelect = $.fn.tree.defaults.onSelect;
		/**
		 * 
		 */
		var onContextMenu = $.fn.tree.defaults.onContextMenu;
		/**
		 * 
		 */
		var onBeforeDrop = $.fn.tree.defaults.onBeforeDrop;
		/**
		 * 
		 */
		var onBeforeEdit = $.fn.tree.defaults.onBeforeEdit;
		/**
		 * 
		 */
		var onAfterEdit = $.fn.tree.defaults.onAfterEdit;
		/**
		 * 
		 */
		var onCancelEdit = $.fn.tree.defaults.onCancelEdit;

		/**
		 * 获取/设置
		 * 
		 * @param url{string}
		 * @returns {string/core.html.easyui.datagrid.Tree}
		 */
		this.url = function() {

			switch (arguments.length) {
			case 0:
				return url;
			default:
				url = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param method{string}
		 * @returns {string/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param animate{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.Tree}
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
		 * @param checkbox{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.Tree}
		 */
		this.checkbox = function() {

			switch (arguments.length) {
			case 0:
				return checkbox;
			default:
				checkbox = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param cascadeCheck{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.Tree}
		 */
		this.cascadeCheck = function() {

			switch (arguments.length) {
			case 0:
				return cascadeCheck;
			default:
				cascadeCheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onlyLeafCheck{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.Tree}
		 */
		this.onlyLeafCheck = function() {

			switch (arguments.length) {
			case 0:
				return onlyLeafCheck;
			default:
				onlyLeafCheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param lines{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.Tree}
		 */
		this.lines = function() {

			switch (arguments.length) {
			case 0:
				return lines;
			default:
				lines = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param dnd{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.Tree}
		 */
		this.dnd = function() {

			switch (arguments.length) {
			case 0:
				return dnd;
			default:
				dnd = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param data{array}
		 * @returns {array/core.html.easyui.datagrid.Tree}
		 */
		this.data = function() {

			switch (arguments.length) {
			case 0:
				return data;
			default:
				data = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param queryParams{object}
		 * @returns {object/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param formatter{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.formatter = function() {

			switch (arguments.length) {
			case 0:
				return formatter;
			default:
				formatter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param filter{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.filter = function() {

			switch (arguments.length) {
			case 0:
				return filter;
			default:
				filter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param loader{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param loadFilter{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.loadFilter = function() {

			switch (arguments.length) {
			case 0:
				return loadFilter;
			default:
				loadFilter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onClick{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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

		/**
		 * 获取/设置
		 * 
		 * @param onDblClick{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.onDblClick = function() {

			switch (arguments.length) {
			case 0:
				return onDblClick;
			default:
				onDblClick = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onBeforeLoad{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param onLoadSuccess{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.onLoadSuccess = function() {

			switch (arguments.length) {
			case 0:
				return onLoadSuccess;
			default:
				onLoadSuccess = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onLoadError{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param onBeforeExpand{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param onExpand{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param onBeforeCollapse{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param onCollapse{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param onBeforeCheck{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.onBeforeCheck = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeCheck;
			default:
				onBeforeCheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onCheck{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.onCheck = function() {

			switch (arguments.length) {
			case 0:
				return onCheck;
			default:
				onCheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onBeforeSelect{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.onBeforeSelect = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeSelect;
			default:
				onBeforeSelect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onSelect{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
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
		 * 获取/设置
		 * 
		 * @param onContextMenu{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.onContextMenu = function() {

			switch (arguments.length) {
			case 0:
				return onContextMenu;
			default:
				onContextMenu = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onBeforeDrop{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.onBeforeDrop = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeDrop;
			default:
				onBeforeDrop = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onBeforeEdit{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.onBeforeEdit = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeEdit;
			default:
				onBeforeEdit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onAfterEdit{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.onAfterEdit = function() {

			switch (arguments.length) {
			case 0:
				return onAfterEdit;
			default:
				onAfterEdit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onCancelEdit{function}
		 * @returns {function/core.html.easyui.datagrid.Tree}
		 */
		this.onCancelEdit = function() {

			switch (arguments.length) {
			case 0:
				return onCancelEdit;
			default:
				onCancelEdit = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.datagrid.Tree}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.datagrid.Tree", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().tree({
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
			// Droppable继承属性
			accept : this.accept(),
			// 属性
			url : this.url(),
			method : this.method(),
			animate : this.animate(),
			checkbox : this.checkbox(),
			cascadeCheck : this.cascadeCheck(),
			onlyLeafCheck : this.onlyLeafCheck(),
			lines : this.lines(),
			dnd : this.dnd(),
			data : this.data(),
			queryParams : this.queryParams(),
			formatter : this.formatter(),
			filter : this.filter(),
			loader : this.loader(),
			loadFilter : this.loadFilter(),

			// Draggable继承事件
			onBeforeDrag : this.onBeforeDrag(),
			onStartDrag : this.onStartDrag(),
			onDrag : this.onDrag(),
			onEndDrag : this.onEndDrag(),
			onStopDrag : this.onStopDrag(),
			// Droppable继承事件
			onDragEnter : this.onDragEnter(),
			onDragOver : this.onDragOver(),
			onDragLeave : this.onDragLeave(),
			onDrop : this.onDrop(),
			// 事件
			onClick : this.onClick(),
			onDblClick : this.onDblClick(),
			onBeforeLoad : this.onBeforeLoad(),
			onLoadSuccess : this.onLoadSuccess(),
			onLoadError : this.onLoadError(),
			onBeforeExpand : this.onBeforeExpand(),
			onExpand : this.onExpand(),
			onBeforeCollapse : this.onBeforeCollapse(),
			onCollapse : this.onCollapse(),
			onBeforeCheck : this.onBeforeCheck(),
			onCheck : this.onCheck(),
			onBeforeSelect : this.onBeforeSelect(),
			onSelect : this.onSelect(),
			onContextMenu : this.onContextMenu(),
			onBeforeDrop : this.onBeforeDrop(),
			onBeforeEdit : this.onBeforeEdit(),
			onAfterEdit : this.onAfterEdit(),
			onCancelEdit : this.onCancelEdit()
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

		return this.$jQuery().tree("options");
	};

	/**
	 * 
	 * @param data{object}
	 * @returns
	 */
	Constructor.prototype.loadData = function(data) {

		return this.$jQuery().tree("loadData", data);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns {object}
	 */
	Constructor.prototype.getNode = function(target) {

		return this.$jQuery().tree("getNode", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns {object}
	 */
	Constructor.prototype.getData = function(target) {

		return this.$jQuery().tree("getData", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.reload = function(target) {

		return this.$jQuery().tree("reload", target);
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getRoot = function() {

		return this.$jQuery().tree("getRoot");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getRoots = function() {

		return this.$jQuery().tree("getRoots");
	};

	/**
	 * 
	 * @param target{object}
	 * @returns {object}
	 */
	Constructor.prototype.getParent = function(target) {

		return this.$jQuery().tree("getParent", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns {object}
	 */
	Constructor.prototype.getChildren = function(target) {

		return this.$jQuery().tree("getChildren", target);
	};

	/**
	 * 
	 * @param state{object}
	 * @returns {object}
	 */
	Constructor.prototype.getChecked = function(state) {

		return this.$jQuery().tree("getChecked", state);
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getSelected = function() {

		return this.$jQuery().tree("getSelected");
	};

	/**
	 * 
	 * @param target{object}
	 * @returns {boolean}
	 */
	Constructor.prototype.isLeaf = function(target) {

		return this.$jQuery().tree("isLeaf", target);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns {object}
	 */
	Constructor.prototype.find = function(id) {

		return this.$jQuery().tree("find", id);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.select = function(target) {

		return this.$jQuery().tree("select", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.check = function(target) {

		return this.$jQuery().tree("check", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.uncheck = function(target) {

		return this.$jQuery().tree("uncheck", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.collapse = function(target) {

		return this.$jQuery().tree("collapse", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.expand = function(target) {

		return this.$jQuery().tree("expand", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.collapseAll = function(target) {

		return this.$jQuery().tree("collapseAll", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.expandAll = function(target) {

		return this.$jQuery().tree("expandAll", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.expandTo = function(target) {

		return this.$jQuery().tree("expandTo", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.scrollTo = function(target) {

		return this.$jQuery().tree("scrollTo", target);
	};

	/**
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.append = function(param) {

		return this.$jQuery().tree("append", param);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.toggle = function(target) {

		return this.$jQuery().tree("toggle", target);
	};

	/**
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.insert = function(param) {

		return this.$jQuery().tree("insert", param);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.remove = function(target) {

		return this.$jQuery().tree("remove", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.pop = function(target) {

		return this.$jQuery().tree("pop", target);
	};

	/**
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.update = function(param) {

		return this.$jQuery().tree("update", param);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enableDnd = function() {

		return this.$jQuery().tree("enableDnd");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disableDnd = function() {

		return this.$jQuery().tree("disableDnd");
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.beginEdit = function(target) {

		return this.$jQuery().tree("beginEdit", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.endEdit = function(target) {

		return this.$jQuery().tree("endEdit", target);
	};

	/**
	 * 
	 * @param target{object}
	 * @returns
	 */
	Constructor.prototype.cancelEdit = function(target) {

		return this.$jQuery().tree("cancelEdit", target);
	};

	/**
	 * 
	 * @param text{string}
	 * @returns
	 */
	Constructor.prototype.doFilter = function(text) {

		return this.$jQuery().tree("doFilter", text);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	TreeGrid
 * @package core.html.easyui.datagrid
 * @desc	数据列表模板
 * @type	类
 * 
 * @constructor	core.html.easyui.datagrid.TreeGrid(string id/object jQuery)
 * 
 * @extend	core.html.easyui.datagrid.DataGrid
 * 
 * @method	继承core.html.easyui.datagrid.DataGrid所有方法
 * 			string/core.html.easyui.datagrid.TreeGrid	treeField(string treeField)						获取/设置
 * 			boolean/core.html.easyui.datagrid.TreeGrid	animate(boolean animate)						获取/设置
 * 			function/core.html.easyui.datagrid.TreeGrid	checkbox(function checkbox)						获取/设置
 * 			boolean/core.html.easyui.datagrid.TreeGrid	cascadeCheck(boolean cascadeCheck)				获取/设置
 * 			boolean/core.html.easyui.datagrid.TreeGrid	onlyLeafCheck(boolean onlyLeafCheck)			获取/设置
 * 			boolean/core.html.easyui.datagrid.TreeGrid	lines(boolean lines)							获取/设置
 * 			function/core.html.easyui.datagrid.TreeGrid	onBeforeCheckNode(function onBeforeCheckNode)	获取/设置
 * 			function/core.html.easyui.datagrid.TreeGrid	onCheckNode(function onCheckNode)				获取/设置
 * 			function/core.html.easyui.datagrid.TreeGrid	onContextMenu(function onContextMenu)			获取/设置
 * 			core.html.easyui.treegrid.Datagrid			init()											初始化组件模板
 * 			object										options()
 * 			void										resize(object options)
 * 			void										fixRowHeight(string id)
 * 			void										loadData(object data)
 * 			void										load(object param)
 * 			void										reload(string id)
 * 			object										reloadFooter(object footer)
 * 			object										getData()
 * 			object										getFooterRows()
 * 			object										getRoot()
 * 			object										getRoots()
 * 			object										getParent(string id)
 * 			object										getChildren(string id)
 * 			object										getSelected()
 * 			object										getSelections()
 * 			object										getCheckedNodes()
 * 			object										getLevel(string id)
 * 			void										find(string id)
 * 			void										select(string id)
 * 			void										unselect(string id)
 * 			void										selectAll()
 * 			void										unselectAll()
 * 			void										checkNode(string id)
 * 			void										uncheckNode(string id)
 * 			void										collapse(string id)
 * 			void										expand(string id)
 * 			void										collapseAll(string id)
 * 			void										expandAll(string id)
 * 			void										expandTo(string id)
 * 			void										toggle(string id)
 * 			void										append(object param)
 * 			void										insert(object param)
 * 			void										remove(string id)
 * 			void										pop(string id)
 * 			void										refresh(string id)
 * 			void										update(object param)
 * 			void										beginEdit(string id)
 * 			void										endEdit(string id)
 * 			void										cancelEdit(string id)
 * 			object										getEditors(string id)
 * 			object										getEditor(object param)
 * 			void										showLines()
 * 
 * @date	2018年5月2日 15:23:09
 */
core.html.easyui.datagrid.TreeGrid = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.datagrid.TreeGrid.superClass.constructor.call(this, arguments[0]);
		// 默认参数修改
		this.idField($.fn.treegrid.defaults.idField);
		this.loader($.fn.treegrid.defaults.loader);
		this.loadFilter($.fn.treegrid.defaults.loadFilter);
		this.onClickRow($.fn.treegrid.defaults.onClickRow);
		this.onDblClickRow($.fn.treegrid.defaults.onDblClickRow);
		this.onClickCell($.fn.treegrid.defaults.onClickCell);
		this.onDblClickCell($.fn.treegrid.defaults.onDblClickCell);
		this.onBeforeLoad($.fn.treegrid.defaults.onBeforeLoad);
		this.onLoadSuccess($.fn.treegrid.defaults.onLoadSuccess);
		this.onLoadError($.fn.treegrid.defaults.onLoadError);
		this.onBeforeSelect($.fn.treegrid.defaults.onBeforeSelect);
		this.onSelect($.fn.treegrid.defaults.onSelect);
		this.onBeforeUnselect($.fn.treegrid.defaults.onBeforeUnselect);
		this.onUnselect($.fn.treegrid.defaults.onUnselect);
		this.onBeforeExpand($.fn.treegrid.defaults.onBeforeExpand);
		this.onExpand($.fn.treegrid.defaults.onExpand);
		this.onBeforeCollapse($.fn.treegrid.defaults.onBeforeCollapse);
		this.onCollapse($.fn.treegrid.defaults.onCollapse);
		this.onBeforeEdit($.fn.treegrid.defaults.onBeforeEdit);
		this.onAfterEdit($.fn.treegrid.defaults.onAfterEdit);
		this.onCancelEdit($.fn.treegrid.defaults.onCancelEdit);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var treeField = $.fn.treegrid.defaults.treeField;
		/**
		 * 
		 */
		var animate = $.fn.treegrid.defaults.animate;
		/**
		 * 
		 */
		var checkbox = $.fn.treegrid.defaults.checkbox;
		/**
		 * 
		 */
		var cascadeCheck = $.fn.treegrid.defaults.cascadeCheck;
		/**
		 * 
		 */
		var onlyLeafCheck = $.fn.treegrid.defaults.onlyLeafCheck;
		/**
		 * 
		 */
		var lines = $.fn.treegrid.defaults.lines;

		/**
		 * 事件
		 */
		/**
		 * 
		 */
		var onBeforeCheckNode = $.fn.treegrid.defaults.onBeforeCheckNode;
		/**
		 * 
		 */
		var onCheckNode = $.fn.treegrid.defaults.onCheckNode;
		/**
		 * 
		 */
		var onContextMenu = $.fn.treegrid.defaults.onContextMenu;

		/**
		 * 获取/设置
		 * 
		 * @param treeField{string}
		 * @returns {string/core.html.easyui.datagrid.TreeGrid}
		 */
		this.treeField = function() {

			switch (arguments.length) {
			case 0:
				return treeField;
			default:
				treeField = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param animate{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.TreeGrid}
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
		 * @param checkbox{function}
		 * @returns {function/core.html.easyui.datagrid.TreeGrid}
		 */
		this.checkbox = function() {

			switch (arguments.length) {
			case 0:
				return checkbox;
			default:
				checkbox = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param cascadeCheck{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.TreeGrid}
		 */
		this.cascadeCheck = function() {

			switch (arguments.length) {
			case 0:
				return cascadeCheck;
			default:
				cascadeCheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onlyLeafCheck{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.TreeGrid}
		 */
		this.onlyLeafCheck = function() {

			switch (arguments.length) {
			case 0:
				return onlyLeafCheck;
			default:
				onlyLeafCheck = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param lines{boolean}
		 * @returns {boolean/core.html.easyui.datagrid.TreeGrid}
		 */
		this.lines = function() {

			switch (arguments.length) {
			case 0:
				return lines;
			default:
				lines = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onBeforeCheckNode{function}
		 * @returns {function/core.html.easyui.datagrid.TreeGrid}
		 */
		this.onBeforeCheckNode = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeCheckNode;
			default:
				onBeforeCheckNode = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onCheckNode{function}
		 * @returns {function/core.html.easyui.datagrid.TreeGrid}
		 */
		this.onCheckNode = function() {

			switch (arguments.length) {
			case 0:
				return onCheckNode;
			default:
				onCheckNode = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu{function}
		 * @returns {function/core.html.easyui.datagrid.TreeGrid}
		 */
		this.onContextMenu = function() {

			switch (arguments.length) {
			case 0:
				return onContextMenu;
			default:
				onContextMenu = arguments[0];
				return this;
			}
		};
	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.datagrid.DataGrid);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.datagrid.TreeGrid}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.datagrid.TreeGrid", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().treegrid({
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
			// LinkButton继承属性
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// Pagination继承属性
			total : this.total(),
			pageSize : this.pageSize(),
			pageNumber : this.pageNumber(),
			pageList : this.pageList(),
			loading : this.loading(),
			buttons : this.buttons(),
			layout : this.layout(),
			links : this.links(),
			showPageList : this.showPageList(),
			showRefresh : this.showRefresh(),
			showPageInfo : this.showPageInfo(),
			beforePageText : this.beforePageText(),
			afterPageText : this.afterPageText(),
			displayMsg : this.displayMsg(),
			// DataGrid继承属性
			columns : this.columns(),
			frozenColumns : this.frozenColumns(),
			fitColumns : this.fitColumns(),
			resizeHandle : this.resizeHandle(),
			resizeEdge : this.resizeEdge(),
			autoRowHeight : this.autoRowHeight(),
			toolbar : this.toolbar(),
			striped : this.striped(),
			nowrap : this.nowrap(),
			idField : this.idField(),
			url : this.url(),
			data : this.data(),
			loadMsg : this.loadMsg(),
			emptyMsg : this.emptyMsg(),
			pagination : this.pagination(),
			rownumbers : this.rownumbers(),
			singleSelect : this.singleSelect(),
			ctrlSelect : this.ctrlSelect(),
			checkOnSelect : this.checkOnSelect(),
			selectOnCheck : this.selectOnCheck(),
			scrollOnSelect : this.scrollOnSelect(),
			pagePosition : this.pagePosition(),
			sortName : this.sortName(),
			sortOrder : this.sortOrder(),
			multiSort : this.multiSort(),
			remoteSort : this.remoteSort(),
			showHeader : this.showHeader(),
			showFooter : this.showFooter(),
			scrollbarSize : this.scrollbarSize(),
			rownumberWidth : this.rownumberWidth(),
			editorHeight : this.editorHeight(),
			rowStyler : this.rowStyler(),
			loadFilter : this.loadFilter(),
			editors : this.editors(),
			view : this.view(),
			// 属性
			treeField : this.treeField(),
			animate : this.animate(),
			checkbox : this.checkbox(),
			cascadeCheck : this.cascadeCheck(),
			onlyLeafCheck : this.onlyLeafCheck(),
			lines : this.lines(),

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
			// LinkButton继承事件
			onClick : this.onClick(),
			// Pagination继承事件
			onSelectPage : this.onSelectPage(),
			onBeforeRefresh : this.onBeforeRefresh(),
			onRefresh : this.onRefresh(),
			onChangePageSize : this.onChangePageSize(),
			// DataGrid继承事件
			onLoadSuccess : this.onLoadSuccess(),
			onClickRow : this.onClickRow(),
			onDblClickRow : this.onDblClickRow(),
			onClickCell : this.onClickCell(),
			onDblClickCell : this.onDblClickCell(),
			onBeforeSortColumn : this.onBeforeSortColumn(),
			onSortColumn : this.onSortColumn(),
			onResizeColumn : this.onResizeColumn(),
			onBeforeSelect : this.onBeforeSelect(),
			onSelect : this.onSelect(),
			onBeforeUnselect : this.onBeforeUnselect(),
			onUnselect : this.onUnselect(),
			onSelectAll : this.onSelectAll(),
			onUnselectAll : this.onUnselectAll(),
			onBeforeCheck : this.onBeforeCheck(),
			onCheck : this.onCheck(),
			onBeforeUncheck : this.onBeforeUncheck(),
			onUncheck : this.onUncheck(),
			onCheckAll : this.onCheckAll(),
			onUncheckAll : this.onUncheckAll(),
			onBeforeEdit : this.onBeforeEdit(),
			onBeginEdit : this.onBeginEdit(),
			onEndEdit : this.onEndEdit(),
			onAfterEdit : this.onAfterEdit(),
			onCancelEdit : this.onCancelEdit(),
			onHeaderContextMenu : this.onHeaderContextMenu(),
			onRowContextMenu : this.onRowContextMenu(),
			// 事件
			onBeforeCheckNode : this.onBeforeCheckNode(),
			onCheckNode : this.onCheckNode(),
			onContextMenu : this.onContextMenu()
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

		return this.$jQuery().treegrid("options");
	};

	/**
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.resize = function(options) {

		return this.$jQuery().treegrid("resize", options);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.fixRowHeight = function(id) {

		return this.$jQuery().treegrid("fixRowHeight", id);
	};

	/**
	 * 
	 * @param data{object}
	 * @returns
	 */
	Constructor.prototype.loadData = function(data) {

		return this.$jQuery().treegrid("loadData", data);
	};

	/**
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.load = function(param) {

		return this.$jQuery().treegrid("load", param);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.reload = function(id) {

		return this.$jQuery().treegrid("reload", id);
	};

	/**
	 * 
	 * @param footer{object}
	 * @returns {object}
	 */
	Constructor.prototype.reloadFooter = function(footer) {

		return this.$jQuery().treegrid("reloadFooter", footer);
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getData = function() {

		return this.$jQuery().treegrid("getData");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getFooterRows = function() {

		return this.$jQuery().treegrid("getFooterRows");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getRoot = function() {

		return this.$jQuery().treegrid("getRoot");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getRoots = function() {

		return this.$jQuery().treegrid("getRoots");
	};

	/**
	 * 
	 * @param id{string}
	 * @returns {object}
	 */
	Constructor.prototype.getParent = function(id) {

		return this.$jQuery().treegrid("getParent", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns {object}
	 */
	Constructor.prototype.getChildren = function(id) {

		return this.$jQuery().treegrid("getChildren", id);
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getSelected = function() {

		return this.$jQuery().treegrid("getSelected");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getSelections = function() {

		return this.$jQuery().treegrid("getSelections");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.getCheckedNodes = function() {

		return this.$jQuery().treegrid("getCheckedNodes");
	};

	/**
	 * 
	 * @param id{string}
	 * @returns {object}
	 */
	Constructor.prototype.getLevel = function(id) {

		return this.$jQuery().treegrid("getLevel", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.find = function(id) {

		return this.$jQuery().treegrid("find", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.select = function(id) {

		return this.$jQuery().treegrid("select", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.unselect = function(id) {

		return this.$jQuery().treegrid("unselect", id);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.selectAll = function() {

		return this.$jQuery().treegrid("selectAll");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.unselectAll = function() {

		return this.$jQuery().treegrid("unselectAll");
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.checkNode = function(id) {

		return this.$jQuery().treegrid("checkNode", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.uncheckNode = function(id) {

		return this.$jQuery().treegrid("uncheckNode", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.collapse = function(id) {

		return this.$jQuery().treegrid("collapse", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.expand = function(id) {

		return this.$jQuery().treegrid("expand", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.collapseAll = function(id) {

		return this.$jQuery().treegrid("collapseAll", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.expandAll = function(id) {

		return this.$jQuery().treegrid("expandAll", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.expandTo = function(id) {

		return this.$jQuery().treegrid("expandTo", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.toggle = function(id) {

		return this.$jQuery().treegrid("toggle", id);
	};

	/**
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.append = function(param) {

		return this.$jQuery().treegrid("append", param);
	};

	/**
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.insert = function(param) {

		return this.$jQuery().treegrid("insert", param);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.remove = function(id) {

		return this.$jQuery().treegrid("remove", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.pop = function(id) {

		return this.$jQuery().treegrid("pop", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.refresh = function(id) {

		return this.$jQuery().treegrid("refresh", id);
	};

	/**
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.update = function(param) {

		return this.$jQuery().treegrid("update", param);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.beginEdit = function(id) {

		return this.$jQuery().treegrid("beginEdit", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.endEdit = function(id) {

		return this.$jQuery().treegrid("endEdit", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns
	 */
	Constructor.prototype.cancelEdit = function(id) {

		return this.$jQuery().treegrid("cancelEdit", id);
	};

	/**
	 * 
	 * @param id{string}
	 * @returns {object}
	 */
	Constructor.prototype.getEditors = function(id) {

		return this.$jQuery().treegrid("getEditors", id);
	};

	/**
	 * 
	 * @param param{object}
	 * @returns {object}
	 */
	Constructor.prototype.getEditor = function(param) {

		return this.$jQuery().treegrid("getEditor", param);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.showLines = function() {

		return this.$jQuery().treegrid("showLines");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Form
 * @package core.html.easyui.form
 * @desc	表单模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.Form(string id/object jQuery)
 * 
 * @method 	object								$jQuery()								获取jQuery对象
 * 			boolean/core.html.easyui.form.Form	novalidate(boolean novalidate)			获取/设置取消校验
 * 			boolean/core.html.easyui.form.Form	iframe(boolean iframe)					获取/设置使用iframe模式
 * 			boolean/core.html.easyui.form.Form	ajax(boolean ajax)						获取/设置ajax
 * 			boolean/core.html.easyui.form.Form	dirty(boolean dirty)					获取/设置仅提交更改的字段
 * 			object/core.html.easyui.form.Form	queryParams(object queryParams)			获取/设置参数
 * 			string/core.html.easyui.form.Form	url(string url)							获取/设置action地址
 * 			function/core.html.easyui.form.Form	onSubmit(function onSubmit)				获取/设置提交事件
 * 			function/core.html.easyui.form.Form	onProgress(function onSubmit)			获取/设置
 * 			function/core.html.easyui.form.Form	success(function success)				获取/设置成功事件
 * 			function/core.html.easyui.form.Form	onBeforeLoad(function onBeforeLoad)		获取/设置加载前
 * 			function/core.html.easyui.form.Form	onLoadSuccess(function onLoadSuccess)	获取/设置加载成功
 * 			function/core.html.easyui.form.Form	onLoadError(function onLoadError)		获取/设置加载失败
 * 			function/core.html.easyui.form.Form	onChange(function onChange)				获取/设置改变事件
 * 			void								submit(object options)					提交
 * 			void								load(object data)						加载数据
 * 			void								clear()									清空数据
 * 			void								reset()									重置
 * 			void								validate()								校验
 * 			void								enableValidation()						启用校验
 * 			void								disableValidation()						禁用校验
 * 			void								resetValidation()						重置校验
 * 			void								resetDirty()							重置提交修改
 * 
 * @date	2018年5月2日 15:45:38
 */
core.html.easyui.form.Form = (function() {

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
		 * 取消校验
		 */
		var novalidate = $.fn.form.defaults.novalidate;
		/**
		 * 使用iframe模式
		 */
		var iframe = $.fn.form.defaults.iframe;
		/**
		 * ajax
		 */
		var ajax = $.fn.form.defaults.ajax;
		/**
		 * 仅提交更改的字段
		 */
		var dirty = $.fn.form.defaults.dirty;
		/**
		 * 参数
		 */
		var queryParams = $.fn.form.defaults.queryParams;
		/**
		 * action地址
		 */
		var url = $.fn.form.defaults.url;

		/**
		 * 事件
		 */
		/**
		 * 提交事件
		 */
		var onSubmit = $.fn.form.defaults.onSubmit;
		/**
		 * 
		 */
		var onProgress = $.fn.form.defaults.onProgress;
		/**
		 * 成功事件
		 */
		var success = $.fn.form.defaults.success;
		/**
		 * 加载前
		 */
		var onBeforeLoad = $.fn.form.defaults.onBeforeLoad;
		/**
		 * 加载成功
		 */
		var onLoadSuccess = $.fn.form.defaults.onLoadSuccess;
		/**
		 * 加载失败
		 */
		var onLoadError = $.fn.form.defaults.onLoadError;
		/**
		 * 改变事件
		 */
		var onChange = $.fn.form.defaults.onChange;

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.form.Form", "构造参数异常", "非字符或jQuery对象");
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
		 * 获取/设置取消校验
		 * 
		 * @param novalidate{boolean}
		 * @returns {boolean/core.html.easyui.form.Form}
		 */
		this.novalidate = function() {

			switch (arguments.length) {
			case 0:
				return novalidate;
			default:
				novalidate = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置使用iframe模式
		 * 
		 * @param iframe{boolean}
		 * @returns {boolean/core.html.easyui.form.Form}
		 */
		this.iframe = function() {

			switch (arguments.length) {
			case 0:
				return iframe;
			default:
				iframe = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置ajax
		 * 
		 * @param ajax{boolean}
		 * @returns {boolean/core.html.easyui.form.Form}
		 */
		this.ajax = function() {

			switch (arguments.length) {
			case 0:
				return ajax;
			default:
				ajax = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置仅提交更改的字段
		 * 
		 * @param dirty{boolean}
		 * @returns {boolean/core.html.easyui.form.Form}
		 */
		this.dirty = function() {

			switch (arguments.length) {
			case 0:
				return dirty;
			default:
				dirty = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置参数
		 * 
		 * @param queryParams{object}
		 * @returns {object/core.html.easyui.form.Form}
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
		 * 获取/设置action地址
		 * 
		 * @param url{string}
		 * @returns {string/core.html.easyui.form.Form}
		 */
		this.url = function() {

			switch (arguments.length) {
			case 0:
				return url;
			default:
				url = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置提交事件
		 * 
		 * @param onSubmit{function}
		 * @returns {function/core.html.easyui.form.Form}
		 */
		this.onSubmit = function() {

			switch (arguments.length) {
			case 0:
				return onSubmit;
			default:
				onSubmit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onProgress{function}
		 * @returns {function/core.html.easyui.form.Form}
		 */
		this.onProgress = function() {

			switch (arguments.length) {
			case 0:
				return onProgress;
			default:
				onProgress = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置成功事件
		 * 
		 * @param success{function}
		 * @returns {function/core.html.easyui.form.Form}
		 */
		this.success = function() {

			switch (arguments.length) {
			case 0:
				return success;
			default:
				success = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置加载前
		 * 
		 * @param onBeforeLoad{function}
		 * @returns {function/core.html.easyui.form.Form}
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
		 * 获取/设置加载成功
		 * 
		 * @param onLoadSuccess{function}
		 * @returns {function/core.html.easyui.form.Form}
		 */
		this.onLoadSuccess = function() {

			switch (arguments.length) {
			case 0:
				return onLoadSuccess;
			default:
				onLoadSuccess = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置加载失败
		 * 
		 * @param onLoadError{function}
		 * @returns {function/core.html.easyui.form.Form}
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
		 * 获取/设置改变事件
		 * 
		 * @param onChange{function}
		 * @returns {function/core.html.easyui.form.Form}
		 */
		this.onChange = function() {

			switch (arguments.length) {
			case 0:
				return onChange;
			default:
				onChange = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 方法
	 */
	/**
	 * 提交
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.submit = function(options) {

		return this.$jQuery().form("submit", options);
	};

	/**
	 * 加载数据
	 * 
	 * @param data{object}
	 * @returns
	 */
	Constructor.prototype.load = function(data) {

		return this.$jQuery().form("load", data);
	};

	/**
	 * 清空数据
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().form("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return this.$jQuery().form("reset");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return this.$jQuery().form("validate");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return this.$jQuery().form("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return this.$jQuery().form("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return this.$jQuery().form("resetValidation");
	};

	/**
	 * 重置提交修改
	 * 
	 * @returns
	 */
	Constructor.prototype.resetDirty = function() {

		return this.$jQuery().form("resetDirty");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	ValidateBox
 * @package core.html.easyui.form
 * @desc	校验文本框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.ValidateBox(string id/object jQuery)
 * 
 * @method	继承core.html.easyui.base.Tooltip所有方法
 * 			boolean/core.html.easyui.form.ValidateBox		required(boolean required)					获取/设置是否校验
 * 			string/core.html.easyui.form.ValidateBox		validType(string validType)					获取/设置校验方式
 * 			number/core.html.easyui.form.ValidateBox		delay(number delay)							获取/设置校验延迟时间
 * 			string/core.html.easyui.form.ValidateBox		missingMessage(string missingMessage)		获取/设置字段为空提示信息
 * 			string/core.html.easyui.form.ValidateBox		invalidMessage(string invalidMessage)		获取/设置校验提示信息
 * 			string/core.html.easyui.form.ValidateBox		tipPosition(string tipPosition)				获取/设置工具提示条位置
 * 			boolean/core.html.easyui.form.ValidateBox		novalidate(boolean novalidate)				获取/设置是否关闭校验
 * 			boolean/core.html.easyui.form.ValidateBox		editable(boolean editable)					获取/设置是否可输
 * 			boolean/core.html.easyui.form.ValidateBox		disabled(boolean disabled)					获取/设置是否可用
 * 			boolean/core.html.easyui.form.ValidateBox		readonly(boolean readonly)					获取/设置是否只读
 * 			boolean/core.html.easyui.form.ValidateBox		validateOnCreate(boolean validateOnCreate)	获取/设置是否创建时验证
 * 			boolean/core.html.easyui.form.ValidateBox		validateOnBlur(boolean validateOnBlur)		获取/设置是否失去焦点时验证
 * 			function/core.html.easyui.form.ValidateBox		onBeforeValidate(function onBeforeValidate)	获取/设置验证前事件
 * 			function/core.html.easyui.form.ValidateBox		onValidate(function onValidate)				获取/设置验证事件
 * 			core.html.easyui.form.ValidateBox				init()										初始化组件模板
 * 			object											options()				
 * 			void											destroy()									销毁组件
 * 			object											validate()									校验
 * 			object											isValid()									判断是否校验通过
 * 			void											enableValidation()							启用校验
 * 			void											disableValidation()							禁用校验
 * 			void											resetValidation()							重置校验
 * 			void											enable()									启用
 * 			void											disable()									禁用
 * 			void											readonly(boolean mode)						只读
 * 
 * @date	2018年4月23日 15:22:05
 */
core.html.easyui.form.ValidateBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.ValidateBox.superClass.constructor.call(this, arguments[0]);
		// 默认参数修改
		this.deltaX($.fn.validatebox.defaults.deltaX);

		/**
		 * 属性
		 */
		/**
		 * 是否校验
		 */
		var required = $.fn.validatebox.defaults.required;
		/**
		 * 校验方式
		 */
		var validType = $.fn.validatebox.defaults.validType;
		/**
		 * 校验延迟时间
		 */
		var delay = $.fn.validatebox.defaults.delay;
		/**
		 * 字段为空提示信息
		 */
		var missingMessage = $.fn.validatebox.defaults.missingMessage;
		/**
		 * 校验提示信息
		 */
		var invalidMessage = $.fn.validatebox.defaults.invalidMessage;
		/**
		 * 工具提示条位置
		 */
		var tipPosition = $.fn.validatebox.defaults.tipPosition;
		/**
		 * 是否关闭校验
		 */
		var novalidate = $.fn.validatebox.defaults.novalidate;
		/**
		 * 是否可输
		 */
		var editable = $.fn.validatebox.defaults.editable;
		/**
		 * 是否可用
		 */
		var disabled = $.fn.validatebox.defaults.disabled;
		/**
		 * 是否只读
		 */
		var readonly = $.fn.validatebox.defaults.readonly;
		/**
		 * 是否创建时验证
		 */
		var validateOnCreate = $.fn.validatebox.defaults.validateOnCreate;
		/**
		 * 是否失去焦点时验证
		 */
		var validateOnBlur = $.fn.validatebox.defaults.validateOnBlur;

		/**
		 * 事件
		 */
		/**
		 * 验证前事件
		 */
		var onBeforeValidate = $.fn.validatebox.defaults.onBeforeValidate;
		/**
		 * 验证事件
		 */
		var onValidate = $.fn.validatebox.defaults.onValidate;

		/**
		 * 获取/设置是否校验
		 * 
		 * @param required{boolean}
		 * @returns {boolean/core.html.easyui.form.ValidateBox}
		 */
		this.required = function() {

			switch (arguments.length) {
			case 0:
				return required;
			default:
				required = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置校验方式
		 * 
		 * @param validType{string}
		 * @returns {string/core.html.easyui.form.ValidateBox}
		 */
		this.validType = function() {

			switch (arguments.length) {
			case 0:
				return validType;
			default:
				validType = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置校验延迟时间
		 * 
		 * @param delay{number}
		 * @returns {number/core.html.easyui.form.ValidateBox}
		 */
		this.delay = function() {

			switch (arguments.length) {
			case 0:
				return delay;
			default:
				delay = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置字段为空提示信息
		 * 
		 * @param missingMessage{string}
		 * @returns {string/core.html.easyui.form.ValidateBox}
		 */
		this.missingMessage = function() {

			switch (arguments.length) {
			case 0:
				return missingMessage;
			default:
				missingMessage = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置校验提示信息
		 * 
		 * @param invalidMessage{string}
		 * @returns {string/core.html.easyui.form.ValidateBox}
		 */
		this.invalidMessage = function() {

			switch (arguments.length) {
			case 0:
				return invalidMessage;
			default:
				invalidMessage = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置工具提示条位置
		 * 
		 * @param tipPosition{string}
		 * @returns {string/core.html.easyui.form.ValidateBox}
		 */
		this.tipPosition = function() {

			switch (arguments.length) {
			case 0:
				return tipPosition;
			default:
				tipPosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否关闭校验
		 * 
		 * @param novalidate{boolean}
		 * @returns {boolean/core.html.easyui.form.ValidateBox}
		 */
		this.novalidate = function() {

			switch (arguments.length) {
			case 0:
				return novalidate;
			default:
				novalidate = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否可输
		 * 
		 * @param editable{boolean}
		 * @returns {boolean/core.html.easyui.form.ValidateBox}
		 */
		this.editable = function() {

			switch (arguments.length) {
			case 0:
				return editable;
			default:
				editable = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否可用
		 * 
		 * @param disabled{boolean}
		 * @returns {boolean/core.html.easyui.form.ValidateBox}
		 */
		this.disabled = function() {

			switch (arguments.length) {
			case 0:
				return disabled;
			default:
				disabled = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否只读
		 * 
		 * @param readonly{boolean}
		 * @returns {boolean/core.html.easyui.form.ValidateBox}
		 */
		this.readonly = function() {

			switch (arguments.length) {
			case 0:
				return readonly;
			default:
				readonly = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否创建时验证
		 * 
		 * @param validateOnCreate{boolean}
		 * @returns {boolean/core.html.easyui.form.ValidateBox}
		 */
		this.validateOnCreate = function() {

			switch (arguments.length) {
			case 0:
				return validateOnCreate;
			default:
				validateOnCreate = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否失去焦点时验证
		 * 
		 * @param validateOnBlur{boolean}
		 * @returns {boolean/core.html.easyui.form.ValidateBox}
		 */
		this.validateOnBlur = function() {

			switch (arguments.length) {
			case 0:
				return validateOnBlur;
			default:
				validateOnBlur = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置验证前事件
		 * 
		 * @param onBeforeValidate{function}
		 * @returns {function/core.html.easyui.form.ValidateBox}
		 */
		this.onBeforeValidate = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeValidate;
			default:
				onBeforeValidate = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置验证事件
		 * 
		 * @param onValidate{function}
		 * @returns {function/core.html.easyui.form.ValidateBox}
		 */
		this.onValidate = function() {

			switch (arguments.length) {
			case 0:
				return onValidate;
			default:
				onValidate = arguments[0];
				return this;
			}
		};
	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.base.Tooltip);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.ValidateBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.ValidateBox", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().validatebox({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// 属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// 事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate()
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

		return this.$jQuery().validatebox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().validatebox("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.validate = function() {

		return this.$jQuery().validatebox("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.isValid = function() {

		return this.$jQuery().validatebox("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return this.$jQuery().validatebox("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return this.$jQuery().validatebox("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return this.$jQuery().validatebox("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().validatebox("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().validatebox("disable");
	};

	/**
	 * 只读
	 * 
	 * @param mode{boolean}
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return this.$jQuery().validatebox("readonly", mode);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	TextBox
 * @package core.html.easyui.form
 * @desc	文本框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.TextBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.ValidateBox
 * 			core.html.easyui.button.LinkButton
 * 
 * @method	继承core.html.easyui.form.ValidateBox所有方法
 * 			继承core.html.easyui.button.LinkButton所有方法
 * 			string/core.html.easyui.form.TextBox		cls(string cls)							获取/设置样式
 * 			string/core.html.easyui.form.TextBox		prompt(string prompt)					获取/设置输入框提示信息
 * 			string/core.html.easyui.form.TextBox		value(string value)						获取/设置值
 * 			string/core.html.easyui.form.TextBox		type(string type)						获取/设置输入框类型
 * 			string/core.html.easyui.form.TextBox		label(string label)						获取/设置标签
 * 			number/core.html.easyui.form.TextBox		labelWidth(number labelWidth)			获取/设置标签宽度
 * 			string/core.html.easyui.form.TextBox		labelPosition(string labelPosition)		获取/设置标签位置
 * 			string/core.html.easyui.form.TextBox		labelAlign(string labelAlign)			获取/设置标签排列
 * 			boolean/core.html.easyui.form.TextBox		multiline(boolean multiline)			获取/设置多行文本框
 * 			array/core.html.easyui.form.TextBox			icons(array icons)						获取/设置图标
 * 			number/core.html.easyui.form.TextBox		iconWidth(number iconWidth)				获取/设置图标宽度
 * 			string/core.html.easyui.form.TextBox		buttonText(string buttonText)			获取/设置按钮文本
 * 			string/core.html.easyui.form.TextBox		buttonIcon(string buttonIcon)			获取/设置按钮图标
 * 			string/core.html.easyui.form.TextBox		buttonAlign(string buttonAlign)			获取/设置按钮排列
 * 			function/core.html.easyui.form.TextBox		onChange(function onChange)				获取/设置改变事件
 * 			function/core.html.easyui.form.TextBox		onResize(function function)				获取/设置改变大小事件
 * 			function/core.html.easyui.form.TextBox		onClickButton(function onClickButton)	获取/设置点击按钮事件
 * 			function/core.html.easyui.form.TextBox		onClickIcon(function onClickIcon)		获取/设置点击图标事件
 * 			core.html.easyui.form.TextBox				init()									初始化组件模板
 * 			object										options()					
 * 			object										textbox()				
 * 			object										button()	
 * 			void										destroy()
 * 			void										resize(number width)					改变宽度
 * 			void										disable()
 * 			void										enable()
 * 			void										readonly(boolean mode)
 * 			void										clear()									清除
 * 			void										reset()									重置
 * 			void										initValue(string value)	
 * 			void										setText(string text)					设置显示文本
 * 			string										getText()								获取显示文本
 * 			void										setValue(string value)					设置值
 * 			string										getValue()								获取值
 * 			object										getIcon(number index)					获取图标对象
 * 
 * @date	2018年4月23日 16:35:16
 */
core.html.easyui.form.TextBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.ValidateBox.call(this, arguments[0]);
		core.html.easyui.button.LinkButton.call(this, arguments[0]);
		// 默认参数修改
		this.width($.fn.textbox.defaults.width);
		this.height($.fn.textbox.defaults.height);
		this.editable($.fn.textbox.defaults.editable);
		this.disabled($.fn.textbox.defaults.disabled);
		this.readonly($.fn.textbox.defaults.readonly);
		this.iconCls($.fn.textbox.defaults.iconCls);
		this.iconAlign($.fn.textbox.defaults.iconAlign);

		/**
		 * 属性
		 */
		/**
		 * 样式
		 */
		var cls = $.fn.textbox.defaults.cls;
		/**
		 * 输入框提示信息
		 */
		var prompt = $.fn.textbox.defaults.prompt;
		/**
		 * 值
		 */
		var value = $.fn.textbox.defaults.value;
		/**
		 * 输入框类型
		 */
		var type = $.fn.textbox.defaults.type;
		/**
		 * 标签
		 */
		var label = $.fn.textbox.defaults.label;
		/**
		 * 标签宽度
		 */
		var labelWidth = $.fn.textbox.defaults.labelWidth;
		/**
		 * 标签位置
		 */
		var labelPosition = $.fn.textbox.defaults.labelPosition;
		/**
		 * 标签排列
		 */
		var labelAlign = $.fn.textbox.defaults.labelAlign;
		/**
		 * 多行文本框
		 */
		var multiline = $.fn.textbox.defaults.multiline;
		/**
		 * 图标
		 */
		var icons = $.fn.textbox.defaults.icons;
		/**
		 * 图标宽度
		 */
		var iconWidth = $.fn.textbox.defaults.iconWidth;
		/**
		 * 按钮文本
		 */
		var buttonText = $.fn.textbox.defaults.buttonText;
		/**
		 * 按钮图标
		 */
		var buttonIcon = $.fn.textbox.defaults.buttonIcon;
		/**
		 * 按钮排列
		 */
		var buttonAlign = $.fn.textbox.defaults.buttonAlign;

		/**
		 * 事件
		 */
		/**
		 * 改变事件
		 */
		var onChange = $.fn.textbox.defaults.onChange;
		/**
		 * 改变大小事件
		 */
		var onResize = $.fn.textbox.defaults.onResize;
		/**
		 * 点击按钮事件
		 */
		var onClickButton = $.fn.textbox.defaults.onClickButton;
		/**
		 * 点击图标事件
		 */
		var onClickIcon = $.fn.textbox.defaults.onClickIcon;

		/**
		 * 获取/设置样式
		 * 
		 * @param cls{string}
		 * @returns {string/core.html.easyui.form.TextBox}
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
		 * 获取/设置输入框提示信息
		 * 
		 * @param prompt{string}
		 * @returns {string/core.html.easyui.form.TextBox}
		 */
		this.prompt = function() {

			switch (arguments.length) {
			case 0:
				return prompt;
			default:
				prompt = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置值
		 * 
		 * @param value{string}
		 * @returns {string/core.html.easyui.form.TextBox}
		 */
		this.value = function() {

			switch (arguments.length) {
			case 0:
				return value;
			default:
				value = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置输入框类型
		 * 
		 * @param type{string}
		 * @returns {string/core.html.easyui.form.TextBox}
		 */
		this.type = function() {

			switch (arguments.length) {
			case 0:
				return type;
			default:
				type = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置标签
		 * 
		 * @param label{string}
		 * @returns {string/core.html.easyui.form.TextBox}
		 */
		this.label = function() {

			switch (arguments.length) {
			case 0:
				return label;
			default:
				label = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置标签宽度
		 * 
		 * @param labelWidth{number}
		 * @returns {number/core.html.easyui.form.TextBox}
		 */
		this.labelWidth = function() {

			switch (arguments.length) {
			case 0:
				return labelWidth;
			default:
				labelWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置标签位置
		 * 
		 * @param labelPosition{string}
		 * @returns {string/core.html.easyui.form.TextBox}
		 */
		this.labelPosition = function() {

			switch (arguments.length) {
			case 0:
				return labelPosition;
			default:
				labelPosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置标签排列
		 * 
		 * @param labelAlign{string}
		 * @returns {string/core.html.easyui.form.TextBox}
		 */
		this.labelAlign = function() {

			switch (arguments.length) {
			case 0:
				return labelAlign;
			default:
				labelAlign = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置多行文本框
		 * 
		 * @param multiline{boolean}
		 * @returns {boolean/core.html.easyui.form.TextBox}
		 */
		this.multiline = function() {

			switch (arguments.length) {
			case 0:
				return multiline;
			default:
				multiline = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置图标
		 * 
		 * @param icons{array}
		 * @returns {array/core.html.easyui.form.TextBox}
		 */
		this.icons = function() {

			switch (arguments.length) {
			case 0:
				return icons;
			default:
				icons = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置图标宽度
		 * 
		 * @param iconWidth{number}
		 * @returns {number/core.html.easyui.form.TextBox}
		 */
		this.iconWidth = function() {

			switch (arguments.length) {
			case 0:
				return iconWidth;
			default:
				iconWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按钮文本
		 * 
		 * @param buttonText{string}
		 * @returns {string/core.html.easyui.form.TextBox}
		 */
		this.buttonText = function() {

			switch (arguments.length) {
			case 0:
				return buttonText;
			default:
				buttonText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按钮图标
		 * 
		 * @param buttonIcon{string}
		 * @returns {string/core.html.easyui.form.TextBox}
		 */
		this.buttonIcon = function() {

			switch (arguments.length) {
			case 0:
				return buttonIcon;
			default:
				buttonIcon = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按钮排列
		 * 
		 * @param buttonAlign{string}
		 * @returns {string/core.html.easyui.form.TextBox}
		 */
		this.buttonAlign = function() {

			switch (arguments.length) {
			case 0:
				return buttonAlign;
			default:
				buttonAlign = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置改变事件
		 * 
		 * @param onChange{function}
		 * @returns {function/core.html.easyui.form.TextBox}
		 */
		this.onChange = function() {

			switch (arguments.length) {
			case 0:
				return onChange;
			default:
				onChange = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置改变大小事件
		 * 
		 * @param onResize{function}
		 * @returns {function/core.html.easyui.form.TextBox}
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
		 * 获取/设置点击按钮事件
		 * 
		 * @param onClickButton{function}
		 * @returns {function/core.html.easyui.form.TextBox}
		 */
		this.onClickButton = function() {

			switch (arguments.length) {
			case 0:
				return onClickButton;
			default:
				onClickButton = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置点击图标事件
		 * 
		 * @param onClickIcon{function}
		 * @returns {function/core.html.easyui.form.TextBox}
		 */
		this.onClickIcon = function() {

			switch (arguments.length) {
			case 0:
				return onClickIcon;
			default:
				onClickIcon = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.TextBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.TextBox", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().textbox({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// 属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// 事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon()
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

		return this.$jQuery().textbox("options");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.textbox = function() {

		return this.$jQuery().textbox("textbox");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.button = function() {

		return this.$jQuery().textbox("button");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().textbox("destroy");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width{number}
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return this.$jQuery().textbox("resize", width);
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().textbox("disable");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().textbox("enable");
	};

	/**
	 * 只读
	 * 
	 * @param mode{boolean}
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return this.$jQuery().textbox("readonly", mode);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().textbox("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return this.$jQuery().textbox("reset");
	};

	/**
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return this.$jQuery().textbox("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text{string}
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return this.$jQuery().textbox("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getText = function() {

		return this.$jQuery().textbox("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().textbox("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getValue = function() {

		return this.$jQuery().textbox("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index{number}
	 * @returns {object}
	 */
	Constructor.prototype.getIcon = function(index) {

		return this.$jQuery().textbox("getIcon", index);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Textarea
 * @package core.html.easyui.form
 * @desc	文本区模板
 * @type	类
 * 
 * @constructor core.html.easyui.form.Textarea(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 
 * @method	core.html.easyui.form.Textarea init() 初始化组件模板
 * 
 * @date	2018年5月2日 16:14:29
 */
core.html.easyui.form.Textarea = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.Textarea.superClass.constructor.call(this, arguments[0]);
		// 默认参数修改
		this.multiline(true);
	};
	// 继承验证文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	PasswordBox
 * @package core.html.easyui.form
 * @desc	密码框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.PasswordBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 
 * @method	继承core.html.easyui.form.TextBox所有方法
 * 			string/core.html.easyui.form.PasswordBox		passwordChar(string passwordChar)	获取/设置密码显示字符
 * 			number/core.html.easyui.form.PasswordBox		checkInterval(number checkInterval)	获取/设置检查间隔时间
 * 			number/core.html.easyui.form.PasswordBox		lastDelay(number lastDelay)			获取/设置延迟转换
 * 			boolean/core.html.easyui.form.PasswordBox		revealed(boolean revealed)			获取/设置是否隐藏密码
 * 			boolean/core.html.easyui.form.PasswordBox		showEye(boolean showEye)			获取/设置是否显示显示密码按钮
 * 			core.html.easyui.form.PasswordBox				init()								初始化组件模板		
 * 			object											options()
 * 			void											showPassword()						显示密码
 * 			void											hidePassword()						隐藏密码
 * 
 * @date	2018年5月2日 16:05:52
 */
core.html.easyui.form.PasswordBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.PasswordBox.superClass.constructor.call(this, arguments[0]);

		/**
		 * 属性
		 */
		/**
		 * 密码显示字符
		 */
		var passwordChar = $.fn.passwordbox.defaults.passwordChar;
		/**
		 * 检查间隔时间
		 */
		var checkInterval = $.fn.passwordbox.defaults.checkInterval;
		/**
		 * 延迟转换
		 */
		var lastDelay = $.fn.passwordbox.defaults.lastDelay;
		/**
		 * 是否显示密码明文
		 */
		var revealed = $.fn.passwordbox.defaults.revealed;
		/**
		 * 是否显示显示密码按钮
		 */
		var showEye = $.fn.passwordbox.defaults.showEye;

		/**
		 * 获取/设置密码显示字符
		 * 
		 * @param passwordChar{string}
		 * @returns {string/core.html.easyui.form.PasswordBox}
		 */
		this.passwordChar = function() {

			switch (arguments.length) {
			case 0:
				return passwordChar;
			default:
				passwordChar = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置检查间隔时间
		 * 
		 * @param checkInterval{number}
		 * @returns {number/core.html.easyui.form.PasswordBox}
		 */
		this.checkInterval = function() {

			switch (arguments.length) {
			case 0:
				return checkInterval;
			default:
				checkInterval = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置延迟转换
		 * 
		 * @param lastDelay{number}
		 * @returns {number/core.html.easyui.form.PasswordBox}
		 */
		this.lastDelay = function() {

			switch (arguments.length) {
			case 0:
				return lastDelay;
			default:
				lastDelay = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否隐藏密码
		 * 
		 * @param revealed{boolean}
		 * @returns {boolean/core.html.easyui.form.PasswordBox}
		 */
		this.revealed = function() {

			switch (arguments.length) {
			case 0:
				return revealed;
			default:
				revealed = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否显示显示密码按钮
		 * 
		 * @param showEye{boolean}
		 * @returns {boolean/core.html.easyui.form.PasswordBox}
		 */
		this.showEye = function() {

			switch (arguments.length) {
			case 0:
				return showEye;
			default:
				showEye = arguments[0];
				return this;
			}
		};
	};
	// 继承文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.PasswordBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.PasswordBox", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().passwordbox({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// TextBox继承属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// 属性
			passwordChar : this.passwordChar(),
			checkInterval : this.checkInterval(),
			lastDelay : this.lastDelay(),
			revealed : this.revealed(),
			showEye : this.showEye(),

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon()
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

		return this.$jQuery().passwordbox("options");
	};

	/**
	 * 显示密码
	 * 
	 * @returns
	 */
	Constructor.prototype.showPassword = function() {

		return this.$jQuery().passwordbox("showPassword");
	};

	/**
	 * 隐藏密码
	 * 
	 * @returns
	 */
	Constructor.prototype.hidePassword = function() {

		return this.$jQuery().passwordbox("hidePassword");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	MaskedBox
 * @package core.html.easyui.form
 * @desc	模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.MaskedBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 
 * @method	继承core.html.easyui.form.TextBox所有方法
 * 			string/core.html.easyui.form.MaskedBox		passwordChar(string passwordChar)	获取/设置密码显示字符
 * 			number/core.html.easyui.form.MaskedBox		checkInterval(number checkInterval)	获取/设置检查间隔时间
 * 			number/core.html.easyui.form.MaskedBox		lastDelay(number lastDelay)			获取/设置延迟转换
 * 			boolean/core.html.easyui.form.MaskedBox		revealed(boolean revealed)			获取/设置是否隐藏密码
 * 			boolean/core.html.easyui.form.MaskedBox		showEye(boolean showEye)			获取/设置是否显示显示密码按钮
 * 			core.html.easyui.form.MaskedBox				init()								初始化组件模板		
 * 			object										options()
 * 			void										initValue(string value)				显示密码
 * 			void										setValue(string value)				隐藏密码
 * 
 * @date	2018年5月2日 16:11:07
 */
core.html.easyui.form.MaskedBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.MaskedBox.superClass.constructor.call(this, arguments[0]);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var mask = $.fn.maskedbox.defaults.mask;
		/**
		 * 
		 */
		var promptChar = $.fn.maskedbox.defaults.promptChar;
		/**
		 * 
		 */
		var masks = $.fn.maskedbox.defaults.masks;

		/**
		 * 获取/设置
		 * 
		 * @param mask{string}
		 * @returns {string/core.html.easyui.form.MaskedBox}
		 */
		this.mask = function() {

			switch (arguments.length) {
			case 0:
				return mask;
			default:
				mask = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param promptChar{string}
		 * @returns {string/core.html.easyui.form.MaskedBox}
		 */
		this.promptChar = function() {

			switch (arguments.length) {
			case 0:
				return promptChar;
			default:
				promptChar = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param masks{string}
		 * @returns {string/core.html.easyui.form.MaskedBox}
		 */
		this.masks = function() {

			switch (arguments.length) {
			case 0:
				return masks;
			default:
				masks = arguments[0];
				return this;
			}
		};
	};
	// 继承文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.MaskedBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.MaskedBox", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().maskedbox({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// TextBox继承属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// 属性
			mask : this.mask(),
			promptChar : this.promptChar(),
			masks : this.masks(),

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon()
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

		return this.$jQuery().maskedbox("options");
	};

	/**
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return this.$jQuery().maskedbox("initValue", value);
	};

	/**
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().maskedbox("setValue", value);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Combo
 * @package core.html.easyui.form
 * @desc	下拉框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.Combo(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 			core.html.easyui.layout.Panel
 * 
 * @method	继承core.html.easyui.form.TextBox所有方法
 * 			继承core.html.easyui.layout.Panel所有方法
 * 			number/core.html.easyui.form.Combo			panelWidth(number panelWidth)					获取/设置面板宽度
 * 			number/core.html.easyui.form.Combo			panelHeight(number panelHeight)					获取/设置面板高度
 * 			number/core.html.easyui.form.Combo			panelMinWidth(number panelMinWidth)				获取/设置面板最小宽度
 * 			number/core.html.easyui.form.Combo			panelMaxWidth(number panelMaxWidth)				获取/设置面板最大宽度
 * 			number/core.html.easyui.form.Combo			panelMinHeight(number panelMinHeight)			获取/设置面板最小高度
 * 			number/core.html.easyui.form.Combo			panelMaxHeight(number panelMaxHeight)			获取/设置面板最大高度
 * 			string/core.html.easyui.form.Combo			panelAlign(string panelAlign)					获取/设置面板位置
 * 			boolean/core.html.easyui.form.Combo			multiple(boolean multiple)						获取/设置是否多选
 * 			boolean/core.html.easyui.form.Combo			multivalue(boolean multivalue)					获取/设置
 * 			boolean/core.html.easyui.form.Combo			reversed(boolean reversed)						获取/设置
 * 			boolean/core.html.easyui.form.Combo			selectOnNavigation(boolean selectOnNavigation)	获取/设置
 * 			string/core.html.easyui.form.Combo			separator(string separator)						获取/设置多选分割符号
 * 			boolean/core.html.easyui.form.Combo			hasDownArrow(boolean hasDownArrow)				获取/设置是否显示向下按钮
 * 			object/core.html.easyui.form.Combo			keyHandler(object keyHandler)					获取/设置按键事件
 * 			function/core.html.easyui.form.Combo		onShowPanel(function onShowPanel)				获取/设置显示面板事件
 * 			function/core.html.easyui.form.Combo		onHidePanel(function onHidePanel)				获取/设置隐藏面板事件
 * 			core.html.easyui.form.Combo					init()											初始化组件模板
 * 			object										options()
 * 			object										panel()	
 * 			object										textbox()
 * 			void										destroy()
 * 			void										resize(number width)					
 * 			void										showPanel()										显示面板
 * 			void										hidePanel()										隐藏面板
 * 			void										disable()
 * 			void										enable()
 * 			void										readonly(boolean mode)
 * 			void										validate()
 * 			boolean										isValid()
 * 			void										clear()
 * 			void										reset()
 * 			string										getText()
 * 			void										setText(string text)
 * 			array										getValues()										获取值集合
 * 			void										setValues(array values)							设置值集合
 * 			string										getValue()
 * 			void										setValue(string value)
 * 
 * @date	2018年5月3日 14:32:25
 */
core.html.easyui.form.Combo = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.TextBox.call(this, arguments[0]);
		core.html.easyui.layout.Panel.call(this, arguments[0]);
		// 默认参数修改
		this.width($.fn.combo.defaults.width);
		this.height($.fn.combo.defaults.height);
		this.editable($.fn.combo.defaults.editable);
		this.disabled($.fn.combo.defaults.disabled);
		this.readonly($.fn.combo.defaults.readonly);
		this.value($.fn.combo.defaults.value);
		this.delay($.fn.combo.defaults.delay);
		this.onChange($.fn.combo.defaults.onChange);

		/**
		 * 属性
		 */
		/**
		 * 面板宽度
		 */
		var panelWidth = $.fn.combo.defaults.panelWidth;
		/**
		 * 面板高度
		 */
		var panelHeight = $.fn.combo.defaults.panelHeight;
		/**
		 * 面板最小宽度
		 */
		var panelMinWidth = $.fn.combo.defaults.panelMinWidth;
		/**
		 * 面板最大宽度
		 */
		var panelMaxWidth = $.fn.combo.defaults.panelMaxWidth;
		/**
		 * 面板最小高度
		 */
		var panelMinHeight = $.fn.combo.defaults.panelMinHeight;
		/**
		 * 面板最大高度
		 */
		var panelMaxHeight = $.fn.combo.defaults.panelMaxHeight;
		/**
		 * 面板位置
		 */
		var panelAlign = $.fn.combo.defaults.panelAlign;
		/**
		 * 是否多选
		 */
		var multiple = $.fn.combo.defaults.multiple;
		/**
		 * 
		 */
		var multivalue = $.fn.combo.defaults.multivalue;
		/**
		 * 
		 */
		var reversed = $.fn.combo.defaults.reversed;
		/**
		 * 
		 */
		var selectOnNavigation = $.fn.combo.defaults.selectOnNavigation;
		/**
		 * 多选分割符号
		 */
		var separator = $.fn.combo.defaults.separator;
		/**
		 * 是否显示向下按钮
		 */
		var hasDownArrow = $.fn.combo.defaults.hasDownArrow;
		/**
		 * 按键事件
		 */
		var keyHandler = $.fn.combo.defaults.keyHandler;

		/**
		 * 事件
		 */
		/**
		 * 显示面板事件
		 */
		var onShowPanel = $.fn.combo.defaults.onShowPanel;
		/**
		 * 隐藏面板事件
		 */
		var onHidePanel = $.fn.combo.defaults.onHidePanel;

		/**
		 * 获取/设置面板宽度
		 * 
		 * @param panelWidth{number}
		 * @returns {number/core.html.easyui.form.Combo}
		 */
		this.panelWidth = function() {

			switch (arguments.length) {
			case 0:
				return panelWidth;
			default:
				panelWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置面板高度
		 * 
		 * @param panelHeight{number}
		 * @returns {number/core.html.easyui.form.Combo}
		 */
		this.panelHeight = function() {

			switch (arguments.length) {
			case 0:
				return panelHeight;
			default:
				panelHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置面板最小宽度
		 * 
		 * @param panelMinWidth{number}
		 * @returns {number/core.html.easyui.form.Combo}
		 */
		this.panelMinWidth = function() {

			switch (arguments.length) {
			case 0:
				return panelMinWidth;
			default:
				panelMinWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置面板最大宽度
		 * 
		 * @param panelMaxWidth{number}
		 * @returns {number/core.html.easyui.form.Combo}
		 */
		this.panelMaxWidth = function() {

			switch (arguments.length) {
			case 0:
				return panelMaxWidth;
			default:
				panelMaxWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置面板最小高度
		 * 
		 * @param panelMinHeight{number}
		 * @returns {number/core.html.easyui.form.Combo}
		 */
		this.panelMinHeight = function() {

			switch (arguments.length) {
			case 0:
				return panelMinHeight;
			default:
				panelMinHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置面板最大高度
		 * 
		 * @param panelMaxHeight{number}
		 * @returns {number/core.html.easyui.form.Combo}
		 */
		this.panelMaxHeight = function() {

			switch (arguments.length) {
			case 0:
				return panelMaxHeight;
			default:
				panelMaxHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置面板位置
		 * 
		 * @param panelAlign{string}
		 * @returns {string/core.html.easyui.form.Combo}
		 */
		this.panelAlign = function() {

			switch (arguments.length) {
			case 0:
				return panelAlign;
			default:
				panelAlign = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否多选
		 * 
		 * @param multiple{boolean}
		 * @returns {boolean/core.html.easyui.form.Combo}
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
		 * @param multivalue{boolean}
		 * @returns {boolean/core.html.easyui.form.Combo}
		 */
		this.multivalue = function() {

			switch (arguments.length) {
			case 0:
				return multivalue;
			default:
				multivalue = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param reversed{boolean}
		 * @returns {boolean/core.html.easyui.form.Combo}
		 */
		this.reversed = function() {

			switch (arguments.length) {
			case 0:
				return reversed;
			default:
				reversed = arguments[0];
				return this;
			}
		};
		
		/**
		 * 获取/设置
		 * 
		 * @param selectOnNavigation{boolean}
		 * @returns {boolean/core.html.easyui.form.Combo}
		 */
		this.selectOnNavigation = function() {

			switch (arguments.length) {
			case 0:
				return selectOnNavigation;
			default:
				selectOnNavigation = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置多选分割符号
		 * 
		 * @param separator{string}
		 * @returns {string/core.html.easyui.form.Combo}
		 */
		this.separator = function() {

			switch (arguments.length) {
			case 0:
				return separator;
			default:
				separator = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否显示向下按钮
		 * 
		 * @param hasDownArrow{boolean}
		 * @returns {boolean/core.html.easyui.form.Combo}
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

		/**
		 * 获取/设置按键事件
		 * 
		 * @param keyHandler{object}
		 * @returns {object/core.html.easyui.form.Combo}
		 */
		this.keyHandler = function() {

			switch (arguments.length) {
			case 0:
				return keyHandler;
			default:
				keyHandler = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示面板事件
		 * 
		 * @param onShowPanel{function}
		 * @returns {function/core.html.easyui.form.Combo}
		 */
		this.onShowPanel = function() {

			switch (arguments.length) {
			case 0:
				return onShowPanel;
			default:
				onShowPanel = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置隐藏面板事件
		 * 
		 * @param onHidePanel{function}
		 * @returns {function/core.html.easyui.form.Combo}
		 */
		this.onHidePanel = function() {

			switch (arguments.length) {
			case 0:
				return onHidePanel;
			default:
				onHidePanel = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.Combo}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.Combo", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().combo({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// TextBox继承属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// Panel继承属性
			title : this.title(),
			left : this.left(),
			top : this.top(),
			headerCls : this.headerCls(),
			bodyCls : this.bodyCls(),
			style : this.style(),
			fit : this.fit(),
			border : this.border(),
			doSize : this.doSize(),
			noheader : this.noheader(),
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
			panelWidth : this.panelWidth(),
			panelHeight : this.panelHeight(),
			panelMinWidth : this.panelMinWidth(),
			panelMaxWidth : this.panelMaxWidth(),
			panelMinHeight : this.panelMinHeight(),
			panelMaxHeight : this.panelMaxHeight(),
			panelAlign : this.panelAlign(),
			multiple : this.multiple(),
			multivalue : this.multivalue(),
			reversed : this.reversed(),
			selectOnNavigation : this.selectOnNavigation(),
			separator : this.separator(),
			hasDownArrow : this.hasDownArrow(),
			keyHandler : this.keyHandler(),

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Panel继承事件
			onBeforeLoad : this.onBeforeLoad(),
			onLoad : this.onLoad(),
			onLoadError : this.onLoadError(),
			onBeforeOpen : this.onBeforeOpen(),
			onOpen : this.onOpen(),
			onBeforeClose : this.onBeforeClose(),
			onClose : this.onClose(),
			onBeforeDestroy : this.onBeforeDestroy(),
			onBeforeCollapse : this.onBeforeCollapse(),
			onCollapse : this.onCollapse(),
			onBeforeExpand : this.onBeforeExpand(),
			onExpand : this.onExpand(),
			onMove : this.onMove(),
			onMaximize : this.onMaximize(),
			onRestore : this.onRestore(),
			onMinimize : this.onMinimize(),
			// 事件
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel()
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

		return this.$jQuery().combo("options");
	};
	
	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.panel = function() {

		return this.$jQuery().combo("panel");
	};
	
	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.textbox = function() {

		return this.$jQuery().combo("textbox");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().combo("destroy");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width{number}
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return this.$jQuery().combo("resize", width);
	};

	/**
	 * 显示面板
	 * 
	 * @returns
	 */
	Constructor.prototype.showPanel = function() {

		return this.$jQuery().combo("showPanel");
	};

	/**
	 * 隐藏面板
	 * 
	 * @returns
	 */
	Constructor.prototype.hidePanel = function() {

		return this.$jQuery().combo("hidePanel");
	};
	
	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().combo("disable");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().combo("enable");
	};

	/**
	 * 只读
	 * 
	 * @param mode{boolean}
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return this.$jQuery().combo("readonly", mode);
	};
	
	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return this.$jQuery().combo("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns {boolean}
	 */
	Constructor.prototype.isValid = function() {

		return this.$jQuery().combo("isValid");
	};
	
	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().combo("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return this.$jQuery().combo("reset");
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getText = function() {

		return this.$jQuery().combo("getText");
	};
	
	/**
	 * 设置显示文本
	 * 
	 * @param text{string}
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return this.$jQuery().combo("setText", text);
	};
	
	/**
	 * 获取值集合
	 * 
	 * @returns {array}
	 */
	Constructor.prototype.getValues = function() {

		return this.$jQuery().combo("getValues");
	};

	/**
	 * 设置值集合
	 * 
	 * @param values{array}
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return this.$jQuery().combo("setValues", values);
	};

	/**
	 * 获取值
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getValue = function() {

		return this.$jQuery().combo("getValue");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().combo("setValue", value);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	ComboBox
 * @package core.html.easyui.form
 * @desc	下拉框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.ComboBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.Combo
 * 
 * @method	继承core.html.easyui.form.Combo所有方法
 * 			string/core.html.easyui.form.ComboBox		valueField(string valueField)			获取/设置值域字段名
 * 			string/core.html.easyui.form.ComboBox		textField(string textField)				获取/设置显示域字段名
 * 			string/core.html.easyui.form.ComboBox		groupField(string groupField)			获取/设置分组字段
 * 			function/core.html.easyui.form.ComboBox		groupFormatter(function groupFormatter)	获取/设置分组格式化
 * 			string/core.html.easyui.form.ComboBox		mode(string mode)						获取/设置数据获取模式
 * 			string/core.html.easyui.form.ComboBox		url(string url)							获取/设置链接
 * 			array/core.html.easyui.form.ComboBox		data(array data)						获取/设置数据
 * 			boolean/core.html.easyui.form.ComboBox		limitToList(boolean limitToList)		获取/设置
 * 			boolean/core.html.easyui.form.ComboBox		showItemIcon(boolean showItemIcon)		获取/设置项目图标
 * 			string/core.html.easyui.form.ComboBox		groupPosition(string groupPosition)		获取/设置分组位置
 * 			function/core.html.easyui.form.ComboBox		filter(function filter)					获取/设置过滤
 * 			function/core.html.easyui.form.ComboBox		formatter(function formatter)			获取/设置格式化
 * 			function/core.html.easyui.form.ComboBox		loadFilter(function loadFilter)			获取/设置加载过滤
 * 			function/core.html.easyui.form.ComboBox		onLoadSuccess(function onLoadSuccess)	获取/设置加载成功事件
 * 			function/core.html.easyui.form.ComboBox		onSelect(function onSelect)				获取/设置选择事件
 * 			function/core.html.easyui.form.ComboBox		onUnselect(function onUnselect)			获取/设置取消选择事件
 * 			core.html.easyui.form.ComboBox				init()									初始化组件模板
 * 			object										options()
 * 			array										getData()								获取数据
 * 			void										loadData(array data)					加载数据
 * 			void										reload(string url)						远程加载数据
 * 			void										setValues(array values)
 * 			void										setValue(string value)
 * 			void										clear()
 * 			void										select(string value)					选择某值
 * 			void										unselect(string value)					取消选择某值
 * 
 * @date	2018年5月3日 15:04:37
 */
core.html.easyui.form.ComboBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.ComboBox.superClass.constructor.call(this, arguments[0]);
		// 默认参数修改
		this.method($.fn.combobox.defaults.method);
		this.queryParams($.fn.combobox.defaults.queryParams);
		this.loader($.fn.combobox.defaults.loader);
		this.onBeforeLoad($.fn.combobox.defaults.onBeforeLoad);
		this.onLoadError($.fn.combobox.defaults.onLoadError);
		this.onChange($.fn.combobox.defaults.onChange);
		this.onClick($.fn.combobox.defaults.onClick);

		/**
		 * 属性
		 */
		/**
		 * 值域字段名
		 */
		var valueField = $.fn.combobox.defaults.valueField;
		/**
		 * 显示域字段名
		 */
		var textField = $.fn.combobox.defaults.textField;
		/**
		 * 分组字段
		 */
		var groupField = $.fn.combobox.defaults.groupField;
		/**
		 * 分组格式化
		 */
		var groupFormatter = $.fn.combobox.defaults.groupFormatter;
		/**
		 * 数据获取模式
		 */
		var mode = $.fn.combobox.defaults.mode;
		/**
		 * 链接
		 */
		var url = $.fn.combobox.defaults.url;
		/**
		 * 数据
		 */
		var data = $.fn.combobox.defaults.data;
		/**
		 * 
		 */
		var limitToList = $.fn.combobox.defaults.limitToList;
		/**
		 * 项目图标
		 */
		var showItemIcon = $.fn.combobox.defaults.showItemIcon;
		/**
		 * 分组位置
		 */
		var groupPosition = $.fn.combobox.defaults.groupPosition;
		/**
		 * 过滤
		 */
		var filter = $.fn.combobox.defaults.filter;
		/**
		 * 格式化
		 */
		var formatter = $.fn.combobox.defaults.formatter;
		/**
		 * 加载过滤
		 */
		var loadFilter = $.fn.combobox.defaults.loadFilter;

		/**
		 * 事件
		 */
		/**
		 * 加载成功事件
		 */
		var onLoadSuccess = $.fn.combobox.defaults.onLoadSuccess;
		/**
		 * 选择事件
		 */
		var onSelect = $.fn.combobox.defaults.onSelect;
		/**
		 * 取消选择事件
		 */
		var onUnselect = $.fn.combobox.defaults.onUnselect;

		/**
		 * 获取/设置值域字段名
		 * 
		 * @param valueField{string}
		 * @returns {string/core.html.easyui.form.ComboBox}
		 */
		this.valueField = function() {

			switch (arguments.length) {
			case 0:
				return valueField;
			default:
				valueField = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示域字段名
		 * 
		 * @param textField{string}
		 * @returns {string/core.html.easyui.form.ComboBox}
		 */
		this.textField = function() {

			switch (arguments.length) {
			case 0:
				return textField;
			default:
				textField = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置分组字段
		 * 
		 * @param groupField{string}
		 * @returns {string/core.html.easyui.form.ComboBox}
		 */
		this.groupField = function() {

			switch (arguments.length) {
			case 0:
				return groupField;
			default:
				groupField = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置分组格式化
		 * 
		 * @param groupFormatter{function}
		 * @returns {function/core.html.easyui.form.ComboBox}
		 */
		this.groupFormatter = function() {

			switch (arguments.length) {
			case 0:
				return groupFormatter;
			default:
				groupFormatter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置数据获取模式
		 * 
		 * @param mode{string}
		 * @returns {string/core.html.easyui.form.ComboBox}
		 */
		this.mode = function() {

			switch (arguments.length) {
			case 0:
				return mode;
			default:
				mode = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置链接
		 * 
		 * @param url{string}
		 * @returns {string/core.html.easyui.form.ComboBox}
		 */
		this.url = function() {

			switch (arguments.length) {
			case 0:
				return url;
			default:
				url = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置数据
		 * 
		 * @param data{array}
		 * @returns {array/core.html.easyui.form.ComboBox}
		 */
		this.data = function() {

			switch (arguments.length) {
			case 0:
				return data;
			default:
				data = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param limitToList{boolean}
		 * @returns {boolean/core.html.easyui.form.ComboBox}
		 */
		this.limitToList = function() {

			switch (arguments.length) {
			case 0:
				return limitToList;
			default:
				limitToList = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置项目图标
		 * 
		 * @param showItemIcon{boolean}
		 * @returns {boolean/core.html.easyui.form.ComboBox}
		 */
		this.showItemIcon = function() {

			switch (arguments.length) {
			case 0:
				return showItemIcon;
			default:
				showItemIcon = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置分组位置
		 * 
		 * @param groupPosition{string}
		 * @returns {string/core.html.easyui.form.ComboBox}
		 */
		this.groupPosition = function() {

			switch (arguments.length) {
			case 0:
				return groupPosition;
			default:
				groupPosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置过滤
		 * 
		 * @param filter{function}
		 * @returns {function/core.html.easyui.form.ComboBox}
		 */
		this.filter = function() {

			switch (arguments.length) {
			case 0:
				return filter;
			default:
				filter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置格式化
		 * 
		 * @param formatter{function}
		 * @returns {function/core.html.easyui.form.ComboBox}
		 */
		this.formatter = function() {

			switch (arguments.length) {
			case 0:
				return formatter;
			default:
				formatter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置加载过滤
		 * 
		 * @param loadFilter{function}
		 * @returns {function/core.html.easyui.form.ComboBox}
		 */
		this.loadFilter = function() {

			switch (arguments.length) {
			case 0:
				return loadFilter;
			default:
				loadFilter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置加载成功事件
		 * 
		 * @param onLoadSuccess{function}
		 * @returns {function/core.html.easyui.form.ComboBox}
		 */
		this.onLoadSuccess = function() {

			switch (arguments.length) {
			case 0:
				return onLoadSuccess;
			default:
				onLoadSuccess = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置选择事件
		 * 
		 * @param onSelect{function}
		 * @returns {function/core.html.easyui.form.ComboBox}
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
		 * @returns {function/core.html.easyui.form.ComboBox}
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
	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.form.Combo);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.ComboBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.ComboBox", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().combobox({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// TextBox继承属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// Panel继承属性
			title : this.title(),
			left : this.left(),
			top : this.top(),
			headerCls : this.headerCls(),
			bodyCls : this.bodyCls(),
			style : this.style(),
			fit : this.fit(),
			border : this.border(),
			doSize : this.doSize(),
			noheader : this.noheader(),
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
			// Combo继承属性
			panelWidth : this.panelWidth(),
			panelHeight : this.panelHeight(),
			panelMinWidth : this.panelMinWidth(),
			panelMaxWidth : this.panelMaxWidth(),
			panelMinHeight : this.panelMinHeight(),
			panelMaxHeight : this.panelMaxHeight(),
			panelAlign : this.panelAlign(),
			multiple : this.multiple(),
			multivalue : this.multivalue(),
			reversed : this.reversed(),
			selectOnNavigation : this.selectOnNavigation(),
			separator : this.separator(),
			hasDownArrow : this.hasDownArrow(),
			keyHandler : this.keyHandler(),
			// 属性
			valueField : this.valueField(),
			textField : this.textField(),
			groupField : this.groupField(),
			groupFormatter : this.groupFormatter(),
			mode : this.mode(),
			url : this.url(),
			data : this.data(),
			limitToList : this.limitToList(),
			showItemIcon : this.showItemIcon(),
			groupPosition : this.groupPosition(),
			filter : this.filter(),
			formatter : this.formatter(),
			loadFilter : this.loadFilter(),

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Panel继承事件
			onBeforeLoad : this.onBeforeLoad(),
			onLoad : this.onLoad(),
			onLoadError : this.onLoadError(),
			onBeforeOpen : this.onBeforeOpen(),
			onOpen : this.onOpen(),
			onBeforeClose : this.onBeforeClose(),
			onClose : this.onClose(),
			onBeforeDestroy : this.onBeforeDestroy(),
			onBeforeCollapse : this.onBeforeCollapse(),
			onCollapse : this.onCollapse(),
			onBeforeExpand : this.onBeforeExpand(),
			onExpand : this.onExpand(),
			onMove : this.onMove(),
			onMaximize : this.onMaximize(),
			onRestore : this.onRestore(),
			onMinimize : this.onMinimize(),
			// Combo继承事件
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel(),
			// 事件
			onLoadSuccess : this.onLoadSuccess(),
			onSelect : this.onSelect(),
			onUnselect : this.onUnselect()
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

		return this.$jQuery().combobox("options");
	};

	/**
	 * 获取数据
	 * 
	 * @returns {array}
	 */
	Constructor.prototype.getData = function() {

		return this.$jQuery().combobox("getData");
	};

	/**
	 * 加载数据
	 * 
	 * @param data{array}
	 * @returns
	 */
	Constructor.prototype.loadData = function(data) {

		return this.$jQuery().combobox("loadData", data);
	};

	/**
	 * 远程加载数据
	 * 
	 * @param url{string}
	 * @returns
	 */
	Constructor.prototype.reload = function(url) {

		return this.$jQuery().combobox("reload", url);
	};

	/**
	 * 设置值集合
	 * 
	 * @param values{array}
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return this.$jQuery().combobox("setValues", values);
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().combobox("setValue", value);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().combobox("clear");
	};

	/**
	 * 选择某值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.select = function(value) {

		return this.$jQuery().combobox("select", value);
	};

	/**
	 * 取消选择某值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.unselect = function(value) {

		return this.$jQuery().combobox("unselect", value);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	ComboTree
 * @package core.html.easyui.form
 * @desc	下拉框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.ComboTree(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.Combo
 * 			core.html.easyui.datagrid.Tree
 * 
 * @method	继承core.html.easyui.form.Combo所有方法
 * 			继承core.html.easyui.datagrid.Tree所有方法
 * 			string/core.html.easyui.form.ComboTree		textField(string textField)			获取/设置
 * 			core.html.easyui.form.ComboTree				init()								初始化组件模板
 * 			object										options()
 * 			object										tree()	
 * 			void										loadData(array data)
 * 			void										reload(string url)
 * 			void										clear()
 * 			void										setValues(array values)				设置值集合
 * 			void										setValue(string value)
 * 
 * @date	2018年5月4日 09:07:22
 */
core.html.easyui.form.ComboTree = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.Combo.call(this, arguments[0]);
		core.html.easyui.datagrid.Tree.call(this, arguments[0]);
		// 默认参数修改
		this.editable($.fn.combotree.defaults.editable);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var textField = $.fn.combotree.defaults.textField;

		/**
		 * 获取/设置
		 * 
		 * @param textField{string}
		 * @returns {string/core.html.easyui.form.ComboTree}
		 */
		this.textField = function() {

			switch (arguments.length) {
			case 0:
				return textField;
			default:
				textField = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.ComboTree}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.ComboTree", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().combotree({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// TextBox继承属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// Panel继承属性
			title : this.title(),
			left : this.left(),
			top : this.top(),
			headerCls : this.headerCls(),
			bodyCls : this.bodyCls(),
			style : this.style(),
			fit : this.fit(),
			border : this.border(),
			doSize : this.doSize(),
			noheader : this.noheader(),
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
			// Combo继承属性
			panelWidth : this.panelWidth(),
			panelHeight : this.panelHeight(),
			panelMinWidth : this.panelMinWidth(),
			panelMaxWidth : this.panelMaxWidth(),
			panelMinHeight : this.panelMinHeight(),
			panelMaxHeight : this.panelMaxHeight(),
			panelAlign : this.panelAlign(),
			multiple : this.multiple(),
			multivalue : this.multivalue(),
			reversed : this.reversed(),
			selectOnNavigation : this.selectOnNavigation(),
			separator : this.separator(),
			hasDownArrow : this.hasDownArrow(),
			keyHandler : this.keyHandler(),
			// Draggable继承属性
			proxy : this.proxy(),
			revert : this.revert(),
			cursor : this.cursor(),
			handle : this.handle(),
			edge : this.edge(),
			axis : this.axis(),
			// Droppable继承属性
			accept : this.accept(),
			// Tree继承属性
			url : this.url(),
			animate : this.animate(),
			checkbox : this.checkbox(),
			cascadeCheck : this.cascadeCheck(),
			onlyLeafCheck : this.onlyLeafCheck(),
			lines : this.lines(),
			dnd : this.dnd(),
			data : this.data(),
			formatter : this.formatter(),
			filter : this.filter(),
			loadFilter : this.loadFilter(),
			// 属性
			textField : this.textField(),

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Panel继承事件
			onBeforeLoad : this.onBeforeLoad(),
			onLoad : this.onLoad(),
			onLoadError : this.onLoadError(),
			onBeforeOpen : this.onBeforeOpen(),
			onOpen : this.onOpen(),
			onBeforeClose : this.onBeforeClose(),
			onClose : this.onClose(),
			onBeforeDestroy : this.onBeforeDestroy(),
			onBeforeCollapse : this.onBeforeCollapse(),
			onCollapse : this.onCollapse(),
			onBeforeExpand : this.onBeforeExpand(),
			onExpand : this.onExpand(),
			onMove : this.onMove(),
			onMaximize : this.onMaximize(),
			onRestore : this.onRestore(),
			onMinimize : this.onMinimize(),
			// Combo继承事件
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel(),
			// Draggable继承事件
			onBeforeDrag : this.onBeforeDrag(),
			onStartDrag : this.onStartDrag(),
			onDrag : this.onDrag(),
			onEndDrag : this.onEndDrag(),
			onStopDrag : this.onStopDrag(),
			// Droppable继承事件
			onDragOver : this.onDragOver(),
			onDragLeave : this.onDragLeave(),
			onDrop : this.onDrop(),
			// Tree继承事件
			onDblClick : this.onDblClick(),
			onLoadSuccess : this.onLoadSuccess(),
			onBeforeCheck : this.onBeforeCheck(),
			onCheck : this.onCheck(),
			onBeforeSelect : this.onBeforeSelect(),
			onSelect : this.onSelect(),
			onContextMenu : this.onContextMenu(),
			onBeforeDrop : this.onBeforeDrop(),
			onBeforeEdit : this.onBeforeEdit(),
			onAfterEdit : this.onAfterEdit(),
			onCancelEdit : this.onCancelEdit()
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

		return this.$jQuery().combotree("options");
	};
	
	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.tree = function() {

		return this.$jQuery().combotree("tree");
	};

	/**
	 * 
	 * @param data{array}
	 * @returns
	 */
	Constructor.prototype.loadData = function(data) {

		return this.$jQuery().combotree("loadData", data);
	};

	/**
	 * 
	 * @param url{string}
	 * @returns
	 */
	Constructor.prototype.reload = function(url) {

		return this.$jQuery().combotree("reload", url);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().combotree("clear");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().combotree("setValue", value);
	};

	/**
	 * 设置值集合
	 * 
	 * @param values{array}
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return this.$jQuery().combotree("setValues", values);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	ComboGrid
 * @package core.html.easyui.form
 * @desc	下拉框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.ComboGrid(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.Combo
 * 			core.html.easyui.datagrid.DataGrid
 * 
 * @method	继承core.html.easyui.form.Combo所有方法
 * 			继承core.html.easyui.datagrid.DataGrid所有方法
 * 			string/core.html.easyui.form.ComboGrid		textField(string textField)			获取/设置
 * 			string/core.html.easyui.form.ComboGrid		mode(string mode)					获取/设置
 * 			function/core.html.easyui.form.ComboGrid	filter(function filter)				获取/设置
 * 			core.html.easyui.form.ComboGrid				init()								初始化组件模板
 * 			object										options()
 * 			object										grid()	
 * 			void										setValues(array values)				设置值集合
 * 			void										setValue(string value)
 * 			void										clear()
 * 
 * @date	2018年5月4日 10:17:42
 */
core.html.easyui.form.ComboGrid = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.Combo.call(this, arguments[0]);
		core.html.easyui.datagrid.DataGrid.call(this, arguments[0]);
		// 默认参数修改
		this.loadMsg($.fn.combogrid.defaults.loadMsg);
		this.idField($.fn.combogrid.defaults.idField);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var textField = $.fn.combogrid.defaults.textField;
		/**
		 * 
		 */
		var mode = $.fn.combogrid.defaults.mode;
		/**
		 * 
		 */
		var filter = $.fn.combogrid.defaults.filter;

		/**
		 * 获取/设置
		 * 
		 * @param textField{string}
		 * @returns {string/core.html.easyui.form.ComboGrid}
		 */
		this.textField = function() {

			switch (arguments.length) {
			case 0:
				return textField;
			default:
				textField = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param mode{string}
		 * @returns {string/core.html.easyui.form.ComboGrid}
		 */
		this.mode = function() {

			switch (arguments.length) {
			case 0:
				return mode;
			default:
				mode = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param filter{function}
		 * @returns {function/core.html.easyui.form.ComboGrid}
		 */
		this.filter = function() {

			switch (arguments.length) {
			case 0:
				return filter;
			default:
				filter = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.ComboGrid}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.ComboGrid", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().combogrid({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// TextBox继承属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// Panel继承属性
			title : this.title(),
			left : this.left(),
			top : this.top(),
			headerCls : this.headerCls(),
			bodyCls : this.bodyCls(),
			style : this.style(),
			fit : this.fit(),
			border : this.border(),
			doSize : this.doSize(),
			noheader : this.noheader(),
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
			// Combo继承属性
			panelWidth : this.panelWidth(),
			panelHeight : this.panelHeight(),
			panelMinWidth : this.panelMinWidth(),
			panelMaxWidth : this.panelMaxWidth(),
			panelMinHeight : this.panelMinHeight(),
			panelMaxHeight : this.panelMaxHeight(),
			panelAlign : this.panelAlign(),
			multiple : this.multiple(),
			multivalue : this.multivalue(),
			reversed : this.reversed(),
			selectOnNavigation : this.selectOnNavigation(),
			separator : this.separator(),
			hasDownArrow : this.hasDownArrow(),
			keyHandler : this.keyHandler(),
			// Resizable继承属性
			handles : this.handles(),
			minWidth : this.minWidth(),
			minHeight : this.minHeight(),
			maxWidth : this.maxWidth(),
			maxHeight : this.maxHeight(),
			edge : this.edge(),
			// Pagination继承属性
			total : this.total(),
			pageSize : this.pageSize(),
			pageNumber : this.pageNumber(),
			pageList : this.pageList(),
			loading : this.loading(),
			buttons : this.buttons(),
			layout : this.layout(),
			links : this.links(),
			showPageList : this.showPageList(),
			showRefresh : this.showRefresh(),
			showPageInfo : this.showPageInfo(),
			beforePageText : this.beforePageText(),
			afterPageText : this.afterPageText(),
			displayMsg : this.displayMsg(),
			// DataGrid属性
			columns : this.columns(),
			frozenColumns : this.frozenColumns(),
			fitColumns : this.fitColumns(),
			resizeHandle : this.resizeHandle(),
			resizeEdge : this.resizeEdge(),
			autoRowHeight : this.autoRowHeight(),
			toolbar : this.toolbar(),
			striped : this.striped(),
			nowrap : this.nowrap(),
			idField : this.idField(),
			url : this.url(),
			data : this.data(),
			loadMsg : this.loadMsg(),
			emptyMsg : this.emptyMsg(),
			pagination : this.pagination(),
			rownumbers : this.rownumbers(),
			singleSelect : this.singleSelect(),
			ctrlSelect : this.ctrlSelect(),
			checkOnSelect : this.checkOnSelect(),
			selectOnCheck : this.selectOnCheck(),
			scrollOnSelect : this.scrollOnSelect(),
			pagePosition : this.pagePosition(),
			sortName : this.sortName(),
			sortOrder : this.sortOrder(),
			multiSort : this.multiSort(),
			remoteSort : this.remoteSort(),
			showHeader : this.showHeader(),
			showFooter : this.showFooter(),
			scrollbarSize : this.scrollbarSize(),
			rownumberWidth : this.rownumberWidth(),
			editorHeight : this.editorHeight(),
			rowStyler : this.rowStyler(),
			loadFilter : this.loadFilter(),
			editors : this.editors(),
			view : this.view(),
			// 属性
			textField : this.textField(),
			mode : this.mode(),
			filter : this.filter(),
			
			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Panel继承事件
			onBeforeLoad : this.onBeforeLoad(),
			onLoad : this.onLoad(),
			onLoadError : this.onLoadError(),
			onBeforeOpen : this.onBeforeOpen(),
			onOpen : this.onOpen(),
			onBeforeClose : this.onBeforeClose(),
			onClose : this.onClose(),
			onBeforeDestroy : this.onBeforeDestroy(),
			onBeforeCollapse : this.onBeforeCollapse(),
			onCollapse : this.onCollapse(),
			onBeforeExpand : this.onBeforeExpand(),
			onExpand : this.onExpand(),
			onMove : this.onMove(),
			onMaximize : this.onMaximize(),
			onRestore : this.onRestore(),
			onMinimize : this.onMinimize(),
			// Combo继承事件
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel(),
			// Resizable继承事件
			onStartResize : this.onStartResize(),
			onStopResize : this.onStopResize(),
			// Pagination继承事件
			onSelectPage : this.onSelectPage(),
			onBeforeRefresh : this.onBeforeRefresh(),
			onRefresh : this.onRefresh(),
			onChangePageSize : this.onChangePageSize(),
			// DataGrid继承事件
			onLoadSuccess : this.onLoadSuccess(),
			onClickRow : this.onClickRow(),
			onDblClickRow : this.onDblClickRow(),
			onClickCell : this.onClickCell(),
			onDblClickCell : this.onDblClickCell(),
			onBeforeSortColumn : this.onBeforeSortColumn(),
			onSortColumn : this.onSortColumn(),
			onResizeColumn : this.onResizeColumn(),
			onBeforeSelect : this.onBeforeSelect(),
			onSelect : this.onSelect(),
			onBeforeUnselect : this.onBeforeUnselect(),
			onUnselect : this.onUnselect(),
			onSelectAll : this.onSelectAll(),
			onUnselectAll : this.onUnselectAll(),
			onBeforeCheck : this.onBeforeCheck(),
			onCheck : this.onCheck(),
			onBeforeUncheck : this.onBeforeUncheck(),
			onUncheck : this.onUncheck(),
			onCheckAll : this.onCheckAll(),
			onUncheckAll : this.onUncheckAll(),
			onBeforeEdit : this.onBeforeEdit(),
			onBeginEdit : this.onBeginEdit(),
			onEndEdit : this.onEndEdit(),
			onAfterEdit : this.onAfterEdit(),
			onCancelEdit : this.onCancelEdit(),
			onHeaderContextMenu : this.onHeaderContextMenu(),
			onRowContextMenu : this.onRowContextMenu()
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

		return this.$jQuery().combogrid("options");
	};
	
	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.grid = function() {

		return this.$jQuery().combogrid("grid");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().combogrid("setValue", value);
	};

	/**
	 * 设置值集合
	 * 
	 * @param values{array}
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return this.$jQuery().combogrid("setValues", values);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().combogrid("clear");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	ComboTreeGrid
 * @package core.html.easyui.form
 * @desc	下拉框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.ComboTreeGrid(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.Combo
 * 			core.html.easyui.datagrid.DataGrid
 * 
 * @method	继承core.html.easyui.form.Combo所有方法
 * 			继承core.html.easyui.datagrid.TreeGrid所有方法
 * 			string/core.html.easyui.form.ComboTreeGrid		textField(string textField)			获取/设置
 * 			string/core.html.easyui.form.ComboTreeGrid		limitToGrid(boolean limitToGrid)	获取/设置
 * 			core.html.easyui.form.ComboTreeGrid				init()								初始化组件模板
 * 			object											options()
 * 			object											grid()	
 * 			void											setValues(array values)				设置值集合
 * 			void											setValue(string value)
 * 			void											clear()
 * 
 * @date	2018年5月4日 10:48:56
 */
core.html.easyui.form.ComboTreeGrid = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.Combo.call(this, arguments[0]);
		core.html.easyui.datagrid.TreeGrid.call(this, arguments[0]);
		// 默认参数修改
		this.idField($.fn.combotreegrid.defaults.idField);
		this.treeField($.fn.combotreegrid.defaults.treeField);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var textField = $.fn.combotreegrid.defaults.textField;
		/**
		 * 
		 */
		var limitToGrid = $.fn.combotreegrid.defaults.limitToGrid;

		/**
		 * 获取/设置
		 * 
		 * @param textField{string}
		 * @returns {string/core.html.easyui.form.ComboTreeGrid}
		 */
		this.textField = function() {

			switch (arguments.length) {
			case 0:
				return textField;
			default:
				textField = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param limitToGrid{boolean}
		 * @returns {boolean/core.html.easyui.form.ComboTreeGrid}
		 */
		this.limitToGrid = function() {

			switch (arguments.length) {
			case 0:
				return limitToGrid;
			default:
				limitToGrid = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.ComboTreeGrid}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.ComboTreeGrid", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().combotreegrid({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// TextBox继承属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// Panel继承属性
			title : this.title(),
			left : this.left(),
			top : this.top(),
			headerCls : this.headerCls(),
			bodyCls : this.bodyCls(),
			style : this.style(),
			fit : this.fit(),
			border : this.border(),
			doSize : this.doSize(),
			noheader : this.noheader(),
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
			// Combo继承属性
			panelWidth : this.panelWidth(),
			panelHeight : this.panelHeight(),
			panelMinWidth : this.panelMinWidth(),
			panelMaxWidth : this.panelMaxWidth(),
			panelMinHeight : this.panelMinHeight(),
			panelMaxHeight : this.panelMaxHeight(),
			panelAlign : this.panelAlign(),
			multiple : this.multiple(),
			multivalue : this.multivalue(),
			reversed : this.reversed(),
			selectOnNavigation : this.selectOnNavigation(),
			separator : this.separator(),
			hasDownArrow : this.hasDownArrow(),
			keyHandler : this.keyHandler(),
			// Resizable继承属性
			handles : this.handles(),
			minWidth : this.minWidth(),
			minHeight : this.minHeight(),
			maxWidth : this.maxWidth(),
			maxHeight : this.maxHeight(),
			edge : this.edge(),
			// Pagination继承属性
			total : this.total(),
			pageSize : this.pageSize(),
			pageNumber : this.pageNumber(),
			pageList : this.pageList(),
			loading : this.loading(),
			buttons : this.buttons(),
			layout : this.layout(),
			links : this.links(),
			showPageList : this.showPageList(),
			showRefresh : this.showRefresh(),
			showPageInfo : this.showPageInfo(),
			beforePageText : this.beforePageText(),
			afterPageText : this.afterPageText(),
			displayMsg : this.displayMsg(),
			// DataGrid属性
			columns : this.columns(),
			frozenColumns : this.frozenColumns(),
			fitColumns : this.fitColumns(),
			resizeHandle : this.resizeHandle(),
			resizeEdge : this.resizeEdge(),
			autoRowHeight : this.autoRowHeight(),
			toolbar : this.toolbar(),
			striped : this.striped(),
			nowrap : this.nowrap(),
			idField : this.idField(),
			url : this.url(),
			data : this.data(),
			loadMsg : this.loadMsg(),
			emptyMsg : this.emptyMsg(),
			pagination : this.pagination(),
			rownumbers : this.rownumbers(),
			singleSelect : this.singleSelect(),
			ctrlSelect : this.ctrlSelect(),
			checkOnSelect : this.checkOnSelect(),
			selectOnCheck : this.selectOnCheck(),
			scrollOnSelect : this.scrollOnSelect(),
			pagePosition : this.pagePosition(),
			sortName : this.sortName(),
			sortOrder : this.sortOrder(),
			multiSort : this.multiSort(),
			remoteSort : this.remoteSort(),
			showHeader : this.showHeader(),
			showFooter : this.showFooter(),
			scrollbarSize : this.scrollbarSize(),
			rownumberWidth : this.rownumberWidth(),
			editorHeight : this.editorHeight(),
			rowStyler : this.rowStyler(),
			loadFilter : this.loadFilter(),
			editors : this.editors(),
			view : this.view(),
			// TreeGrid继承属性
			treeField : this.treeField(),
			animate : this.animate(),
			checkbox : this.checkbox(),
			cascadeCheck : this.cascadeCheck(),
			onlyLeafCheck : this.onlyLeafCheck(),
			lines : this.lines(),
			// 属性
			textField : this.textField(),
			limitToGrid : this.limitToGrid(),
			
			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Panel继承事件
			onBeforeLoad : this.onBeforeLoad(),
			onLoad : this.onLoad(),
			onLoadError : this.onLoadError(),
			onBeforeOpen : this.onBeforeOpen(),
			onOpen : this.onOpen(),
			onBeforeClose : this.onBeforeClose(),
			onClose : this.onClose(),
			onBeforeDestroy : this.onBeforeDestroy(),
			onBeforeCollapse : this.onBeforeCollapse(),
			onCollapse : this.onCollapse(),
			onBeforeExpand : this.onBeforeExpand(),
			onExpand : this.onExpand(),
			onMove : this.onMove(),
			onMaximize : this.onMaximize(),
			onRestore : this.onRestore(),
			onMinimize : this.onMinimize(),
			// Combo继承事件
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel(),
			// Resizable继承事件
			onStartResize : this.onStartResize(),
			onStopResize : this.onStopResize(),
			// Pagination继承事件
			onSelectPage : this.onSelectPage(),
			onBeforeRefresh : this.onBeforeRefresh(),
			onRefresh : this.onRefresh(),
			onChangePageSize : this.onChangePageSize(),
			// DataGrid继承事件
			onLoadSuccess : this.onLoadSuccess(),
			onClickRow : this.onClickRow(),
			onDblClickRow : this.onDblClickRow(),
			onClickCell : this.onClickCell(),
			onDblClickCell : this.onDblClickCell(),
			onBeforeSortColumn : this.onBeforeSortColumn(),
			onSortColumn : this.onSortColumn(),
			onResizeColumn : this.onResizeColumn(),
			onBeforeSelect : this.onBeforeSelect(),
			onSelect : this.onSelect(),
			onBeforeUnselect : this.onBeforeUnselect(),
			onUnselect : this.onUnselect(),
			onSelectAll : this.onSelectAll(),
			onUnselectAll : this.onUnselectAll(),
			onBeforeCheck : this.onBeforeCheck(),
			onCheck : this.onCheck(),
			onBeforeUncheck : this.onBeforeUncheck(),
			onUncheck : this.onUncheck(),
			onCheckAll : this.onCheckAll(),
			onUncheckAll : this.onUncheckAll(),
			onBeforeEdit : this.onBeforeEdit(),
			onBeginEdit : this.onBeginEdit(),
			onEndEdit : this.onEndEdit(),
			onAfterEdit : this.onAfterEdit(),
			onCancelEdit : this.onCancelEdit(),
			onHeaderContextMenu : this.onHeaderContextMenu(),
			onRowContextMenu : this.onRowContextMenu()
			// 事件
			onBeforeCheckNode : this.onBeforeCheckNode(),
			onCheckNode : this.onCheckNode(),
			onContextMenu : this.onContextMenu()
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

		return this.$jQuery().combotreegrid("options");
	};
	
	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.grid = function() {

		return this.$jQuery().combotreegrid("grid");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().combotreegrid("setValue", value);
	};

	/**
	 * 设置值集合
	 * 
	 * @param values{array}
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return this.$jQuery().combotreegrid("setValues", values);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().combotreegrid("clear");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	TagBox
 * @package	core.html.easyui.form
 * @desc	标签模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.TagBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.ComboBox
 * 
 * @method	继承core.html.easyui.form.ComboBox所有方法
 * 			function/core.html.easyui.form.TagBox	tagFormatter(function tagFormatter)				获取/设置格式化值
 * 			function/core.html.easyui.form.TagBox	tagStyler(function tagStyler)					获取/设置样式
 * 			function/core.html.easyui.form.TagBox	onClickTag(function onClickTag)					获取/设置点击事件
 * 			function/core.html.easyui.form.TagBox	onBeforeRemoveTag(function onBeforeRemoveTag)	获取/设置移除前事件
 * 			function/core.html.easyui.form.TagBox	onRemoveTag(function onRemoveTag)				获取/设置移除事件
 *			core.html.easyui.form.TagBox			init()											初始化组件模板
 * 
 * @date	2018年5月4日 10:57:32
 */
core.html.easyui.form.TagBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.TagBox.superClass.constructor.call(this, this, arguments[0]);
		// 修改默认参数
		this.hasDownArrow($.fn.tagbox.defaults.hasDownArrow);

		/**
		 * 属性
		 */
		/**
		 * 格式化值
		 */
		var tagFormatter = $.fn.tagbox.defaults.tagFormatter;
		/**
		 * 样式
		 */
		var tagStyler = $.fn.tagbox.defaults.tagStyler;

		/**
		 * 事件
		 */
		/**
		 * 点击事件
		 */
		var onClickTag = $.fn.tagbox.defaults.onClickTag;
		/**
		 * 移除前事件
		 */
		var onBeforeRemoveTag = $.fn.tagbox.defaults.onBeforeRemoveTag;
		/**
		 * 移除事件
		 */
		var onRemoveTag = $.fn.tagbox.defaults.onRemoveTag;

		/**
		 * 获取/设置格式化值
		 * 
		 * @param tagFormatter{function}
		 * @returns {function/core.html.easyui.form.TagBox}
		 */
		this.tagFormatter = function() {

			switch (arguments.length) {
			case 0:
				return tagFormatter;
			default:
				tagFormatter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置样式
		 * 
		 * @param tagStyler{function}
		 * @returns {function/core.html.easyui.form.TagBox}
		 */
		this.tagStyler = function() {

			switch (arguments.length) {
			case 0:
				return tagStyler;
			default:
				tagStyler = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置点击事件
		 * 
		 * @param onClickTag{function}
		 * @returns {function/core.html.easyui.form.TagBox}
		 */
		this.onClickTag = function() {

			switch (arguments.length) {
			case 0:
				return onClickTag;
			default:
				onClickTag = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置移除前事件
		 * 
		 * @param onBeforeRemoveTag{function}
		 * @returns {function/core.html.easyui.form.TagBox}
		 */
		this.onBeforeRemoveTag = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeRemoveTag;
			default:
				onBeforeRemoveTag = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置移除事件
		 * 
		 * @param onRemoveTag{function}
		 * @returns {function/core.html.easyui.form.TagBox}
		 */
		this.onRemoveTag = function() {

			switch (arguments.length) {
			case 0:
				return onRemoveTag;
			default:
				onRemoveTag = arguments[0];
				return this;
			}
		};

	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.form.ComboBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.TagBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.TagBox", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().tagbox({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// TextBox继承属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// Panel继承属性
			title : this.title(),
			left : this.left(),
			top : this.top(),
			headerCls : this.headerCls(),
			bodyCls : this.bodyCls(),
			style : this.style(),
			fit : this.fit(),
			border : this.border(),
			doSize : this.doSize(),
			noheader : this.noheader(),
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
			// Combo继承属性
			panelWidth : this.panelWidth(),
			panelHeight : this.panelHeight(),
			panelMinWidth : this.panelMinWidth(),
			panelMaxWidth : this.panelMaxWidth(),
			panelMinHeight : this.panelMinHeight(),
			panelMaxHeight : this.panelMaxHeight(),
			panelAlign : this.panelAlign(),
			multiple : this.multiple(),
			multivalue : this.multivalue(),
			reversed : this.reversed(),
			selectOnNavigation : this.selectOnNavigation(),
			separator : this.separator(),
			hasDownArrow : this.hasDownArrow(),
			keyHandler : this.keyHandler(),
			// ComboBox继承属性
			valueField : this.valueField(),
			textField : this.textField(),
			groupField : this.groupField(),
			groupFormatter : this.groupFormatter(),
			mode : this.mode(),
			url : this.url(),
			data : this.data(),
			limitToList : this.limitToList(),
			showItemIcon : this.showItemIcon(),
			groupPosition : this.groupPosition(),
			filter : this.filter(),
			formatter : this.formatter(),
			loadFilter : this.loadFilter(),
			// 属性
			tagFormatter : this.tagFormatter(),
			tagStyler : this.tagStyler(),

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Panel继承事件
			onBeforeLoad : this.onBeforeLoad(),
			onLoad : this.onLoad(),
			onLoadError : this.onLoadError(),
			onBeforeOpen : this.onBeforeOpen(),
			onOpen : this.onOpen(),
			onBeforeClose : this.onBeforeClose(),
			onClose : this.onClose(),
			onBeforeDestroy : this.onBeforeDestroy(),
			onBeforeCollapse : this.onBeforeCollapse(),
			onCollapse : this.onCollapse(),
			onBeforeExpand : this.onBeforeExpand(),
			onExpand : this.onExpand(),
			onMove : this.onMove(),
			onMaximize : this.onMaximize(),
			onRestore : this.onRestore(),
			onMinimize : this.onMinimize(),
			// Combo继承事件
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel(),
			// ComboBox继承事件
			onLoadSuccess : this.onLoadSuccess(),
			onSelect : this.onSelect(),
			onUnselect : this.onUnselect(),
			// 事件
			onClickTag : this.onClickTag(),
			onBeforeRemoveTag : this.onBeforeRemoveTag(),
			onRemoveTag : this.onRemoveTag()
		});

		return this;
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	NumberBox
 * @package core.html.easyui.form
 * @desc	数字框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.NumberBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 
 * @method	继承core.html.easyui.form.NumberBox所有方法
 * 			number/core.html.easyui.form.NumberBox			min(number min)								获取/设置最小值
 * 			number/core.html.easyui.form.NumberBox			max(number max)								获取/设置最大值
 * 			number/core.html.easyui.form.NumberBox			precision(number precision)					获取/设置精度
 * 			string/core.html.easyui.form.NumberBox			decimalSeparator(string decimalSeparator)	获取/设置分隔符
 * 			string/core.html.easyui.form.NumberBox			groupSeparator(string groupSeparator)		获取/设置分组分隔符
 * 			string/core.html.easyui.form.NumberBox			prefix(string prefix)						获取/设置前缀字符串
 * 			string/core.html.easyui.form.NumberBox			suffix(string suffix)						获取/设置后缀字符串
 * 			function/core.html.easyui.form.NumberBox		filter(function filter)						获取/设置过滤
 * 			function/core.html.easyui.form.NumberBox		formatter(function formatter)				获取/设置格式化
 * 			function/core.html.easyui.form.NumberBox		parser(function parser)						获取/设置解析
 * 			core.html.easyui.form.NumberBox					init()										初始化组件模板
 * 			object											options()
 * 			void											destroy()
 * 			void											disable()
 * 			void											enable()
 * 			void											fix()
 * 			void											setValue(string value)
 * 			string											getValue()
 * 			void											clear()						
 * 			void											reset()
 * 
 * @date	2018年5月4日 11:14:00
 */

core.html.easyui.form.NumberBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.NumberBox.superClass.constructor.call(this, arguments[0]);
		// 修改默认参数
		this.disabled($.fn.numberbox.defaults.disabled);
		this.value($.fn.numberbox.defaults.value);
		this.onChange($.fn.numberbox.defaults.onChange);

		/**
		 * 属性
		 */
		/**
		 * 最小值
		 */
		var min = $.fn.numberbox.defaults.min;
		/**
		 * 最大值
		 */
		var max = $.fn.numberbox.defaults.max;
		/**
		 * 精度
		 */
		var precision = $.fn.numberbox.defaults.precision;
		/**
		 * 分隔符
		 */
		var decimalSeparator = $.fn.numberbox.defaults.decimalSeparator;
		/**
		 * 分组分隔符
		 */
		var groupSeparator = $.fn.numberbox.defaults.groupSeparator;
		/**
		 * 前缀字符串
		 */
		var prefix = $.fn.numberbox.defaults.prefix;
		/**
		 * 后缀字符串
		 */
		var suffix = $.fn.numberbox.defaults.suffix;
		/**
		 * 过滤
		 */
		var filter = $.fn.numberbox.defaults.filter;
		/**
		 * 格式化
		 */
		var formatter = $.fn.numberbox.defaults.formatter;
		/**
		 * 解析
		 */
		var parser = $.fn.numberbox.defaults.parser;

		/**
		 * 获取/设置最小值
		 * 
		 * @param min{number}
		 * @returns {number/core.html.easyui.form.NumberBox}
		 */
		this.min = function() {

			switch (arguments.length) {
			case 0:
				return min;
			default:
				min = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置最大值
		 * 
		 * @param max{number}
		 * @returns {number/core.html.easyui.form.NumberBox}
		 */
		this.max = function() {

			switch (arguments.length) {
			case 0:
				return max;
			default:
				max = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置精度
		 * 
		 * @param precision{number}
		 * @returns {number/core.html.easyui.form.NumberBox}
		 */
		this.precision = function() {

			switch (arguments.length) {
			case 0:
				return precision;
			default:
				precision = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置分隔符
		 * 
		 * @param decimalSeparator{string}
		 * @returns {string/core.html.easyui.form.NumberBox}
		 */
		this.decimalSeparator = function() {

			switch (arguments.length) {
			case 0:
				return decimalSeparator;
			default:
				decimalSeparator = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置分组分隔符
		 * 
		 * @param groupSeparator{string}
		 * @returns {string/core.html.easyui.form.NumberBox}
		 */
		this.groupSeparator = function() {

			switch (arguments.length) {
			case 0:
				return groupSeparator;
			default:
				groupSeparator = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置前缀字符串
		 * 
		 * @param prefix{string}
		 * @returns {string/core.html.easyui.form.NumberBox}
		 */
		this.prefix = function() {

			switch (arguments.length) {
			case 0:
				return prefix;
			default:
				prefix = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置后缀字符串
		 * 
		 * @param suffix{string}
		 * @returns {string/core.html.easyui.form.NumberBox}
		 */
		this.suffix = function() {

			switch (arguments.length) {
			case 0:
				return suffix;
			default:
				suffix = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置过滤
		 * 
		 * @param filter{function}
		 * @returns {function/core.html.easyui.form.NumberBox}
		 */
		this.filter = function() {

			switch (arguments.length) {
			case 0:
				return filter;
			default:
				filter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置格式化
		 * 
		 * @param formatter{function}
		 * @returns {function/core.html.easyui.form.NumberBox}
		 */
		this.formatter = function() {

			switch (arguments.length) {
			case 0:
				return formatter;
			default:
				formatter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置解析
		 * 
		 * @param parser{function}
		 * @returns {function/core.html.easyui.form.NumberBox}
		 */
		this.parser = function() {

			switch (arguments.length) {
			case 0:
				return parser;
			default:
				parser = arguments[0];
				return this;
			}
		};
	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.NumberBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.NumberBox", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().numberbox({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// TextBox继承属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// 属性
			min : this.min(),
			max : this.max(),
			precision : this.precision(),
			decimalSeparator : this.decimalSeparator(),
			groupSeparator : this.groupSeparator(),
			prefix : this.prefix(),
			suffix : this.suffix(),
			filter : this.filter(),
			formatter : this.formatter(),
			parser : this.parser(),

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon()
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

		return this.$jQuery().numberbox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().numberbox("destroy");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().numberbox("disable");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().numberbox("enable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.fix = function() {

		return this.$jQuery().numberbox("fix");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().numberbox("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getValue = function() {

		return this.$jQuery().numberbox("getValue");
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().numberbox("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return this.$jQuery().numberbox("reset");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Calendar
 * @package core.html.easyui.form
 * @desc	工具提示模板
 * @type	类
 * 
 * @constructor core.html.easyui.base.Calendar(string id/object jQuery)
 * 
 * @method	object										$jQuery()									获取/设置jQuery对象
 *			number/core.html.easyui.base.Calendar 		width(number width)							获取/设置
 *			number/core.html.easyui.base.Calendar 		height(number height) 						获取/设置
 *			boolean/core.html.easyui.base.Calendar 		fit(boolean fit) 							获取/设置
 *			boolean/core.html.easyui.base.Calendar 		border(boolean border) 						获取/设置
 *			boolean/core.html.easyui.base.Calendar 		showWeek(boolean showWeek) 					获取/设置
 *			string/core.html.easyui.base.Calendar 		weekNumberHeader(string weekNumberHeader)	获取/设置
 *			function/core.html.easyui.base.Calendar 	getWeekNumber(function getWeekNumber) 		获取/设置
 *			number/core.html.easyui.base.Calendar 		firstDay(number firstDay) 					获取/设置
 *			array/core.html.easyui.base.Calendar 		weeks(array weeks) 							获取/设置
 *			array/core.html.easyui.base.Calendar 		months(array months) 						获取/设置
 *			number/core.html.easyui.base.Calendar 		year(number year) 							获取/设置
 *			number/core.html.easyui.base.Calendar 		month(number month) 						获取/设置
 *			date/core.html.easyui.base.Calendar 		current(date current)						获取/设置
 *			function/core.html.easyui.base.Calendar 	formatter(function formatter) 				获取/设置
 *			function/core.html.easyui.base.Calendar 	styler(function styler) 					获取/设置
 *			function/core.html.easyui.base.Calendar 	validator(function validator) 				获取/设置
 *			function/core.html.easyui.base.Calendar 	onSelect(function onSelect) 				获取/设置
 *			function/core.html.easyui.base.Calendar 	onChange(function onChange) 				获取/设置
 *			core.html.easyui.base.Calendar 				init() 										初始化组件模板
 *			object										options()
 *			void										resize()									
 *			void										moveTo(date date)							
 * 
 * @date	2018年5月4日 13:29:14
 */
core.html.easyui.form.Calendar = (function() {

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
		 * 
		 */
		var width = $.fn.calendar.defaults.width;
		/**
		 * 
		 */
		var height = $.fn.calendar.defaults.height;
		/**
		 * 
		 */
		var fit = $.fn.calendar.defaults.fit;
		/**
		 * 
		 */
		var border = $.fn.calendar.defaults.border;
		/**
		 * 
		 */
		var showWeek = $.fn.calendar.defaults.showWeek;
		/**
		 * 
		 */
		var weekNumberHeader = $.fn.calendar.defaults.weekNumberHeader;
		/**
		 * 
		 */
		var getWeekNumber = $.fn.calendar.defaults.getWeekNumber;
		/**
		 * 
		 */
		var firstDay = $.fn.calendar.defaults.firstDay;
		/**
		 * 
		 */
		var weeks = $.fn.calendar.defaults.weeks;
		/**
		 * 
		 */
		var months = $.fn.calendar.defaults.months;
		/**
		 * 
		 */
		var year = $.fn.calendar.defaults.year;
		/**
		 * 
		 */
		var month = $.fn.calendar.defaults.month;
		/**
		 * 
		 */
		var current = $.fn.calendar.defaults.current;
		/**
		 * 
		 */
		var formatter = $.fn.calendar.defaults.formatter;
		/**
		 * 
		 */
		var styler = $.fn.calendar.defaults.styler;
		/**
		 * 
		 */
		var validator = $.fn.calendar.defaults.validator;

		/**
		 * 事件
		 */
		/**
		 * 
		 */
		var onSelect = $.fn.calendar.defaults.onSelect;
		/**
		 * 
		 */
		var onChange = $.fn.calendar.defaults.onChange;

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.form.Calendar", "构造参数异常", "非字符或jQuery对象");
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
		 * @param width{number}
		 * @returns {number/core.html.easyui.base.Calendar}
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
		 * 获取/设置
		 * 
		 * @param height{number}
		 * @returns {number/core.html.easyui.base.Calendar}
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
		 * 获取/设置
		 * 
		 * @param fit{boolean}
		 * @returns {boolean/core.html.easyui.base.Calendar}
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
		 * @param border{boolean}
		 * @returns {boolean/core.html.easyui.base.Calendar}
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
		 * 获取/设置
		 * 
		 * @param showWeek{boolean}
		 * @returns {boolean/core.html.easyui.base.Calendar}
		 */
		this.showWeek = function() {

			switch (arguments.length) {
			case 0:
				return showWeek;
			default:
				showWeek = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param weekNumberHeader{string}
		 * @returns {string/core.html.easyui.base.Calendar}
		 */
		this.weekNumberHeader = function() {

			switch (arguments.length) {
			case 0:
				return weekNumberHeader;
			default:
				weekNumberHeader = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param getWeekNumber{function}
		 * @returns {function/core.html.easyui.base.Calendar}
		 */
		this.getWeekNumber = function() {

			switch (arguments.length) {
			case 0:
				return getWeekNumber;
			default:
				getWeekNumber = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param firstDay{number}
		 * @returns {number/core.html.easyui.base.Calendar}
		 */
		this.firstDay = function() {

			switch (arguments.length) {
			case 0:
				return firstDay;
			default:
				firstDay = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param weeks{array}
		 * @returns {array/core.html.easyui.base.Calendar}
		 */
		this.weeks = function() {

			switch (arguments.length) {
			case 0:
				return weeks;
			default:
				weeks = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param months{array}
		 * @returns {array/core.html.easyui.base.Calendar}
		 */
		this.months = function() {

			switch (arguments.length) {
			case 0:
				return months;
			default:
				months = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param year{number}
		 * @returns {number/core.html.easyui.base.Calendar}
		 */
		this.year = function() {

			switch (arguments.length) {
			case 0:
				return year;
			default:
				year = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param month{number}
		 * @returns {number/core.html.easyui.base.Calendar}
		 */
		this.month = function() {

			switch (arguments.length) {
			case 0:
				return month;
			default:
				month = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param current{date}
		 * @returns {date/core.html.easyui.base.Calendar}
		 */
		this.current = function() {

			switch (arguments.length) {
			case 0:
				return current;
			default:
				current = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param formatter{function}
		 * @returns {function/core.html.easyui.base.Calendar}
		 */
		this.formatter = function() {

			switch (arguments.length) {
			case 0:
				return formatter;
			default:
				formatter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param styler{function}
		 * @returns {function/core.html.easyui.base.Calendar}
		 */
		this.styler = function() {

			switch (arguments.length) {
			case 0:
				return styler;
			default:
				styler = arguments[0];
				return this;
			}
		};
		
		/**
		 * 获取/设置
		 * 
		 * @param validator{function}
		 * @returns {function/core.html.easyui.base.Calendar}
		 */
		this.validator = function() {

			switch (arguments.length) {
			case 0:
				return validator;
			default:
				validator = arguments[0];
				return this;
			}
		};
		
		/**
		 * 获取/设置
		 * 
		 * @param onSelect{function}
		 * @returns {function/core.html.easyui.base.Calendar}
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
		 * 获取/设置
		 * 
		 * @param onChange{function}
		 * @returns {function/core.html.easyui.base.Calendar}
		 */
		this.onChange = function() {

			switch (arguments.length) {
			case 0:
				return onChange;
			default:
				onChange = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.Calendar}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.Calendar", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().calendar({
			// 属性
			width : this.width(),
			height : this.height(),
			fit : this.fit(),
			border : this.border(),
			showWeek : this.showWeek(),
			weekNumberHeader : this.weekNumberHeader(),
			getWeekNumber : this.getWeekNumber(),
			firstDay : this.firstDay(),
			weeks : this.weeks(),
			months : this.months(),
			year : this.year(),
			month : this.month(),
			current : this.current(),
			formatter : this.formatter(),
			styler : this.styler(),
			validator : this.validator(),

			// 事件
			onSelect : this.onSelect(),
			onChange : this.onChange()
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

		return this.$jQuery().calendar("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function() {

		return this.$jQuery().calendar("resize");
	};

	/**
	 * 显示
	 * 
	 * @param date{date}
	 * @returns
	 */
	Constructor.prototype.moveTo = function(date) {

		return this.$jQuery().calendar("moveTo", date);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	DateBox
 * @package core.html.easyui.form
 * @desc	日期框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.DateBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.Combo
 * 			core.html.easyui.form.Calendar
 * 
 * @method	继承core.html.easyui.form.Combo所有方法
 * 			继承core.html.easyui.form.Calendar所有方法
 * 			string/core.html.easyui.form.DateBox		currentText(string )		获取/设置今天按钮
 * 			string/core.html.easyui.form.DateBox		closeText(string )			获取/设置关闭按钮
 * 			string/core.html.easyui.form.DateBox		okText(string )				获取/设置确认按钮
 * 			array/core.html.easyui.form.DateBox			buttons(array )				获取/设置按钮组
 * 			string/core.html.easyui.form.DateBox		sharedCalendar(string )		获取/设置日期框索引
 * 			function/core.html.easyui.form.DateBox		parser(function )			获取/设置解析
 * 			core.html.easyui.form.DateBox				init()						初始化组件模板			
 * 			object										options()
 * 			object										calendar()					获取日期面板对象
 * 			void										cloneFrom(string from)		从xx复制
 * 
 * @date	2018年5月4日 13:55:49
 */

core.html.easyui.form.DateBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.Combo.call(this, arguments[0]);
		core.html.easyui.form.Calendar.call(this, arguments[0]);
		// 默认参数修改
		this.panelWidth($.fn.datebox.defaults.panelWidth);
		this.panelHeight($.fn.datebox.defaults.panelHeight);
		this.disabled($.fn.datebox.defaults.disabled);
		this.formatter($.fn.datebox.defaults.formatter);
		this.onSelect($.fn.datebox.defaults.onSelect);

		/**
		 * 属性
		 */
		/**
		 * 今天按钮
		 */
		var currentText = $.fn.datebox.defaults.currentText;
		/**
		 * 关闭按钮
		 */
		var closeText = $.fn.datebox.defaults.closeText;
		/**
		 * 确认按钮
		 */
		var okText = $.fn.datebox.defaults.okText;
		/**
		 * 按钮组
		 */
		var buttons = $.fn.datebox.defaults.buttons;
		/**
		 * 日期框索引
		 */
		var sharedCalendar = $.fn.datebox.defaults.sharedCalendar;
		/**
		 * 解析
		 */
		var parser = $.fn.datebox.defaults.parser;

		/**
		 * 获取/设置今天按钮
		 * 
		 * @param currentText{string}
		 * @returns {string/core.html.easyui.form.DateBox}
		 */
		this.currentText = function() {

			switch (arguments.length) {
			case 0:
				return currentText;
			default:
				currentText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置关闭按钮
		 * 
		 * @param closeText{string}
		 * @returns {string/core.html.easyui.form.DateBox}
		 */
		this.closeText = function() {

			switch (arguments.length) {
			case 0:
				return closeText;
			default:
				closeText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置确认按钮
		 * 
		 * @param okText{string}
		 * @returns {string/core.html.easyui.form.DateBox}
		 */
		this.okText = function() {

			switch (arguments.length) {
			case 0:
				return okText;
			default:
				okText = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按钮组
		 * 
		 * @param buttons{array}
		 * @returns {array/core.html.easyui.form.DateBox}
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

		/**
		 * 获取/设置日期框索引
		 * 
		 * @param sharedCalendar{string}
		 * @returns {string/core.html.easyui.form.DateBox}
		 */
		this.sharedCalendar = function() {

			switch (arguments.length) {
			case 0:
				return sharedCalendar;
			default:
				sharedCalendar = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置解析
		 * 
		 * @param parser{function}
		 * @returns {function/core.html.easyui.form.DateBox}
		 */
		this.parser = function() {

			switch (arguments.length) {
			case 0:
				return parser;
			default:
				parser = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.DateBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.Calendar", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().datebox({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// TextBox继承属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// Panel继承属性
			title : this.title(),
			left : this.left(),
			top : this.top(),
			headerCls : this.headerCls(),
			bodyCls : this.bodyCls(),
			style : this.style(),
			fit : this.fit(),
			border : this.border(),
			doSize : this.doSize(),
			noheader : this.noheader(),
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
			// Combo继承属性
			panelWidth : this.panelWidth(),
			panelHeight : this.panelHeight(),
			panelMinWidth : this.panelMinWidth(),
			panelMaxWidth : this.panelMaxWidth(),
			panelMinHeight : this.panelMinHeight(),
			panelMaxHeight : this.panelMaxHeight(),
			panelAlign : this.panelAlign(),
			multiple : this.multiple(),
			multivalue : this.multivalue(),
			reversed : this.reversed(),
			selectOnNavigation : this.selectOnNavigation(),
			separator : this.separator(),
			hasDownArrow : this.hasDownArrow(),
			keyHandler : this.keyHandler(),
			// Calendar继承属性
			showWeek : this.showWeek(),
			weekNumberHeader : this.weekNumberHeader(),
			getWeekNumber : this.getWeekNumber(),
			firstDay : this.firstDay(),
			weeks : this.weeks(),
			months : this.months(),
			year : this.year(),
			month : this.month(),
			current : this.current(),
			formatter : this.formatter(),
			styler : this.styler(),
			validator : this.validator(),
			// 属性
			currentText: this.currentText(),
			closeText: this.closeText(),
			okText: this.okText(),
			buttons: this.buttons(),
			sharedCalendar: this.sharedCalendar(),
			parser: this.parser(),

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Panel继承事件
			onBeforeLoad : this.onBeforeLoad(),
			onLoad : this.onLoad(),
			onLoadError : this.onLoadError(),
			onBeforeOpen : this.onBeforeOpen(),
			onOpen : this.onOpen(),
			onBeforeClose : this.onBeforeClose(),
			onClose : this.onClose(),
			onBeforeDestroy : this.onBeforeDestroy(),
			onBeforeCollapse : this.onBeforeCollapse(),
			onCollapse : this.onCollapse(),
			onBeforeExpand : this.onBeforeExpand(),
			onExpand : this.onExpand(),
			onMove : this.onMove(),
			onMaximize : this.onMaximize(),
			onRestore : this.onRestore(),
			onMinimize : this.onMinimize(),
			// Combo继承事件
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel(),
			// Calendar继承事件
			onSelect : this.onSelect()
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

		return this.$jQuery().datebox("options");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.calendar = function() {

		return this.$jQuery().datebox("calendar");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().datebox("setValue", value);
	};

	/**
	 * 从xx复制
	 * 
	 * @param from{string}
	 * @returns
	 */
	Constructor.prototype.cloneFrom = function(from) {

		return this.$jQuery().datebox("cloneFrom");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Spinner
 * @package core.html.easyui.form
 * @desc	微调框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.Spinner(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 
 * @method	继承core.html.easyui.form.TextBox所有方法
 * 			string/core.html.easyui.form.Spinner		min(string min)					获取/设置最小值
 * 			string/core.html.easyui.form.Spinner		max(string max)					获取/设置最大值
 * 			number/core.html.easyui.form.Spinner		increment(number increment)		获取/设置步幅
 * 			string/core.html.easyui.form.Spinner		spinAlign(string spinAlign)		获取/设置位置
 * 			function/core.html.easyui.form.Spinner		spin(function spin)				获取/设置用户点击旋转调用函数
 * 			function/core.html.easyui.form.Spinner		onSpinUp(function onSpinUp)		获取/设置抬起事件
 * 			function/core.html.easyui.form.Spinner		onSpinDown(function onSpinDown)	获取/设置按下事件
 * 			core.html.easyui.form.Spinner				init()							初始化组件模板
 * 			object										options()
 * 			void										destroy()
 * 			void										resize(number width)
 * 			void										enable()
 * 			void										disable()
 * 			string										getValue()
 * 			void										readonly(boolean mode)
 * 			void										setValue(string value)
 * 			void										clear()
 * 			void										reset()
 * 
 * @date	2018年5月4日 14:16:32
 */
core.html.easyui.form.Spinner = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.Spinner.superClass.constructor.call(this, arguments[0]);
		// 修改默认参数
		this.width($.fn.spinner.defaults.width);
		this.height($.fn.spinner.defaults.height);
		this.value($.fn.spinner.defaults.value);
		this.editable($.fn.spinner.defaults.editable);
		this.disabled($.fn.spinner.defaults.disabled);
		this.readonly($.fn.spinner.defaults.readonly);

		/**
		 * 属性
		 */
		/**
		 * 最小值
		 */
		var min = $.fn.spinner.defaults.min;
		/**
		 * 最大值
		 */
		var max = $.fn.spinner.defaults.max;
		/**
		 * 步幅
		 */
		var increment = $.fn.spinner.defaults.increment;
		/**
		 * 位置
		 */
		var spinAlign = $.fn.spinner.defaults.spinAlign;
		/**
		 * 用户点击旋转调用函数
		 */
		var spin = $.fn.spinner.defaults.spin;

		/**
		 * 事件
		 */
		/**
		 * 抬起事件
		 */
		var onSpinUp = $.fn.spinner.defaults.onSpinUp;
		/**
		 * 按下事件
		 */
		var onSpinDown = $.fn.spinner.defaults.onSpinDown;

		/**
		 * 获取/设置最小值
		 * 
		 * @param min{string}
		 * @returns {string/core.html.easyui.form.Spinner}
		 */
		this.min = function() {

			switch (arguments.length) {
			case 0:
				return min;
			default:
				min = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置最大值
		 * 
		 * @param max{string}
		 * @returns {string/core.html.easyui.form.Spinner}
		 */
		this.max = function() {

			switch (arguments.length) {
			case 0:
				return max;
			default:
				max = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置步幅
		 * 
		 * @param increment{number}
		 * @returns {number/core.html.easyui.form.Spinner}
		 */
		this.increment = function() {

			switch (arguments.length) {
			case 0:
				return increment;
			default:
				increment = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置位置
		 * 
		 * @param spinAlign{string}
		 * @returns {string/core.html.easyui.form.Spinner}
		 */
		this.spinAlign = function() {

			switch (arguments.length) {
			case 0:
				return spinAlign;
			default:
				spinAlign = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置用户点击旋转调用函数
		 * 
		 * @param spin{function}
		 * @returns {function/core.html.easyui.form.Spinner}
		 */
		this.spin = function() {

			switch (arguments.length) {
			case 0:
				return spin;
			default:
				spin = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置抬起事件
		 * 
		 * @param onSpinUp{function}
		 * @returns {function/core.html.easyui.form.Spinner}
		 */
		this.onSpinUp = function() {

			switch (arguments.length) {
			case 0:
				return onSpinUp;
			default:
				onSpinUp = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置按下事件
		 * 
		 * @param onSpinDown{function}
		 * @returns {function/core.html.easyui.form.Spinner}
		 */
		this.onSpinDown = function() {

			switch (arguments.length) {
			case 0:
				return onSpinDown;
			default:
				onSpinDown = arguments[0];
				return this;
			}
		};
	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.Spinner}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.Spinner", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().spinner({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// TextBox继承属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// 属性
			min : this.min(),
			max : this.max(),
			increment : this.increment(),
			spinAlign : this.spinAlign(),
			spin : this.spin(),

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// 事件
			onSpinUp : this.onSpinUp(),
			onSpinDown : this.onSpinDown()
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

		return this.$jQuery().spinner("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().spinner("destroy");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width{number}
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return this.$jQuery().spinner("resize", width);
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().spinner("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().spinner("disable");
	};

	/**
	 * 获取值
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getValue = function() {

		return this.$jQuery().spinner("getValue");
	};

	/**
	 * 只读
	 * 
	 * @param mode{boolean}
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return this.$jQuery().spinner("readonly", mode);
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().spinner("setValue", value);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().spinner("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return this.$jQuery().spinner("reset");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	TimeSpinner
 * @package core.html.easyui.form
 * @desc	时间微调框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.TimeSpinner(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.Spinner
 * 
 * @method	继承core.html.easyui.form.Spinner所有方法
 * 			string/core.html.easyui.form.TimeSpinner	separator(string separator)			获取/设置分隔符
 * 			boolean/core.html.easyui.form.TimeSpinner	showSeconds(boolean showSeconds)	获取/设置显示秒
 * 			number/core.html.easyui.form.TimeSpinner	highlight(number highlight)			获取/设置高亮
 * 			function/core.html.easyui.form.TimeSpinner	formatter(function formatter)		获取/设置格式化
 * 			function/core.html.easyui.form.TimeSpinner	parser(function parser)				获取/设置解析时间
 * 			array/core.html.easyui.form.TimeSpinner		selections(array selections)		获取/设置突出的部分
 * 			core.html.easyui.form.TimeSpinner			init()								初始化组件模板
 * 			void										options()
 * 			void										setValue(string value)
 * 			number										getHours()							获取小时值
 * 			number										getMinutes()						获取分钟值
 * 			number										getSeconds()						获取秒值
 * 
 * @date	2018年5月4日 14:30:31
 */
core.html.easyui.form.TimeSpinner = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.TimeSpinner.superClass.constructor.call(this, arguments[0]);

		/**
		 * 属性
		 */
		/**
		 * 分隔符
		 */
		var separator = $.fn.timespinner.defaults.separator;
		/**
		 * 显示秒
		 */
		var showSeconds = $.fn.timespinner.defaults.showSeconds;
		/**
		 * 高亮
		 */
		var highlight = $.fn.timespinner.defaults.highlight;
		/**
		 * 格式化
		 */
		var formatter = $.fn.timespinner.defaults.formatter;
		/**
		 * 解析时间
		 */
		var parser = $.fn.timespinner.defaults.parser;
		/**
		 * 突出的部分
		 */
		var selections = $.fn.timespinner.defaults.selections;

		/**
		 * 获取/设置分隔符
		 * 
		 * @param separator{string}
		 * @returns {string/core.html.easyui.form.TimeSpinner}
		 */
		this.separator = function() {

			switch (arguments.length) {
			case 0:
				return separator;
			default:
				separator = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示秒
		 * 
		 * @param showSeconds{boolean}
		 * @returns {boolean/core.html.easyui.form.TimeSpinner}
		 */
		this.showSeconds = function() {

			switch (arguments.length) {
			case 0:
				return showSeconds;
			default:
				showSeconds = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置高亮
		 * 
		 * @param highlight{number}
		 * @returns {number/core.html.easyui.form.TimeSpinner}
		 */
		this.highlight = function() {

			switch (arguments.length) {
			case 0:
				return highlight;
			default:
				highlight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置格式化
		 * 
		 * @param formatter{function}
		 * @returns {function/core.html.easyui.form.TimeSpinner}
		 */
		this.formatter = function() {

			switch (arguments.length) {
			case 0:
				return formatter;
			default:
				formatter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置解析时间
		 * 
		 * @param parser{function}
		 * @returns {function/core.html.easyui.form.TimeSpinner}
		 */
		this.parser = function() {

			switch (arguments.length) {
			case 0:
				return parser;
			default:
				parser = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置突出的部分
		 * 
		 * @param selections{array}
		 * @returns {array/core.html.easyui.form.TimeSpinner}
		 */
		this.selections = function() {

			switch (arguments.length) {
			case 0:
				return selections;
			default:
				selections = arguments[0];
				return this;
			}
		};
	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.form.Spinner);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.TimeSpinner}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.Spinner", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().timespinner({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// TextBox继承属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// Spinner继承属性
			min : this.min(),
			max : this.max(),
			increment : this.increment(),
			spinAlign : this.spinAlign(),
			spin : this.spin(),
			// 属性
			separator : this.separator(),
			showSeconds : this.showSeconds(),
			highlight : this.highlight(),
			formatter : this.formatter(),
			parser : this.parser(),
			selections : this.selections(),

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Spinner继承事件
			onSpinUp : this.onSpinUp(),
			onSpinDown : this.onSpinDown()
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

		return this.$jQuery().timespinner("options");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().timespinner("setValue", value);
	};

	/**
	 * 获取小时值
	 * 
	 * @returns {number}
	 */
	Constructor.prototype.getHours = function() {

		return this.$jQuery().timespinner("getHours");
	};

	/**
	 * 获取分钟值
	 * 
	 * @returns {number}
	 */
	Constructor.prototype.getMinutes = function() {

		return this.$jQuery().timespinner("getMinutes");
	};

	/**
	 * 获取秒值
	 * 
	 * @returns {number}
	 */
	Constructor.prototype.getSeconds = function() {

		return this.$jQuery().timespinner("getSeconds");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	DateTimeBox
 * @package core.html.easyui.form
 * @desc	日期时间框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.DateTimeBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.DateBox
 * 			core.html.easyui.form.TimeSpinner
 * 
 * @method	继承core.html.easyui.form.DateBox所有方法
 * 			继承core.html.easyui.form.TimeSpinner所有方法
 * 			number/core.html.easyui.form.DateTimeBox	spinnerWidth(number spinnerWidth)	获取/设置spinner宽度
 * 			string/core.html.easyui.form.DateTimeBox	timeSeparator(string timeSeparator)	获取/设置时间分割符
 * 			core.html.easyui.form.DateTimeBox			init()								初始化组件模板
 * 			object										options()
 * 			object										spinner()							获取spinner对象
 * 			void										setValue(string value)
 * 			void										cloneFrom(string from)
 * 
 * @date	2018年5月4日 14:44:09
 */
core.html.easyui.form.DateTimeBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.DateBox.call(this, arguments[0]);
		core.html.easyui.form.TimeSpinner.call(this, arguments[0]);
		// 默认参数修改
		this.currentText($.fn.datetimebox.defaults.currentText);
		this.closeText($.fn.datetimebox.defaults.closeText);
		this.okText($.fn.datetimebox.defaults.okText);
		this.showSeconds($.fn.datetimebox.defaults.showSeconds);

		/**
		 * 属性
		 */
		/**
		 * spinner宽度
		 */
		var spinnerWidth = $.fn.datetimebox.defaults.spinnerWidth;
		/**
		 * 时间分割符
		 */
		var timeSeparator = $.fn.datetimebox.defaults.timeSeparator;

		/**
		 * 获取/设置spinner宽度
		 * 
		 * @param spinnerWidth{number}
		 * @returns {number/core.html.easyui.form.DateTimeBox}
		 */
		this.spinnerWidth = function() {

			switch (arguments.length) {
			case 0:
				return spinnerWidth;
			default:
				spinnerWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置时间分割符
		 * 
		 * @param timeSeparator{string}
		 * @returns {string/core.html.easyui.form.DateTimeBox}
		 */
		this.timeSeparator = function() {

			switch (arguments.length) {
			case 0:
				return timeSeparator;
			default:
				timeSeparator = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.DateTimeBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.Spinner", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().datetimebox({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// TextBox继承属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// Panel继承属性
			title : this.title(),
			left : this.left(),
			top : this.top(),
			headerCls : this.headerCls(),
			bodyCls : this.bodyCls(),
			style : this.style(),
			fit : this.fit(),
			border : this.border(),
			doSize : this.doSize(),
			noheader : this.noheader(),
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
			// Combo继承属性
			panelWidth : this.panelWidth(),
			panelHeight : this.panelHeight(),
			panelMinWidth : this.panelMinWidth(),
			panelMaxWidth : this.panelMaxWidth(),
			panelMinHeight : this.panelMinHeight(),
			panelMaxHeight : this.panelMaxHeight(),
			panelAlign : this.panelAlign(),
			multiple : this.multiple(),
			multivalue : this.multivalue(),
			reversed : this.reversed(),
			selectOnNavigation : this.selectOnNavigation(),
			separator : this.separator(),
			hasDownArrow : this.hasDownArrow(),
			keyHandler : this.keyHandler(),
			// Calendar继承属性
			showWeek : this.showWeek(),
			weekNumberHeader : this.weekNumberHeader(),
			getWeekNumber : this.getWeekNumber(),
			firstDay : this.firstDay(),
			weeks : this.weeks(),
			months : this.months(),
			year : this.year(),
			month : this.month(),
			current : this.current(),
			formatter : this.formatter(),
			styler : this.styler(),
			validator : this.validator(),
			// DateBox继承属性
			currentText : this.currentText(),
			closeText : this.closeText(),
			okText : this.okText(),
			buttons : this.buttons(),
			sharedCalendar : this.sharedCalendar(),
			parser : this.parser(),
			// Spinner继承属性
			min : this.min(),
			max : this.max(),
			increment : this.increment(),
			spinAlign : this.spinAlign(),
			spin : this.spin(),
			// TimeSpinner继承属性
			showSeconds : this.showSeconds(),
			highlight : this.highlight(),
			parser : this.parser(),
			selections : this.selections(),
			// 属性
			spinnerWidth : this.spinnerWidth(),
			timeSeparator : this.timeSeparator(),

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Panel继承事件
			onBeforeLoad : this.onBeforeLoad(),
			onLoad : this.onLoad(),
			onLoadError : this.onLoadError(),
			onBeforeOpen : this.onBeforeOpen(),
			onOpen : this.onOpen(),
			onBeforeClose : this.onBeforeClose(),
			onClose : this.onClose(),
			onBeforeDestroy : this.onBeforeDestroy(),
			onBeforeCollapse : this.onBeforeCollapse(),
			onCollapse : this.onCollapse(),
			onBeforeExpand : this.onBeforeExpand(),
			onExpand : this.onExpand(),
			onMove : this.onMove(),
			onMaximize : this.onMaximize(),
			onRestore : this.onRestore(),
			onMinimize : this.onMinimize(),
			// Combo继承事件
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel(),
			// Calendar继承事件
			onSelect : this.onSelect(),
			// Spinner继承事件
			onSpinUp : this.onSpinUp(),
			onSpinDown : this.onSpinDown()
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

		return this.$jQuery().datetimebox("options");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.spinner = function() {

		return this.$jQuery().datetimebox("spinner");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().datetimebox("setValue", value);
	};

	/**
	 * 从xx复制
	 * 
	 * @param from{string}
	 * @returns
	 */
	Constructor.prototype.cloneFrom = function(from) {

		return this.$jQuery().datetimebox("cloneFrom");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	DateTimeSpinner
 * @package core.html.easyui.form
 * @desc	日期时间微调框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.DateTimeSpinner(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.TimeSpinner
 * 
 * @method	继承core.html.easyui.form.TimeSpinner所有方法
 * 			core.html.easyui.form.DateTimeSpinner		init()		初始化组件模板
 * 
 * @date	2018年5月4日 14:48:08
 */
core.html.easyui.form.DateTimeSpinner = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.DateTimeSpinner.superClass.constructor.call(this, arguments[0]);
		// 默认参数修改
		this.selections($.fn.datetimespinner.defaults.selections);
	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.form.TimeSpinner);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.DateTimeSpinner}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.Spinner", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().datetimespinner({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// TextBox继承属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// Spinner继承属性
			min : this.min(),
			max : this.max(),
			increment : this.increment(),
			spinAlign : this.spinAlign(),
			spin : this.spin(),
			// TimeSponner继承属性
			separator : this.separator(),
			showSeconds : this.showSeconds(),
			highlight : this.highlight(),
			formatter : this.formatter(),
			parser : this.parser(),
			selections : this.selections(),

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Spinner继承事件
			onSpinUp : this.onSpinUp(),
			onSpinDown : this.onSpinDown()
		});

		return this;
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	NumberSpinner
 * @package core.html.easyui.form
 * @desc	数字微调框模板
 * @type	类
 * 
 * @constructor core.html.easyui.form.NumberSpinner(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.Spinner
 * 			core.html.easyui.form.NumberBox
 * 
 * @method	继承core.html.easyui.form.Spinner所有方法
 * 			继承core.html.easyui.form.NumberBox所有方法
 * 			core.html.easyui.form.NumberSpinner		init()					初始化组件模板
 * 			void									options()
 * 			void									setValue(number value)
 * 
 * @date	2018年5月4日 14:55:27
 */
core.html.easyui.form.NumberSpinner = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {
		
		// 调用父类构造
		core.html.easyui.form.Spinner.call(this, arguments[0]);
		core.html.easyui.form.NumberBox.call(this, arguments[0]);
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.NumberSpinner}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.NumberSpinner", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().numberspinner({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// TextBox继承属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// Spinner继承属性
			min : this.min(),
			max : this.max(),
			increment : this.increment(),
			spinAlign : this.spinAlign(),
			spin : this.spin(),
			// NumberBox继承属性
			precision : this.precision(),
			decimalSeparator : this.decimalSeparator(),
			groupSeparator : this.groupSeparator(),
			prefix : this.prefix(),
			suffix : this.suffix(),
			filter : this.filter(),
			formatter : this.formatter(),
			parser : this.parser(),

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// 事件
			onSpinUp : this.onSpinUp(),
			onSpinDown : this.onSpinDown()
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

		return this.$jQuery().numberspinner("options");
	};

	/**
	 * 设置值
	 * 
	 * @param value{number}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().numberspinner("setValue", value);
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Slider
 * @package core.html.easyui.form
 * @desc	拖动条模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.Slider(string id/object jQuery)
 * 
 * @extend	core.html.easyui.base.Draggable
 * 
 * @method	继承core.html.easyui.base.Draggable所有方法
 * 			number/core.html.easyui.form.Slider		width(number width)					获取/设置宽度
 * 			number/core.html.easyui.form.Slider		height(number height)				获取/设置高度
 * 			string/core.html.easyui.form.Slider		mode(string mode)					获取/设置拖动条方向
 * 			boolean/core.html.easyui.form.Slider	reversed(boolean reversed)			获取/设置方向反转
 * 			boolean/core.html.easyui.form.Slider	showTip(boolean showTip)			获取/设置显示值信息
 * 			boolean/core.html.easyui.form.Slider	range(boolean range)				获取/设置拖动条范围
 * 			number/core.html.easyui.form.Slider		value(number value)					获取/设置值
 * 			number/core.html.easyui.form.Slider		min(number min)						获取/设置最小值
 * 			number/core.html.easyui.form.Slider		max(number max)						获取/设置最大值
 * 			number/core.html.easyui.form.Slider		step(number step)					获取/设置步幅
 * 			array/core.html.easyui.form.Slider		rule(array rule)					获取/设置
 * 			function/core.html.easyui.form.Slider	tipFormatter(function tipFormatter)	获取/设置格式化显示信息
 * 			function/core.html.easyui.form.Slider	converter(function converter)		获取/设置转换某些值
 * 			function/core.html.easyui.form.Slider	onChange(function onChange)			获取/设置改变事件
 * 			function/core.html.easyui.form.Slider	onSlideStart(function onSlideStart)	获取/设置开始拖动事件
 * 			function/core.html.easyui.form.Slider	onSlideEnd(function onSlideEnd)		获取/设置结束拖动事件
 * 			function/core.html.easyui.form.Slider	onComplete(function onComplete)		获取/设置完整
 * 			core.html.easyui.form.Slider			init()								初始化组件模板
 * 			object									options()				
 * 			void									destroy()							销毁对象
 * 			void									resize(object param)				改变大小
 * 			string									getValue()							获取值
 * 			array									getValues()							获取值
 * 			void									setValue(string value)				设置值
 * 			void									setValues(array value)				设置值
 * 			void									clear()								清除
 * 			void									reset()								重置
 * 			void									enable()							启用
 * 			void									disable()							禁用
 * 
 * @date	2018年5月4日 15:46:29
 */
core.html.easyui.form.Slider = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.Slider.superClass.constructor.call(this, arguments[0]);
		// 默认参数修改
		this.disabled($.fn.slider.defaults.disabled);

		/**
		 * 属性
		 */
		/**
		 * 宽度
		 */
		var width = $.fn.slider.defaults.width;
		/**
		 * 高度
		 */
		var height = $.fn.slider.defaults.height;
		/**
		 * 拖动条方向
		 */
		var mode = $.fn.slider.defaults.mode;
		/**
		 * 方向反转
		 */
		var reversed = $.fn.slider.defaults.reversed;
		/**
		 * 显示值信息
		 */
		var showTip = $.fn.slider.defaults.showTip;
		/**
		 * 拖动条范围
		 */
		var range = $.fn.slider.defaults.range;
		/**
		 * 值
		 */
		var value = $.fn.slider.defaults.value;
		/**
		 * 最小值
		 */
		var min = $.fn.slider.defaults.min;
		/**
		 * 最大值
		 */
		var max = $.fn.slider.defaults.max;
		/**
		 * 步幅
		 */
		var step = $.fn.slider.defaults.step;
		/**
		 * 
		 */
		var rule = $.fn.slider.defaults.rule;
		/**
		 * 格式化显示信息
		 */
		var tipFormatter = $.fn.slider.defaults.tipFormatter;
		/**
		 * 转换某些值
		 */
		var converter = $.fn.slider.defaults.converter;

		/**
		 * 事件
		 */
		/**
		 * 改变事件
		 */
		var onChange = $.fn.slider.defaults.onChange;
		/**
		 * 开始拖动事件
		 */
		var onSlideStart = $.fn.slider.defaults.onSlideStart;
		/**
		 * 结束拖动事件
		 */
		var onSlideEnd = $.fn.slider.defaults.onSlideEnd;
		/**
		 * 完整
		 */
		var onComplete = $.fn.slider.defaults.onComplete;

		/**
		 * 获取/设置宽度
		 * 
		 * @param width{number}
		 * @returns {number/core.html.easyui.form.Slider}
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
		 * @returns {number/core.html.easyui.form.Slider}
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
		 * 获取/设置拖动条方向
		 * 
		 * @param mode{string}
		 * @returns {string/core.html.easyui.form.Slider}
		 */
		this.mode = function() {

			switch (arguments.length) {
			case 0:
				return mode;
			default:
				mode = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置方向反转
		 * 
		 * @param reversed{boolean}
		 * @returns {boolean/core.html.easyui.form.Slider}
		 */
		this.reversed = function() {

			switch (arguments.length) {
			case 0:
				return reversed;
			default:
				reversed = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示值信息
		 * 
		 * @param showTip{boolean}
		 * @returns {boolean/core.html.easyui.form.Slider}
		 */
		this.showTip = function() {

			switch (arguments.length) {
			case 0:
				return showTip;
			default:
				showTip = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置拖动条范围
		 * 
		 * @param range{boolean}
		 * @returns {boolean/core.html.easyui.form.Slider}
		 */
		this.range = function() {

			switch (arguments.length) {
			case 0:
				return range;
			default:
				range = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置值
		 * 
		 * @param value{number}
		 * @returns {number/core.html.easyui.form.Slider}
		 */
		this.value = function() {

			switch (arguments.length) {
			case 0:
				return value;
			default:
				value = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置最小值
		 * 
		 * @param min{number}
		 * @returns {number/core.html.easyui.form.Slider}
		 */
		this.min = function() {

			switch (arguments.length) {
			case 0:
				return min;
			default:
				min = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置最大值
		 * 
		 * @param max{number}
		 * @returns {number/core.html.easyui.form.Slider}
		 */
		this.max = function() {

			switch (arguments.length) {
			case 0:
				return max;
			default:
				max = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置步幅
		 * 
		 * @param step{number}
		 * @returns {number/core.html.easyui.form.Slider}
		 */
		this.step = function() {

			switch (arguments.length) {
			case 0:
				return step;
			default:
				step = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param rule{array}
		 * @returns {array/core.html.easyui.form.Slider}
		 */
		this.rule = function() {

			switch (arguments.length) {
			case 0:
				return rule;
			default:
				rule = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置格式化显示信息
		 * 
		 * @param tipFormatter{function}
		 * @returns {function/core.html.easyui.form.Slider}
		 */
		this.tipFormatter = function() {

			switch (arguments.length) {
			case 0:
				return tipFormatter;
			default:
				tipFormatter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置转换某些值
		 * 
		 * @param converter{function}
		 * @returns {function/core.html.easyui.form.Slider}
		 */
		this.converter = function() {

			switch (arguments.length) {
			case 0:
				return converter;
			default:
				converter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置改变事件
		 * 
		 * @param onChange{function}
		 * @returns {function/core.html.easyui.form.Slider}
		 */
		this.onChange = function() {

			switch (arguments.length) {
			case 0:
				return onChange;
			default:
				onChange = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置开始拖动事件
		 * 
		 * @param onSlideStart{function}
		 * @returns {function/core.html.easyui.form.Slider}
		 */
		this.onSlideStart = function() {

			switch (arguments.length) {
			case 0:
				return onSlideStart;
			default:
				onSlideStart = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置结束拖动事件
		 * 
		 * @param onSlideEnd{function}
		 * @returns {function/core.html.easyui.form.Slider}
		 */
		this.onSlideEnd = function() {

			switch (arguments.length) {
			case 0:
				return onSlideEnd;
			default:
				onSlideEnd = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置完整
		 * 
		 * @param onComplete{function}
		 * @returns {function/core.html.easyui.form.Slider}
		 */
		this.onComplete = function() {

			switch (arguments.length) {
			case 0:
				return onComplete;
			default:
				onComplete = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.Slider}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.base.Draggable", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().slider({
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
			// 属性
			width : this.width(),
			height : this.height(),
			mode : this.mode(),
			reversed : this.reversed(),
			showTip : this.showTip(),
			range : this.range(),
			value : this.value(),
			min : this.min(),
			max : this.max(),
			step : this.step(),
			rule : this.rule(),
			tipFormatter : this.tipFormatter(),
			converter : this.converter(),

			// Draggable继承事件
			onBeforeDrag : this.onBeforeDrag(),
			onStartDrag : this.onStartDrag(),
			onDrag : this.onDrag(),
			onEndDrag : this.onEndDrag(),
			onStopDrag : this.onStopDrag(),
			// 事件
			onChange : this.onChange(),
			onSlideStart : this.onSlideStart(),
			onSlideEnd : this.onSlideEnd(),
			onComplete : this.onComplete()
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

		return this.$jQuery().slider("options");
	};

	/**
	 * 销毁对象
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().slider("destroy");
	};

	/**
	 * 改变大小
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.resize = function(param) {

		return this.$jQuery().slider("resize", param);
	};

	/**
	 * 获取值
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getValue = function() {

		return this.$jQuery().slider("getValue");
	};

	/**
	 * 获取值
	 * 
	 * @returns {array}
	 */
	Constructor.prototype.getValues = function() {

		return this.$jQuery().slider("getValues");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().slider("setValue", value);
	};

	/**
	 * 设置值
	 * 
	 * @param values{array}
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return this.$jQuery().slider("setValues", values);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().slider("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return this.$jQuery().slider("reset");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().slider("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().slider("disable");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	FileBox
 * @package core.html.easyui.form
 * @desc	文件框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.FileBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 
 * @method	继承core.html.easyui.form.TextBox所有方法
 * 			string/core.html.easyui.form.FileBox	accept(string accept)		获取/设置指定文件类型
 * 			string/core.html.easyui.form.FileBox	multiple(string multiple)	获取/设置是否可接收多个文件
 * 			string/core.html.easyui.form.FileBox	separator(string separator)	获取/设置多文件名之间的分隔符
 * 			core.html.easyui.form.FileBox			init()						初始化组件模板
 * 			array									files()
 * 
 * @date	2018年5月4日 16:00:06
 */
core.html.easyui.form.FileBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.FileBox.superClass.constructor.call(this, arguments[0]);
		// 默认参数修改
		this.buttonText($.fn.filebox.defaults.buttonText);
		this.buttonIcon($.fn.filebox.defaults.buttonIcon);
		this.buttonAlign($.fn.filebox.defaults.buttonAlign);

		/**
		 * 属性
		 */
		/**
		 * 指定文件类型
		 */
		var accept = $.fn.filebox.defaults.accept;
		/**
		 * 是否可接收多个文件
		 */
		var multiple = $.fn.filebox.defaults.multiple;
		/**
		 * 多文件名之间的分隔符
		 */
		var separator = $.fn.filebox.defaults.separator;

		/**
		 * 获取/设置指定文件类型
		 * 
		 * @param accept{string}
		 * @returns {string/core.html.easyui.form.FileBox}
		 */
		this.accept = function() {

			switch (arguments.length) {
			case 0:
				return accept;
			default:
				accept = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置是否可接收多个文件
		 * 
		 * @param multiple{string}
		 * @returns {string/core.html.easyui.form.FileBox}
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
		 * 获取/设置多文件名之间的分隔符
		 * 
		 * @param separator{string}
		 * @returns {string/core.html.easyui.form.FileBox}
		 */
		this.separator = function() {

			switch (arguments.length) {
			case 0:
				return separator;
			default:
				separator = arguments[0];
				return this;
			}
		};
	};
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.FileBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.TextBox", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().filebox({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// TextBox继承属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
			// 属性
			accept: this.accept(),
			multiple: this.multiple(),
			separator: this.separator(),

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon()
		});

		return this;
	};

	/**
	 * 方法
	 */
	/**
	 * 
	 * @returns {array}
	 */
	Constructor.prototype.files = function() {

		return this.$jQuery().filebox("files");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	SearchBox
 * @package core.html.easyui.base
 * @desc	搜索文本框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.base.SearchBox(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 			core.html.easyui.button.MenuButton
 * 
 * @method	继承core.html.easyui.base.Menu所有方法
 * 			继承core.html.easyui.base.LinkButton所有方法
 *			function/core.html.easyui.base.SearchBox 		searcher(function searcher)				获取/设置
 *			core.html.easyui.base.SearchBox 				init() 									初始化组件模板
 *			object											options()
 *			object											menu()
 *			object											textbox()
 *			string											getValue()
 *			void											setValue(string value)
 *			string											getName()
 *			object											selectName(string name)
 *			void											destroy()
 *			void											resize(number width)
 *			void											disable()
 *			void											enable()
 *			void											clear()
 *			void											reset()
 * 
 * @date	2018年4月23日 16:49:30
 */
core.html.easyui.base.SearchBox = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.TextBox.call(this, arguments[0]);
		core.html.easyui.button.MenuButton.call(this, arguments[0]);

		/**
		 * 属性
		 */
		/**
		 * 
		 */
		var searcher = $.fn.searchbox.defaults.searcher;

		/**
		 * 获取/设置
		 * 
		 * @param searcher{function}
		 * @returns {function/core.html.easyui.base.SearchBox}
		 */
		this.searcher = function() {

			switch (arguments.length) {
			case 0:
				return searcher;
			default:
				searcher = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.base.SearchBox}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.base.SearchBox", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().searchbox({
			// Tooltip继承属性
			position : this.position(),
			content : this.content(),
			trackMouse : this.trackMouse(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			showEvent : this.showEvent(),
			hideEvent : this.hideEvent(),
			showDelay : this.showDelay(),
			hideDelay : this.hideDelay(),
			// Validate继承属性
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// LinkButton继承属性
			width : this.width(),
			height : this.height(),
			id : this.id(),
			toggle : this.toggle(),
			selected : this.selected(),
			group : this.group(),
			plain : this.plain(),
			text : this.text(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
			size : this.size(),
			// TextBox继承属性
			cls : this.cls(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconWidth : this.iconWidth(),
			buttonText : this.buttonText(),
			buttonIcon : this.buttonIcon(),
			buttonAlign : this.buttonAlign(),
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
			// MenuButton属性
			menu : this.menu(),
			menuAlign : this.menuAlign(),
			hasDownArrow : this.hasDownArrow(),
			// 属性
			searcher : this.searcher(),

			// Tooltip继承事件
			onShow : this.onShow(),
			onHide : this.onHide(),
			onUpdate : this.onUpdate(),
			onPosition : this.onPosition(),
			onDestroy : this.onDestroy(),
			// ValidateBox继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// LinkButton继承事件
			onClick : this.onClick(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon()
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

		return this.$jQuery().searchbox("options");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.menu = function() {

		return this.$jQuery().searchbox("menu");
	};

	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.textbox = function() {

		return this.$jQuery().searchbox("textbox");
	};

	/**
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getValue = function() {

		return this.$jQuery().searchbox("getValue");
	};

	/**
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().searchbox("setValue", value);
	};

	/**
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getName = function() {

		return this.$jQuery().searchbox("getName");
	};

	/**
	 * 
	 * @param name{string}
	 * @returns {object}
	 */
	Constructor.prototype.selectName = function(name) {

		return this.$jQuery().searchbox("selectName", name);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().searchbox("destroy");
	};

	/**
	 * 
	 * @param width{number}
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return this.$jQuery().searchbox("resize", width);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().searchbox("disable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().searchbox("enable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().searchbox("clear");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return this.$jQuery().searchbox("reset");
	};

	// 返回构造函数
	return Constructor;
})();
