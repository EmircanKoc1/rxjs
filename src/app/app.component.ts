import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservableComponent } from "./observable/observable.component";
import { SubjectComponent } from "./subject/subject.component";
import { BehaviorSubjectComponent } from "./behavior-subject/behavior-subject.component";
import { ReplaySubjectComponent } from "./replay-subject/replay-subject.component";
import { AsyncSubjectComponent } from "./async-subject/async-subject.component";
import { UseComponent } from "./simple-state-management-example/components/use/use.component";

@Component({
  selector: 'app-root',
  imports: [ObservableComponent, SubjectComponent, BehaviorSubjectComponent, ReplaySubjectComponent, AsyncSubjectComponent, UseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjs';
}
