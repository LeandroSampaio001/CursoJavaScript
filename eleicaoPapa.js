const prompt = require("prompt-sync")();
//criei uma unica função e coloquei tudo dentro dela
function conclave() {
  console.log("=== Conclave Virtual ===");

  let cardeais = [];

  // Cadastro dos 5 cardeais
  for (let i = 1; i <= 5; i++) {
    let nome = prompt("Digite o nome do cardeal " + i + ": ");
    cardeais.push({ id: i, nome: nome, votos: 0 });
  }

  let papaEleito = null;

  while (!papaEleito) {
    // Zerar votos no início de cada rodada
    for (let c of cardeais) {
      c.votos = 0;
    }

    console.log("\n--- Votação ---");

    // Cada cardeal vota
    for (let i = 1; i <= 5; i++) {
      console.log("\nCardeais para votar:");
      for (let c of cardeais) {
        console.log(c.id + " - " + c.nome);
      }

      let voto = parseInt(prompt("Cardeal " + i + ", digite o número do seu voto: "));
      let escolhido = cardeais.find(c => c.id === voto);

      if (escolhido) {
        escolhido.votos++;
      } else {
        console.log("Voto inválido!");
      }
    }

    console.log("\n--- Resultado da Rodada ---");
    for (let c of cardeais) {
      console.log(c.nome + " recebeu " + c.votos + " voto(s).");
      if (c.votos >= 4) {
        papaEleito = c;
      }
    }

    if (papaEleito) {
      console.log("\nO novo Papa é " + papaEleito.nome + "!");
    } else {
      console.log("\nNinguém atingiu 2/3 dos votos. Iniciando nova rodada...\n");
      // Continua o loop automaticamente
    }
  }
}

conclave(); //agora chamo a função aqui
