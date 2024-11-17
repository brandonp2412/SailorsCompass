import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lesson4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lesson4.component.html',
  styleUrl: './lesson4.component.css',
})
export class Lesson4Component {
  name = '';
  showGreeting = false;

  // Make sure name isn't empty before greeting the user.
  greet() {
    this.showGreeting = true;

    // Hide the greeting after some time.
    // HINT: https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
  }
}
