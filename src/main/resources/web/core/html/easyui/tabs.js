/**
 * @name	tabs
 * @package	core.html.easyui
 * @desc	Tab页扩展
 * @type	对象扩展
 * 
 * @date	2016年8月25日 12:02:47
 */

$.extend($.fn.tabs.methods, {

	/**
	 * 双击事件
	 * 
	 * @param jq
	 * @param caller
	 */
	onDblClick : function(jq, caller) {
		return jq.each(function() {
			var that = this;
			$(this).children("div.tabs-header").find("ul.tabs").undelegate("li", "dblclick.tabs").delegate("li",
					"dblclick.tabs", function(e) {
						if (caller && typeof (caller) == "function") {
							var title = $(this).text();
							var index = $(that).tabs("getTabIndex", $(that).tabs("getTab", title));
							caller(index, title);
						}
					});
		});
	}
});