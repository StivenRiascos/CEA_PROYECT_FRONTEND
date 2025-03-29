// home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  featuredAnimals = [
    { name: 'Jaguar', image: 'jaguar.jpg', slug: 'jaguar' },
    { name: 'Mono Tití', image: 'monotiti.jpg', slug: 'monotiti' },
    { name: 'Guacamaya', image: 'guacamaya.jpg', slug: 'guacamaya' },
    { name: 'Anaconda', image: 'Anaconda.jpg', slug: 'Anaconda' },
  ];

  constructor(private bookingService: BookingService) {}

  openTicketBooking(): void {
    this.bookingService.openBookingModal();
  }
}
