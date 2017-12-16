module dp.strategy {
    /**
     * 类的划分是为了封装，但是封装的基础是抽象.
     * 
     * @export
     * @class Mian
     */
    export class Main {
        public main() {
            let context: Context1;
            context = new Context1(new ConcreteStrategyA());
            context.ContextInterface();

            context = new Context1(new ConcreteStrategyB());
            context.ContextInterface();

            context = new Context1(new ConcreteStrategyC());
            context.ContextInterface()
            
        }
    }
}