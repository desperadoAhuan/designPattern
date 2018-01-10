module dp.strategy {
    export class ConcreteStrategyA implements IStrategy {
        public AlgorithmInterface() {
            console.log("a");
        }
    }

    export class ConcreteStrategyB implements IStrategy {
        public AlgorithmInterface() {
            console.log("b");
        }
    }

    export class ConcreteStrategyC implements IStrategy {
        public AlgorithmInterface() {
            console.log("c");
        }
    }
}