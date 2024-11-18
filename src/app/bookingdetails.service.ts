import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes the service globally available
})
export class BookingDetailsService {
  private apiUrl = 'http://localhost:8085/api/single-rooms'; // Existing endpoint for hotel details
  private bookingUrl = 'http://localhost:8086/api/bookings'; // New backend URL for bookings

  constructor(private http: HttpClient) {}

  // Fetch hotel details by ID
  getHotelById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  postBookingData(bookingData: any): Observable<any> {
    // Sends the booking data as POST request to the backend
    return this.http.post<any>(this.bookingUrl, bookingData);
  }
}
