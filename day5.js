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
    
