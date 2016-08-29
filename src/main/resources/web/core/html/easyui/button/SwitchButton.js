/**
 * @name	SwitchButton
 * @package	core.html.easyui.button
 * @desc	开关按钮模板
 * @type	类
 * 
 * @date	2016年8月29日 15:52:53
 */

core.html.easyui.button.SwitchButton = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(_id) {

		// 校验ID
		if (_id === null || _id === undefined) {
			new core.lang.Exception(this, "core.html.easyui.button.SwitchButton", "构造参数异常", "ID属性不能为空");
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
		var width = 60;
		/**
		 * 高度
		 */
		var height = 26;
		/**
		 * 中心宽度
		 */
		var handleWidth = undefined;
		/**
		 * 选中
		 */
		var checked = true;
		/**
		 * 不可用
		 */
		var disabled = false;
		/**
		 * 只读
		 */
		var readonly = false;
		/**
		 * 开关位置反转
		 */
		var reversed = false;
		/**
		 * 开文字描述
		 */
		var onText = "开";
		/**
		 * 关文字描述
		 */
		var offText = "关";
		/**
		 * 中心文字
		 */
		var handleText = "";
		/**
		 * 值
		 */
		var value = "on";

		/**
		 * 事件
		 */
		/**
		 * 改变事件
		 */
		var onChange = function(checked) {

		};

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
		 * 获取/设置中心宽度
		 * 
		 * @param handleWidth
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
		 * @param checked
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
		 * 获取/设置只读
		 * 
		 * @param readonly
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
		 * @param reversed
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
		 * @param onText
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
		 * @param offText
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
		 * @param handleText
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
		 * @param value
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
		 * @param onChange
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

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.button.SwitchButton", "参数异常", "div(id:" + this.id()
					+ ")不存在.");
		}

		// 备份this对象
		var _this = this;

		// 参数配置
		$jQuery.switchbutton({
			// 属性
			id : this.id(),
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

				// 修改input值
				checked ? $("#" + _this.id()).val(_this.value()) : $("#" + _this.id()).val("");
				// 调用自定义改变事件
				_this.onChange()(checked);
			}
		});

		return this;
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).switchbutton("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function(param) {

		return $("#" + this.id()).switchbutton("resize", param);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).switchbutton("disable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).switchbutton("enable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).switchbutton("readonly", mode);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.check = function() {

		return $("#" + this.id()).switchbutton("check");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.uncheck = function() {

		return $("#" + this.id()).switchbutton("uncheck");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).switchbutton("clear");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).switchbutton("reset");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).switchbutton("setValue", value);
	};

	// 返回构造函数
	return Constructor;
})();