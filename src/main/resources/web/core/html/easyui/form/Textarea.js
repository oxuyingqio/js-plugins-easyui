/**
 * @name	Textarea
 * @package core.html.easyui.form
 * @desc	文本区模板
 * @type	类
 * 
 * @constructor core.html.easyui.form.Textarea(string id/object jQuery)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 
 * @method	core.html.easyui.form.Textarea init() 初始化组件模板
 * 
 * @date	2018年5月2日 16:14:29
 */
core.html.easyui.form.Textarea = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.Textarea.superClass.constructor.call(this, arguments[0]);
		// 默认参数修改
		this.multiline(true);
	};
	// 继承验证文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	// 返回构造函数
	return Constructor;
})();