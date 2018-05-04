/**
 * @name	Form
 * @package core.html.easyui.form
 * @desc	表单模板
 * @type	类
 * 
 * @constructor	core.html.easyui.form.Form(string id/object jQuery)
 * 
 * @method 	object								$jQuery()								获取jQuery对象
 * 			boolean/core.html.easyui.form.Form	novalidate(boolean novalidate)			获取/设置取消校验
 * 			boolean/core.html.easyui.form.Form	iframe(boolean iframe)					获取/设置使用iframe模式
 * 			boolean/core.html.easyui.form.Form	ajax(boolean ajax)						获取/设置ajax
 * 			boolean/core.html.easyui.form.Form	dirty(boolean dirty)					获取/设置仅提交更改的字段
 * 			object/core.html.easyui.form.Form	queryParams(object queryParams)			获取/设置参数
 * 			string/core.html.easyui.form.Form	url(string url)							获取/设置action地址
 * 			function/core.html.easyui.form.Form	onSubmit(function onSubmit)				获取/设置提交事件
 * 			function/core.html.easyui.form.Form	onProgress(function onSubmit)			获取/设置
 * 			function/core.html.easyui.form.Form	success(function success)				获取/设置成功事件
 * 			function/core.html.easyui.form.Form	onBeforeLoad(function onBeforeLoad)		获取/设置加载前
 * 			function/core.html.easyui.form.Form	onLoadSuccess(function onLoadSuccess)	获取/设置加载成功
 * 			function/core.html.easyui.form.Form	onLoadError(function onLoadError)		获取/设置加载失败
 * 			function/core.html.easyui.form.Form	onChange(function onChange)				获取/设置改变事件
 * 			void								submit(object options)					提交
 * 			void								load(object data)						加载数据
 * 			void								clear()									清空数据
 * 			void								reset()									重置
 * 			void								validate()								校验
 * 			void								enableValidation()						启用校验
 * 			void								disableValidation()						禁用校验
 * 			void								resetValidation()						重置校验
 * 			void								resetDirty()							重置提交修改
 * 
 * @date	2018年5月2日 15:45:38
 */
core.html.easyui.form.Form = (function() {

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
		 * 取消校验
		 */
		var novalidate = $.fn.form.defaults.novalidate;
		/**
		 * 使用iframe模式
		 */
		var iframe = $.fn.form.defaults.iframe;
		/**
		 * ajax
		 */
		var ajax = $.fn.form.defaults.ajax;
		/**
		 * 仅提交更改的字段
		 */
		var dirty = $.fn.form.defaults.dirty;
		/**
		 * 参数
		 */
		var queryParams = $.fn.form.defaults.queryParams;
		/**
		 * action地址
		 */
		var url = $.fn.form.defaults.url;

		/**
		 * 事件
		 */
		/**
		 * 提交事件
		 */
		var onSubmit = $.fn.form.defaults.onSubmit;
		/**
		 * 
		 */
		var onProgress = $.fn.form.defaults.onProgress;
		/**
		 * 成功事件
		 */
		var success = $.fn.form.defaults.success;
		/**
		 * 加载前
		 */
		var onBeforeLoad = $.fn.form.defaults.onBeforeLoad;
		/**
		 * 加载成功
		 */
		var onLoadSuccess = $.fn.form.defaults.onLoadSuccess;
		/**
		 * 加载失败
		 */
		var onLoadError = $.fn.form.defaults.onLoadError;
		/**
		 * 改变事件
		 */
		var onChange = $.fn.form.defaults.onChange;

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.form.Form", "构造参数异常", "非字符或jQuery对象");
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
		 * 获取/设置取消校验
		 * 
		 * @param novalidate{boolean}
		 * @returns {boolean/core.html.easyui.form.Form}
		 */
		this.novalidate = function() {

			switch (arguments.length) {
			case 0:
				return novalidate;
			default:
				novalidate = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置使用iframe模式
		 * 
		 * @param iframe{boolean}
		 * @returns {boolean/core.html.easyui.form.Form}
		 */
		this.iframe = function() {

			switch (arguments.length) {
			case 0:
				return iframe;
			default:
				iframe = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置ajax
		 * 
		 * @param ajax{boolean}
		 * @returns {boolean/core.html.easyui.form.Form}
		 */
		this.ajax = function() {

			switch (arguments.length) {
			case 0:
				return ajax;
			default:
				ajax = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置仅提交更改的字段
		 * 
		 * @param dirty{boolean}
		 * @returns {boolean/core.html.easyui.form.Form}
		 */
		this.dirty = function() {

			switch (arguments.length) {
			case 0:
				return dirty;
			default:
				dirty = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置参数
		 * 
		 * @param queryParams{object}
		 * @returns {object/core.html.easyui.form.Form}
		 */
		this.queryParams = function() {

			switch (arguments.length) {
			case 0:
				return queryParams;
			default:
				queryParams = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置action地址
		 * 
		 * @param url{string}
		 * @returns {string/core.html.easyui.form.Form}
		 */
		this.url = function() {

			switch (arguments.length) {
			case 0:
				return url;
			default:
				url = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置提交事件
		 * 
		 * @param onSubmit{function}
		 * @returns {function/core.html.easyui.form.Form}
		 */
		this.onSubmit = function() {

			switch (arguments.length) {
			case 0:
				return onSubmit;
			default:
				onSubmit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onProgress{function}
		 * @returns {function/core.html.easyui.form.Form}
		 */
		this.onProgress = function() {

			switch (arguments.length) {
			case 0:
				return onProgress;
			default:
				onProgress = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置成功事件
		 * 
		 * @param success{function}
		 * @returns {function/core.html.easyui.form.Form}
		 */
		this.success = function() {

			switch (arguments.length) {
			case 0:
				return success;
			default:
				success = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置加载前
		 * 
		 * @param onBeforeLoad{function}
		 * @returns {function/core.html.easyui.form.Form}
		 */
		this.onBeforeLoad = function() {

			switch (arguments.length) {
			case 0:
				return onBeforeLoad;
			default:
				onBeforeLoad = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置加载成功
		 * 
		 * @param onLoadSuccess{function}
		 * @returns {function/core.html.easyui.form.Form}
		 */
		this.onLoadSuccess = function() {

			switch (arguments.length) {
			case 0:
				return onLoadSuccess;
			default:
				onLoadSuccess = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置加载失败
		 * 
		 * @param onLoadError{function}
		 * @returns {function/core.html.easyui.form.Form}
		 */
		this.onLoadError = function() {

			switch (arguments.length) {
			case 0:
				return onLoadError;
			default:
				onLoadError = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置改变事件
		 * 
		 * @param onChange{function}
		 * @returns {function/core.html.easyui.form.Form}
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
	 * 方法
	 */
	/**
	 * 提交
	 * 
	 * @param options{object}
	 * @returns
	 */
	Constructor.prototype.submit = function(options) {

		return this.$jQuery().form("submit", options);
	};

	/**
	 * 加载数据
	 * 
	 * @param data{object}
	 * @returns
	 */
	Constructor.prototype.load = function(data) {

		return this.$jQuery().form("load", data);
	};

	/**
	 * 清空数据
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return this.$jQuery().form("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return this.$jQuery().form("reset");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return this.$jQuery().form("validate");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return this.$jQuery().form("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return this.$jQuery().form("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return this.$jQuery().form("resetValidation");
	};

	/**
	 * 重置提交修改
	 * 
	 * @returns
	 */
	Constructor.prototype.resetDirty = function() {

		return this.$jQuery().form("resetDirty");
	};

	// 返回构造函数
	return Constructor;
})();