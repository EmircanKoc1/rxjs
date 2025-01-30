import { Component, inject, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket-service.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-basket',
  imports: [],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent implements OnInit {

  private readonly basketService = inject(BasketService);
  public basketItems: Product[] = [];

  ngOnInit(): void {
    this.basketService.basket$.subscribe({
      next: (basket) => this.basketItems = basket
    });
  }

  public RemoveBasketItem(item: Product): void {

    this.basketService.removeBasketItem(item);

  }

  public ClearBasket(): void {
    this.basketService.clearBasket();
  }


}
