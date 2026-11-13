class llave {

  constructor(){
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto= alto;
    this.agarrada = false;
    this.imagen=loadImage("llave.png");
  }
  
  dibujar(){
    if(this.agarrada){
      image(this.imagen,740,10,40,40);
    }else{
      image(this.imagen, this.x, this.y, this.ancho, this.alto);
    }
  }
  
  agarrar(){
  this.agarrada=true;
  }
  reiniciar(){
    this.agarrada=false;
}
mouseEncima(){
  return  mouseX>this.x && mouseY< this.x + this.ancho &&
    mouseY>this.y && mouseY<this.y+this.alto;
}
}
