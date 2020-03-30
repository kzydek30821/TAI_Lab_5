var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    };
    Complex.prototype.sub = function (obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    };
    Complex.prototype.modulus = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.toString = function () {
        console.log('Real: ', this.real, 'Imagniary: ', this.imaginary);
    };
    return Complex;
}());
var a = new Complex(3, 4);
var b = new Complex(5, 3);
var c = a.add(b);
console.log('Addition: ');
c.toString();
var d = c.sub(a);
console.log('Subtraction: ');
d.toString();
var e = d.modulus();
console.log('Modulus: ', e);
