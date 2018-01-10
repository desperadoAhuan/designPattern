module dp.strategy {
    export class CashDebate implements CashSuper{
        private moneyDebate: number = 1;

        constructor(moneyDebate: number) {
            this.moneyDebate = moneyDebate;
        }

        public acceptCash(money: number): number {
            return money * this.moneyDebate;
        }
    }
}