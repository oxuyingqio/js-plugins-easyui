package cn.xuyingqi.web.front.easyui;

import java.io.File;

import org.apache.log4j.Logger;

import cn.xuyingqi.util.tool.operatefile.impl.CopyFileContent2SpecifiedFile;
import cn.xuyingqi.util.tool.operatefile.impl.HandleSpecifyFormatFile;
import cn.xuyingqi.util.util.FileUtils;

/**
 * 合并前台组件JS为一个文�?
 * 
 * @author XuYQ
 *
 */
public class Release {

	private static Logger logger = Logger.getLogger(Release.class);

	public static void releaseJs() {
		// 项目路径
		String projectPath = System.getProperty("user.dir");
		// 前台核心公共路径
		String jsCommonPath = "/src/main/resources/web/core/";
		// 前台核心包路径集�?
		String[] packagePaths = { "package.js", "component" };

		// 文件类型
		String fileType = ".js";
		// 生成文件路径
		File coreFile = new File("D:/Users/XuYQ/Desktop/component.js");
		// File coreFile = new File("D:/用户目录/我的桌面/component.js");

		// 若文件存�?,则删�?
		if (coreFile.exists()) {
			coreFile.delete();
		}

		for (int i = 0; i < packagePaths.length; i++) {
			FileUtils.recursionFile(new File(projectPath + jsCommonPath + packagePaths[i]),
					new HandleSpecifyFormatFile(fileType, new CopyFileContent2SpecifiedFile(coreFile)));
		}

		logger.debug("操作结束");
	}

	public static void releaseCss() {
		// 项目路径
		String projectPath = System.getProperty("user.dir");
		// 前台核心公共路径
		String jsCommonPath = "/src/main/resources/web/core/";
		// 前台核心包路径集�?
		String[] packagePaths = { "component" };

		// 文件类型
		String fileType = ".css";
		// 生成文件路径
		File coreFile = new File("D:/Users/XuYQ/Desktop/component.css");
		// File coreFile = new File("D:/用户目录/我的桌面/component.css");

		// 若文件存�?,则删�?
		if (coreFile.exists()) {
			coreFile.delete();
		}

		for (int i = 0; i < packagePaths.length; i++) {
			FileUtils.recursionFile(new File(projectPath + jsCommonPath + packagePaths[i]),
					new HandleSpecifyFormatFile(fileType, new CopyFileContent2SpecifiedFile(coreFile)));
		}

		logger.debug("操作结束");
	}

	public static void main(String[] args) {
		Release.releaseJs();
		Release.releaseCss();
	}
}
