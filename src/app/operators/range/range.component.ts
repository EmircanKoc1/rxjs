import { Component } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-range',
  imports: [],
  templateUrl: './range.component.html',
  styleUrl: './range.component.scss'
})
export class RangeComponent {

  constructor() {

    range(1, 9).subscribe(next => console.log(next));
    

  }
}
