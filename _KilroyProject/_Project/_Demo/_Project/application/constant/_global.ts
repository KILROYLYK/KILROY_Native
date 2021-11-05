import { Appearance, ColorSchemeName, Dimensions } from 'react-native';

/**
 * 全局
 */
export default class Global {
    public static ColorScheme: ColorSchemeName = Appearance.getColorScheme(); // 颜色方案
    public static WindowWidth: number = Dimensions.get('window').width; // 设备-宽
    public static WindowHeight: number = Dimensions.get('window').height; // 设备-高
}
