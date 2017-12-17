module dp.decorate {
    export class Person {
        private _name: string;

        constructor(name: string) {
            this._name = name;
        }

        public show(){
            console.log("end")
        }
    }
}