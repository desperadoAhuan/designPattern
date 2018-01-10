module dp.simplefac {
    export class operatorFactory {
        static generateOperate(op: string): IOperator {
            switch (op) {
                case "+":
                    return new add();
                case "-":
                    return new sub();
                case "*":
                    return new multi();
                case "/":
                    return new divide();
            }
        }
    }
}