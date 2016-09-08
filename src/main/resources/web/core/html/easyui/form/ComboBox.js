/**
 * @name	ComboBox
 * @package core.html.easyui.form
 * @desc	下拉框模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.ComboBox(String id)
 * 
 * @extend	core.html.easyui.form.Combo
 * 
 * @method	Object/core.html.easyui.form.ComboBox			valueField()				获取/设置值域字段名
 * 			Object/core.html.easyui.form.ComboBox			textField()					获取/设置显示域字段名
 * 			Object/core.html.easyui.form.ComboBox			groupField()				获取/设置分组字段
 * 			Object/core.html.easyui.form.ComboBox			groupFormatter()			获取/设置分组格式化
 * 			Object/core.html.easyui.form.ComboBox			mode()						获取/设置数据获取模式
 * 			Object/core.html.easyui.form.ComboBox			url()						获取/设置链接
 * 			Object/core.html.easyui.form.ComboBox			method()					获取/设置请求方式
 * 			Object/core.html.easyui.form.ComboBox			data()						获取/设置数据
 * 			Object/core.html.easyui.form.ComboBox			queryParams()				获取/设置过滤参数
 * 			Object/core.html.easyui.form.ComboBox			limitToList()				获取/设置
 * 			Object/core.html.easyui.form.ComboBox			showItemIcon()				获取/设置项目图标
 * 			Object/core.html.easyui.form.ComboBox			groupPosition()				获取/设置分组位置
 * 			Object/core.html.easyui.form.ComboBox			filter()					获取/设置过滤
 * 			Object/core.html.easyui.form.ComboBox			formatter()					获取/设置格式化
 * 			Object/core.html.easyui.form.ComboBox			loader()					获取/设置加载
 * 			Object/core.html.easyui.form.ComboBox			loadFilter()				获取/设置加载过滤
 * 			Object/core.html.easyui.form.ComboBox			onBeforeLoad()				获取/设置加载前事件
 * 			Object/core.html.easyui.form.ComboBox			onLoadSuccess()				获取/设置加载成功事件
 * 			Object/core.html.easyui.form.ComboBox			onLoadError()				获取/设置加载失败事件
 * 			Object/core.html.easyui.form.ComboBox			onSelect()					获取/设置选择事件
 * 			Object/core.html.easyui.form.ComboBox			onUnselect()				获取/设置取消选择事件
 * 			core.html.easyui.form.ComboBox					init()						初始化组件模板
 * 			Object											getData()					获取数据
 * 			Object											loadData(Object data)		加载数据
 * 			Object											reload(String url)			远程加载数据
 * 			Object											select(Object value)		选择某值
 * 			Object											unselect(Object value)		取消选择某值
 * 
 * @date	2016年8月30日 08:39:57
 */

core.html.easyui.form.ComboBox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.ComboBox.superClass.constructor.call(this, id);

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
		 * 请求方式
		 */
		var method = $.fn.combobox.defaults.method;
		/**
		 * 数据
		 */
		var data = $.fn.combobox.defaults.data;
		/**
		 * 过滤参数
		 */
		var queryParams = $.fn.combobox.defaults.queryParams;
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
		 * 加载
		 */
		var loader = $.fn.combobox.defaults.loader;
		/**
		 * 加载过滤
		 */
		var loadFilter = $.fn.combobox.defaults.loadFilter;

		/**
		 * 事件
		 */
		/**
		 * 加载前事件
		 */
		var onBeforeLoad = $.fn.combobox.defaults.onBeforeLoad;
		/**
		 * 加载成功事件
		 */
		var onLoadSuccess = $.fn.combobox.defaults.onLoadSuccess;
		/**
		 * 加载失败事件
		 */
		var onLoadError = $.fn.combobox.defaults.onLoadError;
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
		 * @param valueField
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
		 * @param textField
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
		 * @param groupField
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
		 * @param groupFormatter
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
		 * @param mode
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
		 * @param url
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
		 * 获取/设置请求方式
		 * 
		 * @param method
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
		 * 获取/设置数据
		 * 
		 * @param data
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
		 * 获取/设置过滤参数
		 * 
		 * @param queryParams
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
		 * @param limitToList
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
		 * @param showItemIcon
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
		 * @param groupPosition
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
		 * @param filter
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
		 * @param formatter
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
		 * 获取/设置加载
		 * 
		 * @param loader
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
		 * 获取/设置加载过滤
		 * 
		 * @param loadFilter
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
		 * 获取/设置加载前事件
		 * 
		 * @param onBeforeLoad
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
		 * 获取/设置加载成功事件
		 * 
		 * @param onLoadSuccess
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
		 * 获取/设置加载失败事件
		 * 
		 * @param onLoadError
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
		 * 获取/设置选择事件
		 * 
		 * @param onSelect
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
		 * @param onUnselect
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
	// 继承下拉框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.Combo);

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.ComboBox}
	 */
	Constructor.prototype.init = function() {
				
		// 校验ID个数
		var idLength = $("[id='" + this.id() + "']").length;
		if (idLength === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.ComboBox", "参数异常", "div(id:" + this.id() + ")不存在.");
		} else if (idLength > 1) {
			new core.lang.Warning(this, "core.html.easyui.form.ComboBox", "参数警告", "div(id:" + this.id() + ")存在多个.");
		}
		
		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 参数配置
		$jQuery.combobox({
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
			// 属性
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
			// 事件
			onBeforeLoad : this.onBeforeLoad(),
			onLoadSuccess : this.onLoadSuccess(),
			onLoadError : this.onLoadError(),
			onSelect : this.onSelect(),
			onUnselect : this.onUnselect()
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

		return $("#" + this.id()).combobox("options");
	};

	/**
	 * 销毁组件
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).combobox("destroy");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).combobox("validate");
	};

	/**
	 * 判断是否校验通过
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).combobox("isValid");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).combobox("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).combobox("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).combobox("resetValidation");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).combobox("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).combobox("disable");
	};

	/**
	 * 只读
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).combobox("readonly", mode);
	};

	/**
	 * TextBox继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.textbox = function() {

		return $("#" + this.id()).combobox("textbox");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.button = function() {

		return $("#" + this.id()).combobox("button");
	};

	/**
	 * 改变宽度
	 * 
	 * @param width
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).combobox("resize", width);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).combobox("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).combobox("reset");
	};

	/**
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).combobox("initValue", value);
	};

	/**
	 * 设置显示文本
	 * 
	 * @param text
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).combobox("setText", text);
	};

	/**
	 * 获取显示文本
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).combobox("getText");
	};

	/**
	 * 设置值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).combobox("setValue", value);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).combobox("getValue");
	};

	/**
	 * 获取图标对象
	 * 
	 * @param index
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).combobox("getIcon", index);
	};

	/**
	 * Combo继承方法
	 */
	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.panel = function() {

		return $("#" + this.id()).combobox("panel");
	};

	/**
	 * 显示面板
	 * 
	 * @returns
	 */
	Constructor.prototype.showPanel = function() {

		return $("#" + this.id()).combobox("showPanel");
	};

	/**
	 * 隐藏面板
	 * 
	 * @returns
	 */
	Constructor.prototype.hidePanel = function() {

		return $("#" + this.id()).combobox("hidePanel");
	};

	/**
	 * 获取值集合
	 * 
	 * @returns
	 */
	Constructor.prototype.getValues = function() {

		return $("#" + this.id()).combobox("getValues");
	};

	/**
	 * 设置值集合
	 * 
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return $("#" + this.id()).combobox("setValues", values);
	};

	/**
	 * 方法
	 */
	/**
	 * 获取数据
	 * 
	 * @returns
	 */
	Constructor.prototype.getData = function() {

		return $("#" + this.id()).combobox("getData");
	};

	/**
	 * 加载数据
	 * 
	 * @param data
	 * @returns
	 */
	Constructor.prototype.loadData = function(data) {

		return $("#" + this.id()).combobox("loadData", data);
	};

	/**
	 * 远程加载数据
	 * 
	 * @param url
	 * @returns
	 */
	Constructor.prototype.reload = function(url) {

		return $("#" + this.id()).combobox("reload", url);
	};

	/**
	 * 选择某值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.select = function(value) {

		return $("#" + this.id()).combobox("select", value);
	};

	/**
	 * 取消选择某值
	 * 
	 * @param value
	 * @returns
	 */
	Constructor.prototype.unselect = function(value) {

		return $("#" + this.id()).combobox("unselect", value);
	};

	// 返回构造函数
	return Constructor;
})();