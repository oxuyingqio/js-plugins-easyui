/**
 * @name Form
 * @package core.html.easyui.form
 * @desc 表单模板
 * @type 类
 * 
 * @constructor core.html.easyui.form.Form(String id)
 * 
 * @method Object/core.html.easyui.form.Form id() 获取/设置ID
 * 
 * @date 2016年9月14日 09:20:24
 */

core.html.easyui.form.Form = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(_id) {

		// 校验ID
		if (_id === null || _id === undefined) {
			new core.lang.Exception(this, "core.html.easyui.form.Form", "构造参数异常", "ID属性不能为空");
		}

		/**
		 * 属性
		 */
		/**
		 * ID
		 */
		var id = _id;
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
		 * 获取/设置取消校验
		 * 
		 * @param novalidate
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
		 * @param iframe
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
		 * @param ajax
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
		 * @param dirty
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
		 * @param queryParams
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
		 * @param url
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
		 * @param onSubmit
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
		 * @param onProgress
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
		 * @param success
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
		 * @param onBeforeLoad
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
		 * @param onLoadSuccess
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
		 * @param onLoadError
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
	};

	/**
	 * 方法
	 */
	/**
	 * 提交
	 * 
	 * @returns
	 */
	Constructor.prototype.submit = function(options) {

		return $("#" + this.id()).form("submit", options);
	};

	/**
	 * 加载数据
	 * 
	 * @returns
	 */
	Constructor.prototype.load = function(data) {

		return $("#" + this.id()).form("load", data);
	};

	/**
	 * 清空数据
	 * 
	 * @returns
	 */
	Constructor.prototype.clear = function() {

		return $("#" + this.id()).form("clear");
	};

	/**
	 * 重置
	 * 
	 * @returns
	 */
	Constructor.prototype.reset = function() {

		return $("#" + this.id()).form("reset");
	};

	/**
	 * 校验
	 * 
	 * @returns
	 */
	Constructor.prototype.validate = function() {

		return $("#" + this.id()).form("validate");
	};

	/**
	 * 启用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.enableValidation = function() {

		return $("#" + this.id()).form("enableValidation");
	};

	/**
	 * 禁用校验
	 * 
	 * @returns
	 */
	Constructor.prototype.disableValidation = function() {

		return $("#" + this.id()).form("disableValidation");
	};

	/**
	 * 重置校验
	 * 
	 * @returns
	 */
	Constructor.prototype.resetValidation = function() {

		return $("#" + this.id()).form("resetValidation");
	};

	/**
	 * 重置提交修改
	 * 
	 * @returns
	 */
	Constructor.prototype.resetDirty = function() {

		return $("#" + this.id()).form("resetDirty");
	};

	// 返回构造函数
	return Constructor;
})();