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
		return this.getDialogConfig().title = title;
	};

	Constructor.prototype.getWidth = function() {
		return this.getDialogConfig().width;
	};

	Constructor.prototype.setWidth = function(width) {
		return this.getDialogConfig().width = width;
	};

	Constructor.prototype.getHeight = function() {
		return this.getDialogConfig().height;
	};

	Constructor.prototype.setHeight = function(height) {
		return this.getDialogConfig().height = height;
	};

	Constructor.prototype.getLeft = function() {
		return this.getDialogConfig().left;
	};

	Constructor.prototype.setLeft = function(left) {
		return this.getDialogConfig().left = left;
	};

	Constructor.prototype.getTop = function() {
		return this.getDialogConfig().top;
	};

	Constructor.prototype.setTop = function(top) {
		return this.getDialogConfig().top = top;
	};

	Constructor.prototype.getBorder = function() {
		return this.getDialogConfig().border;
	};

	Constructor.prototype.setBorder = function(border) {
		return this.getDialogConfig().border = border;
	};

	Constructor.prototype.getContent = function() {
		return this.getDialogConfig().content;
	};

	Constructor.prototype.setContent = function(content) {
		return this.getDialogConfig().content = content;
	};

	Constructor.prototype.getCollapsible = function() {
		return this.getDialogConfig().collapsible;
	};

	Constructor.prototype.setCollapsible = function(collapsible) {
		return this.getDialogConfig().collapsible = collapsible;
	};

	Constructor.prototype.getMinimizable = function() {
		return this.getDialogConfig().minimizable;
	};

	Constructor.prototype.setMinimizable = function(minimizable) {
		return this.getDialogConfig().minimizable = minimizable;
	};

	Constructor.prototype.getMaximizable = function() {
		return this.getDialogConfig().maximizable;
	};

	Constructor.prototype.setMaximizable = function(maximizable) {
		return this.getDialogConfig().maximizable = maximizable;
	};

	Constructor.prototype.getResizable = function() {
		return this.getDialogConfig().resizable;
	};

	Constructor.prototype.setResizable = function(resizable) {
		return this.getDialogConfig().resizable = resizable;
	};

	Constructor.prototype.getToolbar = function() {
		return this.getDialogConfig().toolbar;
	};

	Constructor.prototype.setToolbar = function(toolbar) {
		return this.getDialogConfig().toolbar = toolbar;
	};

	Constructor.prototype.getButtons = function() {
		return this.getDialogConfig().buttons;
	};

	Constructor.prototype.setButtons = function(buttons) {
		return this.getDialogConfig().buttons = buttons;
	};

	/**
	 * 模板初始化
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