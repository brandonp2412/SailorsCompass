import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

interface Post {
  title: string;
  body: string;
}

@Component({
  selector: 'app-lesson8',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './lesson8.component.html',
  styleUrl: './lesson8.component.css',
})
export class Lesson8Component {
  constructor(private http: HttpClient) {}

  posts: Post[] = [];
  loading = false;

  getPosts() {
    this.loading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((value: any) => {
        this.loading = false;
        return (this.posts = value);
      });
  }
}
