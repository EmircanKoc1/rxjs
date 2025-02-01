import { Component } from '@angular/core';
import { of, partition } from 'rxjs';

@Component({
  selector: 'app-partition',
  imports: [],
  templateUrl: './partition.component.html',
  styleUrl: './partition.component.scss'
})
export class PartitionComponent {
  constructor() {

    const [ob1, ob2] = partition(of(1, 2, 3, 4, 5, 6), num => num % 2 === 0);

    ob1.subscribe(x => console.log(x));
    ob2.subscribe(x => console.log(x));

  }
}
