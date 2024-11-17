import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson9',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lesson9.component.html',
  styleUrl: './lesson9.component.css',
})
export class Lesson9Component {
  title = 'Pipes';
  now = new Date();
  username = 'CamelJoe123';
  sentence = 'this sentence isnt formatted for titles';
}
