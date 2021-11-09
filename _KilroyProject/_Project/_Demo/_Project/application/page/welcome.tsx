import React, { ErrorInfo, ReactNode, Component } from 'react';
import { StyleSheet, Animated, View, SafeAreaView, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import StyleGlobal from '../../../_Project/resource/style/styleGlobal';

/**
 * 欢迎页
 */
export default class Welcome extends Component<any, any> {
    public readonly state: any = { // 状态
        titleFade: new Animated.Value(0) // 动画-标题淡入淡出
    };
    private readonly event: any = { // 事件
    };
    private readonly animationData: any = { // 动画数据
        delay: 50, // 延时
        wait: 2000, // 等待
        transition: 300 // 过渡
    };
    private readonly animation: any = { // 动画
    };
    
    //---------- 生命周期 Start ----------//
    /**
     * 组件挂载
     */
    public componentDidMount(): void {
        this.playAnimation();
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
            <SafeAreaView style={ [
                StyleGlobal.center,
                style.containerSafe
            ] }>
                <Animated.View style={ [
                    style.titleAnim,
                    { opacity: this.state.titleFade }
                ] }>
                    <Text style={ style.title }>KILROY</Text>
                </Animated.View>
            </SafeAreaView>
        </View>
    }
    
    /**
     * 播放动画
     */
    private playAnimation(): void {
        Animated.sequence([
            Animated.delay(this.animationData.delay),
            Animated.timing(this.state.titleFade, {
                useNativeDriver: true,
                toValue: 1,
                duration: this.animationData.transition
            }),
            Animated.delay(this.animationData.wait),
            Animated.timing(this.state.titleFade, {
                useNativeDriver: true,
                toValue: 0,
                duration: this.animationData.transition
            })
        ]).start();
    }
}

/**
 * 样式
 */
const style = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Colors.black
    },
    containerSafe: {
        height: '100%',
        justifyContent: 'center'
    },
    titleAnim: {
        width: 220,
        height: 60,
        marginTop: -100
    },
    title: {
        height: 60,
        justifyContent: 'center',
        textShadowColor: Colors.white,
        textShadowRadius: 10,
        textAlign: 'center',
        lineHeight: 60,
        color: Colors.white,
        fontSize: 50,
        fontWeight: 'bold'
    }
});
