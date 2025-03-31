import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';

import {
  CarouselComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective,
} from '@coreui/angular';

@Component({
  selector: 'app-custom-carousel',
  standalone: true,
  imports: [
    // CommonModule,
    ThemeDirective,
    CarouselComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
  ],
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss'],
})
export class CustomCarouselComponent {
  @Input() images: string[] = [];
  @Input() title = '';
  @Input() description = '';

  // currentSlide = 0;
}
