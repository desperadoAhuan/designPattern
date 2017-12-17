module dp.decorate {
    export class main {
        public mian() {
            let c: ConcreteComponent = new ConcreteComponent();
            let d1: ConcreteDecorationA = new ConcreteDecorationA();
            let d2: ConcreteDecorationB = new ConcreteDecorationB();

            d1.component = c;
            d2.component = d1;
            d2.operation();
        }
    }
}