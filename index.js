// Idéia é de implementar uma party de 4 pessoas como no jogo Valkyrie Profile / Project x Zone
// Cada unidade possui um ataque que seria acionado quando o botão referente a unidade fosse pressionado
// O desafio pede " idade " como  atributo da classe, embora eu nao acho uma funcionalidade importante 
// Classe Unidade com metodo construtor 
class unidade{
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
let unidade1 = new unidade("Samanosuke", 30, "Samurai");
let unidade2 = new unidade("Patolino O Mago", 25, "Mago");
let unidade3 = new unidade("Eddy Gordo", 32, "Capoeirista");
let unidade4 = new unidade("Ryu", 40, "Andarilho");

// Chamando o método Attack para cada herói
unidade1.attack();
unidade2.attack();
unidade3.attack();
unidade4.attack();