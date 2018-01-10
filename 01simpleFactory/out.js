var dp;
(function (dp) {
    var simplefac;
    (function (simplefac) {
        var add = (function () {
            function add() {
            }
            add.prototype.calculate = function (s1, s2) {
                return s1 + s2;
            };
            return add;
        }());
        simplefac.add = add;
    })(simplefac = dp.simplefac || (dp.simplefac = {}));
})(dp || (dp = {}));
var dp;
(function (dp) {
    var simplefac;
    (function (simplefac) {
        var divide = (function () {
            function divide() {
            }
            divide.prototype.calculate = function (s1, s2) {
                return s1 / s2;
            };
            return divide;
        }());
        simplefac.divide = divide;
    })(simplefac = dp.simplefac || (dp.simplefac = {}));
})(dp || (dp = {}));
var dp;
(function (dp) {
    var simplefac;
    (function (simplefac) {
        var multi = (function () {
            function multi() {
            }
            multi.prototype.calculate = function (s1, s2) {
                return s1 * s2;
            };
            return multi;
        }());
        simplefac.multi = multi;
    })(simplefac = dp.simplefac || (dp.simplefac = {}));
})(dp || (dp = {}));
var dp;
(function (dp) {
    var simplefac;
    (function (simplefac) {
        var sub = (function () {
            function sub() {
            }
            sub.prototype.calculate = function (s1, s2) {
                return s1 - s2;
            };
            return sub;
        }());
        simplefac.sub = sub;
    })(simplefac = dp.simplefac || (dp.simplefac = {}));
})(dp || (dp = {}));
var dp;
(function (dp) {
    var simplefac;
    (function (simplefac) {
        var main = (function () {
            function main() {
            }
            main.prototype.main = function (num1, num2, op) {
                return simplefac.operatorFactory.generateOperate(op).calculate(num1, num2);
            };
            return main;
        }());
        simplefac.main = main;
    })(simplefac = dp.simplefac || (dp.simplefac = {}));
})(dp || (dp = {}));
var dp;
(function (dp) {
    var simplefac;
    (function (simplefac) {
        var operatorFactory = (function () {
            function operatorFactory() {
            }
            operatorFactory.generateOperate = function (op) {
                switch (op) {
                    case "+":
                        return new simplefac.add();
                    case "-":
                        return new simplefac.sub();
                    case "*":
                        return new simplefac.multi();
                    case "/":
                        return new simplefac.divide();
                }
            };
            return operatorFactory;
        }());
        simplefac.operatorFactory = operatorFactory;
    })(simplefac = dp.simplefac || (dp.simplefac = {}));
})(dp || (dp = {}));
