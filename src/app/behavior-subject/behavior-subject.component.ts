import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  imports: [],
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.scss'
})
export class BehaviorSubjectComponent
  implements OnInit {

  private behaviorSubject = new BehaviorSubject<number>(0);



  ngOnInit(): void {

    this.behaviorSubject.subscribe(value => {
      console.log(`observer1 ${value}`);

    });

    this.behaviorSubject.next(1);
    this.behaviorSubject.next(2);


    this.behaviorSubject.subscribe(value => {
      console.log(`observer2 ${value}`);

    });





  }




}
