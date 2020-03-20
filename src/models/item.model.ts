import { Produto } from './produto.model';

export class Item {
    produto: Produto;
    total: number;
    quantidade: number;

    constructor(produto, total: number = 0, quantidade = 1){
        this.produto = produto;
        this.total = total;
        this.quantidade = quantidade;
    }
}