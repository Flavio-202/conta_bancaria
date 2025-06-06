import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";
/* Esse "../" serve para sair de uma pasta */ 


/* Nessa etapa de baixo, estou informando que a classe ContaController vai ter que ter todos os nomes de assinaturas que estão na interface ContaRepository. Nesse caso os nomes são: procurarPorNumero, listarTodas, cadastrar, atualizar, deletar, sacar, depositar e transferir. O programa só vai rodar depois que escrever todos os nomes que foram declarados.

*/ 

export class ContaController implements ContaRepository {

    private listaContas: Array <Conta> = new Array <Conta> ();
    numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray (numero);
        if  (buscaConta !== null) {
            buscaConta.visualizar ();
        } else {
            console.log (`A conta número ${numero} não foi encontrada!`);
        }

    }

    listarTodas (): void {
        for (let conta of this.listaContas){
            conta.visualizar ();
        }

    }

    cadastrar(conta: Conta): void {
        this.listaContas.push (conta);
        console.log (colors.fg.green, "\n A conta número: " + conta.numero + " foi criada com sucesso!", colors.reset);
    }

    atualizar(conta: Conta): void {

        let buscaConta = this.buscarNoArray (conta.numero);
        if (buscaConta !== null) {
        this.listaContas [this.listaContas.indexOf (buscaConta)] = conta;
        console.log (colors.fg.green, "\n Conta número: " + conta.numero + " foi criada com sucesso!", colors.reset);
        } else {
            console.log (`A conta número ${conta.numero} não foi encontrada`);
        }
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
        	console.log(colors.fg.green,"\nA Conta numero: " + numero + 
                        " foi apagada com sucesso!", colors.reset);
        }else
        console.log(colors.fg.red,"\nA Conta numero: " + numero + 
                    " não foi encontrada!", colors.reset);
    }

     public sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray (numero);

        if (conta !== null) {

            if (conta.sacar (valor) == true)
            console.log (colors.fg.green, "\nO saque na conta numero:" + numero + "foi realizado com sucesso!", colors.reset);
        }
    
        else {
            console.log (colors.fg.red, "\nA conta numero:" + numero + "não foi encontrada!", colors.reset);
        }
    }

    public depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray (numero);
        if (conta !== null){
            conta.depositar (valor);
            console.log (colors.fg.green, "\nO deposito na conta numero: " + numero + "foi efetuado com sucesso", colors.reset);
        }
        else {
            console.log (colors.fg.red, "\nA conta numero:" + numero + "não foi encontrada!", colors.reset);
        }
        
    }

    public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray (numeroOrigem);
        let contaDestino = this.buscarNoArray (numeroDestino);

        if (contaOrigem !== null && contaDestino !== null){
            if (contaOrigem.sacar (valor) == true){
                contaDestino.depositar (valor);
                console.log (colors.fg.green, "\nA trasferencia da conta número:" + numeroOrigem + "para a conta número:" + numeroDestino + "foi efetuado com sucesso!", colors.reset);
            } else {
                console.log ("\nA conta número: " + numeroOrigem + "e ou a conta número:" + numeroDestino + "não foram encontradas!" );
            }
        }

    }


/* Esse código embaixo está gerando um número da conta e ele vai retornar esse número na tela. Como a variável numero foi inicializada com zero (0), vamos incrementar a variável através do operador de pré-incremento (++), incrementando de 1 em 1, a cada nova conta que for criada. Este número será retornado como o número da nova Conta. Desta forma, automatizaremos o processo de geração do número da conta, através de uma sequência:*/

    public gerarNumero(): number {
        return ++ this.numero;
    }

    public buscarNoArray (numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }
        return null;
    }
    
}



