import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent
  implements OnInit {

  private subject: Subject<string> = new Subject<string>();

  ngOnInit(): void {

    this.subject.subscribe(value => {
      console.log(`observer1 ${value}`);
    });

    this.subject.subscribe(value => {
      console.log(`observer2 ${value}`);

    });

    this.subject.next("Message1");
    
    
    this.subject.subscribe(value => {
      console.log(`observer3 ${value}`);
    });
    this.subject.next("Message2");

    // setInterval(() => {
    //   this.subject.next("Hello");
    //   this.subject.next("World");
    // }, 1000);




  }

}
