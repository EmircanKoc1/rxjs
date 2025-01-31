import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  imports: [],
  templateUrl: './of.component.html',
  styleUrl: './of.component.scss'
})
export class OfComponent {


  constructor() {
    of(1, 2, 3, 4).subscribe(x => console.log(x));
    // of([1, 2, 3, 4], [2]).subscribe(x => console.log(x));

  }
}
