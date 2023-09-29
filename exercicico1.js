class FiguraGeometrica {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}

class Retangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super(base, altura);
    }
    calcularArea() {
        console.log(`A área do retangulo: ${this.altura * this.base}`);
    }
}

class Circulo extends FiguraGeometrica {
    constructor(base, altura, raio) {
        super(base, altura);
        this.raio = raio;
    }
    calcularArea() {
        console.log(`A área do circulo é: ${Math.PI * this.raio ** 2}`);
    }
}

var retangulo = new Retangulo(10, 20);
retangulo.calcularArea();

var circulo = new Circulo(0, 0, 5);
circulo.calcularArea();
