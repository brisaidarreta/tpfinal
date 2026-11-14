let juego;

function preload() {

}

function setup() {
  createCanvas(800, 400);
  juego = new juego();
}

function draw() {
  juego.actualizar();
  juego.dibujar();

  //if (juego != null) { No entendí que es esto :p
    //juego.dibujar();
  }
}

function mousePressed() {
  juego.click();
  //if (juego != null) { ni esto:P
    //juego.detectarClic(mouseX, mouseY);
  }
}
