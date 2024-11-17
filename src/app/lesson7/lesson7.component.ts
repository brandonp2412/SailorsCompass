import { Component, inject } from '@angular/core';
import { DogService } from '../dog.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-lesson7',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './lesson7.component.html',
  styleUrl: './lesson7.component.css',
})
export class Lesson7Component {
  dogService = inject(DogService);

  getRandomDogImage() {
    const dogImageUrls = ['dog1.jpg', 'cat.jpg', 'dog2.jpg', 'dog3.jpg'];

    const randomIndex = Math.floor(Math.random() * dogImageUrls.length);
    return dogImageUrls[randomIndex];
  }

  popDog() {
    this.dogService.dogs.pop();
  }

  addDog() {
    let randomDog = this.getRandomDogImage();
    this.dogService.dogs.push(randomDog);
  }
}
