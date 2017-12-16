module dp.strategy {
    export class CashReturn implements CashSuper {
        private moneyCondition: number = 0;
        private moneyReturn: number = 0;

        constructor(moneyCondition: number, moneyReturn: number) {
            this.moneyCondition = moneyCondition;
            this.moneyReturn = moneyReturn;
        }

        public acceptCash(money: number) {
            let res = money;
            if (money >= this.moneyCondition) {
                res = money - Math.floor(money / this.moneyCondition) * this.moneyReturn;
            }
            return res;
        }
    }
}