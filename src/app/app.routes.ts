import { Routes } from '@angular/router';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';

export const routes: Routes = [
  { path: '', component: Lesson1Component },
  { path: 'lesson2', component: Lesson2Component },
];
