import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  imports: [],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss'
})
export class FromEventComponent
  implements AfterViewInit {

  @ViewChild("button", {
    static: true,
    read: ElementRef
  }) buttonRef!: ElementRef;

  ngAfterViewInit(): void {

    fromEvent(this.buttonRef.nativeElement, "click").subscribe({
      next: val => console.log(val)
    });

    fromEvent(document, "keyup").subscribe({
      next: val => console.log(val)
    });

    fromEvent(document, "mousemove").subscribe({
      next: val => console.log(val)
    });
  }

}
