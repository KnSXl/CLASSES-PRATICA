// Classe que representa uma pessoa.
class Pessoa {
    // Construtor da classe Pessoa.
    // Recebe o nome e a idade da pessoa.
    constructor(nome, idade) {
        this.nome = nome; // Nome da pessoa
        this.idade = idade; // Idade da pessoa
    }



    // Método para apresentar a pessoa.
    // Recebe objetos do tipo Pessoa.
    /* 1º jeito */
    apresentar(usuario) {
        console.log(`Olá, meu nome é ${usuario.nome} e tenho ${usuario.idade} anos.`);
    }

    /* 2º jeito */
    /*apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }*/



    // Método para indicar que duas pessoas estão em um relacionamento.
    // Recebe dois objetos do tipo Pessoa.
    casal(pessoa1, pessoa2) {
        console.log(`${pessoa1.nome} e ${pessoa2.nome} são um lindo casal!`);
    }


    
    // Método para indicar que um relacionamento entre duas pessoas terminou.
    // Recebe dois objetos do tipo Pessoa.
    termino(pessoa1, pessoa2) {
        console.log(`${pessoa1.nome} e ${pessoa2.nome} terminaram drasticamente!`);
    }
}

export default Pessoa;
