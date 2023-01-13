

// Definindo o que é jogador 
export class jogador{
    constructor(nome, nivel){
        this.nome = nome; 
        this.nivel = nivel;  
    }
    get jogador(){
        return this.nome, this.nivel
    }
}


const GV = new jogador("Gustavo", "B");
const BD = new jogador("Bernardo", "B");
const TL = new jogador("Túlio", "A");
const BT = new jogador("Batata", "A");
const DV = new jogador("Davi", "B");
const FG = new jogador("Felps", "B");
const VT = new jogador("Vitão", "B");
const LS = new jogador("Luis", "B");
const AP = new jogador("Araripe", "C");
const CO = new jogador("Caio", "B");
const JN = new jogador("Jones", "S");



export const jogadores = [
    GV, BD, TL, BT, DV, FG, VT, LS, AP, CO, JN
];

