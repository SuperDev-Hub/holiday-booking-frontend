import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private apiUrl = 'http://localhost:8085/api/single-rooms';
  private baseUrl = 'http://localhost:8087/api' ;

  constructor(private http: HttpClient) {}

  getRoomById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }


  getRoomReviews(roomId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/rooms/${roomId}/reviews`);
  }
  
  postRoomReview(review: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/rooms/${review.roomId}/reviews`, review);
  }
}
