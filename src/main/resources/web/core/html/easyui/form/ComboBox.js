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
 * 			string										getValue()								获取值
 * 			array										getValues()								获取值
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
	
	/**
	 * 扩展方法
	 */
	/**
	 * 获取值
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getValue = function() {

		return this.$jQuery().combobox("getValue");
	};
	
	/**
	 * 获取值
	 * 
	 * @returns {array}
	 */
	Constructor.prototype.getValues = function() {

		return this.$jQuery().combobox("getValues");
	};

	// 返回构造函数
	return Constructor;
})();