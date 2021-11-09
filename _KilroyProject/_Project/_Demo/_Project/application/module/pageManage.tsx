import React, { ReactNode } from 'react';

/**
 * 页面管理
 */
export default class pageManage {
    private static current: ReactNode = null; // 当前页
    private static readonly history: ReactNode[] = []; // 历史页
    
    /**
     * 下一页
     * @param {ReactNode} page 页面
     */
    public static nextPage(page: ReactNode): void {
        this.current = page;
        this.history.push(this.current);
    }
    
    /**
     * 上一页
     */
    public static prevPage(): void {
        this.current = this.history.pop();
    }
}
