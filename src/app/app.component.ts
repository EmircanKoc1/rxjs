import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservableComponent } from "./observable/observable.component";
import { SubjectComponent } from "./subject/subject.component";
import { BehaviorSubjectComponent } from "./behavior-subject/behavior-subject.component";

@Component({
  selector: 'app-root',
  imports: [ObservableComponent, SubjectComponent, BehaviorSubjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjs';
}
