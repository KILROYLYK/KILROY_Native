import React from 'react';
import { ScaledSize, Dimensions, SafeAreaView, View } from 'react-native';

import StyleGlobal from './_Project/resource/style/styleGlobal';
import Global from './_Project/application/constant/_global';
import PageWelcome from './_Project/application/page/welcome';

/**
 * 应用
 */
export default class App extends React.Component<any, any> {
    public readonly state: any = { // 状态
        page: PageWelcome // 页面
    };
    private readonly event: any = { // 事件
        change: null // 修改
    };
    
    //---------- 生命周期 Start ----------//
    /**
     * 组件挂载
     */
    public componentDidMount(): void {
        this.event.change = Dimensions.addEventListener('change', (info: { screen: ScaledSize, window: ScaledSize }) => {
            Global.WindowWidth = info.window.width;
            Global.WindowHeight = info.window.height;
        });
    }
    
    /**
     * 是否组件更新
     * @param {Readonly<any>} nextProps 下一帧的参数
     * @param {Readonly<any>} nextState 下一帧的状态
     * @param {any} nextContext 下一帧的内容
     */
    // public shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
    //     return true;
    // }
    
    /**
     * 组件更新
     */
    // public componentDidUpdate(): void {
    // }
    
    /**
     * 组件卸载
     */
    public componentWillUnmount(): void {
        this.event.change.remove();
    }
    
    /**
     * 组件报错
     * @param {Error} error 错误
     * @param {React.ErrorInfo} errorInfo 错误信息
     */
    // public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // }
    
    //---------- 生命周期 End ----------//
    
    /**
     * 渲染
     * @return {ReactNode} 内容
     */
    public render(): React.ReactNode {
        return <SafeAreaView style={ StyleGlobal.base }>
            <View style={ StyleGlobal.body }>
                <this.state.page />
            </View>
        </SafeAreaView>
    }
};
