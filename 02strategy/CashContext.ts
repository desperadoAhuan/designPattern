module dp.strategy {
    /**
     * 
     * 策略模式
     * 
     * @export
     * @class CashContext1
     */
    export class CashContext1 {
        private cs: CashSuper;

        constructor(cs: CashSuper) {
            this.cs = cs;
        }

        public getResult(money: number) {
            return this.cs.acceptCash(money)
        }
    }

    /**
     * 
     * 工厂模式加策略模式
     * 
     * @export
     * @class CashContext2
     */
    export class CashContext2 {
        private cs: CashSuper;

        constructor(type: number) {
            // this.cs = cs;
            switch (type) {
                case 1:
                    this.cs = new CashNormal();
                    break;
                case 2:
                    this.cs = new CashReturn(500, 100);
                    break;
                case 3:
                    this.cs = new CashDebate(0.8);
                    break;
            }
        }

        public getResult(money: number) {
            return this.cs.acceptCash(money)
        }
    }
}