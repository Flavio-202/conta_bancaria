import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";
/* Esse "../" serve para sair de uma pasta */ 


/* Nessa etapa de baixo, estou informando que a classe ContaController vai ter que ter todos os nomes de assinaturas que estão na interface ContaRepository. Nesse caso os nomes são: procurarPorNumero, listarTodas, cadastrar, atualizar, deletar, sacar, depositar e transferir. O programa só vai rodar depois que escrever todos os nomes que foram declarados.

*/ 

export class ContaController implements ContaRepository {

    private listacontas: Array <Conta> = new Array <Conta> ();
    numero: number = 0;

    procurarPorNumero(numero: number): void {

    }

    listarTodas (): void {
        for (let conta of this.listacontas){
            conta.visualizar ();
        }

    }

    cadastrar(conta: Conta): void {
        this.listacontas.push (conta);
        console.log (colors.fg.green, "\nA conta número: " + conta.numero + "foi criada com sucesso!", colors.reset);
    }

    atualizar(conta: Conta): void {
        this.listacontas.push (conta);
        console.log (colors.fg.green, "\nConta número: " + conta.numero + "foi criada com sucesso!", colors.reset);
    }

    deletar(numero: number): void {
        
    }

    sacar(numero: number, valor: number): void {
    
    }

    depositar(numero: number, valor: number): void {
        
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        

    }


/* Esse código embaixo está gerando um número da conta e ele vai retornar esse número na tela. Como a variável numero foi inicializada com zero (0), vamos incrementar a variável através do operador de pré-incremento (++), incrementando de 1 em 1, a cada nova conta que for criada. Este número será retornado como o número da nova Conta. Desta forma, automatizaremos o processo de geração do número da conta, através de uma sequência:*/

    public gerarNumero(): number {
        return ++ this.numero;
    }
    
}



