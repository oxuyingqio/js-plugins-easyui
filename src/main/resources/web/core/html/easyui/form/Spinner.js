/**
 * @name	Spinner
 * @package core.html.easyui.form
 * @desc	微调框模板
 * @type	类
 * 
 * @date	2016年8月31日 11:23:11
 */

core.html.easyui.form.Spinner = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.Spinner.superClass.constructor.call(this, id);
		this.height("22px");

		/**
		 * 属性
		 */
		/**
		 * 最小值
		 */
		var min = null;
		/**
		 * 最大值
		 */
		var max = null;
		/**
		 * 步幅
		 */
		var increment = 1;
		/**
		 * 位置
		 */
		var spinAlign = "right";
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
		var onSpinUp = function() {
			
		};
		/**
		 * 按下事件
		 */
		var onSpinDown = function() {

		};

		/**
		 * 获取/设置最小值
		 * 
		 * @param min
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
		 * @param max
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
		 * @param increment
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
		 * @param spinAlign
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
		 * @param spin
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
		 * @param onSpinUp
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
		 * @param onSpinDown
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
	// 继承文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.Spinner}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.Spinner", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.spinner({
			// 属性
			// Validate继承属性
			id : this.id(),
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			deltaX : this.deltaX(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),
			// TextBox继承属性
			width : this.width(),
			height : this.height(),
			prompt : this.prompt(),
			value : this.value(),
			type : this.type(),
			label : this.label(),
			labelWidth : this.labelWidth(),
			labelPosition : this.labelPosition(),
			labelAlign : this.labelAlign(),
			multiline : this.multiline(),
			icons : this.icons(),
			iconCls : this.iconCls(),
			iconAlign : this.iconAlign(),
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

			// 事件
			// Validate继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
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
	 * Validate继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).spinner("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).spinner("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).spinner("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).spinner("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).spinner("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).spinner("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).spinner("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).spinner("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).spinner("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).spinner("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).spinner("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).spinner("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).spinner("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).spinner("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).spinner("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).spinner("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).spinner("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).spinner("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).spinner("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).spinner("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).spinner("getIcon", index);
	};

	// 返回构造函数
	return Constructor;
})();