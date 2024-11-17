import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  dogs: string[] = ['black-retriever.jpg', 'dog-foot.jpg', 'nose.jpg'];

  addDog(url: string) {
    this.dogs.push(url);
  }
}
