/**
 * 函数
 */
export default class GlobalFunction {
    public static readonly array: any = { // 数组
        /**
         * 遍历
         * @param {array} array 数组
         * @param {function} callback 回调
         */
        traversing(array: any[], callback: Function): void {
            const _this = GlobalFunction;
            
            for (let i = 0, n = array.length; i < n; i++) callback(i, array[i]);
        },
        
        /**
         * 排序
         * @param {array} array 数组
         * @param {string} name 根据属性名称排序（只对对象数组有效）
         * @return {array} 返回排序后数组
         */
        sort(array: any[], name?: string): any[] {
            const _this = GlobalFunction;
            
            if (array.length === 0) return [];
            
            if (!(array[0] instanceof Object) || !name) return array.sort() // 非对象数组
            
            return array.sort((x, y) => {
                return x[name] > y[name] ? 1 : -1;
            });
        },
        
        /**
         * 乱序
         * @param {array} array 数组
         * @return {array} 返回乱序后数组
         */
        random(array: any[]): any[] {
            const _this = GlobalFunction;
            
            return array.sort((x, y) => {
                return Math.random() > 0.5 ? -1 : 1;
            });
        },
        
        /**
         * 去重
         * @param {array} array 数组
         * @return {array} 新数组
         */
        uniq(array: any[]): any[] {
            const _this = GlobalFunction,
                newArray: any[] = [],
                length = array.length;
            
            for (let i = 0; i < length; i++) {
                for (let j = i + 1; j < length; j++) {
                    if (array[i] === array[j]) {
                        i++;
                        j = i;
                    }
                }
                newArray.push(array[i]);
            }
            
            return newArray;
        }
    };
    public static readonly object: any = { // 对象
        /**
         * 遍历
         * @param {*} o 对象
         * @param {function} callback 回调
         */
        traversing(o: any, callback: Function): void {
            const _this = GlobalFunction;
            
            for (const key in o) callback(key, o[key]);
        },
        
        /**
         * 排序
         * @param {*} o 对象
         * @return {*} 返回排序后对象
         */
        sort(o: any): any {
            const _this = GlobalFunction,
                newObject: any = {};
            
            Object.keys(o).sort()
                .forEach((key: string) => {
                    newObject[key] = o[key];
                });
            
            return newObject;
        },
        
        /**
         * 复制
         * @param {*} o 对象
         * @param {boolean} isDeep 是否启用深拷贝
         * @return {*} 新建的对象
         */
        copy(o: any, isDeep: boolean = false): any {
            const _this = GlobalFunction;
            
            return isDeep
                ? Object.assign({}, o)
                : JSON.parse(JSON.stringify(o));
        },
        
        /**
         * 数组化
         * 将可枚举属性转为数组
         * @param {*} o 对象
         * @return {{key:string,value:*}[]} 由key和value组成的数组
         */
        toArray(o: any): { key: string, value: any }[] {
            const _this = GlobalFunction,
                newArray: { key: string, value: any }[] = [];
            
            Object.keys(o).forEach((v: string) => {
                newArray.push({ key: v, value: o[v] });
            });
            
            return newArray;
        }
    };
}
