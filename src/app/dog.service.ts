import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  dogs: string[] = [
    'https://upload.wikimedia.org/wikipedia/commons/3/33/Dogs_nose.jpg?20160418234126',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/DogDewClawTika1_wb.jpg/1359px-DogDewClawTika1_wb.jpg?20160301191856',
    'https://upload.wikimedia.org/wikipedia/commons/a/aa/Flat_Coated_Retriever_-_black.jpg?20070804202900',
  ];

  addDog(url: string) {
    this.dogs.push(url);
  }
}
