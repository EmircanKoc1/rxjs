import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {

  constructor() {
    timer(2000).subscribe(x => console.log(x));
    timer(1000, 2000).subscribe(x => console.log(x));
  }
}
