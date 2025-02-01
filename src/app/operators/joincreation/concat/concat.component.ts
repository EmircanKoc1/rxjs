import { Component } from '@angular/core';
import { concat, of } from 'rxjs';

@Component({
  selector: 'app-concat',
  imports: [],
  templateUrl: './concat.component.html',
  styleUrl: './concat.component.scss'
})
export class ConcatComponent {


  constructor() {
    const obs1 = of("a", "b", "c");
    const obs2 = of("1", "2", "3");

    // concat(obs1, obs2).subscribe(value => {
    //   console.log(value);
    // });

    concat(obs2, obs1).subscribe(value => {
      console.log(value);
    });
    
  }

}
