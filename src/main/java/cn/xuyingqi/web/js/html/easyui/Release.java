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

	// 日志
	private static Logger logger = Logger.getLogger(Release.class);

	/**
	 * 生成JS发布文件
	 */
	public static void releaseJs() {

		// 项目路径
		String projectPath = System.getProperty("user.dir");
		// JavaScript核心包公共路径
		String jsCommonPath = "/src/main/resources/web/core/";
		// HTML EasyUI扩展包路径集合
		String[] packagePaths = { "package.js", "html/easyui" };

		// 操作的文件类型
		String fileType = ".js";
		// 生成文件的位置
		File coreFile = new File("D:/Users/XuYQ/Desktop/easyui.js");

		// 若生成文件存在,则先删除
		if (coreFile.exists()) {
			coreFile.delete();
		}

		// 循环遍历路径集合
		for (int i = 0; i < packagePaths.length; i++) {

			FileUtils.recursionFile(new File(projectPath + jsCommonPath + packagePaths[i]),
					new HandleSpecifyFormatFile(fileType, new CopyFileContent2SpecifiedFile(coreFile)));
		}

		logger.debug("操作结束");
	}

	public static void main(String[] args) {

		Release.releaseJs();
	}
}
