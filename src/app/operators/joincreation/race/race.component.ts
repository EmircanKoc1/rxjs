import { Component } from '@angular/core';
import { of, race } from 'rxjs';

@Component({
  selector: 'app-race',
  imports: [],
  templateUrl: './race.component.html',
  styleUrl: './race.component.scss'
})
export class RaceComponent {

  /**
   *
   */
  constructor() {
    race(of(1, 2, 3), of(1, 2, 3, 4, 5)).subscribe(x => console.log(x));

  }
}
