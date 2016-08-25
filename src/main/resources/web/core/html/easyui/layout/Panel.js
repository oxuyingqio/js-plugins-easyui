/**
 * 
 */

core.html.easyui.layout.Panel = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(_id) {

		count++;

		/**
		 * Properties
		 */
		var id = _id || "coreHtmlEasyuiLayoutPanel" + count;
		var title = null;
		var iconCls = null;
		var width = null;
		var height = null;
		var left = null;
		var top = null;
		var cls = null;
		var headerCls = null;
		var bodyCls = null;
		var style = {};
		var fit = false;
		var border = true;
		var doSize = true;
		var noheader = false;
		var content = null;
		var collapsible = false;
		var minimizable = false;
		var maximizable = false;
		var closable = false;
		var tools = [];
		var header = null;
		var footer = null;
		var openAnimation = "";
		var openDuration = 400;
		var closeAnimation = "";
		var closeDuration = 400;
		var collapsed = false;
		var minimized = false;
		var maximized = false;
		var closed = false;
		var href = null;
		var cache = true;
		var loadingMessage = "Loading…";
		var extractor = function(data) {
			return data;
		};
		var method = "get";
		var queryParams = {};
		var loader = function() {

		};

		/**
		 * Events
		 */
		var onBeforeLoad = function(param) {

		};
		var onLoad = function() {

		};
		var onLoadError = function() {

		};
		var onBeforeOpen = function() {

		};
		var onOpen = function() {

		};
		var onBeforeClose = function() {

		};
		var onClose = function() {

		};
		var onBeforeDestroy = function() {

		};
		var onDestroy = function() {

		};
		var onBeforeCollapse = function() {

		};
		var onCollapse = function() {

		};
		var onBeforeExpand = function() {

		};
		var onExpand = function() {

		};
		var onResize = function(width, height) {

		};
		var onMove = function(left, top) {

		};
		var onMaximize = function() {

		};
		var onRestore = function() {

		};
		var onMinimize = function() {

		};

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

	Constructor.prototype.init = function() {

	};

	Constructor.prototype.options = function() {

	};

	Constructor.prototype.panel = function() {

	};

	Constructor.prototype.header = function() {

	};

	Constructor.prototype.footer = function() {

	};

	Constructor.prototype.body = function() {

	};

	Constructor.prototype.setTitle = function(title) {

	};

	Constructor.prototype.open = function(forceOpen) {

	};

	Constructor.prototype.close = function(forceClose) {

	};

	Constructor.prototype.destroy = function(forceDestroy) {

	};

	Constructor.prototype.clear = function() {

	};

	Constructor.prototype.refresh = function(href) {

	};

	Constructor.prototype.resize = function(options) {

	};

	Constructor.prototype.doLayout = function() {

	};

	Constructor.prototype.move = function(options) {

	};

	Constructor.prototype.maximize = function() {

	};

	Constructor.prototype.minimize = function() {

	};

	Constructor.prototype.restore = function() {

	};

	Constructor.prototype.collapse = function(animate) {

	};

	Constructor.prototype.expand = function(animate) {

	};

	// 返回构造函数
	return Constructor;
})();