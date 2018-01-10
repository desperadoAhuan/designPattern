module dp.agent {
    export class RealSubject extends Subject {
        public Request() {
            console.log("real request");
        }
    }
}