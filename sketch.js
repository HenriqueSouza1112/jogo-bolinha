let palavra;

function setup() {
  createCanvas(400, 400);
 palavra = palavraAleatoria();
}

  function palavraAleatoria(){
 let palavras = ["Rooster", "Galo", "Robótica", "FIRST"];
   return random(palavras);
}
  
  
function inicializaCores(){
  background("palegreen");
    fill ("cornflowerblue");   
  textSize(60)
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo){
   let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial =palavra.substring(0, quantidade);
  return parcial;
}


function draw() {
  inicializaCores();
  let maximo = width;
  let minimo = 0;
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  
  let parcial =palavra.substring(0, quantidade);
  text(parcial, 200, 200);
 
   
  
  
  
 /* if(mouseX < 50){
  let palavra = "R";
  text(palavra, 300, 300);
} else if (mouseX < 150) {
  let palavra = "Ro";
  text(palavra, 300, 300);
 } else if (mouseX < 200) {
  let palavra = "Roo";
  text(palavra, 300, 300);
} else if (mouseX < 250) {
  let palavra = "Roos";
  text(palavra, 300, 300);
} else if (mouseX < 300) {
  let palavra = "Roost";
  text(palavra, 300, 300);
}else if (mouseX < 350) {
  let palavra = "Rooste";
  text(palavra, 300, 300);
}else if (mouseX < 400) {
  let palavra = "Rooster";
  text(palavra, 300, 300);
}else if (mouseX < 450) {
  let palavra = "Roosters";
  text(palavra, 300, 300);
}*/
}
