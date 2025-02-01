import { Component } from '@angular/core';
import { of, zip } from 'rxjs';

@Component({
  selector: 'app-zip',
  imports: [],
  templateUrl: './zip.component.html',
  styleUrl: './zip.component.scss'
})
export class ZipComponent {


  constructor() {
    zip(of(1, 2, 3), of("a", "b", "c"), of("x", "y", "z", "d")).subscribe(x => console.log(x));
  }
}
