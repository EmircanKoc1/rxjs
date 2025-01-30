import { Component, OnInit } from '@angular/core';
import { count, filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent
  implements OnInit {

  numbersObservable!: Observable<number>;
  currentValue?: number;
  ngOnInit(): void {

    this.numbersObservable = new Observable(observer => {
      let count = 1;
      setInterval(() => {
        observer.next(count++);
      }, 1000);
    });

    this.numbersObservable.subscribe({
      next: (value) => {
        console.log(`yeni değer : ${value}`);
        this.currentValue = value;
      },
      complete: () => console.log("Tamamlandı")

    });

    // this.numbersObservable.pipe<string>(
    //   map(value => value.toString())
    // ).subscribe({
    //     next : value => console.log(value)
    // });

    // this.numbersObservable.pipe(
    //   filter(value => value % 2 === 0)
    // ).subscribe({
    //   next : value => console.log(value)
      
    // });

  }



}
