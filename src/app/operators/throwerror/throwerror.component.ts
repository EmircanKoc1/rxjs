import { Component } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throwerror',
  imports: [],
  templateUrl: './throwerror.component.html',
  styleUrl: './throwerror.component.scss'
})
export class ThrowerrorComponent {

  constructor() {
    throwError(() => new Error("Error Code XXXXXXX")).subscribe({
      next: value => console.log(value),
      error: err => console.error(err),
      complete: () => console.log("Complete!")
    });
  }

}
