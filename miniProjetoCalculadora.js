const prompt = require("prompt-sync")();

function calculadora() {
    let continuar = true;

    while (continuar) {
        console.log("\n--- Calculadora Simples ---");
        console.log("Escolha a operação:");
        console.log("1 - Soma");
        console.log("2 - Subtração");
        console.log("3 - Multiplicação");
        console.log("4 - Divisão");

        let escolha = prompt("Digite o número da operação: ");
        let numero1 = Number(prompt("Digite o primeiro número: "));
        let numero2 = Number(prompt("Digite o segundo número: "));
        let resultado;

        if (escolha === "1") {
            resultado = numero1 + numero2;
        } else if (escolha === "2") {
            resultado = numero1 - numero2;
        } else if (escolha === "3") {
            resultado = numero1 * numero2;
        } else if (escolha === "4") {
            if (numero2 === 0) {
                console.log("Erro: divisão por zero!");
                continue;
            }
            resultado = numero1 / numero2;
        } else {
            console.log("Opção inválida!");
            continue;
        }

        console.log("Resultado:", resultado);

        let resposta = prompt("Deseja realizar outra operação? (s/n): ");
        if (resposta.toLowerCase() !== "s") {
            continuar = false;
            console.log("Encerrando a calculadora. Até mais!");
        }
    }
}

calculadora();