/**
 * @name	tabs
 * @package core.html.easyui.extend
 * @desc	Tab页扩展
 * @type	对象扩展
 * 
 * @date	2016年8月25日 12:02:47
 */
$.extend($.fn.tabs.methods, {

	/**
	 * 双击事件
	 * 
	 * @param $jQuery{object}
	 * @param callback{function}
	 * @returns
	 */
	onDblClick : function(jQuery, callback) {

		return jQuery.each(function() {

			var _this = this;

			$(this).children("div.tabs-header").find("ul.tabs").undelegate("li", "dblclick.tabs").delegate("li",
					"dblclick.tabs", function(e) {

						if (callback && typeof (callback) == "function") {

							var title = $(this).text();
							var index = $(_this).tabs("getTabIndex", $(_this).tabs("getTab", title));

							callback(index, title);
						}
					});
		});
	}
});