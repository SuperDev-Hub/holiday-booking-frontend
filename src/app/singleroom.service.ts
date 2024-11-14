// single-room.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleRoomService {
  private apiUrl = 'http://localhost:8085/api/single-rooms';

  constructor(private http: HttpClient) {}

  getHotels(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
