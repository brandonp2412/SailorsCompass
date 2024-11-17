import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
})
export class CardComponent {
  @Input() title: string = 'Card Title';
  @Input() description: string = 'This is a description of the card.';
  @Input() imageUrl: string = 'https://via.placeholder.com/300';

  @Output() primaryAction = new EventEmitter<void>();
  @Output() secondaryAction = new EventEmitter<void>();

  onPrimaryClick() {
    this.primaryAction.emit();
  }

  onSecondaryClick() {
    this.secondaryAction.emit();
  }
}
