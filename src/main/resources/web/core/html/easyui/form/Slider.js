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
		var width = $.fn.slider.defaults.width;
		var height = $.fn.slider.defaults.height;
		var mode = $.fn.slider.defaults.mode;
		var reversed = $.fn.slider.defaults.reversed;
		var showTip = $.fn.slider.defaults.showTip;
		var disabled = $.fn.slider.defaults.disabled;
		var range = $.fn.slider.defaults.range;
		var value = $.fn.slider.defaults.value;
		var min = $.fn.slider.defaults.min;
		var max = $.fn.slider.defaults.max;
		var step = $.fn.slider.defaults.step;
		var rule = $.fn.slider.defaults.rule;
		var tipFormatter = $.fn.slider.defaults.tipFormatter;
		var converter = $.fn.slider.defaults.converter;

		/**
		 * 事件
		 */
		var onChange = $.fn.slider.defaults.onChange;
		var onSlideStart = $.fn.slider.defaults.onSlideStart;
		var onSlideEnd = $.fn.slider.defaults.onSlideEnd;
		var onComplete = $.fn.slider.defaults.onComplete;

		/**
		 * 获取/设置
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
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.form.ValidateBox}
	 */
	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.form.ValidateBox", "参数异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.validatebox({
			// 属性
			id : this.id(),
			required : this.required(),
			validType : this.validType(),
			delay : this.delay(),
			missingMessage : this.missingMessage(),
			invalidMessage : this.invalidMessage(),
			tipPosition : this.tipPosition(),
			deltaX : this.deltaX(),
			novalidate : this.novalidate(),
			editable : this.editable(),
			disabled : this.disabled(),
			readonly : this.readonly(),
			validateOnCreate : this.validateOnCreate(),
			validateOnBlur : this.validateOnBlur(),

			// 事件
			onBeforeValidate : this.onBeforeValidate(),
			onValidate : this.onValidate()
		});

		return this;
	};

	/**
	 * 方法
	 */

	// 返回构造函数
	return Constructor;
})();