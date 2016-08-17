/**
 * Dialog
 * 
 * EasyUI dialog模板
 * 
 * 类
 */

core.html.easyui.dialog.Dialog = (function() {

	// 默认配置
	var DEFAULT_CONFIG = {

		/** ==========panel属性========== */
		// 标题
		title : "&nbsp;",
		// 宽度
		width : 800,
		// 高度
		height : 400,
		// 居左
		left : null,
		// 居顶
		top : null,
		// 是否显示边框
		border : false,
		// 内容
		content : null,
		// 可折叠
		collapsible : false,
		// 可最小化
		minimizable : false,
		// 可最大化
		maximizable : false,

		/** ==========dialog属性========== */
		// 可改变大小
		resizable : false,
		// 工具条
		toolbar : null,
		// 按钮
		buttons : null
	};

	/**
	 * 模板所在Div初始化
	 * 
	 * @param $dialog{Object}
	 *            模板所在Div的jQuery对象
	 */
	function divInit($dialog) {

		$dialog.empty();
	}

	/**
	 * 打包封装模板的jQuery对象
	 * 
	 * @param $dialog{Object}
	 *            模板所在Div的jQuery对象
	 * @returns {Object}
	 */
	function packagejQuery($dialog) {

		/**
		 * 打开dialog
		 * 
		 * @returns
		 */
		$dialog.open = function() {

			$dialog.dialog("open");
		};

		/**
		 * 关闭dialog
		 * 
		 * @returns
		 */
		$dialog.close = function() {

			$dialog.dialog("close");
		};

		return $dialog;
	}

	/**
	 * 构造函数
	 * 
	 * @param divid{String}
	 *            模板所在Div的ID
	 */
	var Constructor = function(_divid) {

		// 模板所在Div的ID
		var divid = _divid;
		// 模板的jQuery对象
		var $dialog = $("#" + divid);
		if ($dialog.length === 0) {
			throw "core.html.easyui.dialog.Dialog:参数异常.DIV(ID:" + divid + ")不存在.";
		}

		// dialog 配置
		var dialogConfig = Object.clone(DEFAULT_CONFIG);

		/**
		 * 获取模板所在Div ID
		 * 
		 * @returns {String}
		 */
		this.getDivid = function() {

			return divid;
		};

		/**
		 * 获取模板所在Div的jQuery对象
		 * 
		 * @returns {Object}
		 */
		this.getDialogjQuery = function() {

			return $dialog;
		};

		/**
		 * 获取模板的配置
		 * 
		 * @returns {Object}
		 */
		this.getDialogConfig = function() {

			return dialogConfig;
		};

		/**
		 * 设置模板的配置
		 * 
		 * @param dialogConfig{Object}
		 *            配置
		 * @returns {core.html.easyui.dialog.Dialog}
		 */
		this.setDialogConfig = function(_dialogConfig) {

			dialogConfig = _dialogConfig;

			return this;
		};
	};

	/**
	 * 获取配置的标题
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getTitle = function() {

		return this.getDialogConfig().title;
	};

	/**
	 * 设置配置的标题
	 * 
	 * @param title{String}
	 *            标题
	 * @returns {core.html.easyui.dialog.Dialog}
	 */
	Constructor.prototype.setTitle = function(title) {

		this.getDialogConfig().title = title;

		return this;
	};

	/**
	 * 获取配置的宽度
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getWidth = function() {

		return this.getDialogConfig().width;
	};

	/**
	 * 设置配置的宽度
	 * 
	 * @param width{Number}
	 *            宽度
	 * @returns {core.html.easyui.dialog.Dialog}
	 */
	Constructor.prototype.setWidth = function(width) {

		this.getDialogConfig().width = width;

		return this;
	};

	/**
	 * 获取配置的高度
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getHeight = function() {

		return this.getDialogConfig().height;
	};

	/**
	 * 设置配置的高度
	 * 
	 * @param height{Number}
	 *            高度
	 * @returns {core.html.easyui.dialog.Dialog}
	 */
	Constructor.prototype.setHeight = function(height) {

		this.getDialogConfig().height = height;

		return this;
	};

	/**
	 * 获取左偏移
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getLeft = function() {

		return this.getDialogConfig().left;
	};

	/**
	 * 设置左偏移
	 * 
	 * @param left{Number}
	 *            左偏移
	 * @returns {core.html.easyui.dialog.Dialog}
	 */
	Constructor.prototype.setLeft = function(left) {

		this.getDialogConfig().left = left;

		return this;
	};

	/**
	 * 获取上偏移
	 * 
	 * @returns {Number}
	 */
	Constructor.prototype.getTop = function() {

		return this.getDialogConfig().top;
	};

	/**
	 * 设置上偏移
	 * 
	 * @param top{Number}
	 *            上偏移
	 * @returns {core.html.easyui.dialog.Dialog}
	 */
	Constructor.prototype.setTop = function(top) {

		this.getDialogConfig().top = top;

		return this;
	};

	/**
	 * 获取配置的边框
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getBorder = function() {

		return this.getDialogConfig().border;
	};

	/**
	 * 设置配置的边框
	 * 
	 * @param border{String}
	 *            边框
	 * @returns {core.html.easyui.dialog.Dialog}
	 */
	Constructor.prototype.setBorder = function(border) {

		this.getDialogConfig().border = border;

		return this;
	};

	/**
	 * 获取配置的内容
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getContent = function() {

		return this.getDialogConfig().content;
	};

	/**
	 * 设置配置的内容
	 * 
	 * @param content{String}
	 *            内容
	 * @returns {core.html.easyui.dialog.Dialog}
	 */
	Constructor.prototype.setContent = function(content) {

		this.getDialogConfig().content = content;

		return this;
	};

	/**
	 * 获取是否显示可折叠按钮
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getCollapsible = function() {

		return this.getDialogConfig().collapsible;
	};

	/**
	 * 设置是否显示可折叠按钮
	 * 
	 * @param collapsible{Boolean}
	 *            是否显示可折叠按钮
	 * @returns {core.html.easyui.dialog.Dialog}
	 */
	Constructor.prototype.setCollapsible = function(collapsible) {

		this.getDialogConfig().collapsible = collapsible;

		return this;
	};

	/**
	 * 获取配置的是否显示最小化按钮
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getMinimizable = function() {

		return this.getDialogConfig().minimizable;
	};

	/**
	 * 设置是否显示最小化按钮
	 * 
	 * @param minimizable{Boolean}
	 *            是否显示最小化按钮
	 * @returns {core.html.easyui.dialog.Dialog}
	 */
	Constructor.prototype.setMinimizable = function(minimizable) {

		this.getDialogConfig().minimizable = minimizable;

		return this;
	};

	/**
	 * 获取是否显示最大化按钮
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getMaximizable = function() {

		return this.getDialogConfig().maximizable;
	};

	/**
	 * 设置是否显示最大化按钮
	 * 
	 * @param maximizable{Boolean}
	 *            是否显示最大化按钮
	 * @returns {core.html.easyui.dialog.Dialog}
	 */
	Constructor.prototype.setMaximizable = function(maximizable) {

		this.getDialogConfig().maximizable = maximizable;

		return this;
	};

	/**
	 * 获取是否可改变大小
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.getResizable = function() {

		return this.getDialogConfig().resizable;
	};

	/**
	 * 设置是否可改变大小
	 * 
	 * @param resizable{Boolean}
	 *            是否可改变大小
	 * @returns {core.html.easyui.dialog.Dialog}
	 */
	Constructor.prototype.setResizable = function(resizable) {

		this.getDialogConfig().resizable = resizable;

		return this;
	};

	/**
	 * 获取工具条
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getToolbar = function() {

		return this.getDialogConfig().toolbar;
	};

	/**
	 * 设置工具条
	 * 
	 * @param toolbar{Array}
	 *            工具条
	 * @returns {core.html.easyui.dialog.Dialog}
	 */
	Constructor.prototype.setToolbar = function(toolbar) {

		this.getDialogConfig().toolbar = toolbar;

		return this;
	};

	/**
	 * 获取按钮
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getButtons = function() {

		return this.getDialogConfig().buttons;
	};

	/**
	 * 设置按钮
	 * 
	 * @param buttons{Array}
	 *            按钮
	 * @returns {core.html.easyui.dialog.Dialog}
	 */
	Constructor.prototype.setButtons = function(buttons) {

		this.getDialogConfig().buttons = buttons;

		return this;
	};

	/**
	 * 模板初始化
	 * 
	 * @returns
	 */
	Constructor.prototype.init = function() {

		// 模板的jQuery对象
		var $dialog = this.getDialogjQuery();
		// 模板所在Div初始化
		divInit($dialog);

		// 生成对应的dialog
		$dialog.dialog(this.getDialogConfig());

		// 返回封装后的jQuery对象
		return packagejQuery($dialog);
	};

	return Constructor;
})();