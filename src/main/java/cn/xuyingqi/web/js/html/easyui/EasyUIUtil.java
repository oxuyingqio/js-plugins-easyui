package cn.xuyingqi.web.js.html.easyui;

import java.io.File;

import cn.xuyingqi.util.util.FileUtils;

/**
 * EasyUI工具
 * 
 * @author XuYQ
 *
 */
public class EasyUIUtil {

	/**
	 * 下载指定主题到指定文件夹内
	 * 
	 * @param theme
	 *            主题名称
	 * @param localFile
	 *            本地文件夹
	 */
	public static void downloadTheme(String theme, File localFile) {

		/**
		 * EasyUI 官网地址
		 */
		String easyuiURL = "http://www.jeasyui.com/";

		/**
		 * 公共的文件路径
		 */
		String commonFile = "easyui/themes/";
		/**
		 * 主题涉及的文件
		 */
		String[] themeFiles = new String[] { easyuiURL + commonFile + theme + "/easyui.css",
				easyuiURL + commonFile + theme + "/images/accordion_arrows.png",
				easyuiURL + commonFile + theme + "/images/blank.gif",
				easyuiURL + commonFile + theme + "/images/calendar_arrows.png",
				easyuiURL + commonFile + theme + "/images/combo_arrow.png",
				easyuiURL + commonFile + theme + "/images/datagrid_icons.png",
				easyuiURL + commonFile + theme + "/images/datebox_arrow.png",
				easyuiURL + commonFile + theme + "/images/layout_arrows.png",
				easyuiURL + commonFile + theme + "/images/linkbutton_bg.png",
				easyuiURL + commonFile + theme + "/images/loading.gif",
				easyuiURL + commonFile + theme + "/images/menu_arrows.png",
				easyuiURL + commonFile + theme + "/images/messager_icons.png",
				easyuiURL + commonFile + theme + "/images/pagination_icons.png",
				easyuiURL + commonFile + theme + "/images/panel_tools.png",
				easyuiURL + commonFile + theme + "/images/searchbox_button.png",
				easyuiURL + commonFile + theme + "/images/slider_handle.png",
				easyuiURL + commonFile + theme + "/images/spinner_arrows.png",
				easyuiURL + commonFile + theme + "/images/tabs_icons.png",
				easyuiURL + commonFile + theme + "/images/tree_icons.png",
				easyuiURL + commonFile + theme + "/images/validatebox_warning.png" };

		for (int i = 0; i < themeFiles.length; i++) {

			FileUtils.downloadNetworkResource(themeFiles[i], localFile);
		}
	}

	public static void main(String[] args) {

		EasyUIUtil.downloadTheme("metro-blue", new File("D:/Users/XuYQ/Desktop"));
		EasyUIUtil.downloadTheme("metro-gray", new File("D:/Users/XuYQ/Desktop"));
		EasyUIUtil.downloadTheme("metro-green", new File("D:/Users/XuYQ/Desktop"));
		EasyUIUtil.downloadTheme("metro-orange", new File("D:/Users/XuYQ/Desktop"));
		EasyUIUtil.downloadTheme("metro-red", new File("D:/Users/XuYQ/Desktop"));
		EasyUIUtil.downloadTheme("ui-cupertino", new File("D:/Users/XuYQ/Desktop"));
		EasyUIUtil.downloadTheme("ui-dark-hive", new File("D:/Users/XuYQ/Desktop"));
		EasyUIUtil.downloadTheme("ui-pepper-grinder", new File("D:/Users/XuYQ/Desktop"));
		EasyUIUtil.downloadTheme("ui-sunny", new File("D:/Users/XuYQ/Desktop"));
		System.out.println("操作结束");
	}
}
