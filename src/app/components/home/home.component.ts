import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { CustomCarouselComponent } from '../../components/custom-carousel/custom-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CustomCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  featuredAnimals = [
    { name: 'Jaguar', image: 'jaguar.jpg', slug: 'jaguar' },
    { name: 'Mono Tití', image: 'monotiti.jpg', slug: 'monotiti' },
    { name: 'Guacamaya', image: 'guacamaya.jpg', slug: 'guacamaya' },
    { name: 'Anaconda', image: 'Anaconda.jpg', slug: 'Anaconda' },
  ];

  carouselImages = [
    '../../assets/images/cea.jpg',
    '../../assets/images/img3.jpg',
    '../../assets/images/img4.jpg',
  ];
  
  constructor(private bookingService: BookingService, private router: Router) {}
  
  openTicketBooking(): void {
    this.bookingService.openBookingModal();
  }
  
  navigateToAnimals(): void {
    this.router.navigate(['/animales']);
  }
}
