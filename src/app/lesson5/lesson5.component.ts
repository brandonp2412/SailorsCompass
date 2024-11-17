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
    'fox.jpg',
    'beaver.jpg',
    'bear.jpg',
    'chimp.jpg',
    'beaver2.jpg',
    'puma.jpg',
  ];
}
