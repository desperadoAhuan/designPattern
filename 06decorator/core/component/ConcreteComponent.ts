module dp.decorate {
    export class ConcreteComponent implements Component {
        public operation() {
            console.log("具体对象操作");
        }
    }
}