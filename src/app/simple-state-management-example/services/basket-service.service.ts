import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private readonly basketSubject = new BehaviorSubject<Product[]>([]);
  public readonly basket$ = this.basketSubject.asObservable();

  constructor() {
  }

  public addBasketItem(item: Product): void {

    const currentBasket = this.basketSubject.getValue();
    this.basketSubject.next([...currentBasket, item]);

  }
  public removeBasketItem(item: Product): void {

    const currentBasket = this.basketSubject.getValue();
    const updatedBasket = currentBasket.filter(basketItem => basketItem.id !== item.id);
    this.basketSubject.next(currentBasket);
  }

  public clearBasket() {
    this.basketSubject.next([]);
  }
}
