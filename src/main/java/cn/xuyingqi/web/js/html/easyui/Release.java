package cn.xuyingqi.web.js.html.easyui;

import java.io.File;

import org.apache.log4j.Logger;

import cn.xuyingqi.util.tool.operatefile.impl.CopyFileContent2SpecifiedFile;
import cn.xuyingqi.util.tool.operatefile.impl.HandleSpecifyFormatFile;
import cn.xuyingqi.util.util.FileUtils;

/**
 * 生成HTML EasyUI扩展发布文件
 * 
 * @author XuYQ
 *
 */
public class Release {

	/**
	 * 日志
	 */
	private static final Logger LOGGER = Logger.getLogger(Release.class);

	/**
	 * 生成JS发布文件
	 */
	public static void releaseJs() {

		// 项目路径
		String projectPath = System.getProperty("user.dir");
		// JavaScript核心包公共路径
		String jsCommonPath = "/src/main/resources/web/core/";
		// HTML EasyUI扩展包路径集合
		String[] packagePaths = { "package.js", "html/easyui/extend", "html/easyui/button",

				// 引用了button
				"html/easyui/base/Draggable.js", "html/easyui/base/Droppable.js", "html/easyui/base/Resizable.js",
				"html/easyui/base/Pagination.js", "html/easyui/base/ProgressBar.js", "html/easyui/base/Tooltip.js",

				// 引用了button,base
				"html/easyui/layout/Panel.js", "html/easyui/layout/Tabs.js", "html/easyui/layout/Accordion.js",
				"html/easyui/layout/Layout.js",

				// 引用了button,base,layout
				"html/easyui/window/Window.js", "html/easyui/window/Dialog.js", "html/easyui/window/Messager.js",

				// 引用了button,base,layout
				"html/easyui/datagrid",

				// 引用了button,base,layout,datagrid
				"html/easyui/form/Form.js", "html/easyui/form/ValidateBox.js", "html/easyui/form/TextBox.js",
				"html/easyui/form/Textarea.js", "html/easyui/form/PasswordBox.js", "html/easyui/form/MaskedBox.js",
				"html/easyui/form/Combo.js", "html/easyui/form/ComboBox.js", "html/easyui/form/ComboTree.js",
				"html/easyui/form/ComboGrid.js", "html/easyui/form/ComboTreeGrid.js", "html/easyui/form/TagBox.js",
				"html/easyui/form/NumberBox.js", "html/easyui/form/Calendar.js", "html/easyui/form/DateBox.js",
				"html/easyui/form/Spinner.js", "html/easyui/form/TimeSpinner.js", "html/easyui/form/DateTimeBox.js",
				"html/easyui/form/DateTimeSpinner.js", "html/easyui/form/NumberSpinner.js",
				"html/easyui/form/Slider.js", "html/easyui/form/FileBox.js",

				// 引用了button,form
				"html/easyui/base/SearchBox.js", };

		// 操作的文件类型
		String fileType = ".js";
		// 生成文件的位置
		File coreFile = new File("D:/Users/XuYQ/Desktop/easyui.js");

		// 若生成文件存在,则先删除
		if (coreFile.exists()) {

			coreFile.delete();
		}

		// 循环遍历路径集合
		for (int i = 0, length = packagePaths.length; i < length; i++) {

			LOGGER.debug("进度:" + (i + 1) + "/" + length);

			FileUtils.recursionFile(new File(projectPath + jsCommonPath + packagePaths[i]),
					new HandleSpecifyFormatFile(fileType, new CopyFileContent2SpecifiedFile(coreFile)));
		}

		LOGGER.debug("操作结束");
	}

	/**
	 * Main函数
	 * 
	 * @param args
	 */
	public static void main(String[] args) {

		Release.releaseJs();
	}
}