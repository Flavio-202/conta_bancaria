import readlinesync = require ("readline-sync");
import {colors} from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";
import { readlinkSync } from "fs";

export function main() {

    let contas: ContaController = new ContaController ();
    let opcao, number, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tiposContas = ['Conta corrente', 'Conta poupanca'];

 /* const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();
Esse código não funciona mais porque a classe Conta foi declarada como 'abstract', ou seja, não pode ser usada diretamente usando o new. Nesse caso é preciso escolher entre a classe ContaCorrente ou ContaPoupanca. */

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

    switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
                console.log ("Digite o número da agencia: ");
                agencia = readlinesync.questionInt("");

                console.log ("Digite o nome do titular da conta: ");
                titular = readlinesync.question ("");

                console.log ("Digite o tipo da conta: ");
                tipo = readlinesync.questionInt ("");

                console.log ("Digite o saldo da conta R$:");
                saldo = readlinesync.questionFloat ("");
    switch (tipo) {

            case 1:
                console.log ("Digite o limite d conta R$: ");
                limite = readlinesync.questionFloat ("");
                contas.cadastrar(new ContaCorrente (contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                break;

            case 2:
                console.log ("digite o dia do aniversário da conta poupança: ");
                aniversario = readlinesync.questionInt ("");
                contas.cadastrar (new ContaPoupanca (contas.gerarNumero(), agencia, tipo, titular, saldo, limite));

    }
                keyPress()
                break;
    
            case 2:
            console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);
                contas.listarTodas ();
                keyPress()
                break;

            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                keyPress()
                break;

            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);
                keyPress()
                break;

            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);
                keyPress()
                break;

            case 6:
                console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);
                keyPress()
                break;

            case 7:
                console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);
                keyPress()
                break;

            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);
                keyPress()
                break;

            default:
                console.log(colors.fg.whitestrong,"\nOpção Inválida!\n", colors.reset);
                keyPress()
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

/* Pesquisar sobre a fuction keypress(), eu não entendi muito bem para que serve */

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main ();