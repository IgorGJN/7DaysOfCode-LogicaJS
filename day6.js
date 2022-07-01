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
