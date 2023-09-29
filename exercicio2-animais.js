class Animal {
    constructor(nome, especie){
        this.nome = nome;
        this.especie = especie;
    } 
}

class Cachorro extends Animal {
    constructor(nome, especie){
        super(nome, especie);
    }

    latir(){
        console.log(`${this.nome} fez AU AU`);
    }
}

class Gato extends Animal {
    constructor(nome, especie){
        super(nome, especie);
    }

    miar(){
        console.log(`${this.nome} fez MIAUU`);
    }
}

var cachorro = new Cachorro("Totó", "Cachorro");
cachorro.latir();

var gato = new Gato("Miaú", "Gato");
gato.miar();