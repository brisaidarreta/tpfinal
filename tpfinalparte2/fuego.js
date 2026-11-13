class fuegos{
  
  constructor(x, y, ancho, alto){
    this.x = x;
    this.y =y;
    this.ancho =ancho;
    this.alto =alto;
    
    this.apagandose=false;
    this. apagado = false;
    
    this.frame=0;
    this.contador=0;
    this.velocidad=6;
    
    this.imagenPrendido=[];
    this.imagenApagado=[];
    for(let i=0; i<5;i++){
    this.imagenPrendido[i]= loadimage("fuego_prendido" +i+".png");
    this.imagenApagado[i]= loadimage("fuego_apagado"+i+".png");
    }
  }
  
  dibujar(){
    if (this.apagado){
      return;
    }
    this.contador=0;
    this.frame++;
    
    if(this.frame <=5){
      if(this.apagandose){
        this.apagado=true
        this.frame =4;
      }else{
        this.frame=0
      }
    }
  }
  
  apagar(){
    if(!this.apagado && !this.apagandose){
      this.apagandose=true;
      this.frame=0;
      this.contador=0;
    }
  }
  
  reencender(){
    this.apagado=false;
    this apagandose=false;
    this.frame=0;
    this.contador=0;
  }
  
  mouseEncima(){
    return mouseX>this.x 
    && mouseY< this.x + this.ancho &&
    mouseY>this.y && mouseY<this.y+this.alto;
}
}
