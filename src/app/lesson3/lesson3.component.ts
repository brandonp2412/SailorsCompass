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
  name = '';
  showGreeting = false;

  // Make sure name isn't empty before greeting the user.
  greet() {
    this.showGreeting = true;

    // Hide the greeting after some time.
    // HINT: https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
  }
}
