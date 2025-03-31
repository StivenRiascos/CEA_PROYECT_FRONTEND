import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animal-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent {
  @Input() animal: any;
  @Output() close = new EventEmitter<void>();

  closeDetail(): void {
    this.close.emit();
  }
}
