/**
 * @name DateBox
 * @package core.html.easyui.form
 * @desc 日期框模板
 * @type 类
 * 
 * @date 2016年8月30日 13:53:06
 */

core.html.easyui.form.DateBox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.DateBox.superClass.constructor.call(this, id);
		this.panelWidth(180);
		this.panelHeight(undefined);

		/**
		 * 属性
		 */
		/**
		 * 今天按钮
		 */
		var currentText = "Today";
		/**
		 * 关闭按钮
		 */
		var closeText = "Close";
		/**
		 * 确认按钮
		 */
		var okText = "Ok";
		/**
		 * 按钮组
		 */
		var buttons = [];
		/**
		 * 日期框索引
		 */
		var sharedCalendar = null;
		/**
		 * 格式化
		 */
		var formatter = function(date) {

			return date.format("yyyy-MM-dd");
		};
		/**
		 * 解析
		 */
		var parser = function(str) {

			var t = Date.parse(str);
			if (!isNaN(t)) {
				return new Date(t);
			} else {
				return new Date();
			}
		}

		/**
		 * 事件
		 */
		/**
		 * 选择事件
		 */
		var onSelect = function() {

		};

		/**
		 * 获取/设置
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
	};
	// 继承文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.Combo}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.Combo", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.combo({
			// 属性
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
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel()
		});

		return this;
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).combo("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).combo("destroy");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).combo("validate");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).combo("isValid");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).combo("enableValidation");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).combo("disableValidation");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).combo("resetValidation");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).combo("enable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).combo("disable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).combo("readonly", mode);
	};

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
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).combo("resize", width);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).combo("clear");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).combo("reset");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).combo("initValue", value);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).combo("setText", text);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).combo("getText");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).combo("setValue", value);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).combo("getValue");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).combo("getIcon", index);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.panel = function() {

		return $("#" + this.id()).combo("panel");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.showPanel = function() {

		return $("#" + this.id()).combo("showPanel");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.hidePanel = function() {

		return $("#" + this.id()).combo("hidePanel");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getValues = function() {

		return $("#" + this.id()).combo("getValues");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return $("#" + this.id()).combo("setValues", values);
	};

	// 返回构造函数
	return Constructor;
})();