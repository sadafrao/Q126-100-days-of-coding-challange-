//Q126
// this function demonistrate this behaviour change in a nested function
const myobject = {
    property: 'value',
   outermethod: function() {
        console.log(this.property);
        const innerFunction = () => {
            console.log(this.property);
    }

innerFunction();
    },

};
myobject.outermethod();
