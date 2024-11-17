import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-lesson5',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './lesson5.component.html',
  styleUrl: './lesson5.component.css',
})
export class Lesson5Component {
  animals = [
    'https://upload.wikimedia.org/wikipedia/commons/e/e0/Looking_Foxy.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/599px-American_Beaver.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg',
    'https://a-z-animals.com/media/animals/images/original/chimpanzee1.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFnQAF-KSal9Kxb_XQJGf8pQJej6fGeBrhw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvh6A1BBIhEiuicKgRlxMQu4axVtE3rdqkg&s',
  ];
}
