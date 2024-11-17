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
    const dogImageUrls = [
      'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTk2ODR8MHwxfGFsbHwxfHx8fHx8fHwxNjg4Mzk4NzI2&ixlib=rb-1.2.1&q=80&w=400',
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTk2ODR8MHwxfGFsbHwyfHx8fHx8fHwxNjg4Mzk4NzI2&ixlib=rb-1.2.1&q=80&w=400',
      'https://images.unsplash.com/photo-1507146426996-ef05306b995a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTk2ODR8MHwxfGFsbHw0fHx8fHx8fHwxNjg4Mzk4NzI2&ixlib=rb-1.2.1&q=80&w=400',
      'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTk2ODR8MHwxfGFsbHw1fHx8fHx8fHwxNjg4Mzk4NzI2&ixlib=rb-1.2.1&q=80&w=400',
    ];

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
