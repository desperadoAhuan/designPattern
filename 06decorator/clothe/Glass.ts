module dp.decorate{
    export class Glass extends IFinery{
        constructor(dress:Dress){
            super(dress);
        }
        public dress(){
            super.dress();
            console.log("galss")
        }
    }
}