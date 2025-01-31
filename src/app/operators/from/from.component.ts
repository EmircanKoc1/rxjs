import { Component } from '@angular/core';
import { combineLatest, from } from 'rxjs';

@Component({
  selector: 'app-from',
  imports: [],
  templateUrl: './from.component.html',
  styleUrl: './from.component.scss'
})
export class FromComponent {

  private readonly arrayObservable$ = from([1, 2, 3, 4]);
  private readonly stringObservable$ = from("Message");
  private readonly promiseObservable$ = from(new Promise((resolve) => {
    setTimeout(() => resolve('Veri geldi!'), 2000);
  }));

  private readonly setObservable$ = from(new Set<number>([10, 20, 30, 40]));


  constructor() {
    this.arrayObservable$.subscribe({
      next: val => console.log(val),
      complete: () => console.log("The array observable has been completed")
    });

    this.stringObservable$.subscribe({
      next: val => console.log(val),
      complete: () => console.log("The string observable has been completed")
    });

    this.promiseObservable$.subscribe({
      next: val => console.log(val),
      complete: () => console.log("The promise observable has been completed")
    });

    this.setObservable$.subscribe({
      next: val => console.log(val),
      complete: () => console.log("The set observable has been completed")
    });

  }





}
