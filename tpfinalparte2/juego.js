class juego{
  
constructor(){
  this.estado = "instrucciones";
  this.fondo = loadImage("fondo.png");
  this.sonidoApagaFuego =loadSound("apagar.mp3");
  
  this.fuegos =[];
  this.fuegos.push(new Fuego(340,240,80,80));
  this.fuegos.push(new Fuego(400,260,80,80));
  this.fuegos.push(new Fuego(100,120,80,80));
  this.fuegos.push(new Fuego(600,100,80,80));
  this.fuegos.push(new Fuego(200,280,80,80));
  
  
 this.llave = new Lllave(650, 300, 50, 50);
 this.amigo = new Amigo(350, 230,80, 120);
 
 this.btnJugar =new Boton("Jugar", 340, 230, 120, 40);
 this.btnCreditos =new Boton("Créditos", 340, 285, 120, 40);
 this.btnVolver =new Boton("Volver", 340, 330, 120, 40);
 this.btnReiniciar =new Boton("Reiniciar", 10, 355, 110, 35);
 
 this.tiempoInicio =0;
 this.tiempoLimite =30000;
 this.mensaje="";
 this.tiempoMensaje=0;
}

iniciar(){
  for(let i=0; i<this.fuegos.length;i++){
    this.fuegos[i].reencender(),
  }
  this.llave.reiniciar();
  this.amigo.reiniciar();
  this.mensaje="";
  this.tiempoInicio = millis();
  this.estado ="jugando";
}

actualizar(){
  if(this.estado !="jugando") {
    return;
  }
  if (this.llave.agarrada && this.amigo.agarrado){
    this.estado="ganaste";
  } else if(millis() - this.tiempoInicio > this.tiempoLimite){
    this.estado ="perdiste";
  }
}
