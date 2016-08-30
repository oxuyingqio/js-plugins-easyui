/**
 * @name ComboBox
 * @package core.html.easyui.form
 * @desc 下拉框模板
 * @type 类
 * 
 * @date 2016年8月30日 08:39:57
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
		var valueField = "value";
		/**
		 * 显示域字段名
		 */
		var textField = "text";
		/**
		 * 分组字段
		 */
		var groupField = null;
		/**
		 * 分组格式化
		 */
		var groupFormatter = function(group) {
			return group;
		};
		/**
		 * 数据获取模式
		 */
		var mode = "local";
		/**
		 * 链接
		 */
		var url = null;
		/**
		 * 请求方式
		 */
		var method = "post";
		/**
		 * 数据
		 */
		var data = null;
		/**
		 * 过滤参数
		 */
		var queryParams = {};
		/**
		 * 
		 */
		var limitToList = false;
		/**
		 * 项目图标
		 */
		var showItemIcon = false;
		/**
		 * 分组位置
		 */
		var groupPosition = "static";
		/**
		 * 过滤
		 */
		var filter = function(q, row) {

		};
		/**
		 * 格式化
		 */
		var formatter = function(row) {

		};
		/**
		 * 加载
		 */
		var loader = function() {

		};
		/**
		 * 加载过滤
		 */
		var loadFilter = function(data) {

		};

		/**
		 * 事件
		 */
		/**
		 * 加载前事件
		 */
		var onBeforeLoad = function(param) {

		};
		/**
		 * 加载成功事件
		 */
		var onLoadSuccess = function() {

		};
		/**
		 * 加载失败事件
		 */
		var onLoadError = function() {

		};
		/**
		 * 选择事件
		 */
		var onSelect = function(record) {

		};
		/**
		 * 取消选择事件
		 */
		var onUnselect = function(record) {

		};

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

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.ComboBox", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.combobox({
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
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate(),
			onChange : this.onChange(),
			onResize : this.onResize(),
			onClickButton : this.onClickButton(),
			onClickIcon : this.onClickIcon(),
			onShowPanel : this.onShowPanel(),
			onHidePanel : this.onHidePanel(),
			onBeforeLoad : this.onBeforeLoad(),
			onLoadSuccess : this.onLoadSuccess(),
			onLoadError : this.onLoadError(),
			onSelect : this.onSelect(),
			onUnselect : this.onUnselect()
		});

		return this;
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).combobox("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).combobox("destroy");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).combobox("validate");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.isValid = function() {

		return $("#" + this.id()).combobox("isValid");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).combobox("enableValidation");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).combobox("disableValidation");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).combobox("resetValidation");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).combobox("enable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).combobox("disable");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.readonly = function(mode) {

		return $("#" + this.id()).combobox("readonly", mode);
	};

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
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function(width) {

		return $("#" + this.id()).combobox("resize", width);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).combobox("clear");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).combobox("reset");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.initValue = function(value) {

		return $("#" + this.id()).combobox("initValue", value);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.setText = function(text) {

		return $("#" + this.id()).combobox("setText", text);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getText = function() {

		return $("#" + this.id()).combobox("getText");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).combobox("setValue", value);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).combobox("getValue");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getIcon = function(index) {

		return $("#" + this.id()).combobox("getIcon", index);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.panel = function() {

		return $("#" + this.id()).combobox("panel");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.showPanel = function() {

		return $("#" + this.id()).combobox("showPanel");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.hidePanel = function() {

		return $("#" + this.id()).combobox("hidePanel");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getValues = function() {

		return $("#" + this.id()).combobox("getValues");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return $("#" + this.id()).combobox("setValues", values);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.getData = function() {

		return $("#" + this.id()).combobox("getData");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.loadData = function(data) {

		return $("#" + this.id()).combobox("loadData", data);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.reload = function(url) {

		return $("#" + this.id()).combobox("reload", url);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.select = function(value) {

		return $("#" + this.id()).combobox("select", value);
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.unselect = function(value) {

		return $("#" + this.id()).combobox("unselect", value);
	};

	// 返回构造函数
	return Constructor;
})();