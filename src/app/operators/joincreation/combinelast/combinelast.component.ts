import { Component } from '@angular/core';
import { combineLatest, interval, map, of } from 'rxjs';

@Component({
  selector: 'app-combinelast',
  imports: [],
  templateUrl: './combinelast.component.html',
  styleUrl: './combinelast.component.scss'
})
export class CombinelastComponent {


  constructor() {
    combineLatest([
      interval(1000).pipe(map(x => `ob1 ${x}`)),
      interval(2000).pipe(map(x => `ob2 ${x}`))
    ]).subscribe(([val1, val2]) => {
      console.log(`result :  ${val1} , ${val2}`);
    });

  }

}
