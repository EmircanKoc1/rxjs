import { Component, inject } from '@angular/core';
import { Product } from '../../models/product';
import { BasketService } from '../../services/basket-service.service';

@Component({
  selector: 'app-productlist',
  imports: [],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss'
})
export class ProductlistComponent {

  public products: Product[] = [
    {
      id: 1,
      name: "İphone",
      price: 22.2
    },
    {
      id: 2,
      name: "Samsung",
      price: 32.2
    },
    {
      id: 3,
      name: "Laptop",
      price: 221212
    },
    {
      id: 4,
      name: "XBOX",
      price: 17000
    }
  ];
  private readonly basketService = inject(BasketService);

  public AddBasket(product: Product): void {
    this.basketService.addBasketItem(product);
  }
  public RemoveProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }

  public AddProduct(id: any, name: any, price: any): void {

    if (id && name && price)
      this.products.push({
        id: id,
        name: name,
        price: price
      });



  }

}
