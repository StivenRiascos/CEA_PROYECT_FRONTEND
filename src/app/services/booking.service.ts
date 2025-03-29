// booking.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private openBookingModalSource = new Subject<void>();

  openBookingModal$ = this.openBookingModalSource.asObservable();

  openBookingModal() {
    this.openBookingModalSource.next();
  }
}
