let campoIdade;
let campoFantasia;
let campoAventura;

function setup(){
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw(){
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  
  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Coraline e o mundo secreto";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: sem volta para casa";          
        } else{
         return "Moana: um mar de aventuras";
        }
      } else {
        if (gostaDeFantasia) {
          return "Turma da mônica: licões";
        } else {
          return "Garfield - fora de casa";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Rio";
    } else {
      return "Espelho, espelho meu";
    }
  }
}