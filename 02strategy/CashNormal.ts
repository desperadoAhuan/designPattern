module dp.strategy {
    export class CashNormal implements CashSuper {

        public acceptCash(money: number) {
            return money;
        }
    }
}