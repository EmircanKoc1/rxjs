import { Component } from '@angular/core';
import { defer, Observable, of } from 'rxjs';

@Component({
  selector: 'app-defer',
  imports: [],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss'
})
export class DeferComponent {

  private readonly randomNumber$: Observable<number> = defer(() => {

    return new Observable<number>((observer) => {

      observer.next(Math.random());
      observer.complete();
      
    });
  });


  constructor() {

    this.randomNumber$.subscribe({
      next: value => console.log(value)
    });

    this.randomNumber$.subscribe({
      next: value => console.log(value)
    });

    this.randomNumber$.subscribe({
      next: value => console.log(value)
    });

  }

}
