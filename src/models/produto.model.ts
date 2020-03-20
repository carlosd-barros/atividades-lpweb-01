export class Produto {
    id: number;
    descricao: string;
    preco: number;
    quantidade: number;

    constructor(id, descricao, preco, quantidade){
        this.id = id;
        this.descricao = descricao;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}