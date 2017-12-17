#Decorator总结
- Component是定义一个对象接口，可以给这些对象动态地添加职责。
- ConcreteComponent是定义里一个具体的接口，也可以给这个对象添加一些职责。
- Decorator，装饰抽象类，继承了Component，从外类来扩展Component类的功能，但对于Component来说，是无需知道Decorator的存在。
- ConcreteDecorator就是具体的装饰对象，起到给Component添加职责的功能。
=======================
- 装饰器是用set Component来对对象进行包装的，这样每个装饰对象的实现就和如何使用这个对象分离开类，每个装饰对象只关心自己的功能，不需要关心如何被添加到对象链中。
- 如果只有一个ConcreteComponent类而没有抽象的Conponent类，那么Decorator类就可以是ConcreteComponent类的一个子类。同样的道理，如果只有一个ConcreteDecorator类，那么就没有必要建立一个单独的Decorator类，而可以把Decorator和ConcreteDecorator的责任合并成一个类。