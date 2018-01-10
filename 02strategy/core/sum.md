#策略模式总结
- 简单工厂：
let cs: CashSuper = CashFactory.createCashAccept(type);
- 策略模式 & 简单工厂：
let cs: CashContext = new CashContext(type);

- 简单工厂模式我们消费者认识了两个类：CashSuper和CashFactory。
- 策略模式和简单工厂只需要消费者认识一个类：CashContext。1，降低了耦合。2，使具体的收费算法彻底和消费者分离。
