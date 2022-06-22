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
/*
location.reload();
id = 0;
chute = 100;
*/
