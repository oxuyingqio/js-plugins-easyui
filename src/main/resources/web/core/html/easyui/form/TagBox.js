/**
 * @name	TagBox
 * @package	core.html.easyui.form
 * @desc	标签模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.TagBox(String id)
 * 
 * @extend	core.html.easyui.form.ComboBox
 * 
 * @method	Object/core.html.easyui.form.TagBox		hasDownArrow()		获取/设置是否显示向下箭头
 * 			Object/core.html.easyui.form.TagBox		tagFormatter()		获取/设置格式化值
 * 			Object/core.html.easyui.form.TagBox		tagStyler()			获取/设置样式
 * 			Object/core.html.easyui.form.TagBox		onClickTag()		获取/设置点击事件
 * 			Object/core.html.easyui.form.TagBox		onBeforeRemoveTag()	获取/设置移除前事件
 * 			Object/core.html.easyui.form.TagBox		onRemoveTag()		获取/设置移除事件
 *			core.html.easyui.form.TagBox			init()				初始化组件模板
 * 
 * @date	2017年1月17日 13:26:23
 */

core.html.easyui.form.TagBox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.TagBox.superClass.constructor.call(this, id);

		/**
		 * 属性
		 */
		/**
		 * 是否显示向下箭头
		 */
		var hasDownArrow = $.fn.tagbox.defaults.hasDownArrow;
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
		 * 获取/设置是否显示向下箭头
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
		 * 获取/设置格式化值
		 * 
		 * @param tagFormatter
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
		 * @param tagStyler
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
		 * @param onClickTag
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
		 * @param onBeforeRemoveTag
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
		 * @param onRemoveTag
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
	// 继承下拉框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.ComboBox);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.TagBox}
	 */
	Constructor.prototype.init = function() {

		// 校验ID个数
		var idLength = $("[id='" + this.id() + "']").length;
		if (idLength === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.TagBox", "构造参数异常", "DIV(ID:" + this.id() + ")不存在.");
		} else if (idLength > 1) {
			new core.lang.Warning(this, "core.html.easyui.form.TagBox", "构造参数警告", "DIV(ID:" + this.id() + ")存在多个.");
		}

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 参数配置
		$jQuery.tagbox({
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
			// Combo继承属性
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
			// ComboBox继承属性
			valueField : this.valueField(),
			textField : this.textField(),
			groupField : this.groupField(),
			groupFormatter : this.groupFormatter(),
			mode : this.mode(),
			url : this.url(),
			method : this.method(),
			data : this.data(),
			queryParams : this.queryParams(),
			limitToList : this.limitToList(),
			showItemIcon : this.showItemIcon(),
			groupPosition : this.groupPosition(),
			filter : this.filter(),
			formatter : this.formatter(),
			loader : this.loader(),
			loadFilter : this.loadFilter(),
			// 属性
			hasDownArrow : this.hasDownArrow(),
			tagFormatter : this.tagFormatter(),
			tagStyler : this.tagStyler(),

			// 事件
			// Validate继承事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			// TextBox继承事件
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			// Combo继承事件
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel(),
			// ComboBox继承事件
			onBeforeLoad : this.onBeforeLoad(),
			onLoadSuccess : this.onLoadSuccess(),
			onLoadError : this.onLoadError(),
			onSelect : this.onSelect(),
			onUnselect : this.onUnselect(),
			// 事件
			onClickTag : this.onClickTag(),
			onBeforeRemoveTag : this.onBeforeRemoveTag(),
			onRemoveTag : this.onRemoveTag()
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

		return $("#" + this.id()).tagbox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).tagbox("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).tagbox("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).tagbox("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).tagbox("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).tagbox("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).tagbox("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).tagbox("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).tagbox("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).tagbox("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).tagbox("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).tagbox("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).tagbox("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).tagbox("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).tagbox("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).tagbox("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).tagbox("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).tagbox("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).tagbox("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).tagbox("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).tagbox("getIcon", index);
	};

	/**
	 * Combo继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.panel = function() {

		return $("#" + this.id()).tagbox("panel");
	};

	/**
	 * 显示面板
	 * 
	 * @returns
	 */
	Constructor.prototype.showPanel = function() {

		return $("#" + this.id()).tagbox("showPanel");
	};

	/**
	 * 隐藏面板
	 * 
	 * @returns
	 */
	Constructor.prototype.hidePanel = function() {

		return $("#" + this.id()).tagbox("hidePanel");
	};

	/**
	 * 获取值集合
	 * 
	 * @returns
	 */
	Constructor.prototype.getValues = function() {

		return $("#" + this.id()).tagbox("getValues");
	};

	/**
	 * 设置值集合
	 * 
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return $("#" + this.id()).tagbox("setValues", values);
	};

	/**
	 * ComboBox继承方法
	 */
	/**
	 * 获取数据
	 * 
	 * @returns
	 */
	Constructor.prototype.getData = function() {

		return $("#" + this.id()).tagbox("getData");
	};

	/**
	 * 加载数据
	 * 
	 * @param data
	 * @returns
	 */
	Constructor.prototype.loadData = function(data) {

		return $("#" + this.id()).tagbox("loadData", data);
	};

	/**
	 * 远程加载数据
	 * 
	 * @param url
	 * @returns
	 */
	Constructor.prototype.reload = function(url) {

		return $("#" + this.id()).tagbox("reload", url);
	};

	/**
	 * 选择某值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.select = function(value) {

		return $("#" + this.id()).tagbox("select", value);
	};

	/**
	 * 取消选择某值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.unselect = function(value) {

		return $("#" + this.id()).tagbox("unselect", value);
	};

	// 返回构造函数
	return Constructor;
})();