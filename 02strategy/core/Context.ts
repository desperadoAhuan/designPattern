module dp.strategy {
    export class Context {
        private strategy: IStrategy;

        constructor(strategy: IStrategy) {
            this.strategy = strategy;
        }

        public ContextInterface(){
            this.strategy.AlgorithmInterface();
        }
    }
}