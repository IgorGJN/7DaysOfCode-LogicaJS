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
