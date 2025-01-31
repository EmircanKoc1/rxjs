import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number
}

@Component({
  selector: 'app-ajax',
  imports: [],
  templateUrl: './ajax.component.html',
  styleUrl: './ajax.component.scss'
})
export class AjaxComponent
  implements OnInit {
  private readonly apiUrl: string = "https://jsonplaceholder.typicode.com/todos/1";

  ngOnInit(): void {
    ajax<Post>(this.apiUrl).pipe(
      map(response => response.response)
    ).subscribe({
      next: data => console.log(data),
      error: err => console.error(err)
    });


  }



}
