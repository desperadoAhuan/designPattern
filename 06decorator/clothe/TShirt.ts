module dp.decorate {
    export class TShirt extends IFinery {
        constructor(dress: Dress) {
            super(dress);
        }
        public dress() {
            super.dress();
            console.log("tshirt")
        }
    }
}