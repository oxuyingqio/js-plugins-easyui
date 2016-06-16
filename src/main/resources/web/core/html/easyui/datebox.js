/**
 * datebox
 * 
 * 日期输入框
 * 
 * 对象扩展
 */

/**
 * 日期输入框格式化
 * 
 * @param date{Date}
 *            日期
 * @returns {String}
 */
$.fn.datebox.defaults.formatter = function(date) {

	return date.format("yyyy-MM-dd");
};

/**
 * 日期输入框解析器
 * 
 * @param str{String}
 *            日期字符串
 * @returns {Date}
 */
$.fn.datebox.defaults.parser = function(str) {

	if (!str)
		return new Date();

	var ss = str.split("-");
	// 年
	var year = parseInt(ss[0], 10);
	// 月
	var month = parseInt(ss[1], 10);
	// 日
	var day = parseInt(ss[2], 10);

	if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
		return new Date(year, month - 1, day);
	} else {
		return new Date();
	}
};