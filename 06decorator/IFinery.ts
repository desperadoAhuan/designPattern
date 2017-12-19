module dp.decorate {
    export abstract class IFinery {
        protected _person: Dress;

        constructor(dress:Dress){
            this._person = dress;
        }

        public dress(): void {
            this._person.dress();
        }
    }
}