import { Component } from '@angular/core';

import { Produto } from 'src/models/produto.model';
import { Item } from 'src/models/item.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  public title = 'Loja Virtual';
  public carrinho = [];
  public produtos: Array<Produto> = [];
  public totalCarrinho: number = 0;

  constructor() {
    this.produtos.push(
      new Produto(generateID(), 'Chocolate', 10.55, 5),
      new Produto(generateID(), 'Coquita', 15.69, 3),
      new Produto(generateID(), 'Burgão', 15.33, 7),
    );
  }

  addCarinho(produto) {
    const carrinho = this.carrinho;
    const { id, preco } = produto;

    const produto_carrinho = carrinho.find( item => {
      let is_valid = item.produto.id === id;

      if (is_valid) {
        item.quantidade += 1;
        item.total = item.quantidade * preco;
      }

      return is_valid;
    });

    if ( !produto_carrinho ) {
      carrinho.push( new Item(produto, preco) );
    }

    const index = this.produtos.indexOf(produto);
    this.produtos[index].quantidade -= 1;

    this.setTotalCarrinho();
  }

  setTotalCarrinho() {
    const carrinho = this.carrinho;

    let precos = carrinho.map( item => item.total );
    this.totalCarrinho = precos.reduce( (acum, current) => acum + current );
  }
}

function generateID() {
  return Math.floor(Math.random() * 100);
}
