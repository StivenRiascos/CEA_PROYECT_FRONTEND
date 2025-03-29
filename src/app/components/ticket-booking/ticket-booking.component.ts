import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TicketType {
  type: string;
  price: number;
  count: number;
}

@Component({
  selector: 'app-ticket-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket-booking.component.html',
  styleUrl: './ticket-booking.component.css',
})
export class TicketBookingComponent {
  @Output() close = new EventEmitter<void>();

  isVisible = false;
  selectedDate: string = '';
  selectedTime: string = '';

  ticketTypes: TicketType[] = [
    { type: 'Adulto', price: 25000, count: 0 },
    { type: 'Niño', price: 15000, count: 0 },
    { type: 'Adulto Mayor', price: 18000, count: 0 },
    { type: 'Estudiante', price: 20000, count: 0 },
  ];

  availableTimes: string[] = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
  ];

  constructor() {
    // Establecer la fecha mínima como hoy
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    this.selectedDate = `${year}-${month}-${day}`;
  }

  open() {
    this.isVisible = true;
    document.body.classList.add('modal-open');
  }

  closeModal() {
    this.isVisible = false;
    document.body.classList.remove('modal-open');
    this.close.emit();
  }

  incrementTicket(ticket: TicketType) {
    ticket.count++;
  }

  decrementTicket(ticket: TicketType) {
    if (ticket.count > 0) {
      ticket.count--;
    }
  }

  getTotalTickets(): number {
    return this.ticketTypes.reduce((total, ticket) => total + ticket.count, 0);
  }

  getTotalPrice(): number {
    return this.ticketTypes.reduce(
      (total, ticket) => total + ticket.price * ticket.count,
      0
    );
  }

  formatPrice(price: number): string {
    return price.toLocaleString('es-CO');
  }

  reserveTickets() {
    if (this.getTotalTickets() === 0) {
      alert('Por favor seleccione al menos una entrada');
      return;
    }

    if (!this.selectedTime) {
      alert('Por favor seleccione un horario');
      return;
    }

    // Aquí iría la lógica para procesar la reserva
    const reservationDetails = {
      date: this.selectedDate,
      time: this.selectedTime,
      tickets: this.ticketTypes.filter((t) => t.count > 0),
      total: this.getTotalPrice(),
    };

    console.log('Detalles de la reserva:', reservationDetails);
    alert(
      '¡Reserva realizada con éxito! Total: $' +
        this.formatPrice(this.getTotalPrice()) +
        ' COP'
    );
    this.closeModal();
  }
}
