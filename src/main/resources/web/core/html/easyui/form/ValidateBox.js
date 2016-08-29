/**
 * @name ValidateBox
 * @package core.html.easyui.form
 * @desc 校验文本框模板
 * @type 类
 * 
 * @date 2016年8月29日 16:39:29
 */

core.html.easyui.form.ValidateBox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(_id) {

		// 校验ID
		if (_id === null || _id === undefined) {
			new core.lang.Exception(this, "core.html.easyui.form.ValidateBox", "构造参数异常", "ID属性不能为空");
		}

		/**
		 * 属性
		 */
		/**
		 * ID
		 */
		var id = _id;
		var required = false;
		var validType = null;
		var delay = 200;
		var missingMessage = "该字段为必填字段";
		var invalidMessage = null;
		var tipPosition = "right";

		/**
		 * 获取/设置
		 * 
		 * @param id
		 */
		this.id = function() {

			switch (arguments.length) {
			case 0:
				return id;
			default:
				id = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.button.SwitchButton}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.ValidateBox", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.validatebox({
			// 属性
			id : this.id(),
		});

		return this;
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).switchbutton("options");
	};

	// 返回构造函数
	return Constructor;
})();