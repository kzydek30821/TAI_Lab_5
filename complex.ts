class Complex {
	private real: number;
	private imaginary: number;
	
	
	constructor(real: number, imaginary: number){
		this.real = real;
		this.imaginary = imaginary;
	}
	
	add(obj:Complex) : Complex {
		return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
	}
	
	sub(obj:Complex) : Complex {
		return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
	}
	
	modulus(): number {
		return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
	}
	
	toString() {
		console.log('Real: ',this.real,'Imagniary: ', this.imaginary);
	}
	
}

let a = new Complex(3,4);
let b = new Complex(5,3);

let c = a.add(b);
console.log('Addition: ');
c.toString();

let d = c.sub(a);
console.log('Subtraction: ');
d.toString();

let e = d.modulus();
console.log('Modulus: ', e);