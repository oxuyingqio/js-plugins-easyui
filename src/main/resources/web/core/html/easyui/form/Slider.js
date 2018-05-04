/**
 * @name	Slider
 * @package core.html.easyui.form
 * @desc	拖动条模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.Slider(string id/object jQuery)
 * 
 * @extend	core.html.easyui.base.Draggable
 * 
 * @method	继承core.html.easyui.base.Draggable所有方法
 * 			number/core.html.easyui.form.Slider		width(number width)					获取/设置宽度
 * 			number/core.html.easyui.form.Slider		height(number height)				获取/设置高度
 * 			string/core.html.easyui.form.Slider		mode(string mode)					获取/设置拖动条方向
 * 			boolean/core.html.easyui.form.Slider	reversed(boolean reversed)			获取/设置方向反转
 * 			boolean/core.html.easyui.form.Slider	showTip(boolean showTip)			获取/设置显示值信息
 * 			boolean/core.html.easyui.form.Slider	range(boolean range)				获取/设置拖动条范围
 * 			number/core.html.easyui.form.Slider		value(number value)					获取/设置值
 * 			number/core.html.easyui.form.Slider		min(number min)						获取/设置最小值
 * 			number/core.html.easyui.form.Slider		max(number max)						获取/设置最大值
 * 			number/core.html.easyui.form.Slider		step(number step)					获取/设置步幅
 * 			array/core.html.easyui.form.Slider		rule(array rule)					获取/设置
 * 			function/core.html.easyui.form.Slider	tipFormatter(function tipFormatter)	获取/设置格式化显示信息
 * 			function/core.html.easyui.form.Slider	converter(function converter)		获取/设置转换某些值
 * 			function/core.html.easyui.form.Slider	onChange(function onChange)			获取/设置改变事件
 * 			function/core.html.easyui.form.Slider	onSlideStart(function onSlideStart)	获取/设置开始拖动事件
 * 			function/core.html.easyui.form.Slider	onSlideEnd(function onSlideEnd)		获取/设置结束拖动事件
 * 			function/core.html.easyui.form.Slider	onComplete(function onComplete)		获取/设置完整
 * 			core.html.easyui.form.Slider			init()								初始化组件模板
 * 			object									options()				
 * 			void									destroy()							销毁对象
 * 			void									resize(object param)				改变大小
 * 			string									getValue()							获取值
 * 			array									getValues()							获取值
 * 			void									setValue(string value)				设置值
 * 			void									setValues(array value)				设置值
 * 			void									clear()								清除
 * 			void									reset()								重置
 * 			void									enable()							启用
 * 			void									disable()							禁用
 * 
 * @date	2018年5月4日 15:46:29
 */
core.html.easyui.form.Slider = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 调用父类构造
		core.html.easyui.form.Slider.superClass.constructor.call(this, arguments[0]);
		// 默认参数修改
		this.disabled($.fn.slider.defaults.disabled);

		/**
		 * 属性
		 */
		/**
		 * 宽度
		 */
		var width = $.fn.slider.defaults.width;
		/**
		 * 高度
		 */
		var height = $.fn.slider.defaults.height;
		/**
		 * 拖动条方向
		 */
		var mode = $.fn.slider.defaults.mode;
		/**
		 * 方向反转
		 */
		var reversed = $.fn.slider.defaults.reversed;
		/**
		 * 显示值信息
		 */
		var showTip = $.fn.slider.defaults.showTip;
		/**
		 * 拖动条范围
		 */
		var range = $.fn.slider.defaults.range;
		/**
		 * 值
		 */
		var value = $.fn.slider.defaults.value;
		/**
		 * 最小值
		 */
		var min = $.fn.slider.defaults.min;
		/**
		 * 最大值
		 */
		var max = $.fn.slider.defaults.max;
		/**
		 * 步幅
		 */
		var step = $.fn.slider.defaults.step;
		/**
		 * 
		 */
		var rule = $.fn.slider.defaults.rule;
		/**
		 * 格式化显示信息
		 */
		var tipFormatter = $.fn.slider.defaults.tipFormatter;
		/**
		 * 转换某些值
		 */
		var converter = $.fn.slider.defaults.converter;

		/**
		 * 事件
		 */
		/**
		 * 改变事件
		 */
		var onChange = $.fn.slider.defaults.onChange;
		/**
		 * 开始拖动事件
		 */
		var onSlideStart = $.fn.slider.defaults.onSlideStart;
		/**
		 * 结束拖动事件
		 */
		var onSlideEnd = $.fn.slider.defaults.onSlideEnd;
		/**
		 * 完整
		 */
		var onComplete = $.fn.slider.defaults.onComplete;

		/**
		 * 获取/设置宽度
		 * 
		 * @param width{number}
		 * @returns {number/core.html.easyui.form.Slider}
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
		 * 获取/设置高度
		 * 
		 * @param height{number}
		 * @returns {number/core.html.easyui.form.Slider}
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
		 * 获取/设置拖动条方向
		 * 
		 * @param mode{string}
		 * @returns {string/core.html.easyui.form.Slider}
		 */
		this.mode = function() {

			switch (arguments.length) {
			case 0:
				return mode;
			default:
				mode = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置方向反转
		 * 
		 * @param reversed{boolean}
		 * @returns {boolean/core.html.easyui.form.Slider}
		 */
		this.reversed = function() {

			switch (arguments.length) {
			case 0:
				return reversed;
			default:
				reversed = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置显示值信息
		 * 
		 * @param showTip{boolean}
		 * @returns {boolean/core.html.easyui.form.Slider}
		 */
		this.showTip = function() {

			switch (arguments.length) {
			case 0:
				return showTip;
			default:
				showTip = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置拖动条范围
		 * 
		 * @param range{boolean}
		 * @returns {boolean/core.html.easyui.form.Slider}
		 */
		this.range = function() {

			switch (arguments.length) {
			case 0:
				return range;
			default:
				range = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置值
		 * 
		 * @param value{number}
		 * @returns {number/core.html.easyui.form.Slider}
		 */
		this.value = function() {

			switch (arguments.length) {
			case 0:
				return value;
			default:
				value = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置最小值
		 * 
		 * @param min{number}
		 * @returns {number/core.html.easyui.form.Slider}
		 */
		this.min = function() {

			switch (arguments.length) {
			case 0:
				return min;
			default:
				min = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置最大值
		 * 
		 * @param max{number}
		 * @returns {number/core.html.easyui.form.Slider}
		 */
		this.max = function() {

			switch (arguments.length) {
			case 0:
				return max;
			default:
				max = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置步幅
		 * 
		 * @param step{number}
		 * @returns {number/core.html.easyui.form.Slider}
		 */
		this.step = function() {

			switch (arguments.length) {
			case 0:
				return step;
			default:
				step = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param rule{array}
		 * @returns {array/core.html.easyui.form.Slider}
		 */
		this.rule = function() {

			switch (arguments.length) {
			case 0:
				return rule;
			default:
				rule = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置格式化显示信息
		 * 
		 * @param tipFormatter{function}
		 * @returns {function/core.html.easyui.form.Slider}
		 */
		this.tipFormatter = function() {

			switch (arguments.length) {
			case 0:
				return tipFormatter;
			default:
				tipFormatter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置转换某些值
		 * 
		 * @param converter{function}
		 * @returns {function/core.html.easyui.form.Slider}
		 */
		this.converter = function() {

			switch (arguments.length) {
			case 0:
				return converter;
			default:
				converter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置改变事件
		 * 
		 * @param onChange{function}
		 * @returns {function/core.html.easyui.form.Slider}
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

		/**
		 * 获取/设置开始拖动事件
		 * 
		 * @param onSlideStart{function}
		 * @returns {function/core.html.easyui.form.Slider}
		 */
		this.onSlideStart = function() {

			switch (arguments.length) {
			case 0:
				return onSlideStart;
			default:
				onSlideStart = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置结束拖动事件
		 * 
		 * @param onSlideEnd{function}
		 * @returns {function/core.html.easyui.form.Slider}
		 */
		this.onSlideEnd = function() {

			switch (arguments.length) {
			case 0:
				return onSlideEnd;
			default:
				onSlideEnd = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置完整
		 * 
		 * @param onComplete{function}
		 * @returns {function/core.html.easyui.form.Slider}
		 */
		this.onComplete = function() {

			switch (arguments.length) {
			case 0:
				return onComplete;
			default:
				onComplete = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.Slider}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.base.Draggable", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().slider({
			// Draggable继承属性
			proxy : this.proxy(),
			revert : this.revert(),
			cursor : this.cursor(),
			deltaX : this.deltaX(),
			deltaY : this.deltaY(),
			handle : this.handle(),
			disabled : this.disabled(),
			edge : this.edge(),
			axis : this.axis(),
			delay : this.delay(),
			// 属性
			width : this.width(),
			height : this.height(),
			mode : this.mode(),
			reversed : this.reversed(),
			showTip : this.showTip(),
			range : this.range(),
			value : this.value(),
			min : this.min(),
			max : this.max(),
			step : this.step(),
			rule : this.rule(),
			tipFormatter : this.tipFormatter(),
			converter : this.converter(),

			// Draggable继承事件
			onBeforeDrag : this.onBeforeDrag(),
			onStartDrag : this.onStartDrag(),
			onDrag : this.onDrag(),
			onEndDrag : this.onEndDrag(),
			onStopDrag : this.onStopDrag(),
			// 事件
			onChange : this.onChange(),
			onSlideStart : this.onSlideStart(),
			onSlideEnd : this.onSlideEnd(),
			onComplete : this.onComplete()
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

		return this.$jQuery().slider("options");
	};

	/**
	 * 销毁对象
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return this.$jQuery().slider("destroy");
	};

	/**
	 * 改变大小
	 * 
	 * @param param{object}
	 * @returns
	 */
	Constructor.prototype.resize = function(param) {

		return this.$jQuery().slider("resize", param);
	};

	/**
	 * 获取值
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.getValue = function() {

		return this.$jQuery().slider("getValue");
	};

	/**
	 * 获取值
	 * 
	 * @returns {array}
	 */
	Constructor.prototype.getValues = function() {

		return this.$jQuery().slider("getValues");
	};

	/**
	 * 设置值
	 * 
	 * @param value{string}
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return this.$jQuery().slider("setValue", value);
	};

	/**
	 * 设置值
	 * 
	 * @param values{array}
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return this.$jQuery().slider("setValues", values);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().slider("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return this.$jQuery().slider("reset");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().slider("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return this.$jQuery().slider("disable");
	};

	// 返回构造函数
	return Constructor;
})();