module dp.decorate {
    export class ConcreteDecorationA extends Decorator {
        private addedState: string;

        public operation() {
            super.operation();
            this.addedState = "New State";
            console.log("具体装饰A的操作");
        }
    }

    export class ConcreteDecorationB extends Decorator {
        public operation() {
            super.operation();
            this.addBehavior();
            console.log("具体装饰B的操作");
        }

        private addBehavior(){
            console.log("something happen!")
        }
    }
}