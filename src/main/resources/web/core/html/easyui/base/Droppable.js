/**
 * @name	Droppable
 * @package core.html.easyui.base
 * @desc	模板
 * @type	类
 * 
 * @constructor	core.html.easyui.base.Droppable(string id/object jQuery)
 * 
 * @method	object										$jQuery()				获取/设置jQuery对象
 *			selector/core.html.easyui.base.Droppable 	accept()				获取/设置
 *			boolean/core.html.easyui.base.Droppable 	disabled() 				获取/设置
 *			function/core.html.easyui.base.Droppable 	onDragEnter() 			获取/设置
 *			function/core.html.easyui.base.Droppable 	onDragOver() 			获取/设置
 *			function/core.html.easyui.base.Droppable 	onDragLeave()			获取/设置
 *			function/core.html.easyui.base.Droppable 	onDrop() 				获取/设置
 *			core.html.easyui.base.Droppable 			init() 					初始化组件模板
 *			object										options()
 *			void										enable()				启用
 *			void										disable()				禁用
 * 
 * @date	2018年4月17日 14:36:21
 */
core.html.easyui.base.Droppable = (function() {

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
		var accept = $.fn.droppable.defaults.accept;
		/**
		 * 禁止
		 */
		var disabled = $.fn.droppable.defaults.disabled;

		/**
		 * 事件
		 */
		/**
		 * 
		 */
		var onDragEnter = $.fn.droppable.defaults.onDragEnter;
		/**
		 * 
		 */
		var onDragOver = $.fn.droppable.defaults.onDragOver;
		/**
		 * 
		 */
		var onDragLeave = $.fn.droppable.defaults.onDragLeave;
		/**
		 * 
		 */
		var onDrop = $.fn.droppable.defaults.onDrop;

		// 判断构造参数类型
		switch (typeof (arguments[0])) {
		case "string":
			$jQuery = $("#" + arguments[0]);
			break;
		case "object":
			$jQuery = arguments[0];
			break;
		default:
			new core.lang.Exception(arguments[0], "core.html.easyui.base.Droppable", "构造参数异常", "非字符或jQuery对象");
		}

		/**
		 * 获取jQuery对象
		 */
		this.$jQuery = function() {

			return $jQuery;
		};

		/**
		 * 获取/设置
		 * 
		 * @param accept
		 */
		this.accept = function() {

			switch (arguments.length) {
			case 0:
				return accept;
			default:
				accept = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置禁止
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
		 * 获取/设置
		 * 
		 * @param onDragEnter
		 */
		this.onDragEnter = function() {

			switch (arguments.length) {
			case 0:
				return onDragEnter;
			default:
				onDragEnter = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onDragOver
		 */
		this.onDragOver = function() {

			switch (arguments.length) {
			case 0:
				return onDragOver;
			default:
				onDragOver = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onDragLeave
		 */
		this.onDragLeave = function() {

			switch (arguments.length) {
			case 0:
				return onDragLeave;
			default:
				onDragLeave = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onDrop
		 */
		this.onDrop = function() {

			switch (arguments.length) {
			case 0:
				return onDrop;
			default:
				onDrop = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 初始化组件模板
	 * 
	 * @returns {core.html.easyui.base.Droppable}
	 */
	Constructor.prototype.init = function() {

		// 校验Document是否存在
		if (this.$jQuery().length === 0) {

			new core.lang.Exception(this.$jQuery(), "core.html.easyui.base.Droppable", "构造参数异常", "Document不存在.");
		}

		// 参数配置
		this.$jQuery().droppable({
			// 属性
			accept : this.accept(),
			disabled : this.disabled(),

			// 事件
			onDragEnter : this.onDragEnter(),
			onDragOver : this.onDragOver(),
			onDragLeave : this.onDragLeave(),
			onDrop : this.onDrop()
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

		return this.$jQuery().droppable("options");
	};

	/**
	 * 启用
	 * 
	 * @returns
	 */
	Constructor.prototype.enable = function() {

		return this.$jQuery().droppable("enable");
	};

	/**
	 * 禁用
	 * 
	 * @returns
	 */
	Constructor.prototype.disable = function(e) {

		return this.$jQuery().droppable("disable");
	};

	// 返回构造函数
	return Constructor;
})();