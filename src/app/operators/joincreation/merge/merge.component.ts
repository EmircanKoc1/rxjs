import { Component } from '@angular/core';
import { merge, of } from 'rxjs';

@Component({
  selector: 'app-merge',
  imports: [],
  templateUrl: './merge.component.html',
  styleUrl: './merge.component.scss'
})
export class MergeComponent {

  constructor() {

    merge(of(1, 2, 3), of(5, 6, 7)).subscribe(x => console.log(x));

  }

}
