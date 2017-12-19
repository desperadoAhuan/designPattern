module dp.decorate {
    export class Person implements Dress{
        private _name: string;

        constructor(name: string) {
            this._name = name;
        }

        public dress(){
            console.log("end")
        }
    }
}