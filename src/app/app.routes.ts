import { Routes } from '@angular/router';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { Lesson6Component } from './lesson6/lesson6.component';
import { Lesson7Component } from './lesson7/lesson7.component';
import { Lesson8Component } from './lesson8/lesson8.component';
import { Lesson9Component } from './lesson9/lesson9.component';
import { Lesson10Component } from './lesson10/lesson10.component';

export const routes: Routes = [
  { path: '', component: Lesson1Component },
  { path: 'lesson2', component: Lesson2Component },
  { path: 'lesson3', component: Lesson3Component },
  { path: 'lesson4', component: Lesson4Component },
  { path: 'lesson5', component: Lesson5Component },
  { path: 'lesson6', component: Lesson6Component },
  { path: 'lesson7', component: Lesson7Component },
  { path: 'lesson8', component: Lesson8Component },
  { path: 'lesson9', component: Lesson9Component },
  { path: 'lesson10', component: Lesson10Component },
];
