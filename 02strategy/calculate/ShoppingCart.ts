module dp.strategy {
    export class ShoppingCart {
        private result: number = 0;
        private context: CashContext1;

        public refresh() {
            this.result = 0;
        }

        public countByFactory(price: number, amount: number) {
            let csuper: CashSuper = CashFactry.createCashAccept(1);
            csuper.acceptCash(100)
            this.result += price * amount;
        }

        public countByStrategy(price: number, amount: number, type) {
            let ct: CashContext1 = null;
            switch (type) {
                case "1": {
                    ct = new CashContext1(new CashNormal());
                }
                case "2": {
                    ct = new CashContext1(new CashDebate(0.8));
                }
                case "3": {
                    ct = new CashContext1(new CashReturn(500, 100));
                }
            }
            return ct.getResult(price * amount);
        }

        public countByFactoryAndStrategy(price: number, amount: number) {
            let cs: CashContext2 = new CashContext2(1);
            cs.getResult(price * amount);
        }
    }
}