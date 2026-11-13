class botones{
  constructor(x, y, ancho, alto, texto){
    this.x= x;
    this. y = y;
    this.ancho =  ancho;
    this.alto= alto;
    this.texto = texto;
    this.colortexto = color();
    this.colorfondo= color();
  }
  
  dibujar(){
    if(this.mouseEncima()){
      fill(255, 200, 100);
    }else{
      fill(255, 140, 0);
    }
    stroke (0);
    rect(this.x, this.y, this.ancho,this.alto, 10);
    
    fill(0)
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(18);
    text(this.texto, this.x + this.ancho/2, this.y+this.alto/2);
  }
  
  mouseEncima(){
    return mouseX> this.x && mouseX< this.x+this.ancho &&
    mouseY> this.y && mouseY< this.y+ this.alto;
  }
}
