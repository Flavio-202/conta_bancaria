import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

    while (true) {
    console.log (`
        BANCO DO BRAZIL COM Z
        
        
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








