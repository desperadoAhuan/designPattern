var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var dp;
(function (dp) {
    var decorate;
    (function (decorate) {
        var Glass = (function (_super) {
            __extends(Glass, _super);
            function Glass(dress) {
                return _super.call(this, dress) || this;
            }
            Glass.prototype.dress = function () {
                _super.prototype.dress.call(this);
                console.log("galss");
            };
            return Glass;
        }(decorate.IFinery));
        decorate.Glass = Glass;
    })(decorate = dp.decorate || (dp.decorate = {}));
})(dp || (dp = {}));
var dp;
(function (dp) {
    var decorate;
    (function (decorate) {
        var Paints = (function (_super) {
            __extends(Paints, _super);
            function Paints(dress) {
                return _super.call(this, dress) || this;
            }
            Paints.prototype.dress = function () {
                _super.prototype.dress.call(this);
                console.log("paints");
            };
            return Paints;
        }(decorate.IFinery));
        decorate.Paints = Paints;
    })(decorate = dp.decorate || (dp.decorate = {}));
})(dp || (dp = {}));
var dp;
(function (dp) {
    var decorate;
    (function (decorate) {
        var Person = (function () {
            function Person(name) {
                this._name = name;
            }
            Person.prototype.dress = function () {
                console.log("end");
            };
            return Person;
        }());
        decorate.Person = Person;
    })(decorate = dp.decorate || (dp.decorate = {}));
})(dp || (dp = {}));
var dp;
(function (dp) {
    var decorate;
    (function (decorate) {
        var TShirt = (function (_super) {
            __extends(TShirt, _super);
            function TShirt(dress) {
                return _super.call(this, dress) || this;
            }
            TShirt.prototype.dress = function () {
                _super.prototype.dress.call(this);
                console.log("tshirt");
            };
            return TShirt;
        }(decorate.IFinery));
        decorate.TShirt = TShirt;
    })(decorate = dp.decorate || (dp.decorate = {}));
})(dp || (dp = {}));
var dp;
(function (dp) {
    var decorate;
    (function (decorate) {
        var IFinery = (function () {
            function IFinery(dress) {
                this._person = dress;
            }
            IFinery.prototype.dress = function () {
                this._person.dress();
            };
            return IFinery;
        }());
        decorate.IFinery = IFinery;
    })(decorate = dp.decorate || (dp.decorate = {}));
})(dp || (dp = {}));
var dp;
(function (dp) {
    var decorate;
    (function (decorate) {
        var Decorator = (function () {
            function Decorator() {
            }
            Object.defineProperty(Decorator.prototype, "component", {
                set: function (component) {
                    this._component = component;
                },
                enumerable: true,
                configurable: true
            });
            Decorator.prototype.operation = function () {
                if (this._component != null) {
                    this._component.operation();
                }
            };
            return Decorator;
        }());
        decorate.Decorator = Decorator;
    })(decorate = dp.decorate || (dp.decorate = {}));
})(dp || (dp = {}));
var dp;
(function (dp) {
    var decorate;
    (function (decorate) {
        var main = (function () {
            function main() {
            }
            main.prototype.mian = function () {
                var c = new decorate.ConcreteComponent();
                var d1 = new decorate.ConcreteDecorationA();
                var d2 = new decorate.ConcreteDecorationB();
                d1.component = c;
                d2.component = d1;
                d2.operation();
            };
            return main;
        }());
        decorate.main = main;
    })(decorate = dp.decorate || (dp.decorate = {}));
})(dp || (dp = {}));
var dp;
(function (dp) {
    var decorate;
    (function (decorate) {
        var ConcreteComponent = (function () {
            function ConcreteComponent() {
            }
            ConcreteComponent.prototype.operation = function () {
                console.log("具体对象操作");
            };
            return ConcreteComponent;
        }());
        decorate.ConcreteComponent = ConcreteComponent;
    })(decorate = dp.decorate || (dp.decorate = {}));
})(dp || (dp = {}));
var dp;
(function (dp) {
    var decorate;
    (function (decorate) {
        var ConcreteDecorationA = (function (_super) {
            __extends(ConcreteDecorationA, _super);
            function ConcreteDecorationA() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ConcreteDecorationA.prototype.operation = function () {
                _super.prototype.operation.call(this);
                this.addedState = "New State";
                console.log("具体装饰A的操作");
            };
            return ConcreteDecorationA;
        }(decorate.Decorator));
        decorate.ConcreteDecorationA = ConcreteDecorationA;
        var ConcreteDecorationB = (function (_super) {
            __extends(ConcreteDecorationB, _super);
            function ConcreteDecorationB() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ConcreteDecorationB.prototype.operation = function () {
                _super.prototype.operation.call(this);
                this.addBehavior();
                console.log("具体装饰B的操作");
            };
            ConcreteDecorationB.prototype.addBehavior = function () {
                console.log("something happen!");
            };
            return ConcreteDecorationB;
        }(decorate.Decorator));
        decorate.ConcreteDecorationB = ConcreteDecorationB;
    })(decorate = dp.decorate || (dp.decorate = {}));
})(dp || (dp = {}));
