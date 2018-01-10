module dp.simplefac {
    export class main {
        public main(num1: number, num2: number, op: string): number {
            return operatorFactory.generateOperate(op).calculate(num1, num2);
        }
    }
}