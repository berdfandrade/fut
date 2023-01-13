
// Pegando a lista de jogadores 

import { jogadores } from "./jogadores.js";




class jogador{
    constructor(nome, nivel){
        this.nome = nome; 
        this.nivel = nivel;  
    }
    get jogador(){
        return this.nome, this.nivel
    }
}


function randomPlayer() {
  const randomIndex = Math.floor(Math.random() * jogadores.length);
  return jogadores[randomIndex];
}

console.log(randomPlayer(jogadores.nome));
