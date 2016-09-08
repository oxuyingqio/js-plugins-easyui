/**
 * @name	Combo
 * @package core.html.easyui.form
 * @desc	下拉框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.Combo(String id)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 
 * @method	Object/core.html.easyui.form.Combo			panelWidth()				获取/设置面板宽度
 * 			Object/core.html.easyui.form.Combo			panelHeight()				获取/设置面板高度
 * 			Object/core.html.easyui.form.Combo			panelMinWidth()				获取/设置面板最小宽度
 * 			Object/core.html.easyui.form.Combo			panelMaxWidth()				获取/设置面板最大宽度
 * 			Object/core.html.easyui.form.Combo			panelMinHeight()			获取/设置面板最小高度
 * 			Object/core.html.easyui.form.Combo			panelMaxHeight()			获取/设置面板最大高度
 * 			Object/core.html.easyui.form.Combo			panelAlign()				获取/设置面板位置
 * 			Object/core.html.easyui.form.Combo			multiple()					获取/设置是否多选
 * 			Object/core.html.easyui.form.Combo			selectOnNavigation()		获取/设置
 * 			Object/core.html.easyui.form.Combo			separator()					获取/设置多选分割符号
 * 			Object/core.html.easyui.form.Combo			hasDownArrow()				获取/设置是否显示向下按钮
 * 			Object/core.html.easyui.form.Combo			keyHandler()				获取/设置按键事件
 * 			Object/core.html.easyui.form.Combo			onShowPanel()				获取/设置显示面板事件
 * 			Object/core.html.easyui.form.Combo			onHidePanel()				获取/设置隐藏面板事件
 * 			core.html.easyui.form.Combo					init()						初始化组件模板
 * 			Object										panel()						
 * 			Object										showPanel()					显示面板
 * 			Object										hidePanel()					隐藏面板
 * 			Object										getValues()					获取值集合
 * 			Object										setValues(Object values)	设置值集合
 * 
 * @date	2016年8月29日 19:06:36
 */

core.html.easyui.form.Combo = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.Combo.superClass.constructor.call(this, id);
		this.height($.fn.combo.defaults.height);

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
		 * @param panelWidth
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
		 * @param panelHeight
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
		 * @param panelMinWidth
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
		 * @param panelMaxWidth
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
		 * @param panelMinHeight
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
		 * @param panelMaxHeight
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
		 * @param panelAlign
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
		 * @param multiple
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
		 * @param selectOnNavigation
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
		 * @param separator
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
		 * @param hasDownArrow
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
		 * @param keyHandler
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
		 * @param onShowPanel
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
		 * @param onHidePanel
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
	// 继承文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.Combo}
	 */
	Constructor.prototype.init = function() {

		// 校验ID个数
		var idLength = $("[id='" + this.id() + "']").length;
		if (idLength === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.Combo", "参数异常", "div(id:" + this.id() + ")不存在.");
		} else if (idLength > 1) {
			new core.lang.Warning(this, "core.html.easyui.form.Combo", "参数警告", "div(id:" + this.id() + ")存在多个.");
		}
		
		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 参数配置
		$jQuery.combo({
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
			panelWidth : this.panelWidth(),
			panelHeight : this.panelHeight(),
			panelMinWidth : this.panelMinWidth(),
			panelMaxWidth : this.panelMaxWidth(),
			panelMinHeight : this.panelMinHeight(),
			panelMaxHeight : this.panelMaxHeight(),
			panelAlign : this.panelAlign(),
			multiple : this.multiple(),
			selectOnNavigation : this.selectOnNavigation(),
			separator : this.separator(),
			hasDownArrow : this.hasDownArrow(),
			keyHandler : this.keyHandler(),

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
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel()
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

		return $("#" + this.id()).combo("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).combo("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).combo("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).combo("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).combo("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).combo("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).combo("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).combo("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).combo("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).combo("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).combo("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).combo("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).combo("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).combo("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).combo("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).combo("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).combo("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).combo("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).combo("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).combo("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).combo("getIcon", index);
	};

	/**
	 * 方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.panel = function() {

		return $("#" + this.id()).combo("panel");
	};

	/**
	 * 显示面板
	 * 
	 * @returns
	 */
	Constructor.prototype.showPanel = function() {

		return $("#" + this.id()).combo("showPanel");
	};

	/**
	 * 隐藏面板
	 * 
	 * @returns
	 */
	Constructor.prototype.hidePanel = function() {

		return $("#" + this.id()).combo("hidePanel");
	};

	/**
	 * 获取值集合
	 * 
	 * @returns
	 */
	Constructor.prototype.getValues = function() {

		return $("#" + this.id()).combo("getValues");
	};

	/**
	 * 设置值集合
	 * 
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return $("#" + this.id()).combo("setValues", values);
	};

	// 返回构造函数
	return Constructor;
})();