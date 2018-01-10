module dp.agent {
    export class Proxy extends Subject {
        private raalSubject: RealSubject;
        public Request() {
            if (this.raalSubject == null) {
                this.raalSubject = new RealSubject();
            }
            this.raalSubject.Request();
        }
    }
}