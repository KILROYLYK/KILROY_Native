import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

/**
 * 首页
 */
export default class Home extends React.Component<any, any> {
    public readonly state: any = { // 状态
    };
    private readonly event: any = { // 事件
    };
    
    //---------- 生命周期 Start ----------//
    /**
     * 组件挂载
     */
    // public componentDidMount(): void {
    // }
    
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
    // public componentWillUnmount(): void {
    // }
    
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
        return <View style={ style.container }>
        </View>
    }
}

/**
 * 样式
 */
const style = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        height: '100%'
    }
});
