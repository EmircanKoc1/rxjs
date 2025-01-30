import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  imports: [],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.scss'
})
export class ReplaySubjectComponent
  implements OnInit {
  private replaySubject = new ReplaySubject<string>(2);

  ngOnInit(): void {
    this.replaySubject.next("A");
    this.replaySubject.next("B");
    this.replaySubject.next("C");

    this.replaySubject.subscribe({
      next: value => console.log(value)      
    });

    this.replaySubject.next("D");

    this.replaySubject.subscribe({
      next: value => console.log(value)      
    });

  }




}
