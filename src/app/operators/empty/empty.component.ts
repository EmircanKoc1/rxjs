import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-empty',
  imports: [],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss'
})
export class EmptyComponent {

  private readonly emptyObservable$ = empty();

  /**
   *
   */
  constructor() {

    this.emptyObservable$.subscribe({
      next: val => console.log(val),
      complete: () => console.log("Completed")
    })
  }
}
