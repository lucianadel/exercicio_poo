class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    emitirSom() {
        console.log('Fazendo um som...');
    }
}

class Cao extends Animal {
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }

    latir() {
        console.log('Au au!');
    }
}

class Gato extends Animal {
    constructor(nome, corOlhos) {
        super(nome);
        this.corOlhos = corOlhos;
    }

    miar() {
        console.log('Miau!');
    }
};
const meuCao = new Cao('Luna', 'boiadeiro australiano');
meuCao.latir(); // Saída: Au au!
console.log(meuCao.nome); // Saída: Luna
console.log(meuCao.raca); // Saída: boiadeiro australiano

const meuGato = new Gato('Miguel', 'Azuis');
meuGato.miar(); // Saída: Miau!
console.log(meuGato.corOlhos); // Saída: Azuis