function log(message) {
    console.log(message);
}
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i); // This is why we don't use 'var'. Use let instead!
}
var message = 'Hello World';
log(message);
doSomething();
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
