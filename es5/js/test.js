"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = (function () {
    function Shape(id, x, y) {
        _classCallCheck(this, Shape);

        this.id = id;
        this.move(x, y);
    }

    _createClass(Shape, [{
        key: "move",
        value: function move(x, y) {
            this.x = x;
            this.y = y;
        }
    }]);

    return Shape;
})();

var Rectangle = (function (_Shape) {
    function Rectangle(id, x, y, width, height) {
        _classCallCheck(this, Rectangle);

        _get(Object.getPrototypeOf(Rectangle.prototype), "constructor", this).call(this, id, x, y);
        this.width = width;
        this.height = height;
    }

    _inherits(Rectangle, _Shape);

    return Rectangle;
})(Shape);

var Circle = (function (_Shape2) {
    function Circle(id, x, y, radius) {
        _classCallCheck(this, Circle);

        _get(Object.getPrototypeOf(Circle.prototype), "constructor", this).call(this, id, x, y);
        this.radius = radius;
    }

    _inherits(Circle, _Shape2);

    return Circle;
})(Shape);