
// Algoritmo para sortear..

const jogadores = ["Bernardo", "Gustavo", "Glaybson", " Julio", "Vitão"];


class jogador{
    constructor(nome, nivel){
        this.nome = nome; 
        this.nivel = nivel;  
    }
    get jogador(){
        return this.nome, this.nivel
    }
}

const p1 = new jogador("Gustavo", "B");
const p2 = new jogador("Bernardo", "B");
const p3 = new jogador("Túlio", "A");
const p4 = new jogador("Gustavo", "B");
const p5 = new jogador("Gustavo", "B");
const p6 = new jogador("Gustavo", "B");
const p7 = new jogador("Gustavo", "B");
const p8 = new jogador("Gustavo", "B");
const p9 = new jogador("Gustavo", "B");
const p10 = new jogador("Gustavo", "B");
const p11 = new jogador("Gustavo", "B");


console.log(p3.nivel)


// Criando o randomizador 

// function random (arr) {
//     return arr[Math.floor(Math.random()*arr.length)];
// }

// console.log(random(jogadores)); 