import { Component } from '@angular/core';
import { ProductlistComponent } from "../productlist/productlist.component";
import { BasketComponent } from "../basket/basket.component";

@Component({
  selector: 'app-use',
  imports: [ProductlistComponent, BasketComponent],
  templateUrl: './use.component.html',
  styleUrl: './use.component.scss'
})
export class UseComponent {

}
