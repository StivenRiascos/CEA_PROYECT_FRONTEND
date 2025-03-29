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
    { name: 'Jaguar', image: 'jaguar.jpg' },
    { name: 'Mono Tití', image: 'mono-titi.jpg' },
    { name: 'Guacamaya', image: 'guacamaya.jpg' },
    { name: 'Anaconda', image: 'anaconda.jpg' },
  ];

  constructor(private bookingService: BookingService) {}

  openTicketBooking(): void {
    this.bookingService.openBookingModal();
  }
}
