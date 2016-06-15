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
	 * @param $dialog
	 *            模板所在Div的jQuery对象
	 */
	function divInit($dialog) {

		$dialog.empty();
	}

	/**
	 * 打包封装模板的jQuery对象
	 * 
	 * @param $dialog
	 *            模板所在Div的jQuery对象
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
	 * @param divid
	 *            模板所在Div的ID
	 */
	var Constructor = function(_divid) {

		// 模板所在Div的ID
		var divid = _divid;
		// 模板的jQuery对象
		var $dialog = $("#" + divid);
		if ($dialog.length === 0) {
			throw "core.html.easyui.dialog.Dialog:构造异常.DIV(ID:" + divid + ")不存在.";
		}

		// dialog 配置
		var dialogConfig = Object.clone(DEFAULT_CONFIG);

		this.getDivid = function() {
			return divid;
		};

		this.getDialogjQuery = function() {
			return $dialog;
		};

		this.getDialogConfig = function() {
			return dialogConfig;
		};

		this.setDialogConfig = function(_dialogConfig) {
			return dialogConfig = _dialogConfig;
		};
	};

	Constructor.prototype.getTitle = function() {

		return this.getDialogConfig().title;
	};

	Constructor.prototype.setTitle = function(title) {

		this.getDialogConfig().title = title;
		return this;
	};

	Constructor.prototype.getWidth = function() {

		return this.getDialogConfig().width;
	};

	Constructor.prototype.setWidth = function(width) {

		this.getDialogConfig().width = width;
		return this;
	};

	Constructor.prototype.getHeight = function() {

		return this.getDialogConfig().height;
	};

	Constructor.prototype.setHeight = function(height) {

		this.getDialogConfig().height = height;
		return this;
	};

	Constructor.prototype.getLeft = function() {

		return this.getDialogConfig().left;
	};

	Constructor.prototype.setLeft = function(left) {

		this.getDialogConfig().left = left;
		return this;
	};

	Constructor.prototype.getTop = function() {

		return this.getDialogConfig().top;
	};

	Constructor.prototype.setTop = function(top) {

		this.getDialogConfig().top = top;
		return this;
	};

	Constructor.prototype.getBorder = function() {

		return this.getDialogConfig().border;
	};

	Constructor.prototype.setBorder = function(border) {

		this.getDialogConfig().border = border;
		return this;
	};

	Constructor.prototype.getContent = function() {

		return this.getDialogConfig().content;
	};

	Constructor.prototype.setContent = function(content) {

		this.getDialogConfig().content = content;
		return this;
	};

	Constructor.prototype.getCollapsible = function() {

		return this.getDialogConfig().collapsible;
	};

	Constructor.prototype.setCollapsible = function(collapsible) {

		this.getDialogConfig().collapsible = collapsible;
		return this;
	};

	Constructor.prototype.getMinimizable = function() {

		return this.getDialogConfig().minimizable;
	};

	Constructor.prototype.setMinimizable = function(minimizable) {

		this.getDialogConfig().minimizable = minimizable;
		return this;
	};

	Constructor.prototype.getMaximizable = function() {

		return this.getDialogConfig().maximizable;
	};

	Constructor.prototype.setMaximizable = function(maximizable) {

		this.getDialogConfig().maximizable = maximizable;
		return this;
	};

	Constructor.prototype.getResizable = function() {

		return this.getDialogConfig().resizable;
	};

	Constructor.prototype.setResizable = function(resizable) {

		this.getDialogConfig().resizable = resizable;
		return this;
	};

	Constructor.prototype.getToolbar = function() {

		return this.getDialogConfig().toolbar;
	};

	Constructor.prototype.setToolbar = function(toolbar) {

		this.getDialogConfig().toolbar = toolbar;
		return this;
	};

	Constructor.prototype.getButtons = function() {

		return this.getDialogConfig().buttons;
	};

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

		return packagejQuery($dialog);
	};

	return Constructor;
})();