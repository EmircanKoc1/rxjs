import { Component } from '@angular/core';
import { iif, of } from 'rxjs';

@Component({
  selector: 'app-iif',
  imports: [],
  templateUrl: './iif.component.html',
  styleUrl: './iif.component.scss'
})
export class IifComponent {


  constructor() {

    iif(
      () => true,
      of("true"),
      of("false")
    ).subscribe(x => console.log(x));
    

  }
}
