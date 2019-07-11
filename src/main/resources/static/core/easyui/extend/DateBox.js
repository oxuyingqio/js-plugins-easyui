/**
 * @name	DateBox
 * @package	core.html.easyui
 * @desc	日期输入框扩展
 * @type	对象扩展
 * 
 * @date	2016年8月25日 12:01:20
 */

/**
 * 日期输入框格式化
 * 
 * @param date{date}
 *            日期
 * @returns {string}
 */
$.fn.datebox.defaults.formatter = function(date) {

	return date.format("yyyy-MM-dd");
};

/**
 * 日期输入框解析器
 * 
 * @param str{string}
 *            日期字符串
 * @returns {date}
 */
$.fn.datebox.defaults.parser = function(dateStr) {

	if (!dateStr)
		return new Date();

	// 日期字符串数据
	var data = dateStr.split("-");
	// 年
	var year = parseInt(data[0], 10);
	// 月
	var month = parseInt(data[1], 10);
	// 日
	var day = parseInt(data[2], 10);
	
	// 判断是否为数字
	if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {

		return new Date(year, month - 1, day);
	} else {

		return new Date();
	}
};