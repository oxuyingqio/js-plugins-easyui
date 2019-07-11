/**
 * @name	Calendar
 * @package core.html.easyui.form
 * @desc	工具提示模板
 * @type	类
 * 
 * @constructor core.html.easyui.base.Calendar(string id/object jQuery)
 * 
 * @method	object										$jQuery()									获取/设置jQuery对象
 *			number/core.html.easyui.base.Calendar 		width(number width)							获取/设置
 *			number/core.html.easyui.base.Calendar 		height(number height) 						获取/设置
 *			boolean/core.html.easyui.base.Calendar 		fit(boolean fit) 							获取/设置
 *			boolean/core.html.easyui.base.Calendar 		border(boolean border) 						获取/设置
 *			boolean/core.html.easyui.base.Calendar 		showWeek(boolean showWeek) 					获取/设置
 *			string/core.html.easyui.base.Calendar 		weekNumberHeader(string weekNumberHeader)	获取/设置
 *			function/core.html.easyui.base.Calendar 	getWeekNumber(function getWeekNumber) 		获取/设置
 *			number/core.html.easyui.base.Calendar 		firstDay(number firstDay) 					获取/设置
 *			array/core.html.easyui.base.Calendar 		weeks(array weeks) 							获取/设置
 *			array/core.html.easyui.base.Calendar 		months(array months) 						获取/设置
 *			number/core.html.easyui.base.Calendar 		year(number year) 							获取/设置
 *			number/core.html.easyui.base.Calendar 		month(number month) 						获取/设置
 *			date/core.html.easyui.base.Calendar 		current(date current)						获取/设置
 *			function/core.html.easyui.base.Calendar 	formatter(function formatter) 				获取/设置
 *			function/core.html.easyui.base.Calendar 	styler(function styler) 					获取/设置
 *			function/core.html.easyui.base.Calendar 	validator(function validator) 				获取/设置
 *			function/core.html.easyui.base.Calendar 	onSelect(function onSelect) 				获取/设置
 *			function/core.html.easyui.base.Calendar 	onChange(function onChange) 				获取/设置
 *			core.html.easyui.base.Calendar 				init() 										初始化组件模板
 *			object										options()
 *			void										resize()									
 *			void										moveTo(date date)							
 * 
 * @date	2018年5月4日 13:29:14
 */
core.html.easyui.form.Calendar = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		/**
		 * 属性
		 */
		/**
		 * jQuery对象
		 */
		var $jQuery;
		/**
		 * 
		 */
		var width = $.fn.calendar.defaults.width;
		/**
		 * 
		 */
		var height = $.fn.calendar.defaults.height;
		/**
		 * 
		 */
		var fit = $.fn.calendar.defaults.fit;
		/**
		 * 
		 */
		var border = $.fn.calendar.defaults.border;
		/**
		 * 
		 */
		var showWeek = $.fn.calendar.defaults.showWeek;
		/**
		 * 
		 */
		var weekNumberHeader = $.fn.calendar.defaults.weekNumberHeader;
		/**
		 * 
		 */
		var getWeekNumber = $.fn.calendar.defaults.getWeekNumber;
		/**
		 * 
		 */
		var firstDay = $.fn.calendar.defaults.firstDay;
		/**
		 * 
		 */
		var weeks = $.fn.calendar.defaults.weeks;
		/**
		 * 
		 */
		var months = $.fn.calendar.defaults.months;
		/**
		 * 
		 */
		var year = $.fn.calendar.defaults.year;
		/**
		 * 
		 */
		var month = $.fn.calendar.defaults.month;
		/**
		 * 
		 */
		var current = $.fn.calendar.defaults.current;
		/**
		 * 
		 */
		var formatter = $.fn.calendar.defaults.formatter;
		/**
		 * 
		 */
		var styler = $.fn.calendar.defaults.styler;
		/**
		 * 
		 */
		var validator = $.fn.calendar.defaults.validator;

		/**
		 * 事件
		 */
		/**
		 * 
		 */
		var onSelect = $.fn.calendar.defaults.onSelect;
		/**
		 * 
		 */
		var onChange = $.fn.calendar.defaults.onChange;

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.form.Calendar", "构造参数异常", "非字符或jQuery对象");
		}

		/**
		 * 获取jQuery对象
		 * 
		 * @returns {object}
		 */
		this.$jQuery = function() {

			return $jQuery;
		};

		/**
		 * 获取/设置
		 * 
		 * @param width{number}
		 * @returns {number/core.html.easyui.base.Calendar}
		 */
		this.width = function() {

			switch (arguments.length) {
			case 0:
				return width;
			default:
				width = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param height{number}
		 * @returns {number/core.html.easyui.base.Calendar}
		 */
		this.height = function() {

			switch (arguments.length) {
			case 0:
				return height;
			default:
				height = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param fit{boolean}
		 * @returns {boolean/core.html.easyui.base.Calendar}
		 */
		this.fit = function() {

			switch (arguments.length) {
			case 0:
				return fit;
			default:
				fit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param border{boolean}
		 * @returns {boolean/core.html.easyui.base.Calendar}
		 */
		this.border = function() {

			switch (arguments.length) {
			case 0:
				return border;
			default:
				border = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param showWeek{boolean}
		 * @returns {boolean/core.html.easyui.base.Calendar}
		 */
		this.showWeek = function() {

			switch (arguments.length) {
			case 0:
				return showWeek;
			default:
				showWeek = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param weekNumberHeader{string}
		 * @returns {string/core.html.easyui.base.Calendar}
		 */
		this.weekNumberHeader = function() {

			switch (arguments.length) {
			case 0:
				return weekNumberHeader;
			default:
				weekNumberHeader = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param getWeekNumber{function}
		 * @returns {function/core.html.easyui.base.Calendar}
		 */
		this.getWeekNumber = function() {

			switch (arguments.length) {
			case 0:
				return getWeekNumber;
			default:
				getWeekNumber = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param firstDay{number}
		 * @returns {number/core.html.easyui.base.Calendar}
		 */
		this.firstDay = function() {

			switch (arguments.length) {
			case 0:
				return firstDay;
			default:
				firstDay = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param weeks{array}
		 * @returns {array/core.html.easyui.base.Calendar}
		 */
		this.weeks = function() {

			switch (arguments.length) {
			case 0:
				return weeks;
			default:
				weeks = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param months{array}
		 * @returns {array/core.html.easyui.base.Calendar}
		 */
		this.months = function() {

			switch (arguments.length) {
			case 0:
				return months;
			default:
				months = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param year{number}
		 * @returns {number/core.html.easyui.base.Calendar}
		 */
		this.year = function() {

			switch (arguments.length) {
			case 0:
				return year;
			default:
				year = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param month{number}
		 * @returns {number/core.html.easyui.base.Calendar}
		 */
		this.month = function() {

			switch (arguments.length) {
			case 0:
				return month;
			default:
				month = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param current{date}
		 * @returns {date/core.html.easyui.base.Calendar}
		 */
		this.current = function() {

			switch (arguments.length) {
			case 0:
				return current;
			default:
				current = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param formatter{function}
		 * @returns {function/core.html.easyui.base.Calendar}
		 */
		this.formatter = function() {

			switch (arguments.length) {
			case 0:
				return formatter;
			default:
				formatter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param styler{function}
		 * @returns {function/core.html.easyui.base.Calendar}
		 */
		this.styler = function() {

			switch (arguments.length) {
			case 0:
				return styler;
			default:
				styler = arguments[0];
				return this;
			}
		};
		
		/**
		 * 获取/设置
		 * 
		 * @param validator{function}
		 * @returns {function/core.html.easyui.base.Calendar}
		 */
		this.validator = function() {

			switch (arguments.length) {
			case 0:
				return validator;
			default:
				validator = arguments[0];
				return this;
			}
		};
		
		/**
		 * 获取/设置
		 * 
		 * @param onSelect{function}
		 * @returns {function/core.html.easyui.base.Calendar}
		 */
		this.onSelect = function() {

			switch (arguments.length) {
			case 0:
				return onSelect;
			default:
				onSelect = arguments[0];
				return this;
			}
		};
		
		/**
		 * 获取/设置
		 * 
		 * @param onChange{function}
		 * @returns {function/core.html.easyui.base.Calendar}
		 */
		this.onChange = function() {

			switch (arguments.length) {
			case 0:
				return onChange;
			default:
				onChange = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.Calendar}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.form.Calendar", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().calendar({
			// 属性
			width : this.width(),
			height : this.height(),
			fit : this.fit(),
			border : this.border(),
			showWeek : this.showWeek(),
			weekNumberHeader : this.weekNumberHeader(),
			getWeekNumber : this.getWeekNumber(),
			firstDay : this.firstDay(),
			weeks : this.weeks(),
			months : this.months(),
			year : this.year(),
			month : this.month(),
			current : this.current(),
			formatter : this.formatter(),
			styler : this.styler(),
			validator : this.validator(),

			// 事件
			onSelect : this.onSelect(),
			onChange : this.onChange()
		});

		return this;
	};

	/**
	 * 方法
	 */
	/**
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.options = function() {

		return this.$jQuery().calendar("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function() {

		return this.$jQuery().calendar("resize");
	};

	/**
	 * 显示
	 * 
	 * @param date{date}
	 * @returns
	 */
	Constructor.prototype.moveTo = function(date) {

		return this.$jQuery().calendar("moveTo", date);
	};

	// 返回构造函数
	return Constructor;
})();