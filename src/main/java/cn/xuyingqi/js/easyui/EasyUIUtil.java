package cn.xuyingqi.js.easyui;

import java.io.File;

import cn.xuyingqi.utils.FileUtils;

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
	 * @param theme     主题名称
	 * @param localFile 本地文件夹
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
		String[] themeFiles = new String[] { easyuiURL + commonFile + theme + "/accordion.css", easyuiURL + commonFile + theme + "/calendar.css",
				easyuiURL + commonFile + theme + "/checkbox.css", easyuiURL + commonFile + theme + "/combo.css",
				easyuiURL + commonFile + theme + "/combobox.css", easyuiURL + commonFile + theme + "/datagrid.css",
				easyuiURL + commonFile + theme + "/datalist.css", easyuiURL + commonFile + theme + "/datebox.css",
				easyuiURL + commonFile + theme + "/dialog.css", easyuiURL + commonFile + theme + "/easyui.css",
				easyuiURL + commonFile + theme + "/filebox.css", easyuiURL + commonFile + theme + "/layout.css",
				easyuiURL + commonFile + theme + "/linkbutton.css", easyuiURL + commonFile + theme + "/menu.css",
				easyuiURL + commonFile + theme + "/menubutton.css", easyuiURL + commonFile + theme + "/messager.css",
				easyuiURL + commonFile + theme + "/numberbox.css", easyuiURL + commonFile + theme + "/pagination.css",
				easyuiURL + commonFile + theme + "/panel.css", easyuiURL + commonFile + theme + "/passwordbox.css",
				easyuiURL + commonFile + theme + "/progressbar.css", easyuiURL + commonFile + theme + "/propertygrid.css",
				easyuiURL + commonFile + theme + "/radiobutton.css", easyuiURL + commonFile + theme + "/searchbox.css",
				easyuiURL + commonFile + theme + "/sidemenu.css", easyuiURL + commonFile + theme + "/slider.css",
				easyuiURL + commonFile + theme + "/spinner.css", easyuiURL + commonFile + theme + "/splitbutton.css",
				easyuiURL + commonFile + theme + "/switchbutton.css", easyuiURL + commonFile + theme + "/tabs.css",
				easyuiURL + commonFile + theme + "/tagbox.css", easyuiURL + commonFile + theme + "/textbox.css",
				easyuiURL + commonFile + theme + "/timepicker.css", easyuiURL + commonFile + theme + "/tooltip.css",
				easyuiURL + commonFile + theme + "/tree.css", easyuiURL + commonFile + theme + "/validatebox.css",
				easyuiURL + commonFile + theme + "/window.css", easyuiURL + commonFile + theme + "/images/accordion_arrows.png",
				easyuiURL + commonFile + theme + "/images/blank.gif", easyuiURL + commonFile + theme + "/images/calendar_arrows.png",
				easyuiURL + commonFile + theme + "/images/combo_arrow.png", easyuiURL + commonFile + theme + "/images/datagrid_icons.png",
				easyuiURL + commonFile + theme + "/images/datebox_arrow.png", easyuiURL + commonFile + theme + "/images/layout_arrows.png",
				easyuiURL + commonFile + theme + "/images/linkbutton_bg.png", easyuiURL + commonFile + theme + "/images/loading.gif",
				easyuiURL + commonFile + theme + "/images/menu_arrows.png", easyuiURL + commonFile + theme + "/images/messager_icons.png",
				easyuiURL + commonFile + theme + "/images/pagination_icons.png", easyuiURL + commonFile + theme + "/images/panel_tools.png",
				easyuiURL + commonFile + theme + "/images/passwordbox_close.png", easyuiURL + commonFile + theme + "/images/passwordbox_open.png",
				easyuiURL + commonFile + theme + "/images/searchbox_button.png", easyuiURL + commonFile + theme + "/images/slider_handle.png",
				easyuiURL + commonFile + theme + "/images/spinner_arrows.png", easyuiURL + commonFile + theme + "/images/tabs_icons.png",
				easyuiURL + commonFile + theme + "/images/tagbox_icons.png", easyuiURL + commonFile + theme + "/images/tree_icons.png",
				easyuiURL + commonFile + theme + "/images/validatebox_warning.png" };

		for (int i = 0, length = themeFiles.length; i < length; i++) {

			System.out.println("进度:" + (i + 1) + "/" + length);

			FileUtils.downloadNetworkResource(themeFiles[i], localFile);
		}

		System.out.println("操作结束");
	}

	public static void main(String[] args) {

		EasyUIUtil.downloadTheme("material-teal", new File("D:/Users/XuYQ/Desktop"));
		System.out.println("[1/10]");
		EasyUIUtil.downloadTheme("metro-blue", new File("D:/Users/XuYQ/Desktop"));
		System.out.println("[2/10]");
		EasyUIUtil.downloadTheme("metro-gray", new File("D:/Users/XuYQ/Desktop"));
		System.out.println("[3/10]");
		EasyUIUtil.downloadTheme("metro-green", new File("D:/Users/XuYQ/Desktop"));
		System.out.println("[4/10]");
		EasyUIUtil.downloadTheme("metro-orange", new File("D:/Users/XuYQ/Desktop"));
		System.out.println("[5/10]");
		EasyUIUtil.downloadTheme("metro-red", new File("D:/Users/XuYQ/Desktop"));
		System.out.println("[6/10]");
		EasyUIUtil.downloadTheme("ui-cupertino", new File("D:/Users/XuYQ/Desktop"));
		System.out.println("[7/10]");
		EasyUIUtil.downloadTheme("ui-dark-hive", new File("D:/Users/XuYQ/Desktop"));
		System.out.println("[8/10]");
		EasyUIUtil.downloadTheme("ui-pepper-grinder", new File("D:/Users/XuYQ/Desktop"));
		System.out.println("[9/10]");
		EasyUIUtil.downloadTheme("ui-sunny", new File("D:/Users/XuYQ/Desktop"));
		System.out.println("[10/10]");
		System.out.println("[操作结束]");
	}
}