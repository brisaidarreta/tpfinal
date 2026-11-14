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

dibujar(){
  if(this.estado=="instrucciones"){
    this.dibujarInstrucciones(),
  }else if(this.estado=="creditos"){
    this.dibujarCreditos(),
  }else if(this.estado=="jugado"){
    this.dibujarJuego();
  }else {
    this.dibujarFin();
  }
}

dibujarInstrucciones(){
  background(30,20,20);
  fill(255);
  noStroke();
  textAlign(CENTER,CENTER);
  textSize(32);
  text("Salva y escapa", 400,40);
  textSize(16);
  text("Hay un incendio en la prisión ¡Es tu oportunidad!\n 1. Hacé click en los fuegos para apagarlos.\n 2.Agarrá la llave.\n 3.Después de aagarrar la llavé, rescata a tu amigo, escondidodetrás del fuego. \nSi la habitación se llena de fuego perdes", 400, 130);
  this.btnJugar.dibujar();
  this.btnCreditos.dibujar();
}

dibujarCreditos(){
  backgroun(30, 20,20);
  fill(255);
  nooStroke();
  textAlign(CENTER, CENTER);
  textSize(28);
  text("Créditos", 400, 60);
  textSize(16);
  text("Brisa Idarreta - 125598/5\n Leonel Russo - 122884/5", 400,160);
  tis.btnVolver.dibujar();
}

dibujarJuego(){
  image(this.fondo,0,0,800,400);
  this.amigo.dibujar();
  for (let i=0; i<this.fugos.length;i++){
    this.fuego[i].dibujar(),
  }
  this.llave.dibujar();
  
  let tiempoTranscurrido 0millis() - this.tiempoInicio;
  let transparencia =map(tiempoTranscurrido,0, this.tiempoLimite,0,150);
  noStrokke();
  fill(255, 60, 0, transparencia);
  rect(0,0,800,400);
  
  this.btnReiniciar.dibujar();
}
}

dibujarFin(){
  image(this.fondo, 0, 0, 800, 400);
  noStoke();
  fill(0,0,0,170);
  rect(0,0,800,400);
  
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(40);
  if(this.estado =="ganasste"){
    text("¡Escapaste!", 400, 150);
  } else{
    text("Te quedaste sin salidda", 400, 150);
  }
  this.btnReiniciar.dibujar();
}

click(){
  if(this.estado=="instrucciones"){
    if(this.btnJugar.mouseEncima()){
      this.iniciar();
    }else if(this.btnCreditos.mouseEncima()){
      this.estado="créditos";
    }
  }else if(this.estado =="créditos"){
    if(this.btnVolver.mouseEncima()){
      this.estados¿="instrucciones";
    }
  }else{
    if(this.btnReiniciar.mouseEncima()){
      this.iniciar();
      return;
    }
    if(this.estado =="jugando"){
      this.clickJuego();
    }
  }
}

clickJuego(){
  let clickEnFuego=false;
  for(let i=0; i<this.fuegos.length;i++){
    if(this.fuegos[i].apaagr();
    this.sonidoApagaFuego.play();
    clickEnFuego=true;
  }
}
if (clickEnFuego){
  return;
}

if(this.llave.mouseEncima() && !this.llave.agarrada){
  this.llave.agarrar();
  return;
}

if(this.amigo.mouseEncima()&& !this.amigo.agarrado){
  let hecho =this.amigo.agarrar(this.llave, this.fuegos);
  if(!hecho){
    if(!this.amigo.libre(this.fuegos)){
      this.mensaje= "Hay fuego delante de tu amigo";
    }else{
      this.mensaje="Necesitas la llave";
    }
    this.tiempoMensaje =millis();
  }
}
}
}
