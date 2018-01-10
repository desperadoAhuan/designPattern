module dp.strategy {
    export class Count {
        static parse(type: string) {
            switch (type) {
                case "zk":{
                   return new _zk(); 
                }
                case "fx":{
                    return new _fx();
                }
                    
            }
        }
    }
}