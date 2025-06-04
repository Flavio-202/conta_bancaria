import readlinesync = require("readline-sync");
import {colors} from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from "./src/model/contacorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {

    let opcao: number;

 /* const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();
Esse código não funciona mais porque a classe Conta foi declarada como 'abstract', ou seja, não pode ser instanciada diretamente usando o new. */

    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();
    
    while (true) {

// No comando de saída de dados console.log(), adicionamos dois parâmetros colors.bg.black e colors.fg.yellow, definindo que o texto será exibido na cor amarela e o plano de fundo do texto será preto.
// reset: Restaura as cores padrões do Terminal;
// fg: Objeto Literal que contém as cores do texto (foreground);
// bg: Objeto Literal que contém as cores do plano de fundo (background).

    console.log (colors.fg.yellowstrong)

    console.log (`
        ***********************************

        BANCO DO BRAZIL COM Z

        ***********************************
        
        1 - Criar conta
        2 - Listar todas as contas
        3 - Buscar conta por número
        4 - Atualizar dados da conta
        5 - Pagar conta
        6 - Sacar
        7 - Depositar
        8 - Transferir valores entre contas
        9 - Sair 
        `);

    console.log ("Entre com a opção desejada ");
    opcao = readlinesync.questionInt ("");

   if (opcao == 9) {
    console.log (colors.fg. greenstrong)
    console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
    sobre(); 
    process.exit(0);
    }

    switch (opcao){
        case 1:
            console.log("\n\nCriar conta\n\n");
            break;
        case 2:
           console.log("\n\nListar todas as contas\n\n");
            break;

        case 3:
            console.log("\n\nConsultar dados da conta - por número\n\n");
            break;

        case 4:
            console.log("\n\nAtualizar dados da conta\n\n");
            break;

        case 5:
            console.log("\n\nApagar uma conta\n\n");
            break;
        
        case 6:
            console.log("\n\nSaque\n\n");
            break;

        case 7:
            console.log("\n\nDepósito\n\n");
            break;

        case 8:
            console.log("\n\nTransferência entre contas\n\n");
            break;
        
        default:
            console.log("\n\nOpção inválida! \n\n");
            break;

    }

    }
}

function sobre(): void {
    console.log (`
        Projeto Desenvolvido por: Flavio Teixeira
        Email: flavioaguilar2001@gmail.com
        Link do Github: https://github.com/Flavio-202 `);
}

main ();








