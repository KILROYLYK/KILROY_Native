import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

/**
 * 欢迎页
 */
export default class Welcome extends React.Component<any, any> {
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
    
    public render(): React.ReactNode {
        return <View style={ {
            backgroundColor: Colors.white,
            height: '100%'
        } }>
            <Text>Welcome</Text>
        </View>
    }
}
