module dp.decorate {
    export class Decorator implements Component {
        protected _component: Component;

        public set component(component: Component) {
            this._component = component;
        }

        public operation() {
            if (this._component != null) {
                this._component.operation();
            }
        }

    }
}