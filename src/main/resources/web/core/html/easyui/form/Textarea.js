/**
 * @name	Textarea
 * @package core.html.easyui.form
 * @desc	文本区模板
 * @type	类
 * 
 * @constructor core.html.easyui.form.Textarea(String id)
 * 
 * @extend	core.html.easyui.form.TextBox
 * 
 * @method	core.html.easyui.form.Textarea init() 初始化组件模板
 * 
 * @date	2016年9月18日 14:32:45
 */

core.html.easyui.form.Textarea = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.easyui.form.TextBox.superClass.constructor.call(this, id);
		this.multiline(true);
	};
	// 继承验证文本框模板
	core.lang.Class.extend(Constructor, core.html.easyui.form.TextBox);

	// 返回构造函数
	return Constructor;
})();