import { Component } from '@angular/core';
import { forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-forkjoin',
  imports: [],
  templateUrl: './forkjoin.component.html',
  styleUrl: './forkjoin.component.scss'
})
export class ForkjoinComponent {

  constructor() {

    const obs1 = of("a", "b", "c");
    const obs2 = of("1", "2", "3");


    forkJoin([obs2, obs1]).subscribe(value => {
      console.log(value);
    });


  }
}
