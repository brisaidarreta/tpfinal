let juego;

function preload() {

}

function setup() {
  createCanvas(800, 400);
  juego = new juego();
}

function draw() {
  background(30);

  if (juego != null) {
    juego.dibujar();
  }
}

function mousePressed() {
  if (juego != null) {
    juego.detectarClic(mouseX, mouseY);
  }
}
