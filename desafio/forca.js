class Forca {
  vidas=6;
  arrayPalavraIncompleta=[];
  arrayPalavraCompleta=[];
  arrayLetrasChutadas=[];
  vitoria = false; 
  derrota = false;
  
  chutar(letra, palavraCorreta) {
    if(!this.arrayLetrasChutadas.includes(letra) && letra.length==1 && isNaN(letra)){
      this.arrayLetrasChutadas.push(letra);
    for(var i = 0; i<palavraCorreta.length; i++){
      this.arrayPalavraCompleta[i]=palavraCorreta.charAt(i);
    }
      if(palavraCorreta.includes(letra)){
        for(var i = 0; i<palavraCorreta.length; i++){
          if(palavraCorreta.charAt(i)==letra){
                this.arrayPalavraIncompleta[i]=letra;    
          }else{
            if(this.arrayPalavraIncompleta[i]==null){
              this.arrayPalavraIncompleta[i]='_';
            }
          }
        }
        if(JSON.stringify(this.arrayPalavraIncompleta)==JSON.stringify(this.arrayPalavraCompleta)){
          this.vitoria=true;
        }
        
      }else{      
        this.vidas = this.vidas - 1;
        if(this.vidas<=0){
          this.derrota = true;  
        }
      }
    }
  }

  buscarEstado() { 
    if(this.vitoria){
      return "ganhou";
    }
    if(this.derrota){
      return "perdeu";
    }    
    return "aguardando chute"; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      console.clear();
      return {
          letrasChutadas:this.arrayLetrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.arrayPalavraIncompleta // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
