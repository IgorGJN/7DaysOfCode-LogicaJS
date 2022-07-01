const back =document.querySelectorAll('.days');

function day1(){
  back[1].classList.add('ocultar');
  back[2].classList.add('ocultar');
  back[3].classList.add('ocultar');
  back[4].classList.add('ocultar');
  back[5].classList.add('ocultar'); 
  back[6].classList.add('ocultar');

  console.log( false == '0' );
  console.log( null == undefined );
  console.log( " \t\r\n" == 0 );
  console.log( ' ' == 0 );
  
  let numeroUm = 1;
  let stringUm = '1';
  let numeroTrinta = 30;
  let stringTrinta = '30';
  let numeroDez = 10;
  let stringDez = '10';
  
  if (numeroUm == stringUm && numeroUm !== stringUm) {
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
  } else {
      console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
  }
  
  if (numeroTrinta === stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e o mesmo tipo')
  } else {
      console.log('As variáveis numeroTrina e stringTrinta não tem o mesmo tipo')
  }
  
  if (numeroDez == stringDez && numeroDez !== stringDez) {
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
  } else {
      console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
  }

}

function day2(){
  back[0].classList.add('ocultar');
  back[2].classList.add('ocultar');
  back[3].classList.add('ocultar');
  back[4].classList.add('ocultar');
  back[5].classList.add('ocultar'); 
  back[6].classList.add('ocultar');

  const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const mensagem = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

console.log(mensagem);
alert(mensagem);

const gosta = prompt(`Você gosta de estudar ${linguagem}?`)

if (gosta == "sim") {
  console.log("Muito bom! Continue estudando e você terá muito sucesso.");
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
}  

if (gosta == "não") {
  console.log("Ahh que pena... Já tentou aprender outras linguagens?");
  alert("Ahh que pena... Já tentou aprender outras linguagens?");
}
}

function day3(){
  back[0].classList.add('ocultar');
  back[1].classList.add('ocultar');
  back[3].classList.add('ocultar');
  back[4].classList.add('ocultar');
  back[5].classList.add('ocultar'); 
  back[6].classList.add('ocultar');


  var area = 0;
var linguagem = 0;
var futuro = 0;

var codigo = [];
var id = 0;


area = prompt("Você quer seguir para área de Front-End ou seguir para a área de Back-End? Responda com F para Front-End ou B para Back-End");

if (area === "f") {
  linguagem = prompt("Quer aprender React ou aprender Vue?")
}

if (area === "b") {
  linguagem = prompt("Quer aprender C# ou aprender Java?")
}

futuro = prompt("Quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?")

while (id < 5) {
  codigo[id] = prompt("Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?")
  id = id+1;
}

console.log (`Você quer aprender ${codigo[0]}, ${codigo[1]}, ${codigo[2]}, ${codigo[3]}, ${codigo[4]}`);

}

function day4(){
  back[0].classList.add('ocultar');
  back[1].classList.add('ocultar');
  back[2].classList.add('ocultar');
  back[4].classList.add('ocultar');
  back[5].classList.add('ocultar'); 
  back[6].classList.add('ocultar');


  var random;
var id = 0;
var chute;

random = Math.floor(Math.random() * (10 - 1 + 1) + 0);
console.log(random);

while (id < 3) {
chute = prompt("Acerte o número entre 0 e 10");
console.log(chute);
if (chute == random) { 
  alert("Parabéns você acertou!")
  id = 4;
} else {
if (chute > random) {
    alert("Menos")
  } else {
    alert("Maior")
  } 
}
id = id +1; 
}
if (id == 3) {
  alert(`A resposta era ${random} `)
}
}

function day5(){
  back[0].classList.add('ocultar');
  back[1].classList.add('ocultar');
  back[2].classList.add('ocultar');
  back[3].classList.add('ocultar');
  back[5].classList.add('ocultar'); 
  back[6].classList.add('ocultar');

  var frutas = [];
var laticinios = [];
var congelados = [];
var doces = [];
var adicionar = "sim";



while (adicionar != "não") {
  var adicionar = prompt("Você deseja adicionar uma comida na sua lista de compras?");
if (adicionar === "sim") {
  var comida = prompt("Qual comida você deseja inserir?");
  var categoria = prompt("Em qual categoria essa comida se encaixa? (frutas, laticínios, congelados, doces)");
  if (categoria === "frutas") {
    frutas.push(comida);
  } 
  if (categoria === "laticinios") {
      laticinios.push(comida);
    }
  if (categoria === "congelados") {
    congelados.push(comida);
  }
  if (categoria === "doces") {
    doces.push(comida);
  }
  }
 
}
console.log (
`Lista de compras:

    Frutas: ${frutas}\n
    Laticínios: ${laticinios}\n
    Congelados: ${congelados}\n
    Doces:  ${doces}\n
    `);
    

}

function day6(){
  back[0].classList.add('ocultar');
  back[1].classList.add('ocultar');
  back[2].classList.add('ocultar');
  back[3].classList.add('ocultar');
  back[4].classList.add('ocultar'); 
  back[6].classList.add('ocultar');
  setInterval(2000);

  var frutas = [];
var laticinios = [];
var congelados = [];
var doces = [];
var adicionar = "a";
var loop = 0;

/*for (var adicionar = "a"; adicionar==="exit" || loop === 1000; loop = loop + 1 ) { */
while (adicionar !=="exit") {
  
while (adicionar !== "exit" ) {
  var adicionar = prompt("Você deseja adicionar ou remover uma comida na sua lista de compras?            (a - adicionar,   r - remover,   n - não,   exit - sair)");
  
if (adicionar === "a") {
  var comida = prompt("Qual comida você deseja inserir?");
  var categoria = prompt("Em qual categoria essa comida se encaixa? f - frutas, l - laticínios, c - congelados, d - doces)");
  if (categoria === "f") {
    frutas.push(comida);
  } 
  if (categoria === "l") {
      laticinios.push(comida);
    }
  if (categoria === "c") {
    congelados.push(comida);
  }
  if (categoria === "d") {
    doces.push(comida);
  }

  }
      if (adicionar === "r") {
      alert (
`Lista de compras:

    Frutas: ${frutas}\n
    Laticínios: ${laticinios}\n
    Congelados: ${congelados}\n
    Doces:  ${doces}\n
    `);
      var apagar = prompt("Qual deseja apagar?");
    
    var a1 = (frutas.indexOf(apagar));
    var a2 = (laticinios.indexOf(apagar));
    var a3 = (congelados.indexOf(apagar));
    var a4 = (doces.indexOf(apagar));
    
    if (frutas.indexOf(apagar) != "-1") {
      frutas.splice(a1 - 1, 1);
      alert(`${apagar} foi apagado(a).`);
    };
    if (laticinios.indexOf(apagar) != "-1") {
      frutas.splice(a1 - 1, 1);
      alert(`${apagar} foi apagado(a).`);
    };
    if (congelados.indexOf(apagar) != "-1") {
      frutas.splice(a1 - 1, 1);
      alert(`${apagar} foi apagado(a).`);
    };
    if (doces.indexOf(apagar) != "-1") {
      frutas.splice(a1 - 1, 1);
      alert(`${apagar} foi apagado(a).`);
    };
    
    break;
      }
      alert (
`Lista de compras:

    Frutas: ${frutas}\n
    Laticínios: ${laticinios}\n
    Congelados: ${congelados}\n
    Doces:  ${doces}\n
    `);
  }
    
  }
}

function day7(){
  back[0].classList.add('ocultar');
  back[1].classList.add('ocultar');
  back[2].classList.add('ocultar');
  back[3].classList.add('ocultar');
  back[4].classList.add('ocultar'); 
  back[5].classList.add('ocultar');
  back[7].classList.remove('ocultar');
}


  function somarValores(){
    var num1 = document.getElementById("num1").value;
    var operacao = document.getElementById("operacao").value;
    var num2 = document.getElementById("num2").value;


switch (operacao) {
case '+':
soma();
break;
case '-':
subtracao();
break;
case '*':
multiplicacao();
break;
case '/':
divisao();
break;
case 'sair':
sair();
break;
}



function soma(){
resultado = parseInt(num1)+parseInt(num2);
alert(resultado);
}

function subtracao(){
resultado = num1 - num2;
alert(resultado);
}

function multiplicacao(){
resultado = num1 * num2;
alert(resultado);
}

function divisao(){
resultado = num1 / num2;
alert(resultado);
}

function sair(){
alert("Até a próxima!");
}
}


function voltar() {
  console.log(back);
  back[0].classList.remove('ocultar');
  back[1].classList.remove('ocultar');
  back[2].classList.remove('ocultar');
  back[3].classList.remove('ocultar');
  back[4].classList.remove('ocultar');
  back[5].classList.remove('ocultar'); 
  back[6].classList.remove('ocultar');
  back[7].classList.add('ocultar');
} 