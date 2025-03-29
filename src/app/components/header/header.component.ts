// header.component.ts
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TicketBookingComponent } from '../ticket-booking/ticket-booking.component';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [CommonModule, RouterModule, TicketBookingComponent],
})
export class HeaderComponent {
  isMenuOpen = false;

  @ViewChild(TicketBookingComponent) ticketBooking!: TicketBookingComponent;

  constructor(private bookingService: BookingService) {
    this.bookingService.openBookingModal$.subscribe(() => {
      this.openTicketBooking();
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  openTicketBooking(): void {
    this.ticketBooking.open();
    this.closeMenu();
  }
}
