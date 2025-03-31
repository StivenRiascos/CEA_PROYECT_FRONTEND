import { Component, Input, Output, EventEmitter, ViewEncapsulation, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

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
    ThemeDirective,
    CarouselComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
  ],
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None // Permitir que los estilos afecten a componentes hijos
})
export class CustomCarouselComponent implements AfterViewInit {
  @Input() images: string[] = [];
  @Input() title = '';
  @Input() description = '';
  @Output() primaryButtonClick = new EventEmitter<void>();
  @Output() secondaryButtonClick = new EventEmitter<void>();

  constructor(private router: Router, private el: ElementRef) {}

  ngAfterViewInit() {
    // Eliminar cualquier elemento o estilo que pueda estar causando el espacio
    const carouselElement = this.el.nativeElement.querySelector('.carrusell');
    if (carouselElement) {
      // Asegurarse de que no haya padding o margin
      carouselElement.style.padding = '0';
      carouselElement.style.margin = '0';
      
      // Eliminar cualquier elemento que pueda estar causando el espacio
      const unwantedElements = carouselElement.querySelectorAll('.c-carousel-caption');
      unwantedElements.forEach((el: HTMLElement) => {
        el.style.display = 'none';
      });
    }
  }

  onPrimaryButtonClick(): void {
    this.primaryButtonClick.emit();
    if (!this.primaryButtonClick.observed) {
      this.router.navigate(['/visitanos']);
    }
  }

  onSecondaryButtonClick(): void {
    this.secondaryButtonClick.emit();
    if (!this.secondaryButtonClick.observed) {
      this.router.navigate(['/animales']);
    }
  }
}