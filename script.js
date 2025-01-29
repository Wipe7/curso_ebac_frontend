// Classe abstrata base para Smartphone
class Smartphone {
    constructor(marca, modelo, ano) {
        if (this.constructor === Smartphone) {
            throw new Error("Não é possível instanciar uma classe abstrata diretamente.");
        }
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    // Métodos abstratos que devem ser implementados nas classes filhas
    iniciarSistema() {
        throw new Error("O método iniciarSistema() precisa ser implementado nas classes filhas.");
    }

    atualizarSistema() {
        throw new Error("O método atualizarSistema() precisa ser implementado nas classes filhas.");
    }

    // Método comum para todos os smartphones
    mostrarEspecificacoes() {
        return `${this.marca} ${this.modelo} (${this.ano})`;
    }
}

// Classe filha para iOS (iPhone)
class iPhone extends Smartphone {
    constructor(marca, modelo, ano, versaoIOS) {
        super(marca, modelo, ano);
        this.versaoIOS = versaoIOS;
        this.sistemaOperacional = "iOS";
    }

    iniciarSistema() {
        return `Iniciando iOS ${this.versaoIOS} no ${this.modelo}`;
    }

    atualizarSistema() {
        return `Atualizando para nova versão do iOS no ${this.modelo}`;
    }

    usarFaceID() {
        return `Face ID ativado no ${this.modelo}`;
    }
}

// Classe filha para Android
class AndroidPhone extends Smartphone {
    constructor(marca, modelo, ano, versaoAndroid) {
        super(marca, modelo, ano);
        this.versaoAndroid = versaoAndroid;
        this.sistemaOperacional = "Android";
    }

    iniciarSistema() {
        return `Iniciando Android ${this.versaoAndroid} no ${this.modelo}`;
    }

    atualizarSistema() {
        return `Atualizando para nova versão do Android no ${this.modelo}`;
    }

    personalizarTema() {
        return `Personalizando tema do Android no ${this.modelo}`;
    }
}

// Criando instâncias
const iphone14 = new iPhone("Apple", "iPhone 14 Pro", 2022, "16.0");
const galaxyS23 = new AndroidPhone("Samsung", "Galaxy S23", 2023, "13.0");
const pixel7 = new AndroidPhone("Google", "Pixel 7", 2022, "13.0");

// Testando os objetos
console.log("=== iPhone ===");
console.log(iphone14.mostrarEspecificacoes());
console.log(iphone14.iniciarSistema());
console.log(iphone14.usarFaceID());

console.log("\n=== Galaxy ===");
console.log(galaxyS23.mostrarEspecificacoes());
console.log(galaxyS23.iniciarSistema());
console.log(galaxyS23.personalizarTema());

console.log("\n=== Pixel ===");
console.log(pixel7.mostrarEspecificacoes());
console.log(pixel7.iniciarSistema());
console.log(pixel7.personalizarTema());