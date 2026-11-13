class Amigo{
 constructor(x, y, ancho, alto){
  this.x = x;
  this.y = y;
  this.alto=alto;
  this.ancho=ancho;
  
  this.img = loadImage("amigo.png");
  this. seleccionado = false;
 }
 
 dibujar(){
   if(this.agarrado){
     image(this.img,690, 10,40, 40);
   }else{
     image(this.imagen, this.x, this.y, this.ancho, this.alto);
   } 
 }
 
 tapado(fuego){
   return fuego.x<this.x +this.ancho &&
   fuego.x+fuego.ancho<this.x &&
   fuego.y< this.y+this.alto &&
   fuego.y+ fuego.alto<this.y;
 }
 
 libre(fuegos){
   for(let i= 0; i< fuegos.length; i++){
     if(this.tapado(fuegos[i]) && !fuegos[i].apagado){
       return false;
     }
   }
   return true;
 }
 agarrar(llave, fuegos){
   if(this.libre(fuegos) && llave.agarrada){
     this.agarrado = true;
     return true;
   } else{
     return false;
   }
 }
 
 reiniciar(){
   this.agarrado = false;
 }
 
 mouseEncima(){
    return mouseX < this.x && mouseX<this.x +this.ancho &&
    mouseY < this.y && mouseY < this.y + this.alto;
 }
   
   
}
