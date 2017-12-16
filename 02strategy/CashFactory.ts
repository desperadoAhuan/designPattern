module dp.strategy{
    export class CashFactry{
        static createCashAccept(type:number):CashSuper{
            switch(type)
            {
                case 1:{
                    return new CashNormal();
                }
                case 2:{
                    return new CashDebate(0.8);
                }
                case 3:{
                    return new CashReturn(300,100);
                }
            }
        }
    }
}