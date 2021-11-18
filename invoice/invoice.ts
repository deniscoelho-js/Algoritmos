export class invoice {
    private numero: string
    private descricao: string
    private qtd_compra: number
    private preco: number

    
    constructor(numero: string, descricao: string, qtd_compra: number, preco: number){
        this.numero = numero
        this.descricao = descricao
        this.qtd_compra = qtd_compra
        this.preco = preco
    }

    public soma(){
        if((this.preco * this.qtd_compra) > 0){
            console.log(`Total a pagar: R$ ${this.preco * this.qtd_compra}`)
        } else(
            console.log(`Fatura zerada!`)
        )
    }
}

