import { Component } from '@angular/core';
import { generate } from 'rxjs';

@Component({
  selector: 'app-generate',
  imports: [],
  templateUrl: './generate.component.html',
  styleUrl: './generate.component.scss'
})
export class GenerateComponent {

  /**
   *
   */
  constructor() {

    // generate(
    //   0, x => x < 5, x => x + 1, x => x
    // ).subscribe(x => console.log(x));

    const result = generate({
      initialState: 0,
      condition(value: number) { return value < 3; },
      iterate(value: number) { return value + 1; },
      resultSelector(value: number) { return value * 1000; }
    });

    result.subscribe({
      next: value => console.log(value),
      complete: () => console.log("Complete!")
    });

  }

}
