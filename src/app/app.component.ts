import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservableComponent } from "./observable/observable.component";

@Component({
  selector: 'app-root',
  imports: [ObservableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjs';
}
