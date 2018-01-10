module dp.decorate {
    export class Paints extends IFinery {
        constructor(dress: Dress) {
            super(dress);
        }
        public dress() {
            super.dress();
            console.log("paints")
        }
    }
}