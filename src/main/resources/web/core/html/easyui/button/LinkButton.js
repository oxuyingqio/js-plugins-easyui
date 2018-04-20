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