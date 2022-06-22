var area = 0;
var linguagem = 0;
var futuro = 0;

var codigo = [];
var id = 0;


/*

while (id < 100) {
  codigo[id] = id
  console.log (codigo[id]);
  id = id + 1;
} */

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

/*
var codigo[0] = prompt("Qual linguegem?");
id = id+1;



while (id < 5) {
  var codigo = prompt("Qual linguaguem?");
  id = id+1;
  console.log(codigo);
}
*/
/* 

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

*/
