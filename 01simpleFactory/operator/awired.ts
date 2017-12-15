module dp.simplefac {
    export class awired {
        static generateOperate(op: string): IOperator {
            let arr = {
                "+": new add(),
                "-": new sub(),
                "*": new multi(),
                "/": new divide()
            }
            return arr[op];
        }
    }
}