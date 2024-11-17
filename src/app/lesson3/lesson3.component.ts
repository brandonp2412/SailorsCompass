import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lesson3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lesson3.component.html',
  styleUrl: './lesson3.component.css',
})
export class Lesson3Component {
  toBe = true;
  mrBeast = false;
}
