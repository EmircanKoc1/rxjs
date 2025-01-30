import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  imports: [],
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.scss'
})
export class AsyncSubjectComponent
  implements OnInit {
  private asyncSubject = new AsyncSubject<string>();

  ngOnInit(): void {

    this.asyncSubject.subscribe({
      next: (value) => console.log(`observer1 ${value}`)

    });

    this.asyncSubject.next("message1")
    this.asyncSubject.next("message2")
    this.asyncSubject.next("message3")
    this.asyncSubject.complete()

    this.asyncSubject.subscribe({
      next: (value) => console.log(`observer2 ${value}`)
    });

  }


}
