// Classe Heroi com metodo construtor 
class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
// Método para atacar
    attack(){
        let attack;

        switch(this.tipo) {
            case 'Samurai':
                attack = 'Golpe de Espada!';
                break;
            case 'Mago':
                attack = 'Artes Arcanas!';
                break;
            case 'Capoeirista':
                attack = 'Martelo Cruzado!';
                break;
            case 'Andarilho':
                attack = 'Hadouken!';
                break;
            default:
                attack = 'Attack';            
        }
        console.log(`O [${this.tipo}]  [${this.nome}] usou [ ${attack} ]`);
    }
}

// Instânciando - instâncias (heh) da classe Heroi
let unidade1 = new heroi("Samanosuke", 30, "Samurai");
let unidade2 = new heroi("Patolino O Mago", 25, "Mago");
let unidade3 = new heroi("Eddy Gordo", 32, "Capoeirista");
let unidade4 = new heroi("Ryu", 40, "Andarilho");

// Chamando o método Attack para cada herói
unidade1.attack();
unidade2.attack();
unidade3.attack();
unidade4.attack();