/**
 * @name	Slider
 * @package core.html.easyui.form
 * @desc	拖动条模板
 * @type	类
 * 
 * @date	2016年9月1日 11:19:58
 */

core.html.easyui.form.Slider = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(_id) {

		// 校验ID
		if (_id === null || _id === undefined) {
			new core.lang.Exception(this, "core.html.easyui.form.Slider", "构造参数异常", "ID属性不能为空");
		}

		/**
		 * 属性
		 */
		/**
		 * ID
		 */
		var id = _id;
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
		 * 禁用
		 */
		var disabled = $.fn.slider.defaults.disabled;
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
		 * 获取/设置ID
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

		/**
		 * 获取/设置宽度
		 * 
		 * @param width
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
		 * @param height
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
		 * @param mode
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
		 * @param reversed
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
		 * @param showTip
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
		 * 获取/设置禁用
		 * 
		 * @param disabled
		 */
		this.disabled = function() {

			switch (arguments.length) {
			case 0:
				return disabled;
			default:
				disabled = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置拖动条范围
		 * 
		 * @param range
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
		 * @param value
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
		 * @param min
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
		 * @param max
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
		 * @param step
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
		 * @param rule
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
		 * @param tipFormatter
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
		 * @param converter
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
		 * @param onChange
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
		 * @param onSlideStart
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
		 * @param onSlideEnd
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
		 * @param onComplete
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

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.Slider", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.slider({
			// 属性
			id : this.id(),
			width : this.width(),
			height : this.height(),
			mode : this.mode(),
			reversed : this.reversed(),
			showTip : this.showTip(),
			disabled : this.disabled(),
			range : this.range(),
			value : this.value(),
			min : this.min(),
			max : this.max(),
			step : this.step(),
			rule : this.rule(),
			tipFormatter : this.tipFormatter(),
			converter : this.converter(),

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
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).slider("options");
	};

	/**
	 * 销毁对象
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		return $("#" + this.id()).slider("destroy");
	};

	/**
	 * 改变大小
	 * 
	 * @returns
	 */
	Constructor.prototype.resize = function(param) {

		return $("#" + this.id()).slider("resize", param);
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {

		return $("#" + this.id()).slider("getValue");
	};

	/**
	 * 获取值
	 * 
	 * @returns
	 */
	Constructor.prototype.getValues = function() {

		return $("#" + this.id()).slider("getValues");
	};

	/**
	 * 设置值
	 * 
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		return $("#" + this.id()).slider("setValue", value);
	};

	/**
	 * 设置值
	 * 
	 * @returns
	 */
	Constructor.prototype.setValues = function(values) {

		return $("#" + this.id()).slider("setValues", values);
	};

	/**
	 * 清除
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).slider("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).slider("reset");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return $("#" + this.id()).slider("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function() {

		return $("#" + this.id()).slider("disable");
	};

	// 返回构造函数
	return Constructor;
})();