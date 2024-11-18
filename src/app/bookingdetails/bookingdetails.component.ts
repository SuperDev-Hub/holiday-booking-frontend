import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingDetailsService } from '../bookingdetails.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking-details',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css'],
})
export class BookingDetailsComponent implements OnInit {
  hotelName: string = '';
  room: any = {};
  checkInDate: string = '';
  checkOutDate: string = '';
  guests: number = 1;
  name: string = '';
  phone: string = '';
  rooms: number = 1;
  paymentMethod: string = 'cash'; // 'cash' or 'online'
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';

  constructor(
    private route: ActivatedRoute,
    private bookingDetailsService: BookingDetailsService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookingDetailsService.getHotelById(Number(id)).subscribe(
        (data) => {
          this.hotelName = data.hotelName;
          this.room = { price: data.price, discount: data.discount || null };
        },
        (error) => {
          console.error('Error fetching hotel details:', error);
        }
      );
    }
  }

  // Method to handle form submission
  bookRoom() {
    // Check if required fields are filled in
    if (
      !this.name ||
      !this.phone ||
      !this.rooms ||
      !this.checkInDate ||
      !this.checkOutDate ||
      !this.guests ||
      (this.paymentMethod === 'online' && (!this.cardNumber || !this.expiryDate || !this.cvv))
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    // Booking data excluding sensitive payment information
    const bookingData = {
      hotelName: this.hotelName,
      name: this.name,
      phone: this.phone,
      rooms: this.rooms,
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
      guests: this.guests,
      paymentMethod: this.paymentMethod,
      // Only include card details if payment method is online
      cardNumber: this.paymentMethod === 'online' ? this.cardNumber : null,
      expiryDate: this.paymentMethod === 'online' ? this.expiryDate : null,
      cvv: this.paymentMethod === 'online' ? this.cvv : null,
    };

    // Post the booking data to the backend
    this.bookingDetailsService.postBookingData(bookingData).subscribe(
      (response) => {
        console.log('Booking successful:', response);
        alert('Booking confirmed!');
      },
      (error) => {
        console.error('Booking error:', error);
        alert('Error confirming booking.');
      }
    );
  }
}
