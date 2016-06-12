/**
 * tabs
 * 
 * Tab页
 * 
 * 对象扩展
 */

$.extend($.fn.tabs.methods, {

	// 双击事件
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