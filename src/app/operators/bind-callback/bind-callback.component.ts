import { Component } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-bind-callback',
  imports: [],
  templateUrl: './bind-callback.component.html',
  styleUrl: './bind-callback.component.scss'
})
export class BindCallbackComponent {

  private readonly getData$ = bindCallback(getData);

  constructor() {

    this.getData$("message").subscribe({
      next: value => console.log(value),
      error: value => console.error(value)
    });



  }





}


function getData(name: string, callback: (name: string) => void) {

  setTimeout(() => {
    callback(name);
  }, 2000);


}
