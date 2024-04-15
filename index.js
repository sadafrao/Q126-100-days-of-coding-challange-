//Q126
// this function demonistrate this behaviour change in a nested function
var myobject = {
    property: 'value',
    outermethod: function () {
        var _this = this;
        console.log(this.property);
        var innerFunction = function () {
            console.log(_this.property);
        };
        innerFunction();
    },
};
myobject.outermethod();
