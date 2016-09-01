/**
 * @name	LinkButton
 * @package core.html.easyui.button
 * @desc	按钮模板
 * @type	类
 * 
 * @date	2016年9月1日 08:43:11
 */

core.html.easyui.button.LinkButton = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(_id) {

		// 校验ID
		if (_id === null || _id === undefined) {
			new core.lang.Exception(this, "core.html.easyui.button.LinkButton", "构造参数异常", "ID属性不能为空");
		}

		/**
		 * 属性
		 */
		/**
		 * ID
		 */
		var id = _id;
		/**
		 * 宽度
		 */
		var width = $.fn.linkbutton.defaults.width;
		/**
		 * 高度
		 */
		var height = $.fn.linkbutton.defaults.height;
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

		/**
		 * 获取/设置id
		 * 
		 * @param id
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
		 * 获取/设置宽度
		 * 
		 * @param width
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
		 * @param height
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
		 * 获取/设置禁用
		 * 
		 * @param disabled
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
		 * @param toggle
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
		 * @param selected
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
		 * @param group
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
		 * @param plain
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
		 * @param text
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
		 * @param iconCls
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
		 * @param iconAlign
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
		 * @param size
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
		 * @param onClick
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

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.button.LinkButton", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.linkbutton({
			// 属性
			id : this.id(),
			width : this.width(),
			height : this.height(),
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
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).linkbutton("options");
	};

	/**
	 * 改变大小
	 * 
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