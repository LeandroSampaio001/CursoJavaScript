const prompt = require("prompt-sync")();

// Função principal da calculadora
function calculadora() {
    // Variável que controla se a calculadora continua rodando
    let continuar = true;

    // Enquanto o usuário quiser continuar, o loop vai repetir
    while (continuar) {
        // Mostra o menu de opções para o usuário escolher
        console.log("\n--- Calculadora Simples ---");
        console.log("Escolha a operação:");
        console.log("1 - Soma");
        console.log("2 - Subtração");
        console.log("3 - Multiplicação");
        console.log("4 - Divisão");

        // Lê a escolha do usuário
        let escolha = prompt("Digite o número da operação: ");

        // Lê os dois números que o usuário vai usar
        let numero1 = Number(prompt("Digite o primeiro número: "));
        let numero2 = Number(prompt("Digite o segundo número: "));

        // Variável que vai guardar o resultado da operação
        let resultado;

        // Verifica qual operação o usuário escolheu e faz o cálculo
        if (escolha === "1") {
            resultado = numero1 + numero2; // Soma
        } else if (escolha === "2") {
            resultado = numero1 - numero2; // Subtração
        } else if (escolha === "3") {
            resultado = numero1 * numero2; // Multiplicação
        } else if (escolha === "4") {
            // Antes de dividir, verifica se o segundo número é zero
            if (numero2 === 0) {
                console.log("Erro: divisão por zero!"); // Não pode dividir por zero
                continue; // Volta para o começo do loop sem calcular
            }
            resultado = numero1 / numero2; // Divisão
        } else {
            // Se o usuário digitou uma opção inválida
            console.log("Opção inválida!");
            continue; // Volta para o começo do loop
        }

        // Mostra o resultado no console
        console.log("Resultado:", resultado);

        // Pergunta se o usuário quer fazer outra operação
        let resposta = prompt("Deseja realizar outra operação? (s/n): ");
        if (resposta.toLowerCase() !== "s") { // Se não digitar "s", o programa encerra
            continuar = false;
            console.log("Encerrando a calculadora. Até mais!");
        }
    }
}

// Chama a função para rodar a calculadora
calculadora();
