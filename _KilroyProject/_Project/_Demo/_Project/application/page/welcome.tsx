import React, { ErrorInfo, ReactNode, Component } from 'react';
import { StyleSheet, Animated, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

/**
 * 欢迎页
 */
export default class Welcome extends Component<any, any> {
    public readonly state: any = { // 状态
        titleFade: new Animated.Value(0) // 动画-标题淡入淡出
    };
    private readonly event: any = { // 事件
    };
    
    //---------- 生命周期 Start ----------//
    /**
     * 组件挂载
     */
    public componentDidMount(): void {
        this.titleFade(500);
        setTimeout(() => {
            this.titleFade(500, false);
        }, 2000);
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
    // public componentWillUnmount(): void {
    // }
    
    /**
     * 组件报错
     * @param {Error} error 错误
     * @param {ErrorInfo} errorInfo 错误信息
     */
    // public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // }
    
    //---------- 生命周期 End ----------//
    
    /**
     * 渲染
     * @return {ReactNode} 内容
     */
    public render(): ReactNode {
        return <View style={ style.container }>
            <Animated.View style={ [
                style.titleAnim,
                { opacity: this.state.titleFade }
            ] }>
                <Text style={ [ style.title ] }>KILROY</Text>
            </Animated.View>
        </View>
    }
    
    /**
     * 标题淡入淡出
     * @param {number} time 时间
     * @param {boolean} isShow 是否显示
     */
    private titleFade(time: number, isShow: boolean = true): void {
        Animated.timing(this.state.titleFade, {
            useNativeDriver: true,
            toValue: isShow ? 1 : 0,
            duration: time
        }).start();
    }
}

/**
 * 样式
 */
const style = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        height: '100%'
    },
    titleAnim: {
        width: '100%',
        marginTop: 150,
    },
    title: {
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        color: Colors.white,
        textShadowColor: Colors.white,
        textShadowRadius: 10,
        lineHeight: 60,
        fontSize: 50,
        fontWeight: 'bold'
    }
});
